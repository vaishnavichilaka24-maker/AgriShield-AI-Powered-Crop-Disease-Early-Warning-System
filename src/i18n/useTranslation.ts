import { useMemo } from 'react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS, TranslationDictionary } from './translations';

export const BASE_EN_DICTIONARY: TranslationDictionary = {
  // Brand & Header
  appTitle: 'AgriShield',
  appSubtitle: 'Crop Disease Early Warning & AI Action',
  liveWarning: 'Live Warning',
  liveWarningText: 'Spore surge alert: High fungal risk in local agricultural basins due to high humidity.',
  viewRadar: 'View Radar →',
  selectBasin: 'Select Agricultural Basin',
  spokenWrittenLanguage: 'Spoken & Written Language',
  scanLeafBtn: 'Scan Crop Leaf',
  scanLeafShort: 'Scan',

  // Tabs
  tabDiagnostic: 'AI Diagnostic',
  tabRadar: 'Outbreak Radar',
  tabCommunity: 'Community Alerts',
  tabDealers: 'Agro-Dealers',
  tabAgronomist: 'Ask Agronomist',

  // Diagnosis View
  diagConfidence: 'Diagnostic Confidence',
  expectedLoss: 'Expected Loss',
  expectedLossWithoutTreatment: 'Yield Loss Without Treatment',
  spokenAdvisoryTitle: 'Spoken Farmer Advisory (Voice Guide)',
  playVoice: 'Play Voice',
  stopVoice: 'Stop Audio',
  observedSymptoms: 'Key Observed Field Symptoms:',
  localVernacular: 'Local Vernacular',
  pathogen: 'Pathogen',
  
  // Treatment Tabs
  tabOrganicSolutions: 'Organic & Low-Cost Solutions',
  tabChemicalProtocol: 'Targeted Agro-Chemicals',
  tabPrevention: 'Field Prevention',
  organicHeading: 'Eco-Friendly & Zero-Cost Farmer Remedies',
  organicSubheading: 'Prepared using readily available local materials without toxic chemical residues.',
  recommendedFirst: 'Recommended First',
  prepTime: 'Prep Time',
  ingredients: 'Ingredients',
  zeroCost: 'Zero Cost',
  lowCost: 'Low Cost',
  mediumCost: 'Medium Cost',
  
  chemicalHeading: 'Approved Commercial Agro-Chemical Protocol',
  chemicalSubheading: 'Use when disease pressure exceeds the economic threshold. Follow withholding days carefully.',
  activeIngredient: 'Active Ingredient',
  dosage: 'Dosage',
  phiHarvest: 'PHI to Harvest',
  tradeBrands: 'Common Trade Brands',
  safetyPrecautions: 'Safety & Application Precautions',
  curativeKnockdown: 'Curative Knockdown',

  preventionHeading: 'Long-term Agronomic Cultural Practices',
  preventionSubheading: 'Field management tactics to prevent disease recurrence in coming cycles.',

  // Diagnosis Action Cards
  broadcastOutbreak: 'Broadcast Outbreak Alert',
  broadcastDesc: 'Notify 40+ nearby farmers within 15 km to initiate early preventive spraying.',
  broadcastBtn: 'Send Community Alert',
  broadcastedBtn: 'Alert Broadcasted!',
  nearestDealers: 'Nearest Verified Agro-Dealers',
  dealersDesc: 'Find biologicals, certified seeds, and protective gear at local transparent prices.',
  viewSuppliesBtn: 'View Available Supplies',
  askAgronomistCard: 'Ask AI Senior Agronomist',
  askAgronomistDesc: 'Get tailored advice on mixing ratios, tank compatibility, and fertilizer schedules.',
  askAgronomistBtn: 'Consult Agronomist',

  // Scanner Modal
  scanModalTitle: 'AI Crop Disease Diagnostic & Field Pathologist',
  scanModalSubtitle: 'Scan leaf, stem, or fruit for instant bio-remedies and chemical dosages',
  multimodalBadge: 'Multimodal AI',
  selectTargetCrop: 'Select Target Crop',
  cropImageInput: 'Crop Leaf Photo',
  tabPresets: 'Field Presets',
  tabLiveCamera: 'Live Camera',
  tabUpload: 'Upload Photo',
  selectPresetHint: 'Select a field sample below to test instant pathology diagnosis & organic remedies:',
  centerLeafHint: 'Center the infected leaf or lesion in frame',
  snapPhoto: 'Snap Photo',
  uploadCropPhoto: 'Click or Drag & Drop Crop Photo Here',
  uploadCropSubtext: 'Supports high-res field photos in JPG, PNG, WEBP up to 10MB',
  changePhoto: 'Change Photo',
  removePhoto: 'Remove',
  describeSymptoms: 'Field Observations & Symptoms (Optional)',
  describeSymptomsPlaceholder: 'e.g. Diamond spindle lesions on 15% tillers after 3 days of cloudy drizzle...',
  quickTags: 'Quick Symptoms:',
  cancel: 'Cancel',
  diagnosingPathogen: 'Diagnosing Plant Pathology...',
  runMultimodalDiag: 'Run AI Disease Diagnosis',

  // Radar
  radarTitle: 'Vector Risk & Outbreak Radar',
  radarSubtitle: 'Real-time spore proliferation risk and active community outbreak mapping within 35 km.',
  reportOutbreakBtn: 'Report Outbreak',
  fungalRisk: 'Fungal Spore Proliferation',
  bacterialRisk: 'Bacterial Blight Condition',
  pestRisk: 'Insect Vector Surge',
  bestSprayingWindow: 'Best Spraying Window',
  filterAllCrops: 'All Crops',
  filterAllSeverities: 'All Severity Levels',
  activeOutbreaksTitle: 'Active Local Disease Clusters',
  sendWhatsAppAlert: 'WhatsApp Alert',
  farmsAffected: 'Farms Reporting',
  threatRadius: 'Threat Radius',
  hectares: 'Hectares',

  // Marketplace
  marketplaceTitle: 'Nearby Verified Agro-Dealers',
  marketplaceSubtitle: 'Source certified bio-fungicides, seed treatments, and spraying tools without middleman markups.',
  filterAll: 'All Supplies',
  filterOrganic: 'Bio-Organic',
  filterCurative: 'Curative Chem',
  inStock: 'In Stock',
  verifiedDealer: 'Verified Agribusiness',
  contactDealer: 'Call Dealer',
  orderWhatsApp: 'Order via WhatsApp',

  // Community
  communityTitle: 'Farmer-to-Farmer Cooperative Network',
  communitySubtitle: 'Real-time field observations verified by AI pathology and local extension officers.',
  reportObservation: 'Report Observation',
  aiVerified: 'AI Verified',
  helpfulConfirm: 'Confirm / Helpful',
  submitFieldReportTitle: 'Submit Field Disease Report',
  farmerName: 'Your Name / Farm ID',
  villageName: 'Village / District',
  cropField: 'Target Crop',
  suspectedIssue: 'Suspected Disease / Issue',
  fieldNotes: 'Field Symptoms & Actions Taken',
  publishAlert: 'Publish Community Alert',

  // Yield Loss Calculator
  calculatorTitle: 'Crop Yield & Financial Protection Estimator',
  calculatorSubtitle: 'Calculate economic loss prevention from early disease treatment vs untreated spread.',
  farmSize: 'Farm Land Size (Hectares)',
  expectedYield: 'Expected Harvest Yield (Tons / Ha)',
  marketPrice: 'Market Price (USD per Kg)',
  lossPercent: 'Untreated Disease Loss Rate (%)',
  treatmentCostLabel: 'Treatment Cost (USD / Hectare)',
  potentialLossValue: 'Untreated Crop Loss Value',
  netSavedValue: 'Net Value Protected',
  roiMultiplier: 'Estimated ROI Return',

  // Agronomist Chat
  agronomistTitle: '24/7 AI Agricultural Extension Officer',
  agronomistSubtitle: 'Ask questions in your native language about dosages, bio-spray recipes, or soil health.',
  agronomistPlaceholder: 'Ask questions about organic sprays, dosage, fertilizer timing, or disease symptoms...',
  sendQuestion: 'Send Question',
  suggestedQuestions: 'Suggested Agronomy Queries:',

  // Additional Keys for complete UI consistency
  broadcastFarmerAlert: 'Broadcast Disease Alert to Farmers',
  dispatchGroups: 'Dispatch alert to farmer WhatsApp groups and SMS agricultural network',
  broadcastPreview: 'Broadcast Message Preview:',
  broadcastScope: 'Broadcast Scope',
  broadcastScopeDetails: '15 km radius &bull; ~48 cooperative farms &bull; Village extension officer alerted',
  copied: 'Copied!',
  copyText: 'Copy Text',
  dispatched: 'Dispatched to Network!',
  sendBroadcastAlert: 'Send Broadcast Alert',

  cooperativeNetwork: 'Farmer-to-Farmer Cooperative Network',
  realtimeFieldObservations: 'Real-time Field Observations',
  communityOutbreakReports: 'Community Outbreak Reports',
  communityOutbreakSub: 'Share field observations and notify fellow farmers to prevent epidemic crop damage in your district.',
  reportObservationBtn: 'Report New Field Observation',
  suspectedDisease: 'Suspected Disease',
  confirmHelpful: 'Confirm / Helpful',
  comments: 'comments',
  submitDiseaseReport: 'Submit Field Disease Report',
  alertCommunityOfficers: 'Alert community & agricultural extension officers',
  yourName: 'Your Name / Farm ID',
  villageDistrict: 'Village / District',
  targetCrop: 'Target Crop',
  threatSeverity: 'Threat Severity',
  fieldSymptoms: 'Field Symptoms & Actions Taken',
  fieldSymptomsPlaceholder: 'Describe how many tillers/plants affected, weather before outbreak, and any remedy applied...',
  publishReport: 'Publish Community Alert',

  symptomYellowStripes: 'Yellow Leaf Stripes',
  symptomSpindleSpots: 'Spindle/Diamond Spots',
  symptomBlackSpots: 'Black Necrotic Spots',
  symptomSawdust: 'Frass / Sawdust Holes',
  symptomWhitePowder: 'White Powdery Coating',
  symptomMosaicCurling: 'Mosaic Leaf Curling',
  symptomWiltingStem: 'Wilting / Rotten Stem',
  symptomRapidDrying: 'Rapid Leaf Drying',
  scannerTitle: 'AI Crop Disease Diagnostic & Field Pathologist',
  scannerSubtitle: 'Scan leaf, stem, or fruit for instant bio-remedies and chemical dosages',
  fieldPresets: 'Field Presets',
  liveCamera: 'Live Camera',
  uploadPhoto: 'Upload Photo',
  selectSamplePrompt: 'Select a field sample below to test instant pathology diagnosis & organic remedies:',
  clickToUpload: 'Click or Drag & Drop Crop Photo Here',
  uploadFormats: 'Supports high-res field photos in JPG, PNG, WEBP up to 10MB',
  symptomsPlaceholder: 'e.g. Diamond spindle lesions on 15% tillers after 3 days of cloudy drizzle...',
  location: 'Location / Agricultural Basin',
  diagnosing: 'Diagnosing Pathogen...',
  runDiagnosis: 'Run AI Disease Diagnosis',

  yieldProtectionEstimator: 'Crop Yield & Financial Protection Estimator',
  yieldCalculatorSub: 'Calculate economic loss prevention from early disease treatment',
  agriculturalRoi: 'Agricultural ROI',
  expectedHarvestYield: 'Expected Harvest Yield (Tons / Ha)',
  marketPricePerKg: 'Market Price (USD per Kg)',
  lossRate: 'Untreated Disease Loss Rate (%)',
  treatmentCostPerHa: 'Treatment Cost (USD / Hectare)',
  calcBasedOnAverage: 'Based on average smallholder bio-fungicide/organic spray formulation and knapsack labour.',
  untreatedCropLoss: 'Untreated Crop Loss',
  totalTreatmentCost: 'Total Treatment Cost',
  netValueProtected: 'Net Value Protected',
  returnOnCost: 'Return on Treatment Cost',

  protectCropsHeading: 'Protect Your Crops from Epidemic Outbreaks',
  protectCropsSubheading: 'Snap a photo of leaf spots, pests, or discoloration to receive zero-cost organic formulations, chemical dosages, and broadcast early warnings to nearby farmers.',
  scanLeafOrUpload: 'Scan Leaf / Upload Photo',
  footerTagline: 'AI Agricultural Early Warning & Crop Productivity System',
  footerSub: 'Empowering smallholders, extension agents, and rural cooperatives with multimodal diagnosis and spore alerts.',

  localAgribusinessDirectory: 'Local Agribusiness Directory',
  fairPricing: 'Fair Market Pricing',
  nearbyDealersHeading: 'Nearby Agro-Dealers & Organic Farm Inputs',
  dealersSubheading: 'Connect directly with verified local farm supply shops to source certified bio-fungicides, seed treatments, and protective sprayers without middleman markups.',
  verifiedShopsRegion: 'Verified Shops in Region',
  agroHubs: 'Agro-Hubs',
  searchSuppliesPlaceholder: 'Search treatments (e.g., Trichoderma, Neem Oil, Tricyclazole)...',
  allSupplies: 'All Supplies',
  organicOnly: 'Organic Only',
  curatives: 'Curatives',
  owner: 'Owner',
  away: 'away',
  availableStockPricing: 'Available Stock & Transparent Pricing',
  pkg: 'Pkg',
  effectiveFor: 'Effective for',
  whatsappOrder: 'WhatsApp Inquire / Order',
  call: 'Call',

  extensionOfficerBadge: '24/7 AI Agricultural Extension Officer',
  multilingualAgronomy: 'Multilingual Agronomy',
  askSeniorAgronomistHeading: 'Ask the Senior Agronomist',
  agronomistSubheading: 'Get instant guidance on organic preparation recipes, dosage ratios, tank mixtures, fertilizer timing, and post-harvest storage.',
  activeCropContext: 'Active Crop Context',
  botInitialGreeting: 'Hello! I am your AI Agronomist Extension Advisor. I can help you with crop diagnosis, home recipe preparations (such as organic neem, bio-slurry, or trichoderma), chemical spray intervals, and field water management. How can I assist your farm today?',
  consultingDatabase: 'Consulting agricultural plant pathology database...',
  suggested: 'Suggested',
  quickQ1: 'How do I prepare fermented neem leaf spray at home?',
  quickQ2: 'What is the best time of day to spray before rainfall?',
  quickQ3: 'How to disinfect seedbeds against bacterial blight?',
  quickQ4: 'Can I mix wood ash with compost for chili anthracnose?',
  askQuestionPlaceholder: 'Ask questions about organic sprays, dosage, fertilizer timing, or disease symptoms...',
  send: 'Send',

  radarHeaderTitle: 'Vector Risk & Outbreak Radar',
  sporeRisk: 'Spore Risk',
  sporeRiskHigh: 'High Spore Proliferation',
  temp: 'Temp',
  humidity: 'Humidity',
  wind: 'Wind',
  rainfall: 'Rainfall',
  sprayWindow: 'Best Spray Window',
  filters: 'Filters',
  allCrops: 'All Crops',
  allSeverities: 'All Severities',
  showingAlerts: 'Showing',
  proximityRadar: 'Proximity Outbreak Radar (Live GIS Simulation)',
  criticalZone: 'Critical Zone (0-5 km)',
  warningZone: 'Warning Zone (5-15 km)',
  noAlertsFound: 'No outbreaks matching current filter criteria',
  noAlertsSub: 'Change filters or select a different agricultural basin above.',
  reported: 'Reported',
  actionLabel: 'Immediate Action',
  sendWhatsappAlert: 'WhatsApp Alert'
};

