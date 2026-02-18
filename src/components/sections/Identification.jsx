import React from 'react';
import { Check, X } from 'lucide-react';

const Identification = () => {
    return (
        <section className="w-full py-20 bg-white px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24">

                    {/* For You */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-serif text-3xl text-brand-text mb-4">Essa solução é para você que:</h2>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Se preocupa com cada detalhe estético do seu evento",
                                "Quer convidados aproveitando até o fim",
                                "Não aceita brinquedos coloridos quebrando a decoração",
                                "Quer tranquilidade — não improviso"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-1 round-full p-0.5 bg-brand-green/20 text-teal-700 rounded-full">
                                        <Check size={14} />
                                    </span>
                                    <span className="font-sans text-stone-700 font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not For You */}
                    <div className="flex flex-col gap-6 opacity-70">
                        <h2 className="font-sans font-bold text-lg text-stone-400 mb-4 uppercase tracking-wider">Não é para quem:</h2>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Busca recreação infantil comum",
                                "Decide apenas por preço"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-1 text-red-300">
                                        <X size={20} />
                                    </span>
                                    <span className="font-sans text-stone-500 font-light line-through decoration-stone-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Identification;
