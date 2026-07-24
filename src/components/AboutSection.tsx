import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Zap, Shield, HeartHandshake, Code, Bot, Globe, Palette, ArrowLeft, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SERVICES_DATA, TESTIMONIALS_DATA } from '../data/portfolioData';
import { PersonalInfo, Service, Testimonial, ThemeMode } from '../types';

interface AboutSectionProps {
  theme: ThemeMode;
  onOrderService?: (serviceTitle: string) => void;
  personalInfo?: PersonalInfo;
  services?: Service[];
  testimonials?: Testimonial[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  theme,
  onOrderService,
  personalInfo = PERSONAL_INFO,
  services = SERVICES_DATA,
  testimonials = TESTIMONIALS_DATA,
}: AboutSectionProps) => {
  const testimonialsList = testimonials && testimonials.length > 0 ? testimonials : TESTIMONIALS_DATA;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    if (testimonialsList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsList.length]);

  const activeIndex = currentTestimonialIndex >= testimonialsList.length ? 0 : currentTestimonialIndex;
  const currentItem = testimonialsList[activeIndex];
  const principles = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'سرعت و عملکرد فوق‌العاده',
      description: 'کدنویسی استاندارد، بهینه‌سازی فنی سئو و زمان بارگذاری زیر ۱.۵ ثانیه.'
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-500" />,
      title: 'رابط کاربری مدرن (UI/UX)',
      description: 'طراحی اختصاصی بدون قالب آماده، با تم بنفش و انیمیشن‌های نرم.'
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: 'امنیت و پایداری بالا',
      description: 'پیاده‌سازی لایه‌های امنیتی در سایت‌های وردپرسی و ربات‌های تلگرام.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-500" />,
      title: 'پشتیبانی واقعی و متعهدانه',
      description: 'همراهی با شما پس از تحویل پروژه برای رفع هرگونه سوال و بروزرسانی.'
    }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-purple-500" />;
      case 'Bot': return <Bot className="w-6 h-6 text-amber-500" />;
      case 'Globe': return <Globe className="w-6 h-6 text-indigo-500" />;
      case 'Palette': return <Palette className="w-6 h-6 text-rose-500" />;
      default: return <Sparkles className="w-6 h-6 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Title */}
      <div>
        <h2 className={`text-2xl sm:text-3xl font-black article-title-accent mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          درباره من
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {personalInfo.aboutBio}
        </p>
      </div>

      {/* Key Quick Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'پروژه موفق تحویل‌شده', value: personalInfo.completedProjects, color: 'text-amber-500' },
          { label: 'رضایت مشتریان', value: personalInfo.satisfactionRate, color: 'text-purple-500' },
          { label: 'سابقه کار تخصصی', value: personalInfo.experienceYears, color: 'text-indigo-500' },
          { label: 'کیفیت و استاندارد', value: 'عالی (تضمینی)', color: 'text-emerald-500' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl border text-center transition-all ${
              theme === 'dark'
                ? 'bg-slate-900/60 border-purple-500/20'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <span className={`text-xl sm:text-2xl font-black font-english block mb-1 ${stat.color}`}>
              {stat.value}
            </span>
            <span className={`text-xs font-semibold ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* What I'm Doing Section (Services Overview) */}
      <div className="space-y-6">
        <h3 className={`text-xl font-bold flex items-center gap-2 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          <span className="w-2.5 h-6 bg-purple-600 rounded-full inline-block" />
          کاری که انجام می‌دهم (خدمات تخصصی)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-purple-500/20 hover:border-purple-500/40'
                  : 'bg-slate-50 border-slate-200 hover:border-purple-300 hover:bg-white shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    theme === 'dark' ? 'bg-slate-950 border-purple-500/20' : 'bg-white border-slate-200'
                  }`}>
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    {service.tag}
                  </span>
                </div>

                <h4 className={`text-lg font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {service.title}
                </h4>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-400">
                  تحویل سریع و تضمینی
                </span>

                {onOrderService && (
                  <button
                    onClick={() => onOrderService(service.title)}
                    className="flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <span>ثبت سفارش</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Guiding Principles Cards */}
      <div className="space-y-6">
        <h3 className={`text-xl font-bold flex items-center gap-2 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          <span className="w-2.5 h-6 bg-amber-500 rounded-full inline-block" />
          اصول کاری و استانداردهای 0003
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/40 border-purple-500/20'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className={`text-sm font-bold mb-1.5 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {item.title}
              </h4>
              <p className={`text-xs leading-relaxed ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Review Cards - Single Row Slider (Auto 5s) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className={`text-xl font-bold flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            <span className="w-2.5 h-6 bg-purple-600 rounded-full inline-block" />
            نظرات مشتریان و رضایت کارهای قبلی
          </h3>

          {/* Slide Indicator Dots */}
          {testimonialsList.length > 1 && (
            <div className="flex items-center gap-1.5">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-6 bg-purple-500'
                      : theme === 'dark'
                      ? 'w-1.5 bg-slate-700'
                      : 'w-1.5 bg-slate-300'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {currentItem && (
          <div className="relative overflow-hidden min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id || activeIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-2xl border flex flex-col justify-between shadow-sm ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-purple-500/20'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(currentItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                      {currentItem.projectType}
                    </span>
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed mb-6 italic ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    "{currentItem.comment}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={currentItem.avatar}
                      alt={currentItem.name}
                      className="w-10 h-10 rounded-full object-cover border border-purple-500/30"
                    />
                    <div>
                      <h5 className={`text-sm font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {currentItem.name}
                      </h5>
                      <p className={`text-xs ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {currentItem.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-medium text-purple-400/80 bg-purple-500/10 px-2.5 py-1 rounded-md">
                    {activeIndex + 1} از {testimonialsList.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

    </div>
  );
};

