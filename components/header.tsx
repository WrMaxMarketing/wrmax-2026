"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { WhatsappIcon } from "./whatsapp-icon"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#metodo", label: "Método" },
  { href: "#ia", label: "IA & Tech" },
  { href: "#lideranca", label: "Liderança" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar */}
      <ScrollProgress />
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-12 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/LOGO%20-%20WRMAX.png"
              alt="WRMAX Marketing Digital"
              width={180}
              height={52}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[11px] font-semibold text-white/60 uppercase tracking-[2.5px] hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-green text-white px-5 py-3 rounded-lg text-[11px] font-bold uppercase tracking-wider glow-green transition-all"
            >
              <WhatsappIcon className="w-4 h-4" />
              Falar com Consultor
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 glass"
            >
              <div className="flex flex-col gap-5 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[13px] font-bold text-white/60 uppercase tracking-[2px]"
                  >
                    {link.label}
                  </Link>
                ))}
                <motion.a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 bg-green text-white px-5 py-4 rounded-lg text-[11px] font-bold uppercase tracking-wider"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  Falar com Consultor
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(currentProgress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 h-[2px] z-[100]" style={{ width: `${progress}%` }}>
      <div className="h-full bg-gradient-to-r from-yellow to-yellow/70 shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
    </div>
  )
}
