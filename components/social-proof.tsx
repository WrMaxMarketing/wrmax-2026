"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Stethoscope, HeartPulse, Briefcase, Building, Syringe, User } from "lucide-react"

const logos = [
  { icon: Stethoscope, label: "Médicos" },
  { icon: HeartPulse, label: "Clínicas Médicas" },
  { icon: Syringe, label: "Cirurgiões" },
  { icon: Briefcase, label: "Empresários" },
  { icon: Building, label: "Consultórios" },
  { icon: HeartPulse, label: "Clínicas Estéticas" },
]

const testimonials = [
  {
    highlight: "Crescimento de 70% ao ano — 4 anos seguidos",
    quote: "Em 90 dias o CPL caiu 62% e triplicamos atendimentos qualificados. A WRMAX não entrega tráfego, entrega estrutura de vendas.",
    name: "Dr. Ricardo Mendes",
    role: "Cirurgião Plástico · Teresina, PI",
  },
  {
    highlight: "Atendimento de 8h → 40 segundos com IA",
    quote: "O agente de IA reduziu o tempo de resposta e a taxa de conversão subiu 4x. O método da WRMAX é outro nível de inteligência.",
    name: "Dra. Amanda Reis",
    role: "Dermatologista · Clínica Premium · São Paulo, SP",
  },
  {
    highlight: "R$180K → R$700K/mês sem dobrar o time",
    quote: "Escalamos sem aumentar a equipe. A automação de funil e os agentes de IA criaram uma operação que funciona sozinha.",
    name: "Carlos Eduardo",
    role: "CEO · Grupo de Clínicas Médicas · Brasília, DF",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function SocialProof() {
  return (
    <section className="bg-surface-1 py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-5"
          >
            <ShieldCheck className="w-3 h-3 text-yellow" />
            <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
              Prova Social
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.04em]"
          >
            AS EMPRESAS QUE MAIS CRESCEM<br />
            <span className="text-yellow">PASSAM PELA WRMAX</span>
          </motion.h2>
        </div>

        {/* Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                borderColor: "rgba(255,215,0,0.5)", 
                y: -2,
                boxShadow: "0 0 20px rgba(255,215,0,0.2), 0 0 40px rgba(255,215,0,0.1)"
              }}
              className="bg-surface-2 border border-white/10 rounded-lg h-16 flex items-center justify-center gap-2 px-4 transition-all cursor-default group"
            >
              <logo.icon className="w-4 h-4 text-white/40 flex-shrink-0 group-hover:text-yellow transition-colors" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-[1.5px] whitespace-nowrap group-hover:text-yellow transition-colors">
                {logo.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                borderColor: "rgba(255,215,0,0.25)", 
                y: -5,
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
              }}
              className="relative bg-surface-2 border border-white/10 rounded-2xl p-6 transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              {/* Top glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Stars */}
              <div className="text-yellow text-sm tracking-wider mb-3">★★★★★</div>
              
              {/* Highlight */}
              <p className="text-[11px] font-bold text-yellow uppercase tracking-[1px] mb-2 min-h-[32px]">
                {testimonial.highlight}
              </p>
              
              {/* Quote */}
              <p className="text-[13px] text-white/60 leading-relaxed mb-auto min-h-[72px]">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-surface-3 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-[18px] h-[18px] text-white/40" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{testimonial.name}</p>
                  <p className="text-[10px] text-yellow mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
