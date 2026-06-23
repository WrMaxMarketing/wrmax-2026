"use client"

import { motion } from "framer-motion"
import { BarChart2, Building2, Check, ChevronDown, ClipboardList, Loader2, Mail, Phone, Send, User } from "lucide-react"
import { WhatsappIcon } from "./whatsapp-icon"
import Image from "next/image"
import { useState } from "react"

const checkItems = [
  {
    title: "Diagnóstico dos seus gargalos de aquisição",
    subtitle: "Mapeamos onde seu funil está vazando dinheiro"
  },
  {
    title: "Plano de ação personalizado em 48h",
    subtitle: "Estratégia concreta, não um relatório genérico"
  },
  {
    title: "Sem taxa, sem compromisso inicial",
    subtitle: "A consultoria diagnóstico é 100% gratuita para qualificados"
  }
]

const revenueOptions = [
  "Até R$50.000/mês",
  "R$50.000 a R$150.000/mês",
  "R$150.000 a R$500.000/mês",
  "R$500.000 a R$1.000.000/mês",
  "Acima de R$1.000.000/mês"
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="min-h-screen flex flex-col justify-center py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -left-[200px] -bottom-[150px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,215,0,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -right-[100px] top-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,215,0,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-stretch">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3 h-3 text-yellow" />
              <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
                Primeiro Passo
              </span>
            </div> */}
            
            <h2 className="font-display text-[clamp(32px,4.6vw,60px)] leading-[0.95] tracking-[0.04em] mb-5">
              VAMOS MAPEAR SEU POTENCIAL<span className="text-yellow"> DE ESCALA.</span>
            </h2>

            <p className="text-base md:text-md text-white/60 leading-relaxed mb-7">
              Preencha o formulário. Nossa equipe analisa o perfil e retorna em até 48h para uma sessão de diagnóstico estratégico, sem pitch de venda, sem enrolação.
            </p>

            {/* Check items */}
            <div className="flex flex-col gap-3.5 mb-7">
              {checkItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-[24px] h-[24px] flex-shrink-0 bg-yellow rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-[12px] h-[12px] text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5">{item.title}</p>
                    <p className="text-sm text-white/60">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-auto p-5 bg-surface-2 border border-white/10 rounded-lg">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-3">
                Ou fale diretamente
              </p>
              <motion.a
                href="https://wa.me/5586999188465?text=Ol%C3%A1,%20vim%20do%20site%20da%20Wrmax%20e%20gostaria%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20marketing."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-green text-white w-full py-4 rounded-lg text-[13px] font-bold uppercase tracking-wider glow-green transition-all"
              >
                <WhatsappIcon className="w-4 h-4" />
                CONVERSAR NO WHATSAPP
              </motion.a>
            </div>
          </motion.div>

          {/* Right content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface-2 border border-yellow/25 rounded-2xl overflow-hidden relative glow-yellow shadow-2xl shadow-black/60">
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow to-transparent" />
              {/* Subtle yellow wash for prominence */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.06)_0%,transparent_55%)] pointer-events-none" />

              {/* Header */}
              <div className="relative px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[18px] font-extrabold uppercase leading-tight">
                    Preencha para iniciar sua análise
                  </h3>
                  <motion.div
                    animate={{
                      rotate: [0, -2.5, 2.5, -2.5, 2.5, 0],
                      scale: [1, 1.06, 1],
                      boxShadow: [
                        "0 0 6px rgba(255,215,0,0.35)",
                        "0 0 18px rgba(255,215,0,0.85)",
                        "0 0 6px rgba(255,215,0,0.35)",
                      ],
                    }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                    className="shrink-0 inline-flex items-center gap-1 bg-yellow/20 border border-yellow/50 rounded-full px-2 py-0.5"
                  >
                    <ClipboardList className="w-2.5 h-2.5 text-yellow" />
                    <span className="text-[8px] font-extrabold text-yellow uppercase tracking-[0.5px] whitespace-nowrap">
                      Diagnóstico Gratuito
                    </span>
                  </motion.div>
                </div>
              </div>
              
              {/* Form */}
              <div className="relative p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Formulário Enviado!</h4>
                    <p className="text-white/60">Nossa equipe entrará em contato em até 48h.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    {/* Nome + Empresa */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-bold text-white/55 uppercase tracking-[1.5px] mb-1.5">
                          Nome Completo *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="nome"
                            required
                            placeholder="Seu nome completo"
                            className="w-full bg-black/70 border border-white/15 rounded-lg text-white text-sm py-3 px-4 pl-11 outline-none transition-all focus:border-yellow focus:bg-black focus:ring-[3px] focus:ring-yellow/20 placeholder:text-white/30"
                          />
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-white/55 uppercase tracking-[1.5px] mb-1.5">
                          Empresa *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="empresa"
                            required
                            placeholder="Nome da empresa"
                            className="w-full bg-black/70 border border-white/15 rounded-lg text-white text-sm py-3 px-4 pl-11 outline-none transition-all focus:border-yellow focus:bg-black focus:ring-[3px] focus:ring-yellow/20 placeholder:text-white/30"
                          />
                          <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                        </div>
                      </div>
                    </div>

                    {/* Faturamento */}
                    <div>
                      <label className="block text-[10px] font-bold text-white/55 uppercase tracking-[1.5px] mb-1.5">
                        Faturamento Mensal Atual *
                      </label>
                      <div className="relative">
                        <select
                          name="faturamento"
                          required
                          className="w-full bg-black/70 border border-white/15 rounded-lg text-white text-sm py-3 px-4 pl-11 pr-10 outline-none appearance-none transition-all focus:border-yellow focus:bg-black focus:ring-[3px] focus:ring-yellow/20"
                        >
                          <option value="" disabled selected>Selecione a faixa de faturamento</option>
                          {revenueOptions.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <BarChart2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                      </div>
                    </div>

                    {/* Email + WhatsApp */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-bold text-white/55 uppercase tracking-[1.5px] mb-1.5">
                          E-mail Corporativo *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="seu@email.com"
                            className="w-full bg-black/70 border border-white/15 rounded-lg text-white text-sm py-3 px-4 pl-11 outline-none transition-all focus:border-yellow focus:bg-black focus:ring-[3px] focus:ring-yellow/20 placeholder:text-white/30"
                          />
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-white/55 uppercase tracking-[1.5px] mb-1.5">
                          WhatsApp *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="whatsapp"
                            required
                            placeholder="(00) 00000-0000"
                            className="w-full bg-black/70 border border-white/15 rounded-lg text-white text-sm py-3 px-4 pl-11 outline-none transition-all focus:border-yellow focus:bg-black focus:ring-[3px] focus:ring-yellow/20 placeholder:text-white/30"
                          />
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/45" />
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-1 flex items-center justify-center gap-2 bg-green text-white w-full py-3.5 rounded-lg text-[13px] font-bold uppercase tracking-wider glow-green transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          ENVIANDO...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          QUERO MEU DIAGNÓSTICO GRATUITO
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

            {/* Office Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden h-[150px] mt-4 border border-white/10"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem-escritorio.JPG-JJmRO6zSha0cyYOylm7kW8GBf7meCd.jpeg"
                alt="Escritório WRMAX"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 glass border border-white/10 rounded-lg px-3 py-1.5">
                <span className="text-[9px] font-bold text-white/80 uppercase tracking-[1px]">
                  Hub WRMAX - Teresina, PI
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
