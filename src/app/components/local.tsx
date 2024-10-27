'use client';

import {useEffect} from 'react';

import { useLocale } from 'next-intl';

const local: React.FC = () => {
    const locale = useLocale();

    // Store the locale in localStorage
    useEffect(() => {
        if (locale) {
            localStorage.setItem('locale', locale);
        }
    }, [locale]);
    return null;
};

export default local;