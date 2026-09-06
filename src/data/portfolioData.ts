import { Project, Service, Testimonial, Skill, FAQItem, Masterpiece, BotServiceItem, AppItem, PersonalInfo } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'علی ضیائی',
  brand: '0003',
  tagline: 'طراحی سایت اختصاصی و وردپرس، توسعه اپلیکیشن (Kotlin/Java) و ربات تلگرام',
  phone: '09960826040',
  telegram: 'zerozerozerotreebot',
  telegramUrl: 'https://t.me/zerozerozerotreebot',
  instagram: 'team0003',
  instagramUrl: 'https://instagram.com/team0003',
  location: 'ایران',
  experienceYears: '+۴ سال',
  completedProjects: '+۶۰',
  satisfactionRate: '۹۹٪',
  aboutBio: `من علی ضیائی هستم؛ طراح و برنامه‌نویس وبسایت‌های اختصاصی و وردپرس، توسعه‌دهنده اپلیکیشن‌های بومی اندروید با کتلین (Kotlin) و جاوا (Java)، سازنده ربات‌های پیشرفته تلگرام و طراح هویت بصری (بنر و لوگو). فعالیت من تحت عنوان برند شخصی "0003" با تمرکز بر بالاترین کیفیت visual، سرعت ماکزیمم و عملکرد پایدار شکل گرفته است. در هر پروژه همراه شما هستم تا ایده‌تان را به یک محصول دیجیتال بی‌نقص تبدیل کنیم.`,
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

