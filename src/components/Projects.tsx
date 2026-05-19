/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Github, Monitor } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { resumeData } from "@/src/constants/resumeData";

export function Projects() {
  return (
    <section id="projects" className="py-24 space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">Key Initiatives</h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            Selected projects demonstrating expertise in AI implementation and systems architecture.
          </p>
        </motion.div>
        
        <Button variant="outline" className="rounded-full px-6">
          Explore All on GitHub
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative flex flex-col gap-6"
          >
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} className="bg-white/20 hover:bg-white/30 backdrop-blur-md border-white/10 text-white shadow-none">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className="bg-white/10 backdrop-blur-md border-white/10 text-white">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 px-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
                  <p className="text-sm font-semibold text-cyan-500 uppercase tracking-widest mt-1">{project.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <div className="h-1 w-1 rounded-full bg-cyan-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
