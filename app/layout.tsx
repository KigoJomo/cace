import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cace',
  description: 'Smart home control panel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <main>{children}</main>
      </body>
    </html>
  )
}
