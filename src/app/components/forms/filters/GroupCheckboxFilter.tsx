'use client';

import React, { useState } from 'react';
import Checkbox from '@/app/components/forms/filters/components/Checkbox';

interface GroupCheckboxFilterProps {
    title: string,
    filters: Array<object>,
}

export default function GroupCheckboxFilter(props: GroupCheckboxFilterProps) {
    const MAX_FILTERS = 5;
    const [displayMore, setDisplayMore] = useState(false);

    const toggleDisplayMore = () => {
        setDisplayMore(prevState => !prevState);
    };

    return (
        <div className="flex flex-col py-4">
            <h2 className='text-2xl text-accent'>{props.title}</h2>
            {props.filters.map((filter, index) => (
                <Checkbox
                    key={index}
                    text={filter.name}
                    className={index >= MAX_FILTERS && !displayMore ? 'hidden' : ''}
                />
            ))}
            {props.filters.length > MAX_FILTERS && (
                <button
                    className="text-md bg-accent rounded-md w-24 py-1 mt-2 text-center"
                    onClick={toggleDisplayMore}
                >
                    {displayMore ? 'Voir moins' : 'Voir plus'}
                </button>
            )}
        </div>
    );
}
