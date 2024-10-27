'use client';

import React, { useState } from 'react';
import Checkbox from '@/app/components/forms/filters/components/Checkbox';

interface GroupCheckboxFilterProps {
    title: 'tags' | 'address_name' | 'address_zipcode' | 'address_city',
    filters: Array<{ name: string }>,
}

export default function GroupCheckboxFilter(props: GroupCheckboxFilterProps) {
    const MAX_FILTERS = 5;
    const [displayMore, setDisplayMore] = useState(false);

    const toggleDisplayMore = () => {
        setDisplayMore(prevState => !prevState);
    };

    return (
        <div className="flex flex-col py-4">
            <h2 className='text-xl text-accent pb-2'>{props.title}</h2>
            {props.filters.map((filter, index) => (
                <Checkbox
                    key={index}
                    filterType={props.title}
                    text={filter.name}
                    className={`transition-all duration-500 ${index >= MAX_FILTERS && !displayMore ? 'max-h-0 overflow-hidden' : 'max-h-10'}`}
                />
            ))}
            {props.filters.length > MAX_FILTERS && (
                <button
                    className="flex items-center justify-center text-xs bg-accent rounded-md w-24 py-1 mt-2 shadow-sm"
                    onClick={toggleDisplayMore}
                >
                    {displayMore ? <>
                            <span className="material-symbols-outlined text-sm">
                                keyboard_double_arrow_up
                            </span>
                            Voir moins
                        </>
                    : 
                        <>
                            <span className="material-symbols-outlined text-sm">
                                keyboard_double_arrow_down
                            </span>
                            Voir plus
                        </>
                    }
                </button>
            )}
        </div>
    );
}
