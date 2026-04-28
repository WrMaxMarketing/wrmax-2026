"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, DollarSign, Cpu, Users, Shuffle, ArrowRight } from "lucide-react"

const painPoints = [
  {
    icon: TrendingDown,
    title: "Vendas completamente estagnadas",
    description: "Investe mês após mês e os números não saem do lugar. O problema não é o budget — é a falta de estrutura sistêmica."
  },
  {
    icon: DollarSign,
    title: "CPL insustentável, lead não converte",
    description: "Cada lead custa caro demais e fecha pouco. Sem otimização por dados reais, você queima caixa sistematicamente."
  },
  {
    icon: Cpu,
    title: "Marketing artesanal sem Inteligência Artificial",
    description: "Seus concorrentes já usam IA para atendimento, qualificação e fechamento. Você ainda opera no manual."
  },
  {
    icon: Users,
    title: "Time comercial com leads desqualificados",
    description: "Vendedores perdendo horas em contatos frios que nunca vão comprar. Qualificação precede toda abordagem eficiente."
  },
  {
    icon: Shuffle,
    title: "Dependência de indicações para crescer",
    description: "Sem máquina de aquisição previsível não há escala. Você precisa de um sistema — não de sorte ou networking."
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

export function PainSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <AlertTriangle className="w-3 h-3 text-yellow" />
              <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
                Diagnóstico Honesto
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.04em] mb-5">
              VOCÊ ESTÁ<br />PRESO NESSES<br />
              <span className="text-yellow">PROBLEMAS?</span>
            </h2>
            
            <p className="text-base text-white/60 leading-relaxed max-w-[420px] mb-8">
              A maioria das empresas desperdiça verba em marketing porque nunca estruturou o processo. Reconheça o diagnóstico antes de qualquer decisão.
            </p>
            
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-green text-white px-8 py-4 rounded-lg text-[13px] font-bold uppercase tracking-wider glow-green transition-all"
            >
              QUERO MEU DIAGNÓSTICO GRÁTIS
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right content - Pain items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {painPoints.map((pain, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 4, 
                  borderColor: "rgba(255,215,0,0.25)",
                  backgroundColor: "rgba(255,255,255,0.02)"
                }}
                className="flex items-start gap-4 p-5 bg-surface-2 border border-white/10 rounded-lg transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center transition-all">
                  <pain.icon className="w-[18px] h-[18px] text-yellow" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">{pain.title}</p>
                  <p className="text-[13px] text-white/60 leading-relaxed">{pain.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
