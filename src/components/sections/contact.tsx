"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, Loader2, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-primary/10 blur-[150px] rounded-t-full pointer-events-none -z-10" />
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's Connect"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="glass-premium overflow-hidden group border-white/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
                
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Email", value: "satyamrajsingh0811@gmail.com", href: "mailto:satyamrajsingh0811@gmail.com" },
                    { icon: MapPin, label: "Location", value: "Ghaziabad, India", href: "#" },
                    { icon: Phone, label: "Phone", value: "+91-7355008837", href: "tel:+917355008837" },
                  ].map((item, idx) => (
                    <a key={idx} href={item.href} className="flex items-start gap-5 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300 group-hover/item:scale-110">
                        <item.icon className="w-5 h-5 text-primary group-hover/item:text-primary-foreground transition-colors" />
                      </div>
                      <div className="pt-1">
                        <p className="text-sm text-muted-foreground font-medium mb-1">{item.label}</p>
                        <p className="text-foreground font-bold group-hover/item:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-muted-foreground font-medium mb-6">Connect on social media</p>
                  <div className="flex gap-4">
                    {[
                      { icon: FaGithub, href: "https://github.com/whosatyamraj" },
                      { icon: FaLinkedin, href: "www.linkedin.com/in/satyamrajsingh08" },
                      
                    ].map((Social, i) => (
                      <a 
                        key={i} 
                        href={Social.href} 
                        className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-foreground hover:bg-white/10 hover:text-primary hover:border-primary/50`}
                      >
                        <Social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="glass-premium relative overflow-hidden border-white/5">
              {/* Form success overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                      className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-2 text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground font-medium max-w-[300px]">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2 relative">
                      <label htmlFor="name" className="text-sm font-bold text-foreground">Your Name</label>
                      <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'name' ? 'p-[1px] bg-primary shadow-[0_0_15px_rgba(173,110,84,0.3)]' : 'p-[1px] bg-white/10'}`}>
                        <input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-background/50 backdrop-blur-sm rounded-[10px] px-5 py-3.5 outline-none transition-all placeholder:text-muted-foreground text-foreground font-medium"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    
                    {/* Email Input */}
                    <div className="space-y-2 relative">
                      <label htmlFor="email" className="text-sm font-bold text-foreground">Your Email</label>
                      <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'email' ? 'p-[1px] bg-primary shadow-[0_0_15px_rgba(173,110,84,0.3)]' : 'p-[1px] bg-white/10'}`}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-background/50 backdrop-blur-sm rounded-[10px] px-5 py-3.5 outline-none transition-all placeholder:text-muted-foreground text-foreground font-medium"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <div className="space-y-2 relative">
                    <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'message' ? 'p-[1px] bg-primary shadow-[0_0_15px_rgba(173,110,84,0.3)]' : 'p-[1px] bg-white/10'}`}>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        className="w-full bg-background/50 backdrop-blur-sm rounded-[10px] px-5 py-3.5 outline-none transition-all resize-none placeholder:text-muted-foreground text-foreground font-medium"
                        placeholder="How can I help you?"
                      />
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-80 disabled:cursor-not-allowed hover:shadow-[0_4px_20px_rgba(173,110,84,0.4)] hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                    
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
