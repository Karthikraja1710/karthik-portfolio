/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Skills } from "@/src/components/Skills";
import { Projects } from "@/src/components/Projects";
import { Experience } from "@/src/components/Experience";
import { Education } from "@/src/components/Education";
import { Certifications } from "@/src/components/Certifications";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { ScrollProgress } from "@/src/components/ScrollProgress";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ScrollProgress />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
