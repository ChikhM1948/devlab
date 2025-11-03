import { Code, Smartphone, Monitor, TrendingUp, Users, Palette, BookOpen, Shield, Video } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      category: "Développement",
      items: [
        { icon: Code, title: "Développement Web", desc: "Sites web modernes et applications performantes adaptés à vos besoins" },
        { icon: Smartphone, title: "Développement Mobile", desc: "Applications iOS et Android natives et cross-platform" },
        { icon: Monitor, title: "Logiciels Sur Mesure", desc: "Solutions logicielles personnalisées pour optimiser votre activité" }
      ]
    },
    {
      category: "Croissance & Marketing",
      items: [
        { icon: TrendingUp, title: "Sponsor Scaling", desc: "Maximisez votre ROI avec des stratégies publicitaires optimisées" },
        { icon: Users, title: "Community Management", desc: "Gestion professionnelle de vos réseaux sociaux et engagement communautaire" },
        { icon: Palette, title: "Gestion Produit", desc: "Accompagnement stratégique pour le développement de vos produits" }
      ]
    },
    {
      category: "Expertise & Création",
      items: [
        { icon: BookOpen, title: "Formation", desc: "Programmes de formation adaptés pour développer les compétences de vos équipes" },
        { icon: Shield, title: "Cybersécurité", desc: "Protection avancée de vos systèmes et données sensibles" },
        { icon: Video, title: "Design & Montage", desc: "Création graphique et montage vidéo professionnel pour votre image de marque" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Des Solutions Complètes pour Votre Croissance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une gamme complète de services pour répondre à tous vos besoins numériques
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
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
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