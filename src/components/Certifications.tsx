/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, CheckCircle2, ChevronRight } from "lucide-react";
import { resumeData } from "@/src/constants/resumeData";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="bg-primary text-primary-foreground rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
        {/* Abstract background for dark section */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
              <Award className="h-4 w-4" />
              Validated Skills
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight leading-tight">
              Honors & <span className="text-cyan-400">Certifications</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Continuous learning through rigorous training and industry-recognized certifications.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
                    <p className="text-xs text-primary-foreground/50 font-semibold uppercase tracking-wider mt-1">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-primary-foreground/20 group-hover:text-cyan-400 transition-all group-hover:translate-x-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
