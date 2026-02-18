import React from 'react';

const Solution = () => {
    return (
        <section className="w-full py-24 bg-white px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual element or just text structure as per briefing */}
                    <div className="order-2 md:order-1 relative h-[500px] bg-stone-100 rounded-lg flex items-center justify-center italic text-stone-400 font-serif p-8 text-center">
                        Foto: Crianças brincando em inflável branco harmonizado com a festa
                    </div>

                    <div className="flex flex-col gap-8 order-1 md:order-2">
                        <div className="flex flex-col gap-4">
                            <span className="font-sans text-brand-gold font-medium tracking-widest uppercase text-sm">A Solução</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-text">
                                Elegância não precisa excluir as crianças.
                            </h2>
                        </div>

                        <p className="font-sans text-stone-600 leading-relaxed">
                            A PlayFun criou uma estrutura pensada para eventos sociais exigentes — onde cada elemento conversa com a decoração, não disputa atenção.
                        </p>

                        <ul className="space-y-4 font-sans text-stone-700">
                            <li className="flex gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0"></span>
                                Infláveis brancos que valorizam fotos e cenários
                            </li>
                            <li className="flex gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0"></span>
                                Recreação organizada, sem interferir no cerimonial
                            </li>
                            <li className="flex gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0"></span>
                                Oficinas criativas, silenciosas e visualmente neutras
                            </li>
                            <li className="flex gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5 flex-shrink-0"></span>
                                Equipe selecionada para cuidar — não apenas entreter
                            </li>
                        </ul>

                        <div className="p-6 bg-brand-offwhite border-l-4 border-brand-gold rounded-r-lg">
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
