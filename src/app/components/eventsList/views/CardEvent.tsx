type CardEventProps = {
    image: string;
    title: string;
    place: string;
    dateStart: string;
    dateEnd: string;
    description: string;
    className?: string;
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
        <div className={`${props.className} flex flex-col my-2 w-80 relative h-[300px] z-0 rounded-xl bg-accent overflow-hidden `}>
            <div
                className={`group bg-no-repeat bg-cover h-[300px]`}
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-between flex-col gap-15">
                    <h2 className="group-hover:hidden text-xl font-bold text-white p-6">{props.title}</h2>
                    {props.place ? (
                        <p className="group-hover:hidden text-white flex w-full py-2 pr-8 justify-end text-sm items-center">
                            <span className="material-symbols-outlined text-lg pr-2">location_city</span>
                            {props.place}
                        </p>
                    ) : (
                        ''
                    )}
                    <div
                        className="p-8 group-hover:block hidden h-[180px] text-ellipsis text-white overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: props.description }}
                    />
                </div>
            </div>
            <div className="flex justify-around items-center px-2 py-2 text-md">
                {props.dateStart ? (
                    <p className="text-black flex items-center p-2 text-center ">
                        <span className="material-symbols-outlined text-4xl">date_range</span>
                        {formatDate(props.dateStart)}
                    </p>
                ) : (
                    ''
                )}
                {props.dateEnd ? (
                    <>
                        <span className="material-symbols-outlined text-4xl">trending_flat</span>
                        <p className="text-black flex p-2">
                            {formatDate(props.dateEnd)}
                        </p>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
