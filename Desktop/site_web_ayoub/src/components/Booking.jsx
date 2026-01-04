import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/centredentaireettahery@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service || 'Non spécifié',
                    date: formData.date || 'Non spécifiée',
                    message: formData.message,
                    _subject: `Nouveau Rendez-vous: ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
            } else {
                console.error("Erreur d'envoi", response);
                setStatus('error'); // minimal error handling
            }
        } catch (error) {
            console.error("Erreur réseau", error);
            setStatus('error');
        }
    };

    return (
        <section id="booking" className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Side */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Prenez rendez-vous dès aujourd'hui</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                            Votre sourire mérite ce qu'il y a de mieux. Réservez votre consultation en quelques clics.
                        </p>

                        <div className="hidden lg:grid grid-cols-2 gap-6 mt-12">
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <Clock className="w-8 h-8 mb-2" />
                                <h4 className="font-bold">Horaires flexibles</h4>
                                <p className="text-sm text-blue-100">Ouvert du lundi au samedi</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <Calendar className="w-8 h-8 mb-2" />
                                <h4 className="font-bold">Réservation facile</h4>
                                <p className="text-sm text-blue-100">Confirmation immédiate</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 max-w-lg bg-white rounded-2xl p-8 shadow-2xl text-gray-800"
                    >
                        <AnimatePresence mode='wait'>
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
                                    <p className="text-gray-500 mb-6">
                                        Nous avons bien reçu votre demande de rendez-vous. Notre équipe vous contactera très rapidement pour confirmer.
                                    </p>
                                    <button
                                        onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' }); }}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Nouvelle demande
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Nom complet *"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Téléphone *"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email *"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all text-gray-600"
                                        >
                                            <option value="">Type de soin...</option>
                                            <option value="consultation">Consultation Générale</option>
                                            <option value="orthodontie">Orthodontie</option>
                                            <option value="implant">Implantologie</option>
                                            <option value="esthetique">Esthétique</option>
                                            <option value="enfant">Enfant</option>
                                            <option value="urgence">Urgence</option>
                                        </select>

                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none text-gray-600"
                                        />
                                    </div>

                                    <textarea
                                        name="message"
                                        placeholder="Message (facultatif)..."
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === 'submitting' ? (
                                            <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                                        ) : 'Confirmer le Rendez-vous'}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
