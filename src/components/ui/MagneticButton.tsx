"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, href, className = "", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full font-medium tracking-wide text-sm bg-foreground text-background hover:bg-terracotta transition-colors duration-300";

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`group ${className}`}
    >
      {href ? (
        <Link href={href} className={baseClasses} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <button onClick={onClick} className={baseClasses}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return Content;
}
