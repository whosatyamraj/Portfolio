"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, 
  SiMysql, SiHtml5, SiCss, SiReact, SiNodedotjs, 
  SiExpress, SiDjango, SiGit, SiGithub, 
  SiPostman, SiVercel, SiTailwindcss
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FileSpreadsheet } from "lucide-react";

// All skills from resume
const ALL_SKILLS = [
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
  { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
  { name: "REST APIs", icon: null, textIcon: "API", color: "text-primary" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-foreground" },
  { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "Excel", icon: FileSpreadsheet, color: "text-[#217346]" },
  { name: "Vercel", icon: SiVercel, color: "text-foreground" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
];

// Duplicate skills to ensure seamless infinite scroll
const midIndex = Math.ceil(ALL_SKILLS.length / 2);
const FIRST_ROW = [...ALL_SKILLS.slice(0, midIndex), ...ALL_SKILLS.slice(0, midIndex), ...ALL_SKILLS.slice(0, midIndex)];
const SECOND_ROW = [...ALL_SKILLS.slice(midIndex), ...ALL_SKILLS.slice(midIndex), ...ALL_SKILLS.slice(midIndex)];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden bg-background">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Core Competencies"
          align="center"
        />
      </div>

      {/* Marquee Container */}
      <div className="mt-16 flex flex-col gap-8 relative max-w-[100vw] overflow-hidden">
        
        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex whitespace-nowrap overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-6 items-center flex-nowrap shrink-0 group-hover:[animation-play-state:paused]"
          >
            {FIRST_ROW.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex whitespace-nowrap overflow-hidden group">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-6 items-center flex-nowrap shrink-0 group-hover:[animation-play-state:paused]"
          >
            {SECOND_ROW.map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: any }) {
  const Icon = skill.icon;
  
  return (
    <div className="flex items-center gap-4 px-8 py-5 rounded-2xl glass-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(173,110,84,0.15)] group/card cursor-pointer">
      <div className="w-12 h-12 relative rounded-full overflow-hidden bg-black/40 flex items-center justify-center shrink-0 border border-white/5 group-hover/card:border-primary/30 group-hover/card:scale-110 transition-all duration-500">
        {Icon ? (
          <Icon className={`w-6 h-6 ${skill.color} drop-shadow-md`} />
        ) : (
          <span className={`text-sm font-bold ${skill.color}`}>{skill.textIcon}</span>
        )}
      </div>
      <span className="text-xl font-semibold text-muted-foreground group-hover/card:text-foreground transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
}
