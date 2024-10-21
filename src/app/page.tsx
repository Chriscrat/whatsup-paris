import React from 'react';
import Image from 'next/image';

const Page: React.FC = () => {
    return (
        <div>
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
                    <h1 className="text-4xl font-bold">What&apos;s Up Paris</h1>
                </div>
            </header>

            <section
                className="relative h-screen bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url(Paris-background.jpg)" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h2 className="text-white text-5xl font-bold">
                        Bienvenue à Paris
                    </h2>
                </div>
            </section>

            <section className="py-16 px-8">
                <h2 className="text-3xl font-bold mb-4">Content Section</h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec eros aliquet, at tincidunt sapien
                    facilisis.
                </p>
            </section>
        </div>
    );
};

export default Page;
