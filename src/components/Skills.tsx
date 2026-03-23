import React from 'react';
import { Code } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

interface SkillsProps {
  skills: string[];
}

export const Skills = ({ skills }: SkillsProps) => (
  <section>
    <SectionTitle icon={Code}>Skills</SectionTitle>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-colors duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);
