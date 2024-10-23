export default function Footer() {
    return (
        <footer className="w-full">
            <div className="flex justify-center p-5">
                <span className="text-lg sm:text-center text-accent">
                    ©Copyright 2024 {' '}
                    <a
                        href="#"
                        className="hover:underline"
                    >
                        What&apos;s Up Paris
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};
