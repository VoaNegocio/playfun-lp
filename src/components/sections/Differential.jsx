import React from 'react';
import { Palette, Camera, Clock, Award, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const differentials = [
    {
        icon: Palette,
        title: "Estética em primeiro lugar",
        description: "O cuidado estético vem antes da operação — e não depois.",
        color: "bg-brand-peach/15 text-orange-700",
    },
    {
        icon: Camera,
        title: "Nada adaptado na hora",
        description: "Cada detalhe é planejado para ser visualmente impecável em fotos.",
        color: "bg-brand-cream/30 text-amber-800",
    },
    {
        icon: Clock,
        title: "Sem improvisação",
        description: "Nada é improvisado para parecer bonito — a beleza é genuína.",
        color: "bg-brand-sage/30 text-emerald-800",
    },
    {
        icon: Award,
        title: "Referência no mercado",
        description: "Reconhecida por cerimonialistas e decoradores exigentes.",
        color: "bg-brand-pink/30 text-pink-700",
    },
];

const Differential = () => {
    const [ref, isVisible] = useScrollReveal(0.15);

    return (
        <section id="differential" className="w-full py-20 bg-linear-to-b from-brand-cream/30 to-brand-offwhite px-4">
            <div ref={ref} className="container mx-auto max-w-5xl">
                <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <span className="font-sans text-brand-peach font-bold tracking-widest uppercase text-sm">Diferenciais</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-text mt-3">
                        A PlayFun não trabalha com recreação genérica.
                    </h2>
                    <p className="font-sans text-lg text-stone-600 mt-4 max-w-2xl mx-auto">
                        Reconhecida por cerimonialistas e decoradores por um motivo simples:
                        <strong className="text-brand-text font-medium"> respeito absoluto pela estética.</strong>
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {differentials.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className={`scroll-reveal ${isVisible ? 'visible' : ''} group p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-stone-100`}
                                style={{ transitionDelay: `${200 + index * 120}ms` }}
                            >
                                <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-serif text-xl text-brand-text mb-2">{item.title}</h3>
                                <p className="font-sans text-stone-600 font-light leading-relaxed">{item.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className={`text-center mt-12 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '700ms' }}>
                    <p className="font-sans font-bold text-brand-text text-xl uppercase tracking-wide">
                        O que você vê, é o que acontece no seu evento.
                    </p>
                </div>

                {/* CTA Button */}
                <div className={`mt-14 flex justify-center scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
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

export default Differential;
