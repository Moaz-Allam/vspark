import type React from "react"
import "@/styles/globals.css"
import { Inter, Cairo } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { StructuredData } from "@/components/structured-data"
import { Analytics } from "@/components/analytics"
import { SEOOptimizer } from "@/components/seo-optimizer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "vspark - Ignite Your Startup Journey | أشعل رحلتك الريادية",
    template: "%s | vspark"
  },
  description: "vspark is a revolutionary platform that sparks innovation by connecting visionary founders, talented co-founders, and strategic investors. Where great ideas meet great opportunities. منصة ثورية تشعل الابتكار من خلال ربط المؤسسين الرؤيويين والشركاء الموهوبين والمستثمرين الاستراتيجيين.",
  keywords: ["vspark", "startup", "founder", "investor", "co-founder", "entrepreneur", "funding", "innovation", "startup platform", "business ideas", "startup ecosystem", "ريادة أعمال", "مشاريع ناشئة", "استثمار", "ابتكار"],
  authors: [{ name: "vspark Team" }],
  creator: "vspark",
  publisher: "vspark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vspark.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vspark.com',
    title: 'vspark - Ignite Your Startup Journey | أشعل رحلتك الريادية',
    description: 'vspark is a revolutionary platform that sparks innovation by connecting visionary founders, talented co-founders, and strategic investors. منصة ثورية تشعل الابتكار من خلال ربط المؤسسين الرؤيويين والشركاء الموهوبين والمستثمرين الاستراتيجيين.',
    siteName: 'vspark',
    images: [
      {
        url: '/logo-black.png',
        width: 512,
        height: 512,
        alt: 'vspark Logo',
      },
    ],
    localeAlternates: {
      'ar_AR': 'https://vspark.com/ar',
      'en_US': 'https://vspark.com/en',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vspark - Ignite Your Startup Journey | أشعل رحلتك الريادية',
    description: 'vspark is a revolutionary platform that sparks innovation by connecting visionary founders, talented co-founders, and strategic investors. منصة ثورية تشعل الابتكار من خلال ربط المؤسسين الرؤيويين والشركاء الموهوبين والمستثمرين الاستراتيجيين.',
    images: ['/logo-black.png'],
    creator: '@vspark',
    site: '@vspark',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'startup platform',
  other: {
    'msapplication-TileColor': '#6366f1',
    'theme-color': '#6366f1',
    'language': 'en',
    'available-languages': 'en,ar',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preload" href="/thumbnail.png" as="image" type="image/png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-black.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-black.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-black.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        {/* Load fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <PerformanceMonitor />
            <StructuredData />
            <Analytics />
            <SEOOptimizer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
