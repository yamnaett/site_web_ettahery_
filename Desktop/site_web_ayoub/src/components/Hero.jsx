import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-900 text-white">

            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068')] bg-cover bg-fixed bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/70 to-gray-900" />
            </div>

            {/* Animated Shapes */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute right-0 top-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, delay: 1 }}
                className="absolute left-0 bottom-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"
            />

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 drop-shadow-lg">
                            Sublimez votre sourire avec <br className="hidden md:block" /> nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent animate-gradient">soins experts</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            Une approche moderne et bienveillante de la dentisterie. Du soin esthétique à la chirurgie complexe, nous redonnons vie à votre sourire dans un cadre d'exception.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <a
                                href="#booking"
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group border border-transparent"
                            >
                                Prendre RDV
                                <Calendar className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a
                                href="#services"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                            >
                                Nos Services
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default Hero;
