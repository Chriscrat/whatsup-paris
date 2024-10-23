import Image from 'next/image';
import Frame from '@/app/components/layouts/Frame';
import SearchFilterForm from '@/app/components/forms/SearchFilterForm';
import EventsList from '@/app/components/eventsList/EventList';

const Page: React.FC = async () => {
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
                        <h1 className="text-white text-4xl md:text-6xl lg:text-9xl font-bold">What&apos;s Up</h1>
                        <span className="text-gradient-linear-primary-to-accent text-4xl md:text-6xl lg:text-9xl font-bold">Paris ?!</span>
                    </div>
                </div>
            </Frame>

            <Frame
                title="Bienvenue"
                className="relative py-10 px-8 md:px-12 lg:px-24"
            >
                <p className="text-lg py-4">
                    En manque d&apos;inspiration pour vos sorties à Paris ? Vous êtes au bon endroit ! Découvrez les événements, les lieux
                    et les activités à ne pas manquer dans la capitale française.
                </p>

                <div className="w-full h-full pt-8">
                    <div className="rounded-xl p-6 shadow-lg bg-theme-900">
                        <div className="flex flex-auto lg:px-2 lg:py-2">
                            <SearchFilterForm/>
                            <EventsList/>
                        </div>
                    </div>
                </div>
            </Frame>
        </div>
    );
};

export default Page;
