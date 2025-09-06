"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-full py-6 px-4 mt-auto"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Vishal Thimmaiah. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
