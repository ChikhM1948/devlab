'use client';

import { useState } from 'react';
import { Check, X, Gift, Zap, Shield, Clock, Code, Smartphone, TrendingUp, Users, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';
import { useTheme } from '@/app/components/ThemeProvider';
import Link from 'next/link';

export default function BundlePage() {
  const { darkMode } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Bundle',
      price: '60,000',
      currency: 'DZD',
      period: '',
      description: 'Parfait pour les petites entreprises qui démarrent',
      color: 'from-orange-400 to-yellow-500', // Changed
      features: [
        { included: true, text: 'Site web vitrine (5 pages)' },
        { included: true, text: 'Design responsive mobile' },
        { included: true, text: 'Hébergement 1 an offert' },
        { included: true, text: 'Nom de domaine .dz' },
        { included: true, text: '2 révisions design' },
        { included: true, text: 'Formation de base (2h)' },
        { included: false, text: 'Application mobile' },
        { included: false, text: 'SEO avancé' },
        { included: false, text: 'Support prioritaire' },
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Bundle',
      price: '120,000',
      currency: 'DZD',
      period: '',
      description: 'La solution complète pour votre transformation digitale',
      color: 'from-orange-500 to-red-600', // Changed
      features: [
        { included: true, text: 'Site web complet (10+ pages)' },
        { included: true, text: 'Application mobile (iOS & Android)' },
        { included: true, text: 'Stratégie marketing digital' },
        { included: true, text: 'Community management (1 mois)' },
        { included: true, text: 'SEO & optimisation' },
        { included: true, text: 'Formation complète (8h)' },
        { included: true, text: 'Support prioritaire 24/7' },
        { included: true, text: 'Maintenance 3 mois offerts' },
        { included: true, text: '5 révisions design' },
      ],
      popular: true,
      savings: '30%'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Bundle',
      price: 'Sur mesure',
      currency: '',
      period: '',
      description: 'Solutions sur mesure pour grandes entreprises',
      color: 'from-red-600 to-red-800', // Changed
      features: [
        { included: true, text: 'Tout du Premium Bundle +' },
        { included: true, text: 'Plateforme web custom complète' },
        { included: true, text: 'Applications natives avancées' },
        { included: true, text: 'Infrastructure cloud personnalisée' },
        { included: true, text: 'Cybersécurité avancée' },
        { included: true, text: 'Formation équipe complète' },
        { included: true, text: 'Support dédié 24/7/365' },
        { included: true, text: 'Maintenance & mises à jour illimitées' },
        { included: true, text: 'Conseiller technique dédié' },
      ],
      popular: false
    }
  ];

  const bonusFeatures = [
    {
      icon: Zap,
      title: 'Mise en ligne rapide',
      description: 'Votre projet livré en 4-6 semaines maximum'
    },
    {
      icon: Shield,
      title: 'Garantie satisfaction',
      description: 'Remboursement si non satisfait sous 30 jours'
    },
    {
      icon: Clock,
      title: 'Support réactif',
      description: 'Réponse en moins de 2h en jours ouvrés'
    },
    {
      icon: Sparkles,
      title: 'Mises à jour gratuites',
      description: 'Corrections et petites améliorations incluses'
    }
  ];

  const whatIncluded = [
    {
      category: 'Développement',
      icon: Code,
      items: [
        'Architecture technique moderne',
        'Code propre et documenté',
        'Tests et validation qualité',
        'Déploiement professionnel'
      ]
    },
    {
      category: 'Design & UX',
      icon: Smartphone,
      items: [
        'Interface moderne et intuitive',
        'Design system personnalisé',
        'Expérience utilisateur optimisée',
        'Responsive sur tous appareils'
      ]
    },
    {
      category: 'Marketing',
      icon: TrendingUp,
      items: [
        'Stratégie digitale complète',
        'Campagnes publicitaires',
        'Analytics et reporting',
        'Optimisation conversions'
      ]
    },
    {
      category: 'Formation',
      icon: BookOpen,
      items: [
        'Sessions pratiques personnalisées',
        'Documentation complète',
        'Vidéos tutoriels',
        'Support post-formation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Gift className="w-6 h-6" />
              <span className="font-bold text-lg">Offre Limitée - Économisez jusqu'à 30%</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Packages Complets pour Votre Succès Digital
            </h1>
            
            <p className="text-xl sm:text-2xl opacity-95 leading-relaxed">
              Tout ce dont vous avez besoin en un seul package : développement, design, marketing et formation
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choisissez Votre Bundle
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Des packages adaptés à chaque étape de votre croissance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transition-all transform hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-orange-500' : '' // Changed
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                    PLUS POPULAIRE
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Gift className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    {plan.price !== 'Sur mesure' ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-gray-900 dark:text-white">
                            {plan.price}
                          </span>
                          <span className="text-lg text-gray-600 dark:text-gray-400">
                            {plan.currency}/{plan.period}
                          </span>
                        </div>
                        {plan.savings && (
                          <div className="inline-block mt-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                            Économisez {plan.savings}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* === MODIFICATION START === */}
                  {/* Conditionally render button based on plan price */}
                  {plan.price === 'Sur mesure' ? (
                    // Enterprise plan: Links to /devis page
                    <Link
                      href="/devis"
                      className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      Demander un devis
                    </Link>
                  ) : (
                    // Starter and Premium plans: Link to WhatsApp
                    <a
                      href="https://wa.me/213698784457"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      Choisir ce bundle
                    </a>
                  )}
                  {/* === MODIFICATION END === */}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ce Qui Est Inclus Dans Nos Bundles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Une approche complète pour garantir votre succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whatIncluded.map((section, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bonus Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonusFeatures.map((bonus, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <bonus.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {bonus.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Puis-je personnaliser un bundle selon mes besoins ?",
                a: "Absolument ! Tous nos bundles sont personnalisables. Contactez-nous pour discuter de vos besoins spécifiques et nous créerons une offre sur mesure."
              },
              {
                q: "Quels sont les délais de livraison ?",
                a: "Le Starter Bundle est livré en 3-4 semaines, le Premium en 6-8 semaines. Pour l'Enterprise, les délais varient selon la complexité du projet."
              },
              {
                q: "Y a-t-il des frais cachés ?",
                a: "Non, nos prix sont transparents. Le prix affiché inclut tout ce qui est mentionné dans le bundle. Les seuls coûts additionnels possibles sont les services optionnels que vous choisirez."
              },
              {
                q: "Proposez-vous un paiement échelonné ?",
                a: "Oui, nous offrons des plans de paiement flexibles pour tous nos bundles. Contactez-nous pour discuter des options disponibles."
              },
              {
                q: "Que se passe-t-il après la livraison ?",
                a: "Vous bénéficiez d'une période de support gratuit (selon votre bundle), puis vous pouvez souscrire à un contrat de maintenance mensuel pour un support continu."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discutons de vos besoins et trouvons le bundle parfait pour vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Demander un Devis Gratuit
            </Link>
            <Link href="/#services" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all">
              Voir Tous Les Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}