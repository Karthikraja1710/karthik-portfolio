/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Landmark, CalendarRange, Star } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { resumeData } from "@/src/constants/resumeData";

export function Education() {
  return (
    <section id="education" className="py-24 space-y-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500"
        >
          <GraduationCap className="h-8 w-8" />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">Academic Foundation</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A track record of consistent growth and specialized learning in computational intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {resumeData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <Card className="h-full border-none bg-muted/40 hover:bg-muted/60 transition-all group rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-8 md:p-10 space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-[0.2em] mb-2">
                       <Landmark className="h-4 w-4" />
                       Institution
                    </div>
                    <CardTitle className="text-2xl font-display font-bold leading-tight group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="rounded-full bg-background/50 border-primary/10">
                    {edu.highlight}
                  </Badge>
                </div>

                <div className="space-y-4 pt-4 border-t border-primary/5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                    <CalendarRange className="h-4 w-4" />
                    {edu.duration}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-500 uppercase tracking-widest bg-cyan-500/5 w-fit px-3 py-1.5 rounded-full">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    Excellence Achieved
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Helper CardTitle since I used it without import
function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h3 className={className}>{children}</h3>;
}
