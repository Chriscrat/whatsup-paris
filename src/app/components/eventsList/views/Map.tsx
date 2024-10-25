import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buildMapUrl } from '@/app/store/slices/catalogSlice';
import { RootState, AppDispatch } from '@/app/store/eventList';

interface MapProps {
    className: string,
};

export default function Map(props: MapProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [mapUrl, setMapUrl] = useState('');

    const { catalogData } = useSelector((state: RootState) => state.catalog);

    useEffect(() => {
        const url = dispatch(buildMapUrl());
        setMapUrl(url);
    }, [dispatch, catalogData]);

    return (
        mapUrl !== '' && (
            <iframe
                src={mapUrl} 
                className={`${props.className} w-full`}
                height={1000}
            />
        )
    );
};
