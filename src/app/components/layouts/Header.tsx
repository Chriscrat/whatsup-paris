'use client';

import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed w-full top-0 left-0 z-10">
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
                    <h1 className="text-4xl font-bold text-white">What&apos;s up Paris</h1>
                </div>
            </header>
    );
}
