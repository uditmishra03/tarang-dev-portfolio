import React from 'react';
import { Box } from './Icons';

interface NavProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export const Nav: React.FC<NavProps> = ({ activeSection, onNavClick }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'What I Do', id: 'what-i-do' },
    { name: 'Contact', id: 'contact' },
    { name: 'Resume', id: 'resume', href: '/resume.pdf', target: '_blank' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <nav className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1.5 px-4 backdrop-blur-md shadow-lg dark:bg-slate-900/80 dark:border-white/10 dark:shadow-xl">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); onNavClick('home'); }}
          className="mr-4 flex items-center justify-center rounded-full transition-transform hover:scale-110"
          aria-label="Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
            <Box size={20} strokeWidth={2.5} />
          </div>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.target}
                  rel="noopener noreferrer"
                  className={`block rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm
                    text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5
                  `}
                >
                  {item.name}
                </a>
              ) : (
                <button
                  onClick={() => onNavClick(item.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm
                    ${activeSection === item.id
                      ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};