import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with seamless checkout experience, real-time inventory management, and AI-powered recommendations.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization, custom reporting, and team collaboration features.",
    tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Writing Assistant",
    description: "An intelligent writing tool powered by GPT-4 that helps users create compelling content with style suggestions.",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness application with workout tracking, nutrition planning, and social challenges.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    liveUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with virtual tours, mortgage calculator, and neighborhood insights.",
    tags: ["Vue.js", "Three.js", "MongoDB", "AWS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Podcast Network",
    description: "Audio streaming platform with personalized recommendations, offline listening, and creator analytics.",
    tags: ["Next.js", "GraphQL", "Prisma", "S3"],
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
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
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated selection of projects that showcase my expertise in building 
              modern, scalable, and beautiful digital products.
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
