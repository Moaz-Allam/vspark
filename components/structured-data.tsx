"use client"

import { useLanguage } from "@/contexts/language-context"

export function StructuredData() {
    const { language } = useLanguage()

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "vspark",
        "alternateName": language === "en" ? "vspark" : "vspark",
        "url": "https://vspark.com",
        "logo": "https://vspark.com/logo.png",
        "description": language === "en"
            ? "vspark is a revolutionary platform that sparks innovation by connecting visionary founders, talented co-founders, and strategic investors."
            : "vspark منصة ثورية تشعل الابتكار من خلال ربط المؤسسين الرؤيويين والشركاء الموهوبين والمستثمرين الاستراتيجيين.",
        "foundingDate": "2024",
        "sameAs": [
            "https://twitter.com/vspark",
            "https://linkedin.com/company/vspark",
            "https://facebook.com/vspark"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "hello@vspark.com"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE"
        }
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "vspark",
        "url": "https://vspark.com",
        "description": language === "en"
            ? "vspark is a revolutionary platform that sparks innovation by connecting visionary founders, talented co-founders, and strategic investors."
            : "vspark منصة ثورية تشعل الابتكار من خلال ربط المؤسسين الرؤيويين والشركاء الموهوبين والمستثمرين الاستراتيجيين.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://vspark.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }

    const platformSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "vspark Platform",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": language === "en"
            ? "AI-powered platform for connecting visionary founders with talented co-founders and strategic investors."
            : "منصة مدعومة بالذكاء الاصطناعي لربط المؤسسين الرؤيويين مع الشركاء الموهوبين والمستثمرين الاستراتيجيين."
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(platformSchema)
                }}
            />
        </>
    )
}
