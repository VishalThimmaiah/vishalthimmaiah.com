"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Linkedin, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Spotlight } from "@/components/ui/spotlight"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishalthimmaiah/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vishalthimmaiah/",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/VishalThimmaiah",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@vishalthimmaiah/",
    icon: Youtube,
    color: "hover:text-red-600",
  },
]

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                {`Hi, I'm `}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                  Vishal Thimmaiah
                </span>
              </motion.h1>
              
              <TextGenerateEffect
                words="IT Business Analyst with a passion for technology, fitness, and creative visual arts. A true jack of all trades, I thrive on building a strong personal brand and exploring new ways to innovate and inspire."
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              />
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center space-x-4"
            >
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-muted/50 transition-all duration-300 ${social.color} hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-background">
              <div className="relative">
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/indexpic.jpg"
                    alt="Vishal Thimmaiah"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover w-full h-auto max-w-sm mx-auto"
                    priority
                  />
                </motion.div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  Available for work
                </motion.div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
