"use client";

import { motion } from "framer-motion";
import { User, Code2, Rocket, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const aboutCards = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Building scalable and performant web applications using modern technologies like Next.js, React, and Node.js.",
  },
  {
    icon: BrainCircuit,
    title: "AI Enthusiast",
    description: "Exploring the frontiers of artificial intelligence, machine learning, and integrating AI into software products.",
  },
  {
    icon: Rocket,
    title: "Entrepreneur",
    description: "Turning ideas into reality. Always looking for innovative solutions to real-world problems.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-emerald-500/10 rounded-full mb-4">
            <User className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate about <span className="text-emerald-400">technology</span> and its potential.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a dedicated software developer with a strong foundation in modern web technologies. My journey in tech is driven by an insatiable curiosity to understand how things work and a desire to build solutions that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Beyond coding, I'm deeply fascinated by Artificial Intelligence and its applications. I actively participate in hackathons and coding competitions, which has sharpened my problem-solving skills and ability to work under pressure.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I'm not behind a screen, you'll find me exploring new entrepreneurial ideas, reading about tech trends, or engaging with the developer community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={index === 2 ? "sm:col-span-2" : ""}
              >
                <Card className="glass-card bg-background/50 border-white/5 hover:border-emerald-500/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-start text-left space-y-4">
                    <div className="p-3 bg-secondary rounded-xl">
                      <card.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-semibold">{card.title}</h4>
                    <p className="text-muted-foreground text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
