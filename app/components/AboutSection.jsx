import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, // New icon
  Presentation  // New icon
} from 'lucide-react';

export default function AboutSection() {
  
  // Your projects, as requested
  const projects = [
    {
      icon: GraduationCap,
      name: "Wahrani Academy",
      description: "Une plateforme e-learning complète offrant des cours et des formations en ligne pour divers domaines.",
      link: "https://www.academywahrani.com/", // Updated link
    },
    {
      icon: BookOpen,
      name: "Polynote.online",
      description: "Une application web innovante de gestion de notes et de scolarité conçue pour les étudiants.",
      link: "https://polynote.online",
    },
    {
      icon: CheckCircle,
      name: "Attendance Tracker",
      description: "Solution web de gestion de la présence, simplifiant le suivi pour les universités et les organisations.",
      link: "https://attendance-tracker-beta1-0-1.vercel.app/", // Updated link
    },
    {
      icon: MessageSquare,
      name: "Forum Lingo Lab",
      description: "Une plateforme de forum communautaire pour l'apprentissage et l'échange linguistique.",
      link: "https://forum-lingo-lab-qfwt.vercel.app/", // Added project
    },
    {
      icon: Presentation,
      name: "Colloquium Univ Relizane",
      description: "Site informationnel et d'inscription pour un colloque universitaire, gérant les participants.",
      link: "https://www.colloquiumunivrelizane.info/", // Added project
    }
  ];

  return (
    <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Du Concept à la Réalité Concrète
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Chez DevLab, nous ne faisons pas que parler de transformation digitale, nous la réalisons. Nous sommes fiers de bâtir des solutions robustes qui servent des milliers d'utilisateurs en Algérie.
          </p>
        </div>

        {/* --- Portfolio Section --- */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Quelques-uns de nos projets
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all transform hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
                  <project.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 bg-gray-50 dark:bg-gray-800">
                <a
                  href={project.link}
                  target={project.link === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-lg transition-all ${
                    project.link === "#"
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transform hover:scale-105'
                  }`}
                >
                  {project.link === "#" ? "Déploiement Bientôt" : "Visiter le site"}
                  {project.link !== "#" && <ArrowRight className="w-5 h-5" />}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* --- End of Portfolio Section --- */}

      </div>
    </section>
  );
}