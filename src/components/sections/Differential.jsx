import React from 'react';

const Differential = () => {
    return (
        <section className="w-full py-20 bg-brand-blue/20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-8">
                    A PlayFun não trabalha com recreação genérica.
                </h2>

                <p className="font-sans text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                    Ela é reconhecida por cerimonialistas e decoradores por um motivo simples:<br />
                    <strong className="text-brand-text font-medium">o cuidado estético vem antes da operação — e não depois.</strong>
                </p>

                <div className="flex flex-col gap-2 font-serif italic text-stone-500 text-lg">
                    <p>Nada é adaptado “na hora”.</p>
                    <p>Nada é improvisado para parecer bonito em foto.</p>
                </div>

                <p className="mt-8 font-sans font-bold text-brand-text text-xl uppercase tracking-wide">
                    O que você vê, é o que acontece no seu evento.
                </p>
            </div>
        </section>
    );
};

export default Differential;
