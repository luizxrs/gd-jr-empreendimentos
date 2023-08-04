import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['100', '200','300', '400','500', '600','700', '800','900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GD & JR Empreendimentos',
  description: 'Teste Front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}