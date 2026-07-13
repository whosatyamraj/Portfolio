"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight, Code2, Terminal, Zap, Fingerprint } from "lucide-react";
import { useMemo } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

const hash = (x: number) => {
  const val = Math.sin(x) * 10000;
  return val - Math.floor(val);
};

// Generate highly active dummy contribution data for the "impressive" graph deterministically
const generateActiveContributions = () => {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const rand1 = hash(w * 100 + d);
      const rand2 = hash(w * 100 + d + 1000);
      
      // 85% chance to have some activity, mostly levels 2, 3, 4
      const isActivity = rand1 > 0.15;
      let level = 0;
      if (isActivity) {
        if (rand2 > 0.8) level = 4;
        else if (rand2 > 0.4) level = 3;
        else if (rand2 > 0.1) level = 2;
        else level = 1;
      }
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
};

export function GithubSection() {
  const contributions = useMemo(() => generateActiveContributions(), []);

  // Theme colors for the graph levels (using the requested olive/copper palette)
  const getColor = (level: number) => {
    switch (level) {
      case 1: return "bg-[#606C38]/40 border-[#606C38]/10";
      case 2: return "bg-[#606C38]/70 border-[#606C38]/20";
      case 3: return "bg-[#606C38] border-[#283618]/50 shadow-[0_0_8px_rgba(96,108,56,0.6)]";
      case 4: return "bg-[#DDA15E] border-[#BC6C25]/50 shadow-[0_0_12px_rgba(221,161,94,0.8)]";
      default: return "bg-white/5 border-white/5";
    }
  };

  const insights = [
    {
      icon: Terminal,
      title: "Core Tech Stack",
      desc: "C++, TypeScript, React, Node.js, MongoDB",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Code Velocity",
      desc: "High deployment frequency",
      color: "text-accent"
    },
    {
      icon: Fingerprint,
      title: "Architecture",
      desc: "Scalable & Modular Design",
      color: "text-primary"
    },
    {
      icon: Code2,
      title: "Best Practices",
      desc: "Clean Code & Performance",
      color: "text-accent"
    }
  ];

  return (
    <section id="github" className="py-32 relative bg-background z-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeading 
            title="Developer Insights" 
            className="mb-0"
          />

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/whosatyamraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium group glass-premium px-6 py-3 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(96,108,56,0.15)] hover:shadow-[0_0_25px_rgba(221,161,94,0.25)]"
          >
            <FaGithub size={20} />
            <span>@whosatyamraj</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="flex flex-col gap-8">
          {/* Full-Width Contribution Graph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full glass-premium border-white/10 p-8 md:p-12 rounded-[2.5rem] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h3 className="font-extrabold text-3xl text-foreground tracking-tight mb-2">
                  Contribution Heatmap
                </h3>
                <p className="text-muted-foreground font-medium">Consistent daily activity and code shipping</p>
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-accent shadow-inner">
                Active Developer & Problem Solver
              </div>
            </div>
            
            <div className="overflow-x-auto pb-6 custom-scrollbar flex justify-center w-full">
              <div className="flex gap-2 min-w-max">
                {contributions.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-2">
                    {week.map((level, dIndex) => (
                      <motion.div 
                        key={dIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (wIndex * 0.005) + (dIndex * 0.005) }}
                        className={`w-4 h-4 rounded-[4px] border ${getColor(level)} transition-all hover:scale-150 hover:z-10 hover:rounded-sm cursor-crosshair`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end items-center gap-3 mt-4 text-sm font-medium text-muted-foreground">
              <span>Less Activity</span>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-[4px] bg-white/5 border border-white/5"></div>
                <div className="w-4 h-4 rounded-[4px] bg-[#606C38]/40 border border-[#606C38]/10"></div>
                <div className="w-4 h-4 rounded-[4px] bg-[#606C38]/70 border border-[#606C38]/20"></div>
                <div className="w-4 h-4 rounded-[4px] bg-[#606C38] border border-[#283618]/50 shadow-[0_0_8px_rgba(96,108,56,0.6)]"></div>
                <div className="w-4 h-4 rounded-[4px] bg-[#DDA15E] border border-[#BC6C25]/50 shadow-[0_0_12px_rgba(221,161,94,0.8)]"></div>
              </div>
              <span>More Activity</span>
            </div>
          </motion.div>

          {/* New Insight Cards (Instead of Numbers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass-premium border-white/10 p-6 rounded-[2rem] group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <insight.icon size={140} />
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <insight.icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {insight.title}
                </h4>
                <p className="text-muted-foreground font-medium text-sm">
                  {insight.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
