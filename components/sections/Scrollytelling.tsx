"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

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
  {
    title: "Institutional Grade",
    text: "Access deep liquidity pools and institutional-grade pricing. Built for high-volume traders who demand the best market conditions.",
    video: "/videos/video-5.mp4",
  },
]

interface BackgroundVideoProps {
    item: typeof content[0]
    opacity: MotionValue<number>
}

function BackgroundVideo({ item, opacity }: BackgroundVideoProps) {
    return (
        <motion.div
            style={{ opacity }} 
            className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
           {/* Fallback gradient */}
           <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-black/40 opacity-50" />
           <video
             className="absolute inset-0 w-full h-full object-cover"
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

  // Fade timings for 5 items (4 scroll transitions)
  // 0 -> 0.25 -> 0.5 -> 0.75 -> 1.0
  
  // Video 1: Always fully visible as base layer
  const opacity1 = useTransform(scrollYProgress, [0, 1], [1, 1])
  
  // Video 2: Fades in over Video 1 (target 0.25)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1])
  
  // Video 3: Fades in over Video 2 (target 0.5)
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
  
  // Video 4: Fades in over Video 3 (target 0.75)
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.75], [0, 1])

  // Video 5: Fades in over Video 4 (target 1.0)
  const opacity5 = useTransform(scrollYProgress, [0.9, 1.0], [0, 1])

  const opacities = [opacity1, opacity2, opacity3, opacity4, opacity5]

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {content.map((item, index) => (
            <BackgroundVideo 
                key={index} 
                item={item} 
                opacity={opacities[index]} 
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

      <div className="relative z-10 w-full -mt-[100vh]">
        {content.map((item, index) => (
            <div key={index} className="h-screen flex items-center justify-center p-6 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl px-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-xl tracking-tight leading-tight">
                        {item.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-medium text-white/90 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
                        {item.text}
                    </p>
                </motion.div>
            </div>
        ))}
      </div>
    </section>
  )
}
