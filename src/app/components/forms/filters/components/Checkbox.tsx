'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilters } from '@/app/store/slices/catalogSlice';
import { RootState, AppDispatch } from '@/app/store/eventList';

interface CheckboxFilterProps {
    text: string;
    filterType: 'tags' | 'address_name' | 'address_zipcode' | 'address_city';
    className: string;
}

interface Filters {
    [key: string]: string[] | undefined;
}

export default function CheckboxFilter(props: CheckboxFilterProps) {
    const { filters } = useSelector((state: RootState) => state.catalog) as { filters: Filters };
    const currentFilters = filters[props.filterType] ?? [];
    const [isChecked, setIsChecked] = useState<boolean>(currentFilters.length > 0 && currentFilters.includes(props.text));
    const dispatch = useDispatch<AppDispatch>();

    const updateStore = () => {
        setIsChecked(!isChecked);
        dispatch(updateFilters({ filterType: props.filterType, text: props.text }));
    };

    return (
        <div
            className={`${props.className} hover:cursor-pointer inline-flex items-center text-xs`}
        >
            <label className="flex items-center cursor-pointer relative py-1 mr-2">
                <input
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-accent checked:border-slate-800"
                    defaultChecked={isChecked}
                    onChange={updateStore}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </span>
            </label>
            { props.text }
        </div>
    );
}
