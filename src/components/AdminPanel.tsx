import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  User,
  UserCheck,
  Wrench,
  Crown,
  Briefcase,
  MessageSquare,
  HelpCircle,
  Save,
  Plus,
  Trash2,
  Edit3,
  Pencil,
  FileText,
  Send,
  X,
  Lock,
  Unlock,
  RotateCcw,
  Download,
  Upload,
  CheckCircle,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  Inbox,
  CheckCheck,
  Phone
} from 'lucide-react';
import {
  PersonalInfo,
  Service,
  Masterpiece,
  Project,
  Testimonial,
  FAQItem,
  ProjectCategory,
  CustomContact,
  OrderMessage
} from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  masterpieces: Masterpiece[];
  setMasterpieces: React.Dispatch<React.SetStateAction<Masterpiece[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  faqs: FAQItem[];
  setFaqs: React.Dispatch<React.SetStateAction<FAQItem[]>>;
  orderMessages: OrderMessage[];
  setOrderMessages: React.Dispatch<React.SetStateAction<OrderMessage[]>>;
  onResetToDefaults: () => void;
  onSaveToPhpServer?: () => Promise<{ success: boolean; message: string }>;
}

type AdminTab =
  | 'dashboard'
  | 'messages'
  | 'personal'
  | 'services'
  | 'masterpieces'
  | 'portfolio'
  | 'testimonials'
  | 'faq'
  | 'backup';

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  personalInfo,
  setPersonalInfo,
  services,
  setServices,
  masterpieces,
  setMasterpieces,
  projects,
  setProjects,
  testimonials,
  setTestimonials,
  faqs,
  setFaqs,
  orderMessages = [],
  setOrderMessages,
  onResetToDefaults,
  onSaveToPhpServer,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState<string>('');
  const [passcode, setPasscode] = useState<string>('');
  const [passError, setPassError] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Edit Modals / Forms States
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingMasterpiece, setEditingMasterpiece] = useState<Masterpiece | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);
  const [editingCustomContact, setEditingCustomContact] = useState<CustomContact | null>(null);
  const [isSyncingPhp, setIsSyncingPhp] = useState<boolean>(false);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (usernameInput.trim().toLowerCase() === 'aliziaee1382' && passcode === 'ali13821382ali') ||
      passcode === 'ali13821382ali' ||
      passcode === '0003'
    ) {
      setIsAuthenticated(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  // Helper arrays string handling
  const stringToArray = (str: string) => str.split('\n').filter((item) => item.trim().length > 0);
  const arrayToString = (arr: string[]) => arr.join('\n');

  // cPanel API live sync state
  const handleSyncToPhp = async () => {
    if (!onSaveToPhpServer) {
      showToast('اطلاعات در مرورگر ذخیره شد.');
      return;
    }
    setIsSyncingPhp(true);
    const res = await onSaveToPhpServer();
    setIsSyncingPhp(false);
    showToast(res.message);
  };

  // Backup & Import
  const handleExportData = () => {
    const fullData = {
      personalInfo,
      services,
      masterpieces,
      projects,
      testimonials,
      faqs,
      orderMessages,
      exportedAt: new Date().toISOString(),
    };
    const jsonStr = JSON.stringify(fullData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `0003-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('نسخه پشتیبان JSON با موفقیت دانلود شد.');
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.personalInfo) setPersonalInfo(parsed.personalInfo);
        if (parsed.services) setServices(parsed.services);
        if (parsed.masterpieces) setMasterpieces(parsed.masterpieces);
        if (parsed.projects) setProjects(parsed.projects);
        if (parsed.testimonials) setTestimonials(parsed.testimonials);
        if (parsed.faqs) setFaqs(parsed.faqs);
        if (parsed.orderMessages && setOrderMessages) setOrderMessages(parsed.orderMessages);
        showToast('اطلاعات با موفقیت بازیابی و اعمال شد.');
      } catch (err) {
        alert('فایل وارد شده نامعتبر است.');
      }
    };
    reader.readAsText(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4" dir="rtl">
        <div className="bg-[#1d2327] border border-slate-700 rounded-2xl p-6 sm:p-8 w-full max-w-md text-white shadow-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#2271b1] flex items-center justify-center mx-auto mb-3 text-white font-black font-english text-xl shadow-lg">
              0003
            </div>
            <h2 className="text-xl font-bold">ورود به پنل مدیریت</h2>
            <p className="text-xs text-slate-400 mt-1">
              جهت ورود، نام کاربری و رمز عبور مدیر را وارد کنید
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5 text-slate-300">نام کاربری :</label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="نام کاربری را وارد کنید..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#2271b1]"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5 text-slate-300">رمز عبور :</label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="رمز عبور را وارد کنید..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#2271b1]"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
              {passError && (
                <p className="text-xs text-rose-400 mt-1.5 font-medium">نام کاربری یا رمز عبور اشتباه است!</p>
              )}
            </div>

            {/* Guidance Box requested by User */}
            <div className="p-3.5 rounded-xl bg-purple-950/70 border border-purple-500/40 text-xs text-purple-200 text-center font-medium">
              <span>راهنمایی: </span>
              <span className="font-bold text-amber-300">آینه</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#2271b1] hover:bg-[#135e96] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>ورود به پنل مدیریت</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-hidden" dir="rtl">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[110] bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Admin Shell */}
      <div className="bg-[#1d2327] border border-slate-700/80 rounded-2xl w-full max-w-6xl h-[92vh] flex flex-col overflow-hidden text-slate-100 shadow-2xl relative">
        
        {/* Top WP Admin Header Bar */}
        <header className="bg-[#101517] px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 rounded-lg bg-[#2271b1] font-black text-xs font-english text-white shadow-xs">
              0003 Admin
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-200">
              پیشخوان مدیریت محتوای اختصاصی وبسایت
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleSyncToPhp}
              disabled={isSyncingPhp}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all disabled:opacity-50"
              title="ذخیره‌سازی و همگام‌سازی زنده با api.php هاست cPanel"
            >
              <Save className={`w-3.5 h-3.5 ${isSyncingPhp ? 'animate-spin' : ''}`} />
              <span>{isSyncingPhp ? 'در حال ذخیره‌سازی...' : 'ذخیره آنی روی cPanel (api.php)'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors"
              title="بستن پنل مدیریت"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Admin Main Body Layout: Sidebar + Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
          
          {/* WordPress Vertical Sidebar Navigation */}
          <aside className="w-full md:w-60 bg-[#1d2327] border-b md:border-b-0 md:border-l border-slate-800 p-2 flex md:flex-col overflow-x-auto md:overflow-y-auto gap-1 flex-shrink-0 scrollbar-none">
            {[
              { id: 'dashboard', label: 'پیشخوان اصلی', icon: <LayoutDashboard className="w-4 h-4" /> },
              {
                id: 'messages',
                label: 'پیام‌ها و سفارشات',
                icon: <Inbox className="w-4 h-4" />,
                badge: orderMessages.filter((m) => !m.read).length,
              },
              { id: 'personal', label: 'اطلاعات و بیوگرافی', icon: <UserCheck className="w-4 h-4" /> },
              { id: 'services', label: 'مدیریت خدمات', icon: <Wrench className="w-4 h-4" /> },
              { id: 'masterpieces', label: 'مدیریت شاهکارها', icon: <Crown className="w-4 h-4" /> },
              { id: 'portfolio', label: 'مدیریت نمونه‌کارها', icon: <Briefcase className="w-4 h-4" /> },
              { id: 'testimonials', label: 'نظرات مشتریان', icon: <MessageSquare className="w-4 h-4" /> },
              { id: 'faq', label: 'سوالات متداول', icon: <HelpCircle className="w-4 h-4" /> },
              { id: 'backup', label: 'پشتیبان‌گیری و ریست', icon: <Download className="w-4 h-4" /> },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTab)}
                  className={`flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap text-right ${
                    isActive
                      ? 'bg-[#2271b1] text-white shadow-md'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge && tab.badge > 0 ? (
                    <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-extrabold font-mono">
                      {tab.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </aside>

          {/* WP Admin Content Workspace Area */}
          <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-[#2c3338]/40 space-y-6">
            
            {/* TAB 1: DASHBOARD OVERVIEW */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="bg-[#1d2327] border border-slate-700/60 p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    خوش آمدید به سیستم مدیریت وبسایت!
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    از این بخش می‌توانید تمام متون، لینک‌ها، خدمات، نمونه‌کارها، شاهکارها و اطلاعات شخصی سایت را به صورت کاملاً زنده تغییر دهید. همه تغییرات بلافاصله در سایت ذخیره و اعمال می‌شوند.
                  </p>
                </div>

                {/* Stat Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div
                    onClick={() => setActiveTab('messages')}
                    className="bg-[#1d2327] hover:bg-slate-800 p-4 rounded-xl border border-purple-500/40 cursor-pointer transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-purple-300 font-semibold">پیام‌ها و سفارشات</span>
                      {orderMessages.filter(m => !m.read).length > 0 && (
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      )}
                    </div>
                    <span className="text-2xl font-black text-purple-400 font-english block">{orderMessages.length}</span>
                  </div>

                  <div className="bg-[#1d2327] p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 block font-semibold">تعداد خدمات</span>
                    <span className="text-2xl font-black text-sky-400 font-english block">{services.length}</span>
                  </div>
                  <div className="bg-[#1d2327] p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 block font-semibold">شاهکارها</span>
                    <span className="text-2xl font-black text-amber-400 font-english block">{masterpieces.length}</span>
                  </div>
                  <div className="bg-[#1d2327] p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 block font-semibold">نمونه‌کارها</span>
                    <span className="text-2xl font-black text-indigo-400 font-english block">{projects.length}</span>
                  </div>
                  <div className="bg-[#1d2327] p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 block font-semibold">رضایت مشتریان</span>
                    <span className="text-2xl font-black text-emerald-400 font-english block">{testimonials.length}</span>
                  </div>
                </div>

                {/* Quick Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setActiveTab('personal')}
                    className="p-5 bg-[#1d2327] hover:bg-slate-800 border border-slate-800 rounded-xl cursor-pointer transition-all flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">ویرایش بیو و اطلاعات تماس</h3>
                      <p className="text-xs text-slate-400 mt-0.5">تغییر شماره، آی‌دی تلگرام و اینستاگرام</p>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTab('portfolio')}
                    className="p-5 bg-[#1d2327] hover:bg-slate-800 border border-slate-800 rounded-xl cursor-pointer transition-all flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">افزودن و ویرایش نمونه‌کار</h3>
                      <p className="text-xs text-slate-400 mt-0.5">مدیریت لیست کارهای اجرا شده و دموها</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: MESSAGES & ORDERS */}
            {activeTab === 'messages' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1d2327] border border-slate-800 p-4 rounded-xl">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Inbox className="w-5 h-5 text-purple-400" />
                      <span>پیام‌ها و درخواست‌های سفارش کاربری</span>
                      {orderMessages.filter((m) => !m.read).length > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-extrabold">
                          {orderMessages.filter((m) => !m.read).length} پیام جدید
                        </span>
                      )}
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      پیام‌ها و درخواست‌های ارسالی کاربران از طریق فرم سفارش سریع در این بخش ذخیره شده و قابل مدیریت هستند.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {orderMessages.length > 0 && (
                      <>
                        <button
                          onClick={() => {
                            if (setOrderMessages) {
                              setOrderMessages(orderMessages.map((m) => ({ ...m, read: true })));
                            }
                            showToast('تمام پیام‌ها به‌عنوام خوانده‌شده علامت‌گذاری شدند');
                          }}
                          className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <CheckCheck className="w-4 h-4 text-emerald-400" />
                          <span>خوانده شدن همه</span>
                        </button>

                        <button
                          onClick={() => {
                            if (confirm('آیا از حذف تمام پیام‌ها مطمئن هستید؟')) {
                              if (setOrderMessages) setOrderMessages([]);
                              showToast('تمام پیام‌ها با موفقیت حذف شدند');
                            }
                          }}
                          className="px-3 py-2 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800/50 text-xs text-rose-300 font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>حذف همه پیام‌ها</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {orderMessages.length === 0 ? (
                  <div className="bg-[#1d2327] border border-slate-800 rounded-xl p-12 text-center space-y-3">
                    <Inbox className="w-12 h-12 text-slate-600 mx-auto" />
                    <p className="text-sm text-slate-300 font-bold">هیچ پیام یا درخواستی تاکنون ثبت نشده است.</p>
                    <p className="text-xs text-slate-400">پیام‌های جدید کاربران پس از ارسال از فرم سفارش سریع در اینجا نمایش داده می‌شوند.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {orderMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`bg-[#1d2327] border p-4.5 rounded-xl space-y-3 transition-all ${
                          !msg.read ? 'border-purple-500/60 bg-purple-950/15' : 'border-slate-800'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-2.5 h-2.5 rounded-full ${!msg.read ? 'bg-purple-500 animate-pulse' : 'bg-slate-600'}`} />
                            <span className="font-bold text-sm text-white">{msg.name}</span>
                            <span className="text-xs px-2.5 py-0.5 rounded-md bg-purple-900/50 border border-purple-500/30 text-purple-300 font-medium">
                              {msg.serviceNeeded}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-400 font-mono">{msg.createdAt}</span>
                            <button
                              onClick={() => {
                                if (setOrderMessages) {
                                  setOrderMessages(
                                    orderMessages.map((m) => (m.id === msg.id ? { ...m, read: !m.read } : m))
                                  );
                                }
                              }}
                              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                                msg.read
                                  ? 'bg-slate-800 text-slate-400 hover:text-white'
                                  : 'bg-purple-600 text-white font-bold'
                              }`}
                            >
                              {msg.read ? 'خوانده‌شده' : 'جدید / خوانده‌نشده'}
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`حذف پیام از طرف "${msg.name}"؟`)) {
                                  if (setOrderMessages) {
                                    setOrderMessages(orderMessages.filter((m) => m.id !== msg.id));
                                  }
                                  showToast('پیام حذف شد');
                                }
                              }}
                              className="p-1.5 rounded bg-slate-800 text-rose-400 hover:bg-rose-600 hover:text-white transition-colors"
                              title="حذف پیام"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                            <span className="font-semibold text-slate-400">راه ارتباطی کاربر:</span>
                            <span className="font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-purple-300 font-bold">
                              {msg.contactHandle}
                            </span>

                            <a
                              href={`https://t.me/${msg.contactHandle.replace('@', '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-800/50 text-sky-400 hover:bg-sky-900/80 text-[11px] font-bold flex items-center gap-1 transition-colors"
                            >
                              <Send className="w-3 h-3" />
                              <span>بازکردن در تلگرام</span>
                            </a>

                            {/^\d+$/.test(msg.contactHandle.replace(/\+|\s/g, '')) && (
                              <a
                                href={`tel:${msg.contactHandle}`}
                                className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/80 text-[11px] font-bold flex items-center gap-1 transition-colors"
                              >
                                <Phone className="w-3 h-3" />
                                <span>تماس تلفنی</span>
                              </a>
                            )}
                          </div>

                          <div className="bg-slate-900/90 border border-slate-800/80 p-3.5 rounded-xl text-xs text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
                            {msg.message}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: PERSONAL & BRAND INFO */}
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">اطلاعات شخصی، تصویر پروفایل و اطلاعات تماس</h2>
                  <button
                    onClick={() => showToast('اطلاعات شخصی ذخیره شد')}
                    className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Save className="w-4 h-4" />
                    <span>ذخیره تغییرات</span>
                  </button>
                </div>

                {/* Profile Picture & Status Badge Box */}
                <div className="bg-[#1d2327] p-6 rounded-xl border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>پروفایل و وضعیت آنلاین</span>
                  </h3>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-lg bg-slate-900">
                        <img
                          src={personalInfo.avatarImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'}
                          alt="پروفایل"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -left-1 px-2 py-0.5 rounded-full bg-slate-900 border border-emerald-500/50 text-[10px] text-emerald-400 font-semibold">
                        {personalInfo.statusText || 'آنلاین'}
                      </div>
                    </div>

                    <div className="flex-1 w-full space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">آدرس اینترنتی عکس پروفایل (URL):</label>
                        <input
                          type="text"
                          value={personalInfo.avatarImage || ''}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, avatarImage: e.target.value })}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">متن وضعیت آنلاین (روی آواتار):</label>
                        <input
                          type="text"
                          value={personalInfo.statusText || ''}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, statusText: e.target.value })}
                          placeholder="مثلاً: آنلاین، در حال پاسخگویی، آمادگی پروژه..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Bio and Details */}
                <div className="bg-[#1d2327] p-6 rounded-xl border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>مشخصات اصلی و آمار عملکرد</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">نام و نام خانوادگی:</label>
                      <input
                        type="text"
                        value={personalInfo.name}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">نام برند:</label>
                      <input
                        type="text"
                        value={personalInfo.brand}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, brand: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-300 mb-1">شعار / عنوان تخصصی کوتاه‌زیر نام:</label>
                      <input
                        type="text"
                        value={personalInfo.tagline}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, tagline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">شماره تلفن مستقیم:</label>
                      <input
                        type="text"
                        value={personalInfo.phone}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">آی‌دی تلگرام (بدون @):</label>
                      <input
                        type="text"
                        value={personalInfo.telegram}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            telegram: e.target.value,
                            telegramUrl: `https://t.me/${e.target.value}`,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">آی‌دی اینستاگرام:</label>
                      <input
                        type="text"
                        value={personalInfo.instagram}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            instagram: e.target.value,
                            instagramUrl: `https://instagram.com/${e.target.value}`,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">سابقه کاری:</label>
                      <input
                        type="text"
                        value={personalInfo.experienceYears}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, experienceYears: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">تعداد پروژه موفق:</label>
                      <input
                        type="text"
                        value={personalInfo.completedProjects}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, completedProjects: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">میزان رضایت مشتریان:</label>
                      <input
                        type="text"
                        value={personalInfo.satisfactionRate}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, satisfactionRate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">متن درباره من (بیوگرافی کامل):</label>
                    <textarea
                      rows={4}
                      value={personalInfo.aboutBio}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, aboutBio: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#2271b1] leading-relaxed"
                    />
                  </div>
                </div>

                {/* Custom Contacts in Sidebar Column */}
                <div className="bg-[#1d2327] p-6 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>اطلاعات تماس و لینک‌های سفارشی زیر پروفایل (کارت کناری)</span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        می‌توانید هر تعداد راه ارتباطی جدید (ایمیل، آدرس، واتساپ، گیت‌هاب و...) را اضافه کنید تا در ستون زیر عکس پروفایل نشان داده شود.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setEditingCustomContact({
                          id: `cc_${Date.now()}`,
                          title: 'عنوان تماس جدید',
                          value: 'مقدار یا شناسه',
                          link: '',
                          iconName: 'mail',
                        })
                      }
                      className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>افزودن مورد جدید</span>
                    </button>
                  </div>

                  {(!personalInfo.customContacts || personalInfo.customContacts.length === 0) ? (
                    <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
                      هنوز هیچ آیتم تماس سفارشی اضافه نشده است. برای افزودن دکمه بالا را بزنید.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {personalInfo.customContacts.map((cc) => (
                        <div
                          key={cc.id}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800"
                        >
                          <div className="min-w-0 pr-2">
                            <span className="text-xs font-bold text-white block truncate">{cc.title}</span>
                            <span className="text-[11px] text-purple-300 block truncate">{cc.value}</span>
                          </div>

                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <button
                              onClick={() => setEditingCustomContact(cc)}
                              className="p-1.5 rounded bg-slate-800 hover:bg-purple-900/50 text-slate-300 hover:text-white transition-colors"
                              title="ویرایش"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                const filtered = (personalInfo.customContacts || []).filter((item) => item.id !== cc.id);
                                setPersonalInfo({ ...personalInfo, customContacts: filtered });
                                showToast('آیتم تماس حذف شد');
                              }}
                              className="p-1.5 rounded bg-slate-800 hover:bg-rose-900/50 text-slate-300 hover:text-rose-400 transition-colors"
                              title="حذف"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: SERVICES MANAGER */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">مدیریت خدمات و سرویس‌ها</h2>
                  <button
                    onClick={() =>
                      setEditingService({
                        id: `srv_${Date.now()}`,
                        title: 'خدمت جدید',
                        description: 'توضیحات کوتاه خدمت...',
                        iconName: 'Code',
                        tag: 'ویژه',
                        features: ['ویژگی ۱', 'ویژگی ۲'],
                      })
                    }
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن خدمت جدید</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((srv) => (
                    <div key={srv.id} className="bg-[#1d2327] border border-slate-800 p-5 rounded-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2.5 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-500/30 font-semibold">
                          {srv.tag}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingService(srv)}
                            className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('آیا از حذف این خدمت اطمینان دارید؟')) {
                                setServices(services.filter((s) => s.id !== srv.id));
                                showToast('خدمت حذف شد');
                              }
                            }}
                            className="p-1.5 rounded bg-slate-800 text-rose-400 hover:bg-rose-600 hover:text-white"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h3 className="font-bold text-base text-white">{srv.title}</h3>
                      <p className="text-xs text-slate-300 line-clamp-2">{srv.description}</p>
                      <div className="text-[11px] text-slate-400">
                        {srv.features.length} ویژگی ثبت شده
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Service Modal */}
                {editingService && (
                  <div className="fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#1d2327] border border-slate-700 p-6 rounded-2xl w-full max-w-lg text-white space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="font-bold text-sm">ویرایش خدمت: {editingService.title}</h3>
                        <button onClick={() => setEditingService(null)}>
                          <X className="w-4 h-4 text-slate-400 hover:text-white" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-slate-300 mb-1">عنوان خدمت:</label>
                          <input
                            type="text"
                            value={editingService.title}
                            onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">برچسب (Tag):</label>
                          <input
                            type="text"
                            value={editingService.tag}
                            onChange={(e) => setEditingService({ ...editingService, tag: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">توضیحات:</label>
                          <textarea
                            rows={3}
                            value={editingService.description}
                            onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">ویژگی‌ها (هر خط یک مورد):</label>
                          <textarea
                            rows={4}
                            value={arrayToString(editingService.features)}
                            onChange={(e) =>
                              setEditingService({ ...editingService, features: stringToArray(e.target.value) })
                            }
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                        <button
                          onClick={() => setEditingService(null)}
                          className="px-4 py-2 bg-slate-800 text-xs rounded-lg text-slate-300"
                        >
                          انصراف
                        </button>
                        <button
                          onClick={() => {
                            const exists = services.some((s) => s.id === editingService.id);
                            if (exists) {
                              setServices(services.map((s) => (s.id === editingService.id ? editingService : s)));
                            } else {
                              setServices([...services, editingService]);
                            }
                            setEditingService(null);
                            showToast('خدمت با موفقیت ذخیره شد');
                          }}
                          className="px-4 py-2 bg-[#2271b1] text-xs font-bold rounded-lg text-white"
                        >
                          ذخیره تغییرات
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: MASTERPIECES MANAGER */}
            {activeTab === 'masterpieces' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">مدیریت شاهکارها (Masterpieces)</h2>
                  <button
                    onClick={() =>
                      setEditingMasterpiece({
                        id: `mst_${Date.now()}`,
                        title: 'شاهکار جدید',
                        subtitle: 'زیرعنوان جدید',
                        badge: 'پروژه ویژه',
                        description: 'توضیحات کامل درباره شاهکار...',
                        impactMetric: '+۱۰۰٪',
                        impactLabel: 'شاخص موفقیت',
                        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000',
                        demoUrl: 'https://t.me/ali_ziaee1382',
                        technologies: ['React', 'TypeScript'],
                        keyInnovations: ['نوآوری ۱', 'نوآوری ۲'],
                        clientName: 'کارفرمای نمونه',
                      })
                    }
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن شاهکار جدید</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {masterpieces.map((m) => (
                    <div key={m.id} className="bg-[#1d2327] border border-slate-800 p-5 rounded-xl flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <img src={m.image} alt={m.title} className="w-20 h-20 rounded-lg object-cover bg-slate-900" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">
                              {m.badge}
                            </span>
                            <span className="text-xs text-purple-400 font-bold">{m.subtitle}</span>
                          </div>
                          <h3 className="font-bold text-base text-white">{m.title}</h3>
                          <p className="text-xs text-slate-300 line-clamp-2 mt-1">{m.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingMasterpiece(m)}
                          className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('آیا از حذف این شاهکار اطمینان دارید؟')) {
                              setMasterpieces(masterpieces.filter((item) => item.id !== m.id));
                              showToast('شاهکار حذف شد');
                            }
                          }}
                          className="p-2 rounded bg-slate-800 text-rose-400 hover:bg-rose-600 hover:text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Masterpiece Modal */}
                {editingMasterpiece && (
                  <div className="fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#1d2327] border border-slate-700 p-6 rounded-2xl w-full max-w-xl text-white space-y-4 max-h-[90vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="font-bold text-sm">ویرایش شاهکار: {editingMasterpiece.title}</h3>
                        <button onClick={() => setEditingMasterpiece(null)}>
                          <X className="w-4 h-4 text-slate-400 hover:text-white" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-300 mb-1">عنوان شاهکار:</label>
                            <input
                              type="text"
                              value={editingMasterpiece.title}
                              onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, title: e.target.value })}
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-xs text-slate-300 mb-1">زیرعنوان:</label>
                            <input
                              type="text"
                              value={editingMasterpiece.subtitle}
                              onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, subtitle: e.target.value })}
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs text-slate-300 mb-1">بج (Badge):</label>
                            <input
                              type="text"
                              value={editingMasterpiece.badge}
                              onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, badge: e.target.value })}
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-xs text-slate-300 mb-1">عدد آمار (Impact):</label>
                            <input
                              type="text"
                              value={editingMasterpiece.impactMetric}
                              onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, impactMetric: e.target.value })}
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-xs text-slate-300 mb-1">عنوان آمار:</label>
                            <input
                              type="text"
                              value={editingMasterpiece.impactLabel}
                              onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, impactLabel: e.target.value })}
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">آدرس تصویر (URL):</label>
                          <input
                            type="text"
                            value={editingMasterpiece.image}
                            onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, image: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono"
                          />
                        </div>

                        {/* Custom Buttons & Links Customization */}
                        <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-3">
                          <span className="text-xs font-bold text-amber-300 block">تنظیم دکمه‌ها و لینک‌های شاهکار:</span>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] text-slate-300 mb-1">متن دکمه اول (دمو):</label>
                              <input
                                type="text"
                                placeholder="مشاهده دمو"
                                value={editingMasterpiece.demoBtnText || ''}
                                onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, demoBtnText: e.target.value })}
                                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] text-slate-300 mb-1">لینک دکمه اول (دمو URL):</label>
                              <input
                                type="text"
                                placeholder="https://..."
                                value={editingMasterpiece.demoUrl || ''}
                                onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, demoUrl: e.target.value })}
                                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] text-slate-300 mb-1">متن دکمه دوم (سفارش):</label>
                              <input
                                type="text"
                                placeholder="سفارش مشابه"
                                value={editingMasterpiece.orderBtnText || ''}
                                onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, orderBtnText: e.target.value })}
                                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] text-slate-300 mb-1">لینک دکمه دوم (اختیاری):</label>
                              <input
                                type="text"
                                placeholder="خالی = سفارش در تلگرام"
                                value={editingMasterpiece.orderBtnUrl || ''}
                                onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, orderBtnUrl: e.target.value })}
                                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">توضیحات کامل:</label>
                          <textarea
                            rows={3}
                            value={editingMasterpiece.description}
                            onChange={(e) => setEditingMasterpiece({ ...editingMasterpiece, description: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">تکنولوژی‌ها (هر خط یک مورد):</label>
                          <textarea
                            rows={3}
                            value={arrayToString(editingMasterpiece.technologies)}
                            onChange={(e) =>
                              setEditingMasterpiece({ ...editingMasterpiece, technologies: stringToArray(e.target.value) })
                            }
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">نوآوری‌های کلیدی (هر خط یک مورد):</label>
                          <textarea
                            rows={3}
                            value={arrayToString(editingMasterpiece.keyInnovations)}
                            onChange={(e) =>
                              setEditingMasterpiece({ ...editingMasterpiece, keyInnovations: stringToArray(e.target.value) })
                            }
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                        <button
                          onClick={() => setEditingMasterpiece(null)}
                          className="px-4 py-2 bg-slate-800 text-xs rounded-lg text-slate-300"
                        >
                          انصراف
                        </button>
                        <button
                          onClick={() => {
                            const exists = masterpieces.some((m) => m.id === editingMasterpiece.id);
                            if (exists) {
                              setMasterpieces(masterpieces.map((m) => (m.id === editingMasterpiece.id ? editingMasterpiece : m)));
                            } else {
                              setMasterpieces([...masterpieces, editingMasterpiece]);
                            }
                            setEditingMasterpiece(null);
                            showToast('شاهکار ذخیره شد');
                          }}
                          className="px-4 py-2 bg-amber-600 text-xs font-bold rounded-lg text-white"
                        >
                          ذخیره تغییرات
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: PORTFOLIO MANAGER */}
            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">مدیریت نمونه‌کارها (کارهای اجرا شده)</h2>
                  <button
                    onClick={() =>
                      setEditingProject({
                        id: `p_${Date.now()}`,
                        title: 'نمونه‌کار جدید',
                        category: 'web',
                        categoryName: 'طراحی وب',
                        description: 'توضیحات نمونه‌کار...',
                        fullDetails: 'جزئیات کامل نمونه‌کار...',
                        features: ['ویژگی ۱'],
                        technologies: ['React'],
                        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000',
                        telegramLink: 'https://t.me/ali_ziaee1382',
                        rating: 5,
                      })
                    }
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن نمونه‌کار جدید</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projects.map((p) => (
                    <div key={p.id} className="bg-[#1d2327] border border-slate-800 p-4 rounded-xl flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <img src={p.image} alt={p.title} className="w-16 h-16 rounded-lg object-cover bg-slate-900" />
                        <div>
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-semibold">
                            {p.categoryName}
                          </span>
                          <h3 className="font-bold text-sm text-white mt-1">{p.title}</h3>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{p.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setEditingProject(p)}
                          className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('آیا از حذف این نمونه‌کار اطمینان دارید؟')) {
                              setProjects(projects.filter((item) => item.id !== p.id));
                              showToast('نمونه‌کار حذف شد');
                            }
                          }}
                          className="p-1.5 rounded bg-slate-800 text-rose-400 hover:bg-rose-600 hover:text-white"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Project Modal */}
                {editingProject && (
                  <div className="fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#1d2327] border border-slate-700 p-6 rounded-2xl w-full max-w-xl text-white space-y-4 max-h-[90vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="font-bold text-sm">ویرایش نمونه‌کار: {editingProject.title}</h3>
                        <button onClick={() => setEditingProject(null)}>
                          <X className="w-4 h-4 text-slate-400 hover:text-white" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-slate-300 mb-1">عنوان پروژه:</label>
                          <input
                            type="text"
                            value={editingProject.title}
                            onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-300 mb-1">دسته‌بندی (کد):</label>
                            <select
                              value={editingProject.category}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  category: e.target.value as ProjectCategory,
                                })
                              }
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                            >
                              <option value="web">طراحی وب (web)</option>
                              <option value="bot">ربات تلگرام (bot)</option>
                              <option value="wordpress">وردپرس (wordpress)</option>
                              <option value="graphic">طراحی بنر و لوگو (graphic)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs text-slate-300 mb-1">عنوان فارسی دسته‌بندی:</label>
                            <input
                              type="text"
                              value={editingProject.categoryName}
                              onChange={(e) => setEditingProject({ ...editingProject, categoryName: e.target.value })}
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">آدرس تصویر (URL):</label>
                          <input
                            type="text"
                            value={editingProject.image}
                            onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">توضیح کوتاه:</label>
                          <input
                            type="text"
                            value={editingProject.description}
                            onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">جزئیات کامل:</label>
                          <textarea
                            rows={3}
                            value={editingProject.fullDetails}
                            onChange={(e) => setEditingProject({ ...editingProject, fullDetails: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">تکنولوژی‌ها (هر خط یک مورد):</label>
                          <textarea
                            rows={3}
                            value={arrayToString(editingProject.technologies)}
                            onChange={(e) =>
                              setEditingProject({ ...editingProject, technologies: stringToArray(e.target.value) })
                            }
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                        <button
                          onClick={() => setEditingProject(null)}
                          className="px-4 py-2 bg-slate-800 text-xs rounded-lg text-slate-300"
                        >
                          انصراف
                        </button>
                        <button
                          onClick={() => {
                            const exists = projects.some((p) => p.id === editingProject.id);
                            if (exists) {
                              setProjects(projects.map((p) => (p.id === editingProject.id ? editingProject : p)));
                            } else {
                              setProjects([...projects, editingProject]);
                            }
                            setEditingProject(null);
                            showToast('نمونه‌کار ذخیره شد');
                          }}
                          className="px-4 py-2 bg-indigo-600 text-xs font-bold rounded-lg text-white"
                        >
                          ذخیره تغییرات
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 6: TESTIMONIALS MANAGER */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">مدیریت نظرات مشتریان</h2>
                  <button
                    onClick={() =>
                      setEditingTestimonial({
                        id: `t_${Date.now()}`,
                        name: 'مشتری جدید',
                        role: 'مدیر کسب و کار',
                        projectType: 'طراحی وبسایت',
                        comment: 'نظر مثبت مشتری در مورد پروژه...',
                        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
                        rating: 5,
                      })
                    }
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن نظر جدید</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {testimonials.map((t) => (
                    <div key={t.id} className="bg-[#1d2327] border border-slate-800 p-4 rounded-xl flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover bg-slate-900" />
                        <div>
                          <h3 className="font-bold text-sm text-white">{t.name} <span className="text-xs text-purple-400 font-normal">({t.role})</span></h3>
                          <p className="text-xs text-slate-300 line-clamp-1">{t.comment}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingTestimonial(t)}
                          className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('حذف نظر مشتری؟')) {
                              setTestimonials(testimonials.filter((item) => item.id !== t.id));
                              showToast('نظر حذف شد');
                            }
                          }}
                          className="p-1.5 rounded bg-slate-800 text-rose-400 hover:bg-rose-600 hover:text-white"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Testimonial Modal */}
                {editingTestimonial && (
                  <div className="fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#1d2327] border border-slate-700 p-6 rounded-2xl w-full max-w-lg text-white space-y-4 shadow-2xl">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="font-bold text-sm text-purple-300 flex items-center gap-2">
                          <User className="w-4 h-4 text-purple-400" />
                          <span>ویرایش و مدیریت پروفایل نظر مشتری</span>
                        </h3>
                        <button onClick={() => setEditingTestimonial(null)}>
                          <X className="w-4 h-4 text-slate-400 hover:text-white" />
                        </button>
                      </div>

                      {/* Avatar & Profile Preview Box */}
                      <div className="flex items-center gap-4 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50 bg-slate-800 flex-shrink-0">
                          <img
                            src={editingTestimonial.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200'}
                            alt={editingTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <label className="block text-xs font-semibold text-slate-300 mb-1">آدرس تصویر آواتار / پروفایل (URL):</label>
                          <input
                            type="text"
                            placeholder="https://..."
                            value={editingTestimonial.avatar}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, avatar: e.target.value })}
                            className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-slate-300 mb-1">نام مشتری:</label>
                          <input
                            type="text"
                            value={editingTestimonial.name}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">سمت / نقش مشتری:</label>
                          <input
                            type="text"
                            value={editingTestimonial.role}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                            placeholder="مثلاً: مدیر مارکتینگ پرشیا"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">نوع پروژه / خدمت تحویل داده‌شده:</label>
                          <input
                            type="text"
                            value={editingTestimonial.projectType || ''}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, projectType: e.target.value })}
                            placeholder="مثلاً: ربات تلگرام VIP"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1">امتیاز ثبت شده (۱ تا ۵ ستاره):</label>
                          <select
                            value={editingTestimonial.rating || 5}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, rating: Number(e.target.value) })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-amber-400 font-bold"
                          >
                            <option value={5}>⭐⭐⭐⭐⭐ (۵ از ۵)</option>
                            <option value={4}>⭐⭐⭐⭐ (۴ از ۵)</option>
                            <option value={3}>⭐⭐⭐ (۳ از ۵)</option>
                            <option value={2}>⭐⭐ (۲ از ۵)</option>
                            <option value={1}>⭐ (۱ از ۵)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1">متن نظر و تجربه همکاری:</label>
                        <textarea
                          rows={4}
                          value={editingTestimonial.comment}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, comment: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs"
                        />
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                        <button
                          onClick={() => setEditingTestimonial(null)}
                          className="px-4 py-2 bg-slate-800 text-xs rounded-lg text-slate-300"
                        >
                          انصراف
                        </button>
                        <button
                          onClick={() => {
                            const exists = testimonials.some((t) => t.id === editingTestimonial.id);
                            if (exists) {
                              setTestimonials(testimonials.map((t) => (t.id === editingTestimonial.id ? editingTestimonial : t)));
                            } else {
                              setTestimonials([...testimonials, editingTestimonial]);
                            }
                            setEditingTestimonial(null);
                            showToast('پروفایل و نظر مشتری ذخیره شد');
                          }}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-xs font-bold rounded-lg text-white"
                        >
                          ذخیره نظر مشتری
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 7: FAQ MANAGER */}
            {activeTab === 'faq' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">مدیریت سوالات متداول</h2>
                  <button
                    onClick={() =>
                      setFaqs([
                        ...faqs,
                        { question: 'سوال جدید؟', answer: 'پاسخ سوال جدید...' },
                      ])
                    }
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن سوال جدید</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-[#1d2327] border border-slate-800 p-4 rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{faq.question}</span>
                        <button
                          onClick={() => {
                            setFaqs(faqs.filter((_, i) => i !== idx));
                            showToast('سوال حذف شد');
                          }}
                          className="text-rose-400 hover:text-white text-xs p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 8: BACKUP & RESET */}
            {activeTab === 'backup' && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-white">پشتیبان‌گیری، خروجی و بازیابی</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* cPanel Live API Sync Card */}
                  <div className="bg-[#1d2327] border border-slate-800 p-6 rounded-xl space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                      <Save className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">ذخیره زنده روی سرور (cPanel / api.php)</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        تغییرات شما مستقیماً در فایل api.php و دیتابیس data.json هاست ذخیره شده و برای تمام کاربران وبسایت فوراً نشان داده می‌شود.
                      </p>
                    </div>
                    <button
                      onClick={handleSyncToPhp}
                      disabled={isSyncingPhp}
                      className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Save className={`w-4 h-4 ${isSyncingPhp ? 'animate-spin' : ''}`} />
                      <span>{isSyncingPhp ? 'در حال ارسال...' : 'همگام‌سازی زنده با api.php'}</span>
                    </button>
                  </div>

                  {/* Backup Card */}
                  <div className="bg-[#1d2327] border border-slate-800 p-6 rounded-xl space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">دانلود نسخه پشتیبان (JSON)</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        از تمام تغییرات، خدمات، نمونه‌کارها و تنظیمات خود خروجی کامل دریافت کنید تا هر زمان نیازمند بازیابی بودید استفاده کنید.
                      </p>
                    </div>
                    <button
                      onClick={handleExportData}
                      className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>دانلود فایل JSON پشتیبان</span>
                    </button>
                  </div>

                  {/* Restore Card */}
                  <div className="bg-[#1d2327] border border-slate-800 p-6 rounded-xl space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">بازیابی پشتیبان (Import)</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        فایل JSON قبلی خود را بارگذاری کنید تا اطلاعات به صورت خودکار جایگزین شوند.
                      </p>
                    </div>
                    <label className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <Upload className="w-4 h-4" />
                      <span>انتخاب فایل JSON</span>
                      <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Reset Warning Box */}
                <div className="bg-rose-950/40 border border-rose-800/60 p-6 rounded-xl flex items-start gap-4">
                  <ShieldAlert className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-sm text-rose-300">بازنشانی به تنظیمات کارخانه (Reset to Default)</h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        در صورت تمایل می‌توانید تمام تغییرات اعمال شده را حذف کرده و همه بخش‌ها را به اطلاعات اولیه بازگردانید.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm('آیا مطمئن هستید که می‌خواهید تمام اطلاعات به حالت اولیه بازگردند؟')) {
                          onResetToDefaults();
                          showToast('اطلاعات با موفقیت بازنشانی شد.');
                        }
                      }}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>بازنشانی به حالت اولیه</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Modal for Editing Custom Contact Item */}
            {editingCustomContact && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#1d2327] border border-slate-700 rounded-2xl w-full max-w-md p-6 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="font-bold text-sm text-white">ویرایش راه ارتباطی / لینک سفارشی</h3>
                    <button
                      onClick={() => setEditingCustomContact(null)}
                      className="text-slate-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3 text-right">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">عنوان راه ارتباطی (مثل ایمیل کاری، آدرس دفتر، واتساپ):</label>
                      <input
                        type="text"
                        value={editingCustomContact.title}
                        onChange={(e) => setEditingCustomContact({ ...editingCustomContact, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">مقدار یا شناسه (نمایش داده می‌شود):</label>
                      <input
                        type="text"
                        value={editingCustomContact.value}
                        onChange={(e) => setEditingCustomContact({ ...editingCustomContact, value: e.target.value })}
                        placeholder="مثلاً: info@ziaee.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">لینک جهت کلیک (اختیاری):</label>
                      <input
                        type="text"
                        value={editingCustomContact.link || ''}
                        onChange={(e) => setEditingCustomContact({ ...editingCustomContact, link: e.target.value })}
                        placeholder="https://... یا mailto:..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">انتخاب آیکون:</label>
                      <select
                        value={editingCustomContact.iconName || 'mail'}
                        onChange={(e) => setEditingCustomContact({ ...editingCustomContact, iconName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-purple-500"
                      >
                        <option value="mail">ایمیل (Mail)</option>
                        <option value="map">موقعیت مکانی (Map)</option>
                        <option value="globe">وبسایت / جهانی (Globe)</option>
                        <option value="phone">تلفن (Phone)</option>
                        <option value="send">تلگرام / پیام رسان (Send)</option>
                        <option value="instagram">اینستاگرام (Instagram)</option>
                        <option value="link">لینک عمومی (Link)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setEditingCustomContact(null)}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg text-slate-300"
                    >
                      انصراف
                    </button>
                    <button
                      onClick={() => {
                        const list = personalInfo.customContacts || [];
                        const exists = list.some((item) => item.id === editingCustomContact.id);
                        let newList;
                        if (exists) {
                          newList = list.map((item) => (item.id === editingCustomContact.id ? editingCustomContact : item));
                        } else {
                          newList = [...list, editingCustomContact];
                        }
                        setPersonalInfo({ ...personalInfo, customContacts: newList });
                        setEditingCustomContact(null);
                        showToast('اطلاعات تماس ذخیره شد');
                      }}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-xs font-bold rounded-lg text-white"
                    >
                      ذخیره آیتم تماس
                    </button>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};
