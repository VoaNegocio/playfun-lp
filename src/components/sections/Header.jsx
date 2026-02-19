import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-brand-offwhite px-4 py-12 md:py-24 overflow-hidden">
            {/* Logo absolute or top */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
                <img src="/assets/logo/logo-playfun.jpg" alt="PlayFun Logo" className="h-12 md:h-16 w-auto mix-blend-multiply" />
            </div>

            <div className="container mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6 text-center md:text-left z-10 order-2 md:order-1">
                    <h1 className="font-serif text-4xl md:text-6xl text-brand-text font-bold leading-tight drop-shadow-sm">
                        Infláveis brancos e recreação organizada para eventos elegantes
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-stone-600 font-light max-w-xl mx-auto md:mx-0">
                        Crianças seguras, pais tranquilos e convidados aproveitando até o fim — com total respeito à estética do seu evento.
                    </p>
                    <div className="pt-4 flex justify-center md:justify-start">
                        <a
                            href="https://wa.me/5500000000000" // Placeholder for WhatsApp
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-peach text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-orange-300 transition-all duration-300 font-medium"
                        >
                            <MessageCircle size={20} className="text-white" />
                            Falar com a PlayFun no WhatsApp
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                    <img
                        src="/assets/imgs/imghero.jpg"
                        alt="Inflável branco em evento elegante"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;
