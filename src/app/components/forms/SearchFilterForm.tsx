import GroupCheckboxFilter from '@/app/components/forms/filters/GroupCheckboxFilter';
import { getFacetsList } from '@/app/api/openParisApi';
import { useEffect, useState } from 'react';

type SearchFilterFormProps = {
    className?: string;
};

type Filter = {
    id: string;
    name: string;
};

type FiltersList = { 
    [key: string]: Filter[];
}

type FilterType = 'tags' | 'address_name' | 'address_zipcode' | 'address_city';

export default function SearchFilterForm(props: SearchFilterFormProps) {
    const [filters, setFilters] = useState<FiltersList>({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFacetsList();
            setFilters(data);
        };
        fetchData();
    }, []);

    return (
        <div className={`${props.className} flex-col`}>
            {Object.keys(filters).map((filterKey) => (
                <GroupCheckboxFilter
                    key={filterKey}
                    title={filterKey as FilterType}
                    filters={filters[filterKey]}
                />
            ))}
        </div>
    );
}
