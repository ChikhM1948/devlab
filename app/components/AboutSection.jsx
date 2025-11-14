// app/components/AboutSection.jsx
'use client';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe,
  ArrowRight,
  Target,
  Award,
  Sparkles
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function AboutSection() {
  const t = useTranslations('AboutSection');

  const features = [
    {
      icon: GraduationCap,
      title: t('feature1.title'),
      description: t('feature1.description'),
    },
    {
      icon: Users,
      title: t('feature2.title'),
      description: t('feature2.description'),
    },
    {
      icon: Globe,
      title: t('feature3.title'),
      description: t('feature3.description'),
    },
    {
      icon: Award,
      title: t('feature4.title'),
      description: t('feature4.description'),
    }
  ];

  const stats = [
    { value: t('stats.stat1.value'), label: t('stats.stat1.label') },
    { value: t('stats.stat2.value'), label: t('stats.stat2.label') },
    { value: t('stats.stat3.value'), label: t('stats.stat3.label') },
    { value: t('stats.stat4.value'), label: t('stats.stat4.label') }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center transition-all hover:shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all transform hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('mission.title')}
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                {t('mission.description')}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-bold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('learnMore')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}