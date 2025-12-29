"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Laptop, Smartphone, Monitor } from "lucide-react"

export const PlatformsShowcase = () => {
  return (
    <section id="platforms" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trade Anywhere, Anytime</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience seamless trading across all devices with our synchronized platforms.
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background/50 backdrop-blur-md border border-white/10 p-1 rounded-full h-auto">
              <TabsTrigger value="web" className="rounded-full px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Laptop className="w-4 h-4 mr-2" /> Web Trader
              </TabsTrigger>
              <TabsTrigger value="mobile" className="rounded-full px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Smartphone className="w-4 h-4 mr-2" /> Mobile App
              </TabsTrigger>
              <TabsTrigger value="desktop" className="rounded-full px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Monitor className="w-4 h-4 mr-2" /> Desktop
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="web" className="mt-0">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                 >
                     <h3 className="text-3xl font-bold text-gradient">Advanced Web Trader</h3>
                     <ul className="space-y-4">
                         {["No download required", "One-click trading", "Real-time analytics", "Customizable layouts"].map((item, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <div className="w-2 h-2 rounded-full bg-accent" />
                                 <span className="text-lg text-gray-300">{item}</span>
                             </li>
                         ))}
                     </ul>
                     <Button variant="glow" size="lg" className="mt-4">Launch Web Trader</Button>
                 </motion.div>
                 
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    className="relative perspective-1000 group"
                 >
                     <div className="relative z-10 bg-background border border-white/10 rounded-xl shadow-2xl overflow-hidden aspect-video transform hover:scale-105 transition-transform duration-500">
                         {/* Mockup Content */}
                         <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black p-4">
                             <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                                 <div className="bg-red-500 w-3 h-3 rounded-full"/>
                                 <div className="bg-yellow-500 w-3 h-3 rounded-full"/>
                                 <div className="bg-green-500 w-3 h-3 rounded-full"/>
                             </div>
                             <div className="grid grid-cols-4 gap-4 h-full">
                                 <div className="col-span-3 bg-white/5 rounded-lg h-3/4" />
                                 <div className="col-span-1 bg-white/5 rounded-lg h-3/4" />
                             </div>
                         </div>
                     </div>
                     {/* Glow behind */}
                     <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10" />
                 </motion.div>
             </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="mt-0">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6 md:order-2"
                 >
                     <h3 className="text-3xl font-bold text-gradient">Trading on the Go</h3>
                     <ul className="space-y-4">
                         {["Full trading functionality", "Push notifications", "Mobile-optimized charts", "Secure biometric login"].map((item, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <div className="w-2 h-2 rounded-full bg-accent" />
                                 <span className="text-lg text-gray-300">{item}</span>
                             </li>
                         ))}
                     </ul>
                     <div className="flex gap-4 mt-4">
                         <Button variant="outline">App Store</Button>
                         <Button variant="outline">Google Play</Button>
                     </div>
                 </motion.div>
                 
                 <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex justify-center md:order-1"
                 >
                     {/* Phone Mockup */}
                     <div className="relative w-[300px] h-[600px] border-[14px] border-black rounded-[3rem] bg-gray-900 shadow-xl overflow-hidden">
                         <div className="w-[140px] h-[30px] bg-black absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] z-20" />
                         <div className="h-full w-full bg-linear-to-b from-gray-800 to-gray-950 p-4 pt-12 flex flex-col">
                             <div className="flex justify-between items-center mb-6">
                                 <div className="flex flex-col">
                                     <span className="text-white font-bold text-lg">EUR/USD</span>
                                     <span className="text-green-400 text-sm font-mono">+1.24%</span>
                                 </div>
                                 <div className="w-8 h-8 rounded-full bg-white/10" />
                             </div>
                             <div className="w-full h-40 bg-linear-to-b from-primary/10 to-transparent rounded-xl border border-primary/20 mb-4 p-2 relative overflow-hidden">
                                { /* Chart lines */ }
                                <div className="absolute bottom-4 left-0 right-0 h-24 border-t border-white/5">
                                   <div className="w-1/4 h-full border-r border-white/5 float-left" />
                                   <div className="w-1/4 h-full border-r border-white/5 float-left" />
                                   <div className="w-1/4 h-full border-r border-white/5 float-left" />
                                </div>
                                <div className="absolute inset-0 flex items-end">
                                     <div className="w-1/5 h-1/3 bg-green-500/20 mx-1 rounded-sm" />
                                     <div className="w-1/5 h-1/2 bg-green-500/30 mx-1 rounded-sm" />
                                     <div className="w-1/5 h-2/3 bg-green-500/50 mx-1 rounded-sm" />
                                     <div className="w-1/5 h-1/3 bg-red-500/30 mx-1 rounded-sm" />
                                     <div className="w-1/5 h-3/4 bg-green-500/40 mx-1 rounded-sm" />
                                </div>
                             </div>
                             <div className="grid grid-cols-2 gap-3 mb-4">
                                 <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                     <div className="text-xs text-muted-foreground mb-1">Balance</div>
                                     <div className="text-white font-mono font-medium">$12K</div>
                                 </div>
                                 <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                     <div className="text-xs text-muted-foreground mb-1">Profit</div>
                                     <div className="text-green-400 font-mono font-medium">+$840</div>
                                 </div>
                             </div>
                             <div className="grid grid-cols-2 gap-3 mt-auto">
                                 <button className="bg-red-500/20 text-red-500 py-3 rounded-xl font-bold text-sm">Sell</button>
                                 <button className="bg-green-500/20 text-green-500 py-3 rounded-xl font-bold text-sm">Buy</button>
                             </div>
                         </div>
                     </div>
                 </motion.div>
             </div>
          </TabsContent>

          <TabsContent value="desktop" className="mt-0">
            {/* Similar structure to Web */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="space-y-6"
                >
                    <h3 className="text-3xl font-bold text-gradient">Professional Desktop Suite</h3>
                    <ul className="space-y-4">
                        {["Multi-monitor support", "Algorithmic trading engine", "Advanced charting tools", "Direct Market Access (DMA)"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span className="text-lg text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Button variant="glow" size="lg" className="mt-4">Download for Mac/PC</Button>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="relative group"
                >
                    <div className="bg-gray-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden aspect-video relative p-2">
                        {/* Monitor Stand Base - Visual trick */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-lg blur-sm" />
                        
                        {/* Desktop UI */}
                        <div className="bg-black/50 w-full h-full rounded-lg border border-white/5 p-3 grid grid-cols-12 gap-3">
                            {/* Sidebar */}
                            <div className="col-span-2 bg-white/5 rounded-md h-full space-y-2 p-2">
                                <div className="w-full h-8 bg-white/10 rounded-md" />
                                <div className="w-full h-8 bg-white/5 rounded-md" />
                                <div className="w-full h-8 bg-white/5 rounded-md" />
                            </div>
                            {/* Main Chart */}
                            <div className="col-span-7 bg-white/5 rounded-md h-full p-2 relative">
                                <div className="absolute inset-x-0 bottom-10 top-10 border-t border-b border-white/5 flex items-center justify-center">
                                     <div className="w-full h-32 bg-linear-to-r from-transparent via-primary/20 to-transparent skew-y-6" />
                                </div>
                            </div>
                            {/* Market Watch */}
                            <div className="col-span-3 bg-white/5 rounded-md h-full space-y-2 p-2">
                                <div className="w-full h-12 bg-red-500/10 border-l-2 border-red-500 rounded-r-md" />
                                <div className="w-full h-12 bg-green-500/10 border-l-2 border-green-500 rounded-r-md" />
                                <div className="w-full h-12 bg-green-500/10 border-l-2 border-green-500 rounded-r-md" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
