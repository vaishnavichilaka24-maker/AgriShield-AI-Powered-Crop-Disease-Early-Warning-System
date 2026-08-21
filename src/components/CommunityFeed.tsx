import React, { useState } from 'react';
import { FarmerCommunityReport, CropType, SeverityLevel, SupportedLanguage } from '../types';
import { 
  Users, 
  PlusCircle, 
  ThumbsUp, 
  MessageSquare, 
  ShieldCheck, 
  MapPin, 
  Check, 
  AlertTriangle,
  Camera,
  Send,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTranslation } from '../i18n/useTranslation';

interface CommunityFeedProps {
  reports: FarmerCommunityReport[];
  activeLocation: string;
  currentLanguage: SupportedLanguage;
  onAddReport: (report: Omit<FarmerCommunityReport, 'id' | 'reportedAgo' | 'upvotes' | 'commentsCount'>) => void;
  isReportModalOpen: boolean;
  setIsReportModalOpen: (open: boolean) => void;
}

export const CommunityFeed: React.FC<CommunityFeedProps> = ({
  reports,
  activeLocation,
  currentLanguage,
  onAddReport,
  isReportModalOpen,
  setIsReportModalOpen
}) => {
  const { t, getLocalizedSeverity } = useTranslation(currentLanguage);
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());

  // Form State
  const [farmerName, setFarmerName] = useState('');
  const [villageName, setVillageName] = useState(activeLocation.split(',')[0] || 'Local Village');
  const [crop, setCrop] = useState<CropType>('Rice (Padi)');
  const [suspectedDisease, setSuspectedDisease] = useState('');
  const [severity, setSeverity] = useState<SeverityLevel>('moderate');
  const [description, setDescription] = useState('');

  const handleToggleUpvote = (id: string) => {
    setUpvotedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!farmerName || !description) return;

    onAddReport({
      farmerName,
      villageName,
      crop,
      suspectedDisease: suspectedDisease || `${crop} Discoloration & Lesions`,
      severity,
      verifiedByAI: true,
      description
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setIsReportModalOpen(false);
    setFarmerName('');
    setDescription('');
    setSuspectedDisease('');
  };

  return (
    <div id="community-reports-feed" className="space-y-6">
      
      {/* Community Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 to-slate-900 text-white rounded-2xl p-6 border border-emerald-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-extrabold bg-emerald-500 text-emerald-950 px-2 py-0.5 rounded">
              {t.cooperativeNetwork}
            </span>
            <span className="text-xs text-emerald-300">&bull; {t.realtimeFieldObservations}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {t.communityOutbreakReports}
          </h2>
          <p className="text-xs text-emerald-200/90 max-w-xl mt-1">
            {t.communityOutbreakSub}
          </p>
        </div>

        <button
          onClick={() => setIsReportModalOpen(true)}
          className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 self-start sm:self-auto shrink-0 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4 stroke-[2.5]" />
          <span>{t.reportObservationBtn}</span>
        </button>
      </div>

      {/* Reports Feed */}
      <div className="space-y-4">
        {reports.map((rep) => {
          const isUpvoted = upvotedIds.has(rep.id);
          const currentUpvotes = rep.upvotes + (isUpvoted ? 1 : 0);
          const badge = getLocalizedSeverity(rep.severity);

          return (
            <div
              key={rep.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center shrink-0">
                    {rep.farmerName.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-bold text-sm text-slate-900">{rep.farmerName}</h4>
                      {rep.verifiedByAI && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          <span>{t.aiVerified}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{rep.villageName} &bull; {rep.reportedAgo}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                    {rep.crop}
                  </span>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-1 rounded-lg border ${badge.bg}`}>
                    {badge.label}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-xs text-slate-900">
                  {t.suspectedDisease}: <span className="text-emerald-700">{rep.suspectedDisease}</span>
                </p>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {rep.description}
                </p>
              </div>

              {rep.photoUrl && (
                <div className="h-44 w-full sm:w-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img 
                    src={rep.photoUrl} 
                    alt={rep.suspectedDisease} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Action Bar */}
              <div className="flex items-center gap-3 pt-1 border-t border-slate-100 text-xs">
                <button
                  onClick={() => handleToggleUpvote(rep.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    isUpvoted 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{t.confirmHelpful} ({currentUpvotes})</span>
                </button>

                <div className="flex items-center gap-1 text-slate-500 font-medium">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{rep.commentsCount} {t.comments}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Report Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200 animate-in fade-in zoom-in-95">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">{t.submitDiseaseReport}</h3>
                  <p className="text-[11px] text-slate-500">{t.alertCommunityOfficers}</p>
                </div>
              </div>
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t.yourName}</label>
                  <input
                    type="text"
                    required
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                    placeholder="e.g. Pak Supriyadi"
                    className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t.villageDistrict}</label>
                  <input
                    type="text"
                    required
                    value={villageName}
                    onChange={(e) => setVillageName(e.target.value)}
                    placeholder="e.g. Desa Cipunagara"
                    className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t.targetCrop}</label>
                  <select
                    value={crop}
                    onChange={(e) => setCrop(e.target.value as CropType)}
                    className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:ring-1 focus:ring-emerald-600 outline-none bg-white cursor-pointer"
                  >
                    <option value="Rice (Padi)">Rice (Padi)</option>
                    <option value="Maize / Corn (Jagung)">Maize / Corn</option>
                    <option value="Chili / Pepper (Cabai)">Chili / Pepper</option>
                    <option value="Tomato (Tomat)">Tomato</option>
                    <option value="Cassava (Singkong)">Cassava</option>
                    <option value="Coffee (Kopi)">Coffee</option>
                    <option value="Banana (Pisang)">Banana</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t.threatSeverity}</label>
                  <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value as SeverityLevel)}
                    className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:ring-1 focus:ring-emerald-600 outline-none bg-white cursor-pointer"
                  >
                    <option value="moderate">Moderate Risk</option>
                    <option value="severe">Severe Threat</option>
                    <option value="critical">Critical / Rapid Spread</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.suspectedDisease}</label>
                <input
                  type="text"
                  value={suspectedDisease}
                  onChange={(e) => setSuspectedDisease(e.target.value)}
                  placeholder="e.g. Diamond leaf spots (Rice Blast) or Fruit Rot"
                  className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.fieldSymptoms}</label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t.fieldSymptomsPlaceholder}
                  className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:ring-1 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  {t.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.publishReport}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
