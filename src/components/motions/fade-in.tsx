"use client";

import { motion, useInView } from "motion/react";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export function FadeInSection({ children }: Props) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -35% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
