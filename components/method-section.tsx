"use client"

import { motion } from "framer-motion"
import { Bot, Circle, Facebook, Layers, LayoutTemplate, LineChart, PenTool, Rocket, Search, TrendingUp, Workflow, Zap } from "lucide-react"

const methodCards = [
  {
    num: "01",
    tag: "Aquisição",
    icon: TrendingUp,
    title: "Tráfego Pago\nde Alta Performance",
    description: "Meta Ads e Google Ads geridos com obsessão por ROI. Rastreamento preciso, teste A/B e otimização orientada por dados — não por feeling.",
    badges: [
      { icon: Facebook, label: "Meta" },
      { icon: Search, label: "Google" },
      { label: "CRO" }
    ]
  },
  {
    num: "02",
    tag: "Automação",
    icon: Workflow,
    title: "Automação e\nIntegração de Sistemas",
    description: "Fluxos automáticos via n8n e APIs. Do lead ao CRM, do contrato à cobrança — cada etapa operando sem intervenção humana onde a IA age melhor.",
    badges: [
      { label: "n8n" },
      { label: "APIs" },
      { label: "CRM" }
    ]
  },
  {
    num: "03",
    tag: "Inteligência",
    icon: Bot,
    title: "Agentes de IA\npara Atendimento 24/7",
    description: "Agentes treinados com a linguagem da sua empresa. Qualificam, nutrem e encaminham leads para o fechamento — sem dormir, sem errar protocolo.",
    badges: [
      { label: "GPT-4" },
      { label: "WhatsApp" },
      { label: "Qualificação" }
    ]
  },
  {
    num: "04",
    tag: "Persuasão",
    icon: PenTool,
    title: "Copywriting e\nNeuromarketing",
    description: "Mensagens que ativam gatilhos neurais de decisão: urgência real, prova social cirúrgica e proposta irrecusável. Copy que vende, não apenas comunica.",
    badges: [
      { label: "VSLs" },
      { label: "Landing Pages" },
      { label: "E-mails" }
    ]
  },
]

const processSteps = [
  { icon: Search, title: "Diagnóstico", subtitle: "Mapear gargalos", step: 1 },
  { icon: LayoutTemplate, title: "Estrutura", subtitle: "Funil + copy + automações", step: 2 },
  { icon: Rocket, title: "Lançamento", subtitle: "Tráfego + IA ativos", step: 3 },
  { icon: LineChart, title: "Otimização", subtitle: "Dados → decisão", step: 4 },
  { icon: Zap, title: "Escala", subtitle: "Crescimento previsível", step: 5 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export function MethodSection() {
  return (
    <section id="metodo" className="py-24 bg-surface-1">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-5"
          >
            <Layers className="w-3 h-3 text-yellow" />
            <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
              A Solução Completa
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.04em] mb-4"
          >
            O MÉTODO <span className="text-yellow">WRMAX</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/60 leading-relaxed max-w-[540px] mx-auto"
          >
            Quatro pilares integrados que operam como um sistema — não como serviços isolados. Cada peça alimenta a próxima.
          </motion.p>
        </div>

        {/* Method Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {methodCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(255,215,0,0.3)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
              }}
              className="relative bg-surface-2 border border-white/10 rounded-2xl p-8 transition-all duration-400 overflow-hidden group"
            >
              {/* Number background */}
              <span className="absolute top-4 right-5 font-display text-[64px] text-white/[0.03] leading-none pointer-events-none group-hover:text-yellow/[0.06] transition-colors">
                {card.num}
              </span>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.06)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon */}
              <div className="w-[52px] h-[52px] rounded-xl bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4 group-hover:bg-yellow/[0.18] group-hover:border-yellow/40 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
                <card.icon className="w-[22px] h-[22px] text-yellow" />
              </div>

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 bg-yellow/10 border border-yellow/20 rounded-full px-2.5 py-1 mb-4">
                <Circle className="w-1.5 h-1.5 fill-yellow text-yellow" />
                <span className="text-[9px] font-bold text-yellow uppercase tracking-[1px]">
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-extrabold uppercase tracking-tight mb-3 whitespace-pre-line">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-white/60 leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {card.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-surface-3 border border-white/10 rounded-md px-2.5 py-1 text-[10px] font-semibold text-white/60 uppercase tracking-[1px] hover:border-white/15 hover:text-white transition-all"
                  >
                    {badge.icon && <badge.icon className="w-2.5 h-2.5" />}
                    {badge.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process flow - Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-2 border border-white/10 rounded-2xl px-6 py-10"
        >
          <p className="text-[10px] font-bold text-yellow uppercase tracking-[3px] text-center mb-12">
            Como o Método Funciona na Prática
          </p>

          {/* DESKTOP TIMELINE */}
          <div className="hidden md:block relative pt-6">
            <div className="relative h-[260px] max-w-6xl mx-auto">

              {/* linha horizontal */}
              <motion.div
                className="absolute left-[5%] right-[5%] top-[150px] h-[2px] bg-gradient-to-r from-yellow/10 via-yellow/70 to-yellow/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />

              {processSteps.map((step, index) => {
                const positions = ["10%", "30%", "50%", "70%", "90%"];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.45 }}
                    className="absolute top-0 -translate-x-1/2 text-center group"
                    style={{ left: positions[index] }}
                  >
                    {/* círculo principal */}
                    <div className="relative mx-auto w-[96px] h-[96px] rounded-full bg-black border border-yellow/40 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                      <div className="absolute inset-2 rounded-full border border-yellow/20" />

                      <div className="w-[62px] h-[62px] rounded-full bg-yellow/10 border border-yellow/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow/20">
                        <step.icon className="w-6 h-6 text-yellow" />
                      </div>
                    </div>

                    {/* haste até a linha */}
                    <div className="mx-auto w-[1px] h-[54px] bg-gradient-to-b from-yellow/50 to-yellow/10" />

                    {/* bolinha na linha */}
                    <div className="relative z-10 mx-auto -mt-[11px] w-[24px] h-[24px] rounded-full bg-yellow text-black text-[10px] font-bold flex items-center justify-center border-[3px] border-black">
                      {step.step}
                    </div>

                    {/* texto abaixo */}
                    <div className="mt-4 w-[150px]">
                      <p className="text-[12px] font-bold uppercase tracking-[1px] text-white">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[10px] text-white/50 leading-tight">
                        {step.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE TIMELINE */}
          <div className="md:hidden relative">

            {/* linha vertical */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/10" />
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-yellow/60" />

            <div className="flex flex-col gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-12">

                  {/* node */}
                  <div className="absolute left-[10px] top-1 w-6 h-6 bg-black border border-yellow rounded-full flex items-center justify-center">
                    <span className="text-[9px] text-yellow font-bold">
                      {step.step}
                    </span>
                  </div>

                  {/* conteúdo */}
                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-4 h-4 text-yellow" />
                      <p className="text-[12px] font-bold uppercase text-white">
                        {step.title}
                      </p>
                    </div>

                    <p className="text-[11px] text-white/50 leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
