'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const phrases = ["Web Developer", "UI/UX Designer", "Problem Solver"]

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          x: mousePosition.x / 50,
          y: mousePosition.y / 50,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          Welcome to My Digital Realm
        </motion.h1>
        <div className="h-20 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhrase}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              className="text-3xl md:text-4xl font-semibold text-center"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              I&apos;m a <span className="text-blue-400">{phrases[currentPhrase]}</span>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-2xl text-center"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
        >
          Crafting digital experiences that blend creativity with functionality
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          Explore My Work
        </motion.button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </div>
  )
}