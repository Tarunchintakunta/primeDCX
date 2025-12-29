"use client"

import React, { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  /* Smart Navbar logic removed to keep logo fixed */
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5" : "bg-transparent h-24" // Taller initial state
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className={cn("flex items-center justify-between transition-all duration-300", scrolled ? "h-16" : "h-24")}>
            {/* Logo with Layout ID for smooth transition from Intro */}
            <motion.div 
                layoutId="brand-logo"
                className="flex items-center gap-2"
            >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-br from-primary to-accent rotate-45 rounded-lg flex items-center justify-center shadow-lg">
                     <div className="w-4 h-4 md:w-5 md:h-5 bg-background -rotate-45 rounded-sm" />
                </div>
                <div className="flex flex-col ml-2 leading-none">
                     <span className="text-xl md:text-2xl font-bold tracking-tighter text-white font-display">PRIME</span>
                     <span className="text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary to-accent font-display">DCX</span>
                </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                <a href="#features" className="hover:text-primary transition-colors">Features</a>
                <a href="#market" className="hover:text-primary transition-colors">Market</a>
                <a href="#platforms" className="hover:text-primary transition-colors">Platforms</a>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" className="text-muted-foreground hover:text-white">Log In</Button>
                <Button size="sm" variant="glow" className="rounded-full px-6">Start Trading</Button>
            </div>
            
             {/* Mobile Toggle */}
             <div className="md:hidden">
                 <Button variant="ghost" size="icon"><Menu className="w-6 h-6" /></Button>
             </div>
        </div>
      </div>
    </motion.nav>
  )
}
