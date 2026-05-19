/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { resumeData } from "@/src/constants/resumeData";

export function Experience() {
  return (
    <section id="experience" className="py-24 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">Professional Journey</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Industrial exposure and hands-on experience in real-world AI applications.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative space-y-8">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-px bg-border hidden md:block" />

        {resumeData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-[-24px] md:left-1/2 md:ml-[-8px] top-8 md:top-auto w-4 h-4 rounded-full bg-primary z-10 border-4 border-background shadow-lg" />

            <div className="flex-1 w-full">
              <div className={`p-8 rounded-[2rem] bg-muted/30 border hover:bg-muted/50 transition-colors space-y-4 ${
                idx % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}>
                <div className={`flex flex-col gap-2 ${idx % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm font-bold uppercase tracking-widest">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold leading-tight">{exp.title}</h3>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground font-medium ${
                    idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}>
                    <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {exp.duration}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {exp.location}</span>
                  </div>
                </div>

                <ul className={`space-y-2 text-muted-foreground list-none p-0 ${
                  idx % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2 items-start justify-start md:justify-end">
                      <span className={`${idx % 2 === 0 ? "order-first" : "md:order-last"} h-1.5 w-1.5 rounded-full bg-cyan-500 mt-2 shrink-0`} />
                      <span className="text-sm leading-relaxed">{resp}</span>
                    </li>
                  ))}
                  {/* Fixing the order for even rows where I want bullet to be on left even in right-aligned layouts? 
                      Actually, let's keep it simple: always bullet then text. */}
                </ul>
              </div>
            </div>
            
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
