"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { VideoHero } from "@/components/video-hero"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t, language } = useLanguage()

  const isRTL = language === "ar"

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: t("smartMatching"),
      description: t("smartMatchingDesc"),
      icon: <Zap className={`size-5 ${isRTL ? "flip-rtl" : ""}`} />,
    },
    {
      title: t("progressForm"),
      description: t("progressFormDesc"),
      icon: <BarChart className={`size-5 ${isRTL ? "flip-rtl" : ""}`} />,
    },
    {
      title: t("investorDashboard"),
      description: t("investorDashboardDesc"),
      icon: <TrendingUp className={`size-5 ${isRTL ? "flip-rtl" : ""}`} />,
    },
    {
      title: t("bookmarkWatch"),
      description: t("bookmarkWatchDesc"),
      icon: <Shield className={`size-5 ${isRTL ? "flip-rtl" : ""}`} />,
    },
    {
      title: t("eventsTitle"),
      description: t("eventsDesc"),
      icon: <Users className={`size-5 ${isRTL ? "flip-rtl" : ""}`} />,
    },
    {
      title: t("communitySupport"),
      description: t("communitySupportDesc"),
      icon: <Star className={`size-5 ${isRTL ? "flip-rtl" : ""}`} />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg flex items-center justify-center">
              {mounted ? (
                <Image
                  src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                  alt="vspark Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              ) : (
                <div className="w-8 h-8 bg-muted rounded-lg animate-pulse" />
              )}
            </div>
            <span>{t("brandName")}</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("features")}
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("testimonials")}
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("pricing")}
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("faq")}
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <LanguageToggle />
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("login")}
            </Link>
            <Button className="rounded-full">
              {t("getStarted")}
              <ChevronRight className={`ml-1 size-4 ${isRTL ? "flip-rtl" : ""}`} />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <LanguageToggle />
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t("features")}
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t("testimonials")}
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t("pricing")}
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t("faq")}
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {t("login")}
                </Link>
                <Button className="rounded-full">
                  {t("getStarted")}
                  <ChevronRight className={`ml-1 size-4 ${isRTL ? "flip-rtl" : ""}`} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-0 pb-20 md:pb-32 lg:pb-40 overflow-hidden">
          <div className="pt-20 container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-center max-w-3xl mx-auto mb-12 ${isRTL ? "text-right" : "text-left"} md:text-center`}
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                {t("launchingSoon")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-balance">
                {t("heroHeadline")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                {t("heroSubheadline")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  {t("startYourIdea")}
                  <ArrowRight className={`ml-2 size-4 ${isRTL ? "flip-rtl" : ""}`} />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-2">
                  {t("exploreStartups")}
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{t("noCreditCard")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{t("freeToStart")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{t("joinCommunity")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <VideoHero
                  videoSrc="/dashboard.mp4"
                  thumbnailSrc="/thumbnail.png"
                  youtubeUrl="https://www.youtube.com/watch?v=wjjrGN7hwfU"
                  alt="vspark platform dashboard video"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{t("howItWorksTitle")}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg text-balance">
                Get started in minutes and connect with the startup ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: t("shareIdea"),
                  description: t("shareIdeaDesc"),
                  icon: <Lightbulb className={`size-6 ${isRTL ? "flip-rtl" : ""}`} />,
                },
                {
                  step: "02",
                  title: t("findPartners"),
                  description: t("findPartnersDesc"),
                  icon: <Users className={`size-6 ${isRTL ? "flip-rtl" : ""}`} />,
                },
                {
                  step: "03",
                  title: t("attractInvestment"),
                  description: t("attractInvestmentDesc"),
                  icon: <Target className={`size-6 ${isRTL ? "flip-rtl" : ""}`} />,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-balance">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{t("featuresTitle")}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg text-balance">
                Our comprehensive platform provides all the tools you need to connect ideas with opportunities.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className={`p-6 flex flex-col h-full ${isRTL ? "text-right" : "text-left"}`}>
                      <div
                        className={`size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 ${isRTL ? "ml-auto" : ""}`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* User Types Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                For Everyone
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{t("userTypesTitle")}</h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: t("foundersTitle"),
                  description: t("foundersDesc"),
                  icon: <Lightbulb className={`size-8 ${isRTL ? "flip-rtl" : ""}`} />,
                },
                {
                  title: t("investorsTitle"),
                  description: t("investorsDesc"),
                  icon: <TrendingUp className={`size-8 ${isRTL ? "flip-rtl" : ""}`} />,
                },
                {
                  title: t("coFoundersTitle"),
                  description: t("coFoundersDesc"),
                  icon: <Users className={`size-8 ${isRTL ? "flip-rtl" : ""}`} />,
                },
              ].map((userType, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card
                    className={`h-full text-center p-8 border-border/40 bg-gradient-to-b from-background to-muted/10 ${isRTL ? "text-right" : "text-left"} md:text-center`}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="size-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                        {userType.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{userType.title}</h3>
                    <p className="text-muted-foreground text-balance">{userType.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{t("testimonialsTitle")}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg text-balance">
                See what our community members have to say about their experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: t("founderTestimonial"),
                  author: "Sarah Al-Rashid",
                  role: "Founder, TechStart",
                  rating: 5,
                },
                {
                  quote: t("investorTestimonial"),
                  author: "Michael Chen",
                  role: "Angel Investor",
                  rating: 5,
                },
                {
                  quote: t("studentTestimonial"),
                  author: "Ahmed Hassan",
                  role: "Computer Science Student",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className={`p-6 flex flex-col h-full ${isRTL ? "text-right" : "text-left"}`}>
                      <div className={`flex mb-4 ${isRTL ? "justify-end" : "justify-start"}`}>
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow text-balance">{testimonial.quote}</p>
                      <div
                        className={`flex items-center gap-4 mt-auto pt-4 border-t border-border/40 ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{t("pricingTitle")}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg text-balance">
                Choose the plan that fits your startup journey.
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: t("freePlan"),
                    price: t("free"),
                    description: t("freePlanDesc"),
                    features: [t("submitIdeasLimit"), t("joinGroups"), t("connectLimit")],
                    cta: t("getStartedFree"),
                  },
                  {
                    name: t("proPlan"),
                    price: "$15",
                    description: t("proPlanDesc"),
                    features: [t("unlimitedIdeas"), t("priorityVisibility"), t("advancedFilters"), t("accessEvents")],
                    cta: t("upgradeToPro"),
                    popular: true,
                  },
                  {
                    name: t("investorPlan"),
                    price: "$50",
                    description: t("investorPlanDesc"),
                    features: [
                      t("investorDashboardAccess"),
                      t("startupAnalytics"),
                      t("directConnect"),
                      t("customWatchlists"),
                    ],
                    cta: t("joinAsInvestor"),
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div
                          className={`absolute top-0 ${isRTL ? "left-0 rounded-br-lg" : "right-0 rounded-bl-lg"} bg-primary text-primary-foreground px-3 py-1 text-xs font-medium`}
                        >
                          {t("mostPopular")}
                        </div>
                      )}
                      <CardContent className={`p-6 flex flex-col h-full ${isRTL ? "text-right" : "text-left"}`}>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className={`flex items-baseline mt-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span className="text-4xl font-bold">{plan.price}</span>
                          {plan.price !== t("free") && (
                            <span className={`text-muted-foreground ${isRTL ? "mr-1" : "ml-1"}`}>{t("perMonth")}</span>
                          )}
                        </div>
                        <p className="text-muted-foreground mt-2 text-balance">{plan.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                              <Check className={`size-4 text-primary ${isRTL ? "ml-2" : "mr-2"}`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{t("faqTitle")}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg text-balance">
                Find answers to common questions about our platform.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: t("faqQuestion1"),
                    answer: t("faqAnswer1"),
                  },
                  {
                    question: t("faqQuestion2"),
                    answer: t("faqAnswer2"),
                  },
                  {
                    question: t("faqQuestion3"),
                    answer: t("faqAnswer3"),
                  },
                  {
                    question: t("faqQuestion4"),
                    answer: t("faqAnswer4"),
                  },
                  {
                    question: t("faqQuestion5"),
                    answer: t("faqAnswer5"),
                  },
                  {
                    question: t("faqQuestion6"),
                    answer: t("faqAnswer6"),
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger
                        className={`font-medium hover:no-underline ${isRTL ? "text-right" : "text-left"}`}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className={`text-muted-foreground ${isRTL ? "text-right" : "text-left"}`}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {t("ctaTitle")}
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl text-balance">
                Join thousands of entrepreneurs, co-founders, and investors who are building the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  {t("submitIdea")}
                  <ArrowRight className={`ml-2 size-4 ${isRTL ? "flip-rtl" : ""}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  {t("joinAsInvestor")}
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">Free to join. Start connecting today.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className={`grid gap-8 sm:grid-cols-2 md:grid-cols-4 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="space-y-4">
              <div className={`flex items-center gap-2 font-bold ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="size-8 rounded-lg flex items-center justify-center">
                  {mounted ? (
                    <Image
                      src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                      alt="vspark Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-muted rounded-lg animate-pulse" />
                  )}
                </div>
                <span>{t("brandName")}</span>
              </div>
              <p className="text-sm text-muted-foreground text-balance">
                vspark ignites innovation by connecting visionary founders with talented co-founders and strategic investors in a supportive bilingual community.
              </p>
              <div className={`flex gap-4 ${isRTL ? "justify-end" : "justify-start"}`}>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("features")}
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("pricing")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Startup Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Investor Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("careers")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("termsOfService")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8 ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {t("brandName")}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {t("privacyPolicy")}
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {t("termsOfService")}
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
