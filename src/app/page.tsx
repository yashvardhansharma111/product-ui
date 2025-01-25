"use client";

import { motion } from "framer-motion";
import Ballpit from "@/components/reactbits/Ballpit/Ballpit";
import Hyperspeed from "@/components/reactbits/Hyperspeed";
import LetterGlitch from "@/components/reactbits/LetterGlitch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Rocket, Zap, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { useState } from "react";

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
];

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
  );
};

export default function Home() {
  const [activeBackground, setActiveBackground] = useState<"hyperspeed" | "ballpit" | "glitch">("hyperspeed");

  return (
    <ParallaxProvider>
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Dynamic Backgrounds */}
        <div className="fixed inset-0 z-0">
        {activeBackground === "hyperspeed" && (
 <Hyperspeed
 effectOptions={{
   onSpeedUp: () => console.log("Speeding up..."),
   onSlowDown: () => console.log("Slowing down..."),
   distortion: 'turbulentDistortion',
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
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
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
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                  <TypeAnimation
                    sequence={["Transform", 1000, "Innovate", 1000, "Elevate", 1000]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                  <br />
                  Your Digital Presence
                </h1>
                <motion.p
                  className="text-xl md:text-2xl text-blue-300 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Create unforgettable experiences with cutting-edge technology and innovative design solutions.
                </motion.p>
                <motion.div
                  className="flex flex-wrap justify-center gap-4"
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
                      <Card className="glass-effect border-blue-600/50 hover:border-blue-400 transition-colors duration-300 animate-float">
                        <CardHeader>
                          <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                          <CardTitle className="text-blue-300">{feature.title}</CardTitle>
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
  );
}
