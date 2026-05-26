import type { Metadata, Viewport } from 'next' // <-- Ajout de Viewport ici
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// 1. On exporte la configuration du viewport séparément ici
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f0f1e', // C'est ici que tu peux mettre un violet sombre (ex: #1e1b4b) si tu veux l'accorder à ton thème !
}

// 2. L'objet metadata est maintenant totalement propre et valide
export const metadata: Metadata = {
  title: 'Misaharitsoa',
  description: 'Découvrez mon portfolio de développeur full stack avec React, Vue.js, Node.js et Laravel. Projets, compétences et formation.',
  generator: 'v0.app',
  keywords: ['développeur', 'portfolio', 'fullstack', 'React', 'Node.js', 'Laravel'],
  authors: [{ name: 'Your Name' }], // Pense à remplacer 'Your Name' par ton nom ;)
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}