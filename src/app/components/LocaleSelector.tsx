'use client';

import {useEffect} from 'react';
import { useLocale } from 'next-intl';

interface LocaleSelectorProps {
    className?: string;
}

const LocaleSelector: React.FC<LocaleSelectorProps> = ({ className }) => {
    const locale = useLocale();

    // Store the locale in localStorage
    useEffect(() => {
        if (locale) {
            localStorage.setItem('locale', locale);
        }
    }, [locale]);
    return (
        <div className={`${className}`}>
            <select
                className="bh-auto border border-gray-300 rounded-lg block w-full py-1.5 px-2 focus:outline-none"
                value={locale}
                onChange={(e) => {
                    const selectedLocale = e.target.value;
                    window.location.href = `/${selectedLocale}`;
                }}
            >
                <option value="en">
                    🇬🇧
                </option>
                <option value="fr">
                    🇫🇷
                </option>
            </select>
        </div>
    );
};

export default LocaleSelector;
