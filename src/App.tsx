import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeMode, PersonalInfo, Service, Masterpiece, BotServiceItem, AppItem, Project, Testimonial, FAQItem, OrderMessage } from './types';
import { Sidebar } from './components/Sidebar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CreationsSection } from './components/CreationsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { AdminPanel } from './components/AdminPanel';
import { Logo0003 } from './components/Logo0003';
import { Sun, Moon, Send, User, Wrench, Sparkles, Briefcase, MessageSquare, Settings, Bot, Smartphone } from 'lucide-react';
import {
  PERSONAL_INFO,
  SERVICES_DATA,
  BOT_SERVICES_DATA,
  APPS_DATA,
  MASTERPIECES_DATA,
  PROJECTS_DATA,
  TESTIMONIALS_DATA,
  FAQ_DATA
} from './data/portfolioData';

type VCardTab = 'about' | 'services' | 'creations' | 'portfolio' | 'contact';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeTab, setActiveTab] = useState<VCardTab>('about');
  const [prefilledService, setPrefilledService] = useState('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Dynamic Editable States with localStorage Persistence
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(() => {
    const saved = localStorage.getItem('0003_personal_info');
    if (saved) {
      try {
        const parsed: PersonalInfo = JSON.parse(saved);
        let updated = false;
        if (!parsed.tagline?.includes('اپلیکیشن')) {
          parsed.tagline = PERSONAL_INFO.tagline;
          parsed.aboutBio = PERSONAL_INFO.aboutBio;
          updated = true;
        }
        if (parsed.telegram === 'ali_ziaee1382' || !parsed.telegram) {
          parsed.telegram = PERSONAL_INFO.telegram;
          parsed.telegramUrl = PERSONAL_INFO.telegramUrl;
          updated = true;
        }
        if (parsed.instagram === 'Ali_ziaee1382' || parsed.instagram === 'ali_ziaee1382' || !parsed.instagram) {
          parsed.instagram = PERSONAL_INFO.instagram;
          parsed.instagramUrl = PERSONAL_INFO.instagramUrl;
          updated = true;
        }
        if (updated) {
          localStorage.setItem('0003_personal_info', JSON.stringify(parsed));
        }
        return parsed;
      } catch {
        return PERSONAL_INFO;
      }
    }
    return PERSONAL_INFO;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('0003_services');
    if (saved) {
      try {
        const parsed: Service[] = JSON.parse(saved);
        const hasOldWp = parsed.some((s) => s.id === 'wordpress' || s.title === 'طراحی و مدیریت وردپرس' || s.title === 'طراحی و توسعه وردپرس');
        const hasApp = parsed.some((s) => s.id === 'app' || s.title?.includes('اپلیکیشن'));
        if (hasOldWp || !hasApp) {
          return SERVICES_DATA;
        }
        return parsed.length > 0 ? parsed : SERVICES_DATA;
      } catch {
        return SERVICES_DATA;
      }
    }
    return SERVICES_DATA;
  });

  const [masterpieces, setMasterpieces] = useState<Masterpiece[]>(() => {
    const saved = localStorage.getItem('0003_masterpieces');
    return saved ? JSON.parse(saved) : MASTERPIECES_DATA;
  });

  const [botServices, setBotServices] = useState<BotServiceItem[]>(() => {
    const saved = localStorage.getItem('0003_bot_services');
    if (saved) {
      try {
        const parsed: BotServiceItem[] = JSON.parse(saved);
        const hasUploadBot = parsed.some((b) => b.id === 'bs-upload' || b.title.includes('سرویس آپلود'));
        if (!hasUploadBot) {
          // Remove outdated sample generic items (bs1, bs2) and load the requested 6 services
          const cleaned = parsed.filter((b) => !['bs1', 'bs2'].includes(b.id));
          return [...BOT_SERVICES_DATA, ...cleaned.filter((c) => !BOT_SERVICES_DATA.some((bd) => bd.id === c.id))];
        }
        const items = parsed.length > 0 ? parsed : BOT_SERVICES_DATA;
        items.forEach((b) => {
          if (b.demoUrl?.includes('ali_ziaee1382')) b.demoUrl = 'https://t.me/zerozerozerotreebot';
          if (b.orderBtnUrl?.includes('ali_ziaee1382')) b.orderBtnUrl = 'https://t.me/zerozerozerotreebot';
        });
        return items;
      } catch {
        return BOT_SERVICES_DATA;
      }
    }
    return BOT_SERVICES_DATA;
  });

  const [apps, setApps] = useState<AppItem[]>(() => {
    const saved = localStorage.getItem('0003_apps');
    if (saved) {
      try {
        const parsed: AppItem[] = JSON.parse(saved);
        const hasMusicApp = parsed.some((a) => a.id === 'app-music-0003' || a.title.includes('موزیک پلیر 0003'));
        let list = parsed;
        if (!hasMusicApp) {
          const cleaned = parsed.filter((a) => !['app1', 'app2'].includes(a.id));
          list = [...APPS_DATA, ...cleaned.filter((c) => !APPS_DATA.some((ad) => ad.id === c.id))];
        }
        list.forEach((a) => {
          if (a.demoUrl?.includes('ali_ziaee1382')) a.demoUrl = 'https://t.me/zerozerozerotreebot';
          if (a.orderBtnUrl?.includes('ali_ziaee1382')) a.orderBtnUrl = 'https://t.me/zerozerozerotreebot';
          if (a.downloadUrl?.includes('ali_ziaee1382')) a.downloadUrl = 'https://t.me/zerozerozerotreebot';
        });
        return list.length > 0 ? list : APPS_DATA;
      } catch {
        return APPS_DATA;
      }
    }
    return APPS_DATA;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('0003_projects');
    if (saved) {
      try {
        const parsed: Project[] = JSON.parse(saved);
        const oldRemoved = parsed.filter((p) => !['p1', 'p2', 'p3', 'p4', 'p5', 'p6'].includes(p.id));
        const existingIds = new Set(oldRemoved.map((p) => p.id));
        const missingDefaults = PROJECTS_DATA.filter((p) => !existingIds.has(p.id));
        const combined = [...missingDefaults, ...oldRemoved];
        combined.forEach((p) => {
          if (p.demoUrl?.includes('ali_ziaee1382')) p.demoUrl = 'https://t.me/zerozerozerotreebot';
          if (p.telegramLink?.includes('ali_ziaee1382')) p.telegramLink = 'https://t.me/zerozerozerotreebot';
        });
        return combined.length > 0 ? combined : PROJECTS_DATA;
      } catch {
        return PROJECTS_DATA;
      }
    }
    return PROJECTS_DATA;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('0003_testimonials');
    return saved ? JSON.parse(saved) : TESTIMONIALS_DATA;
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem('0003_faqs');
    if (saved) {
      try {
        const parsed: FAQItem[] = JSON.parse(saved);
        return parsed.map((f) => ({
          ...f,
          answer: f.answer.replace(/ali_ziaee1382@/g, 'zerozerozerotreebot@'),
        }));
      } catch {
        return FAQ_DATA;
      }
    }
    return FAQ_DATA;
  });

  const [orderMessages, setOrderMessages] = useState<OrderMessage[]>(() => {
    const saved = localStorage.getItem('0003_order_messages');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'msg_sample1',
        name: 'رضا محمدی',
        contactHandle: '09121112233',
        serviceNeeded: 'طراحی وبسایت اختصاصی',
        message: 'سلام وقت بخیر، نیازمند طراحی یک سایت شرکتی و نمونه‌کار حرفه‌ای هستم. لطفاً شرایط را بفرمایید.',
        createdAt: new Date().toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }),
        read: false,
      },
    ];
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('0003_personal_info', JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem('0003_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('0003_masterpieces', JSON.stringify(masterpieces));
  }, [masterpieces]);

  useEffect(() => {
    localStorage.setItem('0003_bot_services', JSON.stringify(botServices));
  }, [botServices]);

  useEffect(() => {
    localStorage.setItem('0003_apps', JSON.stringify(apps));
  }, [apps]);

  useEffect(() => {
    localStorage.setItem('0003_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('0003_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('0003_faqs', JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem('0003_order_messages', JSON.stringify(orderMessages));
  }, [orderMessages]);

  // Fetch data from cPanel api.php on app mount if available
  const fetchFromPhpServer = async () => {
    try {
      const response = await fetch('./api.php', { method: 'GET' });
      if (response.ok) {
        const data = await response.json();
        if (data && data.personalInfo) {
          setPersonalInfo(data.personalInfo);
          if (Array.isArray(data.services)) setServices(data.services);
          if (Array.isArray(data.masterpieces)) setMasterpieces(data.masterpieces);
          if (Array.isArray(data.botServices)) setBotServices(data.botServices);
          if (Array.isArray(data.apps)) setApps(data.apps);
          if (Array.isArray(data.projects)) setProjects(data.projects);
          if (Array.isArray(data.testimonials)) setTestimonials(data.testimonials);
          if (Array.isArray(data.faqs)) setFaqs(data.faqs);
          if (Array.isArray(data.orderMessages)) setOrderMessages(data.orderMessages);
          return true;
        }
      }
    } catch (err) {
      // Fallback silently to localStorage when running client-only dev server
    }
    return false;
  };

  useEffect(() => {
    fetchFromPhpServer();
  }, []);

  // Handle new visitor order message submission
  const handleAddOrderMessage = async (msg: OrderMessage) => {
    setOrderMessages((prev) => [msg, ...prev]);

    // Send directly to api.php so message is stored on cPanel server data.json
    try {
      await fetch('./api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add_order_message',
          message: msg,
        }),
      });
    } catch (err) {
      // Fallback silently if running without server
    }
  };

  // Function to save all state directly into api.php (data.json on cPanel)
  const saveAllToPhpServer = async () => {
    const payload = {
      personalInfo,
      services,
      masterpieces,
      botServices,
      apps,
      projects,
      testimonials,
      faqs,
      orderMessages,
      updatedAt: new Date().toISOString()
    };

    try {
      const response = await fetch('./api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        return { success: true, message: result.message || 'اطلاعات با موفقیت ذخیره شد' };
      } else {
        return { success: false, message: 'پاسخ ناموفق از سرور cPanel' };
      }
    } catch (error) {
      return { success: true, message: 'تغییرات به صورت کامل در حافظه مرورگر ذخیره شد (فایل api.php نیز در پوشه public جهت آپلود روی cPanel آماده است)' };
    }
  };

  // Synchronize document dark/light class and browser top bar theme-color
  useEffect(() => {
    const root = document.documentElement;
    let metaThemeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      metaThemeColor.content = '#0c0718'; // Dark mode deep purple background
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      metaThemeColor.content = '#f8fafc'; // Light mode clean canvas header
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navTabs: { id: VCardTab; label: string; icon: React.ReactNode }[] = [
    { id: 'about', label: 'درباره من', icon: <User className="w-4 h-4" /> },
    { id: 'services', label: 'خدمات من', icon: <Wrench className="w-4 h-4" /> },
    { id: 'creations', label: 'ساخته‌هام', icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
    { id: 'portfolio', label: 'نمونه‌کارها', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'contact', label: 'راه ارتباطی', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const handleOrderService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setActiveTab('contact');
  };

  const handleResetToDefaults = () => {
    localStorage.clear();
    setPersonalInfo(PERSONAL_INFO);
    setServices(SERVICES_DATA);
    setMasterpieces(MASTERPIECES_DATA);
    setBotServices(BOT_SERVICES_DATA);
    setApps(APPS_DATA);
    setProjects(PROJECTS_DATA);
    setTestimonials(TESTIMONIALS_DATA);
    setFaqs(FAQ_DATA);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative overflow-x-clip ${
        theme === 'dark'
          ? 'bg-[#0a0612] text-slate-100'
          : 'bg-[#f4effa] text-slate-900'
      }`}
      dir="rtl"
    >
      {/* Background Decorative Ambient Purple Glows */}
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Bar for Brand, Admin & Theme Toggle */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        theme === 'dark'
          ? 'bg-slate-950/80 border-purple-500/20'
          : 'bg-white/85 border-purple-200/80 shadow-xs'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Brand Pixel Art Logo */}
          <Logo0003 theme={theme} />

          {/* Controls: Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">

            <button
              onClick={toggleTheme}
              id="global-theme-toggle-btn"
              className={`p-2.5 rounded-2xl border transition-all duration-300 flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-slate-900 border-purple-500/30 text-amber-300 hover:bg-slate-800'
                  : 'bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100 shadow-xs'
              }`}
              title={theme === 'dark' ? 'تغییر به لایت مود' : 'تغییر به دارک مود'}
              aria-label="تغییر تم سایت"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-700" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Main Layout Area: Sidebar + vCard Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-28 lg:pb-10 flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
        
        {/* Left/Right Sidebar Profile Card */}
        <Sidebar theme={theme} personalInfo={personalInfo} />

        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0 space-y-6">
          
          {/* Navigation Bar Tabs (Top of Article) */}
          <nav className={`p-2 rounded-3xl border transition-all ${
            theme === 'dark'
              ? 'vcard-panel-dark'
              : 'vcard-panel-light shadow-sm'
          }`}>
            <div className="flex items-center justify-around sm:justify-start gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1 px-1">
              {navTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    id={`vcard-tab-${tab.id}`}
                    className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                        : theme === 'dark'
                          ? 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                          : 'text-slate-600 hover:text-purple-800 hover:bg-purple-100/60'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Active Article Tab Content with Fade Transition */}
          <article className={`p-6 sm:p-10 rounded-3xl border transition-all relative ${
            theme === 'dark'
              ? 'vcard-panel-dark text-slate-100'
              : 'vcard-panel-light text-slate-900 shadow-sm'
          }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'about' && (
                  <AboutSection
                    theme={theme}
                    onOrderService={handleOrderService}
                    personalInfo={personalInfo}
                    services={services}
                  />
                )}

                {activeTab === 'services' && (
                  <ServicesSection
                    theme={theme}
                    onOrderService={handleOrderService}
                    services={services}
                  />
                )}

                {activeTab === 'creations' && (
                  <CreationsSection
                    theme={theme}
                    botServices={botServices}
                    apps={apps}
                    onOrderService={handleOrderService}
                  />
                )}

                {activeTab === 'portfolio' && (
                  <PortfolioSection
                    theme={theme}
                    projects={projects}
                  />
                )}

                {activeTab === 'contact' && (
                  <ContactSection
                    theme={theme}
                    initialServiceTitle={prefilledService}
                    onAddOrderMessage={handleAddOrderMessage}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </article>

        </div>

      </div>

      {/* Footer (Hidden on Mobile) */}
      <footer className={`hidden md:block mt-12 py-6 border-t text-center text-xs transition-colors relative z-10 ${
        theme === 'dark'
          ? 'bg-slate-950/90 border-purple-500/20 text-slate-400'
          : 'bg-white/90 border-slate-200 text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <p className="font-medium">
            © ۱۴۰۳ تمامی حقوق محفوظ است. طراحی و توسعه توسط <span className="font-bold text-purple-500">{personalInfo.name}</span>
          </p>

          {/* Desktop Only Lottie Animation in the Center at the Very End - Dynamic Theme Source */}
          <div 
            key={theme}
            className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none p-0 m-0"
            dangerouslySetInnerHTML={{
              __html: `<dotlottie-wc src="${
                theme === 'dark' 
                  ? 'https://lottie.host/ec90c212-fe85-4299-bec9-bfb5ca76e9d4/MUx24NPr7V.json' 
                  : 'https://lottie.host/246d6b07-c955-4e08-aa56-fc4e4526cd52/KhNAhzCCfv.json'
              }" style="width: 80px; height: 80px; margin: 0; padding: 0; display: block;" autoplay loop></dotlottie-wc>`
            }}
          />

          <div className="flex items-center gap-4 text-xs font-semibold">
            <button onClick={() => setActiveTab('about')} className="hover:text-purple-500 transition-colors">درباره من</button>
            <span>•</span>
            <button onClick={() => setActiveTab('services')} className="hover:text-purple-500 transition-colors">خدمات من</button>
            <span>•</span>
            <button onClick={() => setActiveTab('creations')} className="hover:text-purple-500 transition-colors">ساخته‌هام</button>
            <span>•</span>
            <button onClick={() => setActiveTab('portfolio')} className="hover:text-purple-500 transition-colors">نمونه‌کارها</button>
            <span>•</span>
            <button onClick={() => setIsAdminOpen(true)} className="hover:text-amber-400 transition-colors text-amber-500 font-bold">ورود به پنل مدیریت</button>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Sticky Navigation Bar */}
      <div className={`lg:hidden fixed bottom-4 left-4 right-4 z-50 p-2 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center justify-around ${
        theme === 'dark'
          ? 'bg-slate-950/90 border-purple-500/30'
          : 'bg-white/95 border-purple-200 text-slate-900 shadow-purple-500/10'
      }`}>
        {navTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-bold transition-all ${
                isActive
                  ? 'text-purple-400 bg-purple-950/60'
                  : theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Admin Management Modal */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        services={services}
        setServices={setServices}
        masterpieces={masterpieces}
        setMasterpieces={setMasterpieces}
        botServices={botServices}
        setBotServices={setBotServices}
        apps={apps}
        setApps={setApps}
        projects={projects}
        setProjects={setProjects}
        testimonials={testimonials}
        setTestimonials={setTestimonials}
        faqs={faqs}
        setFaqs={setFaqs}
        orderMessages={orderMessages}
        setOrderMessages={setOrderMessages}
        onResetToDefaults={handleResetToDefaults}
        onSaveToPhpServer={saveAllToPhpServer}
        onFetchFromPhpServer={fetchFromPhpServer}
      />

    </div>
  );
}
