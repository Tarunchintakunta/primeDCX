"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight } from "lucide-react"

const pairsData = [
  { pair: "EUR/USD", bid: "1.08560", ask: "1.08563", spread: "0.3", change: "+0.23%" },
  { pair: "GBP/USD", bid: "1.26402", ask: "1.26408", spread: "0.6", change: "+0.15%" },
  { pair: "USD/JPY", bid: "148.201", ask: "148.204", spread: "0.3", change: "-0.05%" },
  { pair: "AUD/USD", bid: "0.65401", ask: "0.65405", spread: "0.4", change: "+0.12%" },
  { pair: "USD/CAD", bid: "1.34505", ask: "1.34509", spread: "0.4", change: "-0.08%" },
  { pair: "USD/CHF", bid: "0.87902", ask: "0.87906", spread: "0.4", change: "+0.03%" },
]

export const CurrencyTable = () => {
  const [search, setSearch] = useState("")

  const filtered = pairsData.filter(p => p.pair.toLowerCase().includes(search.toLowerCase()))

  return (
    <section id="market" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
                <h2 className="text-3xl font-bold mb-2">Popular Trading Pairs</h2>
                <p className="text-muted-foreground">Live quotes with institutional spreads</p>
            </div>
            <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                    placeholder="Search pairs..." 
                    className="pl-9 bg-white/5 border-white/10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-4 font-medium text-muted-foreground">Pair</th>
                        <th className="p-4 font-medium text-muted-foreground">Bid</th>
                        <th className="p-4 font-medium text-muted-foreground">Ask</th>
                        <th className="p-4 font-medium text-muted-foreground">Spread</th>
                        <th className="p-4 font-medium text-muted-foreground">Change</th>
                        <th className="p-4 font-medium text-muted-foreground"></th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((row, i) => (
                        <motion.tr 
                            key={row.pair}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                        >
                            <td className="p-4 font-bold text-white group-hover:text-primary transition-colors">{row.pair}</td>
                            <td className="p-4 font-mono">{row.bid}</td>
                            <td className="p-4 font-mono">{row.ask}</td>
                            <td className="p-4"><span className="px-2 py-1 rounded bg-white/5 text-xs font-mono">{row.spread}</span></td>
                            <td className={`p-4 font-medium ${row.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                                {row.change}
                            </td>
                            <td className="p-4 text-right">
                                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">Trade</Button>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        <div className="mt-8 text-center">
            <Button variant="outline" className="gap-2">View All Pairs <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </div>
    </section>
  )
}
