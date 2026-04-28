"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap, Bot, PenTool, BarChart2, Target, Cpu } from "lucide-react"

const tickerItems = [
  { icon: TrendingUp, label: "Tráfego Pago de Alta Performance" },
  { icon: Zap, label: "Automação com n8n" },
  { icon: Bot, label: "Agentes IA 24/7" },
  { icon: PenTool, label: "Copywriting & Neuromarketing" },
  { icon: BarChart2, label: "Growth Marketing" },
  { icon: Target, label: "CRO & Analytics" },
  { icon: Cpu, label: "Inteligência Artificial Aplicada" },
]

export function Ticker() {
  return (
    <div className="bg-yellow py-3 overflow-hidden">
      <motion.div 
        animate={{ x: [0, "-50%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-0"
      >
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 whitespace-nowrap px-6"
          >
            <item.icon className="w-3 h-3 text-black" strokeWidth={2.5} />
            <span className="text-[10px] font-extrabold text-black uppercase tracking-[2.5px]">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
