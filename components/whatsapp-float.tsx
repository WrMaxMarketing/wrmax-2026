"use client"

import { motion } from "framer-motion"
import { WhatsappIcon } from "./whatsapp-icon"

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5586999188465?text=Ol%C3%A1,%20vim%20do%20site%20da%20Wrmax%20e%20gostaria%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20marketing."
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
      
      <WhatsappIcon className="w-[26px] h-[26px] text-white" />
    </motion.a>
  )
}
