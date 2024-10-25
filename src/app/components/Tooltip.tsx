
type TooltipProps = {
    text: string,
    children: React.ReactNode
}

export default function Tooltip(props: TooltipProps) { 
    return (
        <div className="relative group">
            { props.children }
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-md rounded p-2 w-fit">
                { props.text }
            </div>
        </div>
    );
};