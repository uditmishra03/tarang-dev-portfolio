import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="text-2xl font-bold">
                    <Link href="/">T.</Link>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="#home" className="hover:text-gray-400">Home</Link></li>
                        <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
                        <li><Link href="#experience" className="hover:text-gray-400">Experience</Link></li>
                        <li><Link href="#what-i-do" className="hover:text-gray-400">What I Do</Link></li>
                        <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
