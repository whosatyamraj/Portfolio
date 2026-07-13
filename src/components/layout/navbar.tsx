"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "GitHub", href: "#github" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("Home");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple scroll spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      if (current) {
        const activeLink = NAV_LINKS.find(link => link.href.substring(1) === current);
        if (activeLink) setActiveSection(activeLink.name);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "py-4 bg-background/80 backdrop-blur-xl shadow-lg border-b border-white/5" 
            : "py-6 bg-transparent"
        )}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative group flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300">
              Satyam.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
                onClick={() => setActiveSection(link.name)}
              >
                <span className={cn(
                  "relative z-10 transition-colors duration-300",
                  activeSection === link.name 
                    ? "text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}>
                  {link.name}
                </span>
                {activeSection === link.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full shadow-md bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#contact" className={cn(
              buttonVariants({ size: "sm" }), 
              "rounded-full shadow-[0_0_15px_rgba(173,110,84,0.3)] transition-all hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90"
            )}>
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-full backdrop-blur-md border transition-colors text-foreground border-white/10 bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 pb-8 px-4 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-4 items-center w-full mt-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-px bg-white/10 my-6" />
              <a 
                href="#contact" 
                className={cn(buttonVariants({ size: "lg" }), "w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
