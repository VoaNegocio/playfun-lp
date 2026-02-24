import React from 'react';
import { Check, X, Heart, Eye, Palette, Shield, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const forYouItems = [
    { icon: Eye, text: "Se preocupa com cada detalhe estético do seu evento" },
    { icon: Heart, text: "Quer convidados aproveitando até o fim" },
    { icon: Palette, text: "Não aceita brinquedos coloridos quebrando a decoração" },
    { icon: Shield, text: "Quer tranquilidade — não improviso" },
];

const Identification = () => {
    const [ref, isVisible] = useScrollReveal(0.15);

    return (
        <section id="identification" className="w-full py-20 bg-white px-4">
            <div ref={ref} className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24">

                    {/* For You */}
                    <div className={`scroll-reveal-left ${isVisible ? 'visible' : ''}`}>
                        <div className="flex flex-col gap-6">
                            <h2 className="font-serif text-3xl text-brand-text mb-4">Essa solução é para você que:</h2>
                            <div className="flex flex-col gap-4">
                                {forYouItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-brand-sage/10 hover:bg-brand-sage/20 transition-all duration-300 hover:translate-x-1 cursor-default group"
                                            style={{ transitionDelay: `${index * 80}ms` }}
                                        >
                                            <span className="mt-0.5 p-2 bg-brand-sage/20 text-teal-700 rounded-lg group-hover:bg-brand-sage/30 transition-colors">
                                                <Icon size={16} />
                                            </span>
                                            <span className="font-sans text-stone-700">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Not For You */}
                    <div className={`scroll-reveal-right ${isVisible ? 'visible' : ''}`}>
                        <div className="flex flex-col gap-6 opacity-70">
                            <h2 className="font-sans font-bold text-lg text-stone-400 mb-4 uppercase tracking-wider">Não é para quem:</h2>
                            <div className="flex flex-col gap-4">
                                {[
                                    "Busca recreação infantil comum",
                                    "Decide apenas por preço"
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 hover:bg-stone-100 transition-all duration-300"
                                    >
                                        <span className="mt-0.5 p-2 text-red-300 bg-red-50 rounded-lg">
                                            <X size={16} />
                                        </span>
                                        <span className="font-sans text-stone-500 font-light line-through decoration-stone-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTA Button */}
                <div className={`mt-16 flex justify-center scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
                    <a
                        href="https://wa.me/5516991600050?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-sans text-lg font-semibold tracking-wide overflow-hidden animate-pulse-glow"
                        style={{ background: 'linear-gradient(135deg, #2D6A4F, #1B4332)', color: '#fff' }}
                    >
                        <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                        Falar com a PlayFun no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Identification;
