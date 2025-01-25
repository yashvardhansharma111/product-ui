"use client"

import { motion } from "framer-motion"
import Ballpit from "@/components/reactbits/Ballpit/Ballpit"
import Hyperspeed from "@/components/reactbits/Hyperspeed"
import LetterGlitch from "@/components/reactbits/LetterGlitch"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Sparkles, Rocket, Zap, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { Tabs } from "@/components/ui/tabs"
import { useState } from "react"
import CoolCard from "@/components/coolcard"
import { CuboidIcon as Cube, Cog, Gamepad2, FileText, Shuffle } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Cutting-edge solutions for modern challenges",
  },
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Optimized performance for seamless experience",
  },
  {
    icon: Zap,
    title: "Powerful Tools",
    description: "Advanced features at your fingertips",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with audiences worldwide",
  },
]

const TabsDemo = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random Tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
};

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  )
}

export default function Home() {
  const [activeBackground, setActiveBackground] = useState<"hyperspeed" | "ballpit" | "glitch">("hyperspeed")
  const [lastBackgroundChange, setLastBackgroundChange] = useState(Date.now())

  return (
    <ParallaxProvider>
      <div className="relative min-h-screen overflow-hidden bg-black">
        <ParticleBackground />
        {/* Dynamic Backgrounds */}
        <div className="fixed inset-0 z-0">
          {activeBackground === "hyperspeed" && (
            <Hyperspeed
              effectOptions={{
                onSpeedUp: () => console.log("Speeding up..."),
                onSlowDown: () => console.log("Slowing down..."),
                distortion: "turbulentDistortion",
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xffffff,
                  brokenLines: 0xffffff,
                  leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                  rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                  sticks: 0x03b3c3,
                },
              }}
            />
          )}

          {activeBackground === "ballpit" && (
            <div className="absolute inset-0">
              <Ballpit count={200} gravity={0.7} friction={0.8} wallBounce={0.95} followCursor={true} />
            </div>
          )}
          {activeBackground === "glitch" && (
            <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />
          )}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center relative"
              >
                <motion.svg
                  className="absolute top-0 left-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                </motion.svg>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text relative z-10">
                  <TypeAnimation
                    sequence={["Transform", 1000, "Innovate", 1000, "Elevate", 1000]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                  <br />
                  Your Digital Presence
                </h1>
                <motion.p
                  className="text-xl md:text-2xl text-blue-300 mb-8 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Create unforgettable experiences with cutting-edge technology and innovative design solutions.
                </motion.p>
                <motion.div
                  className="flex flex-wrap justify-center gap-4 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white glow-effect" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-400 hover:bg-blue-600/10 glow-effect"
                    asChild
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="relative py-20">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                onViewportEnter={() => setActiveBackground("ballpit")}
                onViewportLeave={() => setActiveBackground("hyperspeed")}
              >
                {features.map((feature, index) => (
                  <Parallax key={feature.title} y={[-20, 20]} tagOuter="div">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                      <Card className="glass-effect border-blue-600/50 hover:border-blue-400 transition-colors duration-300 animate-float overflow-hidden">
                        <CardHeader className="relative">
                          <motion.div
                            className="absolute inset-0 z-0"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill="url(#blob-gradient)"
                                d="M44.9,-76.2C59.7,-69.8,74,-59.9,83.1,-46.3C92.2,-32.7,96.1,-16.3,94.3,-1.1C92.5,14.2,85,28.4,75.8,41.1C66.6,53.8,55.7,65,42.6,73.6C29.5,82.2,14.8,88.1,-0.2,88.4C-15.2,88.7,-30.4,83.3,-44.2,75.5C-58,67.7,-70.4,57.4,-79.3,44.3C-88.2,31.2,-93.6,15.6,-92.9,0.4C-92.2,-14.8,-85.4,-29.6,-76.3,-42.6C-67.2,-55.6,-55.8,-66.8,-42.3,-74.3C-28.8,-81.8,-14.4,-85.6,0.8,-86.9C16,-88.3,32,-82.6,44.9,-76.2Z"
                                transform="translate(100 100)"
                              />
                            </svg>
                          </motion.div>
                          <feature.icon className="w-12 h-12 text-blue-400 mb-4 relative z-10" />
                          <CardTitle className="text-blue-300 relative z-10">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-blue-300/80">{feature.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Parallax>
                ))}
              </motion.div>
            </div>
            <defs>
              <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </section>

          {/* Services Section */}
          <section className="relative py-20">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                onViewportEnter={() => setActiveBackground("glitch")}
                onViewportLeave={() => setActiveBackground("hyperspeed")}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">Our Services</h2>
                <TabsDemo />
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <Card className="glass-effect border-blue-600/50 glow-effect">
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                      Ready to Get Started?
                    </CardTitle>
                    <CardDescription className="text-xl text-blue-300/80">
                      Join us in creating the next generation of digital experiences.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="justify-center pt-6">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group glow-effect" asChild>
                      <Link href="/contact" className="flex items-center gap-2">
                        Contact Us
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </ParallaxProvider>
  )
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="particle-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(50)].map((_, i) => (
          <motion.circle
            key={i}
            r={Math.random() * 3 + 1}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            fill="url(#particle-gradient)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

