type CardEventProps = {
    image: string,
    title: string,
    url: string,
    place: string,
    dateStart: string,
    dateEnd: string,
    description: string,
};

export default function CardEvent(props: CardEventProps) {
    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const literal = 'à';
        return `${day}/${month}/${year} ${literal} ${hours}h${minutes}`;
    }

    return (
        <div className="group/card flex flex-col w-[320px] md:w-[192px] relative h-[192px] z-0 rounded-xl bg-secondary hover:bg-primary overflow-hidden transform duration-300 hover:shadow-lg hover:scale-110 md:hover:scale-150 hover:z-10">
            <div
                className="bg-no-repeat bg-cover h-[160px] w-[320px] md:w-[192px]"
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-between flex-col">
                    <h2 className="group-hover/card:hidden text-sm font-bold text-white pt-4 px-2">{props.title}</h2>
                    {props.place ? (
                        <p className="group-hover/card:hidden text-white flex w-full justify-end text-sm items-center pr-4">
                            <span className="material-symbols-outlined text-lg pr-1">location_city</span>
                            {props.place}
                        </p>
                    ) : (
                        ''
                    )}
                    <div
                        className="absolute left-0 top-0 w-full pt-4 px-2 hidden h-[160px] text-ellipsis text-white text-sm overflow-hidden group-hover/card:block group-hover/card:line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: props.description }}
                    />
                </div>
            </div>
            <div className="group-hover/card:hidden flex justify-around items-center text-md md:text-xs">
                {props.dateStart ? (
                    <p className="text-black flex items-center p-2 text-center ">
                        {formatDate(props.dateStart)}
                    </p>
                ) : (
                    ''
                )}
                {props.dateEnd ? (
                    <>
                        <span className="material-symbols-outlined">trending_flat</span>
                        <p className="text-black flex p-2">
                            {formatDate(props.dateEnd)}
                        </p>
                    </>
                ) : (
                    ''
                )}
            </div>
            <a 
                className="group/event-button group-hover/card:flex hidden transition-all duration-500 bg-gradient-to-r to-green-200 via-orange-500 from-orange-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-md md:text-xs items-center flex-grow justify-around"
                href={props.url}
                target="blank"
            >
                Visiter l&apos;évènement
                <span className="material-symbols-outlined group-hover/event-button:animate-bounce">
                    captive_portal
                </span>
            </a>
        </div>
    );
}
