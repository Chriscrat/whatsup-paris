import React from 'react';
import Image from 'next/image';

import Section from '@/app/components/layouts/Section';

const Page: React.FC = () => {
    return (
        <div>
            <Section>
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
                        <span className="text-gradient-linear-primary-to-accent text-4xl md:text-6xl lg:text-9xl font-bold">Paris</span>
                    </div>
                </div>
            </Section>

            <Section
                title="Bienvenue"
                className="relative py-16 px-8"
            >
                <p className="text-lg">
                    En manque d&apos;inspiration pour vos sorties à Paris ? Vous êtes au bon endroit ! Découvrez les événements, les lieux et les activités à ne pas manquer dans la capitale française.
                </p>

                <iframe
                    src="https://opendata.paris.fr/explore/embed/dataset/que-faire-a-paris-/map/?disjunctive.tags&disjunctive.address_name&disjunctive.address_zipcode&disjunctive.address_city&disjunctive.pmr&disjunctive.blind&disjunctive.deaf&disjunctive.price_type&disjunctive.access_type&disjunctive.programs&calendarview=month&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6InBtciIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiNGRkNEMDAifV0sInhBeGlzIjoidXBkYXRlZF9hdCIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6ImRheSIsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6InF1ZS1mYWlyZS1hLXBhcmlzLSIsIm9wdGlvbnMiOnsiZGlzanVuY3RpdmUudGFncyI6dHJ1ZSwiZGlzanVuY3RpdmUuYWRkcmVzc19uYW1lIjp0cnVlLCJkaXNqdW5jdGl2ZS5hZGRyZXNzX3ppcGNvZGUiOnRydWUsImRpc2p1bmN0aXZlLmFkZHJlc3NfY2l0eSI6dHJ1ZSwiZGlzanVuY3RpdmUucG1yIjp0cnVlLCJkaXNqdW5jdGl2ZS5ibGluZCI6dHJ1ZSwiZGlzanVuY3RpdmUuZGVhZiI6dHJ1ZSwiZGlzanVuY3RpdmUucHJpY2VfdHlwZSI6dHJ1ZSwiZGlzanVuY3RpdmUuYWNjZXNzX3R5cGUiOnRydWUsImRpc2p1bmN0aXZlLnByb2dyYW1zIjp0cnVlfX19XSwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&basemap=jawg.dark&location=15,48.85555,2.34631&static=true&datasetcard=true&scrollWheelZoom=true"
                    className='w-full h-full lg:px-16 lg:py-8'
                ></iframe>
            </Section>
        </div>
    );
};

export default Page;
