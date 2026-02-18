import React from 'react';
import { MessageCircle } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="w-full py-24 bg-brand-offwhite px-4">
            <div className="container mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
                <h2 className="font-serif text-4xl md:text-5xl text-brand-text leading-tight drop-shadow-sm">
                    Seu casamento merece beleza<br />
                    até nos brinquedos.
                </h2>

                <p className="font-sans text-stone-600 text-lg md:text-xl font-light max-w-lg">
                    Fale direto com a Victoria e veja se a PlayFun faz sentido para o seu evento.
                </p>

                <div className="pt-6">
                    <a
                        href="https://wa.me/5500000000000" // Placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-gold text-white px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 font-sans text-xl font-medium tracking-wide"
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
