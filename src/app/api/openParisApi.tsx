const OPENDATA_API_URL='https://opendata.paris.fr';
const MAP_API=`${OPENDATA_API_URL}/explore/embed/dataset/que-faire-a-paris-/map/?basemap=jawg.dark&location=13,48.86003,2.35004`;
const FACETS_API=`${OPENDATA_API_URL}/api/records/1.0/search`;
const CATALOG_API=`${OPENDATA_API_URL}/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records`;

const FILTERS_ENUM = [
    'tags',
    'address_name',
    'address_zipcode',
    'address_city',
];

type Filter = {
    name: string,
};

export const getFacetsList = async (): Promise<{ [key: string]: Filter[] }> => {
    const disjunctiveFilters = FILTERS_ENUM.map((filter, index) => (index >= 1 ? '&' : '?') + `disjunctive.${filter}=true`).join('');
    const dataset = '&dataset=que-faire-a-paris-';
    const timezone = '&timezone=Europe%2FParis';
    const language = '&lang=fr';

    const facetsApiUrl = `${process.env.FACETS_API}${disjunctiveFilters}`
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

export const getCatalog = async (limit:number, filters:Array<object>): Promise<{ [key: string]: Filter[] }> => {
    const additionnalFilters = filters ? Object.keys(filters).map((filter, index) => {
        return filters[filter].map((value) => `refine.${filter}=${value}`).join('&');
    }) : '';
    console.log(additionnalFilters)
    const catalogApiUrl = `${CATALOG_API}?limit=${limit > 100 ? 100 : limit}&${additionnalFilters}`;
    const result = await fetch(catalogApiUrl);
    const catalog = await result.json();
    return catalog;
};
