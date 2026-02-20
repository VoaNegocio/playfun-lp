import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const SocialProof = () => {
    const [scrollRef, isVisible] = useScrollReveal(0.15);
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovering(false);
    };

    return (
        <section className="w-full py-20 bg-white px-4">
            <div ref={scrollRef} className="container mx-auto max-w-4xl flex flex-col items-center gap-8">
                {/* Section Header */}
                <div className={`text-center scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <span className="font-sans text-brand-peach font-bold tracking-widest uppercase text-sm">Prova Social</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-text mt-3">
                        Veja a PlayFun em ação
                    </h2>
                    <p className="font-sans text-stone-600 mt-3 max-w-lg mx-auto">
                        Momentos reais de eventos onde a diversão das crianças conversou perfeitamente com a elegância da decoração.
                    </p>
                </div>

                {/* 3D Glass Video Card */}
                <div
                    className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: '200ms', perspective: '1000px' }}
                >
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={handleMouseLeave}
                        className="relative max-w-sm w-full p-3 rounded-2xl cursor-default"
                        style={{
                            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                            transformStyle: 'preserve-3d',
                            background: 'rgba(20, 18, 15, 0.25)',
                            backdropFilter: 'blur(30px) saturate(1.2)',
                            WebkitBackdropFilter: 'blur(30px) saturate(1.2)',
                            border: '1.5px solid rgba(255, 255, 255, 0.18)',
                            boxShadow: isHovering
                                ? '0 25px 60px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(255,255,255,0.05)'
                                : '0 15px 40px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.03)',
                        }}
                    >
                        {/* Glass reflection */}
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 30%, transparent 60%, rgba(255,255,255,0.04) 100%)',
                            }}
                        />

                        {/* Video */}
                        <div className="relative rounded-xl overflow-hidden shadow-inner">
                            <video
                                src="/assets/videos/video-playfun-crianca-min.mp4"
                                controls
                                playsInline
                                className="w-full h-auto rounded-xl"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Glass border overlay */}
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                                border: '1px solid rgba(212, 184, 150, 0.3)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
