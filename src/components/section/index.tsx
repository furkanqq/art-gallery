import { motion } from "framer-motion";
import { RefObject } from "react";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
  index?: number;
}

export default function Section({
  children,
  className,
  ref,
  index,
}: SectionProps) {
  return (
    <motion.section
      className={`h-screen w-full m-0 p-0 relative bg-black ${className}`}
      ref={ref}
      key={index}
    >
      {children}
    </motion.section>
  );
}
