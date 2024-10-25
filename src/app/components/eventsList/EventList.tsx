'use client';

import React, { useState } from 'react';

import List from '@/app/components/eventsList/views/List';
import Map from '@/app/components/eventsList/views/Map';
import Tooltip from '@/app/components/Tooltip';

export default function EventsList() {
    const [eventView, setEventView] = useState('map');

    const toggleDisplayMore = (view:string) => {
        setEventView(view);
    };

    return (
        <div className='flex-grow h-full min-h-0 w-full'>
            <div className='flex flex-row justify-end h-full py-4'>
                <Tooltip text="Carte">
                    <button
                        className={`${eventView === 'map' ? 'bg-primary' : 'bg-accent-theme-100'} flex rounded-md rounded-r-none py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg hover:bg-primary active:shadow-none`}
                        onClick={() => toggleDisplayMore('map')}
                    >
                        <span className="material-symbols-outlined">
                            map
                        </span>
                    </button>
                </Tooltip>
                <Tooltip text="Liste">
                    <button
                            className={`${eventView === 'list' ? 'bg-primary' : 'bg-accent-theme-100'} flex rounded-md rounded-l-none py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg hover:bg-primary active:shadow-none`}
                            onClick={() => toggleDisplayMore('list')}
                        >
                        <span className="material-symbols-outlined">
                            view_list
                        </span>
                    </button>
                </Tooltip>
            </div>

            <div className='w-full'>
                <Map className={eventView === 'map' ? '' : 'hidden'}/>
                <List className={eventView === 'list' ? '' : 'hidden'}/>
            </div>
        </div>
    );
};
