"use client"

import { motion } from "framer-motion"
import { Star, TrendingUp, Cpu, Target, Settings, Users } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "ROBERTH MOREIRA",
    role: "CEO & Estrategista-Chefe",
    tag: "CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roberth-9hvZN1pKC7KycndZmSQZIGgNv0VkAY.jpg",
    description: "Especialista em Growth Marketing e IA Aplicada a Vendas. Roberth transformou operações comerciais travadas em máquinas de aquisição previsíveis.",
    description2: "Domínio em tráfego pago, funis de alta conversão e implementação de IA para empresas.",
    color: "yellow",
    badges: [
      { icon: TrendingUp, label: "Growth" },
      { icon: Cpu, label: "IA" },
      { icon: Target, label: "Tráfego" },
    ]
  },
  {
    name: "KELLYANE FOLHA",
    role: "Head de Operações",
    tag: "CO-ESTRATEGISTA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kellyane.JPG-mxClyJ72WEyrKa7vysLUYraRra4Uvp.jpeg",
    description: "Referência em gestão de operações de marketing e atendimento consultivo de alto padrão. Garante que a estratégia seja executada com precisão cirúrgica.",
    description2: "O elo entre inteligência estratégica e a execução que realmente converte no campo.",
    color: "green",
    badges: [
      { icon: Settings, label: "Ops" },
      { icon: Users, label: "CX" },
      { icon: Star, label: "Alto Padrão" },
    ]
  },
]

export function TeamSection() {
  return (
    <section id="lideranca" className="py-24 bg-black">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-5"
          >
            <Star className="w-3 h-3 text-yellow" />
            <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
              Consultores de Elite
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.04em] mb-4"
          >
            AS MENTES POR TRÁS<br />DO <span className="text-yellow">RESULTADO</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/60 leading-relaxed max-w-[460px] mx-auto"
          >
            Quando você contrata a WRMAX, não tem uma equipe executando. Tem estrategistas pensando.
          </motion.p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -6, 
                borderColor: member.color === "yellow" ? "rgba(255,215,0,0.2)" : "rgba(34,197,94,0.2)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)"
              }}
              className="bg-surface-2 border border-white/10 rounded-2xl overflow-hidden transition-all duration-400"
            >
              <div className="grid md:grid-cols-2">
                {/* Photo */}
                <div className="relative min-h-[320px] overflow-hidden">
                  {/* Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  
                  {/* Glow */}
                  <div 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] rounded-full blur-[40px] opacity-[0.18] ${
                      member.color === "yellow" ? "bg-yellow" : "bg-green"
                    }`}
                  />
                  
                  {/* Nameplate */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-black/90 to-transparent">
                    <p className={`font-display text-base tracking-[2px] ${member.color === "yellow" ? "text-yellow" : "text-green"}`}>
                      {member.name}
                    </p>
                    <p className="text-[9px] text-white/60 uppercase tracking-[2px] mt-1">{member.role}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col h-full min-h-[320px]">
                  {/* Tag */}
                  <span className={`inline-flex items-center gap-1.5 ${
                    member.color === "yellow" ? "bg-yellow/10 border-yellow/20" : "bg-green/10 border-green/20"
                  } border rounded-full px-2.5 py-1 mb-4 self-start`}>
                    <span className={`text-[9px] font-bold uppercase tracking-[1px] ${
                      member.color === "yellow" ? "text-yellow" : "text-green"
                    }`}>
                      {member.tag}
                    </span>
                  </span>
                  
                  {/* Descriptions - fixed height for alignment */}
                  <div className="flex-1">
                    <p className="text-[13px] text-white/70 leading-relaxed mb-3">{member.description}</p>
                    <p className="text-[13px] text-white/50 leading-relaxed">{member.description2}</p>
                  </div>
                  
                  {/* Badges - always at bottom */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/10">
                    {member.badges.map((badge, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center gap-1 bg-surface-3 border border-white/10 rounded-md px-2.5 py-1 text-[10px] font-semibold text-white/60 uppercase tracking-[1px]"
                      >
                        <badge.icon className="w-2.5 h-2.5" />
                        {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
