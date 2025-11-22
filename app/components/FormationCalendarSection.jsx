// app/components/FormationCalendarSection.jsx
'use client';

import { Calendar, Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function FormationCalendarSection() {
  const t = useTranslations('CalendarSection');
  
  // Real upcoming formations based on actual schedule
  const upcomingFormations = [
    {
      id: 1,
      title: t('formation1'), // Paramédical
      date: '30/11/2025',
      time: '09:00 - 17:00',
      spots: 8,
      location: t('location'),
      category: 'paramedical',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: t('formation2'), // Programmation Web
      date: '07/12/2025',
      time: '09:00 - 18:00',
      spots: 10,
      location: t('location'),
      category: 'tech',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: t('formation3'), // HSE
      date: '07/12/2025',
      time: '14:00 - 18:00',
      spots: 12,
      location: t('location'),
      category: 'professional',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: t('formation4'), // Vendeur Pharmacie
      date: '15/12/2025',
      time: '10:00 - 16:00',
      spots: 6,
      location: t('location'),
      category: 'paramedical',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section id="calendar" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full font-semibold mb-4">
            <Calendar className="w-5 h-5" />
            {t('badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Upcoming Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {upcomingFormations.map((formation) => (
            <div
              key={formation.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${formation.color}`}></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 min-h-[3.5rem]">
                  {formation.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{formation.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{formation.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{formation.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-semibold">
                      {formation.spots} {t('spotsLeft')}
                    </span>
                  </div>
                </div>

                <button className={`w-full py-2 px-4 bg-gradient-to-r ${formation.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                  {t('reserve')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Calendar */}
        <div className="text-center">
          <Link
            href="/calendar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('viewFullCalendar')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}