import React from 'react';
import { Experience } from '../types';
import { Building2 } from 'lucide-react';

interface ExperienceTimelineProps {
  data: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ data }) => {
  return (
    <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12 pb-12">
      {data.map((job) => (
        <div key={job.id} className="relative pl-8 md:pl-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-[#050a18] bg-blue-600 ring-4 ring-white dark:ring-[#050a18]"></div>
          
          <div className="group relative flex flex-col gap-4 md:flex-row md:gap-8">
            {/* Icon/Logo Placeholder */}
            <div className="hidden md:block">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors dark:bg-slate-900 dark:border-slate-800">
                 <Building2 size={24} />
              </div>
            </div>

            <div className="flex-1">
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                 <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.company} <span className="text-slate-500 text-base font-normal ml-2">({job.location})</span></h3>
                    <div className="text-lg font-medium text-slate-700 dark:text-blue-400 mt-1">{job.role}</div>
                 </div>
                 <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-500 mt-2 sm:mt-0 font-mono">
                    <span className="mr-2 text-blue-500">/</span> {job.start} – {job.end}
                 </div>
               </div>

               <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                 {job.description}
               </p>

               <div className="flex flex-wrap gap-2">
                 {job.technologies.map((tech) => (
                   <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};