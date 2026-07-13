"use client";

import { motion } from "framer-motion";
import { Award, Calendar, MapPin, ChevronRight, Trophy, Code } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    role: "Smart India Hackathon (SIH) 2025",
    company: "Shortlisted in Top 50",
    location: "India",
    period: "2025",
    icon: Code,
    description: [
      "Shortlisted in top 50 teams from 500+ participating teams.",
      "Built a working integration prototype within 24 hours.",
      "Demonstrated rapid debugging and cross-functional delivery under deadline."
    ],
    skills: ["Rapid Prototyping", "Integration", "Cross-functional Delivery"],
  },
  {
    role: "Finalist - NEC 2024",
    company: "IIT Bombay",
    location: "Mumbai, India",
    period: "2024",
    icon: Trophy,
    description: [
      "Secured AIR 29 among 1,500+ teams.",
      "Presented technical solution to expert judges.",
      "Demonstrated ability to communicate complex engineering concepts to non-technical stakeholders."
    ],
    skills: ["Technical Presentation", "Engineering Concepts", "Stakeholder Communication"],
  },
  {
    role: "All India Rank 9",
    company: "Western Entrepreneurship Challenge",
    location: "India",
    period: "Challenge",
    icon: Award,
    description: [
      "Developed and pitched a customer-centric product solution against teams from across India.",
      "Sharpened business problem-solving and stakeholder presentation skills."
    ],
    skills: ["Product Solution", "Business Problem-solving", "Presentation Skills"],
  },
  {
    role: "Event Coordinator",
    company: "E-Cell ABES Engineering College",
    location: "Ghaziabad, India",
    period: "October 2025 - Present",
    icon: Calendar,
    description: [
      "Coordinated end-to-end planning and execution of 6+ entrepreneurship events with 500+ participants.",
      "Managed multi-stakeholder communication, logistics, and real-time issue resolution.",
      "Led operations for TES 4.0, the flagship E-Cell event, delivering on schedule with zero critical failures.",
      "Acted as primary communication bridge between organizing teams, speakers, and participants."
    ],
    skills: ["Event Management", "Leadership", "Stakeholder Management", "Logistics"],
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10 bg-black/20 backdrop-blur-3xl border-y border-white/5">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        
        <SectionHeading 
          title="Experience & Achievements" 
          subtitle="Milestones"
        />

        <div className="relative mt-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-24 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-4px] md:left-[28px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] group-hover:scale-150 transition-transform duration-300 ring-4 ring-background" />
                  
                  <div className="glass-premium rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-white/5 group-hover:border-primary/20">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-extrabold text-foreground">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-2 text-lg font-medium text-accent">
                          <Icon size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-2 text-sm font-semibold text-muted-foreground">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed font-medium">
                          <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-foreground/90">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
