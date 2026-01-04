import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Acceptez-vous les prises en charge mutuelle ?",
        answer: "Oui, nous collaborons avec la plupart des assurances et mutuelles au Maroc. Nous vous assistons dans les démarches administratives pour vos remboursements."
    },
    {
        question: "Comment se déroule la première visite ?",
        answer: "La première consultation est dédiée à un bilan complet. Nous réalisons un examen clinique, des radiographies si nécessaire, et discutons de vos antécédents médicaux pour établir un diagnostic précis."
    },
    {
        question: "Prenez-vous en charge les urgences dentaires ?",
        answer: "Absolument. Nous réservons des créneaux quotidiens pour les urgences douloureuses. Contactez-nous par téléphone dès que possible pour une prise en charge rapide."
    },
    {
        question: "Quelles sont les options de paiement ?",
        answer: "Nous acceptons les espèces, chèques et cartes bancaires. Pour les traitements longs et coûteux (comme l'orthodontie ou les implants), des facilités de paiement peuvent être envisagées."
    },
    {
        question: "Soignez-vous les enfants ?",
        answer: "Oui, nous adorons soigner les enfants ! Nous recommandons une première visite dès l'âge de 3 ans pour familiariser l'enfant avec l'environnement dentaire."
    },
    {
        question: "Disposez-vous d'un parking ?",
        answer: "Des places de stationnement sont disponibles dans la rue devant le cabinet, et un parking gardé se trouve à 50 mètres."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Questions Fréquentes</span>
                    <h2 className="text-4xl font-serif font-bold mt-2 text-gray-900">Tout ce que vous devez savoir</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className={`font-bold text-lg ${activeIndex === index ? 'text-primary' : 'text-gray-800'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-full ${activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