export const BOT_SERVICES_DATA: BotServiceItem[] = [
  {
    id: 'bs-upload',
    title: 'سرویس آپلود 0003',
    subtitle: 'آپلود نامحدود و دائمی فایل، تبدیل به لینک مستقیم پرسرعت',
    badge: 'سرویس ابری',
    description: 'سرویس و ربات تلگرام برای آپلود پرسرعت انواع فایل‌ها، ویدیوها و اسناد حجیم تا سقف ۲ گیگابایت با تولید آنی لینک مستقیم و بدون فیلتر، ماندگاری همیشگی فایل‌ها و قابلیت استریم مستقیم.',
    impactMetric: 'تا ۲ گیگ',
    impactLabel: 'حداکثر حجم هر فایل',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/zerozerozerotreebot',
    demoBtnText: 'ورود به ربات',
    orderBtnText: 'سفارش سرویس مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Python Asyncio', 'Telegram Bot API', 'S3 Storage', 'FastAPI', 'High-speed CDN'],
    keyInnovations: [
      'تولید خودکار لینک مستقیم پرسرعت و بدون انقضا',
      'پشتیبانی کامل از تمامی پسوندها و فرمت‌های صوتی و تصویری',
      'صف آپلود هوشمند و پایدار با آپتایم ۱۰۰٪',
      'محافظت از فایل‌ها با رمز عبور و لینک‌های امن اختصاصی'
    ],
    clientName: 'محصول و ساخته شخصی 0003'
  },
  {
    id: 'bs-qrcode',
    title: 'کیو ار کد ساز 0003',
    subtitle: 'تولید و اسکن کدهای QR اختصاصی، رنگی، لوگودار و وکتور',
    badge: 'ابزار کاربردی',
    description: 'ربات هوشمند ساخت انواع کیوآرکد پیشرفته با قابلیت درج لوگوی برند شخصی، پالت‌های رنگی سفارشی، ساخت QR برای اتصال سریع به وای‌فای، شماره کارت، کارت ویزیت VCard و لینک شبکه‌های اجتماعی.',
    impactMetric: 'فوق‌العاده آنی',
    impactLabel: 'تولید با کیفیت Ultra HD',
    image: 'https://images.unsplash.com/photo-1595079672139-545c0255a184?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/zerozerozerotreebot',
    demoBtnText: 'ورود به ربات',
    orderBtnText: 'سفارش سرویس مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Python', 'OpenCV / Pillow', 'Vector SVG Engine', 'Telegram Bot API'],
    keyInnovations: [
      'جاسازی لوگوی اختصاصی در کانون بارکد بدون خطای خوانش',
      'خروجی با وضوح برداری و فرمت‌های باکیفیت SVG, PNG و PDF',
      'پشتیبانی از قالب‌های آماده شبکه‌ها، پیامک، تماس و لوکیشن',
      'قابلیت اسکن و خواندن محتوای QR کد از روی عکس'
    ],
    clientName: 'محصول و ساخته شخصی 0003'
  },
  {
    id: 'bs-downloader',
    title: 'دانلود از همه جا 0003',
    subtitle: 'دانلودر همه‌کاره و پرسرعت شبکه‌های اجتماعی و پلتفرم‌های جهانی',
    badge: 'پرمخاطب‌ترین',
    description: 'ربات قدرتمند دریافت ویدیو، صوت و تصاویر با بالاترین کیفیت از اینستاگرام (پست، ریلز، استوری)، یوتیوب، تیک‌تاک بدون واترمارک، پینترست، ساندکلاد و توییتر تنها با ارسال لینک.',
    impactMetric: '۳۰+ پلتفرم',
    impactLabel: 'پشتیبانی از سایت‌های مطرح',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/zerozerozerotreebot',
    demoBtnText: 'ورود به ربات',
    orderBtnText: 'سفارش سرویس مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Python yt-dlp', 'FFmpeg Processing', 'Redis Queue', 'Telegram Bot API', 'High-Speed Proxy'],
    keyInnovations: [
      'حذف خودکار واترمارک و لوگوی اضافه ویدیوها',
      'امکان انتخاب دستی کیفیت از 1080p تا 4K و فایل صوتی MP3',
      'سرعت تبدیل و ارسال فوری بدون معطلی در صف سرور',
      'دریافت خودکار آلبوم‌ها و استوری‌های چندتایی اینستاگرام'
    ],
    clientName: 'محصول و ساخته شخصی 0003'
  },
  {
    id: 'bs-glass-btn',
    title: 'دکمه شیشه‌ای ساز 0003',
    subtitle: 'ساخت پیام‌های حرفه‌ای و پست‌های تبلیغاتی با دکمه شیشه‌ای اینلاین',
    badge: 'مخصوص ادمین‌ها',
    description: 'ابزار طراحی و ایجاد پست‌های جذاب تلگرامی مجهز به دکمه‌های شیشه‌ای چندردیفه، دکمه‌های بازشدن لینک، پاپ‌آپ هشدار، وب‌اپ و اشتراک‌گذاری برای مدیران کانال‌ها، گروه‌ها و بات‌ها.',
    impactMetric: 'نامحدود',
    impactLabel: 'چیدمان ردیف‌ها و دکمه‌ها',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/zerozerozerotreebot',
    demoBtnText: 'ورود به ربات',
    orderBtnText: 'سفارش سرویس مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Node.js', 'Telegram Inline Engine', 'MarkdownV2 Parser', 'MongoDB'],
    keyInnovations: [
      'ویرایشگر ویژوال و پیش‌نمایش لحظه‌ای چیدمان دکمه‌ها قبل از انتشار',
      'پشتیبانی از دکمه‌های ترکیبی (لینک، بازفوروارد، آلرت، وب‌اپ)',
      'ارسال مستقیم پیام نهایی به کانال‌های مقصد بدون برچسب فوروارد',
      'امکان ثبت و ذخیره قالب‌های آماده برای استفاده‌های بعدی'
    ],
    clientName: 'محصول و ساخته شخصی 0003'
  },
  {
    id: 'bs-currency',
    title: 'قیمت لحظه‌ای ارز 0003',
    subtitle: 'استعلام آنی نرخ دلار، تتر، طلا، سکه، رمزارزها و بازارهای مالی',
    badge: 'آپدیت لحظه‌ای',
    description: 'سیستم اتوماسیون مانیتورینگ نرخ‌های بازارهای مالی ایران و جهان با قابلیت تنظیم آلارم تغییر قیمت، نمودار مقایسه‌ای نوسانات، محاسبه‌گر دقیق تبدیل ارز و اخبار فوری اقتصادی.',
    impactMetric: 'هر ۵ ثانیه',
    impactLabel: 'همگام‌سازی با صرافی‌ها',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/zerozerozerotreebot',
    demoBtnText: 'ورود به ربات',
    orderBtnText: 'سفارش سرویس مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Python Asyncio', 'WebSockets', 'Nobitex & Binance API', 'Matplotlib / Chart Engine', 'Redis'],
    keyInnovations: [
      'دریافت نرخ مستقیم از منابع رسمی بدون کوچک‌ترین تاخیر زمانی',
      'تنظیم آلارم هوشمند و ارسال اخطار هنگام نوسانات شدید قیمتی',
      'رسم خودکار نمودارهای شمعی (کندل‌استیک) روزانه و هفتگی',
      'ماشین حساب تبدیل خودکار مقادیر ریالی، دلاری و تتر'
    ],
    clientName: 'محصول و ساخته شخصی 0003'
  },
  {
    id: 'bs-tempmail',
    title: 'فیک ایمیل 0003',
    subtitle: 'تولید ایمیل موقت و یکبارمصرف با صندوق دریافت (اینباکس) فوری',
    badge: 'حفظ امنیت',
    description: 'ربات تلگرامی ایجاد سریع صندوق‌های ایمیل موقت و ناشناس جهت ثبت‌نام امن در وبسایت‌ها، دریافت فوری کدهای فعال‌سازی و تاییدیه، و جلوگیری از پر شدن ایمیل اصلی شما با هرزنامه‌ها.',
    impactMetric: 'صفر ثانیه',
    impactLabel: 'دریافت بلادرنگ ایمیل‌ها',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://t.me/zerozerozerotreebot',
    demoBtnText: 'ورود به ربات',
    orderBtnText: 'سفارش سرویس مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Node.js / Express', 'IMAP & SMTP Webhooks', 'Temp Mail Engine', 'Telegram Bot API'],
    keyInnovations: [
      'تولید نامحدود ایمیل‌های تصادفی یا با پیشوند و نام دلخواه کاربر',
      'فوروارد خودکار و فوری متن و فایل‌های ضمیمه ایمیل به چت تلگرام',
      'عدم ذخیره‌سازی داده‌ها جهت تضمین ۱۰۰٪ امنیت و حریم خصوصی',
      'امکان تمدید اعتبار و نگهداری آدرس ایمیل برای دریافت مجدد'
    ],
    clientName: 'محصول و ساخته شخصی 0003'
  }
];

