import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface DownloadButtonProps {
  targetId: string;
  fileName: string;
}

export const DownloadButton = ({ targetId, fileName }: DownloadButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    setIsGenerating(true);
    try {
      // Temporarily hide theme toggle and download button for clean PDF
      const controls = document.querySelectorAll('.pdf-hide');
      controls.forEach(el => (el as HTMLElement).style.display = 'none');

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: window.getComputedStyle(element).backgroundColor,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`${fileName}.pdf`);

      // Restore controls
      controls.forEach(el => (el as HTMLElement).style.display = '');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="fixed top-6 right-6 p-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg hover:scale-110 transition-all duration-200 z-50 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Download Resume"
    >
      {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
    </button>
  );
};
