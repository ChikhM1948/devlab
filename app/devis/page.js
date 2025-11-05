'use client';

import { useState, useEffect } from 'react';
import { 
  Calculator, Check, ArrowRight, ArrowLeft, 
  Smartphone, Globe, Palette, TrendingUp, 
  Megaphone, Shield, Zap, Users, Mail, Phone,
  CheckCircle2, Package, Sparkles, Moon, Sun
} from 'lucide-react';
import Link from 'next/link'; // <-- IMPORT ADDED

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    budget: '',
    timeline: '',
    message: ''
  });

  const services = [
    {
      id: 'web-vitrine',
      category: 'Développement Web',
      icon: Globe,
      name: 'Site Web Vitrine',
      description: 'Site professionnel pour présenter votre entreprise',
      price: 35000,
      features: ['5 pages', 'Design responsive', 'Formulaire contact', 'Hébergement 1 an']
    },
    {
      id: 'web-ecommerce',
      category: 'Développement Web',
      icon: Globe,
      name: 'Site E-commerce',
      description: 'Boutique en ligne complète avec paiement',
      price: 65000,
      features: ['Gestion produits', 'Paiement en ligne', 'Tableau de bord', 'Stock management']
    },
    {
      id: 'web-custom',
      category: 'Développement Web',
      icon: Globe,
      name: 'Application Web Custom',
      description: 'Plateforme web sur mesure selon vos besoins',
      price: 100000,
      features: ['Architecture complexe', 'Fonctionnalités avancées', 'Base de données', 'API REST']
    },
    {
      id: 'mobile-ios-android',
      category: 'Applications Mobile',
      icon: Smartphone,
      name: 'App Mobile (iOS + Android)',
      description: 'Application native pour iOS et Android',
      price: 65000,
      features: ['Design natif', 'Performance optimale', 'Publication stores', 'Push notifications']
    },
    {
      id: 'mobile-cross-platform',
      category: 'Applications Mobile',
      icon: Smartphone,
      name: 'App Cross-Platform',
      description: 'Application React Native ou Flutter',
      price: 85000,
      features: ['Une base de code', 'iOS + Android', 'UI moderne', 'Maintenance facile']
    },
    {
      id: 'design-branding',
      category: 'Design & Branding',
      icon: Palette,
      name: 'Identité Visuelle Complète',
      description: 'Logo, charte graphique, supports',
      price: 35000,
      features: ['Logo professionnel', 'Charte graphique', 'Business cards', 'Guide de marque']
    },
    {
      id: 'design-ui-ux',
      category: 'Design & Branding',
      icon: Palette,
      name: 'Design UI/UX',
      description: 'Interface utilisateur et expérience',
      price: 40000,
      features: ['Wireframes', 'Maquettes haute-fidélité', 'Prototypes interactifs', 'Design system']
    },
    {
      id: 'marketing-seo',
      category: 'Marketing Digital',
      icon: TrendingUp,
      name: 'Référencement SEO',
      description: 'Optimisation pour moteurs de recherche',
      price: 45000,
      features: ['Audit SEO', 'Optimisation on-page', 'Recherche mots-clés', 'Suivi mensuel']
    },
    {
      id: 'marketing-social',
      category: 'Marketing Digital',
      icon: Megaphone,
      name: 'Community Management',
      description: 'Gestion réseaux sociaux (1 mois)',
      price: 20000,
      features: ['3 posts/semaine', '2 réseaux sociaux', 'Création contenu', 'Engagement']
    },
    {
      id: 'marketing-ads',
      category: 'Marketing Digital',
      icon: Megaphone,
      name: 'Campagnes Publicitaires',
      description: 'Google Ads / Facebook Ads',
      price: 45000,
      features: ['Stratégie complète', 'Création campagnes', 'Optimisation', 'Reporting mensuel']
    },
    {
      id: 'scaling-maintenance',
      category: 'Scaling & Support',
      icon: Shield,
      name: 'Maintenance Mensuelle',
      description: 'Support et mises à jour continues',
      price: 25000,
      features: ['Mises à jour', 'Corrections bugs', 'Sauvegardes', 'Support prioritaire']
    },
    {
      id: 'scaling-performance',
      category: 'Scaling & Support',
      icon: Zap,
      name: 'Optimisation Performance',
      description: 'Amélioration vitesse et performance',
      price: 75000,
      features: ['Audit complet', 'Optimisation code', 'CDN setup', 'Caching avancé']
    }
  ];

  const budgetRanges = [
    { value: '50-100k', label: '30,000 - 100,000 DZD' },
    { value: '100-250k', label: '90,000 - 250,000 DZD' },
    { value: '250-500k', label: '150,000 - 500,000 DZD' },
    { value: '500k+', label: '500,000+ DZD' }
  ];

  const timelines = [
    { value: '1-2weeks', label: '1-2 semaines' },
    { value: '1month', label: '1 mois' },
    { value: '2-3months', label: '2-3 mois' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const toggleService = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const calculateTotal = () => {
    return formData.services.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    try {
      // Préparer les données avec les services complets
      const selectedServicesData = services.filter(s => 
        formData.services.includes(s.id)
      );

      const budgetLabel = budgetRanges.find(b => b.value === formData.budget)?.label || '';
      const timelineLabel = timelines.find(t => t.value === formData.timeline)?.label || '';

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: selectedServicesData,
        budget: budgetLabel,
        timeline: timelineLabel,
        message: formData.message,
        totalPrice: calculateTotal()
      };

      // Envoyer à l'API
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStep(4); // Afficher la page de confirmation
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
        console.error('Erreur API:', result.error);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      alert('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
    }
  };

  const selectedServices = services.filter(s => formData.services.includes(s.id));
  const totalPrice = calculateTotal();
  const categories = [...new Set(services.map(s => s.category))];

  // Charger le thème au montage (THIS HANDLES YOUR DARK MODE REQUEST)
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } else {
      // Détecter la préférence système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Sauvegarder le thème
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white py-16 px-4 relative">
        {/* Dark Mode Toggle */}
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
          {/* === LINK ADDED HERE === */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          {/* === END OF ADDITION === */}

          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Devis Personnalisé</h1>
          </div>
          <p className="text-xl opacity-90">
            Sélectionnez vos services et obtenez un devis instantané
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Services' },
              { num: 2, label: 'Détails' },
              { num: 3, label: 'Contact' },
              { num: 4, label: 'Récapitulatif' }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s.num 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`text-sm mt-2 font-medium ${
                    step >= s.num ? 'text-orange-600 dark:text-orange-400' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {s.label}
                  </span>
                </div>
                {idx < 3 && (
                  <div className={`h-1 flex-1 mx-2 transition-colors ${
                    step > s.num ? 'bg-orange-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
              Choisissez vos services
            </h2>
            
            {categories.map(category => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3 transition-colors">
                  <Package className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                  {category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.filter(s => s.category === category).map(service => {
                    const Icon = service.icon;
                    const isSelected = formData.services.includes(service.id);
                    
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer transition-all transform hover:scale-105 border border-transparent ${
                          isSelected 
                            ? 'ring-4 ring-orange-500 shadow-xl' 
                            : 'shadow-lg hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-800'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full p-1">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                        
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 transition-colors">
                          <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 transition-colors">
                          {service.name}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors">
                          {service.description}
                        </p>
                        
                        <div className="border-t dark:border-gray-700 pt-4 mb-4 transition-colors">
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 transition-colors">
                          {service.price.toLocaleString()} DZD
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            <div className="flex justify-end mt-8">
              <button
                onClick={() => setStep(2)}
                disabled={formData.services.length === 0}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold flex items-center gap-2 hover:from-orange-600 hover:to-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuer
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
              Détails du projet
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6 transition-colors">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Budget estimé
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {budgetRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setFormData(prev => ({ ...prev, budget: range.value }))}
                      className={`p-4 rounded-lg border-2 font-medium transition-all ${
                        formData.budget === range.value
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                          : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 dark:text-gray-300'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Délai souhaité
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {timelines.map(time => (
                    <button
                      key={time.value}
                      onClick={() => setFormData(prev => ({ ...prev, timeline: time.value }))}
                      className={`p-4 rounded-lg border-2 font-medium transition-all ${
                        formData.timeline === time.value
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                          : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 dark:text-gray-300'
                      }`}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                  Description du projet (optionnel)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Décrivez vos besoins et objectifs..."
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(1)}
                className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold flex items-center gap-2 hover:from-orange-600 hover:to-red-700 transition-all"
              >
                Continuer
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">
              Vos coordonnées
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6 transition-colors">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Nom de l'entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="0555 12 34 56"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Retour
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold flex items-center gap-2 hover:from-orange-600 hover:to-red-700 transition-all"
                >
                  Obtenir mon devis
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center mb-8 transition-colors">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <CheckCircle2 className="w-12 h-12 text-green-500 dark:text-green-400" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Demande envoyée avec succès !
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 transition-colors">
                Nous vous contacterons dans les 24 heures pour discuter de votre projet
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 transition-colors">
                <Sparkles className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                Récapitulatif de votre devis
              </h3>

              <div className="space-y-6 mb-8">
                <div className="border-b dark:border-gray-700 pb-4 transition-colors">
                  <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 transition-colors">Services sélectionnés :</h4>
                  {selectedServices.map(service => (
                    <div key={service.id} className="flex justify-between items-center py-2">
                      <span className="text-gray-700 dark:text-gray-300 transition-colors">{service.name}</span>
                      <span className="font-bold text-gray-900 dark:text-white transition-colors">
                        {service.price.toLocaleString()} DZD
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="text-gray-900 dark:text-white transition-colors">Total estimé :</span>
                    <span className="text-orange-600 dark:text-orange-400 transition-colors">
                      {totalPrice.toLocaleString()} DZD
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 transition-colors">
                    * Prix indicatif, un devis détaillé vous sera envoyé
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-colors">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">Budget</p>
                    <p className="font-bold text-gray-900 dark:text-white transition-colors">
                      {budgetRanges.find(b => b.value === formData.budget)?.label || 'Non spécifié'}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-colors">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">Délai</p>
                    <p className="font-bold text-gray-900 dark:text-white transition-colors">
                      {timelines.find(t => t.value === formData.timeline)?.label || 'Non spécifié'}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setStep(1);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    services: [],
                    budget: '',
                    timeline: '',
                    message: ''
                  });
                }}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all"
              >
                Faire une nouvelle demande
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Price Summary */}
      {step < 4 && formData.services.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-2xl border-t-4 border-orange-500 p-4 z-50 transition-colors">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                {formData.services.length} service(s) sélectionné(s)
              </p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 transition-colors">
                Total: {totalPrice.toLocaleString()} DZD
              </p>
            </div>
            <button
              onClick={() => setStep(step === 1 ? 2 : step === 2 ? 3 : step)}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all"
            >
              {step === 1 ? 'Continuer' : step === 2 ? 'Finaliser' : 'Envoyer'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}