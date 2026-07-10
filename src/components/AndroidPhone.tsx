import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, Settings, Gamepad2, MessageSquare, Languages, 
  Cpu, Sparkles, Smartphone, Eye, EyeOff, Info, RotateCcw
} from 'lucide-react';
import { AppScreen, TranslationMode, Language, AccessibilityNode } from '../types';

interface AndroidPhoneProps {
  activeApp: AppScreen;
  targetLang: Language;
  translationMode: TranslationMode;
  onScanTrigger: () => void;
  isScanning: boolean;
  hasScanData: boolean;
  onResetScan: () => void;
  showTouchVectors: boolean;
  onHoverNode: (node: AccessibilityNode | null) => void;
  hoveredNode: AccessibilityNode | null;
  flagNotTouchable?: boolean;
}

export default function AndroidPhone({
  activeApp,
  targetLang,
  translationMode,
  onScanTrigger,
  isScanning,
  hasScanData,
  onResetScan,
  showTouchVectors,
  onHoverNode,
  hoveredNode,
  flagNotTouchable = false,
}: AndroidPhoneProps) {
  const phoneFrameRef = useRef<HTMLDivElement>(null);
  
  // Drag constraints & state for the Android Floating Button
  const [buttonPos, setButtonPos] = useState({ x: 10, y: 350 });
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);
  const [activeFlippedNodes, setActiveFlippedNodes] = useState<{ [id: string]: boolean }>({});
  const [activePinTooltip, setActivePinTooltip] = useState<string | null>(null);
  const [tapToast, setTapToast] = useState<string | null>(null);

  const handleBackgroundNodeClick = (node: AccessibilityNode) => {
    // Only register a click through event if flagNotTouchable is active
    if (flagNotTouchable && hasScanData) {
      setTapToast(`ضربه از اورلی عبور کرد و به برنامه رسید: "${node.text}"`);
      const timer = setTimeout(() => {
        setTapToast(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  };
  
  // Reset flips and tooltips when screen changes
  useEffect(() => {
    setActiveFlippedNodes({});
    setActivePinTooltip(null);
  }, [activeApp, translationMode, targetLang]);

  // Handle snapping of the floating button on drag end
  const handleDragEnd = (_event: any, info: any) => {
    if (!phoneFrameRef.current) return;
    const phoneWidth = phoneFrameRef.current.offsetWidth || 290;
    const currentX = buttonPos.x + info.offset.x;
    const currentY = buttonPos.y + info.offset.y;

    // Determine nearest horizontal edge (left or right)
    const snapThreshold = phoneWidth / 2;
    const finalX = currentX + 24 < snapThreshold ? 12 : phoneWidth - 60;
    
    // Boundary check for Y
    const minY = 60;
    const maxY = 540;
    const finalY = Math.min(Math.max(currentY, minY), maxY);

    setButtonPos({ x: finalX, y: finalY });
  };

  // Helper to toggle card flip
  const toggleNodeFlip = (id: string) => {
    setActiveFlippedNodes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Visual Header Indicator */}
      <div className="mb-4 text-center">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center justify-center gap-1">
          <Smartphone size={13} className="text-blue-400" /> Simulated Android Device
        </p>
        <h3 className="text-lg font-sans font-medium text-white mt-1">
          {activeApp.appName}
        </h3>
      </div>

      {/* 3D-Like Smartphone Frame Container */}
      <div 
        id="android-phone-frame"
        ref={phoneFrameRef}
        className="relative w-[340px] h-[640px] bg-[#0A0A0A] border-[10px] border-[#222] rounded-[44px] shadow-2xl shadow-blue-950/20 overflow-hidden flex flex-col select-none ring-4 ring-blue-500/10"
      >
        {/* Device Ear Speaker and Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-[#181818] border-b border-[#333] rounded-b-2xl z-50 flex items-center justify-center gap-2">
          <div className="w-12 h-1 bg-[#0A0A0A] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-[#0A0A0A] rounded-full border border-[#333]"></div>
        </div>

        {/* Android Status Bar */}
        <div className={`h-8 px-6 pt-2 flex justify-between items-center text-[10px] font-mono z-40 ${activeApp.statusBarColor}`}>
          <span>18:22</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] bg-white/20 px-1 rounded">5G</span>
            <span className="opacity-90">100%</span>
            <div className="w-4 h-2.5 border border-current rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-current rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Smartphone Screen Content */}
        <div className={`flex-1 relative overflow-hidden transition-all duration-300 ${activeApp.backgroundColor}`}>
          
          {/* Simulated Application UI Elements */}
          {activeApp.nodes.map(node => {
            const isHovered = hoveredNode?.id === node.id;
            
            // Render original items as elements styled nicely in their bounds
            return (
              <div
                key={node.id}
                id={`sim-node-${node.id}`}
                className={`absolute transition-all duration-200 rounded flex items-center justify-center px-2 py-1 text-xs select-text
                  ${isHovered ? 'ring-2 ring-blue-500 bg-blue-500/5' : ''}
                  ${node.type === 'title' ? 'font-sans font-bold text-base' : ''}
                  ${node.type === 'header' ? 'font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800/10' : ''}
                  ${node.type === 'button' ? 'bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-sm text-center' : ''}
                  ${node.type === 'input' ? 'bg-slate-100 border border-slate-300 text-slate-500 rounded-lg text-[10px] justify-start pl-3' : ''}
                  ${node.type === 'game-hud' ? 'text-amber-400 font-mono text-[11px] font-bold tracking-wide border border-amber-900/40 bg-black/40 rounded-sm' : ''}
                  ${node.type === 'text' && activeApp.id === 'chat' && node.id.includes('1') ? 'bg-blue-500/10 text-slate-100 rounded-2xl rounded-tl-sm justify-start pl-3' : ''}
                  ${node.type === 'text' && activeApp.id === 'chat' && node.id.includes('2') ? 'bg-slate-800/80 text-blue-200 rounded-2xl rounded-tr-sm justify-start pl-3' : ''}
                  ${node.type === 'text' && activeApp.id === 'chat' && node.id.includes('3') ? 'bg-blue-500/10 text-slate-100 rounded-2xl rounded-tl-sm justify-start pl-3' : ''}
                  ${node.type === 'text' && activeApp.id === 'chat' && node.id.includes('4') ? 'bg-slate-800/80 text-blue-200 rounded-2xl rounded-tr-sm justify-start pl-3' : ''}
                  ${flagNotTouchable && hasScanData ? 'cursor-pointer hover:bg-emerald-500/20 active:bg-emerald-500/35 border border-dashed border-emerald-500/30' : ''}
                `}
                style={{
                  top: `${node.bounds.top}%`,
                  left: `${node.bounds.left}%`,
                  width: `${node.bounds.width}%`,
                  height: `${node.bounds.height}%`,
                  zIndex: flagNotTouchable && hasScanData ? 35 : 10,
                }}
                onMouseEnter={() => onHoverNode(node)}
                onMouseLeave={() => onHoverNode(null)}
                onClick={() => handleBackgroundNodeClick(node)}
              >
                {/* Text showing inside original node */}
                <span className="truncate-lines-2 w-full text-center leading-tight">
                  {node.text}
                </span>
              </div>
            );
          })}

          {/* Holographic Interactive Translation Overlay Layer */}
          {hasScanData && translationMode !== 'original' && (
            <div 
              id="active-translation-overlay"
              className={`absolute inset-0 z-30 transition-all duration-300
                ${flagNotTouchable 
                  ? 'pointer-events-none opacity-85' 
                  : translationMode === 'inline' 
                    ? 'bg-black/25 backdrop-blur-[1px]' 
                    : 'pointer-events-none'
                }
              `}
            >
              {activeApp.nodes.map(node => {
                const translatedText = node.translations[targetLang.code] || node.text;
                const isFlipped = activeFlippedNodes[node.id] || false;
                
                // --- MODE 1: Inline Glass Overlay ---
                if (translationMode === 'inline') {
                  return (
                    <motion.div
                      key={`inline-${node.id}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute overflow-hidden cursor-pointer rounded shadow-lg flex items-center justify-center p-1.5 border"
                      style={{
                        top: `${node.bounds.top}%`,
                        left: `${node.bounds.left}%`,
                        width: `${node.bounds.width}%`,
                        height: `${node.bounds.height}%`,
                        background: activeApp.backgroundColor.includes('white') 
                          ? 'rgba(240, 243, 255, 0.95)' 
                          : 'rgba(20, 22, 32, 0.95)',
                        borderColor: activeApp.backgroundColor.includes('white')
                          ? 'rgba(59, 130, 246, 0.3)'
                          : 'rgba(59, 130, 246, 0.4)',
                        color: activeApp.backgroundColor.includes('white') ? '#1e1b4b' : '#f8fafc',
                      }}
                      onClick={() => toggleNodeFlip(node.id)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <AnimatePresence mode="wait">
                        {!isFlipped ? (
                          <motion.div
                            key="translated"
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="w-full h-full flex flex-col justify-center text-center px-1"
                            style={{ direction: targetLang.direction }}
                          >
                            <span className="text-[11px] leading-tight font-medium text-blue-600 dark:text-blue-300">
                              {translatedText}
                            </span>
                            <span className="text-[7px] text-slate-400 font-mono uppercase mt-0.5 tracking-wider block">
                              {targetLang.name} (تپ برای اصلی)
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="original"
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="w-full h-full flex flex-col justify-center text-center px-1"
                          >
                            <span className="text-[10px] leading-tight text-slate-500 italic">
                              {node.text}
                            </span>
                            <span className="text-[7px] text-emerald-500 font-mono uppercase mt-0.5 tracking-wider block">
                              اصلی / ORIGINAL
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                // --- MODE 2: Micro-Pin Tooltips ---
                if (translationMode === 'micro-pin') {
                  const isTooltipOpen = activePinTooltip === node.id;
                  
                  return (
                    <div
                      key={`pin-${node.id}`}
                      className="absolute z-40 pointer-events-auto"
                      style={{
                        top: `${node.bounds.top - 1.5}%`,
                        left: `${node.bounds.left + node.bounds.width - 2}%`,
                      }}
                    >
                      {/* Floating Micro Pin */}
                      <motion.button
                        id={`pin-btn-${node.id}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setActivePinTooltip(isTooltipOpen ? null : node.id)}
                        className={`w-5 h-5 rounded-full flex items-center justify-center border shadow-md focus:outline-none transition-colors
                          ${isTooltipOpen 
                            ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-blue-500/20' 
                            : 'bg-blue-500 text-white border-white/40 hover:bg-blue-600'}
                        `}
                      >
                        <Languages size={10} />
                      </motion.button>

                      {/* Tooltip Popup */}
                      <AnimatePresence>
                        {isTooltipOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 5, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.9 }}
                            className="absolute bottom-6 right-0 w-[180px] bg-[#111] border border-[#333] rounded-xl p-2.5 shadow-xl text-xs z-50 pointer-events-auto"
                            style={{ direction: targetLang.direction }}
                          >
                            <div className="text-[10px] text-blue-400 font-mono mb-1 flex justify-between items-center pb-1 border-b border-[#222]">
                              <span>ترجمه پین</span>
                              <span className="text-[8px] bg-blue-500/10 px-1 py-0.2 rounded uppercase">
                                {targetLang.code}
                              </span>
                            </div>
                            <p className="text-white leading-snug font-medium text-[11px]">
                              {translatedText}
                            </p>
                            <p className="text-[8px] text-slate-400 mt-1.5 italic text-right" style={{ direction: 'ltr' }}>
                              Original: "{node.text}"
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // --- MODE 4: Fade-To-Translate (Attached Sub-Sentence Subtitle) ---
                if (translationMode === 'fade-to-translate') {
                  const isWhiteBg = activeApp.backgroundColor.includes('white') || activeApp.backgroundColor.includes('slate-50');
                  return (
                    <motion.div
                      key={`fade-${node.id}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-40 pointer-events-auto"
                      style={{
                        top: `${node.bounds.top + node.bounds.height}%`,
                        left: `${node.bounds.left}%`,
                        width: `${node.bounds.width}%`,
                      }}
                    >
                      <div 
                        className={`mt-1 p-2 rounded-xl border shadow-xl backdrop-blur-md relative flex flex-col gap-1 transition-all duration-300
                          ${isWhiteBg 
                            ? 'bg-[#F2F6FF]/95 border-blue-200 text-blue-950 shadow-blue-900/5' 
                            : 'bg-[#0E111A]/95 border-blue-500/30 text-blue-100 shadow-black/60'}
                        `}
                        style={{ direction: targetLang.direction }}
                      >
                        {/* Elegant micro connecting arrow pointing up to original text */}
                        <div 
                          className={`absolute -top-1 right-6 w-2 h-2 rotate-45 border-t border-l
                            ${isWhiteBg ? 'bg-[#F2F6FF] border-blue-200' : 'bg-[#0E111A] border-blue-500/30'}
                          `}
                        />

                        {/* Translation Content */}
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-[10.5px] leading-snug font-medium flex-1 text-right">
                            {translatedText}
                          </span>
                          
                          {/* Mini language badge */}
                          <span className={`text-[7px] font-mono px-1 py-0.2 rounded font-bold uppercase shrink-0 mt-0.5
                            ${isWhiteBg 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'}
                          `}>
                            {targetLang.code}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return null;
              })}

              {/* --- MODE 3: Edge HUD Split --- */}
              {translationMode === 'hud-split' && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="absolute right-0 top-14 bottom-14 w-[130px] bg-[#111]/95 backdrop-blur border-l border-[#222] text-[10px] p-2 flex flex-col gap-2.5 overflow-y-auto pointer-events-auto shadow-2xl z-40"
                  style={{ direction: targetLang.direction }}
                >
                  <div className="text-[10px] text-blue-400 font-mono font-bold pb-1.5 border-b border-[#222] flex items-center gap-1">
                    <Languages size={11} /> نمای HUD جانبی
                  </div>
                  {activeApp.nodes.map(node => (
                    <div 
                      key={`hud-${node.id}`}
                      className="flex flex-col gap-0.5 p-1 rounded bg-[#0A0A0A]/40 border border-[#222]/40 hover:bg-[#0A0A0A] transition-colors"
                    >
                      <span className="text-[8px] text-slate-400 truncate block" style={{ direction: 'ltr', textAlign: 'left' }}>
                        {node.text}
                      </span>
                      <span className="text-[10px] text-white font-medium leading-tight">
                        {node.translations[targetLang.code] || node.text}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {/* Interactive Touch Pass-Through Vector Simulation Layout */}
          {showTouchVectors && (
            <div id="gesture-vector-overlay" className="absolute inset-0 pointer-events-none z-40 bg-blue-500/[0.04]">
              {/* Overlay boundaries highlighting */}
              {activeApp.nodes.map(node => (
                <div
                  key={`vector-${node.id}`}
                  className="absolute border border-dashed border-blue-400/40 bg-blue-400/5 flex items-center justify-center"
                  style={{
                    top: `${node.bounds.top}%`,
                    left: `${node.bounds.left}%`,
                    width: `${node.bounds.width}%`,
                    height: `${node.bounds.height}%`,
                  }}
                >
                  <span className="text-[7px] text-blue-400 font-mono px-0.5 bg-[#0A0A0A]/70 rounded">
                    INTERACTIVE AREA
                  </span>
                </div>
              ))}
              
              {/* Empty background pass-through highlights */}
              <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                <p className="text-center text-emerald-400 text-[10px] font-mono px-4 py-2 bg-[#0A0A0A]/90 rounded-xl border border-emerald-500/30 shadow-lg">
                  🟢 عبور ژست لمسی فعال است<br/>
                  (Touch gestures pass to background)
                </p>
              </div>
            </div>
          )}

          {/* FLAG_NOT_TOUCHABLE Educational Banner */}
          {flagNotTouchable && hasScanData && (
            <div className="absolute top-4 left-0 right-0 bg-blue-600/90 text-white text-[9px] py-1 px-4 text-center z-45 flex items-center justify-center gap-1.5" style={{ direction: 'rtl' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>پرچم فعال: لمس از روی کارت‌های ترجمه عبور می‌کند! دکمه‌ها را فشرده و تست کنید.</span>
            </div>
          )}

          {/* Touch Pass-Through Alert Toast */}
          <AnimatePresence>
            {tapToast && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute bottom-12 left-4 right-4 bg-emerald-600/95 border border-emerald-400/40 text-white rounded-xl py-2 px-3 text-[10px] text-center shadow-lg z-50 flex items-center justify-center gap-1.5"
                style={{ direction: 'rtl' }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>{tapToast}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scanning Line Effect */}
          <AnimatePresence>
            {isScanning && (
              <motion.div
                key="scan-line"
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_12px_#3b82f6] z-50 pointer-events-none"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isScanning && (
              <motion.div
                key="scan-flash"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.5, 0.1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8 }}
                className="absolute inset-0 bg-blue-500/20 z-40 pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Android Bottom Navigation Pill */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-400/60 rounded-full z-40"></div>
        </div>

        {/* Floating Screen Translator Trigger Button (با فیزیک کشش و پرتاب) */}
        <motion.div
          id="floating-trigger-button"
          style={{
            position: 'absolute',
            left: buttonPos.x,
            top: buttonPos.y,
            zIndex: 100,
            touchAction: 'none'
          }}
          drag
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          onHoverStart={() => setIsHoveredBtn(true)}
          onHoverEnd={() => setIsHoveredBtn(false)}
        >
          <motion.button
            id="floating-trigger-btn-element"
            onClick={onScanTrigger}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border cursor-grab active:cursor-grabbing focus:outline-none relative
              ${hasScanData 
                ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 border-blue-400 text-white' 
                : 'bg-[#111] border-blue-500/40 text-blue-400'}
            `}
            animate={{
              scale: isHoveredBtn ? 1.08 : 1.0,
              boxShadow: hasScanData 
                ? '0 0 15px rgba(59, 130, 246, 0.65)' 
                : '0 0 8px rgba(59, 130, 246, 0.2)'
            }}
          >
            {isScanning ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
              >
                <Cpu size={20} className="text-white" />
              </motion.div>
            ) : hasScanData ? (
              <Sparkles size={20} className="animate-pulse" />
            ) : (
              <Languages size={20} />
            )}

            {/* Glowing active indicator dot */}
            {hasScanData && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0A0A0A] rounded-full"></span>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Reset Simulation Control */}
      {hasScanData && (
        <button
          onClick={onResetScan}
          className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-400 transition-colors bg-[#111]/40 border border-[#222] px-3 py-1.5 rounded-full"
        >
          <RotateCcw size={13} /> بازنشانی ترجمه / Reset
        </button>
      )}
    </div>
  );
}
