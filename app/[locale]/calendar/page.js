// app/[locale]/calendar/page.js
'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, ArrowLeft, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../i18n/routing';
import { useTheme } from '@/app/components/ThemeProvider';

export default function CalendarPage() {
  const t = useTranslations('CalendarPage');
  const locale = useLocale();
  const { darkMode } = useTheme();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentWeek, setCurrentWeek] = useState(0);

  // Real formations based on your actual schedule (Nov 22 - Dec 22, 2025)
  const allFormations = [
    // Week 2: Nov 30
    {
      id: 1,
      title: t('formations.0.title'),
      date: '2025-11-30',
      dateDisplay: '30/11/2025',
      time: '09:00 - 12:00',
      duration: '21h',
      spots: 8,
      spotsTotal: 10,
      location: t('location'),
      category: 'paramedical',
      categoryLabel: t('categories.paramedical'),
      instructor: 'Madame Chenafa Fatima',
      description: t('formations.0.description'),
      price: '9,000 DZD',
      level: t('levels.beginner')
    },
    {
      id: 2,
      title: t('formations.1.title'),
      date: '2025-11-30',
      dateDisplay: '30/11/2025',
      time: '9:00 - 11:00',
      duration: '20h',
      spots: 12,
      spotsTotal: 15,
      location: t('location'),
      category: 'office',
      categoryLabel: t('categories.office'),
      instructor: 'Mr.Touil Mohamed & Dr Chikh Amine',
      description: t('formations.1.description'),
      price: '7500 DZD',
      level: t('levels.intermediate')
    },

    // Week 3: Dec 7
    {
      id: 3,
      title: t('formations.2.title'),
      date: '2025-12-07',
      dateDisplay: '07/12/2025',
      time: '09:00 - 12:00',
      duration: '30h',
      spots: 10,
      spotsTotal: 12,
      location: t('location'),
      category: 'tech',
      categoryLabel: t('categories.tech'),
      instructor: 'Dr. Chikh Amine',
      description: t('formations.2.description'),
      price: '18,000 DZD',
      level: t('levels.advanced')
    },
    {
      id: 4,
      title: t('formations.3.title'),
      date: '2025-12-07',
      dateDisplay: '07/12/2025',
      time: '09:00 - 16:00',
      duration: '26h',
      spots: 12,
      spotsTotal: 15,
      location: t('location'),
      category: 'professional',
      categoryLabel: t('categories.professional'),
      
      description: t('formations.3.description'),
      price: '25,000 DZD',
      level: t('levels.intermediate')
    },
    {
      id: 5,
      title: t('formations.4.title'),
      date: '2025-12-07',
      dateDisplay: '07/12/2025',
      time: '10:00 - 14:00',
      duration: '10h',
      spots: 8,
      spotsTotal: 10,
      location: t('location'),
      category: 'professional',
      categoryLabel: t('categories.professional'),
      description: t('formations.4.description'),
      price: '55,000 DZD',
      level: t('levels.advanced')
    },
    {
      id: 6,
      title: t('formations.5.title'),
      date: '2025-12-07',
      dateDisplay: '07/12/2025',
      time: '9:00 - 15:00',
      duration: '25h',
      spots: 6,
      spotsTotal: 8,
      location: t('location'),
      category: 'professional',
      categoryLabel: t('categories.professional'),
      description: t('formations.5.description'),
      price: '25,000 DZD',
      level: t('levels.intermediate')
    },

    // Week 4: Dec 15-16
    {
      id: 7,
      title: t('formations.6.title'),
      date: '2025-12-15',
      dateDisplay: '15/12/2025',
      time: '10:00 - 16:00',
      duration: '15h',
      spots: 6,
      spotsTotal: 10,
      location: t('location'),
      category: 'paramedical',
      categoryLabel: t('categories.paramedical'),
      instructor: 'Madame Chenafa Fatima',
      description: t('formations.6.description'),
      price: '9,000 DZD',
      level: t('levels.beginner')
    },
    {
      id: 8,
      title: t('formations.7.title'),
      date: '2025-12-16',
      dateDisplay: '16/12/2025',
      time: '09:00 - 17:00',
      duration: '16h',
      spots: 10,
      spotsTotal: 15,
      location: t('location'),
      category: 'agriculture',
      categoryLabel: t('categories.agriculture'),
      instructor: 'Mr. Madkour Riad',
      description: t('formations.7.description'),
      price: '20,000 DZD',
      level: t('levels.beginner')
    },
    {
      id: 9,
      title: t('formations.8.title'),
      date: '2025-12-16',
      dateDisplay: '16/12/2025',
      time: '9:00 - 12:00',
      duration: '16h',
      spots: 8,
      spotsTotal: 12,
      location: t('location'),
      category: 'agriculture',
      categoryLabel: t('categories.agriculture'),
      instructor: 'Mr. Amar Abdellah',
      description: t('formations.8.description'),
      price: '18,000 DZD',
      level: t('levels.beginner')
    },

    // Week 4: Dec 20
    {
      id: 10,
      title: t('formations.9.title'),
      date: '2025-12-20',
      dateDisplay: '20/12/2025',
      time: '09:00 - 17:00',
      duration: '8h',
      spots: 15,
      spotsTotal: 20,
      location: t('location'),
      category: 'pedagogical',
      categoryLabel: t('categories.pedagogical'),
      instructor: 'Prof. Amina Zerrouki',
      description: t('formations.9.description'),
      price: '15,000 DZD',
      level: t('levels.intermediate')
    }
  ];

  const categories = [
    { id: 'all', label: t('filters.all') },
    { id: 'paramedical', label: t('categories.paramedical') },
    { id: 'office', label: t('categories.office') },
    { id: 'tech', label: t('categories.tech') },
    { id: 'professional', label: t('categories.professional') },
    { id: 'agriculture', label: t('categories.agriculture') },
    { id: 'pedagogical', label: t('categories.pedagogical') }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      paramedical: 'from-orange-500 to-red-500',
      office: 'from-blue-500 to-cyan-500',
      tech: 'from-purple-500 to-pink-500',
      professional: 'from-green-500 to-teal-500',
      agriculture: 'from-yellow-500 to-orange-500',
      pedagogical: 'from-indigo-500 to-blue-500'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  // Filter formations
  const filteredFormations = allFormations.filter(formation => {
    const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory;
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group by week
  const getWeekNumber = (dateString) => {
    const date = new Date(dateString);
    const startDate = new Date('2025-11-22');
    const diffTime = date - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 7);
  };

  const formationsByWeek = filteredFormations.reduce((acc, formation) => {
    const week = getWeekNumber(formation.date);
    if (!acc[week]) acc[week] = [];
    acc[week].push(formation);
    return acc;
  }, {});

  const weeks = Object.keys(formationsByWeek).sort((a, b) => a - b);
  const currentWeekFormations = formationsByWeek[weeks[currentWeek]] || [];

  const getWeekDateRange = (weekIndex) => {
    const startDate = new Date('2025-11-22');
    startDate.setDate(startDate.getDate() + (parseInt(weekIndex) * 7));
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
    
    return `${startDate.getDate()}/${startDate.getMonth() + 1} - ${endDate.getDate()}/${endDate.getMonth() + 1}/2025`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-purple-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t('backToHome')}</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-10 h-10" />
            <h1 className="text-4xl font-bold">{t('title')}</h1>
          </div>
          <p className="text-xl opacity-90">
            {t('subtitle')}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Week Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentWeek(Math.max(0, currentWeek - 1))}
              disabled={currentWeek === 0}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('week')} {currentWeek + 1}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {getWeekDateRange(weeks[currentWeek])}
              </p>
            </div>

            <button
              onClick={() => setCurrentWeek(Math.min(weeks.length - 1, currentWeek + 1))}
              disabled={currentWeek === weeks.length - 1}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Formations Grid */}
        {currentWeekFormations.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t('noFormations')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('tryDifferentFilter')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentWeekFormations.map((formation) => (
              <div
                key={formation.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(formation.category)}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(formation.category)} text-white`}>
                      {formation.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {formation.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 min-h-[3.5rem]">
                    {formation.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {formation.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{formation.dateDisplay}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{formation.time} ({formation.duration})</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{formation.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 flex-shrink-0 text-green-500" />
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        {formation.spots}/{formation.spotsTotal} {t('spots')}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {t('instructor')}:
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {formation.instructor}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {t('price')}:
                      </span>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {formation.price}
                      </span>
                    </div>
                  </div>

                  <button 
                    className={`w-full py-3 px-4 bg-gradient-to-r ${getCategoryColor(formation.category)} text-white rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg`}
                  >
                    {t('reserve')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{allFormations.length}</div>
            <div className="text-sm opacity-90">{t('stats.totalFormations')}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {allFormations.reduce((sum, f) => sum + f.spots, 0)}
            </div>
            <div className="text-sm opacity-90">{t('stats.availableSpots')}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
            <div className="text-sm opacity-90">{t('stats.categories')}</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">4</div>
            <div className="text-sm opacity-90">{t('stats.weeks')}</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/formation"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              {t('cta.allFormations')}
            </Link>
            <a 
              href="https://wa.me/213698784457"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
            >
              {t('cta.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}