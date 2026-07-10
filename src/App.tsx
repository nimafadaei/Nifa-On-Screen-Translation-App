import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, Globe, Settings, Gamepad2, MessageSquare, 
  Languages, Sliders, Cpu, Zap, Sparkles, Info, ArrowRight,
  ShieldAlert, BookOpen, Layers, Palette
} from 'lucide-react';
import { SIMULATED_APPS, LANGUAGES } from './data';
import { AppScreen, TranslationMode, Language, AccessibilityNode } from './types';
import AndroidPhone from './components/AndroidPhone';
import DeveloperHub from './components/DeveloperHub';

export default function App() {
  // App states
  const [activeTheme, setActiveTheme] = useState<'appleGlass' | 'cyberpunk' | 'aurora' | 'monochrome' | 'emerald'>('appleGlass');
  const [activeApp, setActiveApp] = useState<AppScreen>(SIMULATED_APPS[0]);
  const [targetLang, setTargetLang] = useState<Language>(LANGUAGES[0]); // Default to Farsi
  const [translationMode, setTranslationMode] = useState<TranslationMode>('inline');
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanData, setHasScanData] = useState(false);
  const [showTouchVectors, setShowTouchVectors] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<AccessibilityNode | null>(null);
  const [flagNotTouchable, setFlagNotTouchable] = useState(false);
  const [overlayAnimation, setOverlayAnimation] = useState<'fade' | 'slide'>('fade');

  const themeStyles = {
    appleGlass: {
      name: 'سیستم لایه شیشه‌ای تاریک اپل (Apple Dark Liquid Glass)',
      bg: 'bg-[#090C15] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#131E3D] via-[#090C15] to-[#04050A]',
      card: 'bg-[#0E1325]/50 border-white/10 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.45)] border',
      border: 'border-white/10',
      borderFocus: 'border-[#007AFF]/60',
      headerBg: 'bg-[#0B0F20]/75 backdrop-blur-xl border-b border-white/5',
      accentText: 'text-[#0A84FF]',
      accentBg: 'bg-[#0A84FF]/10',
      accentBorder: 'border-[#0A84FF]/20',
      badge: 'bg-[#0A84FF]/15 text-[#0A84FF] border border-[#0A84FF]/25',
      textHeader: 'text-white',
      textMuted: 'text-slate-400',
      accentGlow: 'shadow-[0_4px_24px_rgba(10,132,255,0.3)]',
      btnPrimary: 'bg-gradient-to-b from-[#2F93FF] to-[#0A84FF] hover:from-[#1A80FF] hover:to-[#0066CC] text-white shadow-[0_6px_20px_rgba(10,132,255,0.25)] border-t border-white/15',
      accentHover: 'hover:border-[#0A84FF]/50 hover:text-[#0A84FF]',
      accentIcon: 'text-[#0A84FF]',
      btnActiveBorder: 'border-[#0A84FF] ring-2 ring-[#0A84FF]/20',
      tag: 'border-[#0A84FF]/20 text-[#0A84FF] bg-[#0A84FF]/8',
      terminalBg: 'bg-[#050811]/90 border-white/10',
      navActive: 'bg-gradient-to-b from-[#2F93FF] to-[#0A84FF] border-[#0A84FF] text-white shadow-[0_4px_16px_rgba(10,132,255,0.3)]'
    },
    cyberpunk: {
      name: 'سایبرپانک نئون (Cyberpunk Cyan)',
      bg: 'bg-[#060608]',
      card: 'bg-[#0E0E12] border-[#1A1A24]',
      border: 'border-[#1A1A24]',
      borderFocus: 'border-blue-500/50',
      headerBg: 'bg-[#0E0E12]',
      accentText: 'text-blue-400',
      accentBg: 'bg-blue-500/10',
      accentBorder: 'border-blue-500/20',
      badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      textHeader: 'text-white',
      textMuted: 'text-gray-400',
      accentGlow: 'shadow-[0_0_15px_rgba(59,130,246,0.25)]',
      btnPrimary: 'bg-gradient-to-tr from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      accentHover: 'hover:border-blue-500/40 hover:text-blue-300',
      accentIcon: 'text-blue-400',
      btnActiveBorder: 'border-blue-500 ring-2 ring-blue-500/10',
      tag: 'border-blue-500/25 text-blue-400 bg-blue-500/5',
      terminalBg: 'bg-[#09090D]',
      navActive: 'bg-blue-600 border-blue-500 text-white shadow-[0_4px_12px_rgba(59,130,246,0.2)]'
    },
    aurora: {
      name: 'اورورا ارکیده (Aurora Rose)',
      bg: 'bg-[#0C0A15]',
      card: 'bg-[#151026]/75 border-[#2E1E4F] backdrop-blur-xl',
      border: 'border-[#2E1E4F]',
      borderFocus: 'border-pink-500/50',
      headerBg: 'bg-[#151026]/80 backdrop-blur-xl',
      accentText: 'text-pink-400',
      accentBg: 'bg-pink-500/10',
      accentBorder: 'border-pink-500/20',
      badge: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
      textHeader: 'text-slate-100',
      textMuted: 'text-slate-400',
      accentGlow: 'shadow-[0_0_15px_rgba(236,72,153,0.25)]',
      btnPrimary: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]',
      accentHover: 'hover:border-pink-500/40 hover:text-pink-300',
      accentIcon: 'text-pink-400',
      btnActiveBorder: 'border-pink-500 ring-2 ring-pink-500/10',
      tag: 'border-pink-500/25 text-pink-400 bg-pink-500/5',
      terminalBg: 'bg-[#0F0A1B]',
      navActive: 'bg-gradient-to-r from-pink-500 to-rose-500 border-pink-500 text-white shadow-[0_4px_12px_rgba(236,72,153,0.2)]'
    },
    monochrome: {
      name: 'حداقل‌گرای اسکاندیناوی (Slate Minimal)',
      bg: 'bg-[#0C0C0D]',
      card: 'bg-[#141416] border-[#27272A]',
      border: 'border-[#27272A]',
      borderFocus: 'border-white/50',
      headerBg: 'bg-[#141416]',
      accentText: 'text-white',
      accentBg: 'bg-white/10',
      accentBorder: 'border-white/20',
      badge: 'bg-white/10 text-white border border-white/20',
      textHeader: 'text-white',
      textMuted: 'text-gray-500',
      accentGlow: 'shadow-[0_0_15px_rgba(255,255,255,0.15)]',
      btnPrimary: 'bg-white hover:bg-neutral-200 text-black shadow-lg font-medium',
      accentHover: 'hover:border-neutral-500 hover:text-white',
      accentIcon: 'text-white',
      btnActiveBorder: 'border-white ring-2 ring-white/10',
      tag: 'border-white/20 text-white bg-white/5',
      terminalBg: 'bg-[#0E0E0F]',
      navActive: 'bg-white border-white text-black font-semibold shadow-lg'
    },
    emerald: {
      name: 'شیشه‌ای زمردین (Emerald Glass)',
      bg: 'bg-[#030704]',
      card: 'bg-[#08150D]/90 border-[#12311D] backdrop-blur-md',
      border: 'border-[#12311D]',
      borderFocus: 'border-emerald-500/50',
      headerBg: 'bg-[#08150D]',
      accentText: 'text-emerald-400',
      accentBg: 'bg-emerald-500/10',
      accentBorder: 'border-emerald-500/20',
      badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      textHeader: 'text-emerald-100',
      textMuted: 'text-emerald-800/80',
      accentGlow: 'shadow-[0_0_15px_rgba(16,185,129,0.25)]',
      btnPrimary: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      accentHover: 'hover:border-emerald-500/40 hover:text-emerald-300',
      accentIcon: 'text-emerald-400',
      btnActiveBorder: 'border-emerald-500 ring-2 ring-emerald-500/10',
      tag: 'border-emerald-500/25 text-emerald-400 bg-emerald-500/5',
      terminalBg: 'bg-[#040905]',
      navActive: 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-500 text-black font-semibold shadow-[0_4px_12px_rgba(16,185,129,0.2)]'
    }
  };

  const currentTheme = themeStyles[activeTheme];
  
  // Custom user input state (Scratchpad App)
  const [scratchpadText, setScratchpadText] = useState(
    'Welcome! Type any custom English text here inside this smartphone.\nClick the floating translate button below to analyze and translate this screen cleanly.'
  );

  // Sync scratchpad node changes if user types custom text
  const [customAppScreen, setCustomAppScreen] = useState<AppScreen>({
    id: 'scratchpad',
    name: 'Custom Scratchpad',
    appName: 'Translator Scratchpad',
    iconName: 'Sparkles',
    statusBarColor: 'bg-violet-900 text-slate-100',
    backgroundColor: 'bg-slate-50 text-slate-800',
    nodes: [
      {
        id: 'scratchpad-input',
        text: scratchpadText,
        type: 'text',
        bounds: { top: 12, left: 6, width: 88, height: 25 },
        translations: {
          fa: 'خوش آمدید! هر متن انگلیسی دلخواهی را در این قسمت از تلفن همراه تایپ کنید. سپس روی دکمه شناور ترجمه کلیک کرده تا صفحه آنالیز و ترجمه شود.',
          es: '¡Bienvenido! Escribe cualquier texto en inglés aquí dentro de este teléfono. Haz clic en el botón flotante para traducir.',
          de: 'Willkommen! Schreiben Sie einen beliebigen englischen Text in dieses Smartphone. Klicken Sie auf den schwebenden Button für die Übersetzung.',
          ja: 'ようこそ！スマートフォンのここに英語のテキストを入力してください。下のフローティングボタンをクリックして翻訳します。',
        }
      },
      {
        id: 'scratchpad-footer',
        text: 'This simulates how live text input is parsed in real time.',
        type: 'header',
        bounds: { top: 45, left: 6, width: 88, height: 6 },
        translations: {
          fa: 'این بخش شبیه‌سازی می‌کند که چگونه ورودی متن زنده در لحظه تجزیه و تحلیل می‌شود.',
          es: 'Esto simula cómo se analiza el texto de entrada en tiempo real.',
          de: 'Dies simuliert, wie Live-Texteingaben in Echtzeit analysiert werden.',
          ja: 'これは、ライブテキスト入力がリアルタイムでどのように解析されるかをシミュレートします。',
        }
      }
    ]
  });

  // Track if custom app is active, and update its text nodes dynamically
  useEffect(() => {
    if (activeApp.id === 'scratchpad') {
      const updatedNodes = [...customAppScreen.nodes];
      updatedNodes[0].text = scratchpadText;
      
      // Let's create a dynamic mock translation for custom text
      // In a production app this would query Gemini on server.
      // For this sandbox we map common phrases, or perform a neat translation layout.
      let faTrans = 'متن سفارشی شما با موفقیت به فارسی ترجمه شد! این لایه ترجمه بدون مسدود کردن لمس یا اسکرول صفحه نمایش شما کار می‌کند.';
      if (scratchpadText.toLowerCase().includes('hello') || scratchpadText.toLowerCase().includes('welcome')) {
        faTrans = 'خوش آمدید! متن شما آنالیز شد. دکمه‌های سیار این لایه را طوری ترسیم کرده‌اند که ژست‌های کشیدن و ضربه به زیر لایه هدایت شوند.';
      }
      updatedNodes[0].translations.fa = faTrans;
      
      setCustomAppScreen(prev => ({
        ...prev,
        nodes: updatedNodes
      }));
    }
  }, [scratchpadText, activeApp.id]);

  // Handle switching apps
  const selectApp = (appId: string) => {
    setHasScanData(false);
    if (appId === 'scratchpad') {
      setActiveApp(customAppScreen);
    } else {
      const app = SIMULATED_APPS.find(a => a.id === appId);
      if (app) setActiveApp(app);
    }
  };

  // Trigger floating translate button click
  const handleScanTrigger = () => {
    if (isScanning) return;
    setIsScanning(true);
    setHasScanData(false);
    
    // Simulate Android Accessibility Node scanning & API call delay
    setTimeout(() => {
      setIsScanning(false);
      setHasScanData(true);
    }, 1800);
  };

  // Reset scan
  const handleResetScan = () => {
    setHasScanData(false);
    setIsScanning(false);
  };

  // Get app icon
  const getAppIcon = (iconName: string, size = 16) => {
    switch (iconName) {
      case 'Globe': return <Globe size={size} />;
      case 'Settings': return <Settings size={size} />;
      case 'Gamepad2': return <Gamepad2 size={size} />;
      case 'MessageSquare': return <MessageSquare size={size} />;
      case 'Sparkles': return <Sparkles size={size} />;
      default: return <Smartphone size={size} />;
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme.bg} text-gray-200 font-sans selection:bg-blue-600/30 selection:text-blue-200 transition-colors duration-300`}>
      
      {/* Premium Tech Header */}
      <header className={`border-b ${currentTheme.border} ${currentTheme.headerBg} sticky top-0 z-50 px-6 py-4 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${currentTheme.btnPrimary} flex items-center justify-center shadow-lg`}>
              <Languages className="text-white" size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-current ${currentTheme.accentText} ${currentTheme.accentGlow}`}></div>
                  PRISM TRANSLATE
                </h1>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full transition-all duration-300 ${currentTheme.badge}`}>
                  UX ENGINE V2.5
                </span>
              </div>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-0.5">
                ACCESSIBILITY PASS-THROUGH ANDROID SYSTEM SIMULATOR
              </p>
            </div>
          </div>

          {/* Quick Stats / Info */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className={`bg-black/30 border ${currentTheme.border} px-3 py-1.5 rounded-lg flex items-center gap-2`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-gray-400">SERVICE STATUS:</span>
              <span className="text-emerald-400 font-semibold">ACTIVE</span>
            </div>
            <div className={`hidden sm:flex bg-black/30 border ${currentTheme.border} px-3 py-1.5 rounded-lg items-center gap-2`}>
              <span className="text-gray-400">SIMULATION TIME:</span>
              <span className={`${currentTheme.accentText} font-semibold`}>12:45 UTC</span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Workspace */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Core Description Warning Alert */}
        <div className={`mb-8 ${currentTheme.card} rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-start transition-all duration-300`} style={{ direction: 'rtl' }}>
          <div className={`w-10 h-10 rounded-xl ${currentTheme.accentBg} flex items-center justify-center shrink-0`}>
            <Info size={20} className={currentTheme.accentText} />
          </div>
          <div className="flex-1 text-right" style={{ direction: 'rtl' }}>
            <h3 className="text-sm font-semibold text-white">پاسخ به چالش نمایش ترجمه و مسدود شدن صفحه گوشی</h3>
            <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
              کاربر گرامی، دغدغه شما در رابطه با <strong>نحوه نمایش ترجمه‌ها و مسدود شدن ژست‌های حرکتی صفحه</strong> بسیار هوشمندانه و کلیدی است. در این سنباکس تعاملی، ما شبیه‌سازی کرده‌ایم که چگونه یک برنامه اندروید می‌تواند با استفاده از <span className={currentTheme.accentText}>Accessibility Service</span> درخت متنی را خوانده و با پیاده‌سازی کارت‌های شیشه‌ای چرخشی (Flip)، پین‌های مینیمال (Pins) یا هاد کناری (HUD) مشکل مزاحمت بصری را برطرف کند. همچنین سورس کدهای دقیق کاتلین (Kotlin) را برای بازنویسی توزیع تاچ‌ها قرار داده‌ایم.
            </p>
          </div>
        </div>

        {/* Theme Vibe Customizer Selection Block */}
        <div className={`mb-8 p-5 rounded-2xl border transition-all duration-300 ${currentTheme.card}`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4" style={{ direction: 'rtl' }}>
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-xl ${currentTheme.accentBg} ${currentTheme.accentText}`}>
                <Palette size={20} />
              </div>
              <div className="text-right">
                <h3 className="text-sm font-semibold text-white">شخصی‌سازی سبک طراحی و پوسته کلی شبیه‌ساز (UI Theme & Vibe Selector)</h3>
                <p className="text-gray-400 text-[11px] mt-0.5">
                  شما می‌توانید پوسته، پالت رنگ و گرافیک کل صفحه را برای تطبیق با مدهای مدرن و شیک تغییر دهید.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Active Mode:</span>
              <span className={`text-[10px] px-2.5 py-0.5 rounded font-mono font-bold ${currentTheme.badge}`}>
                {activeTheme.toUpperCase()}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {(['appleGlass', 'cyberpunk', 'aurora', 'monochrome', 'emerald'] as const).map((t) => {
              const isActive = activeTheme === t;
              const style = themeStyles[t];
              return (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t)}
                  className={`p-3.5 rounded-xl border text-right flex flex-col justify-between h-20 transition-all duration-300 relative overflow-hidden group
                    ${isActive 
                      ? `${style.card} ring-2 ${style.borderFocus} shadow-lg` 
                      : 'bg-[#121216]/50 border-neutral-800/80 hover:border-neutral-700 hover:bg-[#181822]/40 text-gray-300'}
                  `}
                >
                  {/* Subtle color glow in corner */}
                  <div className={`absolute -right-3 -bottom-3 w-10 h-10 rounded-full blur-xl transition-opacity duration-300 opacity-30 group-hover:opacity-65
                    ${t === 'appleGlass' ? 'bg-[#007AFF]' : t === 'cyberpunk' ? 'bg-cyan-500' : t === 'aurora' ? 'bg-pink-500' : t === 'monochrome' ? 'bg-white' : 'bg-emerald-500'}
                  `} />
                  
                  <div className="flex justify-between items-center w-full">
                    <span className={`w-2.5 h-2.5 rounded-full
                      ${t === 'appleGlass' ? 'bg-[#007AFF] shadow-[0_0_8px_#007aff]' : 
                        t === 'cyberpunk' ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 
                        t === 'aurora' ? 'bg-pink-400 shadow-[0_0_8px_#f472b6]' : 
                        t === 'monochrome' ? 'bg-white shadow-[0_0_8px_#ffffff]' : 
                        'bg-emerald-400 shadow-[0_0_8px_#34d399]'}
                    `} />
                    <span className="text-[9px] text-gray-500 font-mono font-semibold uppercase">{t}</span>
                  </div>
                  
                  <span className={`text-xs font-semibold mt-auto z-10 transition-colors
                    ${isActive 
                      ? style.accentText 
                      : 'text-gray-300 group-hover:text-white'}
                  `}>
                    {style.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Smartphone Simulator Frame (Col span: 5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <AndroidPhone
              activeApp={activeApp.id === 'scratchpad' ? customAppScreen : activeApp}
              targetLang={targetLang}
              translationMode={translationMode}
              onScanTrigger={handleScanTrigger}
              isScanning={isScanning}
              hasScanData={hasScanData}
              onResetScan={handleResetScan}
              showTouchVectors={showTouchVectors}
              onHoverNode={setHoveredNode}
              hoveredNode={hoveredNode}
              flagNotTouchable={flagNotTouchable}
              overlayAnimation={overlayAnimation}
            />

            {/* Simulated Hard Buttons beneath phone for extra realism */}
            <div className="mt-4 w-[280px] h-10 bg-[#181818] rounded-2xl border border-[#333] p-1 flex justify-around items-center text-xs text-gray-400">
              <button 
                onClick={() => selectApp('chrome')}
                className={`hover:${currentTheme.accentText} transition-colors flex flex-col items-center gap-0.5`}
              >
                <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">◀</div>
                <span className="text-[8px]">Back</span>
              </button>
              <button 
                onClick={() => selectApp('settings')}
                className={`hover:${currentTheme.accentText} transition-colors flex flex-col items-center gap-0.5`}
              >
                <div className="w-4.5 h-3 border-2 border-current rounded-sm"></div>
                <span className="text-[8px]">Home</span>
              </button>
              <button 
                onClick={() => selectApp('scratchpad')}
                className={`hover:${currentTheme.accentText} transition-colors flex flex-col items-center gap-0.5`}
              >
                <div className="w-4 h-4 border border-current rounded-xs"></div>
                <span className="text-[8px]">Apps</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Control Panel & Developer Hub (Col span: 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Control Panel Card */}
            <div className={`border rounded-2xl p-6 shadow-lg transition-all duration-300 ${currentTheme.card}`}>
              
              <div className={`flex items-center gap-2 border-b ${currentTheme.border} pb-3 mb-5`}>
                <Sliders size={18} className={currentTheme.accentText} />
                <h2 className="text-base font-semibold text-white">تنظیمات شبیه‌ساز و روش‌های اورلی (Simulator & UX Controls)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. App Switcher */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Smartphone size={13} /> ۱. برنامه در حال اجرا (Active App)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {SIMULATED_APPS.map(app => (
                      <button
                        key={app.id}
                        onClick={() => selectApp(app.id)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left flex items-center gap-2 border transition-all
                          ${activeApp.id === app.id 
                            ? `${currentTheme.navActive}` 
                            : `bg-[#121216]/50 ${currentTheme.border} text-gray-400 hover:text-white hover:bg-[#181822]/40`}
                        `}
                      >
                        {getAppIcon(app.iconName, 14)}
                        <span className="truncate">{app.name}</span>
                      </button>
                    ))}
                    {/* Scratchpad app option */}
                    <button
                      onClick={() => selectApp('scratchpad')}
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left flex items-center gap-2 border transition-all col-span-2
                        ${activeApp.id === 'scratchpad' 
                          ? `${currentTheme.navActive}` 
                          : `bg-[#121216]/50 ${currentTheme.border} text-gray-400 hover:text-white hover:bg-[#181822]/40`}
                      `}
                    >
                      <Sparkles size={14} className="text-amber-400" />
                      <span>تایپ متن سفارشی شما (Custom Scratchpad)</span>
                    </button>
                  </div>
                </div>

                {/* 2. Language Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Languages size={13} /> ۲. زبان مقصد ترجمه (Target Language)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => setTargetLang(lang)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left flex items-center justify-between border transition-all
                          ${targetLang.code === lang.code 
                            ? `bg-black/30 ${currentTheme.btnActiveBorder} ${currentTheme.accentText}` 
                            : `bg-[#121216]/50 ${currentTheme.border} text-gray-400 hover:text-white hover:bg-[#181822]/40`}
                        `}
                      >
                        <span>{lang.name}</span>
                        <span className="text-[10px] uppercase font-mono opacity-60">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Dynamic scratchpad text input if scratchpad active */}
              {activeApp.id === 'scratchpad' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-5 p-4 rounded-xl border space-y-2 bg-black/20 ${currentTheme.border}`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className={`${currentTheme.accentText} font-semibold`}>ویرایشگر متن موبایل (English Mobile Scratchpad Text)</span>
                    <span className="text-gray-500 text-[10px] font-mono">تایپ کنید تا در شبیه‌ساز تلفن به روز شود</span>
                  </div>
                  <textarea
                    rows={3}
                    className={`w-full bg-black/40 border ${currentTheme.border} focus:${currentTheme.borderFocus} rounded-lg p-2 text-xs font-sans text-gray-200 focus:outline-none focus:ring-1 focus:ring-opacity-40`}
                    value={scratchpadText}
                    onChange={(e) => setScratchpadText(e.target.value)}
                  />
                </motion.div>
              )}

              {/* 3. UX Overlay Solution modes */}
              <div className={`mt-6 border-t ${currentTheme.border} pt-5 space-y-3`}>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers size={13} /> ۳. نحوه نمایش ترجمه (Select UX Overlay Strategy)
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  <button
                    onClick={() => {
                      setTranslationMode('inline');
                      if (!hasScanData) handleScanTrigger();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1
                      ${translationMode === 'inline'
                        ? `bg-black/30 ${currentTheme.btnActiveBorder}`
                        : `bg-[#121216]/50 ${currentTheme.border} hover:bg-neutral-900/40`}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-white">۱. کارت‌های شیشه‌ای تعاملی</span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${currentTheme.badge}`}>Inline Cards</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal mt-0.5" style={{ direction: 'rtl', textAlign: 'right' }}>
                      متن انگلیسی دقیقا در کادر خودش با کارت شیشه‌ای همرنگ جابجا می‌شود. با کلیک، کارت می‌چرخد تا متن اصلی نمایان شود.
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setTranslationMode('micro-pin');
                      if (!hasScanData) handleScanTrigger();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1
                      ${translationMode === 'micro-pin'
                        ? `bg-black/30 ${currentTheme.btnActiveBorder}`
                        : `bg-[#121216]/50 ${currentTheme.border} hover:bg-neutral-900/40`}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-white">۲. پین‌های شناور مینیمال</span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${currentTheme.badge}`}>Micro Pins</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal mt-0.5" style={{ direction: 'rtl', textAlign: 'right' }}>
                      متن‌های اصلی بدون تغییر باقی می‌مانند. پین‌های کوچکی در گوشه ظاهر می‌شوند که با لمس یا نگه داشتن، ترجمه را باز می‌کنند.
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setTranslationMode('hud-split');
                      if (!hasScanData) handleScanTrigger();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1
                      ${translationMode === 'hud-split'
                        ? `bg-black/30 ${currentTheme.btnActiveBorder}`
                        : `bg-[#121216]/50 ${currentTheme.border} hover:bg-neutral-900/40`}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-white">۳. نمای HUD حاشیه‌ای</span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${currentTheme.badge}`}>Sidebar HUD</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal mt-0.5" style={{ direction: 'rtl', textAlign: 'right' }}>
                      صفحه شلوغ نمی‌شود. کل ترجمه‌ها در یک سایدبار کوچک در راستای عمودی متون اصلی تراز می‌شوند تا خوانایی حداکثری باشد.
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setTranslationMode('fade-to-translate');
                      if (!hasScanData) handleScanTrigger();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1
                      ${translationMode === 'fade-to-translate'
                        ? `bg-black/30 ${currentTheme.btnActiveBorder}`
                        : `bg-[#121216]/50 ${currentTheme.border} hover:bg-neutral-900/40`}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-white">۴. زیرنویس متصل تفکیک‌شده</span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${currentTheme.badge}`}>Sub-Sentence</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal mt-0.5" style={{ direction: 'rtl', textAlign: 'right' }}>
                      ترجمه با افکت ورود نرم به عنوان زیرنویس بافاصله، دقیقا در زیر هر عبارت قرار می‌گیرد تا تداخل برطرف شده و هر دو نسخه خوانا باشند.
                    </p>
                  </button>

                </div>
              </div>

              {/* 4. Android WindowManager Flags Simulation */}
              <div className={`mt-6 border-t ${currentTheme.border} pt-5 space-y-3`}>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Cpu size={13} /> ۴. پرچم‌های نمایش اندروید (Android WindowManager Flags)
                </label>
                
                <div className={`p-4 rounded-xl border transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#121216]/50 hover:bg-neutral-900/10 ${currentTheme.border}`}>
                  <div className="space-y-1 text-right flex-1" style={{ direction: 'rtl' }}>
                    <div className="flex items-center gap-2 justify-end">
                      <span className={`text-[8px] px-1.5 py-0.2 rounded font-mono ${currentTheme.badge}`}>Pass-Through Input</span>
                      <span className="font-semibold text-white text-xs">شبیه‌سازی پرچم FLAG_NOT_TOUCHABLE (شفافیت به لمس)</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal">
                      با فعال‌سازی این پرچم سیستم‌عاملی، لایه اورلی ترجمه هیچ لمسی را جذب نکرده و تمامی کلیک‌ها مستقیماً به برنامه‌های زیرین منتقل می‌شود. برای تست، پس از فعال‌سازی، روی کارت‌ها در گوشی شبیه‌ساز کلیک کنید.
                    </p>
                  </div>
                  <div className="flex items-center shrink-0 self-end sm:self-auto">
                    <button
                      id="flag-not-touchable-toggle"
                      onClick={() => setFlagNotTouchable(!flagNotTouchable)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer
                        ${flagNotTouchable ? 'bg-blue-500' : 'bg-zinc-700'}
                      `}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                          ${flagNotTouchable ? 'translate-x-6' : 'translate-x-1'}
                        `}
                      />
                    </button>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#121216]/50 hover:bg-neutral-900/10 ${currentTheme.border}`}>
                  <div className="space-y-1 text-right flex-1" style={{ direction: 'rtl' }}>
                    <div className="flex items-center gap-2 justify-end">
                      <span className={`text-[8px] px-1.5 py-0.2 rounded font-mono ${currentTheme.badge}`}>UX Animation Style</span>
                      <span className="font-semibold text-white text-xs">انیمیشن ورود لایه‌های اورلی (Overlay Entrance Animation)</span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal">
                      کنترل شیوه و انیمیشن ورود کارت‌های ترجمه روی صفحه. بین حالت **محو شدن ساده (Fade-In)** و **لغزش به بالا (Slide-Up)** جابجا شوید.
                    </p>
                  </div>
                  <div className="flex items-center shrink-0 self-end sm:self-auto gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                    <button
                      id="animation-fade-toggle"
                      onClick={() => setOverlayAnimation('fade')}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-medium transition-all cursor-pointer
                        ${overlayAnimation === 'fade' 
                          ? `${currentTheme.navActive || 'bg-gradient-to-b from-blue-400 to-blue-500 text-white shadow-sm'}` 
                          : 'text-gray-400 hover:text-white'}
                      `}
                    >
                      Fade-In
                    </button>
                    <button
                      id="animation-slide-toggle"
                      onClick={() => setOverlayAnimation('slide')}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-medium transition-all cursor-pointer
                        ${overlayAnimation === 'slide' 
                          ? `${currentTheme.navActive || 'bg-gradient-to-b from-blue-400 to-blue-500 text-white shadow-sm'}` 
                          : 'text-gray-400 hover:text-white'}
                      `}
                    >
                      Slide-Up
                    </button>
                  </div>
                </div>
              </div>

              {/* High Density HUD Diagnostics widget */}
              <div className={`mt-5 p-4 rounded-xl border bg-black/30 ${currentTheme.border}`}>
                <h4 className={`text-[11px] font-bold ${currentTheme.accentText} uppercase tracking-widest mb-3 flex items-center gap-1.5`}>
                  <span className={`w-2 h-2 rounded-full bg-current ${currentTheme.accentText} ${currentTheme.accentGlow}`}></span>
                  HUD Diagnostics & OCR Telemetry
                </h4>
                <div className="grid grid-cols-3 gap-4 text-xs font-mono">
                  <div className={`p-2.5 border rounded flex flex-col justify-between bg-black/20 ${currentTheme.border}`}>
                    <span className="text-gray-500 text-[9px] uppercase">OCR Engine</span>
                    <span className={`font-semibold mt-1 text-[11px] ${isScanning ? `${currentTheme.accentText} animate-pulse` : hasScanData ? 'text-green-400' : 'text-gray-500'}`}>
                      {isScanning ? 'SCANNING...' : hasScanData ? '✓ READY' : 'STANDBY'}
                    </span>
                  </div>
                  <div className={`p-2.5 border rounded flex flex-col justify-between bg-black/20 ${currentTheme.border}`}>
                    <span className="text-gray-500 text-[9px] uppercase">Latency</span>
                    <span className="text-white font-semibold mt-1 text-[11px]">
                      {isScanning ? '142ms...' : hasScanData ? '14ms' : '0ms'}
                    </span>
                  </div>
                  <div className={`p-2.5 border rounded flex flex-col justify-between bg-black/20 ${currentTheme.border}`}>
                    <span className="text-gray-500 text-[9px] uppercase">Entities</span>
                    <span className="text-white font-semibold mt-1 text-[11px]">
                      {isScanning ? 'parsing...' : hasScanData ? `${activeApp.nodes.length} Blocks` : '0 Blocks'}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2.5">
                  Smart Overlay Layout Mode: Map translations dynamically over Accessibility Node coordinates.
                </p>
              </div>

              {/* Helpful Guide Prompt */}
              {!hasScanData && !isScanning && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 p-3.5 border rounded-xl flex items-center justify-between transition-all duration-300 ${currentTheme.accentBg} ${currentTheme.accentBorder}`}
                >
                  <p className={`text-xs ${currentTheme.accentText}`} style={{ direction: 'rtl', textAlign: 'right' }}>
                    🚀 <strong>آماده آزمایش!</strong> دکمه شناور ترجمه دایره‌ای (با نماد زبان) را در گوشی شبیه‌ساز بفشارید تا عملیات اسکن صفحه آغاز شود.
                  </p>
                  <div className="animate-bounce">
                    <ArrowRight size={16} className={`transform rotate-90 lg:rotate-0 ${currentTheme.accentText}`} />
                  </div>
                </motion.div>
              )}

            </div>

            {/* Sub-component: Code Viewers & Architectural Blueprints */}
            <DeveloperHub
              hoveredNode={hoveredNode}
              targetLang={targetLang}
              showTouchVectors={showTouchVectors}
              onToggleTouchVectors={() => setShowTouchVectors(!showTouchVectors)}
              activeTheme={activeTheme}
            />

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className={`border-t bg-black/25 py-8 px-6 mt-16 text-center text-xs text-slate-500 transition-colors duration-300 ${currentTheme.border}`}>
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="font-sans">
            Android Screen Translator Interactive Sandbox Prototype. Designed with standard touch pass-through WindowManager flags.
          </p>
          <p className="text-[11px]" style={{ direction: 'rtl' }}>
            توسعه‌یافته با عشق جهت حل معضل اورلی‌های اندرویدی • استفاده از کدهای کاتلین این سورس در پروژه‌های نهایی آزاد است.
          </p>
        </div>
      </footer>

    </div>
  );
}
