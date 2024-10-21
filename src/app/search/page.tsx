type EventsDataset = {
    total_count: number
    results: Array<object>
};

export default async function SearchPage() {
    const getEventsList = async () => {
        const res = await fetch(`${process.env.QUEFAIREAPARIS_API_URL}?limit=20`);
        return res.json();
    };

    const eventsList:EventsDataset = await getEventsList();

    return (
        <div>
            <h1>Event :  {eventsList.total_count}</h1>
            <ul>
                {eventsList.results.map((event) => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
};
