import type { Metadata } from 'next';
import { ReduxProvider } from '@/app/store/reduxProvider';

import localFont from 'next/font/local';
import '@/app/scss/globals.scss';
import Footer from '@/app/components/layouts/Footer';
import Header from '@/app/components/layouts/Header';


const ubuntu = localFont({
    src: [
        {
            path: "./fonts/Ubuntu/Ubuntu-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Ubuntu/Ubuntu-Medium.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Ubuntu/Ubuntu-Bold.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-ubuntu",
});

const numans = localFont({
    src: [
        {
            path: "./fonts/Numans/Numans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-numans",
});

export const metadata: Metadata = {
    title: 'What\'s Up Paris ?!',
    description: 'Site de tourisme sur Paris',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
            </head>
            <body className={`${numans.variable} ${ubuntu.variable} relative bg-background antialiased`}>
                <Header/>
                <div>
                    <ReduxProvider>
                        { children }
                    </ReduxProvider>
                </div>
                <Footer/>
            </body>
        </html>
    );
};
