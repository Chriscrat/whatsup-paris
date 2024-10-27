'use client';

import List from '@/app/components/eventsList/views/List';
import Map from '@/app/components/eventsList/views/Map';

type EventViewProps = {
    view:  string;
};

export default function EventsList(props: EventViewProps) {
    return (
        <div className='flex flex-grow h-full min-h-0 w-full'>
            <Map className={props.view === 'map' ? '' : 'hidden'}/>
            <List className={props.view === 'list' ? '' : 'hidden'}/>
        </div>
    );
};
