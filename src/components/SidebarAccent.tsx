import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarAccentProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'dark' | 'light';
}

export const SidebarAccent = ({ icon: Icon, title, description, variant = 'dark' }: SidebarAccentProps) => {
  const isDark = variant === 'dark';
  
  return (
    <section className={`${
      isDark 
        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900' 
        : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800'
    } p-6 rounded-2xl shadow-xl overflow-hidden relative group transition-colors duration-300`}>
      <div className="relative z-10">
        <Icon className={`w-6 h-6 mb-3 ${
          isDark ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500 dark:text-zinc-400'
        }`} />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className={`text-xs leading-relaxed ${
          isDark ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500 dark:text-zinc-400'
        }`}>
          {description}
        </p>
      </div>
      <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 ${
        isDark ? 'bg-zinc-800 dark:bg-zinc-200' : 'bg-zinc-100 dark:bg-zinc-800'
      }`} />
    </section>
  );
};
