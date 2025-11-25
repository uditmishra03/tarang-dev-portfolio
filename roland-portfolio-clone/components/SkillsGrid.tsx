import React from 'react';
import { Skill } from '../types';

interface SkillsGridProps {
  skills: Skill[];
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div 
          key={skill.name}
          className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50 dark:hover:bg-blue-500/5"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors dark:bg-slate-800 dark:text-blue-500 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
            <skill.icon size={18} />
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};