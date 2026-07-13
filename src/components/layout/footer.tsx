import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300">
                Satyam.
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-medium">
              Architecting elegant, highly performant web applications. Passionate about clean code and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors font-medium">Projects</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors font-medium">Experience</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-foreground font-bold">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/whosatyamraj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:bg-white/10 transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href="www.linkedin.com/in/satyamrajsingh08" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:bg-white/10 transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} Satyam Raj Singh. All rights reserved.         
          </p>
        </div>
      </div>
    </footer>

  );
}
