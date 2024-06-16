import { motion } from "framer-motion";
import { RefObject } from "react";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
  key?: number;
}

export default function Section({
  children,
  className,
  ref,
  key,
}: SectionProps) {
  return (
    <motion.section
      className={`h-screen w-full m-0 p-0 relative bg-black ${className}`}
      ref={ref}
      key={key}
    >
      {children}
    </motion.section>
  );
}
