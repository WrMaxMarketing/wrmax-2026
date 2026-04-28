"use client"

import { motion } from "framer-motion"
import { Calendar, Lock } from "lucide-react"

export function CTABanner() {
  return (
    <section className="bg-yellow py-[72px] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:28px_28px]" />
      
      {/* Decorative circle */}
      <div className="absolute -top-1/2 -right-[10%] w-[500px] h-[500px] rounded-full bg-white/[0.04] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-bold text-black/70 uppercase tracking-[3px] mb-2.5">
              Decisão Estratégica
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] text-black leading-[0.92] tracking-[0.04em]">
              ENQUANTO VOCÊ<br />LÊ ISSO, SEU<br />CONCORRENTE<br />ESCALA.
            </h2>
          </motion.div>
          
          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[15px] font-medium text-black/80 mb-6 max-w-[300px] leading-relaxed">
              Vagas limitadas por mês. Só trabalhamos com empresas prontas para crescer de forma séria.
            </p>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02, y: -3, boxShadow: "0 8px 32px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white text-black px-9 py-4 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all"
            >
              <Calendar className="w-4 h-4" />
              GARANTIR MINHA VAGA
            </motion.a>
            <p className="text-[12px] font-medium text-black/70 mt-3 flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" />
              Consultoria diagnóstico gratuita e sem compromisso
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
