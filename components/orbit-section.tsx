"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"

// Irregular orbit — varying radius, start angle, speed and direction so the
// logos scatter like atoms in a molecule instead of sitting on a fixed grid.
const orbitLogos = [
  {
    name: "ChatGPT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT-Logo.svg-VA6c124QEw7wsMY5hvplSaRKCIuFs2.png",
    radius: 205, angle: 10, duration: 55, direction: 1, size: 58,
  },
  {
    name: "Claude",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claude-Sa2HFW7oMRzE8O4pR5giTKczDtDTLi.png",
    radius: 130, angle: 52, duration: 43, direction: -1, size: 52,
  },
  {
    name: "Manus",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manus-ZQKglngRvwpJFVlhf8ccbloatzF2We.webp",
    radius: 200, angle: 96, duration: 47, direction: -1, size: 52,
  },
  {
    name: "Gemini",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gemini-BVgaAgGMDttXGl4rYBy0GYZAlaEDrs.webp",
    radius: 128, angle: 140, duration: 61, direction: 1, size: 56,
  },
  {
    name: "Grok",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok-IHJrBwr4kRi0pJov6n2IQZKGASE0j5.png",
    radius: 210, angle: 178, duration: 49, direction: 1, size: 54,
  },
  {
    name: "Perplexity",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perplexity-color-jIXjZOticu6nQ6zGbSV7neydQF4x3I.png",
    radius: 122, angle: 218, duration: 35, direction: -1, size: 46,
  },
  {
    name: "Meta AI",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meta-80pcCRXwDtrU6CJBwBJ3z49gI25bbH.png",
    radius: 205, angle: 260, duration: 38, direction: 1, size: 50,
  },
  {
    name: "Cursor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cursor-ewYBKlQT5G4f6dXvTSPt75re6PSelV.avif",
    radius: 132, angle: 302, duration: 64, direction: -1, size: 52,
  },
  {
    name: "Codex",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codex-6qS0dnRsZc0VSB8PGCThSju2DxR3ZS.jpeg",
    radius: 198, angle: 340, duration: 33, direction: 1, size: 46,
  },
]

const features = [
  "Identificacao de solucoes de IA para automatizar processos e reduzir custos operacionais",
  "Implementacao rapida nas campanhas de marketing para gerar insights de alta performance",
  "Analise continua de dados para eliminar desperdicio e aumentar as margens de lucro",
  "Agentes conversacionais que qualificam e convertem leads enquanto sua equipe dorme",
]

export function OrbitSection() {
  return (
    <section id="ia" className="min-h-screen flex flex-col justify-center py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(255,215,0,0.03)_0%,transparent_60%)]" />

      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Orbit graphic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[440px] h-[440px] md:w-[580px] md:h-[580px]">
              {/* Faint orbit shells — purely decorative, hint at the molecule structure */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[256px] h-[256px] rounded-full border border-dashed border-white/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dotted border-yellow/25" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-dashed border-white/15" />

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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[136px] md:h-[136px] rounded-full bg-black border-2 border-yellow/50 flex items-center justify-center z-20 overflow-hidden"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-branca-wrmax-ZligtXa6zDeXz3t2iz1Tup0ljrj4r9.png"
                  alt="WRMAX"
                  width={80}
                  height={80}
                  className="w-[72px] h-[72px] md:w-24 md:h-24 object-contain"
                />
              </motion.div>

              {/* Orbiting molecule — each logo spins around the center on its own
                  radius/speed/direction, and counter-rotates to stay upright */}
              {orbitLogos.map((item, i) => (
                <motion.div
                  key={`orbit-${item.name}-${i}`}
                  className="absolute top-1/2 left-1/2 w-0 h-0 z-10"
                  initial={{ rotate: item.angle }}
                  animate={{ rotate: item.angle + item.direction * 360 }}
                  transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
                >
                  {/* arm — positions the logo at its orbit radius */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${item.radius}px`, top: 0 }}
                  >
                    {/* counter-rotation keeps the logo from tumbling */}
                    <motion.div
                      initial={{ rotate: -item.angle }}
                      animate={{ rotate: -(item.angle + item.direction * 360) }}
                      transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.25, boxShadow: "0 0 30px rgba(255,215,0,0.45)" }}
                        className="bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer group border-2 border-transparent hover:border-yellow/60 transition-colors"
                        style={{ width: `${item.size}px`, height: `${item.size}px` }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={item.size}
                          height={item.size}
                          className="object-contain"
                          style={{ width: `${Math.round(item.size * 0.6)}px`, height: `${Math.round(item.size * 0.6)}px` }}
                        />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white/60 uppercase tracking-[1px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.name}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-yellow/70"
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
            {/* <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Cpu className="w-3 h-3 text-yellow" />
              <span className="text-[10px] font-bold text-yellow uppercase tracking-[1.5px]">
                IA & Tecnologia
              </span>
            </div> */}
            
            <h2 className="font-display text-[clamp(26px,3.6vw,46px)] leading-[0.95] tracking-[0.04em] mb-5">
              IMPLEMENTAMOS A TECNOLOGIA<br />
              <span className="text-yellow">CERTA PARA</span> SEU NEGOCIO
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
