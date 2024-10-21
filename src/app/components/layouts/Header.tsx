'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';



export default function Header() {
    const isHome = usePathname() === '/';

    const [header, setHeader] = useState(false);
    const LIMIT_SCROLL_Y_OFFSET = 800;

    const scrollHeader = () => {
        if (window.scrollY >= LIMIT_SCROLL_Y_OFFSET) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);

    return (
        <header className={header || !isHome ? `fixed w-full top-0 left-0 z-10 bg-primary shadow-md` : 'hidden'}>
            <div className="flex items-center py-4 bg-transparent">
                <div className="size-16 shrink-0 grow-0 relative rounded-full">
                    <Image
                        src="/Whats-up-paris.png"
                        alt="What's Up Paris"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>
                <h1 className="text-4xl font-bold text-white">What&apos;s up Paris ?!</h1>
            </div>
        </header>
    );
}
