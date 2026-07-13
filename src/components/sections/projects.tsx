"use client";

import { motion } from "framer-motion";
import { ExternalLink, Rocket, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

const projectsData = [
  {
    title: "ZeroWaste OS",
    description: "An AI-powered SaaS platform that helps restaurants, cloud kitchens, supermarkets, and food businesses reduce food waste through demand forecasting, inventory optimization, expiry tracking, and real-time analytics.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Python", "FastAPI", "TensorFlow", "YOLOv8", "Docker"],
    features: [
      "AI-powered demand forecasting & smart inventory management",
      "Computer vision-based food quality detection",
      "Real-time analytics dashboard & sustainability insights"
    ],
    github: "#", // Add your Github link here
    live: "#",
    imageFallback: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
    number: "01",
    inProgress: true,
  },
  {
    title: "CodeSync",
    description: "A production-ready collaborative real-time code editor. Perfect for pair programming, code interviews, and team collaboration.",
    tags: ["React", "Node.js", "Socket.IO", "Yjs", "Monaco Editor"],
    features: [
      "Real-time collaboration with no edit conflicts using Yjs",
      "Live user awareness and connection status",
      "Beautiful glassmorphism UI with syntax highlighting"
    ],
    github: "https://github.com/whosatyamraj/codesync",
    live: "https://docker-aws-frontend-f40y1crgv-satyam-raj-singhs-projects.vercel.app/",
    image:"/images/codesync.png",
    number: "02",
  },
  {
    title: "Kisan Setu",
    description: "Built a data aggregation platform that fetches and normalizes real-time crop, weather, and market data from multiple external REST APIs into a unified React frontend.",
    tags: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    features: [
      "Simulated ERP/CRM data ingestion workflows",
      "Implemented 10+ modular React components with clean API contracts",
      "Debugged cross-browser rendering inconsistencies and resolved API schema mismatches"
    ],
    github: "https://github.com/whosatyamraj/Kisan_Setu",
    live: "https://kisan-setu-gules.vercel.app/",
    image: "/images/kisan-setu.png",
    imageFallback: "bg-gradient-to-br from-primary/20 to-accent/20",
    number: "03",
  },
  {
    title: "Myntra Clone",
    description: "Designed a client-side data transformation layer that maps raw product JSON (simulating POS/catalog API responses) into structured UI state, replicating real-world middleware connector logic.",
    tags: ["React", "JavaScript", "CSS", "REST APIs"],
    features: [
      "Built product listing, category filtering, and cart state management",
      "Normalized data pipelines reducing redundant API calls by 30%",
      "Created 8+ reusable UI components with separation of data ingestion and presentation"
    ],
    github: "#",
    live: "#",
    imageFallback: "bg-gradient-to-br from-secondary/20 to-accent/20",
    number: "04",
  },
  {
    title: "Calculator",
    description: "A responsive calculator app supporting basic arithmetic operations, created using React.",
    tags: ["React", "JavaScript", "CSS"],
    features: [
      "Real-time calculations",
      "Responsive design for mobile and desktop",
      "Clean UI component structure"
    ],
    github: "https://github.com/whosatyamraj/Calculator-React",
    live: "https://calculator-react-theta-jade.vercel.app/",
    image:"/images/calculator.png",
    imageFallback: "bg-gradient-to-br from-accent/20 to-primary/20",
    number: "05",
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-background z-10">
      <div className="container px-4 md:px-6">
        
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Selected Work"
          align="center"
        />

        <div className="flex flex-col gap-24 mt-12">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Product Showcase Image Side */}
              <div className="w-full lg:w-1/2 relative group rounded-[2.5rem] p-3 glass-premium overflow-hidden flex-shrink-0 border-white/5">
                <div className={`w-full ${project.imageFallback} rounded-[2rem] relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02] border border-white/10 pt-12 px-6 sm:px-8 pb-0`}>
                  {/* Decorative Elements for the Mockup */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-sm" />
                  </div>
                  
                  {/* Faux Browser Chrome */}
                  <div className="w-full bg-card/90 rounded-t-xl shadow-2xl border border-white/5 border-b-0 overflow-hidden transition-transform duration-700 group-hover:translate-y-1 relative z-10">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto object-contain block"
                      />
                    ) : (
                      <div className="w-full aspect-video p-6">
                        <div className="w-3/4 h-8 bg-secondary/50 rounded-lg mb-4" />
                        <div className="w-full h-32 bg-primary/10 rounded-lg mb-4" />
                        <div className="w-1/2 h-8 bg-accent/10 rounded-lg" />
                      </div>
                    )}
                  </div>
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent mix-blend-overlay pointer-events-none z-20" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-primary/20 font-sans tracking-tighter">
                    {project.number}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    {project.inProgress && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider w-fit border border-amber-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Work in Progress
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  {project.description}
                </p>
                
                {/* Key Features */}
                <ul className="space-y-3 py-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-foreground/90 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  {project.live !== "#" ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_4px_20px_rgba(173,110,84,0.3)] hover:-translate-y-1 group")}
                    >
                      <Rocket className="mr-2 h-4 w-4" />
                      Live Preview
                      <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  ) : (
                    <button 
                      disabled
                      className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-white/5 text-muted-foreground cursor-not-allowed border-none")}
                    >
                      <Rocket className="mr-2 h-4 w-4 opacity-50" />
                      Coming Soon
                    </button>
                  )}
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-white/20 bg-white/5 text-foreground hover:bg-white/10 transition-all shadow-sm hover:-translate-y-1 flex items-center gap-2")}
                  >
                    <FaGithub size={18} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
