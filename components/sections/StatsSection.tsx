"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animations/AnimatedCounter"

export const StatsSection = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {[
            { value: 2.5, prefix: "$", suffix: "B+", label: "Daily Volume", decimals: 1 },
            { value: 50, prefix: "", suffix: "k+", label: "Active Traders", decimals: 0 },
            { value: 150, prefix: "", suffix: "+", label: "Currency Pairs", decimals: 0 },
            { value: 99.9, prefix: "", suffix: "%", label: "Uptime", decimals: 1 },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </motion.div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
