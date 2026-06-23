"use client"

import { motion } from "framer-motion"
import { BookOpen, Cpu, MapPin, UserCheck } from "lucide-react"

const differentials = [
  {
    icon: BookOpen,
    title: "Método, não Improviso",
    description: "Processo documentado, testado e replicável. Cada decisão embasada em dados, não em feeling ou tendência de TikTok."
  },
  {
    icon: Cpu,
    title: "IA Customizada para seu Negócio",
    description: "Não usamos ferramentas genéricas. Construímos agentes de IA treinados especificamente para o processo comercial da sua empresa."
  },
  {
    icon: MapPin,
    title: "Visão Nacional a partir do Piauí",
    description: "Hub em Teresina com clientes de SP ao AM. Estratégia de alto nível não tem endereço fixo, e provamos isso a cada resultado."
  },
  {
    icon: UserCheck,
    title: "Acesso Direto à Liderança",
    description: "Seu projeto é gerido pelos próprios estrategistas, sem repassar para estagiários. Accountability total do início ao resultado."
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
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
}

export function WhySection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 md:py-20 bg-surface-1">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-3 h-3 text-yellow" />
              <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
                Por que a WRMAX?
              </span>
            </div> */}
            
            <h2 className="font-display text-[clamp(26px,3.6vw,46px)] leading-[0.95] tracking-[0.04em] mb-5">
              NÃO SOMOS<br />UMA AGÊNCIA.<br />
              <span className="text-yellow">SOMOS SEU<br />DEPARTAMENTO<br />DE CRESCIMENTO.</span>
            </h2>
            
            <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-[440px]">
              Agências tradicionais entregam relatórios. Nós entregamos sistemas de vendas que operam <span className="whitespace-nowrap">24 horas por dia</span>, <span className="whitespace-nowrap">7 dias por semana</span>,integrando tráfego, IA e automação ponta a ponta.
            </p>
          </motion.div>

          {/* Right content - Differentials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 4, 
                  borderColor: "rgba(255,215,0,0.25)",
                  backgroundColor: "rgba(255,255,255,0.02)"
                }}
                className="flex items-start gap-4 p-4 bg-surface-2 border border-white/10 rounded-lg transition-all duration-300"
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center group-hover:bg-yellow/[0.15] transition-all">
                  <diff.icon className="w-[18px] h-[18px] text-yellow" />
                </div>
                <div>
                  <p className="text-[13px] font-extrabold uppercase tracking-tight mb-1.5">{diff.title}</p>
                  <p className="text-[13px] text-white/60 leading-relaxed">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
