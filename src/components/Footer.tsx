/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Separator } from "@/src/components/ui/separator";
import { resumeData } from "@/src/constants/resumeData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/10">
               <img 
                 src={resumeData.personalInfo.links.profileImage} 
                 alt="Footer Avatar" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-display font-black tracking-tight">{resumeData.personalInfo.name}</h3>
              <p className="text-sm text-muted-foreground font-medium">
                Architecting the intelligent systems of tomorrow.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          <p>© {currentYear} • All Rights Reserved</p>
          <p>Built with React + Tailwind + Precision</p>
        </div>
      </div>
    </footer>
  );
}
