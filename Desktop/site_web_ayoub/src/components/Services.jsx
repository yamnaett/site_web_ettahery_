import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Smile,
    Settings,
    Sparkles,
    Heart,
    Baby,
    Activity,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Orthodontie',
        desc: 'Correction des malpositions dentaires pour un sourire harmonieux. Appareils classiques et invisibles (Invisalign).',
        icon: Smile,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        id: 2,
        title: 'Implantologie',
        desc: 'Remplacement des dents manquantes par des implants dentaires de haute qualité pour un résultat naturel.',
        icon: Settings,
        color: 'bg-indigo-100 text-indigo-600',
    },
    {
        id: 3,
        title: 'Esthétique Dentaire',
        desc: 'Blanchiment, facettes et soins cosmétiques pour sublimer l\'éclat de votre sourire.',
        icon: Sparkles,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        id: 4,
        title: 'Soins Généraux',
        desc: 'Prévention, détartrage et traitement des caries pour maintenir une santé bucco-dentaire optimale.',
        icon: Heart,
        color: 'bg-rose-100 text-rose-600',
    },
    {
        id: 5,
        title: 'Pédodontie',
        desc: 'Soins adaptés aux enfants dans une ambiance rassurante pour leur donner de bonnes habitudes.',
        icon: Baby,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        id: 6,
        title: 'Chirurgie Dentaire',
        desc: 'Extractions, dents de sagesse et interventions chirurgicales réalisées avec douceur et expertise.',
        icon: Activity,
        color: 'bg-teal-100 text-teal-600',
    },
];

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="services" className="py-20 bg-gray-50 relative">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Nos Expertises</span>
                    <h2 className="text-4xl font-serif font-bold mt-2 mb-4 text-gray-900">Des soins complets pour votre sourire</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600">
                        Nous proposons une gamme complète de soins dentaires, utilisant les dernières technologies pour garantir votre confort et des résultats durables.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden h-full flex flex-col"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 translate-x-10 -translate-y-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 transform">
                                <service.icon className="w-32 h-32 text-primary" />
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className={`w-16 h-16 rounded-2xl ${service.color.replace('bg-', 'bg-gradient-to-br from-').replace('100', '50').replace('text-', 'to-white border border-white shadow-sm text-')} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors font-serif">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                                    {service.desc}
                                </p>

                                <button className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all mt-auto group/btn">
                                    En savoir plus <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
