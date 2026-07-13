"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "NEC 2024 Finalist (AIR 29)",
    description: "Secured All India Rank 29 in the National Entrepreneurship Challenge 2024 out of thousands of participants, showcasing innovative problem-solving and business acumen.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Medal,
    title: "WEC 2025 Finalist (AIR 9)",
    description: "Achieved All India Rank 9 in the World Entrepreneurship Challenge 2025, demonstrating exceptional technical and entrepreneurial skills on a global stage.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Star,
    title: "E-Cell ABES-EC Contributions",
    description: "Active contributor and core member of the Entrepreneurship Cell at ABES Engineering College, organizing events and fostering startup culture.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-yellow-500/10 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full glass-card bg-background/50 border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full ${item.bg} mb-6 ring-8 ring-background`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
