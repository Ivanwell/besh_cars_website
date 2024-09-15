import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

export const metadata = {
  visualViewport: 'width=device-width, initial-scale=1',
  title: 'Beshcars - Викуп авто | Продаж авто | Підбір авто',
  description:
    'Допоможемо вам професійно продати, купити, обміняти ваше авто легко та зручно. Власний авто майданчик в перспективній локації, детейлінг студія з широким спектром послуг. Повний супровід починаючи з етапу перед продажної підготовки до реєстрації  авто в сервісному центрі.',
}

export const viewport = {
  themeColor: '#0046f4',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiWi938y3SQhv0k_Bd3CTi3C0VYWCZUqQ&libraries=places&callback=initMap"
        async
      ></Script>
      <body>{children}</body>
    </html>
  )
}
