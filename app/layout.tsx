import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Betano Ontario | Premium Sports Betting in Ontario sportsinontario.com",
  description:
    "Experience premium sports betting in Ontario with Betano. Bet on Premier League, NHL, NBA, NFL, and more. Welcome offer: Bet £10, Get £30 in Free Bets. Licensed by AGCO.",
  keywords: [
    "Ontario sports betting",
    "Betano Ontario",
    "legal sports betting Ontario",
    "NHL betting",
    "NBA betting",
    "Premier League betting",
    "NFL betting",
    "sports betting bonus Ontario",
    "iGaming Ontario",
  ],
  openGraph: {
    title: "Betano Ontario | Premium Sports Betting",
    description:
      "Licensed sports betting in Ontario. Bet on your favorite sports with competitive odds and fast payouts.",
    type: "website",
    url: "https://betano.ca",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
