"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Check, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { AnimatedCounter } from "./animated-counter"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen max-h-screen flex items-center overflow-hidden pt-[72px]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(255,215,0,0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_20%,rgba(255,215,0,0.025)_0%,transparent_55%)]" />
        <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]" />
      </div>

      {/* Right side photo area */}
      <motion.div 
        style={{ y }}
        className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block"
      >
        <div className="absolute inset-0 [clip-path:polygon(8%_0%,100%_0%,100%_100%,0%_100%)]">
          {/* Hero Image */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-dAsuOQFgoKPv5o5PCWVgPs3N7O0100.jpg"
            alt="Roberth Moreira - CEO WRMAX"
            fill
            className="object-cover object-center"
            priority
          />
          
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_60%_85%,rgba(255,215,0,0.15)_0%,transparent_55%)]" />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-20">
        <div className="max-w-[600px]">
          {/* Tag */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow"></span>
            </span>
            <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
              Hub de Estratégia · Teresina — PI
            </span>
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(28px,4.4vw,48px)] leading-[1.02] tracking-[0.02em] mb-4"
          >
            ANTES DE INVESTIR<br />
            NOVAMENTE EM MARKETING,<br />
            DESCUBRA <span className="text-yellow">ONDE SUA<br />
            EMPRESA ESTÁ FALHANDO.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white/60 leading-relaxed max-w-[440px] mb-6"
          >
            A <strong className="text-white">WRMAX Marketing</strong> identifica os gargalos que impedem o seu marketing de se tornar um{" "}
            <strong className="text-white">crescimento previsível.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-green text-white px-6 py-3 rounded-lg text-[12px] font-bold uppercase tracking-wider glow-green transition-all"
            >
              RECEBER DIAGNÓSTICO GRATUITO
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
            <motion.a
              href="https://wa.me/5586999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2, borderColor: "rgba(255,215,0,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-transparent text-yellow border-2 border-yellow/35 px-6 py-3 rounded-lg text-[12px] font-bold uppercase tracking-wider transition-all hover:bg-yellow hover:text-black"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              FALAR DIRETAMENTE
            </motion.a>
          </motion.div>

          {/* Diagnostic checks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8"
          >
            {["Diagnóstico inicial sem compromisso", "Análise de marketing"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-[18px] h-[18px] flex-shrink-0 bg-yellow rounded-full flex items-center justify-center">
                  <Check className="w-[10px] h-[10px] text-black" strokeWidth={3} />
                </span>
                <span className="text-[11px] font-semibold text-white/70 uppercase tracking-[0.5px]">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-0 pt-6 pb-12 border-t border-white/10 max-w-[380px]"
          >
            <div className="text-left pr-4">
              <AnimatedCounter end={120} suffix="+" className="font-display text-[32px] text-yellow leading-none tracking-wider" />
              <p className="text-[8px] text-white/40 uppercase tracking-[1.5px] mt-1">
                Clientes<br />Escalados
              </p>
            </div>
            <div className="text-left px-4 border-l border-white/10">
              <AnimatedCounter end={50} prefix="R$" suffix="M+" className="font-display text-[32px] text-yellow leading-none tracking-wider" />
              <p className="text-[8px] text-white/40 uppercase tracking-[1.5px] mt-1">
                Em Receita<br />Gerada
              </p>
            </div>
            <div className="text-left pl-4 border-l border-white/10">
              <span className="font-display text-[32px] text-yellow leading-none tracking-wider">24/7</span>
              <p className="text-[8px] text-white/40 uppercase tracking-normal mt-1 leading-tight">
                <span className="whitespace-nowrap">24 horas por dia,</span><br />
                <span className="whitespace-nowrap">7 dias por semana</span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
