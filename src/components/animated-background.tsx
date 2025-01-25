"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Hyperspeed, Ballpit, LetterGlitch, WaveBackground, SparklesBackground } from "@reactbits/backgrounds"

const backgrounds = [
  { component: Hyperspeed, color: "#0066cc" },
  { component: Ballpit, color: "#00264d" },
  { component: LetterGlitch, color: "#003366" },
  { component: WaveBackground, color: "#004080" },
  { component: SparklesBackground, color: "#005599" },
]

export function AnimatedBackground() {
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentBg}
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {backgrounds.map((Background, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
          >
            <Background.component color={Background.color} />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

