import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const goals = [
  {
    title: "Become a Cybersecurity Analyst",
    description: "Develop expertise in threat detection, vulnerability assessment, and incident response.",
    icon: "🎯",
  },
  {
    title: "Learn Advanced Security Systems",
    description: "Master complex security architectures, penetration testing, and security orchestration.",
    icon: "🔬",
  },
  {
    title: "Understand Ethical Hacking",
    description: "Gain hands-on skills in authorized security testing and digital defense strategies.",
    icon: "🛡️",
  },
  {
    title: "Protect Digital Infrastructure",
    description: "Build and defend critical systems that serve millions of users worldwide.",
    icon: "🏗️",
  },
  {
    title: "Combine AI with Cybersecurity",
    description: "Leverage machine learning for threat prediction and intelligent defense mechanisms.",
    icon: "🤖",
  },
  {
    title: "Impact Education & Communities",
    description: "Make cybersecurity knowledge accessible and help underserved communities stay safe online.",
    icon: "🌍",
  },
];

export const CareerGoals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="goals" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Vision & Direction
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Career <span className="gradient-text">Goals</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My ambitious roadmap for making meaningful contributions to cybersecurity and digital safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass-card rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {goal.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold mb-3 text-foreground">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {goal.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
