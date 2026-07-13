"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex flex-col mb-16 relative z-10 group",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm mb-4"
        >
          {subtitle}
        </motion.div>
      )}
      
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight relative cursor-default">
        {/* Glow behind text on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-olive)] via-[var(--color-caramel)] to-[var(--color-copper)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 pointer-events-none" />
        
        {/* Gradient Text */}
        <span className="text-gradient-primary relative z-10 transition-transform duration-500 inline-block group-hover:scale-[1.02]">
          {title}
        </span>
      </h2>
      
      {/* Decorative underline that expands on hover */}
      <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-white/30"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[var(--color-copper)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out" />
      </div>
    </motion.div>
  );
}
