/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { User, Target, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import { resumeData } from "@/src/constants/resumeData";

export function About() {
  const highlights = [
    { icon: <Zap className="h-5 w-5 text-cyan-500" />, label: "Passion", value: "AI-First Problem Solving" },
    { icon: <Award className="h-5 w-5 text-indigo-500" />, label: "Academic", value: "8.0 CGPA Candidate" },
    { icon: <Target className="h-5 w-5 text-emerald-500" />, label: "Focus", value: "Scalable Data Systems" },
    { icon: <User className="h-5 w-5 text-amber-500" />, label: "Mindset", value: "Collaborative Explorer" },
  ];

  return (
    <section id="about" className="py-24 space-y-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              Decoding the <span className="text-primary italic underline decoration-cyan-500/30 underline-offset-8">Intelligent Future</span>.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {resumeData.personalInfo.summary}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <Card key={i} className="border-none bg-muted/40 hover:bg-muted transition-colors group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-background shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-[400px] aspect-[4/5] relative rounded-3xl overflow-hidden group border"
        >
          <img
            src={resumeData.personalInfo.links.profileImage}
            alt={resumeData.personalInfo.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
            <div className="space-y-2">
              <p className="text-primary-foreground font-display text-2xl font-bold italic">"Information is the oil of the 21st century, and analytics is the combustion engine."</p>
              <p className="text-primary-foreground/60 text-sm font-medium">— Data Science Ethos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
