import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProfilePortrait } from "./ProfilePortrait";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facts = [
    { icon: "🔐", label: "Security-Focused" },
    { icon: "🧠", label: "Systems Thinker" },
    { icon: "🌍", label: "From Ethiopia" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/50 to-accent/50 blur-2xl animate-pulse-glow" />
                <div className="relative glass-card rounded-3xl p-8 h-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <ProfilePortrait sizeClass="w-64 h-64 md:w-72 md:h-72" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Securing the Future,{" "}
                <span className="gradient-text">Protecting People</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-8">
                <p>
                  Hello, my name is Yenesew Bekele, and I am passionate about technology, cybersecurity, and solving meaningful real-world problems. I am especially inspired by the Global Challenge Goal Opportunity of Quality Education because I believe technology and knowledge should be accessible and secure for everyone regardless of background or location.
                </p>
                <p>
                  I chose cybersecurity because modern society increasingly depends on digital systems, and protecting those systems is becoming more important every day. Cybersecurity combines analytical thinking, problem-solving, and continuous learning in a way that strongly matches my personality and interests.
                </p>
                <p>
                  I enjoy learning about technology, systems, digital security, artificial intelligence, and human behavior. I am a fast learner, a critical thinker, and someone who enjoys understanding how complex systems work beneath the surface.
                </p>
                <p className="italic text-sm text-primary/80">
                  "I enjoy deeply analyzing systems, technology, and human behavior more than entertainment."
                </p>
              </div>

              {/* Personality traits */}
              <div className="grid grid-cols-3 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="text-center p-4 rounded-lg glass-card border border-white/5 hover:border-primary/50 transition-colors"
                  >
                    <div className="text-3xl mb-2">{fact.icon}</div>
                    <div className="text-xs text-muted-foreground font-medium">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
