"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MegaLogoIntro } from "@/components/intro/MegaLogoIntro"
import { Navbar } from "@/components/navigation/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { MarketTicker } from "@/components/sections/MarketTicker"
import { Scrollytelling } from "@/components/sections/Scrollytelling"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { PlatformsShowcase } from "@/components/sections/PlatformsShowcase"
import { StatsSection } from "@/components/sections/StatsSection"
import { CurrencyTable } from "@/components/sections/CurrencyTable"
import { AccountTypesCTA } from "@/components/sections/AccountTypesCTA"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <AnimatePresence mode="wait">
        {!introFinished && (
            <MegaLogoIntro onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>
      
      {introFinished && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <Navbar />
            <HeroSection />
            <MarketTicker />
            <Scrollytelling />
            <FeaturesGrid />
            <PlatformsShowcase />
            <StatsSection />
            <CurrencyTable />
            <AccountTypesCTA />
            <FinalCTA />
            <Footer />
          </motion.div>
      )}
    </main>
  )
}
