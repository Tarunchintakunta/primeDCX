"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, PlayCircle, Zap } from "lucide-react"

export const AccountTypesCTA = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Your Trading Journey</h2>
          <p className="text-muted-foreground">Choose the path that fits your experience level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl glass border border-white/10 flex flex-col items-center text-center space-y-6"
          >
            <div className="p-4 rounded-full bg-white/5"><PlayCircle className="w-8 h-8 text-white" /></div>
            <div>
                <h3 className="text-2xl font-bold mb-2">Demo Account</h3>
                <p className="text-muted-foreground">Practice with $100,000 virtual funds</p>
            </div>
            <ul className="space-y-3 text-left w-full max-w-xs text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Real-time market data</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Test trading strategies</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> No risk involved</li>
            </ul>
            <Button variant="outline" className="w-full mt-auto">Open Demo Account</Button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex flex-col items-center text-center space-y-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/10 blur-xl" />
            <div className="p-4 rounded-full bg-primary/20 relative z-10"><Zap className="w-8 h-8 text-primary" /></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Live Account</h3>
                <p className="text-primary-foreground/80">Trade with real capital, earn real profits</p>
            </div>
            <ul className="space-y-3 text-left w-full max-w-xs text-sm relative z-10">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Direct market access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Fast withdrawals</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Dedicated support</li>
            </ul>
            <Button variant="glow" className="w-full mt-auto relative z-10">Open Live Account</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
