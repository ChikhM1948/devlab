// app/components/Navbar.jsx - LingoLab Version
'use client';

import { Moon, Sun, Menu, X, GraduationCap, Languages } from 'lucide-react'; // Changed: Replaced Mail with Languages
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  const t = useTranslations('Navbar');

  const handleMobileLinkClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 p-1 shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg">
              <Image 
                src="/lingo.png"
                alt="LingoLab Logo"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
              LingoLab
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {t('services')}
            </button>
          
            <Link
              href="/formation"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="font-semibold">{t('training')}</span>
            </Link>

            {/* Changed: Newsletter link replaced with Languages link */}
            <Link
              href="/languages"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg"
            >
              <Languages className="w-4 h-4" />
              <span className="font-semibold">{t('languages')}</span>
            </Link>
            
            {/* Removed: "Get Quote" link was here */}

            <LocaleSwitcher />

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <LocaleSwitcher />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-3 space-y-3">
            <button 
              onClick={() => handleMobileLinkClick('accueil')} 
              className="block w-full text-left font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => handleMobileLinkClick('services')} 
              className="block w-full text-left font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {t('services')}
            </button>
         

            <Link
              href="/formation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="font-semibold">{t('training')}</span>
            </Link>

            {/* Changed: Newsletter link replaced with Languages link */}
            <Link
              href="/languages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Languages className="w-4 h-4" />
              <span className="font-semibold">{t('languages')}</span>
            </Link>
            
            {/* Removed: "Get Quote" link was here */}
          </div>
        </div>
      )}
    </nav>
  );
}