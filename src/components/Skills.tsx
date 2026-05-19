/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { resumeData } from "@/src/constants/resumeData";
import { Brain, Code2, Database, Layout, Settings } from "lucide-react";

export function Skills() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Programming": return <Code2 className="h-5 w-5" />;
      case "Machine Learning": return <Brain className="h-5 w-5" />;
      case "Generative AI": return <Layout className="h-5 w-5" />;
      case "Backend & Cloud": return <Database className="h-5 w-5" />;
      default: return <Settings className="h-5 w-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            A comprehensive overview of my technical expertise, categorized by specialization.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full border-none bg-muted/30 hover:bg-muted/50 transition-all group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-background group-hover:text-cyan-500 transition-colors">
                    {getIcon(skillGroup.category)}
                  </div>
                  <CardTitle className="text-lg font-display font-bold tracking-tight">
                    {skillGroup.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="px-3 py-1 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground border transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
