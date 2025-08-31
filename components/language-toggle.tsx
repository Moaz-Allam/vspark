"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full"
      title={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      <Languages className="size-[18px]" />
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
