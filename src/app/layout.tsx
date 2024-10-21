import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/scss/globals.scss';

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
    title: 'What\'s Up Paris',
    description: 'Site de tourisme sur Paris',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${numans.variable} ${ubuntu.variable} antialiased`}>{children}</body>
        </html>
    );
}
