'use client';

import React, { useState } from 'react';

import SearchFilterForm from '@/app/components/forms/SearchFilterForm';
import EventsList from '@/app/components/eventsList/EventList';
import Tooltip from '@/app/components/Tooltip';

export default function SearchEngine() {
    const [eventView, setEventView] = useState('map');

    const toggleView = (view:string) => {
        setEventView(view);
    };

    return (
        <div className="flex rounded-xl p-2 sm:p-6 xs:p-6 shadow-lg bg-theme-900 flex-col">
            <div className='flex flex-row justify-between h-full py-4'>
                <div className='flex'>
                    <h2 className="text-4xl hidden sm:block font-bold">Filtres</h2>
                </div>
                <div className='flex'>
                    <Tooltip text="Carte">
                        <button
                            className={`${eventView === 'map' ? 'bg-primary' : 'bg-accent-theme-100'} flex rounded-md rounded-r-none py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg hover:bg-primary active:shadow-none`}
                            onClick={() => toggleView('map')}
                        >
                            <span className="material-symbols-outlined">
                                map
                            </span>
                        </button>
                    </Tooltip>
                    <Tooltip text="Liste">
                        <button
                            className={`${eventView === 'list' ? 'bg-primary' : 'bg-accent-theme-100'} flex rounded-md rounded-l-none py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg hover:bg-primary active:shadow-none`}
                            onClick={() => toggleView('list')}
                        >
                            <span className="material-symbols-outlined">
                                view_list
                            </span>
                        </button>
                    </Tooltip>
                </div>
            </div>
            <div className='flex flex-grow h-full min-h-0 w-full'>
                <SearchFilterForm/>
                <EventsList view={eventView}/>
            </div>
        </div>
    );
}