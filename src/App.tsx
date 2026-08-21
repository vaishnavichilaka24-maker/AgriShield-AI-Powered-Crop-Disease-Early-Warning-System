/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScannerModal } from './components/ScannerModal';
import { DiagnosisView } from './components/DiagnosisView';
import { AlertsRadar } from './components/AlertsRadar';
import { AgroMarketplace } from './components/AgroMarketplace';
import { CommunityFeed } from './components/CommunityFeed';
import { AgronomistChat } from './components/AgronomistChat';
import { YieldLossCalculator } from './components/YieldLossCalculator';
import { BlogView } from './components/BlogView';
import { 
  DiagnosisResult, 
  CropDiseaseAlert, 
  SupportedLanguage, 
  FarmerCommunityReport,
  AgroDealer,
  WeatherAgriRisk 
} from './types';
import { 
  INITIAL_DISEASE_ALERTS, 
  INITIAL_AGRO_DEALERS, 
  INITIAL_COMMUNITY_REPORTS, 
  INITIAL_WEATHER_RISK 
} from './data/mockData';
import { getLocalizedDemoDiagnosis } from './data/localizedDemoDiagnosis';
import { 
  Camera, 
  AlertTriangle, 
  Sparkles, 
  Layers, 
  Store, 
  Info,
  CheckCircle,
  TrendingUp,
  Leaf,
  Radio,
  Calculator
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTranslation } from './i18n/useTranslation';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [activeLocation, setActiveLocation] = useState('Subang & Karawang, West Java, Indonesia');
  const [activeTab, setActiveTab] = useState<'scanner' | 'radar' | 'community' | 'dealers' | 'agronomist' | 'blog'>('scanner');
  
  const { t } = useTranslation(currentLanguage);

  const [isScannerModalOpen, setIsScannerModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  
  const [currentDiagnosis, setCurrentDiagnosis] = useState<DiagnosisResult | null>(() => getLocalizedDemoDiagnosis('en'));
  const [alerts, setAlerts] = useState<CropDiseaseAlert[]>(INITIAL_DISEASE_ALERTS);
  const [dealers, setDealers] = useState<AgroDealer[]>(INITIAL_AGRO_DEALERS);
  const [communityReports, setCommunityReports] = useState<FarmerCommunityReport[]>(INITIAL_COMMUNITY_REPORTS);
  const [weatherRisk, setWeatherRisk] = useState<WeatherAgriRisk>(INITIAL_WEATHER_RISK);

  const [followupQuestion, setFollowupQuestion] = useState<string | undefined>();

  // Language Change Handler with immediate demo diagnosis localization
  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setCurrentLanguage(newLang);
    // If the currently viewed diagnosis is a demo diagnosis, switch it to the localized version
    if (!currentDiagnosis || currentDiagnosis.id.startsWith('diag-demo')) {
      setCurrentDiagnosis(getLocalizedDemoDiagnosis(newLang));
    }
  };


  // Diagnostic API Handler
  const handleRunDiagnosis = async (params: {
    imageBase64?: string;
    cropType: any;
    symptomsDescription: string;
    location: string;
    language: SupportedLanguage;
  }) => {
    setIsDiagnosing(true);
    try {
      const response = await fetch('/api/diagnose-crop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        throw new Error(`Server returned error: ${response.status}`);
      }

      const result: DiagnosisResult = await response.json();
      
      // Preserve photo thumbnail if passed
      if (params.imageBase64) {
        result.imageUrl = params.imageBase64;
      }

      setCurrentDiagnosis(result);
      setIsScannerModalOpen(false);
      setActiveTab('scanner');

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      console.error('Diagnosis failed:', err);
      alert('Unable to analyze image. Please verify your connection or try another sample.');
    } finally {
      setIsDiagnosing(false);
    }
  };

  // Broadcast alert to radar & nearby farms
  const handleBroadcastAlert = (diag: DiagnosisResult) => {
    const newAlert: CropDiseaseAlert = {
      id: 'alt-' + Date.now(),
      crop: diag.crop,
      diseaseName: `${diag.diseaseName} Outbreak Alert`,
      pathogenType: diag.pathogenType,
      severity: diag.severity,
      region: activeLocation,
      country: activeLocation.split(',').pop()?.trim() || 'Regional Basin',
      coordinates: { lat: -6.57, lng: 107.75 },
      distanceKm: 0.8,
      reportedAt: 'Just now',
      activeFarmsCount: 6,
      threatRadiusKm: 15,
      weatherRiskTrigger: `${weatherRisk.humidityPercent}% Humidity & High Leaf Wetness`,
      status: 'spreading',
      hectaresAffected: 12,
      urgentNotice: `Farmer in ${activeLocation.split(',')[0]} confirmed ${diag.diseaseName}. Immediate preventive spraying advised.`,
      recommendedAction: diag.organicRemedies[0]?.title || 'Apply bio-fungicide immediately.'
    };

    setAlerts(prev => [newAlert, ...prev]);

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  // Add new community report
  const handleAddCommunityReport = (rep: Omit<FarmerCommunityReport, 'id' | 'reportedAgo' | 'upvotes' | 'commentsCount'>) => {
    const newRep: FarmerCommunityReport = {
      id: 'rep-' + Date.now(),
      ...rep,
      reportedAgo: 'Just now',
      upvotes: 1,
      commentsCount: 0
    };
    setCommunityReports(prev => [newRep, ...prev]);
  };

  // Ask Agronomist follow-up
  const handleAskFollowup = (question: string) => {
    setFollowupQuestion(question);
    setActiveTab('agronomist');
  };

  return (
    <div className="min-h-screen bg-slate-100/90 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Header */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        activeLocation={activeLocation}
        onLocationChange={setActiveLocation}
        onOpenScanner={() => setIsScannerModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadAlertsCount={alerts.filter(a => a.severity === 'critical').length}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full space-y-6">
        
        {/* Tab 1: AI Diagnostic & Farm Advisory View */}
        {activeTab === 'scanner' && (
          <div className="space-y-6">
            
            {/* Quick Scanner Action Callout */}
            <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-emerald-950 text-white rounded-2xl p-6 border border-emerald-800 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-black bg-emerald-500 text-emerald-950 px-2 py-0.5 rounded">
                    Field Pathologist AI
                  </span>
                  <span className="text-xs text-emerald-300">
                    &bull; Instant Multimodal Leaf Analysis
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {t.protectCropsHeading}
                </h1>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  {t.protectCropsSubheading}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  id="primary-scan-action-btn"
                  onClick={() => setIsScannerModalOpen(true)}
                  className="bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-emerald-950 font-black text-xs px-5 py-3 rounded-xl shadow-lg shadow-emerald-950/40 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Camera className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.scanLeafOrUpload}</span>
                </button>
              </div>
            </div>

            {/* Active Diagnostic Report */}
            {currentDiagnosis && (
              <DiagnosisView
                diagnosis={currentDiagnosis}
                currentLanguage={currentLanguage}
                onBroadcastAlert={handleBroadcastAlert}
                onFindSupplies={() => setActiveTab('dealers')}
                onAskFollowup={handleAskFollowup}
              />
            )}

            {/* Yield Loss ROI Estimator */}
            <YieldLossCalculator 
              initialCrop={currentDiagnosis?.crop}
              initialLossPercent={currentDiagnosis?.estimatedYieldLossPercent || 40}
              currentLanguage={currentLanguage}
            />

          </div>
        )}

        {/* Tab 2: Outbreak Radar & Vector Risk Forecast */}
        {activeTab === 'radar' && (
          <AlertsRadar
            alerts={alerts}
            weatherRisk={weatherRisk}
            activeLocation={activeLocation}
            currentLanguage={currentLanguage}
            onSelectAlert={(alt) => {
              alert(`Alert: ${alt.diseaseName} detected in ${alt.region}. Recommendation: ${alt.recommendedAction}`);
            }}
            onOpenReportModal={() => setIsReportModalOpen(true)}
          />
        )}

        {/* Tab 3: Community Outbreak Reports & Cooperative Feed */}
        {activeTab === 'community' && (
          <CommunityFeed
            reports={communityReports}
            activeLocation={activeLocation}
            currentLanguage={currentLanguage}
            onAddReport={handleAddCommunityReport}
            isReportModalOpen={isReportModalOpen}
            setIsReportModalOpen={setIsReportModalOpen}
          />
        )}

        {/* Tab 4: Agro-Dealers & Organic Farm Input Supplies */}
        {activeTab === 'dealers' && (
          <AgroMarketplace
            dealers={dealers}
            activeLocation={activeLocation}
            currentLanguage={currentLanguage}
          />
        )}

        {/* Tab 5: AI Agronomist Extension Officer Q&A */}
        {activeTab === 'agronomist' && (
          <AgronomistChat
            currentDiagnosis={currentDiagnosis}
            currentLanguage={currentLanguage}
            initialQuestion={followupQuestion}
          />
        )}

        {/* Tab 6: Crop Care & Farm Knowledge Blog */}
        {activeTab === 'blog' && (
          <BlogView
            currentLanguage={currentLanguage}
            onAskAgronomistTopic={(question) => {
              setFollowupQuestion(question);
              setActiveTab('agronomist');
            }}
          />
        )}

      </main>

      {/* Scanner Modal */}
      <ScannerModal
        isOpen={isScannerModalOpen}
        onClose={() => setIsScannerModalOpen(false)}
        onDiagnose={handleRunDiagnosis}
        isLoading={isDiagnosing}
        currentLanguage={currentLanguage}
        activeLocation={activeLocation}
      />

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-300/80 border-t border-emerald-900 py-6 text-xs mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">{t.appTitle}</span>
            <span>&bull; {t.footerTagline}</span>
          </div>
          <p className="text-emerald-400/60 text-[11px]">
            {t.footerSub}
          </p>
        </div>
      </footer>

    </div>
  );
}
