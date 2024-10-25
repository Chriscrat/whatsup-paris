import React, { useState, useEffect } from 'react';

interface ToastProps {
    children: React.ReactNode,
    trigger: boolean,
    type?: 'success' | 'error' | 'info',
    duration?: number,
};

export default function Toast({ children, trigger, type = 'success', duration = 1500 }: ToastProps) {
    const [isDisplayed, setIsDisplayed] = useState(trigger);

    const TOAST_COLORS = {
        success: 'bg-primary',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (trigger) {
            setIsDisplayed(true);
            timeout = setTimeout(() => {
                setIsDisplayed(false);
                clearTimeout(timeout);
            }, duration);
        }
    }, [trigger, duration]);

    return (
        <div
            className={(isDisplayed ? 'scale-100' : 'scale-0') + ` ${TOAST_COLORS[type]} transform duration-300 fixed max-w text-sm text-white rounded-md shadow-lg ml-3 -bottom-0 left-1/2 transition -translate-y-16`}
            role="alert"
        >
            <div className="flex p-4 items-center">
                { children }
            </div>
        </div>
    );
}
