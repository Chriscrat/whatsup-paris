'use client';

import React, { useState } from 'react';

import SearchFilterForm from '@/app/components/forms/SearchFilterForm';
import EventsList from '@/app/components/eventsList/EventList';
import Tooltip from '@/app/components/Tooltip';
import Sidebar from '@/app/components/Sidebar';

export default function SearchEngine() {
    const [eventView, setEventView] = useState('map');
    const [isSidebarOpened, setSidebarStatus] = useState(false);

    const toggleView = (view:string) => {
        setEventView(view);
    };

    const toggleSidebar = () => {
        setSidebarStatus(!isSidebarOpened);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const sidebarElement = document.querySelector('.sidebar-class'); // Replace with actual sidebar class or ID
        if (sidebarElement && !sidebarElement.contains(event.target as Node)) {
            setSidebarStatus(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex rounded-xl p-2 sm:p-6 xs:p-6 shadow-lg bg-theme-900 flex-col">
            <div className='flex flex-row justify-between h-full py-4'>
                <div className='flex'>
                    <h2 className="text-4xl hidden sm:block font-bold">Filtres</h2>
                    <button
                        className="flex md:hidden bg-accent-theme-300 rounded-md py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg hover:bg-primary active:shadow-none"
                        onClick={() => toggleSidebar()}
                    >
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
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
                <Sidebar isDisplayed={isSidebarOpened}>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Filtres</h2>
                        <SearchFilterForm />
                    </div>
                </Sidebar>
                <SearchFilterForm className={`w-1/5 hidden sm:flex xs:flex`}/>
                <EventsList view={eventView}/>
            </div>
        </div>
    );
}