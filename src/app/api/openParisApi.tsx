const OPENDATA_API_URL='https://opendata.paris.fr';
const MAP_API=`${OPENDATA_API_URL}/explore/embed/dataset/que-faire-a-paris-/map`;
const FACETS_API=`${OPENDATA_API_URL}/api/records/1.0/search`;
const CATALOG_API=`${OPENDATA_API_URL}/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records`;

const CATALOG_DATA_LIMIT = 100;

const FILTERS_ENUM = [
    'tags',
    'address_name',
    'address_zipcode',
    'address_city',
];

type Filter = {
    id: string;
    name: string;
};

const getLocale = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem('locale') || 'fr';
    }
    return 'fr';
};

const locale = getLocale();

type FilterList = { [key: string]: string[] };

const getFormattedFilters = (filters: FilterList, view: string): string => {
    const separator = view === 'list' ? ':' : '=';
    return filters ? `&` + Object.keys(filters).map((filter) => {
        return filters[filter].map((value: string) => {
            if (view === 'list') {
                return `refine=${filter}${separator}"${value}"`;
            } else {
                return `refine.${filter}${separator}${value}`;
            }
        }).join('&');
    }).join('&') : '';
}

const getMapUrl = (filters: FilterList): string => {
    const additionnalFilters = getFormattedFilters(filters, 'map')
    const disjunctiveList = '?disjunctive.tags&disjunctive.address_name&disjunctive.address_zipcode&disjunctive.address_city&disjunctive.pmr&disjunctive.blind&disjunctive.deaf&disjunctive.price_type&disjunctive.access_type&disjunctive.programs'
    const location = '&location=9,48.73355,2.45819';
    return encodeURI(`${MAP_API}/${disjunctiveList}${location}${additionnalFilters}`);
}

// const getFacetsList = async (): Promise<{ [key: string]: Filter[] }> => {
const getFacetsList = async (): Promise<{ [key: string]: Filter[] }> => {
    const disjunctiveFilters = FILTERS_ENUM.map((filter, index) => (index >= 1 ? '&' : '?') + `disjunctive.${filter}=true`).join('');
    const dataset = '&dataset=que-faire-a-paris-';
    const timezone = '&timezone=Europe%2FParis';
    const language = `&lang=${locale}`;

    const facetsApiUrl = `${FACETS_API}${disjunctiveFilters}`
        + '&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facetsort.tags=alphanum&facetsort.address_name=alphanum'
        + `&facetsort.address_zipcode=alphanum&facetsort.address_city=alphanum${dataset}`
        + `${timezone}${language}`;
    const result = await fetch(facetsApiUrl);

    const facetsList = await result.json();
    const filterList:{ [key: string]: Array<Filter> } = {};
    FILTERS_ENUM.map((filter) => {
        const filterGroup = facetsList.facet_groups.find((facet:Filter) => facet.name === filter);
        if (filterGroup) {
            filterList[filterGroup.name] = filterGroup.facets;
        }
    });
    return filterList;
};

const getCatalog = async (limit:number, filters:FilterList): Promise<{ [key: string]: Filter[] }> => {
    const additionnalFilters = getFormattedFilters(filters, 'list');
    const catalogApiUrl = encodeURI(`${CATALOG_API}?limit=${limit > CATALOG_DATA_LIMIT ? CATALOG_DATA_LIMIT : limit}&${additionnalFilters}`);
    const result = await fetch(catalogApiUrl);
    const catalog = await result.json();
    return catalog;
};

export {
    getMapUrl,
    getFacetsList,
    getCatalog
};
