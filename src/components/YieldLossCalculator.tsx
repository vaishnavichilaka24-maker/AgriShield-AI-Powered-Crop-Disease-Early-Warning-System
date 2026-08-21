import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShieldAlert, 
  ArrowRight,
  Leaf,
  Scale
} from 'lucide-react';
import { CropType, SupportedLanguage } from '../types';
import { useTranslation } from '../i18n/useTranslation';

interface YieldLossCalculatorProps {
  initialCrop?: CropType;
  initialLossPercent?: number;
  currentLanguage?: SupportedLanguage;
}

export const YieldLossCalculator: React.FC<YieldLossCalculatorProps> = ({
  initialCrop = 'Rice (Padi)',
  initialLossPercent = 40,
  currentLanguage = 'en' as SupportedLanguage
}) => {
  const { t } = useTranslation(currentLanguage);
  const [crop, setCrop] = useState<CropType>(initialCrop);
  const [farmSizeHectares, setFarmSizeHectares] = useState<number>(2.0);
  const [expectedYieldTonsPerHa, setExpectedYieldTonsPerHa] = useState<number>(5.5);
  const [marketPricePerKgUSD, setMarketPricePerKgUSD] = useState<number>(0.45); // e.g. $0.45/kg milled rice
  const [diseaseLossPercent, setDiseaseLossPercent] = useState<number>(initialLossPercent);
  const [treatmentCostPerHaUSD, setTreatmentCostPerHaUSD] = useState<number>(18.0); // e.g. $18/ha for bio-fungicide/spraying

  // Calculations
  const totalPotentialYieldKg = farmSizeHectares * expectedYieldTonsPerHa * 1000;
  const totalPotentialGrossValueUSD = totalPotentialYieldKg * marketPricePerKgUSD;
  
  const untreatedLossKg = totalPotentialYieldKg * (diseaseLossPercent / 100);
  const untreatedLossValueUSD = untreatedLossKg * marketPricePerKgUSD;

  const totalTreatmentCostUSD = farmSizeHectares * treatmentCostPerHaUSD;
  const netSavedValueUSD = untreatedLossValueUSD - totalTreatmentCostUSD;
  const roiMultiplier = totalTreatmentCostUSD > 0 ? (untreatedLossValueUSD / totalTreatmentCostUSD).toFixed(1) : '0';

  return (
    <div id="yield-loss-calculator" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900">{t.yieldProtectionEstimator}</h3>
            <p className="text-xs text-slate-500">{t.yieldCalculatorSub}</p>
          </div>
        </div>
        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
          {t.agriculturalRoi}
        </span>
      </div>

      {/* Input Parameters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
        
        <div>
          <label className="block font-bold text-slate-700 mb-1">{t.farmSize}</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={farmSizeHectares}
            onChange={(e) => setFarmSizeHectares(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
            className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-800 outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">{t.expectedHarvestYield}</label>
          <input
            type="number"
            min="0.5"
            step="0.5"
            value={expectedYieldTonsPerHa}
            onChange={(e) => setExpectedYieldTonsPerHa(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
            className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-800 outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">{t.marketPricePerKg}</label>
          <input
            type="number"
            min="0.05"
            step="0.05"
            value={marketPricePerKgUSD}
            onChange={(e) => setMarketPricePerKgUSD(Math.max(0.01, parseFloat(e.target.value) || 0.01))}
            className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-800 outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">{t.lossRate}</label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="5"
              max="90"
              value={diseaseLossPercent}
              onChange={(e) => setDiseaseLossPercent(parseInt(e.target.value))}
              className="flex-1 accent-rose-600 cursor-pointer"
            />
            <span className="font-extrabold text-rose-700 w-12 text-right">{diseaseLossPercent}%</span>
          </div>
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">{t.treatmentCostPerHa}</label>
          <input
            type="number"
            min="2"
            step="1"
            value={treatmentCostPerHaUSD}
            onChange={(e) => setTreatmentCostPerHaUSD(Math.max(1, parseFloat(e.target.value) || 1))}
            className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-800 outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-[11px] text-slate-500 font-medium">
            {t.calcBasedOnAverage}
          </p>
        </div>

      </div>

      {/* Results Comparison Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        
        {/* Untreated Loss */}
        <div className="bg-rose-50 rounded-2xl p-4 border border-rose-200 text-rose-950 space-y-1">
          <div className="flex items-center justify-between text-xs text-rose-700 font-semibold">
            <span>{t.untreatedCropLoss}</span>
            <TrendingDown className="w-4 h-4 text-rose-600" />
          </div>
          <p className="text-2xl font-black text-rose-900">
            ${untreatedLossValueUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-[11px] text-rose-700">
            {(untreatedLossKg / 1000).toFixed(1)} tons of {crop.split(' ')[0]} lost
          </p>
        </div>

        {/* Treatment Investment */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-slate-900 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
            <span>{t.totalTreatmentCost}</span>
            <Leaf className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">
            ${totalTreatmentCostUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-[11px] text-slate-500">
            Inputs & spray application for {farmSizeHectares} ha
          </p>
        </div>

        {/* Protected Net Value */}
        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-emerald-950 space-y-1">
          <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
            <span>{t.netValueProtected}</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-black text-emerald-900">
            +${netSavedValueUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-[11px] text-emerald-700 font-bold">
            {roiMultiplier}x {t.returnOnCost}
          </p>
        </div>

      </div>

    </div>
  );
};
