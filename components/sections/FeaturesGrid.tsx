"use client"

import { motion } from "framer-motion"
import { Zap, TrendingDown, LineChart, Shield, Headphones, Wallet } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Execution",
    description: "Sub-millisecond order execution with zero requotes ensuring you get the best price.",
  },
  {
    icon: TrendingDown,
    title: "Tight Spreads",
    description: "Industry-leading spreads from 0.0 pips on major currency pairs and indices.",
  },
  {
    icon: LineChart,
    title: "Advanced Charting",
    description: "Fully integrated TradingView charts with over 100+ technical indicators.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Bank-level encryption, segregated accounts, and fully regulated environment.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert multilingual support team available round the clock to assist you.",
  },
  {
    icon: Wallet,
    title: "Instant Withdrawals",
    description: "Automated processing system ensures your funds are available within 24 hours.",
  },
]

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Traders Choose <span className="text-primary">PRIME DCX</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-linear-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
