"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Phone, Mail, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { label: "Método WRMAX", href: "#metodo" },
  { label: "IA & Tecnologia", href: "#ia" },
  { label: "Consultores", href: "#lideranca" },
  { label: "Perguntas Frequentes", href: "#faq" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-white/10 py-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-branca-wrmax-SnGGeKahCe1PesfhQ1VzQRQYFyvKgp.png"
                alt="WRMAX Marketing Digital"
                width={120}
                height={35}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-[13px] text-white/50 leading-relaxed mb-5">
              Growth Marketing & IA.<br />
              Estruturamos sistemas de vendas que escalam seu faturamento de forma previsível.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ borderColor: "rgba(255,215,0,0.35)", backgroundColor: "rgba(255,215,0,0.1)" }}
                  className="w-[38px] h-[38px] bg-surface-2 border border-white/10 rounded-lg flex items-center justify-center transition-all"
                >
                  <social.icon className="w-4 h-4 text-white/50 hover:text-yellow transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[2px] mb-5">
              Navegação
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[2px] mb-5">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5586999999999"
                className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-yellow" />
                (86) 99999-9999
              </a>
              <a
                href="mailto:contato@wrmax.com.br"
                className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-yellow" />
                contato@wrmax.com.br
              </a>
              <div className="text-sm text-white/50 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-yellow mt-0.5" />
                <span>
                  Teresina, Piauí<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[2px] mb-5">
              Pronto para Escalar?
            </p>
            <p className="text-[13px] text-white/50 leading-relaxed mb-4">
              Solicite seu diagnóstico gratuito e descubra como podemos acelerar seu crescimento.
            </p>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider glow-green transition-all"
            >
              Começar Agora
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} WRMAX Marketing & IA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[11px] text-white/30 hover:text-white/50 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-[11px] text-white/30 hover:text-white/50 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
