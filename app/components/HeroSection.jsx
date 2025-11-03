import { Code, GraduationCap } from 'lucide-react';
// import Link from 'next/link'; // This import is not needed and caused an error

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="accueil" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Votre Partenaire Technologique de A à Z en Algérie
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Du développement d'applications à la cybersécurité, nous transformons vos idées en succès numérique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Animated Formation Button */}
              <a 
                href="/formation" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 animate-pulse-slow"
              >
                <GraduationCap className="w-5 h-5" />
                Nos Formations
              </a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-400 transition-all"
              >
                Demander un Devis
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-orange-200 to-red-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 dark:bg-gray-800/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Code className="w-16 h-16 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  Insérez votre image hero ici
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  (Illustration, mockup, ou photo d'équipe)
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
