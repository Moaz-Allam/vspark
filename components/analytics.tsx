"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export function Analytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Load Google Analytics
        if (typeof window !== 'undefined' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
            // Google Analytics 4
            window.dataLayer = window.dataLayer || []
            function gtag(...args: any[]) {
                window.dataLayer.push(args)
            }
            gtag('js', new Date())
            gtag('config', GA_MEASUREMENT_ID, {
                page_title: document.title,
                page_location: window.location.href,
            })

            // Track page views
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: pathname,
            })
        }
    }, [])

    useEffect(() => {
        // Track page changes
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: pathname,
            })
        }
    }, [pathname, searchParams])

    // Segment Analytics (if configured)
    useEffect(() => {
        if (typeof window !== 'undefined' && window.analytics) {
            window.analytics.page()
        }
    }, [pathname])

    // Mixpanel (if configured)
    useEffect(() => {
        if (typeof window !== 'undefined' && window.mixpanel) {
            window.mixpanel.track('Page View', {
                page: pathname,
                title: document.title,
                url: window.location.href,
            })
        }
    }, [pathname])

    return null
}

// Extend Window interface for analytics
declare global {
    interface Window {
        gtag?: (...args: any[]) => void
        dataLayer?: any[]
        analytics?: any
        mixpanel?: any
    }
}
