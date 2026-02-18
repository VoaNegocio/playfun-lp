import React from 'react';

const DecisionWrapper = ({ children }) => {
    return (
        <main className="w-full mx-auto antialiased bg-brand-offwhite text-brand-text font-sans scroll-smooth">
            {children}
        </main>
    );
};

export default DecisionWrapper;
