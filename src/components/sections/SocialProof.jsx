import React from 'react';

const SocialProof = () => {
    return (
        <section className="w-full py-20 bg-white px-4">
            <div className="container mx-auto max-w-4xl flex flex-col items-center">
                {/* Instagram Video Placeholder */}
                <div className="max-w-sm w-full">
                    <video
                        src="/assets/videos/video-playfun-crianca-min.mp4"
                        controls
                        playsInline
                        className="w-full h-auto rounded-xl shadow-lg"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
