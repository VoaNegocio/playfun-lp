import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CARD_OFFSET = 25;
const SCALE_FACTOR = 0.06;

const cardData = [
    { id: 1, src: "/assets/imgs/imgcard.jpg", alt: "Inflável branco e elegante" },
    { id: 2, src: "/assets/imgs/imghero.jpg", alt: "Evento com recreação PlayFun" },
    { id: 3, src: "/assets/imgs/imgcard.jpg", alt: "Diversão sem poluição visual" },
    { id: 4, src: "/assets/imgs/imghero.jpg", alt: "Momentos inesquecíveis" },
];

const Card = ({ card, index, moveCard }) => {
    return (
        <motion.div
            layout
            className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing bg-white border-4 border-white"
            style={{
                transformOrigin: 'top center',
            }}
            initial={{
                scale: 1 - index * SCALE_FACTOR,
                top: index * CARD_OFFSET,
                opacity: 0,
                zIndex: 0
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
                zIndex: 101, // Ensure it stays on top while exiting
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
        </motion.div>
    );
};

const Solution = () => {
    // Initialize cards with a unique key property constructed from ID + version
    const [cards, setCards] = useState(cardData.map(c => ({ ...c, uniqueId: `${c.id}-0` })));

    const moveCard = () => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            const topCard = newCards.shift();
            // Create a new version of the card so it enters as a "fresh" element
            const version = parseInt(topCard.uniqueId.split('-')[1]) + 1;
            const recycledCard = { ...topCard, uniqueId: `${topCard.id}-${version}` };
            newCards.push(recycledCard);
            return newCards;
        });
    };

    return (
        <section className="w-full py-24 bg-brand-green/20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual element or just text structure as per briefing */}
                    {/* Stacked Card Carousel */}
                    <div className="order-2 md:order-1 relative w-full h-[500px] flex items-center justify-center perspective-1000">
                        <AnimatePresence>
                            {cards.map((card, index) => {
                                return (
                                    <Card
                                        key={card.uniqueId}
                                        card={card}
                                        index={index}
                                        moveCard={moveCard}
                                    />
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-8 order-1 md:order-2">
                        <div className="flex flex-col gap-4">
                            <span className="font-sans text-brand-peach font-bold tracking-widest uppercase text-sm">A Solução</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-text">
                                Elegância não precisa excluir as crianças.
                            </h2>
                        </div>

                        <p className="font-sans text-stone-600 leading-relaxed">
                            A PlayFun criou uma estrutura pensada para eventos sociais exigentes — onde cada elemento conversa com a decoração, não disputa atenção.
                        </p>

                        <ul className="space-y-4 font-sans text-stone-700">
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-blue mt-2.5 flex-shrink-0"></span>
                                Infláveis brancos que valorizam fotos e cenários
                            </li>
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-peach mt-2.5 flex-shrink-0"></span>
                                Recreação organizada, sem interferir no cerimonial
                            </li>
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-green mt-2.5 flex-shrink-0"></span>
                                Oficinas criativas, silenciosas e visualmente neutras
                            </li>
                            <li className="flex gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand-pink mt-2.5 flex-shrink-0"></span>
                                Equipe selecionada para cuidar — não apenas entreter
                            </li>
                        </ul>

                        <div className="p-6 bg-brand-blue/10 border-l-4 border-brand-blue rounded-r-lg">
                            <p className="font-serif text-xl text-brand-text italic">
                                "Tudo é pensado para integrar, nunca competir, com a beleza do seu casamento."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
