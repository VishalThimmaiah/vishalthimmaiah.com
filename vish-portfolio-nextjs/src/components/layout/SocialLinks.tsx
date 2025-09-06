"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishalthimmaiah/",
    icon: "/assets/icons/linkedin.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vishalthimmaiah/",
    icon: "/assets/icons/instagram.png",
  },
  {
    name: "Snapchat",
    href: "https://www.snapchat.com/add/vshalthimmaiah",
    icon: "/assets/icons/snapchat.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/VishalThimmaiah",
    icon: "/assets/icons/x.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@vishalthimmaiah/",
    icon: "/assets/icons/youtube.png",
  },
];

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`flex justify-center gap-4 ${className}`}
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 rounded-full border-2 border-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/25"
            aria-label={`Visit ${social.name} profile`}
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
