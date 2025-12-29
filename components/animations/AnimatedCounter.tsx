"use client"

import { motion, useSpring, useTransform, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export const AnimatedCounter = ({ value, prefix = "", suffix = "", decimals = 0 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) => {
    return prefix + current.toFixed(decimals) + suffix
  })

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [spring, value, inView])

  return <motion.span ref={ref}>{display}</motion.span>
}
