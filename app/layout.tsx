import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Promotions from '@/components/Promotions'
import Navbar from '@/components/Navbar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ram Collection',
  description: 'Ladies and Kids Clothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Promotions />
          <Header />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
