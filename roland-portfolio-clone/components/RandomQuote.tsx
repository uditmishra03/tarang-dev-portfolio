import React, { useState, useEffect } from 'react';

const quotes = [
  "Building bridges between code, cloud, and culture.",
  "Automating the mundane to empower the extraordinary.",
  "Stability is not a destination, it's a journey.",
  "Turning complex infrastructure into elegant code.",
  "Deployment should be boring, innovation exciting."
];

export const RandomQuote: React.FC = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Select a random quote only once on mount
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  // Avoid rendering empty initially to prevent layout shift, or render a default
  if (!quote) return null; 

  return (
    <div className="flex h-20 items-center justify-center px-4">
      <p className="mx-auto max-w-3xl text-center text-lg font-light italic text-slate-600 dark:text-slate-400 sm:text-xl">
        <span className="mr-2 inline-block font-serif text-2xl not-italic text-blue-500">"</span>
        {quote}
        <span className="ml-2 inline-block font-serif text-2xl not-italic text-blue-500">"</span>
      </p>
    </div>
  );
};