import React from 'react';
import { MessageCircle, CalendarCheck } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FinalCTA = () => {
    const [ref, isVisible] = useScrollReveal(0.15);

    return (
        <section id="cta" className="w-full py-24 bg-brand-peach/20 px-4">
            <div ref={ref} className={`container mx-auto max-w-4xl text-center flex flex-col items-center gap-8 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-text leading-tight drop-shadow-sm">
                    Seu casamento merece beleza<br />
                    até nos brinquedos.
                </h2>

                <p className="font-sans text-stone-600 text-lg md:text-xl font-light max-w-lg">
                    Fale direto com a Victoria e veja se a PlayFun faz sentido para o seu evento.
                </p>

                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 px-5 py-2 rounded-full font-sans text-sm font-medium">
                    <CalendarCheck size={16} />
                    Agenda limitada para 2026 — garanta sua data
                </div>

                <div className="pt-2">
                    <a
                        href="https://wa.me/5516991600050?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-sans text-xl font-semibold tracking-wide overflow-hidden animate-pulse-glow"
                        style={{ background: 'linear-gradient(135deg, #2D6A4F, #1B4332)', color: '#fff' }}
                    >
                        <MessageCircle size={24} />
                        Conversar no WhatsApp agora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
