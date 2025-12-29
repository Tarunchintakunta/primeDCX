"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Zap } from "lucide-react"
import { AnimatedCounter } from "@/components/animations/AnimatedCounter"

export const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Live Trading Environment</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Trade with <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Confidence</span>,<br />
            Scale with <span className="text-white">PRIME DCX</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Access 150+ currency pairs with institutional-grade execution, zero spreads, and deep liquidity.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" variant="glow" className="rounded-full h-14 px-8 text-lg">
              Start Trading <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg bg-white/5 border-white/10 hover:bg-white/10">
              Try Demo Account
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white"><AnimatedCounter value={2.5} prefix="$" suffix="B+" decimals={1} /></div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Daily Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white"><AnimatedCounter value={50} suffix="k+" /></div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Active Traders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white"><AnimatedCounter value={0} suffix="" decimals={1} /></div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Pips Spreads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Global Support</div>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual / Floating Elements */}
        <motion.div 
          className="relative hidden lg:block h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6" />

            {/* Main Mockup Card */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-10 left-10 right-10 bottom-10 glass rounded-2xl border border-white/10 p-6 flex flex-col shadow-2xl"
            >
                {/* Fake Chart Interface */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-muted-foreground">EUR/USD • 1H</div>
                </div>
                <div className="flex-1 bg-linear-to-b from-transparent to-primary/5 rounded-lg border border-white/5 relative overflow-hidden">
                    {/* Simplified Chart Line */}
                    <svg className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 C100,80 200,120 300,60 S400,90 500,40 S600,60 800,20 L800,200 L0,200 Z" fill="url(#grad)" fillOpacity="0.2" />
                        <path d="M0,100 C100,80 200,120 300,60 S400,90 500,40 S600,60 800,20" stroke="url(#lineGrad)" strokeWidth="3" fill="none" />
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6366F1" />
                                <stop offset="100%" stopColor="#22D3EE" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-sm text-muted-foreground">Balance</div>
                        <div className="text-2xl font-bold text-white">$24,560.00</div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/20 border border-primary/20">
                        <div className="text-sm text-primary-foreground/80">Profit</div>
                        <div className="text-2xl font-bold text-primary-foreground">+$1,240.50</div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div 
                style={{ y: y2 }}
                className="absolute -right-8 top-1/4 p-4 glass rounded-xl border border-white/10 shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20 text-green-500"><Zap className="w-5 h-5" /></div>
                    <div>
                        <div className="text-xs text-muted-foreground">Execution</div>
                        <div className="text-sm font-bold text-white">12ms</div>
                    </div>
                </div>
            </motion.div>

             <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 bottom-1/4 p-4 glass rounded-xl border border-white/10 shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent"><Globe className="w-5 h-5" /></div>
                    <div>
                        <div className="text-xs text-muted-foreground">Markets</div>
                        <div className="text-sm font-bold text-white">Forex & Crypto</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
