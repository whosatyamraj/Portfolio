"use client";

import { motion } from "framer-motion";
import { FileText, Download, ArrowRight } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-background z-10">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-premium border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden group"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Want to know more?
            </h2>
            <p className="text-lg text-muted-foreground font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Check out my complete resume to see my full work experience, education, and technical skills in detail.
            </p>
            
            <a 
              href="YOUR_GOOGLE_DRIVE_LINK_HERE" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(173,110,84,0.4)] group/btn relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out" />
              <Download className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
              <span className="relative z-10">View / Download Resume</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
