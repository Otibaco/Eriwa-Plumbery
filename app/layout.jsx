import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eriwa Plumbery - Professional Plumbing Services in Nigeria",
  description:
    "Nigeria's leading plumbing service provider. 24/7 emergency repairs, quality products, and professional installation services across Lagos, Abuja, and Port Harcourt.",
  keywords: "plumbing Nigeria, emergency plumber Lagos, bathroom fixtures Nigeria, pipe installation Abuja",
  authors: [{ name: "Eriwa Plumbery" }],
  openGraph: {
    title: "Eriwa Plumbery - Professional Plumbing Services",
    description: "Nigeria's trusted plumbing experts with 24/7 emergency service",
    url: "https://eriwaplumbery.ng",
    siteName: "Eriwa Plumbery",
    locale: "en_NG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false, // Optional: Disable zooming if not needed
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
