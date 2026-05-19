import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Cybersecurity Skills",
    icon: "🔐",
    skills: [
      { name: "Security Fundamentals", level: 85 },
      { name: "Risk Analysis", level: 80 },
      { name: "Threat Awareness", level: 85 },
      { name: "Network Basics", level: 78 },
      { name: "Digital Safety", level: 82 },
      { name: "Problem Solving", level: 90 },
    ],
  },
  {
    title: "Technical Skills",
    icon: "💻",
    skills: [
      { name: "Research & Analysis", level: 88 },
      { name: "Data Analysis", level: 82 },
      { name: "Technology Systems", level: 85 },
      { name: "AI/ML Fundamentals", level: 75 },
      { name: "UX/UI Fundamentals", level: 80 },
      { name: "Systems Thinking", level: 87 },
    ],
  },
  {
    title: "Professional Skills",
    icon: "🎯",
    skills: [
      { name: "Communication", level: 88 },
      { name: "Team Collaboration", level: 85 },
      { name: "Critical Thinking", level: 92 },
      { name: "Adaptability", level: 89 },
      { name: "Leadership", level: 83 },
      { name: "Creativity", level: 86 },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Core Competencies
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive blend of cybersecurity knowledge, technical proficiency, and professional capabilities built through continuous learning and real-world experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-display font-bold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: catIndex * 0.1 + index * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 0.8, delay: catIndex * 0.1 + index * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
