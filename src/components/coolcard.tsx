import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CoolCardProps {
  icon: React.ElementType
  title: string
  description: string
}

const CoolCard: React.FC<CoolCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="glass-effect border-blue-600/50 hover:border-blue-400 transition-colors duration-300">
        <CardHeader>
          <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <Icon className="w-12 h-12 text-blue-400 mb-4" />
          </motion.div>
          <CardTitle className="text-blue-300">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-blue-300/80">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CoolCard

