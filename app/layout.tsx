import type { Metadata, Viewport } from 'next' 
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/ScrollToTop' // <-- Import du nouveau composant
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f0f1e', 
}

export const metadata: Metadata = {
  title: 'Misaharitsoa',
  description: 'Découvrez mon portfolio de développeur full stack avec React, Vue.js, Node.js et Laravel. Projets, compétences et formation.',
  generator: 'v0.app',
  keywords: ['développeur', 'portfolio', 'fullstack', 'React', 'Node.js', 'Laravel'],
  authors: [{ name: 'Misaharitsoa' }], // J'ai personnalisé ton nom ici ;)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        
        {/* Le bouton apparaît dès que l'utilisateur descend de 300px */}
        <ScrollToTop /> 
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}