"use client"

import { motion } from "framer-motion"
import { ArrowUp, ArrowDown } from "lucide-react"

const pairs = [
  { pair: "EUR/USD", price: "1.0856", change: "0.23%", up: true },
  { pair: "GBP/USD", price: "1.2640", change: "0.15%", up: true },
  { pair: "USD/JPY", price: "148.20", change: "0.05%", up: false },
  { pair: "AUD/USD", price: "0.6540", change: "0.12%", up: true },
  { pair: "USD/CAD", price: "1.3450", change: "0.08%", up: false },
  { pair: "USD/CHF", price: "0.8790", change: "0.03%", up: true },
  { pair: "NZD/USD", price: "0.6120", change: "0.18%", up: true },
  { pair: "BTC/USD", price: "45,230", change: "2.45%", up: true },
  { pair: "ETH/USD", price: "2,450", change: "1.20%", up: true },
  { pair: "XAU/USD", price: "2,035", change: "0.45%", up: true },
]

export const MarketTicker = () => {
  return (
    <div className="w-full bg-background/50 backdrop-blur-sm border-y border-white/5 py-3 overflow-hidden select-none">
      <motion.div 
        className="flex gap-16 whitespace-nowrap w-max"
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {[...pairs, ...pairs, ...pairs, ...pairs].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-medium">
            <span className="text-white font-semibold">{item.pair}</span>
            <span className="text-muted-foreground">{item.price}</span>
            <span className={`flex items-center gap-1 ${item.up ? "text-emerald-400" : "text-red-400"}`}>
              {item.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
