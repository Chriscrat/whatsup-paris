"use client";

import { store } from './eventList';
import { Provider } from 'react-redux';
import React from 'react';

export function ReduxProvider({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};