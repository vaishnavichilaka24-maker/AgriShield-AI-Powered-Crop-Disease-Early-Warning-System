import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Camera, 
  Upload, 
  Sparkles, 
  Leaf, 
  AlertCircle, 
  Check, 
  RefreshCw,
  HelpCircle,
  Maximize2
} from 'lucide-react';
import { CropType, SupportedLanguage } from '../types';
import { SAMPLE_DISEASE_PRESETS } from '../data/mockData';
import { useTranslation } from '../i18n/useTranslation';

interface ScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDiagnose: (data: {
    imageBase64?: string;
    cropType: CropType;
    symptomsDescription: string;
    location: string;
    language: SupportedLanguage;
  }) => Promise<void>;
  isLoading: boolean;
  currentLanguage: SupportedLanguage;
  activeLocation: string;
}

const CROP_OPTIONS: CropType[] = [
  'Rice (Padi)',
  'Maize / Corn (Jagung)',
  'Chili / Pepper (Cabai)',
  'Tomato (Tomat)',
  'Cassava (Singkong)',
  'Coffee (Kopi)',
  'Banana (Pisang)',
  'Soybean (Kedelai)',
  'Wheat / Small Grains',
  'Other / General'
];

export const ScannerModal: React.FC<ScannerModalProps> = ({
  isOpen,
  onClose,
  onDiagnose,
  isLoading,
  currentLanguage,
  activeLocation
}) => {
  const { t } = useTranslation(currentLanguage);
  const [selectedCrop, setSelectedCrop] = useState<CropType>('Rice (Padi)');
  const [symptomsText, setSymptomsText] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'upload' | 'camera' | 'samples'>('samples');
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // Clean camera stream on close
  useEffect(() => {
    if (!isOpen || activeMode !== 'camera') {
      stopCamera();
    }
  }, [isOpen, activeMode]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraActive(true);
    } catch (err: any) {
      console.error('Camera access failed:', err);
      setCameraError('Camera access unavailable. You can upload a photo or use a sample preset.');
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    setCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setImagePreview(dataUrl);
      stopCamera();
      setActiveMode('upload');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPreset = (preset: typeof SAMPLE_DISEASE_PRESETS[0]) => {
    setSelectedCrop(preset.crop);
    setImagePreview(preset.imageUrl);
    setSymptomsText(preset.sampleSymptoms);
  };

  const handleTagClick = (tag: string) => {
    if (symptomsText.includes(tag)) return;
    setSymptomsText(prev => prev ? `${prev}, ${tag}` : tag);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onDiagnose({
      imageBase64: imagePreview || undefined,
      cropType: selectedCrop,
      symptomsDescription: symptomsText || 'Observed visual foliar symptoms and leaf discoloration',
      location: activeLocation,
      language: currentLanguage
    });
  };

  if (!isOpen) return null;

  const quickSymptoms = [
    t.symptomYellowStripes,
    t.symptomSpindleSpots,
    t.symptomBlackSpots,
    t.symptomSawdust,
    t.symptomWhitePowder,
    t.symptomMosaicCurling,
    t.symptomWiltingStem,
    t.symptomRapidDrying
  ];

  return (
    <div id="crop-scanner-modal" className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl border border-emerald-900/20 w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-emerald-950 text-white px-5 py-4 flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-base tracking-tight flex items-center gap-2">
                <span>{t.scannerTitle}</span>
                <span className="text-[10px] bg-emerald-500 text-emerald-950 font-extrabold px-1.5 py-0.5 rounded uppercase">
                  Multimodal
                </span>
              </h2>
              <p className="text-xs text-emerald-300/80">{t.scannerSubtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-300 hover:text-white p-1 rounded-lg hover:bg-emerald-900/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          
          {/* Crop Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.selectTargetCrop}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {CROP_OPTIONS.slice(0, 10).map((crop) => (
                <button
                  key={crop}
                  type="button"
                  onClick={() => setSelectedCrop(crop)}
                  className={`px-2.5 py-2 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                    selectedCrop === crop
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-600/20 ring-2 ring-emerald-600/20'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <span className="block truncate">{crop}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Switcher: Sample Presets | Camera | Upload */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.cropImageInput}</span>
              </label>
              <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs font-medium">
                <button
                  type="button"
                  onClick={() => { setActiveMode('samples'); stopCamera(); }}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    activeMode === 'samples' ? 'bg-white shadow-sm font-bold text-emerald-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.fieldPresets}
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveMode('camera'); startCamera(); }}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    activeMode === 'camera' ? 'bg-white shadow-sm font-bold text-emerald-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.liveCamera}
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveMode('upload'); stopCamera(); }}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    activeMode === 'upload' ? 'bg-white shadow-sm font-bold text-emerald-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.uploadPhoto}
                </button>
              </div>
            </div>

            {/* Mode 1: Quick Field Sample Presets */}
            {activeMode === 'samples' && (
              <div className="space-y-2">
                <p className="text-xs text-slate-500">
                  {t.selectSamplePrompt}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SAMPLE_DISEASE_PRESETS.map((preset) => (
                    <div
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset)}
                      className={`cursor-pointer rounded-xl border p-2 flex flex-col gap-2 transition-all relative overflow-hidden group ${
                        imagePreview === preset.imageUrl
                          ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/30'
                          : 'border-slate-200 hover:border-emerald-400 bg-white'
                      }`}
                    >
                      <div className="h-24 w-full rounded-lg overflow-hidden relative bg-slate-100">
                        <img 
                          src={preset.imageUrl} 
                          alt={preset.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        {imagePreview === preset.imageUrl && (
                          <div className="absolute top-1.5 right-1.5 bg-emerald-600 text-white rounded-full p-1 shadow">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                        <span className="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-semibold backdrop-blur-xs">
                          {preset.crop.split(' ')[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-slate-900 truncate leading-tight">
                          {preset.name.split('(')[0]}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                          {preset.shortDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mode 2: Live Camera */}
            {activeMode === 'camera' && (
              <div className="rounded-xl border border-slate-200 bg-slate-950 overflow-hidden relative min-h-[260px] flex flex-col items-center justify-center text-white">
                {cameraError ? (
                  <div className="p-6 text-center text-rose-300 max-w-sm space-y-2">
                    <AlertCircle className="w-8 h-8 mx-auto text-rose-400" />
                    <p className="text-xs">{cameraError}</p>
                    <button
                      type="button"
                      onClick={() => setActiveMode('upload')}
                      className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold cursor-pointer"
                    >
                      Switch to Upload
                    </button>
                  </div>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      className="w-full max-h-[340px] object-cover"
                    />
                    {/* Targeting reticle */}
                    <div className="absolute inset-8 border-2 border-emerald-400/70 rounded-xl pointer-events-none flex items-center justify-center">
                      <span className="text-[11px] bg-black/60 px-2 py-1 rounded text-emerald-200 font-medium">
                        Center affected leaf or fruit here
                      </span>
                    </div>
                    {/* Capture button */}
                    <div className="absolute bottom-4 inset-x-0 flex justify-center">
                      <button
                        type="button"
                        onClick={capturePhoto}
                        className="bg-white text-emerald-950 hover:bg-emerald-100 font-bold px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
                      >
                        <Camera className="w-4 h-4 text-emerald-600" />
                        <span>Snap Photo</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Mode 3: File Upload */}
            {activeMode === 'upload' && (
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                {imagePreview ? (
                  <div className="relative rounded-xl border border-slate-200 overflow-hidden bg-slate-100 max-h-56 flex items-center justify-center group">
                    <img 
                      src={imagePreview} 
                      alt="Crop Leaf Preview" 
                      className="max-h-56 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow hover:bg-slate-50 cursor-pointer"
                      >
                        Change Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow hover:bg-rose-700 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-8 text-center bg-slate-50/60 hover:bg-emerald-50/20 transition-all flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{t.clickToUpload}</p>
                      <p className="text-[11px] text-slate-500">{t.uploadFormats}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Observed Symptoms Text Area & Quick Tags */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              {t.describeSymptoms}
            </label>
            <textarea
              value={symptomsText}
              onChange={(e) => setSymptomsText(e.target.value)}
              placeholder={t.symptomsPlaceholder}
              rows={2}
              className="w-full text-xs rounded-xl border border-slate-300 p-2.5 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-slate-800"
            />
            
            {/* Quick symptom tags */}
            <div>
              <p className="text-[11px] font-semibold text-slate-500 mb-1">{t.quickTags}:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickSymptoms.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200 transition-colors cursor-pointer"
                  >
                    + {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 truncate hidden sm:block">
            {t.location}: <span className="font-semibold text-slate-700">{activeLocation}</span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              {t.cancel}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-700/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{t.diagnosing}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>{t.runDiagnosis}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
