import React from 'react';

export const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-2 mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-2">
    <Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200">{children}</h2>
  </div>
);
