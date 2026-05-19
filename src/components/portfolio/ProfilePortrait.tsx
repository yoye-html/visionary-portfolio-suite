import { motion } from "framer-motion";
import { useState } from "react";

type ProfilePortraitProps = {
  sizeClass?: string;
  compact?: boolean;
};

export const ProfilePortrait = ({ sizeClass = "w-56 h-56 md:w-72 md:h-72", compact = false }: ProfilePortraitProps) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative ${sizeClass}`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-2xl" />
      <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#05070d] shadow-[0_0_80px_rgba(56,189,248,0.16)]">
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

        {!imageFailed ? (
          <img
            src="/profile-photo.png"
            alt="Yenesew Bekele profile portrait"
            className="relative z-10 w-full h-full object-cover object-center"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
            <div>
              <div className={`mx-auto rounded-full border border-white/10 bg-white/5 ${compact ? "w-24 h-24" : "w-28 h-28"} flex items-center justify-center text-3xl font-display font-semibold text-white shadow-lg shadow-primary/20`}>
                YB
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Profile photo pending
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5" />
      </div>
    </motion.div>
  );
};