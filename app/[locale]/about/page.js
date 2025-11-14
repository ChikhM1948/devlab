// app/[locale]/about/page.js
'use client';

import { useState } from 'react';
import { 
  GraduationCap, BookOpen, Users, Award, Globe, 
  Target, Heart, Lightbulb, ArrowLeft, Moon, Sun,
  CheckCircle, MessageSquare, TrendingUp, Book
} from 'lucide-react';
import { Link } from '../../../i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from '@/app/components/ThemeProvider';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const locale = useLocale();
  const { darkMode, toggleDarkMode } = useTheme();

  // +++ NOUVELLE FONCTION AJOUTÉE +++
  /**
   * Fait défiler la page en douceur vers un élément avec l'ID spécifié.
   * @param {string} sectionId L'ID de la section vers laquelle défiler (ex: 'apropos', 'team')
   */
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // +++ FIN DE L'AJOUT +++

  const stats = [
    { icon: Users, value: t('stats.students.value'), label: t('stats.students.label') },
    { icon: GraduationCap, value: t('stats.courses.value'), label: t('stats.courses.label') },
    { icon: Award, value: t('stats.certificates.value'), label: t('stats.certificates.label') },
    { icon: Globe, value: t('stats.languages.value'), label: t('stats.languages.label') }
  ];

  const values = [
    {
      icon: Target,
      title: t('values.excellence.title'),
      description: t('values.excellence.description')
    },
    {
      icon: Heart,
      title: t('values.passion.title'),
      description: t('values.passion.description')
    },
    {
      icon: Lightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.description')
    },
    {
      icon: Users,
      title: t('values.community.title'),
      description: t('values.community.description')
    }
  ];

  const team = [
    {
      name: t('team.founder.name'),
      role: t('team.founder.role'),
      description: t('team.founder.description')
    },
    {
      name: t('team.academic.name'),
      role: t('team.academic.role'),
      description: t('team.academic.description')
    },
    {
      name: t('team.tech.name'),
      role: t('team.tech.role'),
      description: t('team.tech.description')
    }
  ];

  const achievements = [
    {
      icon: CheckCircle,
      title: t('achievements.item1.title'),
      description: t('achievements.item1.description')
    },
    {
      icon: MessageSquare,
      title: t('achievements.item2.title'),
      description: t('achievements.item2.description')
    },
    {
      icon: TrendingUp,
      title: t('achievements.item3.title'),
      description: t('achievements.item3.description')
    },
    {
      icon: Book,
      title: t('achievements.item4.title'),
      description: t('achievements.item4.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-purple-700 text-white py-16 px-4 relative">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-white" />
          ) : (
            <Moon className="w-6 h-6 text-white" />
          )}
        </button>
        
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t('backToHome')}</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-4xl font-bold">{t('mainTitle')}</h1>
          </div>
          <p className="text-xl opacity-90">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Mission Section - ID 'apropos' ajouté */}
        <section id="apropos" className="mb-16 scroll-mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              {t('mission.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('mission.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('mission.paragraph2')}
            </p>
          </div>
        </section>

        {/* Stats Section - ID 'stats' ajouté */}
        <section id="stats" className="mb-16 scroll-mt-20">
          {/* ... (contenu de la section stats inchangé) ... */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transition-all hover:shadow-xl transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Values Section - ID 'values' ajouté */}
        <section id="values" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('values.title')}
          </h2>
          {/* ... (contenu de la section values inchangé) ... */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section - ID 'team' ajouté */}
        <section id="team" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('team.title')}
          </h2>
          {/* ... (contenu de la section team inchangé) ... */}
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transition-all hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section - ID 'achievements' ajouté */}
        <section id="achievements" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('achievements.title')}
          </h2>
          {/* ... (contenu de la section achievements inchangé) ... */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section - ID 'contact' ajouté */}
        <section id="contact" className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-purple-700 rounded-xl shadow-2xl p-8 text-center text-white scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {t('cta.description')}
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            {t('cta.button')}
            <MessageSquare className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}