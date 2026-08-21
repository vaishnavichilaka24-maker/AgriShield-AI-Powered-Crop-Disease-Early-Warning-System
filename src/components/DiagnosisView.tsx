import React, { useState } from 'react';
import { 
  DiagnosisResult, 
  SupportedLanguage 
} from '../types';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Volume2, 
  VolumeX, 
  Leaf, 
  FlaskConical, 
  Calendar, 
  Percent, 
  Share2, 
  MapPin, 
  Store, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  TrendingDown,
  Info,
  Clock,
  Radio,
  FileCheck
} from 'lucide-react';
import { playPcmAudio, speakWithBrowserSpeech, stopAudioPlayback } from '../utils/audioUtils';
import { useTranslation } from '../i18n/useTranslation';

interface DiagnosisViewProps {
  diagnosis: DiagnosisResult;
  currentLanguage: SupportedLanguage;
  onBroadcastAlert: (diagnosis: DiagnosisResult) => void;
  onFindSupplies: () => void;
  onAskFollowup: (question: string) => void;
}

export const DiagnosisView: React.FC<DiagnosisViewProps> = ({
  diagnosis,
  currentLanguage,
  onBroadcastAlert,
  onFindSupplies,
  onAskFollowup,
}) => {
  const { t, getLocalizedSeverity, getLocalizedPathogenType } = useTranslation(currentLanguage);
  const [activeTreatmentTab, setActiveTreatmentTab] = useState<'organic' | 'chemical' | 'prevention'>('organic');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const [broadcasted, setBroadcasted] = useState(false);

  const severityBadge = getLocalizedSeverity(diagnosis.severity);
  const pathogenBadge = getLocalizedPathogenType(diagnosis.pathogenType);

  const getCostLevelBadge = (level: string) => {
    switch (level.toLowerCase()) {
      case 'free':
        return t.zeroCost;
      case 'low':
        return t.lowCost;
      case 'medium':
        return t.mediumCost;
      default:
        return level;
    }
  };

  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      stopAudioPlayback();
      setIsPlayingAudio(false);
      return;
    }

    setAudioLoading(true);
    try {
      // Try Gemini TTS server endpoint first
      const res = await fetch('/api/generate-tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: diagnosis.audioScript,
          language: currentLanguage
        })
      });

      const data = await res.json();

      if (data.audioBase64) {
        setIsPlayingAudio(true);
        setAudioLoading(false);
        await playPcmAudio(data.audioBase64, data.sampleRate || 24000);
        setIsPlayingAudio(false);
      } else {
        // Fallback to browser Web Speech API
        setAudioLoading(false);
        setIsPlayingAudio(true);
        const played = speakWithBrowserSpeech(diagnosis.audioScript, currentLanguage, () => {
          setIsPlayingAudio(false);
        });
        if (!played) {
          setIsPlayingAudio(false);
        }
      }
    } catch (err) {
      console.warn('TTS API error, falling back to browser speech synthesis:', err);
      setAudioLoading(false);
      setIsPlayingAudio(true);
      speakWithBrowserSpeech(diagnosis.audioScript, currentLanguage, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleBroadcastClick = () => {
    onBroadcastAlert(diagnosis);
    setBroadcasted(true);
  };

  return (
    <div id="diagnosis-result-view" className="space-y-6">
      
      {/* Top Banner with Image & Primary Pathology Diagnosis */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          
          {/* Diagnostic Photo Thumbnail */}
          {diagnosis.imageUrl && (
            <div className="w-full md:w-56 h-48 rounded-xl overflow-hidden shrink-0 border border-slate-200 relative bg-slate-100">
              <img 
                src={diagnosis.imageUrl} 
                alt={diagnosis.diseaseName} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                {diagnosis.crop}
              </div>
            </div>
          )}

          {/* Diagnostic Overview */}
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${severityBadge.bg}`}>
                <span className={`w-2 h-2 rounded-full ${severityBadge.dot} animate-pulse`}></span>
                {severityBadge.label}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${pathogenBadge.bg}`}>
                {pathogenBadge.label}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {diagnosis.crop} &bull; {diagnosis.regionContext}
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {diagnosis.diseaseName}
              </h1>
              {diagnosis.localName && (
                <p className="text-sm font-semibold text-emerald-700 mt-0.5">
                  {t.localVernacular}: &ldquo;{diagnosis.localName}&rdquo;
                </p>
              )}
              <p className="text-xs italic text-slate-500 mt-0.5">
                {t.pathogen}: {diagnosis.scientificName}
              </p>
            </div>

            {/* Confidence meter & Potential yield loss */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-600">{t.diagConfidence}</span>
                  <span className="font-bold text-emerald-700">{diagnosis.confidence}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${diagnosis.confidence}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-rose-50 rounded-xl p-3 border border-rose-200/80 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-rose-700">{t.expectedLossWithoutTreatment}</p>
                  <p className="text-lg font-black text-rose-900">-{diagnosis.estimatedYieldLossPercent}% {t.expectedLoss}</p>
                </div>
                <TrendingDown className="w-6 h-6 text-rose-500" />
              </div>
            </div>

            {/* Spoken Voice Audio Player bar */}
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleToggleAudio}
                  disabled={audioLoading}
                  className="w-10 h-10 rounded-lg bg-emerald-500 text-emerald-950 hover:bg-emerald-400 font-bold flex items-center justify-center shrink-0 shadow transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                  title="Listen to farmer spoken audio instructions"
                >
                  {isPlayingAudio ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold">{t.spokenAdvisoryTitle}</p>
                    {isPlayingAudio && (
                      <span className="flex items-center gap-0.5 h-3">
                        <span className="w-1 h-2 bg-emerald-400 animate-pulse"></span>
                        <span className="w-1 h-3 bg-emerald-400 animate-pulse delay-75"></span>
                        <span className="w-1 h-1.5 bg-emerald-400 animate-pulse delay-150"></span>
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-emerald-200 line-clamp-1">
                    {diagnosis.audioScript}
                  </p>
                </div>
              </div>
              <button
                onClick={handleToggleAudio}
                className="text-xs font-bold text-emerald-300 hover:text-white underline shrink-0 cursor-pointer"
              >
                {isPlayingAudio ? t.stopVoice : t.playVoice}
              </button>
            </div>

          </div>
        </div>

        {/* Symptoms observation row */}
        <div className="bg-slate-50/80 px-6 py-3.5 border-t border-slate-200">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {t.observedSymptoms}
          </p>
          <div className="flex flex-wrap gap-2">
            {diagnosis.symptoms.map((symptom, i) => (
              <span 
                key={i} 
                className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-xs font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{symptom}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Protocols: Organic vs Chemical vs Cultural Prevention */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50/70 p-1.5 gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTreatmentTab('organic')}
            className={`flex-1 min-w-[160px] py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTreatmentTab === 'organic'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>{t.tabOrganicSolutions}</span>
            <span className="text-[10px] bg-emerald-700/60 text-white px-1.5 py-0.2 rounded-full">
              {diagnosis.organicRemedies.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTreatmentTab('chemical')}
            className={`flex-1 min-w-[160px] py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTreatmentTab === 'chemical'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>{t.tabChemicalProtocol}</span>
            <span className="text-[10px] bg-emerald-700/60 text-white px-1.5 py-0.2 rounded-full">
              {diagnosis.chemicalRemedies.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTreatmentTab('prevention')}
            className={`flex-1 min-w-[160px] py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTreatmentTab === 'prevention'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t.tabPrevention}</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          
          {/* Tab 1: Organic & Low-Cost Home Remedies */}
          {activeTreatmentTab === 'organic' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <span>{t.organicHeading}</span>
                    <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                      {t.recommendedFirst}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t.organicSubheading}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diagnosis.organicRemedies.map((remedy, idx) => (
                  <div 
                    key={idx}
                    className="border border-emerald-200/80 rounded-xl p-4 bg-emerald-50/30 hover:bg-emerald-50/60 transition-colors flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-sm text-emerald-950">
                          {remedy.title}
                        </h4>
                        <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                          {getCostLevelBadge(remedy.costLevel)}
                        </span>
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed">
                        {remedy.recipe}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-emerald-200/50 flex flex-wrap items-center justify-between gap-2 text-[11px] text-emerald-800 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.prepTime}: {remedy.prepTime}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-slate-500">{t.ingredients}:</span>
                        <span>{remedy.materials.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Standard Chemical Curative Protocol */}
          {activeTreatmentTab === 'chemical' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span>{t.chemicalHeading}</span>
                  <span className="text-[11px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                    {t.curativeKnockdown}
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  {t.chemicalSubheading}
                </p>
              </div>

              <div className="space-y-3">
                {diagnosis.chemicalRemedies.map((chem, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t.activeIngredient}</span>
                        <h4 className="font-bold text-sm text-slate-900">{chem.activeIngredient}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-amber-50 text-amber-800 font-bold px-2.5 py-1 rounded-lg border border-amber-200">
                          {t.dosage}: {chem.dosage}
                        </span>
                        <span className="text-xs bg-rose-50 text-rose-800 font-bold px-2.5 py-1 rounded-lg border border-rose-200">
                          {t.phiHarvest}: {chem.safetyIntervalDays} Days
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div>
                        <p className="font-semibold text-slate-600 mb-0.5">{t.tradeBrands}:</p>
                        <p className="text-slate-800">{chem.tradeNames.join(', ')}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-600 mb-0.5">{t.safetyPrecautions}:</p>
                        <p className="text-slate-700">{chem.precautions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Cultural Prevention */}
          {activeTreatmentTab === 'prevention' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  {t.preventionHeading}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.preventionSubheading}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {diagnosis.preventativeMeasures.map((measure, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">
                      {measure}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Action Connectors: Outbreak Broadcast, Agro-Dealer stock, Followup Chat */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Broadcast Outbreak Warning to Nearby Farms */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 flex flex-col justify-between space-y-3">
          <div>
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-2 shadow-sm">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">
              {t.broadcastOutbreak}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {t.broadcastDesc}
            </p>
          </div>
          <button
            onClick={handleBroadcastClick}
            disabled={broadcasted}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer ${
              broadcasted 
                ? 'bg-emerald-600 text-white' 
                : 'bg-amber-600 hover:bg-amber-700 text-white active:scale-95'
            }`}
          >
            {broadcasted ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.broadcastedBtn}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>{t.broadcastBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Find Treatments at Nearest Agro-Dealer */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-200 flex flex-col justify-between space-y-3">
          <div>
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-2 shadow-sm">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">
              {t.nearestDealers}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {t.dealersDesc}
            </p>
          </div>
          <button
            onClick={onFindSupplies}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>{t.viewSuppliesBtn}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Ask Agronomist AI Q&A */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 border border-indigo-200 flex flex-col justify-between space-y-3">
          <div>
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-2 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">
              {t.askAgronomistCard}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {t.askAgronomistDesc}
            </p>
          </div>
          <button
            onClick={() => onAskFollowup(`What is the best time of day to apply treatment for ${diagnosis.diseaseName} in rainy conditions?`)}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>{t.askAgronomistBtn}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
