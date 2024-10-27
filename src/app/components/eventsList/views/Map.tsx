'use client';

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

    
    const getHeight = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) {
                return 1000;
            } else if (window.innerWidth >= 768) {
                return 800;
            } else {
                return 450;
            }
        }
        return 450; // default height for server-side rendering
    };

    const [height, setHeight] = useState(450);

    useEffect(() => {
        setHeight(getHeight());
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setHeight(getHeight());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        mapUrl !== '' && (
            <iframe
                src={mapUrl} 
                className={`${props.className} w-full`}
                height={height}
            />
        )
    );
};
