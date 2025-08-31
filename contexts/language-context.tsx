"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    brandName: "vspark",
    features: "Features",
    testimonials: "Testimonials",
    pricing: "Pricing",
    faq: "FAQ",
    login: "Log in",
    getStarted: "Get Started",

    // Hero Section
    heroHeadline: "Where Startup Ideas Find Partners and Investors",
    heroSubheadline:
      "A community-driven platform that connects idea-stage founders, skilled co-founders, and investors ready to back the next big thing.",
    startYourIdea: "Start Your Idea",
    exploreStartups: "Explore Startups",

    // How It Works
    howItWorksTitle: "How It Works",
    shareIdea: "Share your idea",
    shareIdeaDesc: "Submit your startup concept with a simple guided form.",
    findPartners: "Find partners",
    findPartnersDesc: "Get matched with co-founders, mentors, and technical experts.",
    attractInvestment: "Attract investment",
    attractInvestmentDesc: "Showcase your idea to investors and raise early funding.",

    // Features
    featuresTitle: "Everything You Need in One Place",
    smartMatching: "Smart Matching",
    smartMatchingDesc: "AI-based matching between ideas, co-founders, and investors.",
    progressForm: "Progress-Based Idea Form",
    progressFormDesc: "Step-by-step wizard to structure your idea clearly.",
    investorDashboard: "Investor Dashboard",
    investorDashboardDesc: "Analytics on traction, popularity, and startup readiness.",
    bookmarkWatch: "Bookmark & Watchlist",
    bookmarkWatchDesc: "Save startups, ideas, or people for later.",
    eventsTitle: "Events & Meetups",
    eventsDesc: "Join hackathons, webinars, and local startup events.",
    communitySupport: "Community Support",
    communitySupportDesc: "Connect with mentors, advisors, and fellow entrepreneurs in our supportive ecosystem.",

    // User Types
    userTypesTitle: "For Every Member of the Startup Journey",
    foundersTitle: "Founders",
    foundersDesc: "Share your raw idea, validate it with the community, and attract team members.",
    investorsTitle: "Investors",
    investorsDesc: "Discover early-stage startups before anyone else, with detailed analytics.",
    coFoundersTitle: "Co-Founders & Experts",
    coFoundersDesc: "Find exciting projects, join as a partner, and grow with the idea.",

    // Why Choose Us
    whyChooseTitle: "Why Choose Us",
    transparentProcess: "Transparent matching process",
    focusIdea: "Focus on idea-stage startups (not just established ones)",
    friendlyTools: "Investor & founder-friendly tools",
    bilingualCommunity: "Bilingual community (Arabic & English)",
    supportiveEcosystem: "Supportive ecosystem with mentors and peers",

    // Pricing
    pricingTitle: "Choose the Right Plan for You",
    freePlan: "Free Plan",
    freePlanDesc: "For students, dreamers, and first-time founders.",
    proPlan: "Pro Plan",
    proPlanDesc: "For active founders and professionals.",
    investorPlan: "Investor Plan",
    investorPlanDesc: "For verified investors.",
    getStartedFree: "Get Started Free",
    upgradeToPro: "Upgrade to Pro",
    joinAsInvestor: "Join as Investor",

    // Pricing Features
    submitIdeasLimit: "Submit ideas (up to 2)",
    joinGroups: "Join groups & forums",
    connectLimit: "Connect with up to 5 people per month",
    unlimitedIdeas: "Unlimited idea submissions",
    priorityVisibility: "Priority visibility in explore feed",
    advancedFilters: "Advanced filters in search",
    accessEvents: "Access to events & webinars",
    investorDashboardAccess: "Access to full investor dashboard",
    startupAnalytics: "Startup analytics & performance insights",
    directConnect: "Direct connect with founders",
    customWatchlists: "Custom watchlists & alerts",

    // Testimonials
    testimonialsTitle: "What Our Community Says",
    founderTestimonial: "I shared just an idea, and within weeks I had a co-founder and investor interest.",
    investorTestimonial: "Finally, a place to discover raw ideas before they hit the market.",
    studentTestimonial: "It gave me a chance to learn and join a real startup early on.",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqQuestion1: "How does the matching system work?",
    faqAnswer1:
      "Our AI-powered matching system analyzes your idea, skills, and preferences to connect you with compatible co-founders, mentors, and investors. The algorithm considers factors like industry experience, complementary skills, and shared values.",
    faqQuestion2: "Is my idea protected when I share it?",
    faqAnswer2:
      "Yes, we take intellectual property protection seriously. All users agree to confidentiality terms, and you can choose different levels of disclosure. You can share high-level concepts publicly while keeping detailed implementation private until you're ready.",
    faqQuestion3: "What types of investors are on the platform?",
    faqAnswer3:
      "Our investor community includes angel investors, venture capital firms, and strategic investors who specialize in early-stage startups. All investors are verified and have a track record of supporting idea-stage companies.",
    faqQuestion4: "Can I use the platform if I'm not technical?",
    faqAnswer4:
      "Our platform is designed for founders from all backgrounds. We help non-technical founders connect with technical co-founders and provide resources to help you understand the development process.",
    faqQuestion5: "How do I know if someone is a good match?",
    faqAnswer5:
      "Our platform provides detailed profiles, compatibility scores, and mutual connection insights. You can also participate in community events and forums to get to know potential partners before committing to work together.",
    faqQuestion6: "What support do you provide for Arabic-speaking entrepreneurs?",
    faqAnswer6:
      "We offer full Arabic language support and have a dedicated community for Arabic-speaking entrepreneurs. Our platform includes culturally relevant resources and connects you with mentors who understand the regional startup ecosystem.",

    // CTA
    ctaTitle: "Start Building Today",
    submitIdea: "Submit Your Idea",

    // Footer
    aboutUs: "About Us",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    faqFooter: "FAQ",
    careers: "Careers",

    // Additional content
    launchingSoon: "Launching Soon",
    noCreditCard: "No credit card",
    freeToStart: "Free to start",
    joinCommunity: "Join community",
    mostPopular: "Most Popular",
    perMonth: "/month",
    free: "Free",
  },
  ar: {
    // Header
    brandName: "vspark",
    features: "المميزات",
    testimonials: "آراء العملاء",
    pricing: "الأسعار",
    faq: "الأسئلة الشائعة",
    login: "تسجيل الدخول",
    getStarted: "ابدأ الآن",

    // Hero Section
    heroHeadline: "حيث تجد الأفكار الريادية الشركاء والمستثمرين",
    heroSubheadline:
      "منصة مجتمعية تربط المبادرين في مرحلة الفكرة مع شركاء مؤسسين ذوي مهارات ومستثمرين مستعدين لتمويل المشروع القادم الكبير.",
    startYourIdea: "ابدأ فكرتك",
    exploreStartups: "استكشف المشاريع",

    // How It Works
    howItWorksTitle: "كيف تعمل المنصة",
    shareIdea: "شارك فكرتك",
    shareIdeaDesc: "قدم مشروعك الريادي عبر نموذج إرشادي بسيط.",
    findPartners: "ابحث عن الشركاء",
    findPartnersDesc: "تطابق مع مؤسسين مشاركين، وموجهين، وخبراء تقنيين.",
    attractInvestment: "اجذب الاستثمار",
    attractInvestmentDesc: "اعرض فكرتك على المستثمرين واحصل على التمويل الأولي.",

    // Features
    featuresTitle: "كل ما تحتاجه في مكان واحد",
    smartMatching: "المطابقة الذكية",
    smartMatchingDesc: "مطابقة بالذكاء الاصطناعي بين الأفكار والمؤسسين والمستثمرين.",
    progressForm: "نموذج الأفكار التدريجي",
    progressFormDesc: "معالج خطوة بخطوة لصياغة فكرتك بوضوح.",
    investorDashboard: "لوحة تحكم المستثمر",
    investorDashboardDesc: "تحليلات حول التفاعل، والشعبية، وجاهزية المشروع.",
    bookmarkWatch: "الحفظ والمتابعة",
    bookmarkWatchDesc: "احفظ المشاريع أو الأشخاص للرجوع إليها لاحقاً.",
    eventsTitle: "الفعاليات واللقاءات",
    eventsDesc: "شارك في الهاكاثونات والندوات والفعاليات الريادية.",
    communitySupport: "دعم المجتمع",
    communitySupportDesc: "تواصل مع الموجهين والمستشارين ورجال الأعمال في نظامنا البيئي الداعم.",

    // User Types
    userTypesTitle: "لكل عضو في رحلة ريادة الأعمال",
    foundersTitle: "المبادرون",
    foundersDesc: "شارك فكرتك الأولية، واحصل على التحقق من المجتمع، واجذب أعضاء الفريق.",
    investorsTitle: "المستثمرون",
    investorsDesc: "اكتشف المشاريع الناشئة في مراحلها المبكرة مع تحليلات تفصيلية.",
    coFoundersTitle: "الشركاء والخبراء",
    coFoundersDesc: "ابحث عن مشاريع ملهمة، وانضم كمؤسس مشارك، وانمُ مع الفكرة.",

    // Why Choose Us
    whyChooseTitle: "لماذا تختارنا",
    transparentProcess: "عملية مطابقة شفافة",
    focusIdea: "تركيز على المشاريع الناشئة في مرحلة الفكرة (وليس فقط المشاريع القائمة)",
    friendlyTools: "أدوات مخصصة للمستثمرين والمبادرين",
    bilingualCommunity: "مجتمع ثنائي اللغة (العربية والإنجليزية)",
    supportiveEcosystem: "نظام بيئي داعم مع الموجهين والزملاء",

    // Pricing
    pricingTitle: "اختر الخطة المناسبة لك",
    freePlan: "الخطة المجانية",
    freePlanDesc: "للطلاب والحالمين والمبادرين لأول مرة.",
    proPlan: "الخطة الاحترافية",
    proPlanDesc: "للمبادرين النشطين والمهنيين.",
    investorPlan: "خطة المستثمر",
    investorPlanDesc: "للمستثمرين المعتمدين.",
    getStartedFree: "ابدأ مجاناً",
    upgradeToPro: "ترقَّ إلى احترافي",
    joinAsInvestor: "انضم كمستثمر",

    // Pricing Features
    submitIdeasLimit: "تقديم الأفكار (حتى 2)",
    joinGroups: "الانضمام للمجموعات والمنتديات",
    connectLimit: "التواصل مع حتى 5 أشخاص شهرياً",
    unlimitedIdeas: "تقديم أفكار غير محدود",
    priorityVisibility: "ظهور أولوي في صفحة الاستكشاف",
    advancedFilters: "فلاتر متقدمة في البحث",
    accessEvents: "الوصول للفعاليات والندوات",
    investorDashboardAccess: "الوصول الكامل للوحة تحكم المستثمر",
    startupAnalytics: "تحليلات المشاريع الناشئة والأداء",
    directConnect: "التواصل المباشر مع المؤسسين",
    customWatchlists: "قوائم مراقبة وتنبيهات مخصصة",

    // Testimonials
    testimonialsTitle: "ماذا يقول مجتمعنا",
    founderTestimonial: "شاركت مجرد فكرة، وفي غضون أسابيع وجدت شريكاً ومهتماً بالاستثمار.",
    investorTestimonial: "أخيراً، مكان لاكتشاف الأفكار الأولية قبل أن تصل إلى السوق.",
    studentTestimonial: "أعطتني الفرصة للتعلم والانضمام إلى مشروع ناشئ مبكراً.",

    // FAQ
    faqTitle: "الأسئلة الشائعة",
    faqQuestion1: "كيف يعمل نظام المطابقة؟",
    faqAnswer1:
      "يحلل نظام المطابقة المدعوم بالذكاء الاصطناعي فكرتك ومهاراتك وتفضيلاتك لربطك بشركاء مؤسسين وموجهين ومستثمرين متوافقين. تأخذ الخوارزمية في الاعتبار عوامل مثل الخبرة في الصناعة والمهارات التكميلية والقيم المشتركة.",
    faqQuestion2: "هل فكرتي محمية عندما أشاركها؟",
    faqAnswer2:
      "نعم، نأخذ حماية الملكية الفكرية على محمل الجد. يوافق جميع المستخدمين على شروط السرية، ويمكنك اختيار مستويات مختلفة من الكشف. يمكنك مشاركة المفاهيم العامة علناً مع الاحتفاظ بالتفاصيل التنفيذية خاصة حتى تصبح جاهزاً.",
    faqQuestion3: "ما أنواع المستثمرين الموجودين على المنصة؟",
    faqAnswer3:
      "يشمل مجتمع المستثمرين لدينا مستثمرين ملائكة وشركات رأس مال مخاطر ومستثمرين استراتيجيين متخصصين في المشاريع الناشئة في مراحلها المبكرة. جميع المستثمرين معتمدون ولديهم سجل حافل في دعم الشركات في مرحلة الفكرة.",
    faqQuestion4: "هل يمكنني استخدام المنصة إذا لم أكن تقنياً؟",
    faqAnswer4:
      "منصتنا مصممة للمؤسسين من جميع الخلفيات. نساعد المؤسسين غير التقنيين على التواصل مع شركاء مؤسسين تقنيين ونوفر موارد لمساعدتك على فهم عملية التطوير.",
    faqQuestion5: "كيف أعرف إذا كان شخص ما مطابقة جيدة؟",
    faqAnswer5:
      "توفر منصتنا ملفات تعريف مفصلة ونقاط توافق ورؤى اتصال متبادلة. يمكنك أيضاً المشاركة في فعاليات المجتمع والمنتديات للتعرف على الشركاء المحتملين قبل الالتزام بالعمل معاً.",
    faqQuestion6: "ما الدعم الذي تقدمونه لرجال الأعمال الناطقين بالعربية؟",
    faqAnswer6:
      "نقدم دعماً كاملاً باللغة العربية ولدينا مجتمع مخصص لرجال الأعمال الناطقين بالعربية. تتضمن منصتنا موارد ذات صلة ثقافية وتربطك بموجهين يفهمون النظام البيئي للمشاريع الناشئة الإقليمي.",

    // CTA
    ctaTitle: "ابدأ البناء اليوم",
    submitIdea: "قدّم فكرتك",

    // Footer
    aboutUs: "من نحن",
    termsOfService: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
    contact: "تواصل معنا",
    faqFooter: "الأسئلة الشائعة",
    careers: "وظائف",

    // Additional content
    launchingSoon: "قريباً",
    noCreditCard: "بدون بطاقة ائتمان",
    freeToStart: "مجاني للبدء",
    joinCommunity: "انضم للمجتمع",
    mostPopular: "الأكثر شعبية",
    perMonth: "/شهر",
    free: "مجاني",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Apply font and direction when language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const direction = language === "ar" ? "rtl" : "ltr"
      const fontFamily = language === "ar"
        ? "var(--font-cairo), ui-sans-serif, system-ui, sans-serif"
        : "var(--font-inter), ui-sans-serif, system-ui, sans-serif"

      document.documentElement.dir = direction
      document.documentElement.lang = language
      document.body.style.fontFamily = fontFamily
    }
  }, [language])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
