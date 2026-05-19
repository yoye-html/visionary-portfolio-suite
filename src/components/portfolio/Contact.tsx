import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/yoye-html", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yenesew-bekele", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:yenesew.bekele@email.com", label: "Email" },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in collaborating on cybersecurity projects, internships, or scholarship opportunities? 
              Let's connect and explore how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium flex items-center justify-center gap-2 glow-primary disabled:opacity-70 transition-opacity"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : submitted ? (
                    "Message Sent! ✓"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-display font-bold mb-4">
                  Prefer email?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Reach out directly at:
                </p>
                <a
                  href="mailto:yenesew.bekele@email.com"
                  className="text-lg font-medium gradient-text hover:opacity-80 transition-opacity"
                >
                  yenesew.bekele@email.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold mb-4">
                  Connect with me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl glass-card border border-white/10 hover:border-primary/50 hover:glow-primary transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
