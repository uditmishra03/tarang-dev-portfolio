'use client';

import { Box } from '@/components/icons';

interface NavProps {
    activeSection: string;
    onNavClick: (sectionId: string) => void;
}

export function Nav({ activeSection, onNavClick }: NavProps) {
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'What I Do', id: 'what-i-do' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <div className="fixed left-1/2 top-6 z-50 w-full max-w-fit -translate-x-1/2 px-4">
            <nav className="flex items-center gap-1 rounded-full border border-black/5 bg-white/80 p-1.5 px-4 text-sm font-medium text-slate-400 shadow-2xl backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#0a1020]/80 dark:text-slate-200">
                <button
                    type="button"
                    onClick={() => onNavClick('home')}
                    className="mr-4 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                    aria-label="Home"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                        <Box size={20} strokeWidth={2.5} />
                    </span>
                </button>

                <ul className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                type="button"
                                onClick={() => onNavClick(item.id)}
                                className={`rounded-full px-4 py-2 text-xs transition-all duration-300 sm:text-sm ${activeSection === item.id
                                        ? 'bg-gray-200 text-gray-900 shadow-md dark:bg-slate-800 dark:text-white'
                                        : 'hover:bg-black/5 hover:text-slate-900 dark:hover:bg-white/5'
                                    }`}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
