import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Hero = () => {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section id="hero" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-brand-offwhite px-4 pt-28 pb-12 md:pt-32 md:pb-24 overflow-hidden">
            <div ref={ref} className="container mx-auto max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Content */}
                <div className="contents md:flex md:flex-col md:gap-6 text-center md:text-left z-10 order-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="order-1 md:order-none font-serif text-4xl md:text-6xl text-brand-text font-bold leading-tight drop-shadow-sm relative z-10"
                    >
                        Infláveis brancos e recreação organizada para eventos elegantes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="order-3 md:order-none font-sans text-lg md:text-xl text-stone-600 font-light max-w-xl mx-auto md:mx-0 relative z-10 pt-4 md:pt-0"
                    >
                        Crianças seguras, pais tranquilos e convidados aproveitando até o fim — com total respeito à estética do seu evento.
                    </motion.p>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="order-2 md:order-none flex items-center gap-2 justify-center md:justify-start pt-2"
                    >
                        <span className="inline-flex items-center gap-1.5 bg-brand-sage/30 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-sans font-medium">
                            <Sparkles size={14} />
                            Indicada por cerimonialistas
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="order-4 md:order-none pt-4 flex justify-center md:justify-start relative z-10 w-full md:w-auto"
                    >
                        <a
                            href="https://wa.me/5516991600050?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold w-full md:w-auto justify-center overflow-hidden animate-pulse-glow"
                            style={{ background: 'linear-gradient(135deg, #2D6A4F, #1B4332)', color: '#fff' }}
                        >
                            <MessageCircle size={20} />
                            Falar com a PlayFun no WhatsApp
                        </a>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-2 md:order-none relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/30"
                >
                    <img
                        src="/assets/imgs/imghero.webp"
                        alt="Inflável branco em evento elegante"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
