"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const timelineEvents = [
  { year: 2010, title: "Company Founded", description: "Our journey began..." },
  { year: 2015, title: "Expansion", description: "We expanded our operations..." },
  { year: 2020, title: "Global Reach", description: "We went global..." },
  { year: 2023, title: "Innovation Award", description: "We received recognition for our innovations..." },
]

const TimelineEvent = ({ event, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} mb-8`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="w-1/2 px-4">
        <div className={`bg-gray-900 rounded-lg p-6 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-400">{event.description}</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-1 bg-blue-500 relative">
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-blue-300 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Journey
        </motion.h1>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

