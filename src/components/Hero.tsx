/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, FileDown, Terminal } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { resumeData } from "@/src/constants/resumeData";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative mb-12"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-background shadow-2xl relative z-10">
            <img 
              src={resumeData.personalInfo.links.profileImage} 
              alt={resumeData.personalInfo.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative rings */}
          <div className="absolute inset-0 -m-4 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 -m-8 border border-indigo-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/50 backdrop-blur-sm shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Available for Internships & Projects
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tight mb-8 leading-[0.9]">
            <span className="block text-foreground">{resumeData.personalInfo.name.split(' ')[0]}</span>
            <span className="block text-gradient">{resumeData.personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            {resumeData.personalInfo.professionalSummary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold group">
              View Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold group">
              <FileDown className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </Button>
          </div>
        </motion.div>

        {/* Tech Stack Floating Icons or Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default"
        >
          {["Python", "Machine Learning", "SQL", "FastAPI", "AI Architecture"].map((tech) => (
            <div key={tech} className="flex items-center gap-2 font-mono text-sm font-semibold border-b border-transparent hover:border-cyan-500 hover:text-cyan-500 hover:opacity-100 transition-all">
              <Terminal className="h-3 w-3" />
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
