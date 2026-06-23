"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, Plus } from "lucide-react"

const faqs = [
  {
    question: "Para qual tipo de empresa é a WRMAX?",
    answer: "A WRMAX atende empresas B2B e B2C de médio e alto padrão que faturam acima de R$50.000/mês e buscam crescimento estruturado. Avaliamos maturidade do negócio, disposição para implementação e potencial de escala antes de qualquer proposta."
  },
  {
    question: "Já tenho equipe de marketing interna. Por que contratar a WRMAX?",
    answer: "Equipes internas são excelentes para execução. A WRMAX atua como conselheiro estratégico e braço tecnológico, trazendo IA, automações e visão externa de crescimento que raramente surge de dentro. Complementamos, não substituímos."
  },
  {
    question: "Como funciona o modelo de atendimento?",
    answer: "Trabalhamos em assessoria mensal com contrato de performance. Começa com diagnóstico completo, seguido de implementação por etapas: estrutura, tráfego, IA e otimização contínua. Reuniões semanais de análise com os próprios estrategistas."
  },
  {
    question: "O que diferencia a WRMAX de uma agência comum?",
    answer: "Agências vendem serviço. Nós vendemos resultado. Nossa entrega é baseada em método, dados e IA integrada, não em criativos bonitos ou relatórios vagos. Cada ação é atribuída a uma métrica de negócio real: CAC, LTV, CPL, taxa de conversão."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Primeiros indicadores aparecem entre 30 e 60 dias. Resultados consistentes de escala de faturamento entre 90 e 120 dias, dependendo do estado inicial da operação. Projetos com automação e IA já implantados aceleram esse ciclo."
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="min-h-screen flex flex-col justify-center py-16 md:py-20 bg-surface-1">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-5"
          >
            <HelpCircle className="w-3 h-3 text-yellow" />
            <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
              Dúvidas Frequentes
            </span>
          </motion.div> */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(26px,3.6vw,46px)] leading-[0.95] tracking-[0.04em]"
          >
            TIRE SUAS DÚVIDAS<br /><span className="text-yellow">ANTES DE COMEÇAR</span>
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[760px] mx-auto flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-lg overflow-hidden transition-colors ${
                openIndex === index ? "border-yellow/30" : "border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 bg-surface-2 hover:bg-surface-3 transition-colors text-left gap-4"
              >
                <span className="text-sm font-semibold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-7 h-7 flex-shrink-0 bg-yellow rounded-full flex items-center justify-center"
                >
                  <Plus className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 bg-surface-1 text-sm text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
