import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Hasna AIT BEN BRAHIM',
        rating: 5,
        text: "Une expérience très positive ! Le cabinet est magnifique et d'une propreté clinique. Dr Et-Tahery est vraiment à l'écoute, il prend le temps d'expliquer chaque étape, ce qui est très rassurant. Je suis ravie d'avoir trouvé un dentiste aussi compétent à Azzouzia. Merci pour votre douceur.",
        image: 'https://ui-avatars.com/api/?name=Hasna+AIT+BEN+BRAHIM&background=0066CC&color=fff'
    },
    {
        id: 2,
        name: 'Larbi Dahmani',
        rating: 5,
        text: "J'ai découvert le cabinet par un pure hasard, je suis tombée sur un médecin très compétant ,compréhensif ,très attentif et qui prend le temps de communiquer . Il a traité ma douleur dentaire d'une manière magique .Tout mon respect, je recommande vivement. Et je le remercie pour son professionnalisme,Barak'allahou fik 🤲🏻 ...",
        image: 'https://ui-avatars.com/api/?name=Larbi+Dahmani&background=0066CC&color=fff'
    },
    {
        id: 3,
        name: 'Manal Azgui',
        rating: 5,
        text: "Très belle découverte ! Un accueil chaleureux et un service de qualité. Les prix sont raisonnables et le docteur est très gentil. Merci Dr Et-Tahery pour votre honnêteté.",
        image: 'https://ui-avatars.com/api/?name=Manal+Azgui&background=0066CC&color=fff'
    },
    {
        id: 4,
        name: 'Chaima Benbrahim',
        rating: 5,
        text: "Après avoir visité plusieurs dentistes, j'ai trouvé le Dr Et-Tahery à Azzouzia et je suis vraiment satisfaite. Il prend le temps d'expliquer les traitements et met les patients à l'aise. Je le recommande sans hésitation !",
        image: 'https://ui-avatars.com/api/?name=Chaima+Benbrahim&background=0066CC&color=fff'
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Témoignages</span>
                    <h2 className="text-4xl font-serif font-bold mt-2 text-gray-900">Ce que disent nos patients</h2>
                </div>

                <div className="max-w-4xl mx-auto relative">

                    <div className="relative overflow-hidden min-h-[300px] md:min-h-[250px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 mx-4"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="relative">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                                            <img
                                                src={testimonials[current].image}
                                                alt={testimonials[current].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full">
                                            <Quote className="w-4 h-4 fill-current" />
                                        </div>
                                    </div>

                                    <div className="text-center md:text-left flex-1">
                                        <div className="flex gap-1 justify-center md:justify-start mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-lg italic mb-6">"{testimonials[current].text}"</p>
                                        <h4 className="font-bold text-gray-900 text-xl">{testimonials[current].name}</h4>
                                        <p className="text-primary text-sm">Patient vérifié</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
