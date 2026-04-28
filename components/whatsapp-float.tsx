"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5586999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, boxShadow: "0 8px 40px rgba(34,197,94,0.7)" }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-[58px] h-[58px] bg-green rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(34,197,94,0.5)] transition-all"
      aria-label="Conversar no WhatsApp"
    >
      {/* Ping animation */}
      <span className="absolute inset-[-6px] rounded-full border border-green/30 animate-[ping_2s_ease-in-out_infinite]" />
      
      <MessageCircle className="w-[26px] h-[26px] text-white" strokeWidth={2} />
    </motion.a>
  )
}
