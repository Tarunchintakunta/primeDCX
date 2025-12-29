"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface MegaLogoIntroProps {
  onComplete: () => void
}

export const MegaLogoIntro = ({ onComplete }: MegaLogoIntroProps) => {
  useEffect(() => {
    // Sequence:
    // 0s: Start scaling
    // 2s: Finish scaling
    // 2.2s: Trigger complete (move to navbar)
    const timer = setTimeout(() => {
      onComplete()
    }, 2200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Fade out the background
      transition={{ duration: 0.5 }}
    >
      <motion.div
        layoutId="brand-logo"
        initial={{ scale: 3, opacity: 0, filter: "blur(20px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="flex items-center gap-2"
      >
        <div className="relative flex items-center justify-center">
            {/* Logo Icon Placeholder - Diamond shape */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary to-accent rotate-45 rounded-xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                 <div className="w-8 h-8 md:w-12 md:h-12 bg-background rotate-[-45deg] rounded-lg" />
            </div>
        </div>
        <div className="flex flex-col ml-4 md:ml-6">
            <span className="text-4xl md:text-7xl font-bold tracking-tighter text-white font-display">PRIME</span>
            <span className="text-4xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-display">DCX</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
