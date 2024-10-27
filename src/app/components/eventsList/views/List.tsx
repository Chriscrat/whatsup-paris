'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '@/app/store/slices/catalogSlice';
import { RootState, AppDispatch } from '@/app/store/eventList';

import CardEvent from '@/app/components/eventsList/views/CardEvent';
import Toast from '@/app/components/Toast';

interface ListProps {
    className: string;
}

const List = (props: ListProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { catalogData, loading, error } = useSelector((state: RootState) => state.catalog);
    useEffect(() => {
        // Dispatch the fetchCatalog thunk with a limit and some filters
        dispatch(fetchCatalog());
    }, [dispatch]);

    const BOTTOM_OFFSET = 250;
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - BOTTOM_OFFSET && !loading) {
            dispatch(fetchCatalog());
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className={`${props.className} flex justify-center lg:justify-start flex-wrap gap-4`}>
            {catalogData &&
                catalogData.results &&
                catalogData.results.map((event) => (
                    <CardEvent
                        key={event.id}
                        url={event.url}
                        title={event.title}
                        place={event.address_city}
                        image={event.cover_url}
                        description={event.description}
                        dateStart={event.date_start}
                        dateEnd={event.date_end}
                    />
                ))}

            {
                <Toast trigger={loading}>
                    <div className="flex items-center">
                        <span className="animate-spin material-symbols-outlined mr-2">hourglass_empty</span>
                        Chargement de nouveaux évènements ...
                    </div>
                </Toast>
            }

            {error && (
                <Toast
                    trigger={true}
                    duration={3000}
                    type='info'
                >
                    <div className="flex items-center">
                        <span className="material-symbols-outlined mr-2">error</span>
                        {error}
                    </div>
                </Toast>
            )}
        </div>
    );
};

export default List;
