"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

const content = [
  {
    title: "Start with Vision",
    text: "Every great trader starts with a vision. At PRIME DCX, we don't just provide a platform—we build partnerships. Your success is our mission.",
    video: "/videos/video-1.mp4",
  },
  {
    title: "High-Speed Execution",
    text: "Powered by cutting-edge technology, our execution engine processes orders in milliseconds. Zero slippage, transparent pricing, institutional liquidity.",
    video: "/videos/video-2.mp4",
  },
  {
    title: "Global Connectivity",
    text: "Join 50,000+ traders worldwide who trust PRIME DCX. From Tokyo to New York, our infrastructure ensures you're always connected to the markets.",
    video: "/videos/video-3.mp4",
  },
  {
    title: "Education & Growth",
    text: "Your growth is our priority. With comprehensive education, 24/7 support, and advanced tools, we empower you to make informed decisions.",
    video: "/videos/video-4.mp4",
  },
]

interface BackgroundVideoProps {
    index: number
    item: typeof content[0]
    scrollYProgress: MotionValue<number>
}

function BackgroundVideo({ index, item, scrollYProgress }: BackgroundVideoProps) {
    const start = index * 0.2
    const end = start + 0.2
  
    const opacity = useTransform(
      scrollYProgress,
      [start, start + 0.05, end - 0.05, end],
      [0, 1, 1, 0]
    )

    const firstItemOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    
    return (
        <motion.div
            style={{ opacity: index === 0 ? firstItemOpacity : opacity }} 
            className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
           {/* Fallback gradient */}
           <div 
              className={cn(
                  "absolute inset-0 bg-linear-to-br opacity-50", 
                  index === 0 ? "from-blue-900 to-black" :
                  index === 1 ? "from-purple-900 to-black" :
                  index === 2 ? "from-indigo-900 to-black" :
                  "from-emerald-900 to-black"
              )} 
           />
           <video
             className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
             autoPlay
             muted
             loop
             playsInline
           >
             <source src={item.video} type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
        </motion.div>
    )
}

export const Scrollytelling = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {content.map((item, index) => (
            <BackgroundVideo 
                key={index} 
                index={index} 
                item={item} 
                scrollYProgress={scrollYProgress} 
            />
        ))}
        
        {/* Progress Indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            {content.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
             <motion.div 
                className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(99,102,241,0.8)]"
                style={{
                    top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
                }}
             />
        </div>
      </div>

      <div className="relative z-10 w-full">
        {content.map((item, index) => (
            <div key={index} className="h-screen flex items-center justify-center p-6 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl backdrop-blur-md bg-black/60 p-10 rounded-2xl border border-white/10 shadow-2xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{item.title}</h2>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{item.text}</p>
                </motion.div>
            </div>
        ))}
      </div>
    </section>
  )
}
