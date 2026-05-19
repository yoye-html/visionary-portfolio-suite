import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    phase: "Learning Cybersecurity Fundamentals",
    period: "2024 - Present",
    description: "Building foundational knowledge in security principles, threat landscapes, and digital defense mechanisms.",
    achievements: ["Security Awareness", "Threat Analysis", "Digital Safety"],
  },
  {
    phase: "Team Innovation Projects",
    period: "2023 - 2024",
    description: "EduBridge Innovators - Designed adaptive learning platform for underserved students, combining technology with social impact.",
    achievements: ["EdTech Platform", "Accessibility Design", "Community Focus"],
  },
  {
    phase: "Professional Foundations",
    period: "2023 - 2024",
    description: "Building core professional competencies including critical thinking, communication, and strategic problem-solving.",
    achievements: ["Team Collaboration", "Leadership Development", "Critical Analysis"],
  },
  {
    phase: "Portfolio & Prototype Development",
    period: "2024 - Present",
    description: "Creating comprehensive portfolio demonstrating technical skills, cybersecurity knowledge, and strategic thinking.",
    achievements: ["Portfolio Website", "Technical Projects", "Thought Leadership"],
  },
  {
    phase: "Future: Cybersecurity Certifications",
    period: "2025+",
    description: "Pursuing industry-recognized certifications and advanced training in cybersecurity specializations.",
    achievements: ["Industry Certs", "Advanced Training", "Professional Growth"],
  },
];

export const ExperienceTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />
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
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Learning <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional development journey from learning foundations to becoming a cybersecurity professional.
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex gap-8 items-start ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline point */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent relative z-10 shadow-lg shadow-primary/50"
                  />
                </div>

                {/* Content card */}
                <motion.div
                  className={`flex-1 glass-card rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 ${
                    index % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-display font-bold text-foreground">
                      {item.phase}
                    </h3>
                    <span className="text-sm text-primary font-semibold whitespace-nowrap ml-4">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
