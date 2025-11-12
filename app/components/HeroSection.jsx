// app/components/HeroSection.jsx
'use client'; 

import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function HeroSection({ scrollToSection }) {
  const t = useTranslations('HeroSection');

  // Languages for the sliding animation
  const languages = ['english', 'french', 'spanish', 'german', 'italian', 'chinese', 'japanese', 'korean', 'russian', 'portuguese', 'arabic', 'turkish'];
  
  return (
    <section id="accueil" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Special Offer Banner */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg animate-bounce">
            <p className="font-semibold">{t('specialOffer')}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Sliding Flags Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
            <div className="flex animate-slide-right whitespace-nowrap">
              {[...languages, ...languages].map((langKey, idx) => (
                <span key={idx} className="text-6xl mx-4">
                  {getLangFlag(langKey)}
                </span>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('titlePart1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">{t('titlePart2')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/languages" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                <GraduationCap className="w-5 h-5" />
                {t('cta_languages')}
              </Link>
              
              <Link 
                href="/soutien"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                {t('cta_support')}
              </Link>

              <Link 
                href="/formation"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                <Users className="w-5 h-5" />
                {t('cta_training')}
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('stat1_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('stat2_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{t('stat3_label')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Languages Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {t('available_title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('available_subtitle')}
            </p>
          </div>

          {/* Language Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languages.map((langKey) => (
              <div 
                key={langKey}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-blue-500"
              >
                <div className="text-3xl mb-2">
                  {getLangFlag(langKey)}
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {t(`languages.${langKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

// Helper function to get flag emoji for each language
function getLangFlag(langKey) {
  const flags = {
    english: '🇬🇧',
    french: '🇫🇷',
    spanish: '🇪🇸',
    german: '🇩🇪',
    italian: '🇮🇹',
    chinese: '🇨🇳',
    japanese: '🇯🇵',
    korean: '🇰🇷',
    russian: '🇷🇺',
    portuguese: '🇵🇹',
    arabic: '🇸🇦',
    turkish: '🇹🇷'
  };
  return flags[langKey] || '🌐';
}