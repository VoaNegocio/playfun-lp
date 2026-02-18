import React from 'react';

const Problem = () => {
    return (
        <section className="w-full py-24 bg-brand-offwhite px-4">
            <div className="container mx-auto max-w-3xl text-center flex flex-col gap-8">
                <h2 className="font-serif text-3xl md:text-4xl text-brand-text leading-tight">
                    O problema não é ter crianças no casamento.<br />
                    <span className="font-bold">O problema é tratá-las como um detalhe.</span>
                </h2>

                <div className="flex flex-col gap-6 text-stone-600 font-sans text-lg md:text-xl font-light">
                    <p>Quando isso acontece:</p>
                    <ul className="space-y-2">
                        <li>Pais ficam tensos</li>
                        <li>Crianças circulam pelo salão</li>
                        <li>O cerimonial perde fluidez</li>
                        <li>Convidados vão embora cedo</li>
                    </ul>
                </div>

                <p className="font-serif text-2xl text-brand-text mt-8 italic">
                    A PlayFun existe para evitar exatamente isso.
                </p>
            </div>
        </section>
    );
};

export default Problem;
