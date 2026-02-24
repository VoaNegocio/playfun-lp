import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const problemItems = [
    "Pais ficam tensos",
    "Crianças circulam pelo salão",
    "O cerimonial perde fluidez",
    "Convidados vão embora cedo",
];

const Problem = () => {
    const [ref, isVisible] = useScrollReveal(0.15);

    return (
        <section className="w-full py-24 bg-brand-pink/30 px-4">
            <div ref={ref} className={`container mx-auto max-w-3xl text-center flex flex-col gap-8 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-text leading-tight">
                    O problema não é ter crianças no casamento.<br />
                    <span className="font-bold">O problema é tratá-las como um detalhe.</span>
                </h2>

                <div className="flex flex-col gap-6 text-stone-600 font-sans text-lg md:text-xl font-light">
                    <p>Quando isso acontece:</p>
                    <ul className="space-y-3">
                        {problemItems.map((item, index) => (
                            <li
                                key={index}
                                className={`scroll-reveal ${isVisible ? 'visible' : ''} inline-block`}
                                style={{ transitionDelay: `${300 + index * 150}ms` }}
                            >
                                <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink flex-shrink-0" />
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="font-serif text-2xl text-brand-text mt-8 italic">
                    A PlayFun existe para evitar exatamente isso.
                </p>

                {/* CTA Button */}
                <div className={`mt-10 flex justify-center scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
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

export default Problem;
