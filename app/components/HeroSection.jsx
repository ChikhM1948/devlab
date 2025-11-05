import { GraduationCap } from 'lucide-react';
// import Link from 'next/link'; // This import is not needed and caused an error

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="accueil" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Updated layout: Removed grid, centered content */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Votre Partenaire Technologique de A à Z en Algérie
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Du développement d'applications à la cybersécurité, nous transformons vos idées en succès numérique
            </p>
            {/* Updated button alignment to 'justify-center' */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Animated Formation Button */}
              <a 
                href="/formation" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 animate-pulse-slow"
              >
                <GraduationCap className="w-5 h-5" />
                Nos Formations
              </a>
              
              {/* MODIFIED: Changed from button to <a> tag linking to /devis */}
              <a 
                href="/devis"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-400 transition-all"
              >
                Demander un Devis
              </a>
            </div>
          </div>

          {/* Image Placeholder section has been completely removed */}

        </div>
      </div>
    </section>
  );
}