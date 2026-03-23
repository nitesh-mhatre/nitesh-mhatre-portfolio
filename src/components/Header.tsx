import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface HeaderProps {
  data: {
    name: string;
    title: string;
    summary: string;
    contact: {
      email: string;
      phone: string;
      location: string;
      dob: string;
    };
  };
}

export const Header = ({ data }: HeaderProps) => (
  <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pt-16 pb-12 px-6 transition-colors duration-300">
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="flex-1">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            {data.name}
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium mb-6">
            {data.title}
          </p>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg italic">
            "{data.summary}"
          </p>
        </div>
        
        <div className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${data.contact.email}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              {data.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{data.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{data.contact.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Born: {data.contact.dob}</span>
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);
