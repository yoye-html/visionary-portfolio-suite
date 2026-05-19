import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export const ElevatorPitch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pitch" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Quick Introduction
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Elevator <span className="gradient-text">Pitch</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative aspect-video md:aspect-auto md:h-96 bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center group cursor-pointer">
              {/* Animated background grid */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,0,255,.05)_25%,rgba(255,0,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,255,.05)_75%,rgba(255,0,255,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,0,255,.05)_25%,rgba(255,0,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,255,.05)_75%,rgba(255,0,255,.05)_76%,transparent_77%,transparent)] bg-[50px_50px]" />
              </div>

              <motion.div
                className="relative z-10 flex flex-col items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all duration-300">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </div>
                </motion.div>
                <p className="text-lg font-medium text-foreground">Watch My Introduction</p>
                <p className="text-sm text-muted-foreground mt-2">Video coming soon</p>
              </motion.div>
            </div>

            {/* Pitch transcript */}
            <div className="p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold mb-3 text-foreground">
                    30-Second Pitch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Hi, I'm Yenesew Bekele, an aspiring cybersecurity analyst from Ethiopia. I'm passionate about protecting digital systems and making cybersecurity knowledge accessible to everyone. Through projects like EduBridge Innovators, I've demonstrated my ability to solve real-world problems using technology. I combine analytical thinking with strategic vision to build secure, scalable solutions that impact communities.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div>
                  <h3 className="text-lg font-display font-bold mb-3 text-foreground">
                    What I Bring
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">◆</span>
                      <span>Deep analytical thinking and systems-level problem solving</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">◆</span>
                      <span>Commitment to cybersecurity as both a career and mission</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">◆</span>
                      <span>Passion for making technology secure and accessible globally</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">◆</span>
                      <span>Proven track record of delivering impactful projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
