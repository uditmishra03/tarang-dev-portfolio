import React, { useState, useEffect } from 'react';

const quotes = [
  "Building bridges between code, cloud, and culture.",
  "Automating the mundane to empower the extraordinary."
];

export const TypewriterQuote: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % quotes.length;
      const fullText = quotes[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Speed adjustments
      if (isDeleting) {
        setTypingSpeed(30); // Faster deleting
      } else {
        setTypingSpeed(50); // Normal typing
      }

      // Logic for switching states
      if (!isDeleting && text === fullText) {
        // Finished typing full sentence
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && text === '') {
        // Finished deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex h-24 items-center justify-center px-4 sm:h-20">
      <p className="mx-auto max-w-3xl text-center text-xl font-light italic text-slate-600 dark:text-slate-400 sm:text-2xl">
        <span className="mr-2 inline-block font-serif text-3xl not-italic text-blue-500">"</span>
        {text}
        <span className="ml-1 animate-pulse border-r-2 border-blue-500 align-middle text-2xl">&nbsp;</span>
      </p>
    </div>
  );
};
