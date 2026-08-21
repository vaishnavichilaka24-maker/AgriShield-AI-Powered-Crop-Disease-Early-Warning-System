import React, { useState } from 'react';
import { 
  CropDiseaseAlert, 
  CropType, 
  SeverityLevel,
  WeatherAgriRisk,
  SupportedLanguage 
} from '../types';
import { 
  AlertTriangle, 
  Radio, 
  MapPin, 
  Wind, 
  Droplets, 
  Thermometer, 
  Send, 
  Share2, 
  Search, 
  Filter, 
  CheckCircle, 
  Copy, 
  Clock, 
  Flame, 
  ShieldAlert, 
  Layers 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTranslation } from '../i18n/useTranslation';

interface AlertsRadarProps {
  alerts: CropDiseaseAlert[];
  weatherRisk: WeatherAgriRisk;
  activeLocation: string;
  currentLanguage: SupportedLanguage;
  onSelectAlert: (alert: CropDiseaseAlert) => void;
  onOpenReportModal: () => void;
}

export const AlertsRadar: React.FC<AlertsRadarProps> = ({
  alerts,
  weatherRisk,
  activeLocation,
  currentLanguage,
  onSelectAlert,
  onOpenReportModal
}) => {
  const { t, getLocalizedSeverity } = useTranslation(currentLanguage);
  const [selectedCropFilter, setSelectedCropFilter] = useState<string>('all');
  const [selectedSeverityFilter, setSelectedSeverityFilter] = useState<string>('all');
  const [selectedAlertForBroadcast, setSelectedAlertForBroadcast] = useState<CropDiseaseAlert | null>(null);
  const [copied, setCopied] = useState(false);
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);

  const filteredAlerts = alerts.filter(alert => {
    if (selectedCropFilter !== 'all' && !alert.crop.includes(selectedCropFilter)) return false;
    if (selectedSeverityFilter !== 'all' && alert.severity !== selectedSeverityFilter) return false;
    return true;
  });

  const handleSimulateBroadcast = (alert: CropDiseaseAlert) => {
    setSelectedAlertForBroadcast(alert);
    setCopied(false);
    setBroadcastSuccess(false);
  };

  const handleConfirmSendBroadcast = () => {
    setBroadcastSuccess(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSelectedAlertForBroadcast(null);
      setBroadcastSuccess(false);
    }, 2400);
  };

  const getBroadcastMessage = (alert: CropDiseaseAlert) => {
    return `🚨 [AGRISHIELD CROP ALERT] 🚨
⚠️ Disease: ${alert.diseaseName}
🌾 Crop: ${alert.crop}
📍 Location: ${alert.region} (${alert.distanceKm} km from your farm)
⚡ Severity: ${alert.severity.toUpperCase()}
🌧️ Trigger: ${alert.weatherRiskTrigger}
✅ Recommended Action: ${alert.recommendedAction}
📲 Learn more & get organic remedies on AgriShield app.`;
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="alerts-radar-view" className="space-y-6">
      
      {/* Top Agricultural Microclimate & Spore Spread Risk Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white rounded-2xl p-6 border border-emerald-800/80 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {t.radarHeaderTitle}
              </span>
              <span className="text-xs text-emerald-300/70">&bull; {weatherRisk.location}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {t.sporeRisk}: <span className="text-rose-400 font-extrabold">{weatherRisk.fungalRisk.score}% ({t.sporeRiskHigh})</span>
            </h2>
            <p className="text-xs text-emerald-200/90 max-w-2xl leading-relaxed">
              {weatherRisk.fungalRisk.reason}
            </p>
          </div>

          {/* Microclimate telemetry pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-300 text-[11px] font-medium">
                <Thermometer className="w-3.5 h-3.5" />
                <span>{t.temp}</span>
              </div>
              <p className="text-base font-bold text-white mt-0.5">{weatherRisk.temperatureC}°C</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-sky-300 text-[11px] font-medium">
                <Droplets className="w-3.5 h-3.5" />
                <span>{t.humidity}</span>
              </div>
              <p className="text-base font-bold text-sky-200 mt-0.5">{weatherRisk.humidityPercent}%</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-teal-300 text-[11px] font-medium">
                <Wind className="w-3.5 h-3.5" />
                <span>{t.wind}</span>
              </div>
              <p className="text-base font-bold text-teal-200 mt-0.5">{weatherRisk.windSpeedKmh} km/h</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-300 text-[11px] font-medium">
                <Droplets className="w-3.5 h-3.5" />
                <span>{t.rainfall}</span>
              </div>
              <p className="text-base font-bold text-amber-200 mt-0.5">{weatherRisk.rainfallMm} mm</p>
            </div>
          </div>

        </div>

        <div className="mt-4 pt-3 border-t border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="text-emerald-300 font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.sprayWindow}: <strong className="text-white">{weatherRisk.bestSprayingWindow}</strong></span>
          </span>
          <button
            onClick={onOpenReportModal}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors self-start sm:self-auto flex items-center gap-1.5 cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{t.reportOutbreakBtn}</span>
          </button>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{t.filters}:</span>
          </span>
          
          <select
            value={selectedCropFilter}
            onChange={(e) => setSelectedCropFilter(e.target.value)}
            className="text-xs font-semibold bg-slate-50 border border-slate-300 text-slate-700 rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-emerald-600 outline-none cursor-pointer"
          >
            <option value="all">{t.allCrops}</option>
            <option value="Rice">Rice (Padi)</option>
            <option value="Maize">Maize / Corn</option>
            <option value="Chili">Chili / Pepper</option>
            <option value="Tomato">Tomato</option>
            <option value="Cassava">Cassava</option>
          </select>

          <select
            value={selectedSeverityFilter}
            onChange={(e) => setSelectedSeverityFilter(e.target.value)}
            className="text-xs font-semibold bg-slate-50 border border-slate-300 text-slate-700 rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-emerald-600 outline-none cursor-pointer"
          >
            <option value="all">{t.allSeverities}</option>
            <option value="critical">Critical</option>
            <option value="severe">Severe</option>
            <option value="moderate">Moderate</option>
          </select>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          {t.showingAlerts.replace('{count}', filteredAlerts.length.toString())}
        </div>
      </div>

      {/* Radar Map & Alert Cards Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Graphical Radar Sphere visualizer */}
        <div className="lg:col-span-5 bg-emerald-950 rounded-2xl p-6 border border-emerald-800 text-white flex flex-col items-center justify-between min-h-[380px] relative overflow-hidden shadow-sm">
          
          <div className="w-full flex items-center justify-between z-10">
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>{t.proximityRadar}</span>
            </span>
            <span className="text-[11px] bg-emerald-900/80 px-2 py-0.5 rounded text-emerald-200 border border-emerald-700">
              Center: {activeLocation.split(',')[0]}
            </span>
          </div>

          {/* Radar Circles Container */}
          <div className="relative w-64 h-64 my-6 flex items-center justify-center">
            
            {/* Range Rings */}
            <div className="absolute w-64 h-64 rounded-full border border-emerald-700/40"></div>
            <span className="absolute top-1 text-[9px] text-emerald-600 font-mono">35km</span>
            
            <div className="absolute w-44 h-44 rounded-full border border-emerald-600/50"></div>
            <span className="absolute top-10 text-[9px] text-emerald-500 font-mono">15km</span>
            
            <div className="absolute w-24 h-24 rounded-full border border-emerald-500/70 bg-emerald-900/20"></div>
            <span className="absolute top-20 text-[9px] text-emerald-400 font-mono">5km</span>

            {/* Sweep line animation */}
            <div className="absolute w-32 h-32 origin-bottom-right animate-spin" style={{ animationDuration: '6s' }}>
              <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>

            {/* Center farm dot */}
            <div className="relative w-4 h-4 rounded-full bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-400/50">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-950"></div>
            </div>

            {/* Alert Threat Pins placed on the radar */}
            {filteredAlerts.slice(0, 4).map((alt, idx) => {
              const radiusRatio = Math.min(1, alt.distanceKm / 35);
              const angle = (idx * 90 + 35) * (Math.PI / 180);
              const distancePx = 20 + radiusRatio * 90;
              const x = Math.cos(angle) * distancePx;
              const y = Math.sin(angle) * distancePx;

              const pinColor = alt.severity === 'critical' 
                ? 'bg-rose-500 text-white border-rose-300' 
                : alt.severity === 'severe'
                  ? 'bg-orange-500 text-white border-orange-300'
                  : 'bg-amber-500 text-slate-950 border-amber-300';

              return (
                <div
                  key={alt.id}
                  onClick={() => onSelectAlert(alt)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  className="absolute cursor-pointer group"
                >
                  <div className={`w-6 h-6 rounded-full ${pinColor} border-2 flex items-center justify-center font-black text-[10px] shadow-lg animate-bounce transition-transform group-hover:scale-125`}>
                    !
                  </div>
                  {/* Tooltip */}
                  <div className="absolute left-7 top-0 bg-slate-900 text-white text-[10px] p-1.5 rounded-lg whitespace-nowrap shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                    <p className="font-bold">{alt.diseaseName.split('(')[0]}</p>
                    <p className="text-slate-300">{alt.distanceKm} km {t.away}</p>
                  </div>
                </div>
              );
            })}

          </div>

          <div className="w-full flex items-center justify-between text-[11px] text-emerald-300/80 pt-2 border-t border-emerald-900">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>{t.criticalZone}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>{t.warningZone}</span>
            </span>
          </div>

        </div>

        {/* Right: Detailed Outbreak Cards List */}
        <div className="lg:col-span-7 space-y-3">
          {filteredAlerts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-2">
              <ShieldAlert className="w-10 h-10 mx-auto text-emerald-600" />
              <h3 className="font-bold text-slate-800 text-sm">{t.noAlertsFound}</h3>
              <p className="text-xs text-slate-500">{t.noAlertsSub}</p>
            </div>
          ) : (
            filteredAlerts.map((alert) => {
              const isCritical = alert.severity === 'critical';
              const isSevere = alert.severity === 'severe';
              const badge = getLocalizedSeverity(alert.severity);

              return (
                <div
                  key={alert.id}
                  className={`bg-white rounded-2xl p-5 border transition-all space-y-3.5 shadow-xs hover:shadow-md ${
                    isCritical
                      ? 'border-rose-300 bg-rose-50/20'
                      : isSevere
                        ? 'border-orange-300 bg-orange-50/20'
                        : 'border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${badge.bg}`}>
                          {badge.label}
                        </span>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {alert.crop}
                        </span>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{alert.distanceKm} km {t.away} &bull; {alert.region}</span>
                        </span>
                      </div>
                      
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        {alert.diseaseName}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-bold text-slate-500 block">
                        {t.reported} {alert.reportedAt}
                      </span>
                      <span className="text-xs font-semibold text-rose-700">
                        {alert.activeFarmsCount} {t.farmsAffected} ({alert.hectaresAffected} ha)
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-slate-100">
                    {alert.urgentNotice}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                    <div className="text-xs text-slate-600 flex items-center gap-1">
                      <strong className="text-emerald-800">{t.actionLabel}:</strong>
                      <span className="truncate max-w-sm">{alert.recommendedAction}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleSimulateBroadcast(alert)}
                        className="text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{t.sendWhatsappAlert}</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Broadcast Message Simulation Modal */}
      {selectedAlertForBroadcast && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4 border border-slate-200 animate-in fade-in zoom-in-95">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">{t.broadcastFarmerAlert}</h3>
                  <p className="text-[11px] text-slate-500">{t.dispatchGroups}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedAlertForBroadcast(null)}
                className="text-slate-400 hover:text-slate-700 text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {t.broadcastPreview}:
              </label>
              <div className="bg-slate-900 text-emerald-300 font-mono text-xs p-3.5 rounded-xl border border-slate-800 whitespace-pre-wrap leading-relaxed">
                {getBroadcastMessage(selectedAlertForBroadcast)}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200 text-xs text-emerald-900 space-y-1">
              <p className="font-bold">{t.broadcastScope}:</p>
              <p className="text-[11px] text-emerald-800">
                {t.broadcastScopeDetails.replace('{radius}', selectedAlertForBroadcast.threatRadiusKm.toString())}
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => copyMessage(getBroadcastMessage(selectedAlertForBroadcast))}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t.copied : t.copyText}</span>
              </button>

              <button
                type="button"
                onClick={handleConfirmSendBroadcast}
                disabled={broadcastSuccess}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {broadcastSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.dispatched}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.sendBroadcastAlert}</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
