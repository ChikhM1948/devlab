// app/components/HeroSection.jsx
'use client'; 

import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function HeroSection({ scrollToSection }) {
  const t = useTranslations('HeroSection');
  
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
       
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('titlePart1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">{t('titlePart2')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
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
        
      </div>
    </section>
  );
}