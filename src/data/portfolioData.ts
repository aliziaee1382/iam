import { Project, Service, Testimonial, Skill, FAQItem, Masterpiece, PersonalInfo } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'علی ضیائی',
  brand: '0003',
  tagline: 'طراح وبسایت، توسعه‌دهنده ربات تلگرام و دیزاینر گرافیک',
  phone: '09960826040',
  telegram: 'ali_ziaee1382',
  telegramUrl: 'https://t.me/ali_ziaee1382',
  instagram: 'Ali_ziaee1382',
  instagramUrl: 'https://instagram.com/Ali_ziaee1382',
  location: 'ایران',
  experienceYears: '+۴ سال',
  completedProjects: '+۶۰',
  satisfactionRate: '۹۹٪',
  aboutBio: `من علی ضیائی هستم؛ توسعه‌دهنده و طراح فرانت‌اند وبسایت، سازنده ربات‌های پیشرفته تلگرامی، متخصص وردپرس و طراح گرافیک (بنر و لوگو). فعالیت من با هدف ارائه محصولات نرم‌افزاری و دیجیتال با بالاترین کیفیت visual، عملکرد بی‌نقص و رابط کاربری بسیار مدرن شکل گرفته است. در هر پروژه تلاش می‌کنم تجربه کاربری فوق‌العاده‌ای خلق کنم.`,
  avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  statusText: 'آنلاین',
  customContacts: [
    {
      id: 'cc_loc',
      title: 'موقعیت مکانی',
      value: 'ایران (قبول پروژه آنلاین)',
      iconName: 'map'
    },
    {
      id: 'cc_status',
      title: 'وضعیت پذیرش سفارش',
      value: 'آماده پذیرش پروژه جدید',
      iconName: 'globe'
    }
  ]
};

export const MASTERPIECES_DATA: Masterpiece[] = [
  {
    id: 'm1',
    title: 'سیستم جامع ربات و پلتفرم VIP ارز دیجیتال',
    subtitle: 'شاهکار اتوماسیون تلگرام و وب',
    badge: 'پروژه پرچمدار',
    description: 'یک اکوسیستم کامل مدیریت کاربران VIP تلگرام با اتصال به درگاه پرداخت هوشمند، صدور خودکار سیگنال، احراز هویت پیامکی و ربات دستیار پیشرفته.',
    impactMetric: '۲۵,۰۰۰+',
    impactLabel: 'کاربر فعال ماهانه',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/ali_ziaee1382',
    technologies: ['React 19', 'Python Asyncio', 'PostgreSQL', 'Webhooks', 'Zarinpal API'],
    keyInnovations: [
      'پردازش پرداختی در زیر ۲ ثانیه',
      'مدیریت اتوماتیک دسترسی کانال‌های خصوصی',
      'داشبورد گزارش‌گیری مالی پیشرفته',
      'سیستم دعوت تعاملی و درآمدزایی شبکه'
    ],
    clientName: 'مجموعه سرمایه‌گذاری پرشیا'
  },
  {
    id: 'm2',
    title: 'فروشگاه لاکچری با عملکرد فوق‌العاده سریع',
    subtitle: 'طراحی فرانت‌اند نئونی و اختصاصی',
    badge: 'بهترین UI/UX سال',
    description: 'طراحی وبسایت فروشگاهی با استانداردهای جهانی، انیمیشن‌های سه‌بعدی و سرعت بارگذاری زیر ۸۰۰ میلی‌ثانیه برای ارائه تجربه خریدی لوکس.',
    impactMetric: 'کمتر از ۰.۸s',
    impactLabel: 'سرعت بارگذاری صفحه',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/ali_ziaee1382',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Node.js'],
    keyInnovations: [
      'انیمیشن‌های بدون افت فریم حتی روی گوشی‌های قدیمی',
      'پشتیبانی ارگونومیک از حالت شب و روز',
      'فیلتر آنی محصولات بدون رندر مجدد صفحه',
      'کدنویسی SEO-first با گواهینامه A+ از GTmetrix'
    ],
    clientName: 'برند مد و زیبایی لومیر'
  },
  {
    id: 'm3',
    title: 'پلتفرم اختصاصی آموزش آنلاین و آزمون‌ساز',
    subtitle: 'سیستم جامع وردپرس اختصاصی',
    badge: 'شاهکار کدنویسی',
    description: 'طراحی و پیاده‌سازی پلتفرم آموزشی پیشرفته بر پایه وردپرس اختصاصی با قابلیت پخش ویدیوهای محافظت‌شده، آزمون هوشمند و صدور مدرک دیجیتال.',
    impactMetric: '۱۰۰٪',
    impactLabel: 'کاهش دانلود غیرمجاز ویدیو',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/ali_ziaee1382',
    technologies: ['WordPress Core', 'WooCommerce API', 'Custom PHP', 'FFmpeg Encryption'],
    keyInnovations: [
      'واترمارک پویا روی ویدیوهای آموزشی',
      'صدور گواهی‌نامه اختصاصی با کد QR استعلام',
      'سیستم پرسش و پاسخ آنلاین استاد و دانشجو'
    ],
    clientName: 'آکادمی دانش نوین'
  }
];