export const APPS_DATA: AppItem[] = [
  {
    id: 'app-music-0003',
    title: 'موزیک پلیر 0003',
    subtitle: 'پلیر صوتی پیشرفته و مدرن اندروید توسعه‌داده‌شده با کتلین (Kotlin Native)',
    badge: 'پروژه شخصی',
    description: 'اپلیکیشن موزیک پلیر سبک، سریع و آفلاین با رابط کاربری نئومورفیک دارک/لایت، اکولایزر گرافیکی ۱۰ بانده با تقویت بیس (Bass Boost)، شناسایی خودکار آلبوم‌ها و همگام‌سازی اشعار ترانه (Synced Lyrics).',
    impactMetric: 'کیفیت HD',
    impactLabel: 'پخش بدون افت کیفیت و کم‌مصرف',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    downloadUrl: 'https://chat0003.ir/apps/music-player-0003.apk',
    downloadBtnText: 'دانلود برنامه',
    orderBtnText: 'سفارش برنامه مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Kotlin Native', 'Jetpack Compose', 'ExoPlayer / Media3', 'Room DB', 'Audio Effects FX', 'Material 3'],
    keyInnovations: [
      'اکولایزر حرفه‌ای با افکت‌های مجازی‌ساز سه‌بعدی و تقویت صدا',
      'تغییر پویای تم و رنگ رابط کاربری بر اساس کاور موزیک در حال پخش',
      'پشتیبانی جامع از تمام فرمت‌های صوتی (FLAC, MP3, WAV, AAC, OGG)',
      'تایمر خواب هوشمند و بهینه‌سازی حداکثری برای جلوگیری از مصرف باتری در پس‌زمینه'
    ],
    clientName: 'محصول و ساخته شخصی'
  },
  {
    id: 'app-downloader-0003',
    title: 'دانلودر 0003',
    subtitle: 'دانلود منیجر چندرشته‌ای پرسرعت با کتلین و جاوا (Multi-thread Engine)',
    badge: 'پروژه شخصی',
    description: 'ابزار قدرتمند مدیریت و افزایش سرعت دانلود در اندروید مجهز به موتور چندتکه‌ای، مرورگر اختصاصی کاوشگر رسانه برای تشخیص آنی لینک‌های دانلود ویدیو و موزیک، و سیستم از سرگیری (Resume) هوشمند.',
    impactMetric: 'تا ۵ برابر',
    impactLabel: 'شتاب‌دهنده سرعت دانلود',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
    downloadUrl: 'https://chat0003.ir/apps/downloader-0003.apk',
    downloadBtnText: 'دانلود برنامه',
    orderBtnText: 'سفارش برنامه مشابه',
    orderBtnUrl: 'https://t.me/zerozerozerotreebot',
    technologies: ['Kotlin & Java', 'OkHttp 4 Engine', 'Foreground Service', 'Coroutines', 'SQLite DB', 'Material Design 3'],
    keyInnovations: [
      'تقسیم هوشمند فایل به چندین کانکشن موازی جهت دستیابی به حداکثر پهنای باند',
      'شناسایی آنی و خودکار لینک‌های دانلود در کلیپ‌بورد گوشی و مرورگر',
      'پایداری کامل و قابلیت Resume در صورت قطعی اینترنت یا بستن برنامه',
      'دسته‌بندی خودکار فایل‌های دریافتی بر اساس نوع (ویدیو، آهنگ، نرم‌افزار، اسناد)'
    ],
    clientName: 'محصول و ساخته شخصی'
  }
];

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
    demoUrl: 'https://t.me/zerozerozerotreebot',
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
    demoUrl: 'https://t.me/zerozerozerotreebot',
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
    demoUrl: 'https://t.me/zerozerozerotreebot',
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
    id: 'p-bank',
    title: 'وبسایت معرفی و لندینگ پیج خدمات بانکی و نئوبانک',
    category: 'web',
    categoryName: 'طراحی وب اختصاصی',
    description: 'طراحی مدرن لندینگ پیج خدمات بانکی با محاسبه‌گر اقساط وام، سپرده‌ها و پیشخوان دیجیتال.',
    fullDetails: 'طراحی و پیاده‌سازی کامل پرتال لندینگ معرفی خدمات بانکی مدرن با رابط کاربری فین‌تک و دارک مود، معرفی کارت‌های اعتباری، سپرده‌ها و تسهیلات، سیستم تعاملی محاسبه سود و اقساط وام، امنیت بصری و انیمیشن‌های بسیار روان.',
    features: [
      'محاسبه‌گر تعاملی سود سپرده و اقساط تسهیلات بانکی',
      'معرفی مدرن خدمات همراه بانک و افتتاح حساب آنلاین',
      'طراحی ریسپانسیو اختصاصی با استانداردهای امنیتی و فین‌تک',
      'سرعت بارگذاری فوق‌العاده بالا و ساختار سئو شده',
      'انیمیشن‌های جذاب و تجربه کاربری (UX) استاندارد'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vite'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/bank/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'پروژه لندینگ بانکی',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-abzar',
    title: 'فروشگاه تخصصی ابزارآلات و تجهیزات صنعتی',
    category: 'wordpress',
    categoryName: 'وردپرس / ووکامرس',
    description: 'طراحی فروشگاه اینترنتی جامع ابزار با قالب وردپرسی اختصاصی، فیلتر پیشرفته محصولات و درگاه پرداخت آنلاین.',
    fullDetails: 'طراحی و پیاده‌سازی فروشگاه آنلاین ابزارآلات صنعتی و ساختمانی بر پایه وردپرس و ووکامرس؛ دارای مگامنوی دسته‌بندی ابزارآلات، فیلتر هوشمند برند و توان فنی، جدول مشخصات کالا و بهینه‌سازی سرعت بارگذاری.',
    features: [
      'فیلتر پیشرفته محصولات بر اساس برند، توان و نوع کاربرد',
      'مگامنوی تخصصی ابزارآلات برقی، شارژی، بادی و دستی',
      'اتصال به درگاه‌های پرداخت شتاب و سیستم پیامکی ثبت سفارش',
      'سرعت لود بسیار بالا با کش پیشرفته و رعایت اصول سئو',
      'طراحی کاملاً واکنش‌گرا و سازگار با موبایل'
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom PHP', 'CSS3/Tailwind'],
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/abzar/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'فروشگاه ابزار صنعت',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-eldorado',
    title: 'وبسایت کاتالوگ و معرفی نمایشگاه مبلمان الدورادو',
    category: 'web',
    categoryName: 'طراحی وب / کاتالوگ آنلاین',
    description: 'طراحی لوکس و اختصاصی وبسایت گالری مبلمان با شوروم آنلاین، آلبوم محصولات باکیفیت و استعلام قیمت.',
    fullDetails: 'طراحی وبسایت معرفی و شوروم آنلاین گالری مبلمان الدورادو با طراحی مینیمال و باشکوه، گالری تصاویر ست‌های مبل و سرویس خواب با وضوح بالا، معرفی شعبات و فرم مشاوره آنلاین دکوراسیون.',
    features: [
      'گالری بصری لوکس با نمایش جزئیات ست‌های مبلمان و ناهارخوری',
      'دسته‌بندی هوشمند محصولات (مدرن، کلاسیک، نئوکلاسیک، راحتی)',
      'سیستم ثبت درخواست مشاوره و استعلام قیمت آنلاین',
      'بخش معرفی شعبات و مسیریابی نمایشگاه‌ها',
      'انیمیشن‌های لطیف و تایپوگرافی چشم‌نواز با تم لوکس'
    ],
    technologies: ['React / HTML5', 'Tailwind CSS', 'Framer Motion', 'Lightbox'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/eldorado/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'گالری مبلمان الدورادو',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-imantak',
    title: 'وبسایت شرکتی، هلدینگ و معرفی خدمات ایمان تک',
    category: 'web',
    categoryName: 'طراحی وب شرکتی',
    description: 'طراحی مدرن وبسایت رسمی شرکتی با معرفی پروژه‌ها، دپارتمان‌ها، تیم مدیریتی و فرم مشاوره اختصاصی.',
    fullDetails: 'طراحی و توسعه وبسایت شرکتی و سازمانی ایمان تک با ساختار چندبخشی رسمی، بخش معرفی دپارتمان‌ها و هیئت مدیره، گزارش عملکرد، تاریخچه شرکت و گالری پروژه‌های انجام‌شده با انیمیشن‌های روان سازمانی.',
    features: [
      'صفحه اختصاصی معرفی دپارتمان‌ها و ساختار سازمانی شرکت',
      'گالری پروژه‌ها و رزومه کاری به همراه شاخص‌های کلیدی موفقیت',
      'فرم هوشمند درخواست همکاری و مشاوره شرکتی',
      'طراحی ریسپانسیو و بهینه‌شده برای تمامی نمایشگرها',
      'سرعت بارگذاری بالا و کدنویسی بهینه طبق استانداردهای وب سازمانی'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Lucide Icons', 'Vite'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/imantak/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'شرکت ایمان تک',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-toys',
    title: 'فروشگاه آنلاین و اسباب‌بازی‌فروشی دنیای کودک',
    category: 'web',
    categoryName: 'فروشگاه اینترنتی',
    description: 'طراحی شاد، جذاب و کاربرپسند فروشگاه اسباب‌بازی با دسته‌بندی سنی، سبد خرید و فیلتر تفکیک‌شده.',
    fullDetails: 'طراحی فروشگاه اینترنتی اسباب‌بازی و سرگرمی با پالت رنگی شاد و تعاملی، فیلتر محصولات بر اساس رده سنی (نوزاد، کودک، نوجوان)، دسته‌بندی بر اساس بازی‌های فکری، لگو، عروسک و ماشین، با سرعت و تجربه کاربری لذت‌بخش برای والدین.',
    features: [
      'فیلتر پیشرفته هوشمند بر اساس رده سنی کودک و نوع اسباب‌بازی',
      'رابط کاربری شاد، رنگارنگ و دوست‌داشتنی برای خانواده‌ها',
      'نمایش وضعیت موجودی کالا و برچسب‌های تخفیف شگفت‌انگیز',
      'سبد خرید سریع و فرآیند ثبت سفارش آسان در چند ثانیه',
      'سازگاری کامل با تلفن همراه و تبلت'
    ],
    technologies: ['React / HTML5', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/toys/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'فروشگاه توی لند',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-dr',
    title: 'سامانه نوبت‌دهی آنلاین مطب و کلینیک پزشک',
    category: 'web',
    categoryName: 'طراحی وب / خدمات پزشکی',
    description: 'سامانه هوشمند رزرو وقت ویزیت پزشک با انتخاب روز و ساعت، پرونده سلامت و یادآور پیامکی.',
    fullDetails: 'طراحی پلتفرم جامع رزرو نوبت پزشکان با تقویم هوشمند نوبت‌دهی، انتخاب تخصص و خدمات درمانی، ارسال پیامک تایید نوبت، پنل مدیریت بیماران و سوابق نوبت‌ها، با محیطی آرامش‌بخش، تمیز و استاندارد حوزه سلامت.',
    features: [
      'تقویم تعاملی انتخاب روز و ساعت دقیق ویزیت',
      'تفکیک خدمات پزشکی، کلینیکی و پاراکلینیکی',
      'سیستم ارسال خودکار پیامک یادآوری نوبت به بیمار',
      'طراحی ریسپانسیو و دسترسی سریع سالمندان و بیماران',
      'فرم ثبت مشخصات بیمار و علت مراجعه'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Lucide Icons', 'Vite'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/dr/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'کلینیک تخصصی دکتر سلامت',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-edu',
    title: 'پلتفرم آکادمی و دوره‌های رایگان آموزشی دینا',
    category: 'web',
    categoryName: 'طراحی وب آموزشی',
    description: 'سایت آموزشی مدرن ویژه ارائه رایگان دوره‌های مهارتی، ویدیو پلیر آنلاین، سرفصل دروس و آزمون.',
    fullDetails: 'طراحی پلتفرم آموزش آنلاین دینا با محوریت ارائه دوره‌های رایگان و ارتقای مهارت، دارای ویدیو پلیر اختصاصی، نمایش سرفصل و دقایق آموزشی هر جلسه، دانلود فایل‌های ضمیمه دوره، پروفایل پیشرفت تحصیلی دانشجو و نظرات کاربران.',
    features: [
      'دسته‌بندی جامع دوره‌های آموزشی مهارتی و تخصصی رایگان',
      'پلیر اختصاصی ویدیو با کنترل کیفیت و سرعت پخش',
      'سرفصل‌بندی جلسات و فایل‌های تمرینی قابل دانلود',
      'نشانگر درصد پیشرفت تحصیلی و اتمام دوره',
      'بخش پرسش و پاسخ دانشجویان و استاد'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vite'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/edu/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'آموزشگاه آنلاین دینا',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-food',
    title: 'منوی دیجیتال QR و سفارش آنلاین رستوران و کافه',
    category: 'web',
    categoryName: 'منوی دیجیتال / رستورانی',
    description: 'منوی هوشمند کیوآرکد رستوران با دسته‌بندی غذاها، پیش‌غذا، نوشیدنی، تصاویر اشتها‌آور و ثبت سفارش سر میز.',
    fullDetails: 'طراحی سامانه منوی دیجیتال تعاملی ویژه رستوران‌ها، کافه‌ها و فودکورت‌ها؛ باز شدن سریع با اسکن کد QR بدون نیاز به نصب اپلیکیشن، دسته‌بندی غذاهای اصلی، پیش‌غذا، نوشیدنی و دسر، نمایش کالری، ترکیبات غذا و ثبت سفارش مستقیم.',
    features: [
      'اسکن سریع با بارکد QR سر میز و لود آنی زیر ۱ ثانیه',
      'تفکیک هوشمند دسته‌ها (غذای ایرانی، فرنگی، فست‌فود، بار گرم و سرد)',
      'نمایش قیمت به‌روز، ترکیبات و تصاویر باکیفیت و اشتهاآور',
      'سیستم ثبت سفارش سر میز و فراخوانی گارسون',
      'طراحی دارک/لایت لوکس و متناسب با فضای رستوران'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/food/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'مجموعه رستوران‌های گرند',
    rating: 5,
    featured: true,
  },
  {
    id: 'p-time',
    title: 'سامانه ساعت جهانی، تقویم و مبدل تاریخ آنلاین',
    category: 'web',
    categoryName: 'ابزار وب و کاربردی',
    description: 'ابزار دقیق نمایش ساعت زنده پایتخت‌های جهان، تقویم شمسی/میلادی/قمری و تبدیل آنی تاریخ.',
    fullDetails: 'طراحی ابزار تخصصی زمان و تقویم با ساعت دیجیتال و آنالوگ دقیق زنده، مقایسه تایم‌زون‌های بین‌المللی، تبدیل بدون خطای تاریخ‌های شمسی، میلادی و هجری قمری، نمایش مناسبت‌های روز و اوقات شرعی با انیمیشن عقربه‌ای روان.',
    features: [
      'نمایش زنده ساعت رسمی پایتخت‌ها و شهرهای مهم جهان',
      'تبدیل سریع و دوطرفه تاریخ شمسی، میلادی و قمری',
      'تقویم ماهانه همراه با رویدادها و تعطیلات رسمی',
      'نمایش تایمر، استاپ‌واچ و اوقات شرعی دقیق',
      'رابط کاربری مدرن، مینیمال و فوق‌العاده سبک'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Intl API', 'Vite'],
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://chat0003.ir/time/dist',
    demoBtnText: 'مشاهده دمو',
    telegramLink: 'https://t.me/zerozerozerotreebot',
    clientName: 'سامانه تایم اند دیت',
    rating: 5,
    featured: true,
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web_wp',
    title: 'طراحی سایت اختصاصی و وردپرس',
    description: 'طراحی و توسعه وبسایت‌های مدرن فرانت‌اند اختصاصی (React/Tailwind) و سایت‌های قدرتمند وردپرس و ووکامرس؛ بهینه‌سازی سرعت، امنیت بالا و سئوی فنی.',
    iconName: 'Code',
    tag: 'مدرن و قدرتمند',
    features: [
      'طراحی اختصاصی با React، TypeScript و استایل‌های مدرن نئونی',
      'راه‌اندازی و سفارشی‌سازی پیشرفته وردپرس و فروشگاه ووکامرس',
      'سرعت بارگذاری فوق‌العاده بالا و بهینه‌سازی سئو (GTmetrix Grade A)',
      'تأمین امنیت کامل، لایه‌های ضد هک و گواهی SSL',
      'طراحی کاملاً واکنش‌گرا (Responsive) و پنل مدیریت فارسی آسان'
    ]
  },
  {
    id: 'app',
    title: 'طراحی و توسعه اپلیکیشن موبایل',
    description: 'برنامه‌نویسی و ساخت اپلیکیشن‌های حرفه‌ای و بومی اندروید با کتلین (Kotlin) و جاوا (Java) با معماری مدرن، سرعت بالا و ظاهر شیک.',
    iconName: 'Smartphone',
    tag: 'کتلین و جاوا (Native)',
    features: [
      'برنامه‌نویسی Native اندروید با زبان‌های کاتلین (Kotlin) و جاوا (Java)',
      'پیاده‌سازی معماری تمیز مدرن (MVVM) و رابط کاربری متریال دیزاین',
      'اتصال به انواع وب‌سرویس و Restful API و پایگاه‌داده محلی (Room / SQLite)',
      'طراحی رابط کاربری روان و بهینه‌سازی مصرف باتری و رم',
      'خروجی استاندارد با کمترین حجم، آماده انتشار در کافه بازار و مایکت'
    ]
  },
  {
    id: 'bot',
    title: 'توسعه ربات هوشمند تلگرام',
    description: 'ساخت ربات‌های کاربردی، فروشگاهی، مدیریت گروه و کانال، ثبت سفارش، اتصال به درگاه پرداخت و وب‌سایت شما.',
    iconName: 'Bot',
    tag: 'اتوماسیون هوشمند',
    features: [
      'اتصال به درگاه‌های پرداخت بانکی شتابی و کریپتو',
      'پنل مدیریت حرفه‌ای درون تلگرام با آمار دقیق',
      'سیستم احراز هویت و قفل کانال اجباری',
      'امکان اتصال به دیتابیس و وب‌سایت',
      'پشتیبانی و آپتایم ۹۹.۹٪ روی سرور اختصاصی'
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
  { name: 'طراحی سایت اختصاصی و وردپرس (React / WordPress / Tailwind)', level: 96, category: 'web' },
  { name: 'برنامه‌نویسی اپلیکیشن اندروید (Kotlin / Java / Native)', level: 92, category: 'app' },
  { name: 'توسعه ربات هوشمند تلگرام (Python / Node.js)', level: 91, category: 'bot' },
  { name: 'طراحی رابط کاربری و گرافیک (Figma / Photoshop)', level: 88, category: 'design' },
  { name: 'بهینه‌سازی سرعت، امنیت و سئوی تکنیکال', level: 94, category: 'web' },
  { name: 'طراحی بنر تبلیغاتی و هویت بصری برند و لوگو', level: 90, category: 'design' },
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
    answer: 'شما می‌توانید از طریق فرم تماس در همین سایت، یا مستقیماً از طریق تلگرام (zerozerozerotreebot@) یا تماس تلفنی با شماره 09960826040 با من در ارتباط باشید تا پس از بررسی جزئیات، زمان و هزینه دقیق تقدیم حضورتان شود.'
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
