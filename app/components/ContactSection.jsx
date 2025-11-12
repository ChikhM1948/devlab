// app/components/ContactSection.jsx
'use client';
import { Mail, MessageCircle, Phone, MapPin, BookOpen, GraduationCap, Languages } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('ContactSection');
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl mb-4 opacity-90">
            {t('subtitle')}
          </p>
          <p className="text-lg opacity-80">
            {t('description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
            <Languages className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('service1_title')}</h3>
            <p className="opacity-90 text-sm">{t('service1_desc')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('service2_title')}</h3>
            <p className="opacity-90 text-sm">{t('service2_desc')}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('service3_title')}</h3>
            <p className="opacity-90 text-sm">{t('service3_desc')}</p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">{t('contact_methods')}</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <a 
              href="mailto:contact@devlab.info" 
              className="flex flex-col items-center gap-3 bg-white text-blue-600 px-6 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Mail className="w-8 h-8" />
              <span className="text-sm">{t('email')}</span>
            </a>

            {/* WhatsApp */}
            <a 
              href={t('whatsapp')}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-8 h-8" />
              <span className="text-sm">WhatsApp</span>
            </a>

            {/* Phone */}
            <a 
              href={`tel:${t('phone')}`}
              className="flex flex-col items-center gap-3 bg-white text-blue-600 px-6 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Phone className="w-8 h-8" />
              <span className="text-sm">{t('phone')}</span>
            </a>

            {/* Location */}
            <div className="flex flex-col items-center gap-3 bg-white/20 text-white px-6 py-6 rounded-lg font-semibold">
              <MapPin className="w-8 h-8" />
              <span className="text-sm text-center">{t('location')}</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg mb-6 opacity-90">{t('cta_text')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/devis" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              {t('cta_quote')}
            </a>
            <a 
              href="/langues" 
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white transition-all transform hover:scale-105"
            >
              {t('cta_courses')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}