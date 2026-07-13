"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Grid Background with Grid Fade */}
      <div className="absolute inset-0 w-full h-full -z-20 bg-[linear-gradient(to_right,#CFCFCF0a_1px,transparent_1px),linear-gradient(to_bottom,#CFCFCF0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse shadow-[0_0_10px_var(--color-accent)]"></span>
            Open to new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1] text-foreground"
          >
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-gradient-primary relative inline-block group cursor-default">
              Satyam
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-700 pointer-events-none -z-10" />
            </span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="text-2xl md:text-3xl text-foreground/80 font-medium mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <span>Software Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span>Full Stack Developer</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[600px] text-muted-foreground text-lg/relaxed mx-auto lg:mx-0 mb-10 font-medium"
          >
            I architect elegant, highly performant web applications. Passionate about clean code, scalable infrastructure, and crafting exceptional user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full shadow-[0_4px_20px_rgba(173,110,84,0.3)] transition-all hover:-translate-y-1 bg-primary text-primary-foreground hover:bg-primary/90")}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="https://github.com/whosatyamraj" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/10 transition-all hover:-translate-y-1 shadow-sm")}>
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-6 mt-12"
          >
            {[
              { icon: FaGithub, href: "https://github.com/whosatyamraj" },
              { icon: FaLinkedin, href: "www.linkedin.com/in/satyamrajsingh08" },

            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-foreground hover:text-primary hover:bg-white/10 hover:shadow-[0_0_15px_rgba(173,110,84,0.3)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <social.icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Professional Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
          className="flex-1 w-full max-w-[400px] lg:max-w-[500px] relative"
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[2.5rem] rotate-3 scale-105 blur-2xl opacity-60" />
          <div className="absolute inset-0 border border-primary/20 rounded-[2.5rem] -rotate-3 scale-105" />
          
          {/* Image Container */}
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-premium border border-white/10 shadow-2xl p-2 group">
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-secondary relative">
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              
              {/* Replace src with actual user photo */}
              <img 
                src="https://avatars.githubusercontent.com/u/175380785?v=4" 
                alt="Satyam - Software Engineer" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent mix-blend-overlay" />
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
