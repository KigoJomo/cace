import type { Metadata } from 'next'
import './globals.css'
import SideBar from './components/SideBar'

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
      <body className="flex p-6 gap-6">
        <SideBar />
        <main className="w-[92.5%] border rounded-3xl">{children}</main>
      </body>
    </html>
  )
}
