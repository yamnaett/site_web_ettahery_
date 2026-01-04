import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">



                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">Notre Cabinet</span>
                        <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">Le Dr. Et-Tahery</h2>

                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Bienvenue au Centre Dentaire Et-Tahery, où l'excellence clinique rencontre la compassion humaine. Fondé sur des valeurs de professionnalisme et d'innovation, notre cabinet s'engage à offrir des soins dentaires de premier ordre dans un environnement apaisant.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            Nous comprenons que chaque patient est unique. C'est pourquoi nous prenons le temps d'écouter vos besoins, de vous expliquer clairement les options de traitement et de construire avec vous un plan de soins personnalisé.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                'Technologies de pointe',
                                'Approche sans douleur',
                                'Stérilisation rigoureuse',
                                'Suivi personnalisé'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 font-medium text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="border-l-4 border-primary pl-6 py-2 bg-white/50 italic text-gray-600">
                            "Notre mission est de vous redonner le sourire, non seulement par nos soins techniques, mais par la confiance que vous nous accordez."
                            <footer className="text-sm font-bold text-gray-800 mt-2 not-italic">- Dr. Et-Tahery</footer>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
