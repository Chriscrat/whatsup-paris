type SidebarProps = {
    children: React.ReactNode;
    isDisplayed: boolean;
};

export default function Sidebar(props: SidebarProps) {
    return (
        <div
            className={`${props.isDisplayed ? 'translate-x-0' : '-translate-x-full'} w-3/4 sidebar-class z-10 fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto px-4`}
            onClick={(e) => e.stopPropagation()}
        >
            {props.children}
        </div>
    );
}
