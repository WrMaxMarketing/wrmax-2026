"use client"

import { motion } from "framer-motion"
import { BarChart2, Building2, Check, ChevronDown, ClipboardList, Loader2, Mail, MessageCircle, Phone, Send, User } from "lucide-react"
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
  "R$50.000 – R$150.000/mês",
  "R$150.000 – R$500.000/mês",
  "R$500.000 – R$1.000.000/mês",
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
    <section id="contato" className="min-h-screen flex flex-col justify-center py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -left-[200px] -bottom-[150px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,215,0,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -right-[100px] top-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,215,0,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3 h-3 text-yellow" />
              <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
                Primeiro Passo
              </span>
            </div> */}
            
            <h2 className="font-display text-[clamp(26px,3.6vw,46px)] leading-[0.95] tracking-[0.04em] mb-4">
              VAMOS MAPEAR<br />SEU POTENCIAL<br /><span className="text-yellow">DE ESCALA.</span>
            </h2>

            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-7">
              Preencha o formulário. Nossa equipe analisa o perfil e retorna em até 48h para uma sessão de diagnóstico estratégico — sem pitch de venda, sem enrolação.
            </p>
            
            {/* Check items */}
            <div className="flex flex-col gap-3 mb-6">
              {checkItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-[22px] h-[22px] flex-shrink-0 bg-yellow rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-[11px] h-[11px] text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold mb-0.5">{item.title}</p>
                    <p className="text-[13px] text-white/60">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* WhatsApp CTA */}
            <div className="p-5 bg-surface-2 border border-white/10 rounded-lg">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-3">
                Ou fale diretamente
              </p>
              <motion.a
                href="https://wa.me/5586999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-green text-white w-full py-3.5 rounded-lg text-[12px] font-bold uppercase tracking-wider glow-green transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                CONVERSAR NO WHATSAPP
              </motion.a>
            </div>
            
            {/* Office Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-xl overflow-hidden h-[160px] mt-5"
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

          {/* Right content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface-2 border border-white/10 rounded-2xl overflow-hidden relative">
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow to-transparent" />
              
              {/* Header */}
              <div className="px-7 py-5 border-b border-white/10 bg-surface-2">
                <div className="inline-flex items-center gap-1.5 bg-yellow/10 border border-yellow/20 rounded-full px-2.5 py-1 mb-1.5">
                  <ClipboardList className="w-2.5 h-2.5 text-yellow" />
                  <span className="text-[9px] font-bold text-yellow uppercase tracking-[1px]">
                    Diagnóstico Gratuito
                  </span>
                </div>
                <h3 className="text-[17px] font-extrabold uppercase">
                  Preencha para iniciar sua análise
                </h3>
              </div>
              
              {/* Form */}
              <div className="p-7">
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
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Nome */}
                    <div>
                      <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[1.5px] mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="nome"
                          required
                          placeholder="Seu nome completo"
                          className="w-full bg-black border border-white/10 rounded-lg text-white text-sm py-3.5 px-4 pl-11 outline-none transition-all focus:border-yellow focus:ring-[3px] focus:ring-yellow/10 placeholder:text-white/20"
                        />
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      </div>
                    </div>
                    
                    {/* Empresa */}
                    <div>
                      <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[1.5px] mb-2">
                        Empresa *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="empresa"
                          required
                          placeholder="Nome da sua empresa"
                          className="w-full bg-black border border-white/10 rounded-lg text-white text-sm py-3.5 px-4 pl-11 outline-none transition-all focus:border-yellow focus:ring-[3px] focus:ring-yellow/10 placeholder:text-white/20"
                        />
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      </div>
                    </div>
                    
                    {/* Faturamento */}
                    <div>
                      <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[1.5px] mb-2">
                        Faturamento Mensal Atual *
                      </label>
                      <div className="relative">
                        <select
                          name="faturamento"
                          required
                          className="w-full bg-black border border-white/10 rounded-lg text-white text-sm py-3.5 px-4 pl-11 pr-10 outline-none appearance-none transition-all focus:border-yellow focus:ring-[3px] focus:ring-yellow/10"
                        >
                          <option value="" disabled selected>Selecione a faixa de faturamento</option>
                          {revenueOptions.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <BarChart2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[1.5px] mb-2">
                        E-mail Corporativo *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="seu@email.com"
                          className="w-full bg-black border border-white/10 rounded-lg text-white text-sm py-3.5 px-4 pl-11 outline-none transition-all focus:border-yellow focus:ring-[3px] focus:ring-yellow/10 placeholder:text-white/20"
                        />
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      </div>
                    </div>
                    
                    {/* WhatsApp */}
                    <div>
                      <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[1.5px] mb-2">
                        WhatsApp *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          placeholder="(00) 00000-0000"
                          className="w-full bg-black border border-white/10 rounded-lg text-white text-sm py-3.5 px-4 pl-11 outline-none transition-all focus:border-yellow focus:ring-[3px] focus:ring-yellow/10 placeholder:text-white/20"
                        />
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      </div>
                    </div>
                    
                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-2 flex items-center justify-center gap-2 bg-green text-white w-full py-4 rounded-lg text-[13px] font-bold uppercase tracking-wider glow-green transition-all disabled:opacity-70"
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
