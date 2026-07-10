import React, { useState } from 'react';
import { 
  Code, Copy, Check, FileText, Info, ShieldCheck, 
  Cpu, Layers, Eye, EyeOff, Terminal, Sparkles
} from 'lucide-react';
import { KOTLIN_CODES } from '../data';
import { AccessibilityNode, Language } from '../types';

interface DeveloperHubProps {
  hoveredNode: AccessibilityNode | null;
  targetLang: Language;
  showTouchVectors: boolean;
  onToggleTouchVectors: () => void;
  activeTheme?: 'appleGlass' | 'cyberpunk' | 'aurora' | 'monochrome' | 'emerald';
}

export default function DeveloperHub({
  hoveredNode,
  targetLang,
  showTouchVectors,
  onToggleTouchVectors,
  activeTheme = 'appleGlass',
}: DeveloperHubProps) {
  const [activeTab, setActiveTab] = useState<'accessibility' | 'overlay' | 'touchPassThrough' | 'uxGuide'>('touchPassThrough');
  const [copied, setCopied] = useState(false);

  const themeAccents = {
    appleGlass: {
      text: 'text-[#0A84FF]',
      bg: 'bg-[#0A84FF]/15',
      border: 'border-white/10',
      tabActive: 'bg-gradient-to-b from-[#2F93FF] to-[#0A84FF] text-white shadow-md shadow-[#0A84FF]/25',
      borderGlow: 'border-[#0A84FF]/40',
      cardBg: 'bg-[#0E1325]/50 border-white/10 backdrop-blur-2xl',
      badge: 'bg-[#0A84FF]/15 text-[#0A84FF] border border-[#0A84FF]/25',
      terminalBg: 'bg-[#050811]/95 border-white/5'
    },
    cyberpunk: {
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      tabActive: 'bg-blue-600 text-white shadow-md shadow-blue-500/20',
      borderGlow: 'border-blue-500/30',
      cardBg: 'bg-[#0E0E12]/90 border-[#1A1A24]',
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      terminalBg: 'bg-[#09090D]'
    },
    aurora: {
      text: 'text-pink-400',
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/20',
      tabActive: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20',
      borderGlow: 'border-pink-500/30',
      cardBg: 'bg-[#151026]/80 border-[#2E1E4F]',
      badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      terminalBg: 'bg-[#0F0A1B]'
    },
    monochrome: {
      text: 'text-white',
      bg: 'bg-white/10',
      border: 'border-white/20',
      tabActive: 'bg-white text-black font-semibold shadow-md',
      borderGlow: 'border-white/30',
      cardBg: 'bg-[#141416] border-[#27272A]',
      badge: 'bg-white/10 text-white border-white/20',
      terminalBg: 'bg-[#0E0E0F]'
    },
    emerald: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      tabActive: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold shadow-md shadow-emerald-500/20',
      borderGlow: 'border-emerald-500/30',
      cardBg: 'bg-[#08150D]/90 border-[#12311D]',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      terminalBg: 'bg-[#040905]'
    }
  };

  const theme = themeAccents[activeTheme];

  // Copy code utility
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentCode = KOTLIN_CODES[activeTab];

  return (
    <div className={`rounded-2xl p-6 shadow-xl flex flex-col h-full border transition-all duration-300 ${theme.cardBg}`}>
      
      {/* Title Header */}
      <div className={`flex justify-between items-start border-b pb-4 mb-5 ${theme.border}`}>
        <div>
          <h2 className="text-xl font-sans font-semibold text-white flex items-center gap-2">
            <Cpu className={theme.text} size={20} /> نقشه فنی و سورس‌کد اندروید (Kotlin)
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Android Developer Architecture & Real Implementation blueprints
          </p>
        </div>
        <div className="hidden sm:block">
          <span className={`text-[10px] font-mono px-2 py-1 rounded transition-all duration-300 ${theme.badge}`}>
            Kotlin / Android SDK
          </span>
        </div>
      </div>

      {/* Interactive Node Inspector Panel */}
      <div className={`mb-5 bg-black/30 border rounded-xl p-4 transition-all duration-300 ${theme.border}`}>
        <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
          <Terminal size={13} className={theme.text} /> آنالیزور ساختار گره صفحه (Live Accessibility Node Analyzer)
        </h3>
        
        {hoveredNode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <p className="text-gray-500 font-mono">
                Node ID: <span className="text-gray-300">#{hoveredNode.id}</span>
              </p>
              <p className="text-gray-500 font-mono">
                Android Class:{' '}
                <span className={theme.text}>
                  {hoveredNode.type === 'button' ? 'android.widget.Button' : 
                   hoveredNode.type === 'input' ? 'android.widget.EditText' : 'android.widget.TextView'}
                </span>
              </p>
              <p className="text-gray-500 font-mono">
                Original Text: <span className="text-emerald-400">"{hoveredNode.text}"</span>
              </p>
            </div>
            <div className={`space-y-1.5 border-t md:border-t-0 md:border-l pt-2.5 md:pt-0 md:pl-4 ${theme.border}`}>
              <p className="text-gray-500 font-mono">
                Bounds (L, T, W, H):{' '}
                <span className="text-gray-300">
                  [{hoveredNode.bounds.left}%, {hoveredNode.bounds.top}%, {hoveredNode.bounds.width}%, {hoveredNode.bounds.height}%]
                </span>
              </p>
              <p className="text-gray-500 font-mono">
                Target Translation ({targetLang.name}):{' '}
                <span className="text-blue-300 font-semibold" style={{ direction: targetLang.direction }}>
                  "{hoveredNode.translations[targetLang.code] || hoveredNode.text}"
                </span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-gray-500 italic py-2 text-center">
            روی یکی از متن‌های گوشی شبیه‌ساز هاور (موس) کنید تا ساختار زنده درخت دسترسی‌پذیری را مشاهده نمایید.
          </p>
        )}
      </div>

      {/* Tab Controls for Android Kotlin Files */}
      <div className={`flex flex-wrap gap-1.5 mb-3 p-1.5 rounded-lg border bg-black/40 ${theme.border}`}>
        <button
          onClick={() => setActiveTab('touchPassThrough')}
          className={`flex-1 min-w-[130px] px-3 py-2 rounded-md text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer
            ${activeTab === 'touchPassThrough' 
              ? theme.tabActive 
              : 'text-gray-400 hover:text-white hover:bg-white/5'}
          `}
        >
          <Layers size={13} /> TouchPassThrough.kt
        </button>
        <button
          onClick={() => setActiveTab('overlay')}
          className={`flex-1 min-w-[130px] px-3 py-2 rounded-md text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer
            ${activeTab === 'overlay' 
              ? theme.tabActive 
              : 'text-gray-400 hover:text-white hover:bg-white/5'}
          `}
        >
          <FileText size={13} /> OverlayService.kt
        </button>
        <button
          onClick={() => setActiveTab('accessibility')}
          className={`flex-1 min-w-[130px] px-3 py-2 rounded-md text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer
            ${activeTab === 'accessibility' 
              ? theme.tabActive 
              : 'text-gray-400 hover:text-white hover:bg-white/5'}
          `}
        >
          <Code size={13} /> AccessibilityService.kt
        </button>
        <button
          onClick={() => setActiveTab('uxGuide')}
          className={`flex-1 min-w-[130px] px-3 py-2 rounded-md text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer
            ${activeTab === 'uxGuide' 
              ? theme.tabActive 
              : 'text-gray-400 hover:text-white hover:bg-white/5'}
          `}
        >
          <Sparkles size={13} /> UX_Strategy.md
        </button>
      </div>

      {/* Code Viewer and Copy Area */}
      <div className={`flex-1 min-h-[250px] border rounded-xl relative overflow-hidden flex flex-col ${theme.terminalBg} ${theme.border}`}>
        {/* Code Block Toolbar */}
        <div className={`h-10 px-4 border-b flex justify-between items-center text-xs bg-black/20 ${theme.border}`}>
          <span className="font-mono text-gray-400">
            {activeTab === 'accessibility' ? 'ScreenTranslatorAccessibilityService.kt' :
             activeTab === 'overlay' ? 'FloatingOverlayService.kt' :
             activeTab === 'touchPassThrough' ? 'TouchPassThroughLayout.kt' : 'TranslationUXGuide.md'}
          </span>
          <button
            onClick={() => copyToClipboard(currentCode)}
            className={`flex items-center gap-1 transition-colors px-2 py-1 rounded border text-gray-400 hover:text-white bg-black/40 border-white/5 hover:border-white/10 cursor-pointer`}
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            {copied ? 'کپی شد!' : 'کپی کد'}
          </button>
        </div>

        {/* Code Content Box */}
        <div className="flex-1 p-4 overflow-auto font-mono text-[11px] leading-relaxed text-gray-300">
          <pre className="whitespace-pre">{currentCode}</pre>
        </div>
      </div>

      {/* Persian Explanation of the Core Technical Solution */}
      <div className={`mt-5 border-t pt-5 ${theme.border}`}>
        <h3 className="text-sm font-sans font-semibold mb-2 flex items-center gap-1.5 text-white">
          <ShieldCheck size={16} className="text-emerald-400" /> تحلیل فنی چالش لمس صفحه (Gestural Pass-through Solution)
        </h3>
        <p className="text-xs leading-relaxed text-gray-300" style={{ direction: 'rtl' }}>
          بزرگترین مشکلی که کاربران در این برنامه‌ها حس می‌کنند این است که پس از کلیک بر روی دکمه ترجمه، یک لایه تمام‌صفحه تیره ایجاد می‌شود که متون ترجمه شده را نمایش می‌دهد، اما این لایه مانع تعامل کاربر با دکمه‌ها و اسکرول‌های برنامه زیرین می‌گردد.
        </p>
        
        {/* Custom Touch Vector Control Trigger button */}
        <div className={`mt-3 p-3 rounded-lg border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-black/20 ${theme.border}`}>
          <div className="text-xs text-right" style={{ direction: 'rtl' }}>
            <span className="font-semibold text-gray-200">آزمایش شبیه‌سازی لمس (Touch Pass-through View)</span>
            <p className="text-[11px] mt-0.5 text-gray-400">لایه‌ای شبیه‌سازی‌شده که بخش‌های لمس‌پذیر (سبز) و مسدودکننده (آبی) را در گوشی نشان می‌دهد.</p>
          </div>
          <button
            onClick={onToggleTouchVectors}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-all shrink-0 cursor-pointer
              ${showTouchVectors
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-xs'
                : `${theme.bg} ${theme.text} ${theme.border} hover:bg-opacity-20`}
            `}
          >
            {showTouchVectors ? <EyeOff size={13} /> : <Eye size={13} />}
            {showTouchVectors ? 'غیرفعال‌سازی نقشه لمسی' : 'نمایش نقشه عبور لمس'}
          </button>
        </div>

        <p className="text-[11px] mt-3 leading-relaxed text-gray-400" style={{ direction: 'rtl' }}>
          💡 <span className="font-semibold text-gray-300">چگونه کار می‌کند؟</span> در اندروید با بازنویسی کلاس <code className={`font-mono text-[10px] px-1 py-0.5 rounded bg-black/40 ${theme.text}`}>dispatchTouchEvent</code> در ریشه لایه اورلی، مختصات لمس کاربر بررسی می‌شود. اگر خارج از مستطیل کارت‌های ترجمه باشد، مقدار <code className="font-mono text-[10px] px-1 py-0.5 rounded bg-black/40 text-emerald-400">false</code> بازگردانده شده و کلیک مستقیماً به برنامه زیرین (مثلاً بازی یا کروم) هدایت می‌شود.
        </p>
      </div>

    </div>
  );
}
