import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Star, Award, Clock } from 'lucide-react';

const stats = [
    { icon: Users, value: '5000+', label: 'Patients Satisfaits' },
    { icon: Award, value: '15+', label: 'Années d\'Expérience' },
    { icon: Star, value: '98%', label: 'Taux de Satisfaction' },
];

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-4xl font-bold mb-2 font-serif">{stat.value}</h3>
                            <p className="text-blue-100 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
