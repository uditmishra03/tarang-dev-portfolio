import React, { useState, useEffect } from 'react';
import { Wrench, Cloud, Server, Zap } from './Icons';

const roles = [
  { text: "DevOps Leader", icon: Wrench, color: "text-blue-500" },
  { text: "Cloud Architect", icon: Cloud, color: "text-purple-500" },
  { text: "Platform Engineer", icon: Server, color: "text-green-500" },
  { text: "Automation Expert", icon: Zap, color: "text-yellow-500" },
];

export const RoleRotator: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => prevIndex + 1);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle the seamless loop reset
  useEffect(() => {
    if (index === roles.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500); 
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const FirstRoleIcon = roles[0].icon;

  return (
    <div className="flex items-center justify-center py-2 w-full">
      {/* Text Scroller Window containing Icon and Text */}
      <div className="relative h-9 overflow-hidden w-[280px] sm:w-[340px]">
        <div 
          className={`absolute left-0 top-0 w-full flex flex-col items-center ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateY(-${index * 2.25}rem)` }}
        >
          {roles.map((role, i) => (
            <div key={i} className={`flex h-9 w-full justify-center items-center gap-2 text-xl font-bold sm:text-2xl whitespace-nowrap ${role.color}`}>
              <role.icon size={24} strokeWidth={2.5} />
              <span>{role.text}</span>
            </div>
          ))}
          {/* Clone the first item at the end for seamless loop */}
          <div className={`flex h-9 w-full justify-center items-center gap-2 text-xl font-bold sm:text-2xl whitespace-nowrap ${roles[0].color}`}>
            <FirstRoleIcon size={24} strokeWidth={2.5} />
            <span>{roles[0].text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};