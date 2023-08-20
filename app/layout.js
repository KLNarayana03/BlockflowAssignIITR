import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import ThemeSwitcher from './ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '©️ LakshmiNarayanaKIITR',
  description: 'Made by LakshmiNarayanaKIITR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  )
}
