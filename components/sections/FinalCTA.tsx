"use client"

import { Button } from "@/components/ui/button"

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Trade with <span className="text-white">PRIME DCX</span>?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of traders worldwide and experience the difference of institutional-grade execution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="glow" className="px-10 h-14 text-lg">Get Started Now</Button>
            <Button size="lg" variant="outline" className="px-10 h-14 text-lg bg-black/20 border-white/20 hover:bg-black/40">Contact Sales</Button>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Trust Badges placeholder */}
            <div className="h-10 w-24 bg-white/20 rounded" />
            <div className="h-10 w-24 bg-white/20 rounded" />
            <div className="h-10 w-24 bg-white/20 rounded" />
        </div>
      </div>
    </section>
  )
}
