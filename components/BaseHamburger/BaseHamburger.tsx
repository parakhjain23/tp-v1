'use client';

import { useState } from 'react';
import Link from 'next/link';

function BaseHamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        const sidebar = document.getElementById('base-sidebar');
        const button = (event.target as HTMLElement).closest('button');

        if (sidebar && !sidebar.contains(event.target as Node) && !button) {
            sidebar.classList.add('-translate-x-full');
            document.removeEventListener('click', handleClickOutside);
        }
    };

    const toggleSidebar = (): void => {
        const sidebar = document.getElementById('base-sidebar');

        if (sidebar) {
            sidebar.classList.toggle('-translate-x-full');

            if (!sidebar.classList.contains('-translate-x-full')) {
                document.addEventListener('click', handleClickOutside);
            } else {
                document.removeEventListener('click', handleClickOutside);
            }
        }
    };
    return (
        <>
            <button className="md:hidden" onClick={toggleSidebar}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </span>
            </button>

            <aside
                id="base-sidebar"
                className={`fixed flex flex-col top-0 left-0 z-40 w-64 h-screen transition-transform px-5 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700 -translate-x-full`}
                aria-label="Sidebar"
            >
                <div className="flex flex-col gap-5 flex-1 mt-6">
                    <nav className="-mx-3 space-y-3">
                        <Link href={'/home'} legacyBehavior={true}><a href="#" onClick={toggleSidebar} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Home</a></Link>
                        <Link href={'/space/task'} legacyBehavior={true}><a href="#" onClick={toggleSidebar} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> About</a></Link>
                        <Link href={'/pricing'} legacyBehavior={true}><a href="#" onClick={toggleSidebar} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Pricing</a></Link>
                        <Link href={'/contact'} legacyBehavior={true}><a href="#" onClick={toggleSidebar} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Contact</a></Link>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default BaseHamburger