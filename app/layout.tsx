import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"

// Define fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lusso Toyz | Premium Pre-owned Cars in Noida",
  description:
    "Discover premium pre-owned luxury vehicles at Lusso Toyz, Noida's premier destination for high-quality used cars.",
    generator: 'rajadevworks.tech',
    icons: {
      icon: "/Lusso.svg", // Default Lusso
      shortcut: "/Lusso.svg", // Shortcut icon
      apple: "/Lusso.svg", // For Apple devices (optional)
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'