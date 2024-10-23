'use client';

import React, { useEffect, useState } from 'react';

import CardEvent from "@/app/components/eventsList/views/CardEvent";
import { getCatalog } from '@/app/api/openParisApi';

type event = {
    id: string,
    url: string,
    cover_url: string,
    title: string,
    date_start: string,
    date_end: string,
    description: string,
    address_name: string,
    address_zipcode: string,
    address_city: string,
}

interface ListProps {
    className: string,
}

const List = (props: ListProps) => {
    const [data, setData] = useState<any[]>([]); // To store fetched data
    const [limit] = useState(20); // Set the limit of items per API request
    const [offset, setOffset] = useState(20); // Track the current offset
    const [isLoading, setIsLoading] = useState(false); // To prevent multiple calls during scrolling
    const MAX_EVENT_LIMIT = 100;
    let newData = Array<event>();
    let filters = {'tags': ['BD', 'Cirque']};

    // Function to handle fetching more data
    const loadMoreData = async () => {
        if (!isLoading) {
            setIsLoading(true); // Set loading to true while fetching
            if (limit < MAX_EVENT_LIMIT) {
                setOffset((prevOffset) => prevOffset + limit); // Update the offset for the next call
                const response = await getCatalog(offset, filters);
                newData = response.results ? response.results.map((item: any) => ({
                    id: item.id,
                    url: item.url,
                    cover_url: item.cover_url,
                    title: item.title,
                    date_start: item.date_start,
                    date_end: item.date_end,
                    description: item.description,
                    address_name: item.address_name,
                    address_zipcode: item.address_zipcode,
                    address_city: item.address_city,
                })) : [];
                setData(newData); // Append the new data
            }
            setIsLoading(false); // Set loading to false after fetching
        }
    };

    // Function to detect if the user has scrolled to the bottom
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
            // When near the bottom, load more data
            loadMoreData();
        }
    };

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading, offset]); // Dependency on isLoading and offset to avoid unnecessary calls

    useEffect(() => {
        loadMoreData(); // Load initial data on component mount
    }, []); 
    console.log(data);
    return (
        <div className={`${props.className} flex justify-center flex-wrap gap-4`}>
            {data ? data.map(event => (
                <CardEvent
                    key={event.id}
                    title={event.title}
                    place={event.address_city}
                    image={event.cover_url}
                    description={event.description}
                    dateStart={event.date_start}
                    dateEnd={event.date_end}
                /> 
            )) : '' }
        </div>
    );
};

export default List;
