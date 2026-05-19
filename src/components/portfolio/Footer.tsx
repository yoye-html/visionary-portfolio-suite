import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground max-w-2xl italic"
          >
            "Security is not only about protecting systems — it is about protecting people."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Yenesew Bekele. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground/70"
          >
            Building secure technologies from Addis Ababa to the world.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
