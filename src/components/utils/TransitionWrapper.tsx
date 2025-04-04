"use client";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";

export default function TransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.4,
        ease: "circInOut",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{
            y: 10,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            scale: 1,
          }}
          // exit={{
          //   y: -10,
          //   filter: "blur(10px)",
          //   scale: 0.98,
          // }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
