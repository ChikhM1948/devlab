import { Gift } from 'lucide-react';
// We'll use a standard <a> tag for navigation, which works with the App Router
// import Link from 'next/link'; 

export default function BundleSection({ scrollToSection }) {
  return (
    <section 
      id="bundle" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 dark:bg-orange-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-300 dark:bg-red-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
          <Gift className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          <span className="font-bold text-lg text-gray-900 dark:text-white">Offre Spéciale Bundle</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Pack Complet Entreprise
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Économisez jusqu'à 30% en combinant plusieurs services : Développement Web + Mobile + Marketing Digital + Formation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">30%</div>
            <div className="text-gray-700 dark:text-gray-300">d'économie</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">4+</div>
            <div className="text-gray-700 dark:text-gray-300">Services inclus</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-gray-700 dark:text-gray-300">Support prioritaire</div>
          </div>
        </div>

        <a 
          href="/bundle" 
          className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-lg shadow-2xl transition-all transform hover:scale-105"
        >
          Découvrir le Bundle
        </a>
      </div>
    </section>
  );
}