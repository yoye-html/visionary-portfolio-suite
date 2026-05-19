import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "EduBridge Innovators",
    description: "An adaptive educational platform designed to help underserved students access learning materials through SMS, voice systems, and offline mobile applications. Combines educational technology with accessibility-first design to reach communities with limited digital infrastructure.",
    tags: ["EdTech", "Accessibility", "Mobile", "Voice Systems", "SMS Integration"],
    image: "https://images.unsplash.com/photo-1516534775068-bb57846d9c2d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Project Gasha",
    description: "Advanced cybersecurity and systems analysis project focused on digital defense mechanisms and threat intelligence. Demonstrates expertise in identifying vulnerabilities, analyzing attack vectors, and implementing strategic security solutions.",
    tags: ["Cybersecurity", "Systems Analysis", "Threat Intelligence", "Security Architecture"],
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "https://github.com/yoye-html/Project_Gasha",
    featured: true,
  },
  {
    title: "Digital Safety Awareness Campaign",
    description: "Educational initiative focused on raising awareness about cybersecurity threats, digital privacy, and safe online practices for underserved communities.",
    tags: ["Cybersecurity", "Education", "Community", "Digital Literacy"],
    image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a311?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Security Fundamentals Research",
    description: "In-depth research and analysis on cybersecurity fundamentals, threat landscapes, and defensive strategies tailored for emerging markets.",
    tags: ["Research", "Cybersecurity", "Threat Analysis", "Documentation"],
    image: "https://images.unsplash.com/photo-1518611505868-48510c2e8af4?w=800&h=600&fit=crop",
    liveUrl: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Projects & <span className="gradient-text">Initiatives</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of impactful projects that demonstrate my commitment to solving real-world problems 
              through technology and strategic thinking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
