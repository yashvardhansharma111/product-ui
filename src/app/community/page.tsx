"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const communityEvents = [
  { title: "Annual Meetup", date: "July 15, 2023", description: "Join us for our annual community gathering..." },
  {
    title: "Online Workshop",
    date: "August 5, 2023",
    description: "Learn new skills in our interactive online workshop...",
  },
  { title: "Hackathon", date: "September 20-22, 2023", description: "Participate in our 48-hour coding challenge..." },
]

const CommunityEvent = ({ event, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="bg-gray-900 rounded-lg p-6 mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{event.date}</p>
      <p className="text-gray-300">{event.description}</p>
    </motion.div>
  )
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-blue-300 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Community
        </motion.h1>
        <div className="max-w-2xl mx-auto">
          {communityEvents.map((event, index) => (
            <CommunityEvent key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

