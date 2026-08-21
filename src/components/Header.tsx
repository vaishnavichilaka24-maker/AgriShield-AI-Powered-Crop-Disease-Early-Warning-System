import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldAlert, 
  MapPin, 
  Globe, 
  Camera, 
  Wifi, 
  AlertTriangle, 
  Layers, 
  Volume2,
  Sparkles,
  ChevronDown,
  Check,
  BookOpen
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/mockData';
import { useTranslation } from '../i18n/useTranslation';

interface HeaderProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  activeLocation: string;
  onLocationChange: (loc: string) => void;
  onOpenScanner: () => void;
  activeTab: 'scanner' | 'radar' | 'community' | 'dealers' | 'agronomist' | 'blog';
  setActiveTab: (tab: 'scanner' | 'radar' | 'community' | 'dealers' | 'agronomist' | 'blog') => void;
  unreadAlertsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  activeLocation,
  onLocationChange,
  onOpenScanner,
  activeTab,
  setActiveTab,
  unreadAlertsCount,
}) => {
  const { t } = useTranslation(currentLanguage);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLocOpen, setIsLocOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const locDropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (locDropdownRef.current && !locDropdownRef.current.contains(event.target as Node)) {
        setIsLocOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const popularLocations = [
    'Subang & Karawang, West Java, Indonesia',
    'Guntur District, Andhra Pradesh, India',
    'Bogra Sadar, Rajshahi, Bangladesh',
    'Uasin Gishu County, Eldoret, Kenya',
    'Mekong Delta, Can Tho, Vietnam',
    'Chiapas Highland Valley, Mexico',
    'Luzon Central Plains, Philippines'
  ];

  return (
    <header id="app-header" className="sticky top-0 z-40 bg-emerald-950/95 text-white border-b border-emerald-800/60 backdrop-blur-md">
      {/* Top emergency warning ticker */}
      <div className="bg-amber-600/90 text-amber-50 px-4 py-1 text-xs font-medium flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 truncate">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-100"></span>
          </span>
          <span className="font-semibold uppercase tracking-wider text-[11px] bg-black/20 px-1.5 py-0.5 rounded">
            {t.liveWarning}
          </span>
          <span className="truncate">
            {t.liveWarningText}
          </span>
        </div>
        <button 
          onClick={() => setActiveTab('radar')}
          className="underline hover:text-white shrink-0 ml-3 text-[11px] font-semibold cursor-pointer"
        >
          {t.viewRadar}
        </button>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div 
              onClick={() => setActiveTab('scanner')}
              className="cursor-pointer flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-6 h-6 text-emerald-950 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg tracking-tight text-white">{t.appTitle}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    AI Alert
                  </span>
                </div>
                <p className="text-[11px] text-emerald-300/80 leading-none">{t.appSubtitle}</p>
              </div>
            </div>

            {/* Location selector dropdown */}
            <div className="hidden lg:flex items-center ml-4 pl-4 border-l border-emerald-800/80">
              <div className="relative" ref={locDropdownRef}>
                <button 
                  onClick={() => setIsLocOpen(!isLocOpen)}
                  className="flex items-center gap-1.5 text-xs text-emerald-200 bg-emerald-900/60 hover:bg-emerald-900 px-3 py-1.5 rounded-lg border border-emerald-700/50 transition-colors cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="max-w-[190px] truncate">{activeLocation}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
                </button>
                {isLocOpen && (
                  <div className="absolute left-0 mt-1 w-72 bg-emerald-900 text-emerald-100 rounded-xl shadow-xl border border-emerald-700 p-2 z-50">
                    <p className="text-[10px] font-semibold uppercase text-emerald-400 px-2 py-1">{t.selectBasin}</p>
                    {popularLocations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          onLocationChange(loc);
                          setIsLocOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors truncate cursor-pointer ${
                          activeLocation === loc ? 'bg-emerald-700 text-white font-medium' : 'hover:bg-emerald-800/80 text-emerald-200'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-emerald-900/60 p-1 rounded-xl border border-emerald-800/70">
            <button
              onClick={() => setActiveTab('scanner')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'scanner' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{t.tabDiagnostic}</span>
            </button>
            <button
              onClick={() => setActiveTab('radar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 relative cursor-pointer ${
                activeTab === 'radar' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.tabRadar}</span>
              {unreadAlertsCount > 0 && (
                <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full animate-pulse">
                  {unreadAlertsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'community' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.tabCommunity}</span>
            </button>
            <button
              onClick={() => setActiveTab('dealers')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'dealers' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <span>{t.tabDealers}</span>
            </button>
            <button
              onClick={() => setActiveTab('agronomist')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'agronomist' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{t.tabAgronomist}</span>
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'blog' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-800/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.tabBlog || 'Blog'}</span>
            </button>
          </nav>

          {/* Right Action: Language Switcher & Quick Scan Button */}
          <div className="flex items-center gap-2">
            
            {/* Language Switcher */}
            <div className="relative" ref={langDropdownRef}>
              <button 
                id="language-selector-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isLangOpen 
                    ? 'bg-emerald-700 text-white border-emerald-400 ring-2 ring-emerald-500/50' 
                    : 'text-emerald-100 bg-emerald-900 hover:bg-emerald-800 border-emerald-700/60'
                }`}
                title="Select Spoken & Written Language"
                aria-expanded={isLangOpen}
              >
                <span className="text-base">{currentLangObj.flag}</span>
                <span className="font-semibold">{currentLangObj.nativeName}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-emerald-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-64 max-h-96 overflow-y-auto bg-emerald-950 text-white rounded-xl shadow-2xl border border-emerald-600/80 p-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-2 py-1.5 border-b border-emerald-800/80 mb-1 flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      {t.spokenWrittenLanguage}
                    </p>
                    <span className="text-[10px] text-emerald-300 bg-emerald-900 px-1.5 py-0.5 rounded font-mono">
                      13 Languages
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {SUPPORTED_LANGUAGES.map((lang) => {
                      const isSelected = currentLanguage === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onLanguageChange(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-2 text-xs rounded-lg transition-all cursor-pointer ${
                            isSelected 
                              ? 'bg-emerald-600 text-white font-bold shadow-xs' 
                              : 'text-emerald-200 hover:bg-emerald-900 hover:text-white'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-base">{lang.flag}</span>
                            <span className="text-left">
                              <span className="block font-medium leading-tight">{lang.nativeName}</span>
                              <span className="block text-[10px] opacity-70 leading-tight">{lang.name}</span>
                            </span>
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-emerald-400/80 uppercase font-mono">{lang.code}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Scan Action Button */}
            <button
              id="instant-scan-header-btn"
              onClick={onOpenScanner}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-bold text-xs px-3.5 py-2 rounded-xl shadow-md shadow-emerald-900/30 hover:shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Camera className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">{t.scanLeafBtn}</span>
              <span className="sm:hidden">{t.scanLeafShort}</span>
            </button>
          </div>

        </div>

        {/* Mobile Tab Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-emerald-800/60 overflow-x-auto gap-1 text-xs">
          <button
            onClick={() => setActiveTab('scanner')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium cursor-pointer ${
              activeTab === 'scanner' ? 'bg-emerald-600 text-white' : 'text-emerald-300'
            }`}
          >
            {t.tabDiagnostic}
          </button>
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium flex items-center gap-1 cursor-pointer ${
              activeTab === 'radar' ? 'bg-emerald-600 text-white' : 'text-emerald-300'
            }`}
          >
            <span>{t.tabRadar}</span>
            {unreadAlertsCount > 0 && (
              <span className="bg-rose-500 text-[10px] px-1 rounded-full text-white font-bold">
                {unreadAlertsCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium cursor-pointer ${
              activeTab === 'community' ? 'bg-emerald-600 text-white' : 'text-emerald-300'
            }`}
          >
            {t.tabCommunity}
          </button>
          <button
            onClick={() => setActiveTab('dealers')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium cursor-pointer ${
              activeTab === 'dealers' ? 'bg-emerald-600 text-white' : 'text-emerald-300'
            }`}
          >
            {t.tabDealers}
          </button>
          <button
            onClick={() => setActiveTab('agronomist')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium cursor-pointer ${
              activeTab === 'agronomist' ? 'bg-emerald-600 text-white' : 'text-emerald-300'
            }`}
          >
            {t.tabAgronomist}
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap font-medium cursor-pointer ${
              activeTab === 'blog' ? 'bg-emerald-600 text-white' : 'text-emerald-300'
            }`}
          >
            {t.tabBlog || 'Blog'}
          </button>
        </div>
      </div>
    </header>
  );
};

