"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";

type AnimatedNumberProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedNumberProps) {
  const count = useMotionValue(0);

  const formatted = useTransform(count, (value) => {
    const rounded = Math.round(value);
    return `${prefix}${rounded.toLocaleString()}${suffix}`;
  });

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      // Ensure target is coerced to number for TS
      animate(0 as number, target as number, {
        duration,
        onUpdate: (latest: number) => {
          count.set(latest);
        },
      });
    }
  }, [inView, target, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {formatted}
    </motion.span>
  );
}
