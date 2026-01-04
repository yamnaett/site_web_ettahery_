import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16" id="contact">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand & Bio */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover bg-white" />
                            <div className="font-serif text-2xl font-bold">
                                Et-Tahery
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Votre sourire est notre priorité. Un service expert et dévoué pour des soins dentaires d'excellence dans un cadre moderne et apaisant.
                        </p>


                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6">Liens Rapides</h3>
                        <ul className="space-y-3">
                            {['Accueil', 'Services', 'À propos', 'Galerie', 'Témoignages', 'Prendre RDV'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6">Nous Contacter</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>Quartier El Karam, N° 88, entrée Azouzia (en provenance du rond-point El Ayachi)<br />Marrakech, Maroc</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+212 5 25 36 36 30  </span>

                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>centredentaireettahery@gmail.com</span>
                            </li>
                            <li className="pt-4">
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/share/1CoEELmpnR/?mibextid=wwXIfr" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/centre_dentaire_ettahery?igsh=MXNseGV0d282dHV3YQ==" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="https://wa.me/212643683026?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous." className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#128C7E] transition-all hover:scale-110 shadow-[0_0_15px_rgba(37,211,102,0.4)] relative group">
                                        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-50 animate-ping"></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            stroke="currentColor"
                                            strokeWidth="0"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6">Horaires</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-gray-400 pb-2 border-b border-gray-800">
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lundi - Vendredi</span>
                                <span>09:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400 pb-2 border-b border-gray-800">
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Samedi</span>
                                <span>09:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Dimanche</span>
                                <span className="text-primary font-bold">Fermé</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 Centre Dentaire Et-Tahery. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
