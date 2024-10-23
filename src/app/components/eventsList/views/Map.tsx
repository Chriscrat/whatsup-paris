interface MapProps {
    className: string,
}

export default function Map(props: MapProps) {
    const OPENDATA_API_URL='https://opendata.paris.fr';
    const MAP_API=`${OPENDATA_API_URL}/explore/embed/dataset/que-faire-a-paris-/map/?basemap=jawg.dark&location=13,48.86003,2.35004`;

    return (
        <iframe
            src={MAP_API} 
            className={`${props.className} w-full`}
            height={1000}
        />
    );
};
