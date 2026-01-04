import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="relative h-[600px] flex flex-col md:flex-row">

            {/* Map Side */}
            <div className="w-full md:w-1/2 h-full bg-gray-200 relative min-h-[300px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.21948606025!2d-8.0582701!3d31.6825672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeb005145e623%3A0x5e210b2e35e8e0d8!2zQ2VudHJlIERlbnRhaXJlIEVULVRBSEVSWSAtINmF2LHZg9iyINi32Kgg2KfZhNij2LPZhtin2YYg2KfZhNi32KfZh9ix2Yo!5e0!3m2!1sfr!2sma!4v1767542109180!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">

                <div className="max-w-md mx-auto">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Contact</span>
                    <h2 className="text-4xl font-serif font-bold mt-2 mb-8 text-gray-900">Nous trouver</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Adresse</h4>
                                <p className="text-gray-600">Quartier El Karam, N° 88, entrée Azouzia (en provenance du rond-point El Ayachi), ,<br />, Marrakech 40000</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Téléphone</h4>
                                <p className="text-gray-600">+212 5 25 36 36 30</p>
                                <p className="text-gray-600">+212 6 43 68 30 26 </p>
                                <p className="text-gray-500 text-sm">Urgences 24/7 pour nos patients</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                <p className="text-gray-600">centredentaireettahery@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Horaires</h4>
                                <p className="text-gray-600">Lundi - Vendredi: 09:00 - 19:00</p>
                                <p className="text-gray-600">Samedi: 09:00 - 17:00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
