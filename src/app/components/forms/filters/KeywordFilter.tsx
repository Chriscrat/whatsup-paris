import CheckboxFilter from '@/app/components/forms/filters/components/CheckboxFilter';

export default function KeywordFilter() {
    return (
        <div className="flex flex-col">
            <CheckboxFilter
                text="Filter 1"
            />
            <CheckboxFilter
                text="Filter 2"
            />
            <CheckboxFilter
                text="Filter 3"
            />
        </div>
    );
}
