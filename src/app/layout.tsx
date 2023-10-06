import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../assets/css/iransans.css'
import "../assets/styles/modules/tailwind.css"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
   
      <html lang="en">
      <body>{children}</body>
    </html>
    </>
  
  )
}
