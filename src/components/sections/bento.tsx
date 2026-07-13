"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { FaSpotify } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/section-heading";

export function BentoGrid() {
  return (
    <section id="about" className="py-32 relative z-10 bg-background">
      <div className="container px-4 md:px-6">
        
        <SectionHeading 
          title="About Me" 
          subtitle="Personal Profile"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          
          {/* Main About Card (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-premium rounded-3xl p-8 flex flex-col relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-primary">
              <Code2 size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-4 z-10 text-foreground">Who am I?</h3>
            <p className="text-muted-foreground text-lg/relaxed z-10 flex-1 font-medium">
              I am a passionate software engineer dedicated to building high-quality, scalable applications. I enjoy tackling complex problems and learning new technologies to stay at the cutting edge of web development. 
               I am always eager to learn, collaborate, and grow as a developer while contributing to innovative ideas and building solutions that make a difference.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm font-bold text-accent z-10">
              <Briefcase size={18} />
              <span>Available for full-time roles</span>
            </div>
          </motion.div>

          {/* Location / Timezone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 glass-premium rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c4/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-cover opacity-10 group-hover:scale-110 transition-transform duration-700 invert" />
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center relative z-10">
              <MapPin className="text-primary w-6 h-6" />
            </div>
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground font-bold mb-1">Location</p>
              <h4 className="text-xl font-extrabold text-foreground">New Delhi, India</h4>
            </div>
          </motion.div>

          {/* Spotify / Music */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 glass-premium rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden border border-white/5"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#1DB954]/10 flex items-center justify-center">
                <FaSpotify className="text-[#1DB954] w-7 h-7" />
              </div>
              <div className="flex gap-1.5 items-end h-5">
                <span className="w-1.5 h-2 bg-[#1DB954] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-5 bg-[#1DB954] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-3 bg-[#1DB954] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-sm font-bold text-[#1DB954] mb-1">Currently Listening</p>
              <h4 className="text-xl font-extrabold text-foreground line-clamp-1">Lo-Fi Beats</h4>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 row-span-1 glass-premium rounded-3xl p-6 flex items-center gap-6 border border-white/5"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
              <GraduationCap className="text-accent w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold mb-1 text-foreground">B.Tech in Information Technology</h4>
              <p className="text-muted-foreground font-semibold text-lg">ABES Engineering College, Ghaziabad</p>
              <p className="text-sm font-bold text-primary mt-2">Class of 2023-2027</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
