"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function SEOOptimizer() {
  const pathname = usePathname()

  useEffect(() => {
    // Update meta tags dynamically based on route
    const updateMetaTags = () => {
      const title = document.title
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      
      // Update OpenGraph tags
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', title)
      
      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) ogDescription.setAttribute('content', description)
      
      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) ogUrl.setAttribute('content', window.location.href)
      
      // Update Twitter tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) twitterTitle.setAttribute('content', title)
      
      const twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) twitterDescription.setAttribute('content', description)
      
      const twitterUrl = document.querySelector('meta[name="twitter:url"]')
      if (twitterUrl) twitterUrl.setAttribute('content', window.location.href)
    }

    // Update canonical URL
    const updateCanonical = () => {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', window.location.href)
    }

    // Add structured data for current page
    const addStructuredData = () => {
      const existingScript = document.querySelector('script[data-seo-structured]')
      if (existingScript) {
        existingScript.remove()
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": document.title,
        "description": document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        "url": window.location.href,
        "mainEntity": {
          "@type": "Organization",
          "name": "vspark",
          "url": "https://vspark.com",
          "logo": "https://vspark.com/logo-black.png"
        }
      }

      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-seo-structured', 'true')
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    // Initialize SEO optimizations
    updateMetaTags()
    updateCanonical()
    addStructuredData()

    // Track page view for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      })
    }

  }, [pathname])

  return null
}

// Extend Window interface
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
