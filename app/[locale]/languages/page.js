// app/[locale]/langues/page.js
'use client';
import { useState } from 'react';
import { Languages, Clock, CheckCircle, Tag, Send, AlertCircle, ArrowLeft } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../i18n/routing';

export default function LanguagesSection() {
  const t = useTranslations('LanguagesPage');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    langues: [],
    niveaux: {}, // Store selected level for each language
    codePromo: ''
  });

  const [promoDetails, setPromoDetails] = useState({ applied: false, rate: 0 });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const langues = [
    {
      id: 'anglais',
      titre: t('langue1_title'),
      prix: t.raw('langue1_price') || 15000,
      duree: t('langue1_duration'),
      description: t('langue1_desc'),
      competences: t.raw('langue1_skills'),
      niveaux: ['Débutant', 'Intermédiaire', 'Avancé']
    },
    {
      id: 'francais',
      titre: t('langue2_title'),
      prix: t.raw('langue2_price') || 15000,
      duree: t('langue2_duration'),
      description: t('langue2_desc'),
      competences: t.raw('langue2_skills'),
      niveaux: ['Débutant', 'Intermédiaire', 'Avancé']
    },
    {
      id: 'espagnol',
      titre: t('langue3_title'),
      prix: t.raw('langue3_price') || 18000,
      duree: t('langue3_duration'),
      description: t('langue3_desc'),
      competences: t.raw('langue3_skills'),
      niveaux: ['Débutant', 'Intermédiaire']
    },
    {
      id: 'allemand',
      titre: t('langue4_title'),
      prix: t.raw('langue4_price') || 20000,
      duree: t('langue4_duration'),
      description: t('langue4_desc'),
      competences: t.raw('langue4_skills'),
      niveaux: ['Débutant', 'Intermédiaire']
    },
    {
      id: 'turc',
      titre: t('langue5_title'),
      prix: t.raw('langue5_price') || 20000,
      duree: t('langue5_duration'),
      description: t('langue5_desc'),
      competences: t.raw('langue5_skills'),
      niveaux: ['Débutant']
    },
    {
      id: 'coreen',
      titre: t('langue6_title'),
      prix: t.raw('langue6_price') || 20000,
      duree: t('langue6_duration'),
      description: t('langue6_desc'),
      competences: t.raw('langue6_skills'),
      niveaux: ['Débutant']
    },
    {
      id: 'italien',
      titre: t('langue7_title'),
      prix: t.raw('langue7_price') || 20000,
      duree: t('langue7_duration'),
      description: t('langue7_desc'),
      competences: t.raw('langue7_skills'),
      niveaux: ['Débutant']
    }
  ];

  const handleLangueChange = (langueId) => {
    setFormData(prev => {
      const isSelected = prev.langues.includes(langueId);
      const newLangues = isSelected 
        ? prev.langues.filter(id => id !== langueId)
        : [...prev.langues, langueId];
      
      const newNiveaux = { ...prev.niveaux };
      if (!isSelected) {
        // Set default level when selecting a language
        const langue = langues.find(l => l.id === langueId);
        newNiveaux[langueId] = langue.niveaux[0];
      } else {
        // Remove level when deselecting
        delete newNiveaux[langueId];
      }

      return {
        ...prev,
        langues: newLangues,
        niveaux: newNiveaux
      };
    });
    setPromoDetails({ applied: false, rate: 0 });
    setSubmitStatus({ type: '', message: '' });
  };

  const handleNiveauChange = (langueId, niveau) => {
    setFormData(prev => ({
      ...prev,
      niveaux: {
        ...prev.niveaux,
        [langueId]: niveau
      }
    }));
  };

  const handlePromoCode = () => {
    const code = formData.codePromo.toUpperCase();
    const numSelected = formData.langues.length;

    if (code === 'LINGOLANG') {
      if (numSelected >= 2) {
        setPromoDetails({ applied: true, rate: 0.20 });
        setSubmitStatus({ type: 'success', message: t('errorPromoLingoLang') });
      } else {
        setPromoDetails({ applied: false, rate: 0 });
        setSubmitStatus({ type: 'error', message: t('errorPromoLingoLang') });
      }
    } else if (code === 'LANG10') {
      if (numSelected === 1) {
        setPromoDetails({ applied: true, rate: 0.10 });
        setSubmitStatus({ type: 'success', message: t('errorPromoLang10') });
      } else if (numSelected > 1) {
        setPromoDetails({ applied: false, rate: 0 });
        setSubmitStatus({ type: 'error', message: t('errorPromoLang10') });
      } else {
        setPromoDetails({ applied: false, rate: 0 });
        setSubmitStatus({ type: 'error', message: t('errorPromoNone') });
      }
    } else {
      setPromoDetails({ applied: false, rate: 0 });
      setSubmitStatus({ type: 'error', message: t('errorPromoInvalid') });
    }
  };

  const calculateTotal = () => {
    let total = 0;
    formData.langues.forEach(langueId => {
      const langue = langues.find(l => l.id === langueId);
      if (langue) total += langue.prix;
    });

    if (promoDetails.applied) {
      total = total * (1 - promoDetails.rate);
    }

    return total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.langues.length === 0) {
      setSubmitStatus({ type: 'error', message: t('errorSelectOne') });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const selectedLangues = formData.langues.map(id => {
      const l = langues.find(l => l.id === id);
      return { 
        titre: l.titre, 
        duree: l.duree, 
        prix: l.prix,
        niveau: formData.niveaux[id]
      };
    });

    try {
      const response = await fetch('/api/send-email-languages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          langues: selectedLangues,
          codePromo: formData.codePromo || null,
          total: calculateTotal(),
          discount: promoDetails.applied,
          discountRate: promoDetails.rate,
          locale: locale
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: t('statusSuccess')
        });
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          langues: [],
          niveaux: {},
          codePromo: ''
        });
        setPromoDetails({ applied: false, rate: 0 });
      } else {
        throw new Error(data.message || t('statusError'));
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: t('statusError')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 p-2 -ml-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('backToHome')}
          </Link>
        </div>
      </header>
      
      <section id="langues" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {langues.map(langue => (
              <div 
                key={langue.id}
                className={`p-6 rounded-xl border-2 transition-all ${
                  formData.langues.includes(langue.id)
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-blue-300 cursor-pointer'
                }`}
              >
                <div 
                  className="cursor-pointer"
                  onClick={() => handleLangueChange(langue.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {langue.titre}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{langue.duree}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        readOnly
                        checked={formData.langues.includes(langue.id)}
                        className="w-6 h-6 rounded border-gray-300 text-blue-500 focus:ring-blue-500 pointer-events-none"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
                    {langue.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                      {t('skillsTitle')}
                    </p>
                    <ul className="space-y-2">
                      {langue.competences.map((comp, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mt-4">
                    {langue.prix.toLocaleString(locale)} DZD
                  </div>
                </div>

                {formData.langues.includes(langue.id) && langue.niveaux.length > 1 && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {t('selectLevel')}
                    </label>
                    <select
                      value={formData.niveaux[langue.id] || langue.niveaux[0]}
                      onChange={(e) => handleNiveauChange(langue.id, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {langue.niveaux.map(niveau => (
                        <option key={niveau} value={niveau}>{niveau}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t('formTitle')}
            </h3>

            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
              }`}>
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('formNom')}
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('formPrenom')}
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    required
                    value={formData.prenom}
                    onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('formTelephone')}
                </label>
                <input
                  type="tel"
                  id="telephone"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('formLangues')}
                </label>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 min-h-[60px]">
                  {formData.langues.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {t('formNoLangue')}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {formData.langues.map(id => {
                        const langue = langues.find(l => l.id === id);
                        return (
                          <li key={id} className="flex justify-between items-center text-sm">
                            <span className="text-gray-900 dark:text-white font-medium">
                              {langue.titre} ({formData.niveaux[id]})
                            </span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">
                              {langue.prix.toLocaleString(locale)} DZD
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="codePromo" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('formPromo')}
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    id="codePromo"
                    value={formData.codePromo}
                    onChange={(e) => setFormData({...formData, codePromo: e.target.value})}
                    placeholder={t('formPromoPlaceholder')}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={handlePromoCode}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <Tag className="w-5 h-5" />
                    <span>{t('formApply')}</span>
                  </button>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {t('formPromoHint')}
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-blue-500">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    {t('total')}
                  </span>
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {calculateTotal().toLocaleString(locale)} DZD
                  </span>
                </div>
                {promoDetails.applied && (
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium text-right">
                    {t('discountApplied', { rate: promoDetails.rate * 100 })}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.langues.length === 0}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t('submitting')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('submitButton')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}