export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'ربات فروشگاهی و مدیریت VIP تلگرام',
    category: 'bot',
    categoryName: 'ربات تلگرام',
    description: 'ربات هوشمند تلگرامی با اتصال به درگاه پرداخت مستقیم، پنل مدیریت پیشرفته و احراز هویت خودکار کاربران.',
    fullDetails: 'این ربات تلگرامی برای فروش اشتراک‌های ویژه و محصولات دیجیتال طراحی شده است. شامل سیستم کیف پول آنلاین، تولید لایسنس اختصاصی، گزارش‌گیری مالی در لحظه و ارسال پیام‌های همگانی هوشمند به کاربران است.',
    features: [
      'اتصال به درگاه‌های پرداخت ریالی و کریپتو',
      'پنل مدیریت حرفه‌ای درون تلگرام با آمار دقیق',
      'سیستم دعوت از دوستان (Referral) و دریافت پاداش',
      'ارسال اعلان اتوماتیک انقضای اشتراک',
      'پشتیبانی آنلاین و تیکتینگ درون ربات'
    ],
    technologies: ['Python', 'python-telegram-bot', 'SQLite/PostgreSQL', 'Webhooks', 'Zarinpal API'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    telegramLink: 'https://t.me/ali_ziaee1382',
    clientName: 'آکادمی رمزارز پرشیا',
    rating: 5,
    featured: true,
  },
  {
    id: 'p2',
    title: 'فروشگاه مدرن وردپرسی با بهینه‌سازی سرعت فوق‌العاده',
    category: 'wordpress',
    categoryName: 'وردپرس',
    description: 'طراحی قالب اختصاصی ووکامرس، سرعت بارگذاری زیر ۱.۵ ثانیه و UI بسیار شیک و مدرن.',
    fullDetails: 'طراحی و پیاده‌سازی وبسایت فروشگاهی حرفه‌ای بر پایه وردپرس و ووکامرس با ساختار کدنویسی تمیز، رعایت تمام استانداردهای سئو، سیستم جستجوی زنده (Ajax Search) و حالت شب و روز.',
    features: [
      'کاهش زمان بارگذاری به زیر ۱.۵ ثانیه (رتبه A در GTmetrix)',
      'سیستم فیلتر هوشمند محصولات بر اساس ویژگی‌ها',
      'طراحی کاملاً واکنش‌گرا (Responsive) و اپ‌گونه در موبایل',
      'اتصال اتوماتیک به پنل پیامک و درگاه‌های بانکی',
      'سئوی فنی و ساختاری استاندارد'
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom PHP', 'CSS3/Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    telegramLink: 'https://t.me/ali_ziaee1382',
    clientName: 'فروشگاه پوشاک لومیر',
    rating: 5,
    featured: true,
  },
  {
    id: 'p3',
    title: 'وبسایت شخصی و پورتفولیو دارک مود 0003',
    category: 'web',
    categoryName: 'طراحی وب اختصاصی',
    description: 'سایت تک‌صفحه‌ای مدرن با انیمیشن‌های فریمورک Motion، تم بنفش نئونی و سرعت بی‌نظیر.',
    fullDetails: 'طراحی فرانت‌اند اختصاصی با React و Tailwind CSS، دارای انیمیشن‌های بسار نرم، قابلیت سوییچ بین دارک‌مود و لایت‌مود، فرم سفارش هوشمند و محاسبه‌گر قیمت پروژه.',
    features: [
      'رابط کاربری مدرن بنفش با افکت‌های Glassmorphic',
      'پشتیبانی کامل از حالت‌های دارک مود و لایت مود',
      'محاسبه‌گر تعاملی و هوشمند قیمت سفارش',
      'انیمیشن‌های سیال با Motion',
      'طراحی RTL استاندارد'
    ],
    technologies: ['React 19', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript', 'Vite'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    telegramLink: 'https://t.me/ali_ziaee1382',
    clientName: 'علی ضیائی',
    rating: 5,
    featured: true,
  },
  {
    id: 'p4',
    title: 'پک برندینگ، لوگوی مدرن و بنرهای تبلیغاتی',
    category: 'graphic',
    categoryName: 'طراحی بنر و لوگو',
    description: 'طراحی لوگوی مینیمال، هویت بصری یکپارچه و بنرهای متحرک اینستاگرام و وب.',
    fullDetails: 'پکیج کامل طراحی هویت بصری برند شامل لوگو تایپ اختصاصی، پالت رنگی استاندارد، قالب پست و استوری اینستاگرام، و بنرهای تبلیغاتی کلیکی برای وبسایت‌ها.',
    features: [
      'لوگوی مینیمال و به یاد ماندنی با فایل‌های برداری (SVG/Vector)',
      'دفترچه راهنمای برند (Brandbook) کوچک',
      'بنرهای تبلیغاتی GIF و استاتیک با بالاترین نرخ کلیک',
      'کاورهای هایلایت و قالب‌های اختصاصی اینستاگرام'
    ],
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Motion Design'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
    telegramLink: 'https://t.me/ali_ziaee1382',
    clientName: 'برند استارت‌آپی تکنوتک',
    rating: 5,
    featured: true,
  },
  {
    id: 'p5',
    title: 'ربات تلگرام دانلودر هوشمند رسانه و موزیک',
    category: 'bot',
    categoryName: 'ربات تلگرام',
    description: 'ربات دانلود فوری از اینستاگرام، یوتیوب و پلتفرم‌های موزیک با قابلیت تبدیل فرمت.',
    fullDetails: 'ربات پرسرعت پردازش رسانه که لینک دریافت شده از کاربر را در چند ثانیه دانلود کرده و به همراه کاور، متادیتا و توضیحات تمیز تحویل می‌دهد.',
    features: [
      'دانلود با کیفیت‌های مختلف',
      'تبدیل ویدیو به ویس و موزیک',
      'سیستم قفل کانال برای افزایش ممبر (Force Join)',
      'سرعت بالای دانلود با سرور اختصاصی'
    ],
    technologies: ['Node.js', 'Telegram API', 'FFmpeg', 'Redis'],
    image: 'https://images.unsplash.com/photo-1614680376593-902f749f71c3?q=80&w=1000&auto=format&fit=crop',
    telegramLink: 'https://t.me/ali_ziaee1382',
    rating: 5,
  },
  {
    id: 'p6',
    title: 'وبسایت شرکتی و معرفی خدمات وردپرس',
    category: 'wordpress',
    categoryName: 'وردپرس',
    description: 'سایت شرکتی چندزبانه با پنل مدیریت بسیار آسان و فرم‌های مشاوره آنلاین.',
    fullDetails: 'پیاده‌سازی وبسایت شرکتی با امنیت بالا، بهینه‌سازی فرم‌های دریافت لید، جدول قیمت‌گذاری تعاملی و بخش وبلاگ اختصاصی.',
    features: [
      'طراحی فرم‌های جلب مشتری با قابلیت اتصال به ایمیل و پیامک',
      'سیستم امنیت سخت‌گیرانه وردپرس (Wordfence Config)',
      'صفحه درباره ما و نمونه‌کارهای گالری‌محور',
      'آموزش کامل ویدیویی کار با پنل برای کادر شرکت'
    ],
    technologies: ['WordPress', 'Elementor', 'WPML', 'Security Hardening'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    telegramLink: 'https://t.me/ali_ziaee1382',
    rating: 5,
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web',
    title: 'طراحی وبسایت اختصاصی',
    description: 'طراحی و ساخت وبسایت‌های فرانت‌اند مدرن، تک‌صفحه‌ای و چندصفحه‌ای با آخرین تکنولوژی‌های روز دنیا مانند React و Tailwind CSS.',
    iconName: 'Code',
    tag: 'مدرن و پرسرعت',
    features: [
      'طراحی کاملاً اختصاصی (بدون قالب آماده)',
      'سرعت بارگذاری فوق‌العاده بالینی (زیر ۱ ثانیه)',
      'انیمیشن‌های نرم و افکت‌های بصری خیره‌کننده',
      'واکنش‌گرا (Responsive) روی موبایل، تبلت و دسکتاپ',
      'کدنویسی تمیز و بهینه برای سئو'
    ]
  },
  {
    id: 'bot',
    title: 'توسعه ربات تلگرام',
    description: 'ساخت ربات‌های کاربردی، فروشگاهی، مدیریت گروه و کانال، ثبت سفارش، اتصال به درگاه پرداخت و وب‌سایت شما.',
    iconName: 'Bot',
    tag: 'اتوماسیون هوشمند',
    features: [
      'اتصال به درگاه‌های پرداخت بانکی و کریپتو',
      'پنل مدیریت حرفه‌ای درون تلگرام',
      'سیستم احراز هویت و قفل کانال اجباری',
      'امکان اتصال به دیتابیس و وب‌سایت',
      'پشتیبانی و آپتایم ۹۹.۹٪ روی سرور اختصاصی'
    ]
  },
  {
    id: 'wordpress',
    title: 'طراحی و مدیریت وردپرس',
    description: 'راه‌اندازی سایت‌های فروشگاهی، شرکتی، خبری و شخصی با وردپرس؛ بهینه‌سازی سرعت، امنیت و مدیریت کامل فنی.',
    iconName: 'Globe',
    tag: 'محبوب و انعطاف‌پذیر',
    features: [
      'طراحی قالب‌های جذاب با المنتور پرو',
      'راه‌اندازی فروشگاه ووکامرس و اتصال به درگاه',
      'بهینه‌سازی جدی سرعت (GTmetrix Grade A)',
      'تأمین امنیت کامل و ضد هک کردن وردپرس',
      'مدیریت محتوا، پشتیبان‌گیری منظم و بروزرسانی'
    ]
  },
  {
    id: 'graphic',
    title: 'طراحی بنر و لوگو',
    description: 'خلق لوگوهای خلاقانه و ماندگار، هویت بصری برند، بنرهای تبلیغاتی جذاب برای اینستاگرام و وبسایت‌ها.',
    iconName: 'Palette',
    tag: 'جذابیت بصری بالا',
    features: [
      'طراحی لوگوی مفهومی و مینیمال',
      'تحویل فایل‌های وکتور با کیفیت نامحدود (SVG/AI)',
      'طراحی بنرهای تبلیغاتی ثابت و GIF متحرک',
      'قالب‌های پست و استوری اینستاگرام',
      'رعایت کامل روانشناسی رنگ و اصول برندینگ'
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'طراحی فرانت‌اند (React / JS / HTML / CSS)', level: 95, category: 'web' },
  { name: 'توسعه ربات تلگرام (Python / Node.js)', level: 90, category: 'bot' },
  { name: 'وردپرس و ووکامرس (WooCommerce)', level: 92, category: 'wordpress' },
  { name: 'طراحی گرافیک (Photoshop / Figma)', level: 88, category: 'design' },
  { name: 'بهینه‌سازی سرعت و سئو فنی', level: 85, category: 'web' },
  { name: 'طراحی بنر و لوگو', level: 90, category: 'design' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'رضا محمدی',
    role: 'مدیر فروشگاه آنلاین پوشاک',
    projectType: 'وردپرس و ووکامرس',
    comment: 'آقای ضیائی واقعاً در کارشون استاد هستن. سرعت سایت فروشگاهی ما از ۸ ثانیه به زیر ۱.۵ ثانیه رسید و طراحی جدیدش فروش ما رو تقریباً دو برابر کرد!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 't2',
    name: 'امیرحسین کاظمی',
    role: 'بنیان‌گذار کانال‌های VIP کریپتو',
    projectType: 'ربات تلگرام اختصاصی',
    comment: 'ربات تلگرامی که برای ما ساختن بی‌نقص کار میکنه. تمام پرداخت‌ها اتوماتیک تایید میشه و عضویت VIP کاربرا خودکار تمدید میشه. پشتیبانی عالی 0003 هم حرف نداره.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 't3',
    name: 'سارا ابراهیمی',
    role: 'مدیر مارکتینگ استارت‌آپ',
    projectType: 'لوگو و طراحی فرانت‌اند',
    comment: 'طراحی بنرها و لوگوی شرکت ما فوق‌العاده مدرن و شیک شد. حس بنفش و تاریکی که برای وبسایتمون پیاده کردن دقیقاً همون چیزی بود که توی ذهنمون داشتیم.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'چگونه می‌توانم یک پروژه جدید سفارش دهم؟',
    answer: 'شما می‌توانید از طریق فرم تماس در همین سایت، یا مستقیماً از طریق تلگرام (ali_ziaee1382@) یا تماس تلفنی با شماره 09960826040 با من در ارتباط باشید تا پس از بررسی جزئیات، زمان و هزینه دقیق تقدیم حضورتان شود.'
  },
  {
    question: 'فرآیند و نحوه پرداخت به چه صورت است؟',
    answer: 'معمولاً ۵۰٪ مبلغ پروژه به عنوان پیش‌پرداخت در ابتدای کار و مابقی ۵۰٪ پس از تکمیل کامل پروژه، تست نهایی و تایید شما دریافت می‌شود.'
  },
  {
    question: 'آیا پروژه‌ها دارای پشتیبانی پس از تحویل هستند؟',
    answer: 'بله، تمامی پروژه‌های وبسایت، وردپرس و ربات‌های تلگرام شامل ۱ تا ۳ ماه پشتیبانی رایگان برای رفع هرگونه ایراد احتمالی و آموزش نحوه استفاده هستند.'
  },
  {
    question: 'طراحی یک سایت یا ربات تلگرام چقدر زمان می‌برد؟',
    answer: 'بستگی به حجم و امکانات پروژه دارد. معمولاً پروژه‌های ربات تلگرام و بنر بین ۳ تا ۷ روز کاری و سایت‌های اختصاصی و وردپرسی بین ۷ تا ۱۵ روز کاری تحویل داده می‌شوند.'
  }
];
