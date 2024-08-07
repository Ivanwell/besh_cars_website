import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  visualViewport: 'width=device-width, initial-scale=1',
  title: 'Beshcars - Викуп авто | Продаж авто | Підбір авто',
  description:
    'Допоможемо вам професійно продати, купити, обміняти ваше авто легко та зручно. Власний авто майданчик в перспективній локації, детейлінг студія з широким спектром послуг. Повний супровід починаючи з етапу перед продажної підготовки до реєстрації  авто в сервісному центрі.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
