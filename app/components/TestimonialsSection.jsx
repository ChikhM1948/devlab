export default function TestimonialsSection() {
  const testimonials = [
    { name: "Ahmed B.", company: "StartUp Tech DZ", text: "Une équipe exceptionnelle qui a transformé notre vision en réalité. Notre application mobile dépasse toutes nos attentes." },
    { name: "Leila M.", company: "Commerce Plus", text: "Professionnalisme et expertise remarquables. Notre site e-commerce génère maintenant 3x plus de ventes." },
    { name: "Karim F.", company: "Industries Modernes", text: "Un partenaire de confiance qui comprend nos besoins. Leur solution logicielle a révolutionné notre gestion." }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          Ce Que Disent Nos Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}