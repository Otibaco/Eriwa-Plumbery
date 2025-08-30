import React, { Suspense } from "react"
// import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Eriwa Plumbery - Professional Plumbing Services & Products",
  description:
    "Expert plumbing services and high-quality products. Your trusted partner for all plumbing needs.",
  keywords:
    "plumbing, plumber, pipes, fixtures, repair, installation, Eriwa",
  authors: [{ name: "Franklin" }],
  openGraph: {
    title: "Eriwa Plumbery - Professional Plumbing Services",
    description: "Expert plumbing services and high-quality products",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} cz-shortcut-listen="true">
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
