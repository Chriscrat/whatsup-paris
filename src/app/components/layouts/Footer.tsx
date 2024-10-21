export default function Footer() {
    return (
        <footer className="absolute bottom-0 left-0 w-full">
            <div className="flex justify-center p-4">
                <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
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
