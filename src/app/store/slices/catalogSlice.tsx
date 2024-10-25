import _ from "lodash";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCatalog, getMapUrl } from '@/app/api/openParisApi';
import { AppDispatch } from '@/app/store/eventList';

type Filter = {
    name: string;
    id: string;
    url: string;
    title: string;
    address_city: string;
    cover_url: string;
    description: string;
    date_start: string;
    date_end: string;
};

type newFilter = {
    filterType: 'tags' | 'address_name' | 'address_zipcode' | 'address_city',
    text: string
};

// Define an interface for the catalog state
interface CatalogState {
    catalogData: { [key: string]: Filter[] };
    filters: { tags?: string[]; address_name?: string[]; address_zipcode?: string[]; address_city?: string[] };
    loading: boolean;
    error: string | null;
    limit: number;
};

// Create an async thunk to fetch catalog data
const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async (_, { getState }) => {
    const state = getState() as { catalog: CatalogState }; // Get the current state
    const response = await getCatalog(state.catalog.limit, state.catalog.filters); // Use the getCatalog function with limit from current state
    return response; // This will be returned as the payload in the Redux action
});

const updateFilters = (newFilter: newFilter) => (dispatch: AppDispatch, getState: () => { catalog: CatalogState }) => {
    const state = getState(); 
    const updatedFilters = _.cloneDeep(state.catalog.filters) ?? {};
    const newFilterType = newFilter.filterType;
    const newFilterText = newFilter.text;

    if (updatedFilters && Object.keys(updatedFilters).includes(newFilterType)) {
        const currentFilter = updatedFilters[newFilterType] ?? [];
        if (currentFilter.length && currentFilter.includes(newFilterText)) {
            const indexToRemove = currentFilter.indexOf(newFilterText);
            currentFilter.splice(indexToRemove, 1);
        } else {
            currentFilter.push(newFilterText);
        }
    } else {
        updatedFilters[newFilter.filterType] = [newFilterText];
    }

    // Dispatch an action to update the filters
    dispatch(catalogSlice.actions.setFilters(updatedFilters));

    // Dispatch fetchCatalog to update the catalog data with new filters
    dispatch(fetchCatalog());
};

const buildMapUrl = () => (dispatch:AppDispatch, getState: () => { catalog: CatalogState }): string => {
    const state = getState() as { catalog: CatalogState }; // Get the current state
    return getMapUrl(state.catalog.filters); // Build and return the URL using the filters from the state
};

// Initial state
const initialState: CatalogState = {
    catalogData: {},
    loading: false,
    error: null,
    filters: {},
    limit: 20,
};

const CATALOG_DATA_LIMIT = 100;
let firstLoad = true;

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                if (state.limit < CATALOG_DATA_LIMIT) {
                    state.loading = firstLoad ? false : true;
                    state.error = null;
                    firstLoad = false;
                } else {
                    state.error = 'Limite de chargement de données atteinte';
                }
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.loading = false;
                state.limit += 20;
                state.catalogData = action.payload;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch catalog';
            });
    },
});

export default catalogSlice.reducer;

export {
    fetchCatalog,
    updateFilters,
    buildMapUrl,
};
