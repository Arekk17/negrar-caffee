import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'negrar-caffee',
  description: 'Best caffee',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
