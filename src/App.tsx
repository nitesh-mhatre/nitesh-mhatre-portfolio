import React, { useState, useEffect } from 'react';
import { GraduationCap, Globe, BarChart, Settings } from 'lucide-react';
import { RESUME_DATA } from './constants';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { SectionTitle } from './components/SectionTitle';
import { ThemeToggle } from './components/ThemeToggle';
import { DownloadButton } from './components/DownloadButton';
import { SidebarAccent } from './components/SidebarAccent';
import { Lightbulb, Target } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    } catch (e) {
      console.warn('LocalStorage not accessible', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } catch (e) {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div 
        id="resume-root" 
        className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-900 dark:selection:bg-zinc-100 selection:text-white dark:selection:text-zinc-900 transition-colors duration-300"
      >
        <div className="pdf-hide">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <DownloadButton targetId="resume-root" fileName={`Resume_${RESUME_DATA.name.replace(' ', '_')}`} />
        </div>

        {/* Header Section */}
        <Header data={RESUME_DATA} />

        <main className="max-w-4xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <Experience workExperience={RESUME_DATA.workExperience} />

            {/* Other Experience */}
            <section>
              <SectionTitle icon={Settings}>Other Experience</SectionTitle>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{RESUME_DATA.otherExperience.company}</h3>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{RESUME_DATA.otherExperience.period}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {RESUME_DATA.otherExperience.description}
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-16">
            <Skills skills={RESUME_DATA.skills} />

            {/* Education */}
            <section>
              <SectionTitle icon={GraduationCap}>Education</SectionTitle>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{RESUME_DATA.education.degree}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {RESUME_DATA.education.institution}
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <SectionTitle icon={Globe}>Languages</SectionTitle>
              <div className="grid grid-cols-2 gap-4">
                {RESUME_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {lang}
                  </div>
                ))}
              </div>
            </section>

            {/* Accent Components Group */}
            <div className="space-y-4">
              {/* Data Visualization Accent */}
              <SidebarAccent 
                icon={BarChart} 
                title="Data Driven" 
                description="Transforming raw data into actionable business intelligence through Python and SQL." 
              />

              {/* Creative Accent */}
              <SidebarAccent 
                icon={Lightbulb} 
                title="Out of Box Thinking" 
                description="Approaching complex problems with unconventional solutions and creative analytical perspectives." 
              />

              {/* Strategic Accent */}
              <SidebarAccent 
                icon={Target} 
                title="Strategic Analyst" 
                description="Identifying trends and patterns in large datasets to inform high-level business decisions." 
              />
            </div>
          </div>
        </main>

        <footer className="max-w-4xl mx-auto py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 text-center transition-colors duration-300">
          <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            {RESUME_DATA.name} • Built with React & Tailwind
          </p>
        </footer>
      </div>
    </div>
  );
}
