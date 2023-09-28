import './globals.css'
import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'

const inter = Overpass({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor | Interactive rating component',
  description: 'Frontend Mentor Challenge by Risal Walangadi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
