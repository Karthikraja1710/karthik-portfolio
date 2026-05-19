/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { resumeData } from "@/src/constants/resumeData";

export function Contact() {
  return (
    <section id="contact" className="py-24 space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            Interested in collaboration or have a question? Reach out and I'll get back to you promptly.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactMethod 
              icon={<Mail className="h-5 w-5" />} 
              label="Email" 
              value={resumeData.personalInfo.email} 
              href={`mailto:${resumeData.personalInfo.email}`} 
            />
            <ContactMethod 
              icon={<Phone className="h-5 w-5" />} 
              label="Phone" 
              value={resumeData.personalInfo.phone} 
              href={`tel:${resumeData.personalInfo.phone}`} 
            />
            <ContactMethod 
              icon={<MapPin className="h-5 w-5" />} 
              label="Location" 
              value={resumeData.personalInfo.location} 
            />
            <ContactMethod 
              icon={<MessageSquare className="h-5 w-5" />} 
              label="Availability" 
              value="Open for Internships" 
            />
          </div>

          <div className="p-8 rounded-[2rem] bg-muted/30 border space-y-6">
            <h3 className="text-xl font-display font-bold">Follow My Journey</h3>
            <div className="flex gap-4">
              <SocialBtn icon={<Github className="h-5 w-5" />} href={resumeData.personalInfo.links.github} label="GitHub" />
              <SocialBtn icon={<Linkedin className="h-5 w-5" />} href={resumeData.personalInfo.links.linkedin} label="LinkedIn" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border p-8 md:p-12 rounded-[3rem] shadow-xl space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
              <Input placeholder="John Doe" className="h-12 bg-muted/20 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
              <Input placeholder="john@example.com" className="h-12 bg-muted/20 rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
            <Input placeholder="Inception of an Intelligent Project" className="h-12 bg-muted/20 rounded-xl" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
            <Textarea placeholder="Share your thoughts or project details..." className="min-h-[150px] bg-muted/20 rounded-2xl resize-none" />
          </div>
          <Button size="lg" className="w-full rounded-full h-14 text-base font-bold group">
            Send Message
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  const Content = (
    <div className="group p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/10 hover:bg-muted transition-all space-y-3 cursor-pointer">
      <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
        <p className="font-semibold text-sm truncate">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{Content}</a> : Content;
}

function SocialBtn({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-3 px-6 py-3 rounded-full bg-background border hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all text-sm font-bold shadow-sm"
    >
      {icon}
      {label}
    </a>
  );
}
