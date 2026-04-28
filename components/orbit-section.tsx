"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Cpu } from "lucide-react"
import Image from "next/image"

const aiLogos = [
  { 
    name: "Perplexity", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perplexity-color-jIXjZOticu6nQ6zGbSV7neydQF4x3I.png",
    angle: 0,
  },
  { 
    name: "Meta AI", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meta-80pcCRXwDtrU6CJBwBJ3z49gI25bbH.png",
    angle: 45,
  },
  { 
    name: "Grok", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-IHJrBwr4kRi0pJov6n2IQZKGASE0j5.png",
    angle: 90,
    dark: true,
  },
  { 
    name: "Claude", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claude-Sa2HFW7oMRzE8O4pR5giTKczDtDTLi.png",
    angle: 135,
  },
  { 
    name: "Codex", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codex-6qS0dnRsZc0VSB8PGCThSju2DxR3ZS.jpeg",
    angle: 180,
  },
  { 
    name: "Gemini", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini-BVgaAgGMDttXGl4rYBy0GYZAlaEDrs.webp",
    angle: 225,
  },
  { 
    name: "ChatGPT", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT-Logo.svg-VA6c124QEw7wsMY5hvplSaRKCIuFs2.png",
    angle: 270,
  },
  { 
    name: "Manus", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manus-ZQKglngRvwpJFVlhf8ccbloatzF2We.webp",
    angle: 315,
  },
]

const innerLogos = [
  { 
    name: "Cursor", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cursor-ewYBKlQT5G4f6dXvTSPt75re6PSelV.avif",
    angle: 45,
  },
  { 
    name: "Perplexity", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perplexity-color-jIXjZOticu6nQ6zGbSV7neydQF4x3I.png",
    angle: 135,
  },
  { 
    name: "Gemini", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini-BVgaAgGMDttXGl4rYBy0GYZAlaEDrs.webp",
    angle: 225,
  },
  { 
    name: "Claude", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claude-Sa2HFW7oMRzE8O4pR5giTKczDtDTLi.png",
    angle: 315,
  },
]

const features = [
  "Identificacao de solucoes de IA para automatizar processos e reduzir custos operacionais",
  "Implementacao rapida nas campanhas de marketing para gerar insights de alta performance",
  "Analise continua de dados para eliminar desperdicio e aumentar as margens de lucro",
  "Agentes conversacionais que qualificam e convertem leads enquanto sua equipe dorme",
]

export function OrbitSection() {
  const outerRadius = 180
  const innerRadius = 100

  return (
    <section id="ia" className="py-24 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(255,215,0,0.03)_0%,transparent_60%)]" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Orbit graphic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px] md:w-[480px] md:h-[480px]">
              {/* Outer ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-white/[0.08]"
              />
              
              {/* Inner ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-dotted border-yellow/[0.12]"
              />

              {/* Center WRMAX logo */}
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 30px rgba(255,215,0,0.1), 0 0 60px rgba(255,215,0,0.05)",
                    "0 0 50px rgba(255,215,0,0.2), 0 0 80px rgba(255,215,0,0.1)",
                    "0 0 30px rgba(255,215,0,0.1), 0 0 60px rgba(255,215,0,0.05)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-black border-2 border-yellow/30 flex items-center justify-center z-20 overflow-hidden"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-branca-wrmax-ZligtXa6zDeXz3t2iz1Tup0ljrj4r9.png"
                  alt="WRMAX"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </motion.div>

              {/* Inner orbit items */}
              {innerLogos.map((item, i) => {
                const angle = item.angle * (Math.PI / 180)
                const radius = innerRadius
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                
                return (
                  <motion.div
                    key={`inner-${item.name}-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(255,215,0,0.4)" }}
                    className="absolute w-[44px] h-[44px] md:w-[52px] md:h-[52px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl flex items-center justify-center shadow-lg cursor-pointer z-10 group overflow-hidden border-2 border-transparent hover:border-yellow/50 transition-all"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="w-7 h-7 md:w-8 md:h-8 object-contain"
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white/60 uppercase tracking-[1px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.name}
                    </span>
                  </motion.div>
                )
              })}

              {/* Outer orbit items */}
              {aiLogos.map((item, i) => {
                const angle = item.angle * (Math.PI / 180)
                const radius = outerRadius
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                
                return (
                  <motion.div
                    key={`outer-${item.name}-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(255,215,0,0.4)" }}
                    className={`absolute w-[48px] h-[48px] md:w-[58px] md:h-[58px] -translate-x-1/2 -translate-y-1/2 rounded-xl flex items-center justify-center shadow-lg cursor-pointer z-10 group overflow-hidden border-2 border-transparent hover:border-yellow/50 transition-all ${item.dark ? 'bg-white' : 'bg-white'}`}
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={44}
                      height={44}
                      className="w-8 h-8 md:w-9 md:h-9 object-contain"
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white/60 uppercase tracking-[1px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.name}
                    </span>
                  </motion.div>
                )
              })}

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="absolute w-1 h-1 rounded-full bg-yellow/40"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Cpu className="w-3 h-3 text-yellow" />
              <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
                IA & Tecnologia
              </span>
            </div>
            
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.04em] mb-5">
              IMPLEMENTAMOS<br />A TECNOLOGIA<br />
              <span className="text-yellow">CERTA PARA</span><br />SEU NEGOCIO
            </h2>
            
            <p className="text-base text-white/60 leading-relaxed mb-7">
              Enquanto voce foca no negocio, nos integramos as ferramentas de IA mais avancadas do mercado ao seu processo comercial — com foco total em resultado, nao em experimentacao.
            </p>
            
            {/* Features list */}
            <div className="flex flex-col gap-3 mb-9">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-[22px] h-[22px] flex-shrink-0 bg-yellow rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-[11px] h-[11px] text-black" strokeWidth={3} />
                  </div>
                  <p className="text-[13px] text-white/60 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-green text-white px-8 py-4 rounded-lg text-[13px] font-bold uppercase tracking-wider glow-green transition-all"
            >
              SABER MAIS SOBRE IA APLICADA
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
