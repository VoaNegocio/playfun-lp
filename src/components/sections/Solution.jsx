import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CARD_OFFSET = 40;
const SCALE_FACTOR = 0.05;
const AUTO_PLAY_INTERVAL = 4000;

const cardData = [
    { id: 1, src: "/assets/imgs/imgcard.webp", alt: "Inflável branco e elegante" },
    { id: 2, src: "/assets/imgs/imghero.webp", alt: "Evento com recreação PlayFun" },
    { id: 3, src: "/assets/imgs/imgbrinquedo-playfun.webp", alt: "Brinquedo PlayFun para eventos" },
    { id: 4, src: "/assets/imgs/imgmesa-playfun.webp", alt: "Mesa decorada PlayFun" },
    { id: 5, src: "/assets/imgs/imgbrinquedoecrianca-playfun.webp", alt: "Criança brincando no evento" },
];

const Card = ({ card, index, moveCard }) => {
    return (
        <motion.div
            layout
            className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing ring-2 ring-white/30"
            style={{
                transformOrigin: 'top center',
            }}
            initial={{
                scale: 1 - index * SCALE_FACTOR,
                top: index * CARD_OFFSET,
                opacity: index > 2 ? 0 : 1,
                zIndex: 100 - index
            }}
            animate={{
                scale: 1 - index * SCALE_FACTOR,
                top: index * CARD_OFFSET,
                opacity: index > 2 ? 0 : 1,
                zIndex: 100 - index,
                rotate: 0,
                x: 0
            }}
            exit={{
                x: index === 0 ? -300 : 0,
                opacity: 0,
                scale: 1,
                rotate: -20,
                zIndex: 101,
                transition: { duration: 0.4 }
            }}
            transition={{
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1]
            }}
            drag={index === 0 ? "x" : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={(event, info) => {
                if (index === 0 && (Math.abs(info.offset.x) > 100)) {
                    moveCard();
                }
            }}
            onClick={() => {
                if (index === 0) moveCard();
            }}
        >
            <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/10" style={{ opacity: index * 0.15 }} />
            {index > 0 && (
                <div className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none" style={{ backdropFilter: 'blur(2px)' }} />
            )}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none" />
        </motion.div>
    );
};

const Solution = () => {
    const [cards, setCards] = useState(cardData.map(c => ({ ...c, uniqueId: `${c.id}-0` })));
    const [activeIndex, setActiveIndex] = useState(0);
    const [ref, isVisible] = useScrollReveal(0.15);

    const moveCard = useCallback(() => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            const topCard = newCards.shift();
            const version = parseInt(topCard.uniqueId.split('-')[1]) + 1;
            const recycledCard = { ...topCard, uniqueId: `${topCard.id}-${version}` };
            newCards.push(recycledCard);
            return newCards;
        });
        setActiveIndex((prev) => (prev + 1) % cardData.length);
    }, []);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(moveCard, AUTO_PLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [moveCard]);

    return (
        <section id="solution" className="w-full py-24 bg-brand-sage/20 px-4">
            <div ref={ref} className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Title - shows first on mobile, part of right column on desktop */}
                    <div className={`order-1 md:order-2 scroll-reveal-right ${isVisible ? 'visible' : ''}`}>
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <span className="font-sans text-brand-peach font-bold tracking-widest uppercase text-sm">A Solução</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-text">
                                Elegância não precisa excluir as crianças.
                            </h2>
                        </div>
                    </div>

                    {/* Stacked Card Carousel - shows second on mobile, left column on desktop (spans all rows) */}
                    <div className={`order-2 md:order-1 md:row-span-2 w-full scroll-reveal-left ${isVisible ? 'visible' : ''}`}>
                        <div className="relative w-full h-[420px] md:h-[600px] overflow-visible perspective-1000">
                            <AnimatePresence>
                                {cards.map((card, index) => (
                                    <Card
                                        key={card.uniqueId}
                                        card={card}
                                        index={index}
                                        moveCard={moveCard}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-4">
                            {cardData.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-brand-peach w-6'
                                        : 'bg-stone-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Text content - shows third on mobile, continues right column on desktop */}
                    <div className={`order-3 md:order-2 flex flex-col gap-8 mt-10 md:mt-0 scroll-reveal-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        <p className="font-sans text-stone-600 leading-relaxed">
                            A PlayFun criou uma estrutura pensada para eventos sociais exigentes — onde cada elemento conversa com a decoração, não disputa atenção.
                        </p>

                        <ul className="space-y-4 font-sans text-stone-700">
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-gold mt-2.5 shrink-0"></span>
                                Infláveis brancos que valorizam fotos e cenários
                            </li>
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-peach mt-2.5 shrink-0"></span>
                                Recreação organizada, sem interferir no cerimonial
                            </li>
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-sage mt-2.5 shrink-0"></span>
                                Oficinas criativas, silenciosas e visualmente neutras
                            </li>
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-pink mt-2.5 shrink-0"></span>
                                Equipe selecionada para cuidar — não apenas entreter
                            </li>
                        </ul>

                        <div className="p-6 bg-brand-cream/30 border-l-4 border-brand-gold rounded-r-lg">
                            <p className="font-serif text-xl text-brand-text italic">
                                "Tudo é pensado para integrar, nunca competir, com a beleza do seu casamento."
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 flex justify-center md:justify-start">
                            <a
                                href="https://wa.me/5516991600050?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-sans text-lg font-semibold tracking-wide overflow-hidden animate-pulse-glow w-full md:w-auto justify-center"
                                style={{ background: 'linear-gradient(135deg, #2D6A4F, #1B4332)', color: '#fff' }}
                            >
                                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                                Falar com a PlayFun no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
