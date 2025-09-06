"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/layout/SocialLinks";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          <div className="w-full h-full rounded-full border-4 border-primary overflow-hidden shadow-2xl shadow-primary/25">
            <Image
              src="/assets/images/indexpic.jpg"
              alt="Vishal Thimmaiah"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            "Hi, I'm Vishal Thimmaiah, an IT Business Analyst with a passion for technology, fitness, and creative visual arts. 
            A true jack of all trades, I thrive on building a strong personal brand and exploring new ways to innovate and inspire."
          </p>
        </motion.div>

        {/* Separator */}
        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-primary/30 mb-8 max-w-md mx-auto"
        />

        {/* Social Links */}
        <SocialLinks className="mb-8" />

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/workspace">View My Work</Link>
          </Button>
        </motion.div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
