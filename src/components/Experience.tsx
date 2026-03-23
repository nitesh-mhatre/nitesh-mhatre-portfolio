import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

interface ExperienceProps {
  workExperience: Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
  }>;
}

export const Experience = ({ workExperience }: ExperienceProps) => (
  <section>
    <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
    <div className="space-y-12">
      {workExperience.map((job, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-200 dark:before:bg-zinc-700"
        >
          <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{job.role}</h3>
            <span className="text-xs font-mono bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-2 py-1 rounded">
              {job.period}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{job.company}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
          <ul className="space-y-3">
            {job.highlights.map((highlight, hIndex) => (
              <li key={hIndex} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex gap-3">
                <span className="text-zinc-300 dark:text-zinc-600 mt-1.5">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
