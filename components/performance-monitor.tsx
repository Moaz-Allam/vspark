"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]

        // Send to analytics if needed
        if (window.gtag) {
          window.gtag('event', 'LCP', {
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals'
          })
        }
      })

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (e) {
        console.warn('LCP observer failed:', e)
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (window.gtag) {
            window.gtag('event', 'FID', {
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'Web Vitals'
            })
          }
        })
      })

      try {
        fidObserver.observe({ entryTypes: ['first-input'] })
      } catch (e) {
        console.warn('FID observer failed:', e)
      }

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0
      let clsEntries: any[] = []

      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value
            clsEntries.push(entry)
          }
        }

        if (window.gtag) {
          window.gtag('event', 'CLS', {
            value: Math.round(clsValue * 1000) / 1000,
            event_category: 'Web Vitals'
          })
        }
      })

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        console.warn('CLS observer failed:', e)
      }

      // Monitor Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
                    if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            const ttfb = navEntry.responseStart - navEntry.requestStart
            
            if (window.gtag) {
              window.gtag('event', 'TTFB', {
                value: Math.round(ttfb),
                event_category: 'Web Vitals'
              })
            }
          }
        })
      })

      try {
        navigationObserver.observe({ entryTypes: ['navigation'] })
      } catch (e) {
        console.warn('Navigation observer failed:', e)
      }

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        navigationObserver.disconnect()
      }
    }
  }, [])

  return null
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
