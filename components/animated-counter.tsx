"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, motion, useSpring, useTransform } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  prefix?: string
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({ end, prefix = "", suffix = "", className, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [hasStarted, setHasStarted] = useState(false)
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  })
  
  const display = useTransform(spring, (latest) => 
    `${prefix}${Math.round(latest)}${suffix}`
  )

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      spring.set(end)
    }
  }, [isInView, hasStarted, spring, end])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
