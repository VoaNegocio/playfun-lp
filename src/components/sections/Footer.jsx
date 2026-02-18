import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-12 bg-white px-4 border-t border-stone-100">
            <div className="container mx-auto max-w-6xl text-center flex flex-col gap-6 items-center">
                <img src="/assets/logo/logo-playfun.jpg" alt="PlayFun Logo" className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 transition-all mix-blend-multiply" />

                <p className="font-sans text-stone-500 flex items-center gap-2 justify-center text-sm uppercase tracking-widest">
                    <MapPin size={16} />
                    Atendemos Ribeirão Preto e região
                </p>
                <p className="font-serif text-stone-300 text-xs mt-4">
                    © 2026 PlayFun Recreação Premium. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
