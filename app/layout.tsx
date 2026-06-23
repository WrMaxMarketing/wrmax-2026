import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'WRMAX Marketing & IA | Assessoria de Marketing em Teresina | Tráfego Pago Piauí',
  description: 'WRMAX: Growth Marketing com IA. Tráfego Pago, Automação e Agentes de Inteligência Artificial para empresas de alto padrão em Teresina e todo o Brasil.',
  keywords: 'assessoria de marketing Teresina, tráfego pago Piauí, automação inteligência artificial, agência growth marketing, WRMAX',
  icons: {
    icon: [
      { url: '/icons/favicon.ico', type: 'image/x-icon' },
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/icons/favicon-256x256.png', sizes: '256x256' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${bebasNeue.variable} ${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