export function useTranslation(language: SupportedLanguage) {
  const t: TranslationDictionary = useMemo(() => {
    const localized = TRANSLATIONS[language];
    if (!localized) return BASE_EN_DICTIONARY;
    return {
      ...BASE_EN_DICTIONARY,
      ...localized
    };
  }, [language]);

  const getLocalizedSeverity = (severity: string): { label: string; bg: string; dot: string } => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return {
          label: language === 'hi' ? 'गंभीर जोखिम' :
                 language === 'te' ? 'తీవ్రమైన ప్రమాదం' :
                 language === 'id' ? 'TINGKAT KRITIS' :
                 language === 'es' ? 'SEVERIDAD CRÍTICA' :
                 language === 'bn' ? 'মারাত্মক ঝুঁকি' :
                 language === 'sw' ? 'HATARI KUBWA' :
                 language === 'ta' ? 'அதிதீவிர அபாயம்' :
                 language === 'mr' ? 'अति तीव्र धोका' :
                 language === 'vi' ? 'MỨC ĐỘ NGUY CẤP' :
                 language === 'fr' ? 'SÉVÉRITÉ CRITIQUE' :
                 language === 'pt' ? 'SEVERIDADE CRÍTICA' :
                 language === 'ar' ? 'خطورة حرجة' : 'CRITICAL SEVERITY',
          bg: 'bg-rose-100 text-rose-800 border-rose-300',
          dot: 'bg-rose-500'
        };
      case 'severe':
        return {
          label: language === 'hi' ? 'उच्च जोखिम' :
                 language === 'te' ? 'ఎక్కువ ప్రమాదం' :
                 language === 'id' ? 'ANCAMAN BERAT' :
                 language === 'es' ? 'AMENAZA SEVERA' :
                 language === 'bn' ? 'উচ্চ ঝুঁকি' :
                 language === 'sw' ? 'HATARI YA JUU' :
                 language === 'ta' ? 'அதிக அபாயம்' :
                 language === 'mr' ? 'मोठा धोका' :
                 language === 'vi' ? 'NGUY CƠ CAO' :
                 language === 'fr' ? 'MENACE GRAVE' :
                 language === 'pt' ? 'AMEAÇA SEVERA' :
                 language === 'ar' ? 'تهديد شديد' : 'SEVERE THREAT',
          bg: 'bg-orange-100 text-orange-800 border-orange-300',
          dot: 'bg-orange-500'
        };
      case 'moderate':
        return {
          label: language === 'hi' ? 'मध्यम जोखिम' :
                 language === 'te' ? 'మధ్యస్థ ప్రమాదం' :
                 language === 'id' ? 'RISIKO SEDANG' :
                 language === 'es' ? 'RIESGO MODERADO' :
                 language === 'bn' ? 'মাঝারি ঝুঁকি' :
                 language === 'sw' ? 'HATARI YA KATI' :
                 language === 'ta' ? 'மிதமான அபாயம்' :
                 language === 'mr' ? 'मध्यम धोका' :
                 language === 'vi' ? 'MỨC TRUNG BÌNH' :
                 language === 'fr' ? 'RISQUE MODÉRÉ' :
                 language === 'pt' ? 'RISCO MODERADO' :
                 language === 'ar' ? 'خطر متوسط' : 'MODERATE RISK',
          bg: 'bg-amber-100 text-amber-800 border-amber-300',
          dot: 'bg-amber-500'
        };
      default:
        return {
          label: language === 'hi' ? 'कम जोखिम / स्वस्थ' :
                 language === 'te' ? 'తక్కువ ప్రమాదం / ఆరోగ్యకరం' :
                 language === 'id' ? 'RISIKO RENDAH / SEHAT' :
                 language === 'es' ? 'RIESGO BAJO / SANO' :
                 language === 'bn' ? 'স্বল্প ঝুঁকি / সুস্থ' :
                 language === 'sw' ? 'HATARI NDOGO / MZIMA' :
                 language === 'ta' ? 'குறைந்த அபாயம் / நலம்' :
                 language === 'mr' ? 'कमी धोका / निरोगी' :
                 language === 'vi' ? 'NGUY CƠ THẤP / KHỎE MẠNH' :
                 language === 'fr' ? 'FAIBLE RISQUE / SAIN' :
                 language === 'pt' ? 'BAIXO RISCO / SAUDÁVEL' :
                 language === 'ar' ? 'خطر منخفض / سليم' : 'LOW RISK / HEALTHY',
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          dot: 'bg-emerald-500'
        };
    }
  };

  const getLocalizedPathogenType = (type: string): { label: string; bg: string } => {
    switch (type.toLowerCase()) {
      case 'fungal':
        return {
          label: language === 'hi' ? 'कवक बीजाणु रोग' :
                 language === 'te' ? 'శిలీంధ్ర వ్యాధి' :
                 language === 'id' ? 'Penyakit Spora Jamur' :
                 language === 'es' ? 'Patógeno Fúngico' :
                 language === 'bn' ? 'ছত্রাকজনিত রোগ' :
                 language === 'sw' ? 'Ugonjwa wa Fangasi' :
                 language === 'ta' ? 'பூஞ்சை நோய்' :
                 language === 'mr' ? 'बुरशीजन्य रोग' :
                 language === 'vi' ? 'Bệnh Do Bào Tử Nấm' :
                 language === 'fr' ? 'Pathogène Fongique' :
                 language === 'pt' ? 'Patógeno Fúngico' :
                 language === 'ar' ? 'مرض فطري (أبواغ)' : 'Fungal Spore Pathogen',
          bg: 'bg-purple-100 text-purple-800'
        };
      case 'bacterial':
        return {
          label: language === 'hi' ? 'जीवाणु संक्रमण' :
                 language === 'te' ? 'బాక్టీరియల్ సంక్రమణ' :
                 language === 'id' ? 'Infeksi Bakteri' :
                 language === 'es' ? 'Infección Bacteriana' :
                 language === 'bn' ? 'ব্যাকটেরিয়া সংক্রমণ' :
                 language === 'sw' ? 'Maambukizi ya Bakteria' :
                 language === 'ta' ? 'பாக்டீரியா தொற்று' :
                 language === 'mr' ? 'जिवाणू संसर्ग' :
                 language === 'vi' ? 'Nhiễm Khuẩn Vi Khuẩn' :
                 language === 'fr' ? 'Infection Bactérienne' :
                 language === 'pt' ? 'Infecção Bacteriana' :
                 language === 'ar' ? 'عدوى بكتيرية' : 'Bacterial Pathogen',
          bg: 'bg-cyan-100 text-cyan-800'
        };
      case 'viral':
        return {
          label: language === 'hi' ? 'विषाणु (वायरस) रोग' :
                 language === 'te' ? 'వైరస్ వ్యాధి' :
                 language === 'id' ? 'Penyakit Virus' :
                 language === 'es' ? 'Virus Vegetal' :
                 language === 'bn' ? 'ভাইরাসজনিত রোগ' :
                 language === 'sw' ? 'Ugonjwa wa Virusi' :
                 language === 'ta' ? 'வைரஸ் நோய்' :
                 language === 'mr' ? 'व्हायरल रोग' :
                 language === 'vi' ? 'Bệnh Do Virus' :
                 language === 'fr' ? 'Maladie Virale' :
                 language === 'pt' ? 'Doença Viral' :
                 language === 'ar' ? 'فيروس نباتي' : 'Viral Infection',
          bg: 'bg-rose-100 text-rose-800'
        };
      case 'pest':
      case 'insect':
        return {
          label: language === 'hi' ? 'कीट व सूंडी प्रकोप' :
                 language === 'te' ? 'పురుగు / కీటక దాడి' :
                 language === 'id' ? 'Hama Serangga' :
                 language === 'es' ? 'Plaga de Insectos' :
                 language === 'bn' ? 'কীটপতঙ্গ ও পোকা' :
                 language === 'sw' ? 'Wadudu Waharibifu' :
                 language === 'ta' ? 'பூச்சித் தாக்குதல்' :
                 language === 'mr' ? 'कीटक प्रादुर्भाव' :
                 language === 'vi' ? 'Côn Trùng / Sâu Bệnh' :
                 language === 'fr' ? 'Ravageur / Insecte' :
                 language === 'pt' ? 'Praga / Inseto' :
                 language === 'ar' ? 'آفات حشرية' : 'Insect Pest Damage',
          bg: 'bg-amber-100 text-amber-800'
        };
      default:
        return {
          label: language === 'hi' ? 'पौधा स्वास्थ्य विकार' :
                 language === 'te' ? 'మొక్కల లోపం' :
                 language === 'id' ? 'Gangguan Fisiologis' :
                 language === 'es' ? 'Trastorno Fisiológico' :
                 language === 'bn' ? 'শারীরবৃত্তীয় ঘাটতি' :
                 language === 'sw' ? 'Upungufu wa Lishe' :
                 language === 'ta' ? 'உடலியல் குறைபாடு' :
                 language === 'mr' ? 'पोषण कमतरता' :
                 language === 'vi' ? 'Rối Loạn Sinh Lý' :
                 language === 'fr' ? 'Désordre Physiologique' :
                 language === 'pt' ? 'Distúrbio Fisiológico' :
                 language === 'ar' ? 'اضطراب فسيولوجي / نقص عناصر' : 'Physiological / Deficiency',
          bg: 'bg-slate-100 text-slate-800'
        };
    }
  };

  return {
    t,
    getLocalizedSeverity,
    getLocalizedPathogenType
  };
}
