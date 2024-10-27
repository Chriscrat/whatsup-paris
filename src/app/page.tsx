import Image from 'next/image';
import Frame from '@/app/components/layouts/Frame';
import SearchEngine from '@/app/components/searchEngine/SearchEngine';

import {useTranslations} from 'next-intl';

const Page: React.FC = () => {
    const t = useTranslations('searchEngine');

    return (
        <div>
            <Frame className="relative">
                <div
                    className="relative h-screen bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: 'url(Paris-background.jpg)' }}
                >
                    <div className="absolute inset-0 bg-orange-900 opacity-70"></div>
                    <div className="relative flex items-center flex-col justify-center h-full">
                        <Image
                            src="/Whats-up-paris.png"
                            alt="What's Up Paris"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                        <h1 className="text-white text-6xl lg:text-9xl font-bold">What&apos;s Up</h1>
                        <span className="text-gradient-linear-primary-to-accent text-4xl md:text-6xl lg:text-9xl font-bold">Paris ?!</span>
                        <div className="animate-bounce mt-20 w-20 h-20 ring-4 ring-slate-200/20 shadow-md rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-accent"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </Frame>

            <Frame
                title={t('title')}
                className="relative py-10 px-4 sm:p-12 xs:p-12"
            >
                <p className="text-lg py-4">
                    { t('description') }
                </p>

                <div className="w-full h-full pt-8">
                    <SearchEngine/>
                </div>
            </Frame>
        </div>
    );
};

export default Page;
