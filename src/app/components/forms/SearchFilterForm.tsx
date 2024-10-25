import GroupCheckboxFilter from '@/app/components/forms/filters/GroupCheckboxFilter';
import {getFacetsList} from '@/app/api/openParisApi';

export default async function SearchFilterForm() {    
    const filterList = await getFacetsList();

    return (
        <div className="flex flex-col w-1/5">
            <h2 className="text-4xl font-bold">Filtres</h2>
            {Object.keys(filterList).map((filterKey) => (
                <GroupCheckboxFilter
                    key={filterKey}
                    title={filterKey}
                    filters={filterList[filterKey]}
                />
            ))}
        </div>
    ); 
}
