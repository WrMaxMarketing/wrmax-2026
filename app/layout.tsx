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
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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
