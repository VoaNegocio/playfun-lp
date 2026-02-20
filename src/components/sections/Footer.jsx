import React from 'react';
import { MapPin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-12 bg-white px-4 border-t border-stone-100">
            <div className="container mx-auto max-w-6xl text-center flex flex-col gap-6 items-center">
                <img src="/assets/logo/logo-playfun.jpg" alt="PlayFun Logo" className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 transition-all mix-blend-multiply" />

                <p className="font-sans text-stone-500 flex items-center gap-2 justify-center text-sm uppercase tracking-widest">
                    <MapPin size={16} />
                    Atendemos Ribeirão Preto e região
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.instagram.com/playfun.rp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-stone-100 text-stone-500 hover:bg-brand-pink/30 hover:text-pink-600 transition-all duration-300"
                        aria-label="Instagram PlayFun"
                    >
                        <Instagram size={20} />
                    </a>
                </div>

                <p className="font-serif text-stone-300 text-xs mt-4">
                    © 2026 PlayFun Recreação Premium. Todos os direitos reservados.
                </p>
                <p className="font-sans text-stone-400 text-xs mt-2">
                    Landing Page made by:{' '}
                    <a href="https://lp.voanegocio.com.br/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-peach transition-colors">Voa Negócio</a>
                    {' & '}
                    <a href="https://webdesignervictor.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-peach transition-colors text-shimmer">Victor</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
