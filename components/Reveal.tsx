"use client";

import { motion, useReducedMotion, type MotionProps, type Transition } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  once?: boolean;
} & Omit<MotionProps, "initial" | "whileInView" | "viewport" | "transition">;

const easing = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as = "div",
  className,
  once = true,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion(as);

  if (reduceMotion) {
    return (
      <MotionComponent className={className} {...rest}>
        {children}
      </MotionComponent>
    );
  }

  const transition: Transition = { duration: 0.7, delay, ease: easing };

  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.18 }}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
