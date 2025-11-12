// app/components/ServicesSection.jsx
'use client';
// Icônes mises à jour pour un thème éducatif
import { 
  BookOpen,     // Pour les cours de langues
  GraduationCap,// Pour la préparation aux tests
  Users,        // Pour la conversation
  Pencil,       // Pour le primaire
  Brain,        // Pour le collège (moyen)
  Library,      // Pour le lycée
  Briefcase,    // Pour les formations pro
  Compass,      // Pour le coaching
  Zap           // Pour les stages intensifs
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('ServicesSection');

  // Structure des services entièrement repensée pour LingoLab Academy
  const services = [
    {
      category: t('cat1'), // Catégorie: Apprentissage des Langues
      items: [
        { icon: BookOpen, title: t('s1_title'), desc: t('s1_desc') },
        { icon: GraduationCap, title: t('s2_title'), desc: t('s2_desc') },
        { icon: Users, title: t('s3_title'), desc: t('s3_desc') }
      ]
    },
    {
      category: t('cat2'), // Catégorie: Soutien Scolaire (Tous Niveaux)
      items: [
        { icon: Pencil, title: t('s4_title'), desc: t('s4_desc') },
        { icon: Brain, title: t('s5_title'), desc: t('s5_desc') },
        { icon: Library, title: t('s6_title'), desc: t('s6_desc') }
      ]
    },
    {
      category: t('cat3'), // Catégorie: Formations & Développement
      items: [
        { icon: Briefcase, title: t('s7_title'), desc: t('s7_desc') },
        { icon: Compass, title: t('s8_title'), desc: t('s8_desc') },
        { icon: Zap, title: t('s9_title'), desc: t('s9_desc') }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {services.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center sm:text-left">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((service, serviceIdx) => (
                <div key={serviceIdx} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  {/* J'ai uniformisé le style des icônes pour le thème bleu */}
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}