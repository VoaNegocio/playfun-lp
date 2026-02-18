import React from 'react';

const SocialProof = () => {
    return (
        <section className="w-full py-20 bg-white px-4">
            <div className="container mx-auto max-w-4xl flex flex-col items-center">
                {/* Instagram Video Placeholder */}
                <div className="aspect-[9/16] max-w-sm w-full bg-stone-900 rounded-xl overflow-hidden shadow-2xl relative group">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Play Button Icon */}
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all cursor-pointer">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                        <p className="font-serif italic">Veja a PlayFun em ação</p>
                    </div>
                    {/* <video src="/path/to/video.mp4" controls className="w-full h-full object-cover" /> */}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
