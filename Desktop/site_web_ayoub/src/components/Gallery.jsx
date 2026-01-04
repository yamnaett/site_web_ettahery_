import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import gallery1 from '../assets/gallery/gallery-1.png';
import gallery1 from '../assets/gallery/gallery-1.png';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import gallery4 from '../assets/gallery/gallery-4.png';

// Using local images for gallery
const galleryImages = [
    { id: 1, src: gallery1, category: 'Cabinet', type: 'image' },
    { id: 2, src: gallery3, category: 'Cabinet', type: 'image' },
    { id: 3, src: gallery4, category: 'Sourire', type: 'image' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (img) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

    const navigate = (direction) => {
        if (!selectedImage) return;
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        // Loop navigation
        if (newIndex >= galleryImages.length) newIndex = 0;
        if (newIndex < 0) newIndex = galleryImages.length - 1;

        setSelectedImage(galleryImages[newIndex]);
    };

    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Notre Environnement</span>
                    <h2 className="text-4xl font-serif font-bold mt-2 text-gray-900">Visitez le cabinet</h2>
                    <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            layoutId={`img-${image.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl p-3 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                            onClick={() => openLightbox(image)}
                        >
                            <div className="relative w-full h-80 overflow-hidden rounded-xl">
                                {image.type === 'video' ? (
                                    <iframe
                                        src={image.src}
                                        title={image.category}
                                        className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105 brightness-[1.02]"
                                        frameBorder="0"
                                        scrolling="no"
                                    ></iframe>
                                ) : (
                                    <img
                                        src={image.src}
                                        alt={image.category}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 brightness-[1.05] contrast-[1.05] group-hover:brightness-110"
                                    />
                                )}

                                {/* Overlay - Lighter & Cleaner */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <ZoomIn className="text-white w-6 h-6" />
                                    </div>
                                    <span className="text-white font-serif text-xl tracking-wide font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {image.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all hidden md:block"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all hidden md:block"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        {/* Image */}
                        <motion.div
                            layoutId={`img-${selectedImage.id}`}
                            className="relative max-w-5xl max-h-[80vh] w-full"
                        >
                            {selectedImage.type === 'video' ? (
                                <iframe
                                    src={selectedImage.src}
                                    title={selectedImage.category}
                                    className="w-full h-[80vh] rounded-lg shadow-2xl"
                                    frameBorder="0"
                                    scrolling="no"
                                ></iframe>
                            ) : (
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.category}
                                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                                />
                            )}
                            <div className="absolute bottom-[-3rem] left-0 text-white font-medium text-lg">
                                {selectedImage.category}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
