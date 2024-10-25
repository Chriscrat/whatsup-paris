interface FrameProps {
    title?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Frame(props: FrameProps) {
    const title = props.title ? props.title[0].toLocaleUpperCase() + props.title.slice(1).replace(' ', '-') : null;
    return (
        <section className={`${props.className}`}>
            <div className="flex flex-col justify-around h-screen">
                {title && <h1 className="text-4xl text-left">{title}</h1>}
                {props.children}
            </div>
        </section>
    );
}
