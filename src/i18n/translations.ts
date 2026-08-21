import { SupportedLanguage } from '../types';

export interface TranslationDictionary {
  // Brand & Header
  appTitle: string;
  appSubtitle: string;
  liveWarning: string;
  liveWarningText: string;
  viewRadar: string;
  selectBasin: string;
  spokenWrittenLanguage: string;
  scanLeafBtn: string;
  scanLeafShort: string;

  // Tabs
  tabDiagnostic: string;
  tabRadar: string;
  tabCommunity: string;
  tabDealers: string;
  tabAgronomist: string;
  tabBlog?: string;

  // Diagnosis View
  diagConfidence: string;
  expectedLoss: string;
  expectedLossWithoutTreatment: string;
  spokenAdvisoryTitle: string;
  playVoice: string;
  stopVoice: string;
  observedSymptoms: string;
  localVernacular: string;
  pathogen: string;
  
  // Treatment Tabs
  tabOrganicSolutions: string;
  tabChemicalProtocol: string;
  tabPrevention: string;
  organicHeading: string;
  organicSubheading: string;
  recommendedFirst: string;
  prepTime: string;
  ingredients: string;
  zeroCost: string;
  lowCost: string;
  mediumCost: string;
  
  chemicalHeading: string;
  chemicalSubheading: string;
  activeIngredient: string;
  dosage: string;
  phiHarvest: string;
  tradeBrands: string;
  safetyPrecautions: string;
  curativeKnockdown: string;

  preventionHeading: string;
  preventionSubheading: string;

  // Diagnosis Action Cards
  broadcastOutbreak: string;
  broadcastDesc: string;
  broadcastBtn: string;
  broadcastedBtn: string;
  nearestDealers: string;
  dealersDesc: string;
  viewSuppliesBtn: string;
  askAgronomistCard: string;
  askAgronomistDesc: string;
  askAgronomistBtn: string;

  // Scanner Modal
  scanModalTitle: string;
  scanModalSubtitle: string;
  multimodalBadge: string;
  selectTargetCrop: string;
  cropImageInput: string;
  tabPresets: string;
  tabLiveCamera: string;
  tabUpload: string;
  selectPresetHint: string;
  centerLeafHint: string;
  snapPhoto: string;
  uploadCropPhoto: string;
  uploadCropSubtext: string;
  changePhoto: string;
  removePhoto: string;
  describeSymptoms: string;
  describeSymptomsPlaceholder: string;
  quickTags: string;
  cancel: string;
  diagnosingPathogen: string;
  runMultimodalDiag: string;

  // Radar
  radarTitle: string;
  radarSubtitle: string;
  reportOutbreakBtn: string;
  fungalRisk: string;
  bacterialRisk: string;
  pestRisk: string;
  bestSprayingWindow: string;
  filterAllCrops: string;
  filterAllSeverities: string;
  activeOutbreaksTitle: string;
  sendWhatsAppAlert: string;
  farmsAffected: string;
  threatRadius: string;
  hectares: string;

  // Marketplace
  marketplaceTitle: string;
  marketplaceSubtitle: string;
  filterAll: string;
  filterOrganic: string;
  filterCurative: string;
  inStock: string;
  verifiedDealer: string;
  contactDealer: string;
  orderWhatsApp: string;

  // Community
  communityTitle: string;
  communitySubtitle: string;
  reportObservation: string;
  aiVerified: string;
  helpfulConfirm: string;
  submitFieldReportTitle: string;
  farmerName: string;
  villageName: string;
  cropField: string;
  suspectedIssue: string;
  fieldNotes: string;
  publishAlert: string;

  // Yield Loss Calculator
  calculatorTitle: string;
  calculatorSubtitle: string;
  farmSize: string;
  expectedYield: string;
  marketPrice: string;
  lossPercent: string;
  treatmentCostLabel: string;
  potentialLossValue: string;
  netSavedValue: string;
  roiMultiplier: string;

  // Agronomist Chat
  agronomistTitle: string;
  agronomistSubtitle: string;
  agronomistPlaceholder: string;
  sendQuestion: string;
  suggestedQuestions: string;

  // Additional Keys for complete UI consistency
  broadcastFarmerAlert?: string;
  dispatchGroups?: string;
  broadcastPreview?: string;
  broadcastScope?: string;
  broadcastScopeDetails?: string;
  copied?: string;
  copyText?: string;
  dispatched?: string;
  sendBroadcastAlert?: string;

  cooperativeNetwork?: string;
  realtimeFieldObservations?: string;
  communityOutbreakReports?: string;
  communityOutbreakSub?: string;
  reportObservationBtn?: string;
  suspectedDisease?: string;
  confirmHelpful?: string;
  comments?: string;
  submitDiseaseReport?: string;
  alertCommunityOfficers?: string;
  yourName?: string;
  villageDistrict?: string;
  targetCrop?: string;
  threatSeverity?: string;
  fieldSymptoms?: string;
  fieldSymptomsPlaceholder?: string;
  publishReport?: string;

  symptomYellowStripes?: string;
  symptomSpindleSpots?: string;
  symptomBlackSpots?: string;
  symptomSawdust?: string;
  symptomWhitePowder?: string;
  symptomMosaicCurling?: string;
  symptomWiltingStem?: string;
  symptomRapidDrying?: string;
  scannerTitle?: string;
  scannerSubtitle?: string;
  fieldPresets?: string;
  liveCamera?: string;
  uploadPhoto?: string;
  selectSamplePrompt?: string;
  clickToUpload?: string;
  uploadFormats?: string;
  symptomsPlaceholder?: string;
  location?: string;
  diagnosing?: string;
  runDiagnosis?: string;

  yieldProtectionEstimator?: string;
  yieldCalculatorSub?: string;
  agriculturalRoi?: string;
  expectedHarvestYield?: string;
  marketPricePerKg?: string;
  lossRate?: string;
  treatmentCostPerHa?: string;
  calcBasedOnAverage?: string;
  untreatedCropLoss?: string;
  totalTreatmentCost?: string;
  netValueProtected?: string;
  returnOnCost?: string;

  protectCropsHeading?: string;
  protectCropsSubheading?: string;
  scanLeafOrUpload?: string;
  footerTagline?: string;
  footerSub?: string;

  localAgribusinessDirectory?: string;
  fairPricing?: string;
  nearbyDealersHeading?: string;
  dealersSubheading?: string;
  verifiedShopsRegion?: string;
  agroHubs?: string;
  searchSuppliesPlaceholder?: string;
  allSupplies?: string;
  organicOnly?: string;
  curatives?: string;
  owner?: string;
  away?: string;
  availableStockPricing?: string;
  pkg?: string;
  effectiveFor?: string;
  whatsappOrder?: string;
  call?: string;

  extensionOfficerBadge?: string;
  multilingualAgronomy?: string;
  askSeniorAgronomistHeading?: string;
  agronomistSubheading?: string;
  activeCropContext?: string;
  botInitialGreeting?: string;
  consultingDatabase?: string;
  suggested?: string;
  quickQ1?: string;
  quickQ2?: string;
  quickQ3?: string;
  quickQ4?: string;
  askQuestionPlaceholder?: string;
  send?: string;

  radarHeaderTitle?: string;
  sporeRisk?: string;
  sporeRiskHigh?: string;
  temp?: string;
  humidity?: string;
  wind?: string;
  rainfall?: string;
  sprayWindow?: string;
  filters?: string;
  allCrops?: string;
  allSeverities?: string;
  showingAlerts?: string;
  proximityRadar?: string;
  criticalZone?: string;
  warningZone?: string;
  noAlertsFound?: string;
  noAlertsSub?: string;
  reported?: string;
  actionLabel?: string;
  sendWhatsappAlert?: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, Partial<TranslationDictionary>> = {
  en: {
    appTitle: 'AgriShield',
    appSubtitle: 'Crop Disease Early Warning & AI Action',
    liveWarning: 'Live Warning',
    liveWarningText: 'Spore surge alert: High fungal risk in local agricultural basins due to high humidity.',
    viewRadar: 'View Radar →',
    selectBasin: 'Select Agricultural Basin',
    spokenWrittenLanguage: 'Spoken & Written Language',
    scanLeafBtn: 'Scan Crop Leaf',
    scanLeafShort: 'Scan',

    tabDiagnostic: 'AI Diagnostic',
    tabRadar: 'Outbreak Radar',
    tabCommunity: 'Community Alerts',
    tabDealers: 'Agro-Dealers',
    tabAgronomist: 'Ask Agronomist',

    diagConfidence: 'Diagnostic Confidence',
    expectedLoss: 'Expected Loss',
    expectedLossWithoutTreatment: 'Yield Loss Without Treatment',
    spokenAdvisoryTitle: 'Spoken Farmer Advisory (Voice Guide)',
    playVoice: 'Play Voice',
    stopVoice: 'Stop Audio',
    observedSymptoms: 'Key Observed Field Symptoms:',
    localVernacular: 'Local Vernacular',
    pathogen: 'Pathogen',

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
    curativeKnockdown: 'Curative & Knockdown',

    preventionHeading: 'Long-Term Agronomic Field Management',
    preventionSubheading: 'Practices to prevent reinfection and spore buildup in subsequent growing cycles.',

    broadcastOutbreak: 'Broadcast Outbreak Warning',
    broadcastDesc: 'Notify 40+ neighboring farms within 15km to apply preventive sprays early.',
    broadcastBtn: 'Broadcast to Community',
    broadcastedBtn: 'Alert Broadcasted!',
    nearestDealers: 'Nearest Agro-Dealers',
    dealersDesc: 'Check in-stock bio-fungicides, seed treatments, and prices at local agricultural shops.',
    viewSuppliesBtn: 'View Available Supplies',
    askAgronomistCard: 'Ask AI Agronomist',
    askAgronomistDesc: 'Get immediate clarification on spraying timing, tank mixing, or soil preparation.',
    askAgronomistBtn: 'Ask Agronomist',

    scanModalTitle: 'AI Crop Disease Diagnosis',
    scanModalSubtitle: 'Scan leaf, stem, or fruit to receive instant localized remedies',
    multimodalBadge: 'Multimodal',
    selectTargetCrop: 'Select Target Crop',
    cropImageInput: 'Crop Image Input',
    tabPresets: 'Field Presets',
    tabLiveCamera: 'Live Camera',
    tabUpload: 'Upload File',
    selectPresetHint: 'Select a real field sample below to test instant diagnostic and organic treatment generation:',
    centerLeafHint: 'Center affected leaf or fruit here',
    snapPhoto: 'Snap Photo',
    uploadCropPhoto: 'Click to upload crop leaf photo',
    uploadCropSubtext: 'Supports PNG, JPG, JPEG from phone camera or gallery',
    changePhoto: 'Change Photo',
    removePhoto: 'Remove',
    describeSymptoms: 'Describe Field Symptoms (Optional but helps AI precision)',
    describeSymptomsPlaceholder: 'e.g. Diamond-shaped spots appeared on 15% of rice leaves after 3 days of rain...',
    quickTags: 'Quick Symptom Tags:',
    cancel: 'Cancel',
    diagnosingPathogen: 'Diagnosing Pathogen...',
    runMultimodalDiag: 'Run Multimodal Diagnosis',

    radarTitle: 'Disease Vector & Spore Spread Radar',
    radarSubtitle: 'Real-time telemetry tracking humidity, wind vectors, and pathogen outbreaks within 35km.',
    reportOutbreakBtn: 'Report Outbreak',
    fungalRisk: 'Fungal Spore Risk',
    bacterialRisk: 'Bacterial Risk',
    pestRisk: 'Pest Swarm Risk',
    bestSprayingWindow: 'Optimal Spraying Window',
    filterAllCrops: 'All Crops',
    filterAllSeverities: 'All Severities',
    activeOutbreaksTitle: 'Active Local Outbreak Clusters',
    sendWhatsAppAlert: 'Send WhatsApp Alert',
    farmsAffected: 'farms reporting',
    threatRadius: 'threat radius',
    hectares: 'hectares affected',

    marketplaceTitle: 'Agro-Marketplace & Supplies',
    marketplaceSubtitle: 'Find certified bio-inputs, organic pest remedies, and agro-chemicals from verified local dealers.',
    filterAll: 'All Supplies',
    filterOrganic: 'Bio & Organic',
    filterCurative: 'Chemical Curatives',
    inStock: 'In Stock',
    verifiedDealer: 'Verified Dealer',
    contactDealer: 'Call Dealer',
    orderWhatsApp: 'WhatsApp Order',

    communityTitle: 'Farmer Cooperative Alert Network',
    communitySubtitle: 'Peer-to-peer early warning reports verified by agronomist AI and field extension officers.',
    reportObservation: 'Report Observation',
    aiVerified: 'AI Pathology Verified',
    helpfulConfirm: 'Confirm / Helpful',
    submitFieldReportTitle: 'Submit Field Disease Observation',
    farmerName: 'Farmer Name',
    villageName: 'Village / Region',
    cropField: 'Affected Crop',
    suspectedIssue: 'Suspected Issue / Symptoms',
    fieldNotes: 'Field Notes & Actions Taken',
    publishAlert: 'Publish Community Alert',

    calculatorTitle: 'Yield & Financial Protection Estimator',
    calculatorSubtitle: 'Calculate potential crop losses and measure the return on timely disease intervention.',
    farmSize: 'Farm Land Area (Hectares)',
    expectedYield: 'Expected Normal Yield (Tons/Ha)',
    marketPrice: 'Market Price ($ / Ton)',
    lossPercent: 'Untreated Crop Loss Risk (%)',
    treatmentCostLabel: 'Total Treatment / Remedy Cost ($)',
    potentialLossValue: 'Potential Crop Value Loss',
    netSavedValue: 'Net Protected Harvest Value',
    roiMultiplier: 'Estimated Return on Intervention',

    agronomistTitle: 'AI Agronomist Extension Officer',
    agronomistSubtitle: 'Ask practical questions in your native language about treatment dosages, organic mixtures, or soil health.',
    agronomistPlaceholder: 'Ask a question e.g. How do I prepare neem oil emulsion for rice blast?',
    sendQuestion: 'Send Question',
    suggestedQuestions: 'Suggested Agricultural Questions:'
  },
  hi: {
    appTitle: 'एग्रीशील्ड',
    appSubtitle: 'फसल रोग पूर्व चेतावनी और एआई समाधान',
    liveWarning: 'लाइव चेतावनी',
    liveWarningText: 'बीजाणु प्रसार चेतावनी: उच्च आर्द्रता के कारण स्थानीय क्षेत्रों में कवक रोग का उच्च जोखिम।',
    viewRadar: 'रडार देखें →',
    selectBasin: 'कृषि क्षेत्र चुनें',
    spokenWrittenLanguage: 'बोली और लिखित भाषा',
    scanLeafBtn: 'पत्ती स्कैन करें',
    scanLeafShort: 'स्कैन',

    tabDiagnostic: 'एआई निदान',
    tabRadar: 'प्रकोप रडार',
    tabCommunity: 'समुदाय अलर्ट',
    tabDealers: 'कृषि विक्रेता',
    tabAgronomist: 'कृषि विशेषज्ञ से पूछें',

    diagConfidence: 'निदान सटीकता',
    expectedLoss: 'अनुमानित नुकसान',
    expectedLossWithoutTreatment: 'बिना उपचार के फसल नुकसान',
    spokenAdvisoryTitle: 'ऑडियो किसान सलाह (आवाज़ गाइड)',
    playVoice: 'आवाज़ सुनें',
    stopVoice: 'ऑडियो रोकें',
    observedSymptoms: 'खेत में देखे गए प्रमुख लक्षण:',
    localVernacular: 'स्थानीय नाम',
    pathogen: 'रोगजनक कारक',

    tabOrganicSolutions: 'जैविक व कम लागत समाधान',
    tabChemicalProtocol: 'रासायनिक कीटनाशक प्रोटोकॉल',
    tabPrevention: 'खेत में रोकथाम उपाय',
    organicHeading: 'पर्यावरण-अनुकूल और शून्य लागत घरेलू उपचार',
    organicSubheading: 'बिना विषैले अवशेषों के आसानी से उपलब्ध स्थानीय सामग्रियों द्वारा तैयार।',
    recommendedFirst: 'सर्वप्रथम अनुशंसित',
    prepTime: 'तैयारी का समय',
    ingredients: 'आवश्यक सामग्री',
    zeroCost: 'शून्य लागत',
    lowCost: 'कम लागत',
    mediumCost: 'मध्यम लागत',

    chemicalHeading: 'मान्यता प्राप्त वाणिज्यिक कृषि-रासायनिक प्रोटोकॉल',
    chemicalSubheading: 'जब रोग आर्थिक नुकसान सीमा से अधिक हो तभी उपयोग करें। तुड़ाई पूर्व अंतराल का ध्यान रखें।',
    activeIngredient: 'सक्रिय घटक',
    dosage: 'मात्रा',
    phiHarvest: 'कटाई से पहले का अंतराल',
    tradeBrands: 'प्रमुख ब्रांड नाम',
    safetyPrecautions: 'सुरक्षा एवं छिड़काव सावधानियां',
    curativeKnockdown: 'उपचारात्मक समाधान',

    preventionHeading: 'दीर्घकालिक कृषि प्रबंधन',
    preventionSubheading: 'आगामी फसल चक्रों में बीजाणुओं और संक्रमण को रोकने के सर्वोत्तम उपाय।',

    broadcastOutbreak: 'रोग प्रकोप चेतावनी प्रसारित करें',
    broadcastDesc: '15 किमी के दायरे में 40+ पड़ोसी किसानों को समय पर छिड़काव हेतु सचेत करें।',
    broadcastBtn: 'समुदाय को चेतावनी भेजें',
    broadcastedBtn: 'चेतावनी प्रसारित हो गई!',
    nearestDealers: 'निकटतम कृषि केंद्र',
    dealersDesc: 'स्थानीय दुकानों पर उपलब्ध बायो-फफूंदनाशक, बीज और मूल्य की जांच करें।',
    viewSuppliesBtn: 'उपलब्ध दवाएं देखें',
    askAgronomistCard: 'एआई कृषि वैज्ञानिक से पूछें',
    askAgronomistDesc: 'छिड़काव के समय, घोल बनाने या मिट्टी उपचार पर तत्काल मार्गदर्शन पाएं।',
    askAgronomistBtn: 'सलाह लें',

    scanModalTitle: 'एआई फसल रोग निदान',
    scanModalSubtitle: 'पत्ती, तने या फल को स्कैन करें और तुरंत स्थानीय उपचार पाएं',
    multimodalBadge: 'मल्टीमॉडल',
    selectTargetCrop: 'लक्षित फसल चुनें',
    cropImageInput: 'फसल छवि इनपुट',
    tabPresets: 'खेत के नमूने',
    tabLiveCamera: 'लाइव कैमरा',
    tabUpload: 'फोटो अपलोड करें',
    selectPresetHint: 'तत्काल निदान और जैविक उपचार जांचने के लिए नीचे से एक नमूना चुनें:',
    centerLeafHint: 'प्रभावित पत्ती या फल को यहां केंद्रित करें',
    snapPhoto: 'फोटो खींचे',
    uploadCropPhoto: 'पत्ती की फोटो अपलोड करने के लिए क्लिक करें',
    uploadCropSubtext: 'मोबाइल कैमरे या गैलरी से PNG, JPG, JPEG समर्थित',
    changePhoto: 'फोटो बदलें',
    removePhoto: 'हटाएं',
    describeSymptoms: 'खेत के लक्षण बताएं (वैकल्पिक परंतु एआई सटीकता बढ़ाता है)',
    describeSymptomsPlaceholder: 'उदा. लगातार 3 दिन बारिश के बाद धान की 15% पत्तियों पर भूरे धब्बे...',
    quickTags: 'त्वरित लक्षण टैग:',
    cancel: 'रद्द करें',
    diagnosingPathogen: 'रोग का विश्लेषण हो रहा है...',
    runMultimodalDiag: 'निदान शुरू करें',

    radarTitle: 'रोग बीजाणु प्रसार रडार',
    radarSubtitle: '35 किमी के दायरे में आर्द्रता, हवा की दिशा और रोग संक्रमण की लाइव ट्रैकिंग।',
    reportOutbreakBtn: 'प्रकोप की सूचना दें',
    fungalRisk: 'कवक बीजाणु जोखिम',
    bacterialRisk: 'जीवाणु रोग जोखिम',
    pestRisk: 'कीट प्रकोप जोखिम',
    bestSprayingWindow: 'छिड़काव का सर्वोत्तम समय',
    filterAllCrops: 'सभी फसलें',
    filterAllSeverities: 'सभी गंभीरता स्तर',
    activeOutbreaksTitle: 'सक्रिय स्थानीय रोग प्रकोप',
    sendWhatsAppAlert: 'व्हाट्सएप अलर्ट भेजें',
    farmsAffected: 'खेतों में सूचना',
    threatRadius: 'जोखिम दायरा',
    hectares: 'हेक्टेयर प्रभावित',

    marketplaceTitle: 'कृषि सामग्री और बाजार',
    marketplaceSubtitle: 'सत्यापित स्थानीय विक्रेताओं से प्रमाणित जैव-उत्पाद और कृषि रसायन प्राप्त करें।',
    filterAll: 'सभी सामग्री',
    filterOrganic: 'जैविक व बायो उत्पाद',
    filterCurative: 'रासायनिक उपचार',
    inStock: 'उपलब्ध है',
    verifiedDealer: 'सत्यापित विक्रेता',
    contactDealer: 'कॉल करें',
    orderWhatsApp: 'व्हाट्सएप पर ऑर्डर करें',

    communityTitle: 'किसान सहकारी अलर्ट नेटवर्क',
    communitySubtitle: 'एआई और कृषि विस्तार अधिकारियों द्वारा सत्यापित किसानों की वास्तविक रिपोर्ट।',
    reportObservation: 'लक्षण दर्ज करें',
    aiVerified: 'एआई द्वारा सत्यापित',
    helpfulConfirm: 'पुष्टि करें / उपयोगी',
    submitFieldReportTitle: 'खेत में रोग की सूचना दें',
    farmerName: 'किसान का नाम',
    villageName: 'गांव / क्षेत्र',
    cropField: 'प्रभावित फसल',
    suspectedIssue: 'संभावित समस्या / लक्षण',
    fieldNotes: 'खेत की स्थिति व किए गए उपाय',
    publishAlert: 'अलर्ट प्रकाशित करें',

    calculatorTitle: 'फसल उपज व वित्तीय सुरक्षा कैलकुलेटर',
    calculatorSubtitle: 'संभावित फसल नुकसान और समय पर उपचार से होने वाले लाभ का आकलन करें।',
    farmSize: 'खेत का क्षेत्रफल (हेक्टेयर)',
    expectedYield: 'अपेक्षित सामान्य उपज (टन/हेक्टेयर)',
    marketPrice: 'बाजार भाव (रुपये/टन)',
    lossPercent: 'अनुपचारित फसल नुकसान जोखिम (%)',
    treatmentCostLabel: 'कुल उपचार व दवा लागत',
    potentialLossValue: 'संभावित नुकसान मूल्य',
    netSavedValue: 'सुरक्षित की गई शुद्ध फसल आय',
    roiMultiplier: 'उपचार पर अनुमानित लाभ (ROI)',

    agronomistTitle: 'एआई कृषि विस्तार विशेषज्ञ',
    agronomistSubtitle: 'कीटनाशक मात्रा, नीम का काढ़ा बनाने या रोग निवारण पर अपनी भाषा में सवाल पूछें।',
    agronomistPlaceholder: 'सवाल पूछें उदा. धान के झोंका रोग के लिए नीम का काढ़ा कैसे बनाएं?',
    sendQuestion: 'सवाल पूछें',
    suggestedQuestions: 'सुझाए गए कृषि प्रश्न:'
  },
  te: {
    appTitle: 'అగ్రిషీల్డ్',
    appSubtitle: 'పంట తెగుళ్ళ ముందస్తు హెచ్చరిక & AI పరిష్కారాలు',
    liveWarning: 'లైవ్ హెచ్చరిక',
    liveWarningText: 'అధిక తేమ కారణంగా స్థానిక వ్యవసాయ ప్రాంతాల్లో శిలీంధ్ర వ్యాధి తీవ్రత హెచ్చరిక.',
    viewRadar: 'రాడార్ చూడండి →',
    selectBasin: 'వ్యవసాయ ప్రాంతాన్ని ఎంచుకోండి',
    spokenWrittenLanguage: 'మాట్లాడే & వ్రాత భాష',
    scanLeafBtn: 'ఆకును స్కాన్ చేయండి',
    scanLeafShort: 'స్కాన్',

    tabDiagnostic: 'AI వ్యాధి నిర్ధారణ',
    tabRadar: 'తెగుళ్ళ రాడార్',
    tabCommunity: 'రైతు అలర్ట్స్',
    tabDealers: 'ఎరువులు & పురుగుమందుల దుకాణాలు',
    tabAgronomist: 'వ్యవసాయ నిపుణుడిని అడగండి',

    diagConfidence: 'నిర్ధారణ కచ్చితత్వం',
    expectedLoss: 'అంచనా వేసిన నష్టం',
    expectedLossWithoutTreatment: 'చికిత్స చేయకపోతే పంట నష్టం',
    spokenAdvisoryTitle: 'రైతు ఆడియో సలహా (వాయిస్ గైడ్)',
    playVoice: 'వాయిస్ వినండి',
    stopVoice: 'ఆడియో ఆపండి',
    observedSymptoms: 'క్షేత్రంలో గమనించిన ప్రధాన లక్షణాలు:',
    localVernacular: 'స్థానిక పేరు',
    pathogen: 'రోగకారక కారకం',

    tabOrganicSolutions: 'సేంద్రీయ & తక్కువ ఖర్చు పరిష్కారాలు',
    tabChemicalProtocol: 'రసాయన మందుల విధానం',
    tabPrevention: 'పొలంలో నివారణ చర్యలు',
    organicHeading: 'పర్యావరణ హితమైన & సున్నా ఖర్చు సహజ నివారణలు',
    organicSubheading: 'విషపూరిత రసాయన అవశేషాలు లేకుండా స్థానిక వస్తువులతో తయారు చేయబడింది.',
    recommendedFirst: 'ముందుగా సిఫార్సు చేయబడింది',
    prepTime: 'తయారీ సమయం',
    ingredients: 'కావలసిన పదార్థాలు',
    zeroCost: 'ఉచితం / సున్నా ఖర్చు',
    lowCost: 'తక్కువ ఖర్చు',
    mediumCost: 'మధ్యస్థ ఖర్చు',

    chemicalHeading: 'ధృవీకరించబడిన వాణిజ్య రసాయన మందుల విధానం',
    chemicalSubheading: 'తెగుళ్ళ తీవ్రత ఆర్థిక పరిమితి దాటినప్పుడు మాత్రమే వాడండి. కోతకు ముందు వ్యవధి పాటించండి.',
    activeIngredient: 'క్రియాశీల పదార్ధం',
    dosage: 'మోతాదు',
    phiHarvest: 'కోతకు ముందు వ్యవధి (PHI)',
    tradeBrands: 'ప్రముఖ బ్రాండ్ పేర్లు',
    safetyPrecautions: 'భద్రతా & పిచికారీ జాగ్రత్తలు',
    curativeKnockdown: 'నివారణ చికిత్స',

    preventionHeading: 'దీర్ఘకాలిక పంట నిర్వహణ',
    preventionSubheading: 'తదుపరి పంటలలో తెగుళ్ళు రాకుండా నిరోధించే ఉత్తమ వ్యవసాయ పద్ధతులు.',

    broadcastOutbreak: 'తెగుళ్ళ వ్యాప్తి హెచ్చరికను ప్రసారం చేయండి',
    broadcastDesc: '15 కిమీ పరిధిలోని 40+ పొరుగు రైతులకు ముందస్తు పిచికారీ కోసం హెచ్చరించండి.',
    broadcastBtn: 'రైతులకు సమాచారం పంపండి',
    broadcastedBtn: 'హెచ్చరిక పంపబడింది!',
    nearestDealers: 'సమీప డీలర్లు',
    dealersDesc: 'స్థానిక దుకాణాల్లో అందుబాటులో ఉన్న బయో-ఫంగిసైడ్లు, విత్తనాలు మరియు ధరలను తనిఖీ చేయండి.',
    viewSuppliesBtn: 'మందుల వివరాలు చూడండి',
    askAgronomistCard: 'AI వ్యవసాయ శాస్త్రవేత్తను అడగండి',
    askAgronomistDesc: 'పిచికారీ సమయం, మందుల మిశ్రమం లేదా నేల తయారీపై తక్షణ సలహాలు పొందండి.',
    askAgronomistBtn: 'సలహా అడగండి',

    scanModalTitle: 'AI పంట తెగుళ్ళ నిర్ధారణ',
    scanModalSubtitle: 'తక్షణ చికిత్సా పద్ధతులను పొందడానికి ఆకు, కాండం లేదా కాయను స్కాన్ చేయండి',
    multimodalBadge: 'మల్టీమోడల్',
    selectTargetCrop: 'పంటను ఎంచుకోండి',
    cropImageInput: 'పంట ఫోటో ఇన్పుట్',
    tabPresets: 'నమూనాలు',
    tabLiveCamera: 'లైవ్ కెమెరా',
    tabUpload: 'ఫోటో అప్‌లోడ్',
    selectPresetHint: 'తక్షణ నిర్ధారణను పరీక్షించడానికి క్రింది నమూనాను ఎంచుకోండి:',
    centerLeafHint: 'దెబ్బతిన్న ఆకు లేదా కాయను ఇక్కడ ఉంచండి',
    snapPhoto: 'ఫోటో తీయండి',
    uploadCropPhoto: 'ఆకు ఫోటోను అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి',
    uploadCropSubtext: 'ఫోన్ కెమెరా లేదా గ్యాలరీ నుండి PNG, JPG, JPEG సపోర్ట్ చేస్తుంది',
    changePhoto: 'ఫోటో మార్చండి',
    removePhoto: 'తొలగించండి',
    describeSymptoms: 'పొలంలో కనిపించే లక్షణాలను వివరించండి',
    describeSymptomsPlaceholder: 'ఉదా: 3 రోజుల వర్షం తర్వాత వరి ఆకులపై మచ్చలు కనిపించాయి...',
    quickTags: 'శీఘ్ర లక్షణ ట్యాగ్‌లు:',
    cancel: 'రద్దు చేయండి',
    diagnosingPathogen: 'తెగులును గుర్తిస్తోంది...',
    runMultimodalDiag: 'వ్యాధి నిర్ధారణ చేయండి',

    radarTitle: 'తెగుళ్ళ వ్యాప్తి రాడార్',
    radarSubtitle: '35 కిమీ పరిధిలో తేమ, గాలి దిశ మరియు వ్యాధి వ్యాప్తిని రియల్ టైంలో పర్యవేక్షించండి.',
    reportOutbreakBtn: 'తెగులును నివేదించండి',
    fungalRisk: 'శిలీంధ్రాల ముప్పు',
    bacterialRisk: 'బ్యాక్టీరియా ముప్పు',
    pestRisk: 'పురుగుల ముప్పు',
    bestSprayingWindow: 'పిచికారీ చేయడానికి సరైన సమయం',
    filterAllCrops: 'అన్ని పంటలు',
    filterAllSeverities: 'అన్ని తీవ్రత స్థాయిలు',
    activeOutbreaksTitle: 'స్థానిక తెగుళ్ళ తీవ్రత',
    sendWhatsAppAlert: 'వాట్సాప్ అలర్ట్ పంపండి',
    farmsAffected: 'పొలాలు నివేదించాయి',
    threatRadius: 'ప్రమాద పరిధి',
    hectares: 'హెక్టార్లు ప్రభావితం',

    marketplaceTitle: 'వ్యవసాయ సామాగ్రి మార్కెట్',
    marketplaceSubtitle: 'ధృవీకరించబడిన స్థానిక డీలర్ల నుండి బయో-ఉత్పత్తులు మరియు రసాయన మందులను కనుగొనండి.',
    filterAll: 'అన్ని సామాగ్రి',
    filterOrganic: 'సేంద్రీయ & బయో',
    filterCurative: 'రసాయన మందులు',
    inStock: 'స్టాక్ ఉంది',
    verifiedDealer: 'ధృవీకరించబడిన డీలర్',
    contactDealer: 'కాల్ చేయండి',
    orderWhatsApp: 'వాట్సాప్ ఆర్డర్',

    communityTitle: 'రైతు సహకార నెట్‌వర్క్',
    communitySubtitle: 'AI మరియు వ్యవసాయ విస్తరణ అధికారులచే ధృవీకరించబడిన రైతుల సమాచారం.',
    reportObservation: 'సమాచారం నమోదు చేయండి',
    aiVerified: 'AI ద్వారా ధృవీకరించబడింది',
    helpfulConfirm: 'నిర్ధారించండి / ఉపయోగకరమైనది',
    submitFieldReportTitle: 'పంట తెగులు వివరాలను నమోదు చేయండి',
    farmerName: 'రైతు పేరు',
    villageName: 'గ్రామం / ప్రాంతం',
    cropField: 'ప్రభావితమైన పంట',
    suspectedIssue: 'లక్షణాలు / సమస్య',
    fieldNotes: 'చేపట్టిన చర్యలు',
    publishAlert: 'అలర్ట్‌ను ప్రచురించండి',

    calculatorTitle: 'దిగుబడి & ఆర్థిక నష్ట అంచనా',
    calculatorSubtitle: 'సంభావ్య నష్టాన్ని మరియు సకాలంలో చికిత్స చేయడం ద్వారా ఆదా అయ్యే విలువను లెక్కించండి.',
    farmSize: 'పొలం విస్తీర్ణం (హెక్టార్లు)',
    expectedYield: 'ఆశించిన సాధారణ దిగుబడి (టన్నులు/హెక్టార్)',
    marketPrice: 'మార్కెట్ ధర (రూ./టన్ను)',
    lossPercent: 'చికిత్స చేయకపోతే నష్ట శాతం (%)',
    treatmentCostLabel: 'మొత్తం మందులు / చికిత్స ఖర్చు',
    potentialLossValue: 'సంభావ్య పంట నష్ట విలువ',
    netSavedValue: 'రక్షించబడిన నికర విలువ',
    roiMultiplier: 'అంచనా వేసిన రాబడి (ROI)',

    agronomistTitle: 'AI వ్యవసాయ శాస్త్రవేత్త',
    agronomistSubtitle: 'మందుల మోతాదు, కషాయాల తయారీ లేదా నేల ఆరోగ్యంపై మీ మాతృభాషలోనే ప్రశ్నలు అడగండి.',
    agronomistPlaceholder: 'ఉదా: వరి అగ్గితెగులుకు వేప నూనె ద్రావణం ఎలా తయారు చేయాలి?',
    sendQuestion: 'ప్రశ్న పంపండి',
    suggestedQuestions: 'సూచించిన వ్యవసాయ ప్రశ్నలు:'
  },
  id: {
    appTitle: 'AgriShield',
    appSubtitle: 'Peringatan Dini Penyakit Tanaman & Tindakan AI',
    liveWarning: 'Peringatan Langsung',
    liveWarningText: 'Peringatan spora jamur: Risiko tinggi penyakit tanaman di wilayah pertanian lokal akibat kelembapan tinggi.',
    viewRadar: 'Lihat Radar →',
    selectBasin: 'Pilih Wilayah Pertanian',
    spokenWrittenLanguage: 'Bahasa Lisan & Tulisan',
    scanLeafBtn: 'Pindai Daun Tanaman',
    scanLeafShort: 'Pindai',

    tabDiagnostic: 'Diagnostik AI',
    tabRadar: 'Radar Wabah',
    tabCommunity: 'Peringatan Komunitas',
    tabDealers: 'Kios Pertanian',
    tabAgronomist: 'Tanya Agronomis',

    diagConfidence: 'Tingkat Akurasi Diagnostik',
    expectedLoss: 'Perkiraan Kerugian',
    expectedLossWithoutTreatment: 'Potensi Kehilangan Hasil Tanpa Penanganan',
    spokenAdvisoryTitle: 'Panduan Suara Petani (Audio)',
    playVoice: 'Putar Suara',
    stopVoice: 'Hentikan Audio',
    observedSymptoms: 'Gejala Lapangan yang Teramati:',
    localVernacular: 'Nama Lokal / Daerah',
    pathogen: 'Patogen Penyebab',

    tabOrganicSolutions: 'Solusi Organik & Murah',
    tabChemicalProtocol: 'Protokol Kimia Terarah',
    tabPrevention: 'Pencegahan Lapangan',
    organicHeading: 'Racikan Alami Ramah Lingkungan & Bebas Biaya',
    organicSubheading: 'Dibuat dari bahan lokal yang mudah didapat tanpa meninggalkan residu kimia berbahaya.',
    recommendedFirst: 'Sangat Direkomendasikan',
    prepTime: 'Waktu Pembuatan',
    ingredients: 'Bahan-Bahan',
    zeroCost: 'Tanpa Biaya',
    lowCost: 'Biaya Rendah',
    mediumCost: 'Biaya Sedang',

    chemicalHeading: 'Protokol Agro-Kimiawi Standar Terdaftar',
    chemicalSubheading: 'Gunakan saat serangan melewati ambang batas ekonomi. Patuhi masa tenggang sebelum panen.',
    activeIngredient: 'Bahan Aktif',
    dosage: 'Dosis Anjuran',
    phiHarvest: 'Jeda Waktu ke Panen (PHI)',
    tradeBrands: 'Merek Dagang Umum',
    safetyPrecautions: 'Petunjuk Keselamatan & Penyemprotan',
    curativeKnockdown: 'Tindakan Kuratif',

    preventionHeading: 'Manajemen Lapangan Jangka Panjang',
    preventionSubheading: 'Praktik budidaya untuk mencegah infeksi ulang dan penyebaran spora pada musim tanam berikutnya.',

    broadcastOutbreak: 'Sebarkan Peringatan Wabah',
    broadcastDesc: 'Beri tahu 40+ petani sekitar dalam radius 15km agar segera melakukan penyemprotan preventif.',
    broadcastBtn: 'Sebarkan ke Komunitas',
    broadcastedBtn: 'Peringatan Terkirim!',
    nearestDealers: 'Kios Saprotan Terdekat',
    dealersDesc: 'Cek ketersediaan bio-fungisida, pestisida, dan harga di toko pertanian terdekat.',
    viewSuppliesBtn: 'Lihat Stok Obat & Pupuk',
    askAgronomistCard: 'Tanya Penyuluh AI',
    askAgronomistDesc: 'Dapatkan jawaban instan tentang waktu semprot, pencampuran tangki, atau sanitasi tanah.',
    askAgronomistBtn: 'Konsultasi Sekarang',

    scanModalTitle: 'Diagnostik Penyakit Tanaman AI',
    scanModalSubtitle: 'Pindai daun, batang, atau buah untuk mendapatkan penanganan lokal instan',
    multimodalBadge: 'Multimodal',
    selectTargetCrop: 'Pilih Jenis Tanaman',
    cropImageInput: 'Foto Tanaman',
    tabPresets: 'Sampel Lapangan',
    tabLiveCamera: 'Kamera Langsung',
    tabUpload: 'Unggah Foto',
    selectPresetHint: 'Pilih salah satu sampel di bawah untuk menguji diagnosis dan racikan organik secara instan:',
    centerLeafHint: 'Posisikan daun atau buah yang terserang di tengah bingkai',
    snapPhoto: 'Ambil Foto',
    uploadCropPhoto: 'Klik untuk mengunggah foto daun',
    uploadCropSubtext: 'Mendukung format PNG, JPG, JPEG dari kamera atau galeri',
    changePhoto: 'Ganti Foto',
    removePhoto: 'Hapus',
    describeSymptoms: 'Deskripsikan Gejala Lapangan (Opsional)',
    describeSymptomsPlaceholder: 'Contoh: Bercak belah ketupat muncul pada 15% daun padi setelah 3 hari hujan lebat...',
    quickTags: 'Label Gejala Cepat:',
    cancel: 'Batal',
    diagnosingPathogen: 'Menganalisis Patogen...',
    runMultimodalDiag: 'Jalankan Diagnosis AI',

    radarTitle: 'Radar Penyebaran Spora & Vektor Penyakit',
    radarSubtitle: 'Pemantauan kelembapan udara, arah angin, dan klaster serangan penyakit dalam radius 35km.',
    reportOutbreakBtn: 'Lapor Serangan Hama',
    fungalRisk: 'Risiko Spora Jamur',
    bacterialRisk: 'Risiko Bakteri',
    pestRisk: 'Risiko Serangga Hama',
    bestSprayingWindow: 'Waktu Terbaik Menyemprot',
    filterAllCrops: 'Semua Tanaman',
    filterAllSeverities: 'Semua Tingkat Bahaya',
    activeOutbreaksTitle: 'Klaster Serangan Aktif di Sekitar',
    sendWhatsAppAlert: 'Kirim Peringatan WhatsApp',
    farmsAffected: 'laporan lahan',
    threatRadius: 'radius ancaman',
    hectares: 'hektar terdampak',

    marketplaceTitle: 'Pasar Sarana Pertanian (Saprotan)',
    marketplaceSubtitle: 'Temukan bio-pestisida, fungisida organik, dan obat pertanian dari kios terverifikasi.',
    filterAll: 'Semua Pasokan',
    filterOrganic: 'Organik & Hayati',
    filterCurative: 'Bahan Kimia Kuratif',
    inStock: 'Tersedia',
    verifiedDealer: 'Kios Terverifikasi',
    contactDealer: 'Hubungi Kios',
    orderWhatsApp: 'Pesan via WhatsApp',

    communityTitle: 'Jaringan Peringatan Dini Petani',
    communitySubtitle: 'Laporan sesama petani yang diverifikasi oleh AI patologi dan penyuluh pertanian.',
    reportObservation: 'Laporkan Pengamatan',
    aiVerified: 'Terverifikasi AI Patologi',
    helpfulConfirm: 'Konfirmasi / Bermanfaat',
    submitFieldReportTitle: 'Kirim Laporan Gejala Penyakit Tanaman',
    farmerName: 'Nama Petani',
    villageName: 'Desa / Wilayah',
    cropField: 'Komoditas Tanaman',
    suspectedIssue: 'Dugaan Penyakit / Gejala',
    fieldNotes: 'Catatan Lapangan & Tindakan',
    publishAlert: 'Terbitkan Peringatan',

    calculatorTitle: 'Kalkulator Perlindungan Hasil Panen & Finansial',
    calculatorSubtitle: 'Hitung potensi kerugian panen dan nilai ekonomi dari intervensi tepat waktu.',
    farmSize: 'Luas Lahan Pertanian (Hektar)',
    expectedYield: 'Target Hasil Normal (Ton/Ha)',
    marketPrice: 'Harga Jual Komoditas (IDR/Ton)',
    lossPercent: 'Tingkat Risiko Kehilangan Hasil (%)',
    treatmentCostLabel: 'Total Biaya Pengobatan / Jamu Tanaman (IDR)',
    potentialLossValue: 'Potensi Kerugian Nilai Panen',
    netSavedValue: 'Nilai Panen Bersih Terselamatkan',
    roiMultiplier: 'Perkiraan Kelipatan Pengembalian (ROI)',

    agronomistTitle: 'Penyuluh Pertanian AI',
    agronomistSubtitle: 'Ajukan pertanyaan dalam Bahasa Indonesia mengenai takaran obat, pestisida nabati, atau kesuburan tanah.',
    agronomistPlaceholder: 'Tanya penyuluh, cth: Bagaimana cara membuat ekstrak daun mimba untuk blast padi?',
    sendQuestion: 'Kirim Pertanyaan',
    suggestedQuestions: 'Pertanyaan yang Sering Diajukan:'
  },
  es: {
    appTitle: 'AgriShield',
    appSubtitle: 'Alerta Temprana de Enfermedades de Cultivos e IA Agronómica',
    liveWarning: 'Alerta en Vivo',
    liveWarningText: 'Alerta de esporas fúngicas: Alto riesgo en cuencas agrícolas debido a la humedad extrema.',
    viewRadar: 'Ver Radar →',
    selectBasin: 'Seleccionar Cuenca Agrícola',
    spokenWrittenLanguage: 'Idioma Hablado y Escrito',
    scanLeafBtn: 'Escanear Hoja',
    scanLeafShort: 'Escanear',

    tabDiagnostic: 'Diagnóstico IA',
    tabRadar: 'Radar de Brotes',
    tabCommunity: 'Alertas Comunitarias',
    tabDealers: 'Agropecuarias',
    tabAgronomist: 'Consultar Agrónomo',

    diagConfidence: 'Confianza Diagnóstica',
    expectedLoss: 'Pérdida Estimada',
    expectedLossWithoutTreatment: 'Pérdida de Rendimiento sin Tratamiento',
    spokenAdvisoryTitle: 'Guía de Voz para el Agricultor (Audio)',
    playVoice: 'Reproducir Voz',
    stopVoice: 'Detener Audio',
    observedSymptoms: 'Síntomas Clave Observados en Campo:',
    localVernacular: 'Nombre Común / Local',
    pathogen: 'Patógeno',

    tabOrganicSolutions: 'Remedios Orgánicos y Económicos',
    tabChemicalProtocol: 'Protocolo Agroquímico',
    tabPrevention: 'Prevención en Campo',
    organicHeading: 'Remedios Ecológicos y de Bajo Costo',
    organicSubheading: 'Preparados con materiales locales sin dejar residuos químicos tóxicos.',
    recommendedFirst: 'Recomendado Primero',
    prepTime: 'Tiempo de Preparación',
    ingredients: 'Ingredientes',
    zeroCost: 'Costo Cero',
    lowCost: 'Bajo Costo',
    mediumCost: 'Costo Medio',

    chemicalHeading: 'Protocolo Agroquímico Comercial Autorizado',
    chemicalSubheading: 'Utilizar cuando la presión supere el umbral económico. Respetar el plazo de seguridad.',
    activeIngredient: 'Ingrediente Activo',
    dosage: 'Dosis',
    phiHarvest: 'Plazo de Seguridad (Días a Cosecha)',
    tradeBrands: 'Marcas Comerciales Comunes',
    safetyPrecautions: 'Precauciones y Aplicación',
    curativeKnockdown: 'Curativo / Choque',

    preventionHeading: 'Manejo Agronómico Preventivo',
    preventionSubheading: 'Prácticas para evitar la acumulación de esporas en ciclos posteriores.',

    broadcastOutbreak: 'Transmitir Alerta de Brote',
    broadcastDesc: 'Notificar a más de 40 parcelas vecinas en un radio de 15 km para aplicar tratamientos preventivos.',
    broadcastBtn: 'Transmitir a la Comunidad',
    broadcastedBtn: '¡Alerta Transmitida!',
    nearestDealers: 'Agropecuarias Cercanas',
    dealersDesc: 'Verifique stock de biofungicidas, semillas e insumos en tiendas locales.',
    viewSuppliesBtn: 'Ver Insumos Disponibles',
    askAgronomistCard: 'Consultar Agrónomo IA',
    askAgronomistDesc: 'Aclare dudas sobre dosis, mezclas de tanque o desinfección del suelo.',
    askAgronomistBtn: 'Hacer Pregunta',

    scanModalTitle: 'Diagnóstico IA de Enfermedades',
    scanModalSubtitle: 'Escanee hojas, tallos o frutos para obtener tratamientos inmediatos',
    multimodalBadge: 'Multimodal',
    selectTargetCrop: 'Seleccione el Cultivo',
    cropImageInput: 'Imagen del Cultivo',
    tabPresets: 'Muestras de Campo',
    tabLiveCamera: 'Cámara en Vivo',
    tabUpload: 'Subir Foto',
    selectPresetHint: 'Seleccione una muestra para probar el diagnóstico instantáneo:',
    centerLeafHint: 'Centre la hoja o fruto afectado aquí',
    snapPhoto: 'Tomar Foto',
    uploadCropPhoto: 'Haga clic para subir la foto de la hoja',
    uploadCropSubtext: 'Formatos PNG, JPG, JPEG desde la cámara o galería',
    changePhoto: 'Cambiar Foto',
    removePhoto: 'Eliminar',
    describeSymptoms: 'Describa los Síntomas (Opcional)',
    describeSymptomsPlaceholder: 'Ej: Manchas en forma de rombo aparecieron tras 3 días de lluvia continua...',
    quickTags: 'Etiquetas Rápidas:',
    cancel: 'Cancelar',
    diagnosingPathogen: 'Diagnosticando Patógeno...',
    runMultimodalDiag: 'Iniciar Diagnóstico IA',

    radarTitle: 'Radar de Propagación de Esporas y Plagas',
    radarSubtitle: 'Monitoreo en tiempo real de humedad, viento y focos de infección en un radio de 35 km.',
    reportOutbreakBtn: 'Reportar Brote',
    fungalRisk: 'Riesgo Fúngico',
    bacterialRisk: 'Riesgo Bacteriano',
    pestRisk: 'Riesgo de Plagas',
    bestSprayingWindow: 'Ventana Óptima de Aplicación',
    filterAllCrops: 'Todos los Cultivos',
    filterAllSeverities: 'Todas las Severidades',
    activeOutbreaksTitle: 'Focos de Infección Locales',
    sendWhatsAppAlert: 'Enviar Alerta por WhatsApp',
    farmsAffected: 'fincas reportando',
    threatRadius: 'radio de amenaza',
    hectares: 'hectáreas afectadas',

    marketplaceTitle: 'Mercado de Insumos Agrícolas',
    marketplaceSubtitle: 'Encuentre bioinsumos certificados, fungicidas y productos de distribuidores verificados.',
    filterAll: 'Todos los Insumos',
    filterOrganic: 'Biológicos y Orgánicos',
    filterCurative: 'Químicos Curativos',
    inStock: 'En Stock',
    verifiedDealer: 'Distribuidor Verificado',
    contactDealer: 'Llamar',
    orderWhatsApp: 'Pedir por WhatsApp',

    communityTitle: 'Red Cooperativa de Alertas',
    communitySubtitle: 'Reportes entre agricultores verificados por IA patológica y técnicos de extensión.',
    reportObservation: 'Reportar Observación',
    aiVerified: 'Verificado por IA',
    helpfulConfirm: 'Confirmar / Útil',
    submitFieldReportTitle: 'Enviar Observación de Campo',
    farmerName: 'Nombre del Agricultor',
    villageName: 'Comunidad / Región',
    cropField: 'Cultivo Afectado',
    suspectedIssue: 'Problema Sospechado / Síntomas',
    fieldNotes: 'Notas de Campo y Acciones',
    publishAlert: 'Publicar Alerta',

    calculatorTitle: 'Calculadora de Rendimiento y Pérdidas',
    calculatorSubtitle: 'Estime las pérdidas potenciales y el retorno de una intervención a tiempo.',
    farmSize: 'Superficie de la Finca (Hectáreas)',
    expectedYield: 'Rendimiento Normal (Toneladas/Ha)',
    marketPrice: 'Precio de Mercado ($ / Tonelada)',
    lossPercent: 'Riesgo de Pérdida sin Tratamiento (%)',
    treatmentCostLabel: 'Costo Total del Tratamiento ($)',
    potentialLossValue: 'Pérdida Potencial de Cosecha',
    netSavedValue: 'Valor Neto Protegido',
    roiMultiplier: 'Retorno Estimado de la Inversión (ROI)',

    agronomistTitle: 'Asesor Agronómico IA',
    agronomistSubtitle: 'Pregunte en español sobre dosis, biopreparados o desinfección de suelos.',
    agronomistPlaceholder: 'Ej: ¿Cómo preparo extracto de neem para piricularia en arroz?',
    sendQuestion: 'Enviar Consulta',
    suggestedQuestions: 'Preguntas Agrícolas Frecuentes:'
  },
  bn: {
    appTitle: 'এগ্রিশিল্ড',
    appSubtitle: 'ফসলের রোগ প্রতিরোধ ও আগাম এআই সতর্কতা',
    liveWarning: 'সরাসরি সতর্কতা',
    liveWarningText: 'স্পোর বিস্তারের সতর্কতা: অতিরিক্ত আর্দ্রতার কারণে স্থানীয় ফসলে ছত্রাক রোগের উচ্চ ঝুঁকি।',
    viewRadar: 'রাডার দেখুন →',
    selectBasin: 'কৃষি অঞ্চল নির্বাচন করুন',
    spokenWrittenLanguage: 'কথ্য ও লিখিত ভাষা',
    scanLeafBtn: 'পাতা স্ক্যান করুন',
    scanLeafShort: 'স্ক্যান',

    tabDiagnostic: 'এআই রোগ নির্ণয়',
    tabRadar: 'প্রকোপ রাডার',
    tabCommunity: 'কমিউনিটি সতর্কতা',
    tabDealers: 'কৃষি ডিলার',
    tabAgronomist: 'কৃষি বিশেষজ্ঞের পরামর্শ',

    diagConfidence: 'রোগ নির্ণয়ের নির্ভুলতা',
    expectedLoss: 'সম্ভাব্য ক্ষতি',
    expectedLossWithoutTreatment: 'চিকিৎসা না করালে ফলন ক্ষতি',
    spokenAdvisoryTitle: 'কৃষকের অডিও পরামর্শ (ভয়েস গাইড)',
    playVoice: 'ভয়েস শুনুন',
    stopVoice: 'অডিও বন্ধ করুন',
    observedSymptoms: 'মাঠে পরিলক্ষিত প্রধান লক্ষণসমূহ:',
    localVernacular: 'স্থানীয় নাম',
    pathogen: 'রোগ সৃষ্টিকারী জীবাণু',

    tabOrganicSolutions: 'জৈব ও সাশ্রয়ী সমাধান',
    tabChemicalProtocol: 'অনুমোদিত রাসায়নিক সমাধান',
    tabPrevention: 'মাঠের আগাম প্রতিরোধ',
    organicHeading: 'পরিবেশবান্ধব ও খরচবিহীন প্রাকৃতিক প্রতিকার',
    organicSubheading: 'কোনো ক্ষতিকর রাসায়নিক অবশিষ্ট ছাড়াই স্থানীয় উপকরণ দিয়ে সহজে তৈরি।',
    recommendedFirst: 'প্রথমেই সুপারিশকৃত',
    prepTime: 'প্রস্তুতির সময়',
    ingredients: 'প্রয়োজনীয় উপকরণ',
    zeroCost: 'বিনা খরচে',
    lowCost: 'স্বল্প খরচ',
    mediumCost: 'মাঝারি খরচ',

    chemicalHeading: 'অনুমোদিত বাণিজ্যিক রাসায়নিক প্রোটোকল',
    chemicalSubheading: 'রোগের তীব্রতা অর্থনৈতিক ক্ষতির সীমা অতিক্রম করলেই কেবল ব্যবহার করুন। তোলার ব্যবধান মেনে চলুন।',
    activeIngredient: 'কার্যকরী উপাদান',
    dosage: 'মাত্রা',
    phiHarvest: 'ফসল তোলার পূর্বের ব্যবধান',
    tradeBrands: 'পরিচিত বাণিজ্যিক নাম',
    safetyPrecautions: 'নিরাপত্তা ও স্প্রে করার নিয়মাবলী',
    curativeKnockdown: 'উপশমকারী ব্যবস্থা',

    preventionHeading: 'দীর্ঘমেয়াদী কৃষি ব্যবস্থাপনা',
    preventionSubheading: 'পরবর্তী মৌসুমে জীবাণুর বিস্তার রোধের সর্বোত্তম agronomic কৌশল।',

    broadcastOutbreak: 'রোগের সতর্কতা বার্তা প্রচার করুন',
    broadcastDesc: '১৫ কিমির মধ্যে ৪০+ প্রতিবেশী কৃষককে সময়মতো স্প্রে করার সতর্কতা পাঠান।',
    broadcastBtn: 'কমিউনিটিতে প্রচার করুন',
    broadcastedBtn: 'সতর্কতা পাঠানো হয়েছে!',
    nearestDealers: 'নিকটস্থ কৃষি ডিলার',
    dealersDesc: 'স্থানীয় দোকানে উপলব্ধ জৈব ছত্রাকনাশক, বীজ ও ওষুধের দাম যাচাই করুন।',
    viewSuppliesBtn: 'উপলব্ধ সামগ্রী দেখুন',
    askAgronomistCard: 'এআই কৃষিবিদকে জিজ্ঞাসা করুন',
    askAgronomistDesc: 'স্প্রে করার সময়, মিশ্রণ বা মাটির যত্ন সম্পর্কে অবিলম্বে জেনে নিন।',
    askAgronomistBtn: 'পরামর্শ নিন',

    scanModalTitle: 'এআই ফসলের রোগ নির্ণয়',
    scanModalSubtitle: 'তাত্ক্ষণিক প্রতিকার পেতে পাতা, কান্ড বা ফল স্ক্যান করুন',
    multimodalBadge: 'মাল্টিমোডাল',
    selectTargetCrop: 'ফসল নির্বাচন করুন',
    cropImageInput: 'ফসলের ছবি',
    tabPresets: 'নমুনা ক্ষেত্র',
    tabLiveCamera: 'লাইভ ক্যামেরা',
    tabUpload: 'ছবি আপলোড',
    selectPresetHint: 'তাত্ক্ষণিক রোগ নির্ণয় যাচাই করতে নিচের নমুনা নির্বাচন করুন:',
    centerLeafHint: 'আক্রান্ত পাতা বা ফলটি এখানে কেন্দ্র করুন',
    snapPhoto: 'ছবি তুলুন',
    uploadCropPhoto: 'পাতার ছবি আপলোড করতে ক্লিক করুন',
    uploadCropSubtext: 'ক্যামেরা বা গ্যালারি থেকে PNG, JPG, JPEG সমর্থিত',
    changePhoto: 'ছবি পরিবর্তন করুন',
    removePhoto: 'মুছে ফেলুন',
    describeSymptoms: 'মাঠের লক্ষণ বর্ণনা করুন (ঐচ্ছিক)',
    describeSymptomsPlaceholder: 'যেমন: ৩ দিন বৃষ্টির পর ধানের পাতায় বাদামী দাগ দেখা দিয়েছে...',
    quickTags: 'দ্রুত লক্ষণ ট্যাগ:',
    cancel: 'বাতিল',
    diagnosingPathogen: 'রোগ বিশ্লেষণ করা হচ্ছে...',
    runMultimodalDiag: 'রোগ নির্ণয় শুরু করুন',

    radarTitle: 'রোগ জীবাণু বিস্তার রাডার',
    radarSubtitle: '৩৫ কিমি পরিধিতে আর্দ্রতা, বাতাসের দিক এবং রোগের বিস্তার লাইভ পর্যবেক্ষণ।',
    reportOutbreakBtn: 'রোগের তথ্য জানান',
    fungalRisk: 'ছত্রাক স্পোর ঝুঁকি',
    bacterialRisk: 'ব্যাকটেরিয়া ঝুঁকি',
    pestRisk: 'কীটপতঙ্গ ঝুঁকি',
    bestSprayingWindow: 'স্প্রে করার উপযুক্ত সময়',
    filterAllCrops: 'সব ফসল',
    filterAllSeverities: 'সব মাত্রা',
    activeOutbreaksTitle: 'সক্রিয় স্থানীয় রোগের প্রকোপ',
    sendWhatsAppAlert: 'হোয়াটসঅ্যাপে সতর্কতা পাঠান',
    farmsAffected: 'জমিতে রিপোর্ট',
    threatRadius: 'ঝুঁকির ব্যাসার্ধ',
    hectares: 'হেক্টর আক্রান্ত',

    marketplaceTitle: 'কৃষি বাজার ও উপকরণ',
    marketplaceSubtitle: 'যাচাইকৃত স্থানীয় ডিলারদের কাছ থেকে মানসম্পন্ন জৈব ও রাসায়নিক উপকরণ খুঁজুন।',
    filterAll: 'সব উপকরণ',
    filterOrganic: 'জৈব ও বায়ো পণ্য',
    filterCurative: 'রাসায়নিক চিকিৎসা',
    inStock: 'স্টকে আছে',
    verifiedDealer: 'যাচাইকৃত ডিলার',
    contactDealer: 'কল করুন',
    orderWhatsApp: 'হোয়াটসঅ্যাপে অর্ডার করুন',

    communityTitle: 'কৃষক সমবায় সতর্কতা নেটওয়ার্ক',
    communitySubtitle: 'এআই এবং কৃষি কর্মকর্তাদের দ্বারা যাচাইকৃত কৃষকদের প্রত্যক্ষ প্রতিবেদন।',
    reportObservation: 'পর্যবেক্ষণ জানান',
    aiVerified: 'এআই দ্বারা যাচাইকৃত',
    helpfulConfirm: 'নিশ্চিত করুন / উপকারী',
    submitFieldReportTitle: 'মাঠের রোগের তথ্য জমা দিন',
    farmerName: 'কৃষকের নাম',
    villageName: 'গ্রাম / অঞ্চল',
    cropField: 'আক্রান্ত ফসল',
    suspectedIssue: 'সম্ভাব্য সমস্যা / লক্ষণ',
    fieldNotes: 'মাঠের নোট ও গৃহীত ব্যবস্থা',
    publishAlert: 'সতর্কতা প্রকাশ করুন',

    calculatorTitle: 'ফলন ও আর্থিক সুরক্ষা ক্যালকুলেটর',
    calculatorSubtitle: 'সম্ভাব্য ফসল ক্ষতি এবং সময়মত চিকিৎসার মাধ্যমে রক্ষা পাওয়া ফসলের হিসাব করুন।',
    farmSize: 'জমির পরিমাণ (হেক্টর)',
    expectedYield: 'প্রত্যাশিত স্বাভাবিক ফলন (টন/হেক্টর)',
    marketPrice: 'বাজার মূল্য (টাকা/টন)',
    lossPercent: 'চিকিৎসাহীন ফসল ক্ষতির ঝুঁকি (%)',
    treatmentCostLabel: 'মোট চিকিৎসার খরচ (টাকা)',
    potentialLossValue: 'সম্ভাব্য ফসল ক্ষতির পরিমাণ',
    netSavedValue: 'সুরক্ষিত ফসলের মোট মূল্য',
    roiMultiplier: 'আনুমানিক ফেরত লাভ (ROI)',

    agronomistTitle: 'এআই কৃষি সম্প্রসারণ কর্মকর্তা',
    agronomistSubtitle: 'ওষুধের সঠিক মাত্রা বা নিম নির্যাস তৈরি সম্পর্কে আপনার ভাষায় যেকোনো প্রশ্ন করুন।',
    agronomistPlaceholder: 'যেমন: ধানের ব্লাস্ট রোগের জন্য নিম পাতার নির্যাস কীভাবে তৈরি করব?',
    sendQuestion: 'প্রশ্ন পাঠান',
    suggestedQuestions: 'প্রস্তাবিত কৃষি প্রশ্নাবলী:'
  },
  sw: {
    appTitle: 'AgriShield',
    appSubtitle: 'Onyo la Mapema la Magonjwa ya Mimea na Hatua za AI',
    liveWarning: 'Onyo la Moja kwa Moja',
    liveWarningText: 'Tahadhari ya kuenea kwa fangasi: Hatari kubwa ya magonjwa shambani kutokana na unyevu mwingi.',
    viewRadar: 'Angalia Rada →',
    selectBasin: 'Chagua Eneo la Kilimo',
    spokenWrittenLanguage: 'Lugha ya Kuzungumza na Kuandika',
    scanLeafBtn: 'Changanua Jani',
    scanLeafShort: 'Changanua',

    tabDiagnostic: 'Uchunguzi wa AI',
    tabRadar: 'Rada ya Mlipuko',
    tabCommunity: 'Taarifa za Jamii',
    tabDealers: 'Wauzaji wa Pembejeo',
    tabAgronomist: 'Uliza Mtaalamu wa Kilimo',

    diagConfidence: 'Uhakika wa Uchunguzi',
    expectedLoss: 'Kiwango cha Hasara',
    expectedLossWithoutTreatment: 'Hasara ya Mazao Bila Matibabu',
    spokenAdvisoryTitle: 'Mwongozo wa Sauti kwa Mkulima (Audio)',
    playVoice: 'Sikiliza Sauti',
    stopVoice: 'Zima Sauti',
    observedSymptoms: 'Dalili Kuu Zilizoonekana Shambani:',
    localVernacular: 'Jina la Kienyeji',
    pathogen: 'Kimelea / Kisababishi',

    tabOrganicSolutions: 'Tiba Asilia & Nafuu',
    tabChemicalProtocol: 'Dawa za Kemikali Zilizoidhinishwa',
    tabPrevention: 'Kinga Shambani',
    organicHeading: 'Tiba Asilia Isiyo na Gharama',
    organicSubheading: 'Imetengenezwa kwa kutumia vifaa vinavyopatikana kienyeji bila kuacha kemikali hatari.',
    recommendedFirst: 'Inashauriwa Kwanza',
    prepTime: 'Muda wa Maandalizi',
    ingredients: 'Viungo Vinavyohitajika',
    zeroCost: 'Bure / Gharama Sifuri',
    lowCost: 'Gharama Ndogo',
    mediumCost: 'Gharama ya Wastani',

    chemicalHeading: 'Mwongozo wa Dawa za Kemikali Zilizoidhinishwa',
    chemicalSubheading: 'Tumia pale tu ugonjwa unapozidi kiwango cha kawaida. Zingatia muda wa kusubiri kabla ya kuvuna.',
    activeIngredient: 'Kiambato Amilifu',
    dosage: 'Kipimo',
    phiHarvest: 'Muda wa Kusubiri Kabla ya Kuvuna (PHI)',
    tradeBrands: 'Majina ya Kibiashara',
    safetyPrecautions: 'Tahadhari za Usalama Wakati wa Kupuliza',
    curativeKnockdown: 'Tiba ya Kuua Wadudu/Fangasi',

    preventionHeading: 'Usimamizi wa Shamba kwa Muda Mrefu',
    preventionSubheading: 'Mbinu za kuzuia magonjwa yasijirudie katika misimu inayofuata.',

    broadcastOutbreak: 'Tangaza Tahadhari ya Mlipuko',
    broadcastDesc: 'Wajulishe wakulima wenzako zaidi ya 40 ndani ya km 15 ili wachukue hatua za mapema.',
    broadcastBtn: 'Tuma kwa Jamii',
    broadcastedBtn: 'Tahadhari Imetumwa!',
    nearestDealers: 'Wauzaji wa Pembejeo wa Karibu',
    dealersDesc: 'Angalia upatikanaji wa dawa za kibiolojia na mbegu bora kwenye maduka ya karibu.',
    viewSuppliesBtn: 'Ona Dawa Zilizopo',
    askAgronomistCard: 'Uliza Mtaalamu wa AI',
    askAgronomistDesc: 'Pata majibu ya haraka kuhusu vipimo vya dawa, mchanganyiko au afya ya udongo.',
    askAgronomistBtn: 'Uliza Sasa',

    scanModalTitle: 'Uchunguzi wa AI wa Magonjwa ya Mimea',
    scanModalSubtitle: 'Changanua jani, shina au tunda upate tiba ya haraka',
    multimodalBadge: 'Multimodal',
    selectTargetCrop: 'Chagua Zao',
    cropImageInput: 'Picha ya Zao',
    tabPresets: 'Mifano ya Shambani',
    tabLiveCamera: 'Kamera ya Moja kwa Moja',
    tabUpload: 'Pakia Picha',
    selectPresetHint: 'Chagua mfano hapa chini kupima uchunguzi wa haraka:',
    centerLeafHint: 'Weka jani au tunda lililoathirika katikati',
    snapPhoto: 'Piga Picha',
    uploadCropPhoto: 'Bofya kupakia picha ya jani',
    uploadCropSubtext: 'Inakubali PNG, JPG, JPEG kutoka kwenye simu',
    changePhoto: 'Badilisha Picha',
    removePhoto: 'Ondoa',
    describeSymptoms: 'Eleza Dalili za Shambani (Hiari)',
    describeSymptomsPlaceholder: 'Mfano: Madoa ya rangi ya kahawia yamejitokeza baada ya mvua ya siku tatu...',
    quickTags: 'Lebo za Haraka:',
    cancel: 'Ghairi',
    diagnosingPathogen: 'Inachunguza ugonjwa...',
    runMultimodalDiag: 'Anza Uchunguzi wa AI',

    radarTitle: 'Rada ya Kuenea kwa Magonjwa na Wadudu',
    radarSubtitle: 'Ufuatiliaji wa unyevu, upepo na milipuko ya magonjwa ndani ya kilomita 35.',
    reportOutbreakBtn: 'Ripoti Mlipuko',
    fungalRisk: 'Hatari ya Fangasi',
    bacterialRisk: 'Hatari ya Bakteria',
    pestRisk: 'Hatari ya Wadudu',
    bestSprayingWindow: 'Wakati Bora wa Kupuliza Dawa',
    filterAllCrops: 'Mazao Yote',
    filterAllSeverities: 'Viwango Vyote',
    activeOutbreaksTitle: 'Milipuko ya Karibu Inayoendelea',
    sendWhatsAppAlert: 'Tuma Onyo la WhatsApp',
    farmsAffected: 'mashamba yaliyoripoti',
    threatRadius: 'eneo la hatari',
    hectares: 'hekari zilizoathirika',

    marketplaceTitle: 'Soko la Pembejeo za Kilimo',
    marketplaceSubtitle: 'Pata dawa asilia, mbolea na viuatilifu kutoka kwa wauzaji walioidhinishwa.',
    filterAll: 'Bidhaa Zote',
    filterOrganic: 'Za Asili & Kibiolojia',
    filterCurative: 'Kemikali za Kutibu',
    inStock: 'Ipo Dukani',
    verifiedDealer: 'Muuzaji Aliyeidhinishwa',
    contactDealer: 'Piga Simu',
    orderWhatsApp: 'Agiza kupitia WhatsApp',

    communityTitle: 'Mtandao wa Wakulima wa Pamoja',
    communitySubtitle: 'Ripoti za wakulima zilizothibitishwa na AI na maafisa ugani.',
    reportObservation: 'Toa Ripoti ya Shambani',
    aiVerified: 'Imethibitishwa na AI',
    helpfulConfirm: 'Thibitisha / Ina Manufaa',
    submitFieldReportTitle: 'Wasilisha Dalili za Ugonjwa Shambani',
    farmerName: 'Jina la Mkulima',
    villageName: 'Kijiji / Eneo',
    cropField: 'Zao Lililoathirika',
    suspectedIssue: 'Ugonjwa Unaoshukiwa / Dalili',
    fieldNotes: 'Maelezo na Hatua Zilizochukuliwa',
    publishAlert: 'Tangaza Tahadhari',

    calculatorTitle: 'Kikokotoo cha Mavuno na Hasara ya Fedha',
    calculatorSubtitle: 'Piga hesabu ya hasara inayoweza kuepukika na faida ya kutibu mazao mapema.',
    farmSize: 'Ukubwa wa Shamba (Hekari)',
    expectedYield: 'Mavuno ya Kawaida (Tani/Hekari)',
    marketPrice: 'Bei ya Soko (Fedha / Tani)',
    lossPercent: 'Kiwango cha Hatari ya Hasara (%)',
    treatmentCostLabel: 'Gharama ya Jumla ya Matibabu',
    potentialLossValue: 'Thamani ya Mazao Yanayoweza Kupotea',
    netSavedValue: 'Thamani Halisi Iliyookolewa',
    roiMultiplier: 'Faida ya Hatua Zilizochukuliwa (ROI)',

    agronomistTitle: 'Afisa Ugani wa AI',
    agronomistSubtitle: 'Uliza maswali kwa Kiswahili kuhusu vipimo vya dawa, kutengeneza dawa za asili au rutuba ya udongo.',
    agronomistPlaceholder: 'Uliza, mfano: Jinsi ya kutengeneza dawa ya mwarobaini kwa ugonjwa wa mpunga?',
    sendQuestion: 'Tuma Swali',
    suggestedQuestions: 'Maswali Yanayoulizwa Sana:'
  },
  ta: {
    appTitle: 'அக்ரிஷீல்ட்',
    appSubtitle: 'பயிர் நோய் முன்கூட்டிய எச்சரிக்கை & AI தீர்வுகள்',
    liveWarning: 'நேரடி எச்சரிக்கை',
    liveWarningText: 'அதிக ஈரப்பதம் காரணமாக உள்ளூர் விவசாயப் பகுதிகளில் பூஞ்சை நோய் பரவும் அபாயம்.',
    viewRadar: 'ரேடாரைப் பார்க்கவும் →',
    selectBasin: 'விவசாயப் பகுதியைத் தேர்ந்தெடுக்கவும்',
    spokenWrittenLanguage: 'பேச்சு மற்றும் எழுத்து மொழி',
    scanLeafBtn: 'இலையை ஸ்கேன் செய்க',
    scanLeafShort: 'ஸ்கேன்',

    tabDiagnostic: 'AI நோய் கண்டறிதல்',
    tabRadar: 'நோய் ரேடார்',
    tabCommunity: 'விவசாயிகள் எச்சரிக்கை',
    tabDealers: 'மருந்து & உரக்கடைகள்',
    tabAgronomist: 'விவசாய நிபுணரிடம் கேளுங்கள்',

    diagConfidence: 'துல்லியத்தன்மை',
    expectedLoss: 'எதிர்பார்க்கப்படும் இழப்பு',
    expectedLossWithoutTreatment: 'சிகிச்சை அளிக்கப்படாவிட்டால் மகசூல் இழப்பு',
    spokenAdvisoryTitle: 'விவசாயிகளுக்கான ஆடியோ வழிகாட்டல் (Voice Guide)',
    playVoice: 'குரலைக் கேட்கவும்',
    stopVoice: 'ஆடியோவை நிறுத்தவும்',
    observedSymptoms: 'களத்தில் காணப்பட்ட முக்கிய அறிகுறிகள்:',
    localVernacular: 'உள்ளூர் பெயர்',
    pathogen: 'நோய் காரணி',

    tabOrganicSolutions: 'இயற்கை & குறைந்த செலவு தீர்வுகள்',
    tabChemicalProtocol: 'இரசாயன மருந்துகள்',
    tabPrevention: 'முன்னெச்சரிக்கை முறைகள்',
    organicHeading: 'சுற்றுச்சூழல் நட்பு & பூஜ்ஜிய செலவு தீர்வுகள்',
    organicSubheading: 'நச்சு எச்சங்கள் இல்லாமல் எளிதில் கிடைக்கக்கூடிய உள்ளூர் பொருட்களைக் கொண்டு தயாரிக்கப்படுகிறது.',
    recommendedFirst: 'முதலில் பரிந்துரைக்கப்படுகிறது',
    prepTime: 'தயாரிப்பு நேரம்',
    ingredients: 'தேவையான பொருட்கள்',
    zeroCost: 'செலவு இல்லை',
    lowCost: 'குறைந்த செலவு',
    mediumCost: 'நடுத்தர செலவு',

    chemicalHeading: 'அங்கீகரிக்கப்பட்ட வணிக இரசாயன நெறிமுறை',
    chemicalSubheading: 'பொருளாதார இழப்பு வரம்பைத் தாண்டும் போது மட்டுமே பயன்படுத்தவும். அறுவடைக்கு முந்தைய இடைவெளியைப் பின்பற்றவும்.',
    activeIngredient: 'செயலில் உள்ள மூலப்பொருள்',
    dosage: 'அளவு',
    phiHarvest: 'அறுவடைக்கு முந்தைய இடைவெளி',
    tradeBrands: 'பிரபலமான பிராண்டுகள்',
    safetyPrecautions: 'பாதுகாப்பு & தெளிக்கும் முறைகள்',
    curativeKnockdown: 'நோய் தீர்க்கும் சிகிச்சை',

    preventionHeading: 'நீண்ட கால பண்ணை மேலாண்மை',
    preventionSubheading: 'அடுத்தடுத்த பயிர் சுழற்சிகளில் நோய் மீண்டும் பரவாமல் தடுக்கும் சிறந்த முறைகள்.',

    broadcastOutbreak: 'நோய் பரவல் எச்சரிக்கையை அனுப்பவும்',
    broadcastDesc: '15 கிமீ சுற்றளவில் உள்ள 40+ அண்டை விவசாயிகளுக்கு முன்கூட்டியே எச்சரிக்கை அனுப்பவும்.',
    broadcastBtn: 'சமூகத்திற்கு எச்சரிக்கவும்',
    broadcastedBtn: 'எச்சரிக்கை அனுப்பப்பட்டது!',
    nearestDealers: 'அருகிலுள்ள மருந்துக்கடைகள்',
    dealersDesc: 'உள்ளூர் கடைகளில் உள்ள இயற்கை மருந்துகள், விதைகள் மற்றும் விலைகளைச் சரிபார்க்கவும்.',
    viewSuppliesBtn: 'இருப்புகளைப் பார்க்கவும்',
    askAgronomistCard: 'AI வேளாண் நிபுணரிடம் கேளுங்கள்',
    askAgronomistDesc: 'மருந்து தெளிக்கும் நேரம், தொட்டி கலவை அல்லது மண் சிகிச்சை குறித்து உடனடி ஆலோசனை பெறுங்கள்.',
    askAgronomistBtn: 'கேள்வி கேளுங்கள்',

    scanModalTitle: 'AI பயிர் நோய் கண்டறிதல்',
    scanModalSubtitle: 'உடனடி சிகிச்சை பெற இலை, தண்டு அல்லது காயை ஸ்கேன் செய்யவும்',
    multimodalBadge: 'மல்டிமாடல்',
    selectTargetCrop: 'பயிரைத் தேர்ந்தெடுக்கவும்',
    cropImageInput: 'பயிர் புகைப்படம்',
    tabPresets: 'மாதிரி இலைகள்',
    tabLiveCamera: 'நேரடி கேமரா',
    tabUpload: 'புகைப்படம் பதிவேற்றுக',
    selectPresetHint: 'உடனடி தீர்வை சோதிக்க கீழே உள்ள மாதிரிகளில் ஒன்றைத் தேர்ந்தெடுக்கவும்:',
    centerLeafHint: 'பாதிக்கப்பட்ட இலையை மையப்படுத்தவும்',
    snapPhoto: 'படம் எடுக்கவும்',
    uploadCropPhoto: 'புகைப்படத்தை பதிவேற்ற கிளிக் செய்யவும்',
    uploadCropSubtext: 'கேமரா அல்லது கேலரியில் இருந்து PNG, JPG, JPEG ஆதரிக்கப்படுகிறது',
    changePhoto: 'படத்தை மாற்றவும்',
    removePhoto: 'நீக்கவும்',
    describeSymptoms: 'கள அறிகுறிகளை விவரிக்கவும் (விருப்பத்தேர்வு)',
    describeSymptomsPlaceholder: 'எ.கா: 3 நாட்கள் மழைக்கு பிறகு நெல் இலைகளில் புள்ளிகள் தோன்றின...',
    quickTags: 'விரைவு அறிகுறிகள்:',
    cancel: 'ரத்து செய்',
    diagnosingPathogen: 'நோய் பகுப்பாய்வு செய்யப்படுகிறது...',
    runMultimodalDiag: 'நோயைக் கண்டறியவும்',

    radarTitle: 'நோய் பரவல் ரேடார்',
    radarSubtitle: '35 கிமீ சுற்றளவில் ஈரப்பதம், காற்றின் திசை மற்றும் நோய் பரவலை நேரலையாகக் கண்காணிக்கவும்.',
    reportOutbreakBtn: 'நோயைப் புகாரளிக்கவும்',
    fungalRisk: 'பூஞ்சை அபாயம்',
    bacterialRisk: 'பாக்டீரியா அபாயம்',
    pestRisk: 'பூச்சி அபாயம்',
    bestSprayingWindow: 'மருந்து தெளிக்க உகந்த நேரம்',
    filterAllCrops: 'அனைத்து பயிர்கள்',
    filterAllSeverities: 'அனைத்து தீவிர நிலைகள்',
    activeOutbreaksTitle: 'உள்ளூர் நோய் பரவல் பகுதிகள்',
    sendWhatsAppAlert: 'வாட்ஸ்அப் எச்சரிக்கை அனுப்புக',
    farmsAffected: 'பண்ணைகள் தெரிவித்துள்ளன',
    threatRadius: 'அபாய சுற்றளவு',
    hectares: 'ஹெக்டேர் பாதிப்பு',

    marketplaceTitle: 'விவசாய சந்தை & பொருட்கள்',
    marketplaceSubtitle: 'சான்றளிக்கப்பட்ட இயற்கை மருந்துகள், உரங்கள் மற்றும் பூச்சிக்கொல்லிகளைப் பெறுங்கள்.',
    filterAll: 'அனைத்துப் பொருட்கள்',
    filterOrganic: 'இயற்கை & உயிரியல்',
    filterCurative: 'இரசாயன மருந்துகள்',
    inStock: 'இருப்பில் உள்ளது',
    verifiedDealer: 'சான்றளிக்கப்பட்ட கடை',
    contactDealer: 'அழைக்கவும்',
    orderWhatsApp: 'வாட்ஸ்அப்பில் ஆர்டர் செய்யவும்',

    communityTitle: 'விவசாயிகள் கூட்டு எச்சரிக்கை நெட்வொர்க்',
    communitySubtitle: 'AI மற்றும் வேளாண் அதிகாரிகளால் சரிபார்க்கப்பட்ட விவசாயிகளின் கள அறிக்கைகள்.',
    reportObservation: 'அறிகுறியைப் புகாரளிக்கவும்',
    aiVerified: 'AI ஆல் சரிபார்க்கப்பட்டது',
    helpfulConfirm: 'உறுதிப்படுத்து / பயனுள்ளது',
    submitFieldReportTitle: 'பயிர் நோய் விவரங்களைப் பதிவு செய்யவும்',
    farmerName: 'விவசாயியின் பெயர்',
    villageName: 'கிராமம் / பகுதி',
    cropField: 'பாதிக்கப்பட்ட பயிர்',
    suspectedIssue: 'சந்தேகிக்கப்படும் நோய் / அறிகுறிகள்',
    fieldNotes: 'எடுக்கப்பட்ட நடவடிக்கைகள்',
    publishAlert: 'எச்சரிக்கையை வெளியிடு',

    calculatorTitle: 'மகசூல் & நிதி இழப்பு கால்குலேட்டர்',
    calculatorSubtitle: 'சாத்தியமான இழப்பு மற்றும் சரியான நேரத்தில் சிகிச்சை செய்வதன் மூலம் கிடைக்கும் லாபத்தைக் கணக்கிடுங்கள்.',
    farmSize: 'பண்ணை பரப்பளவு (ஹெக்டேர்)',
    expectedYield: 'எதிர்பார்க்கப்படும் மகசூல் (டன்/ஹெக்டேர்)',
    marketPrice: 'சந்தை விலை (ரூபாய்/டன்)',
    lossPercent: 'சிகிச்சை அளிக்கப்படாவிட்டால் இழப்பு (%)',
    treatmentCostLabel: 'மொத்த சிகிச்சை செலவு (ரூபாய்)',
    potentialLossValue: 'சாத்தியமான மகசூல் இழப்பு மதிப்பு',
    netSavedValue: 'காப்பாற்றப்பட்ட நிகர மதிப்பு',
    roiMultiplier: 'எதிர்பார்க்கப்படும் வருவாய் (ROI)',

    agronomistTitle: 'AI வேளாண் விரிவாக்க அதிகாரி',
    agronomistSubtitle: 'மருந்தின் அளவு, வேப்பங்கொட்டை கரைசல் தயாரிப்பு அல்லது மண் வளம் குறித்து உங்கள் மொழியிலேயே கேளுங்கள்.',
    agronomistPlaceholder: 'எ.கா: நெல் குலை நோய்க்கு வேப்பெண்ணெய் கரைசல் தயாரிப்பது எப்படி?',
    sendQuestion: 'கேள்வி அனுப்புக',
    suggestedQuestions: 'பரிந்துரைக்கப்பட்ட விவசாய கேள்விகள்:'
  },
  mr: {
    appTitle: 'अ‍ॅग्रीशील्ड',
    appSubtitle: 'पिक रोग पूर्वसूचना आणि AI उपाय',
    liveWarning: 'थेट चेतावणी',
    liveWarningText: 'बुरशीजन्य रोगाची चेतावणी: जास्त आर्द्रतेमुळे स्थानिक भागात पिकांवर रोगाचा उच्च धोका.',
    viewRadar: 'रडार पहा →',
    selectBasin: 'कृषी क्षेत्र निवडा',
    spokenWrittenLanguage: 'बोलण्याची आणि लेखनाची भाषा',
    scanLeafBtn: 'पानाचे स्कॅन करा',
    scanLeafShort: 'स्कॅन',

    tabDiagnostic: 'AI निदान',
    tabRadar: 'रोग रडार',
    tabCommunity: 'शेतकरी अलर्ट',
    tabDealers: 'कृषी सेवा केंद्र',
    tabAgronomist: 'कृषी तज्ज्ञांना विचारा',

    diagConfidence: 'निदान अचूकता',
    expectedLoss: 'अपेक्षित नुकसान',
    expectedLossWithoutTreatment: 'उपचार न केल्यास संभाव्य नुकसान',
    spokenAdvisoryTitle: 'शेतकऱ्यांसाठी ऑडिओ सल्ला (व्हॉईस गाईड)',
    playVoice: 'आवाज ऐका',
    stopVoice: 'ऑडिओ थांबवा',
    observedSymptoms: 'शेतात दिसलेली मुख्य लक्षणे:',
    localVernacular: 'स्थानिक नाव',
    pathogen: 'रोगकारक घटक',

    tabOrganicSolutions: 'सेंद्रिय व कमी खर्चाचे उपाय',
    tabChemicalProtocol: 'रासायनिक कीटकनाशक पद्धत',
    tabPrevention: 'शेतातील प्रतिबंधात्मक उपाय',
    organicHeading: 'पर्यावरणपूरक आणि शून्य खर्च घरगुती उपाय',
    organicSubheading: 'स्थानिक घटकांपासून तयार केलेले, कोणतेही विषारी अवशेष नसलेले उपाय.',
    recommendedFirst: 'प्रथम शिफारस केलेले',
    prepTime: 'तयारीचा वेळ',
    ingredients: 'लागणारे साहित्य',
    zeroCost: 'शून्य खर्च',
    lowCost: 'कमी खर्च',
    mediumCost: 'मध्यम खर्च',

    chemicalHeading: 'मान्यताप्राप्त रासायनिक औषधोपचार',
    chemicalSubheading: 'रोगाची तीव्रता आर्थिक नुकसान मर्यादेपेक्षा जास्त असेल तरच वापरा. काढणीपूर्वीचा कालावधी पाळा.',
    activeIngredient: 'सक्रिय घटक',
    dosage: 'प्रमाण',
    phiHarvest: 'काढणीपूर्वीचा कालावधी (PHI)',
    tradeBrands: 'बाजारातील लोकप्रिय नावे',
    safetyPrecautions: 'फवारणी आणि सुरक्षेची काळजी',
    curativeKnockdown: 'रोग निवारक उपाय',

    preventionHeading: 'दीर्घकालीन कृषी व्यवस्थापन',
    preventionSubheading: 'पुढील हंगामात रोगाचा प्रसार रोखण्यासाठी सर्वोत्तम पद्धती.',

    broadcastOutbreak: 'रोग प्रसाराची चेतावणी द्या',
    broadcastDesc: '15 किमी परिसरातील 40+ शेतकरी बांधवांना वेळेवर फवारणीसाठी सावध करा.',
    broadcastBtn: 'समुदायाला माहिती पाठवा',
    broadcastedBtn: 'माहिती पाठवली गेली!',
    nearestDealers: 'जवळची कृषी सेवा केंद्रे',
    dealersDesc: 'स्थानिक दुकानांमध्ये उपलब्ध जैविक बुरशीनाशके आणि औषधांचे दर तपासा.',
    viewSuppliesBtn: 'उपलब्ध औषधे पहा',
    askAgronomistCard: 'AI कृषी तज्ज्ञांना विचारा',
    askAgronomistDesc: 'फवारणीची वेळ, औषधांचे मिश्रण किंवा माती उपचारावर तात्काळ सल्ला मिळवा.',
    askAgronomistBtn: 'सल्ला घ्या',

    scanModalTitle: 'AI पीक रोग निदान',
    scanModalSubtitle: 'पाने, खोड किंवा फळांचे स्कॅन करा आणि लगेच उपचार मिळवा',
    multimodalBadge: 'मल्टीमॉडल',
    selectTargetCrop: 'पीक निवडा',
    cropImageInput: 'पिकाचा फोटो',
    tabPresets: 'शेतातील नमुने',
    tabLiveCamera: 'थेट कॅमेरा',
    tabUpload: 'फोटो अपलोड करा',
    selectPresetHint: 'त्वरित निदान तपासण्यासाठी खालील नमुना निवडा:',
    centerLeafHint: 'बाधित पान किंवा फळ मध्यभागी ठेवा',
    snapPhoto: 'फोटो काढा',
    uploadCropPhoto: 'पानाचा फोटो अपलोड करण्यासाठी क्लिक करा',
    uploadCropSubtext: 'कॅमेरा किंवा गॅलरीमधून PNG, JPG, JPEG समर्थित',
    changePhoto: 'फोटो बदला',
    removePhoto: 'काढून टाका',
    describeSymptoms: 'शेतातील लक्षणे सांगा (ऐच्छिक)',
    describeSymptomsPlaceholder: 'उदा. सलग 3 दिवस पावसानंतर भाताच्या पानांवर ठिपके दिसले...',
    quickTags: 'झटपट लक्षणे:',
    cancel: 'रद्द करा',
    diagnosingPathogen: 'रोगाचे विश्लेषण सुरू आहे...',
    runMultimodalDiag: 'निदान सुरू करा',

    radarTitle: 'रोग बीजाणू प्रसार रडार',
    radarSubtitle: '35 किमी परिसरात आर्द्रता, हवेची दिशा आणि रोग प्रसाराचे थेट निरीक्षण.',
    reportOutbreakBtn: 'रोगाची नोंद करा',
    fungalRisk: 'बुरशीचा धोका',
    bacterialRisk: 'जिवाणूचा धोका',
    pestRisk: 'किडींचा धोका',
    bestSprayingWindow: 'फवारणीची सर्वोत्तम वेळ',
    filterAllCrops: 'सर्व पिके',
    filterAllSeverities: 'सर्व तीव्रता स्तर',
    activeOutbreaksTitle: 'सक्रिय स्थानिक रोग प्रादुर्भाव',
    sendWhatsAppAlert: 'व्हॉट्सअ‍ॅप अलर्ट पाठवा',
    farmsAffected: 'शेतकऱ्यांनी नोंदवले',
    threatRadius: 'धोका क्षेत्र',
    hectares: 'हेक्टर बाधित',

    marketplaceTitle: 'कृषी साहित्य आणि बाजारपेठ',
    marketplaceSubtitle: 'प्रमाणित जैविक उत्पादने आणि रासायनिक औषधे मिळवा.',
    filterAll: 'सर्व साहित्य',
    filterOrganic: 'सेंद्रिय व जैविक',
    filterCurative: 'रासायनिक औषधे',
    inStock: 'उपलब्ध आहे',
    verifiedDealer: 'प्रमाणित विक्रेता',
    contactDealer: 'कॉल करा',
    orderWhatsApp: 'व्हॉट्सअ‍ॅपवर ऑर्डर करा',

    communityTitle: 'शेतकरी सहकारी नेटवर्क',
    communitySubtitle: 'AI आणि कृषी अधिकाऱ्यांनी पडताळणी केलेले प्रत्यक्ष शेतकरी अहवाल.',
    reportObservation: 'लक्षणे नोंदवा',
    aiVerified: 'AI द्वारे पडताळलेले',
    helpfulConfirm: 'पुष्टी करा / उपयुक्त',
    submitFieldReportTitle: 'शेतातील रोगाची माहिती द्या',
    farmerName: 'शेतकऱ्याचे नाव',
    villageName: 'गाव / परिसर',
    cropField: 'बाधित पीक',
    suspectedIssue: 'संभाव्य रोग / लक्षणे',
    fieldNotes: 'केलेले उपाय व निरीक्षण',
    publishAlert: 'अलर्ट प्रसिद्ध करा',

    calculatorTitle: 'उत्पादन आणि आर्थिक नुकसान कॅल्क्युलेटर',
    calculatorSubtitle: 'संभाव्य नुकसान आणि वेळीच केलेल्या उपचारांमुळे वाचलेल्या पिकाचे मूल्यांकन करा.',
    farmSize: 'शेताचे क्षेत्रफळ (हेक्टर)',
    expectedYield: 'अपेक्षित सरासरी उत्पादन (टन/हेक्टर)',
    marketPrice: 'बाजारभाव (रुपये/टन)',
    lossPercent: 'उपचार न केल्यास नुकसानीचा धोका (%)',
    treatmentCostLabel: 'एकूण औषध व उपचार खर्च (रुपये)',
    potentialLossValue: 'संभाव्य पिकाचे नुकसान मूल्य',
    netSavedValue: 'वाचवलेले निव्वळ पीक मूल्य',
    roiMultiplier: 'अपेक्षित परतावा (ROI)',

    agronomistTitle: 'AI कृषी विस्तार अधिकारी',
    agronomistSubtitle: 'औषधांचे प्रमाण, निंबोळी अर्क तयार करणे किंवा माती सुपीकतेवर आपल्या भाषेत प्रश्न विचारा.',
    agronomistPlaceholder: 'उदा. भातावरील करपा रोगासाठी निंबोळी अर्क कसा तयार करावा?',
    sendQuestion: 'प्रश्न पाठवा',
    suggestedQuestions: 'वारंवार विचारले जाणारे प्रश्न:'
  },
  vi: {
    appTitle: 'AgriShield',
    appSubtitle: 'Cảnh Báo Sớm Bệnh Cây Trồng & Trợ Lý AI Nông Nghiệp',
    liveWarning: 'Cảnh Báo Trực Tiếp',
    liveWarningText: 'Cảnh báo bào tử nấm: Nguy cơ bùng phát dịch bệnh cao tại các vùng lúa do độ ẩm không khí vượt 85%.',
    viewRadar: 'Xem Radar →',
    selectBasin: 'Chọn Vùng Nông Nghiệp',
    spokenWrittenLanguage: 'Ngôn Ngữ Nói & Văn Bản',
    scanLeafBtn: 'Quét Lá Cây',
    scanLeafShort: 'Quét',

    tabDiagnostic: 'Chẩn Đoán AI',
    tabRadar: 'Radar Dịch Bệnh',
    tabCommunity: 'Cảnh Báo Cộng Đồng',
    tabDealers: 'Đại Lý Vật Tư',
    tabAgronomist: 'Hỏi Chuyên Gia',

    diagConfidence: 'Độ Chính Xác Chẩn Đoán',
    expectedLoss: 'Ước Tính Thiệt Hại',
    expectedLossWithoutTreatment: 'Thiệt Hại Năng Suất Nếu Không Điều Trị',
    spokenAdvisoryTitle: 'Hướng Dẫn Bằng Giọng Nói Cho Nông Dân',
    playVoice: 'Nghe Giọng Nói',
    stopVoice: 'Dừng Âm Thanh',
    observedSymptoms: 'Triệu Chứng Đồng Ruộng Quan Sát Được:',
    localVernacular: 'Tên Thường Gọi',
    pathogen: 'Tác Nhân Gây Bệnh',

    tabOrganicSolutions: 'Giải Pháp Sinh Học & Chi Phí Thấp',
    tabChemicalProtocol: 'Phác Đồ Hóa Học Đặc Trị',
    tabPrevention: 'Phòng Ngừa Đồng Ruộng',
    organicHeading: 'Bài Thuốc Sinh Học Thân Thiện & Tiết Kiệm',
    organicSubheading: 'Bào chế từ nguyên liệu địa phương dễ tìm, không để lại dư lượng độc hại.',
    recommendedFirst: 'Khuyến Khích Áp Dụng Trước',
    prepTime: 'Thời Gian Chuẩn Bị',
    ingredients: 'Thành Phần Cần Có',
    zeroCost: 'Miễn Phí',
    lowCost: 'Chi Phí Thấp',
    mediumCost: 'Chi Phí Vừa',

    chemicalHeading: 'Phác Đồ Thuốc Bảo Vệ Thực Vật Được Cấp Phép',
    chemicalSubheading: 'Chỉ sử dụng khi mật độ vượt ngưỡng gây hại kinh tế. Tuân thủ thời gian cách ly.',
    activeIngredient: 'Hoạt Chất Đặc Trị',
    dosage: 'Liều Lượng Pha',
    phiHarvest: 'Thời Gian Cách Ly Thu Hoạch (PHI)',
    tradeBrands: 'Tên Thương Mại Phổ Biến',
    safetyPrecautions: 'Lưu Ý An Toàn & Kỹ Thuật Phun',
    curativeKnockdown: 'Thuốc Đặc Trị',

    preventionHeading: 'Quản Lý Đồng Ruộng Bền Vững',
    preventionSubheading: 'Các biện pháp canh tác giúp hạn chế tích tụ bào tử cho vụ mùa tiếp theo.',

    broadcastOutbreak: 'Phát Cảnh Báo Dịch Bệnh',
    broadcastDesc: 'Thông báo cho hơn 40 hộ nông dân lân cận trong bán kính 15km để chủ động phòng ngừa.',
    broadcastBtn: 'Phát Cảnh Báo Cho Cộng Đồng',
    broadcastedBtn: 'Đã Phát Cảnh Báo!',
    nearestDealers: 'Đại Lý Thuốc BVTV Gần Nhất',
    dealersDesc: 'Xem tồn kho thuốc sinh học, giống kháng bệnh và giá cả tại các đại lý lân cận.',
    viewSuppliesBtn: 'Xem Vật Tư Có Sẵn',
    askAgronomistCard: 'Hỏi Kỹ Sư Nông Nghiệp AI',
    askAgronomistDesc: 'Hỏi nhanh về thời điểm phun, cách phối trộn thuốc hoặc xử lý đất.',
    askAgronomistBtn: 'Đặt Câu Hỏi',

    scanModalTitle: 'Chẩn Đoán Bệnh Cây Trồng Bằng AI',
    scanModalSubtitle: 'Quét lá, thân hoặc trái để nhận ngay phác đồ điều trị',
    multimodalBadge: 'Đa Phương Thức',
    selectTargetCrop: 'Chọn Cây Trồng',
    cropImageInput: 'Ảnh Chụp Cây Trồng',
    tabPresets: 'Mẫu Đồng Ruộng',
    tabLiveCamera: 'Camera Trực Tiếp',
    tabUpload: 'Tải Ảnh Lên',
    selectPresetHint: 'Chọn một mẫu bên dưới để thử chẩn đoán và nhận phác đồ sinh học ngay:',
    centerLeafHint: 'Đặt lá hoặc trái bị bệnh vào giữa khung hình',
    snapPhoto: 'Chụp Ảnh',
    uploadCropPhoto: 'Nhấp để tải ảnh lá cây bị bệnh',
    uploadCropSubtext: 'Hỗ trợ PNG, JPG, JPEG từ camera hoặc bộ sưu tập',
    changePhoto: 'Đổi Ảnh',
    removePhoto: 'Xóa',
    describeSymptoms: 'Mô Tả Triệu Chứng (Không bắt buộc)',
    describeSymptomsPlaceholder: 'Ví dụ: Xuất hiện vết hình thoi trên 15% lá lúa sau 3 ngày mưa kéo dài...',
    quickTags: 'Triệu Chứng Nhanh:',
    cancel: 'Hủy',
    diagnosingPathogen: 'Đang Phân Tích Bệnh...',
    runMultimodalDiag: 'Bắt Đầu Chẩn Đoán AI',

    radarTitle: 'Radar Lan Truyền Bào Tử & Dịch Hại',
    radarSubtitle: 'Theo dõi độ ẩm, hướng gió và các ổ dịch trong bán kính 35km.',
    reportOutbreakBtn: 'Báo Cáo Ổ Dịch',
    fungalRisk: 'Nguy Cơ Nấm Bệnh',
    bacterialRisk: 'Nguy Cơ Vi Khuẩn',
    pestRisk: 'Nguy Cơ Sâu Hại',
    bestSprayingWindow: 'Khung Giờ Phun Thuốc Tốt Nhất',
    filterAllCrops: 'Tất Cả Cây Trồng',
    filterAllSeverities: 'Mọi Mức Độ',
    activeOutbreaksTitle: 'Các Ổ Dịch Đang Hoạt Động Gần Đây',
    sendWhatsAppAlert: 'Gửi Cảnh Báo Zalo / Tin Nhắn',
    farmsAffected: 'ruộng đã báo cáo',
    threatRadius: 'bán kính lây lan',
    hectares: 'hecta bị ảnh hưởng',

    marketplaceTitle: 'Thị Trường Vật Tư Nông Nghiệp',
    marketplaceSubtitle: 'Tìm chế phẩm sinh học, thuốc BVTV và phân bón từ các đại lý uy tín.',
    filterAll: 'Tất Cả Vật Tư',
    filterOrganic: 'Sinh Học & Hữu Cơ',
    filterCurative: 'Thuốc Hóa Học Đặc Trị',
    inStock: 'Còn Hàng',
    verifiedDealer: 'Đại Lý Uy Tín',
    contactDealer: 'Gọi Đại Lý',
    orderWhatsApp: 'Đặt Mua Ngay',

    communityTitle: 'Mạng Lưới Cảnh Báo Hợp Tác Xã',
    communitySubtitle: 'Báo cáo thực tế từ nông dân được xác thực bởi AI bệnh cây và cán bộ khuyến nông.',
    reportObservation: 'Báo Cáo Quan Sát',
    aiVerified: 'Được AI Xác Nhận',
    helpfulConfirm: 'Xác Nhận / Hữu Ích',
    submitFieldReportTitle: 'Gửi Báo Cáo Dịch Bệnh Đồng Ruộng',
    farmerName: 'Tên Nông Dân',
    villageName: 'Xã / Huyện / Tỉnh',
    cropField: 'Loại Cây Bị Bệnh',
    suspectedIssue: 'Nghi Vấn Bệnh / Triệu Chứng',
    fieldNotes: 'Ghi Chú & Biện Pháp Đã Làm',
    publishAlert: 'Đăng Cảnh Báo',

    calculatorTitle: 'Công Cụ Tính Toán Năng Suất & Thiệt Hại',
    calculatorSubtitle: 'Tính toán tổn thất tiềm tàng và giá trị kinh tế bảo vệ được nhờ xử lý kịp thời.',
    farmSize: 'Diện Tích Canh Tác (Hecta)',
    expectedYield: 'Năng Suất Kỳ Vọng (Tấn/Ha)',
    marketPrice: 'Giá Bán Nông Sản (VNĐ/Tấn)',
    lossPercent: 'Nguy Cơ Mất Mùa Nếu Bỏ Bê (%)',
    treatmentCostLabel: 'Tổng Chi Phí Xử Lý Thuốc (VNĐ)',
    potentialLossValue: 'Giá Trị Thiệt Hại Dự Tính',
    netSavedValue: 'Giá Trị Mùa Vụ Được Bảo Vệ',
    roiMultiplier: 'Tỷ Suất Sinh Lời Của Biện Pháp (ROI)',

    agronomistTitle: 'Kỹ Sư Nông Nghiệp AI',
    agronomistSubtitle: 'Hỏi bằng Tiếng Việt về liều lượng thuốc, cách ngâm ủ chế phẩm sinh học hoặc chăm sóc cây trồng.',
    agronomistPlaceholder: 'Ví dụ: Làm sao để ngâm ủ dịch lá neem trị bệnh đạo ôn lúa?',
    sendQuestion: 'Gửi Câu Hỏi',
    suggestedQuestions: 'Câu Hỏi Phổ Biến:'
  },
  fr: {
    appTitle: 'AgriShield',
    appSubtitle: 'Alerte Précoce aux Maladies des Plantes & IA Agricole',
    liveWarning: 'Alerte Directe',
    liveWarningText: 'Alerte propagation de spores: Risque fongique élevé dans les bassins agricoles en raison de la forte humidité.',
    viewRadar: 'Voir le Radar →',
    selectBasin: 'Choisir le Bassin Agricole',
    spokenWrittenLanguage: 'Langue Parlée & Écrite',
    scanLeafBtn: 'Scanner une Feuille',
    scanLeafShort: 'Scanner',

    tabDiagnostic: 'Diagnostic IA',
    tabRadar: 'Radar d’Épidémies',
    tabCommunity: 'Alertes Paysannes',
    tabDealers: 'Magasins Agricoles',
    tabAgronomist: 'Consulter l’Agronome',

    diagConfidence: 'Précision du Diagnostic',
    expectedLoss: 'Perte Estimée',
    expectedLossWithoutTreatment: 'Perte de Rendement sans Traitement',
    spokenAdvisoryTitle: 'Guide Vocal pour l’Agriculteur (Audio)',
    playVoice: 'Écouter la Voix',
    stopVoice: 'Arrêter l’Audio',
    observedSymptoms: 'Symptômes Observés sur le Terrain:',
    localVernacular: 'Nom Vernaculaire / Local',
    pathogen: 'Pathogène',

    tabOrganicSolutions: 'Solutions Bio & Économiques',
    tabChemicalProtocol: 'Protocole Agrochimique Ciblé',
    tabPrevention: 'Prévention au Champ',
    organicHeading: 'Remèdes Naturels & Gratuits',
    organicSubheading: 'Préparés avec des matériaux locaux accessibles sans résidus chimiques toxiques.',
    recommendedFirst: 'Recommandé en Premier',
    prepTime: 'Temps de Préparation',
    ingredients: 'Ingrédients Requis',
    zeroCost: 'Gratuit',
    lowCost: 'Faible Coût',
    mediumCost: 'Coût Moyen',

    chemicalHeading: 'Protocole Chimique Homologué',
    chemicalSubheading: 'À utiliser lorsque la pression dépasse le seuil de nuisibilité économique. Respecter le délai avant récolte.',
    activeIngredient: 'Matière Active',
    dosage: 'Dosage',
    phiHarvest: 'Délai Avant Récolte (DAR)',
    tradeBrands: 'Noms Commerciaux Courants',
    safetyPrecautions: 'Précautions de Sécurité & Pulvérisation',
    curativeKnockdown: 'Action Curative',

    preventionHeading: 'Gestion Agronomique à Long Terme',
    preventionSubheading: 'Pratiques culturales pour éviter la réinfection lors des prochains cycles.',

    broadcastOutbreak: 'Diffuser une Alerte d’Épidémie',
    broadcastDesc: 'Prévenez plus de 40 exploitations voisines dans un rayon de 15 km pour appliquer un traitement préventif.',
    broadcastBtn: 'Diffuser à la Communauté',
    broadcastedBtn: 'Alerte Diffusée !',
    nearestDealers: 'Fournisseurs Agricoles Proches',
    dealersDesc: 'Vérifiez la disponibilité des bio-fongicides et semences dans les magasins locaux.',
    viewSuppliesBtn: 'Voir les Produits Disponibles',
    askAgronomistCard: 'Consulter l’Agronome IA',
    askAgronomistDesc: 'Obtenez des réponses immédiates sur les doses, mélanges ou la santé des sols.',
    askAgronomistBtn: 'Poser une Question',

    scanModalTitle: 'Diagnostic IA des Maladies des Plantes',
    scanModalSubtitle: 'Scannez une feuille, tige ou fruit pour obtenir des remèdes adaptés',
    multimodalBadge: 'Multimodal',
    selectTargetCrop: 'Sélectionner la Culture',
    cropImageInput: 'Photo de la Plante',
    tabPresets: 'Échantillons de Terrain',
    tabLiveCamera: 'Caméra en Direct',
    tabUpload: 'Téléverser une Photo',
    selectPresetHint: 'Sélectionnez un échantillon ci-dessous pour tester le diagnostic instantané :',
    centerLeafHint: 'Centrez la feuille ou le fruit malade ici',
    snapPhoto: 'Prendre une Photo',
    uploadCropPhoto: 'Cliquez pour téléverser une photo de feuille',
    uploadCropSubtext: 'Prend en charge PNG, JPG, JPEG',
    changePhoto: 'Changer la Photo',
    removePhoto: 'Supprimer',
    describeSymptoms: 'Décrire les Symptômes (Optionnel)',
    describeSymptomsPlaceholder: 'Ex. : Taches en forme de losange apparues après 3 jours de pluie...',
    quickTags: 'Mots-clés Rapides :',
    cancel: 'Annuler',
    diagnosingPathogen: 'Analyse du Pathogène...',
    runMultimodalDiag: 'Lancer le Diagnostic IA',

    radarTitle: 'Radar de Propagation des Spores et Ravageurs',
    radarSubtitle: 'Suivi en temps réel de l’humidité, des vents et des foyers infectieux dans un rayon de 35 km.',
    reportOutbreakBtn: 'Signaler un Foyer',
    fungalRisk: 'Risque Fongique',
    bacterialRisk: 'Risque Bactérien',
    pestRisk: 'Risque Ravageurs',
    bestSprayingWindow: 'Créneau Optimal de Pulvérisation',
    filterAllCrops: 'Toutes Cultures',
    filterAllSeverities: 'Toutes Gravités',
    activeOutbreaksTitle: 'Foyers Infectieux Actifs',
    sendWhatsAppAlert: 'Alerter par WhatsApp',
    farmsAffected: 'exploitations touchées',
    threatRadius: 'rayon de menace',
    hectares: 'hectares affectés',

    marketplaceTitle: 'Marché d’Intrants Agricoles',
    marketplaceSubtitle: 'Trouvez des intrants biologiques et produits phytosanitaires chez des revendeurs vérifiés.',
    filterAll: 'Tous les Produits',
    filterOrganic: 'Biologique & Naturel',
    filterCurative: 'Traitements Chimiques',
    inStock: 'En Stock',
    verifiedDealer: 'Revendeur Vérifié',
    contactDealer: 'Appeler',
    orderWhatsApp: 'Commander par WhatsApp',

    communityTitle: 'Réseau d’Entraide Agricole',
    communitySubtitle: 'Signalements d’agriculteurs vérifiés par l’IA pathologique et les conseillers agricoles.',
    reportObservation: 'Signaler une Observation',
    aiVerified: 'Vérifié par IA',
    helpfulConfirm: 'Confirmer / Utile',
    submitFieldReportTitle: 'Soumettre une Observation de Terrain',
    farmerName: 'Nom de l’Agriculteur',
    villageName: 'Village / Région',
    cropField: 'Culture Touchée',
    suspectedIssue: 'Problème Suspecté / Symptômes',
    fieldNotes: 'Observations & Mesures Prises',
    publishAlert: 'Publier l’Alerte',

    calculatorTitle: 'Estimateur de Rendement et de Pertes',
    calculatorSubtitle: 'Évaluez les pertes potentielles et le retour sur investissement d’un traitement rapide.',
    farmSize: 'Superficie de l’Exploitation (Hectares)',
    expectedYield: 'Rendement Normal Attendu (Tonnes/Ha)',
    marketPrice: 'Prix du Marché (€ / Tonne)',
    lossPercent: 'Risque de Perte sans Traitement (%)',
    treatmentCostLabel: 'Coût Total du Traitement (€)',
    potentialLossValue: 'Valeur de Perte Potentielle',
    netSavedValue: 'Valeur Nette Préservée',
    roiMultiplier: 'Retour sur Investissement Estimé (ROI)',

    agronomistTitle: 'Conseiller Agronome IA',
    agronomistSubtitle: 'Posez vos questions en français sur les dosages, purins végétaux ou la fertilité des sols.',
    agronomistPlaceholder: 'Ex. : Comment préparer un extrait de neem contre la pyriculariose ?',
    sendQuestion: 'Envoyer la Question',
    suggestedQuestions: 'Questions Fréquentes :'
  },
  pt: {
    appTitle: 'AgriShield',
    appSubtitle: 'Alerta Precoce de Doenças em Cultivos & IA Agronômica',
    liveWarning: 'Alerta em Tempo Real',
    liveWarningText: 'Alerta de esporos fúngicos: Alto risco nas bacias agrícolas devido à umidade elevada.',
    viewRadar: 'Ver Radar →',
    selectBasin: 'Selecionar Região Agrícola',
    spokenWrittenLanguage: 'Idioma Falado e Escrito',
    scanLeafBtn: 'Escanear Folha',
    scanLeafShort: 'Escanear',

    tabDiagnostic: 'Diagnóstico IA',
    tabRadar: 'Radar de Focos',
    tabCommunity: 'Alertas Comunitários',
    tabDealers: 'Casas Agrícolas',
    tabAgronomist: 'Consultar Agrônomo',

    diagConfidence: 'Precisão do Diagnóstico',
    expectedLoss: 'Perda Estimada',
    expectedLossWithoutTreatment: 'Perda de Produtividade sem Tratamento',
    spokenAdvisoryTitle: 'Guia de Voz para o Agricultor (Áudio)',
    playVoice: 'Ouvir Instruções',
    stopVoice: 'Parar Áudio',
    observedSymptoms: 'Principais Sintomas Observados em Campo:',
    localVernacular: 'Nome Popular / Local',
    pathogen: 'Patógeno',

    tabOrganicSolutions: 'Soluções Orgânicas e Econômicas',
    tabChemicalProtocol: 'Protocolo Químico Direcionado',
    tabPrevention: 'Prevenção no Campo',
    organicHeading: 'Remédios Naturais e de Baixo Custo',
    organicSubheading: 'Preparados com ingredientes locais disponíveis, sem deixar resíduos tóxicos.',
    recommendedFirst: 'Recomendado Primeiro',
    prepTime: 'Tempo de Preparo',
    ingredients: 'Ingredientes Necessários',
    zeroCost: 'Custo Zero',
    lowCost: 'Baixo Custo',
    mediumCost: 'Custo Médio',

    chemicalHeading: 'Protocolo Químico Comercial Registrado',
    chemicalSubheading: 'Usar quando a infestação superar o nível de dano econômico. Respeitar o período de carência.',
    activeIngredient: 'Ingrediente Ativo',
    dosage: 'Dosagem',
    phiHarvest: 'Período de Carência (Dias até a Colheita)',
    tradeBrands: 'Marcas Comerciais Comuns',
    safetyPrecautions: 'Precauções de Segurança e Aplicação',
    curativeKnockdown: 'Ação Curativa',

    preventionHeading: 'Manejo Agronômico Preventivo',
    preventionSubheading: 'Práticas de manejo para evitar a reinfecção em safras futuras.',

    broadcastOutbreak: 'Transmitir Alerta de Foco',
    broadcastDesc: 'Avise mais de 40 propriedades vizinhas em um raio de 15 km para aplicação preventiva rápida.',
    broadcastBtn: 'Avisar Comunidade',
    broadcastedBtn: 'Alerta Enviado!',
    nearestDealers: 'Casas Agrícolas Próximas',
    dealersDesc: 'Consulte a disponibilidade de biofungicidas e defensivos em lojas agropecuárias locais.',
    viewSuppliesBtn: 'Ver Insumos Disponíveis',
    askAgronomistCard: 'Consultar Agrônomo IA',
    askAgronomistDesc: 'Tire dúvidas sobre dosagens, caldas ou preparo de solo instantaneamente.',
    askAgronomistBtn: 'Fazer Pergunta',

    scanModalTitle: 'Diagnóstico IA de Doenças em Plantas',
    scanModalSubtitle: 'Escaneie folhas, caules ou frutos para obter soluções imediatas',
    multimodalBadge: 'Multimodal',
    selectTargetCrop: 'Selecione a Cultura',
    cropImageInput: 'Foto da Planta',
    tabPresets: 'Amostras de Campo',
    tabLiveCamera: 'Câmera ao Vivo',
    tabUpload: 'Enviar Foto',
    selectPresetHint: 'Selecione uma amostra para testar o diagnóstico instantâneo:',
    centerLeafHint: 'Centralize a folha ou fruto afetado aqui',
    snapPhoto: 'Tirar Foto',
    uploadCropPhoto: 'Clique para enviar a foto da folha',
    uploadCropSubtext: 'Suporta arquivos PNG, JPG, JPEG',
    changePhoto: 'Trocar Foto',
    removePhoto: 'Remover',
    describeSymptoms: 'Descreva os Sintomas (Opcional)',
    describeSymptomsPlaceholder: 'Ex: Manchas em formato de losango surgiram após 3 dias de chuva contínua...',
    quickTags: 'Sintomas Rápidos:',
    cancel: 'Cancelar',
    diagnosingPathogen: 'Analisando Patógeno...',
    runMultimodalDiag: 'Iniciar Diagnóstico IA',

    radarTitle: 'Radar de Dispersão de Esporos e Pragas',
    radarSubtitle: 'Acompanhamento em tempo real de umidade, ventos e focos de doenças num raio de 35 km.',
    reportOutbreakBtn: 'Relatar Foco',
    fungalRisk: 'Risco Fúngico',
    bacterialRisk: 'Risco Bacteriano',
    pestRisk: 'Risco de Pragas',
    bestSprayingWindow: 'Janela Ideal de Pulverização',
    filterAllCrops: 'Todas as Culturas',
    filterAllSeverities: 'Todas as Gravidades',
    activeOutbreaksTitle: 'Focos de Infecção Ativos',
    sendWhatsAppAlert: 'Enviar Alerta por WhatsApp',
    farmsAffected: 'fazendas reportando',
    threatRadius: 'raio de ameaça',
    hectares: 'hectares afetados',

    marketplaceTitle: 'Mercado de Insumos Agropecuários',
    marketplaceSubtitle: 'Encontre bioinsumos certificados, defensivos e sementes em revendas confiáveis.',
    filterAll: 'Todos os Insumos',
    filterOrganic: 'Biológicos e Orgânicos',
    filterCurative: 'Defensivos Químicos',
    inStock: 'Em Estoque',
    verifiedDealer: 'Revenda Verificada',
    contactDealer: 'Ligar',
    orderWhatsApp: 'Pedir no WhatsApp',

    communityTitle: 'Rede Cooperativa de Alertas',
    communitySubtitle: 'Relatos de agricultores verificados por IA de fitopatologia e extensionistas rurais.',
    reportObservation: 'Relatar Observação',
    aiVerified: 'Verificado por IA',
    helpfulConfirm: 'Confirmar / Útil',
    submitFieldReportTitle: 'Enviar Observação de Campo',
    farmerName: 'Nome do Produtor',
    villageName: 'Comunidade / Município',
    cropField: 'Cultura Acometida',
    suspectedIssue: 'Suspeita / Sintomas',
    fieldNotes: 'Anotações de Campo e Ações',
    publishAlert: 'Publicar Alerta',

    calculatorTitle: 'Calculadora de Produtividade e Prejuízo',
    calculatorSubtitle: 'Calcule as perdas potenciais e o retorno financeiro de uma intervenção no momento certo.',
    farmSize: 'Área da Lavoura (Hectares)',
    expectedYield: 'Produtividade Esperada (Toneladas/Ha)',
    marketPrice: 'Preço de Venda (R$ / Tonelada)',
    lossPercent: 'Risco de Perda sem Tratamento (%)',
    treatmentCostLabel: 'Custo Total do Tratamento (R$)',
    potentialLossValue: 'Valor do Prejuízo Potencial',
    netSavedValue: 'Valor Líquido da Safra Salva',
    roiMultiplier: 'Retorno Estimado sobre a Intervenção (ROI)',

    agronomistTitle: 'Agrônomo Virtual com IA',
    agronomistSubtitle: 'Pergunte em português sobre dosagens, caldas caseiras ou correção de solo.',
    agronomistPlaceholder: 'Ex: Como preparar óleo de nim para combater a brusone no arroz?',
    sendQuestion: 'Enviar Pergunta',
    suggestedQuestions: 'Dúvidas Frequentes:'
  },
  ar: {
    appTitle: 'أجري شيلد',
    appSubtitle: 'الإنذار المبكر لأمراض المحاصيل والتدخل الذكي',
    liveWarning: 'تحذير مباشر',
    liveWarningText: 'تنبيه انتشار الأبواغ: خطر فطري مرتفع في الأحواض الزراعية بسبب ارتفاع الرطوبة.',
    viewRadar: 'عرض الرادار ←',
    selectBasin: 'اختر المنطقة الزراعية',
    spokenWrittenLanguage: 'اللغة المنطوقة والمكتوبة',
    scanLeafBtn: 'مسح ورقة النبات',
    scanLeafShort: 'مسح',

    tabDiagnostic: 'التشخيص الذكي',
    tabRadar: 'رادار التفشي',
    tabCommunity: 'تنبيهات المزارعين',
    tabDealers: 'المتاجر الزراعية',
    tabAgronomist: 'استشارة الخبير الزراعي',

    diagConfidence: 'دقة التشخيص',
    expectedLoss: 'الخسارة المتوقعة',
    expectedLossWithoutTreatment: 'خسارة المحصول دون علاج',
    spokenAdvisoryTitle: 'الإرشاد الصوتي للمزارع (دليل صوتي)',
    playVoice: 'تشغيل الصوت',
    stopVoice: 'إيقاف الصوت',
    observedSymptoms: 'الأعراض الرئيسية الملاحظة في الحقل:',
    localVernacular: 'الاسم المحلي الشائع',
    pathogen: 'مسبب المرض',

    tabOrganicSolutions: 'حلول عضوية واقتصادية',
    tabChemicalProtocol: 'بروتوكول المكافحة الكيميائية',
    tabPrevention: 'الوقاية الحقلية',
    organicHeading: 'وصفات طبيعية صديقة للبيئة وبدون تكلفة',
    organicSubheading: 'محضرة من مواد محلية متاحة دون ترك أي متبقيات كيميائية ضارة.',
    recommendedFirst: 'موصى به أولاً',
    prepTime: 'وقت التحضير',
    ingredients: 'المكونات المطلوبة',
    zeroCost: 'بدون تكلفة',
    lowCost: 'تكلفة منخفضة',
    mediumCost: 'تكلفة متوسطة',

    chemicalHeading: 'البروتوكول الكيميائي التجاري المعتمد',
    chemicalSubheading: 'يستخدم فقط عندما تتجاوز الإصابة الحد الاقتصادي الحرج. مع مراعاة فترة الأمان قبل الحصاد.',
    activeIngredient: 'المادة الفعالة',
    dosage: 'الجرعة المقررة',
    phiHarvest: 'فترة الأمان قبل الحصاد (PHI)',
    tradeBrands: 'الأسماء التجارية الشائعة',
    safetyPrecautions: 'احتياطات السلامة والرش',
    curativeKnockdown: 'علاج فعال وسريع',

    preventionHeading: 'الإدارة الزراعية الوقائية طويلة المدى',
    preventionSubheading: 'ممارسات زراعية لمنع تراكم الأبواغ وتكرار الإصابة في المواسم القادمة.',

    broadcastOutbreak: 'بث تحذير من تفشي المرض',
    broadcastDesc: 'تنبيه أكثر من 40 مزرعة مجاورة في نطاق 15 كم للرش الوقائي المبكر.',
    broadcastBtn: 'إرسال التحذير للمجتمع',
    broadcastedBtn: 'تم بث التحذير!',
    nearestDealers: 'أقرب المتاجر الزراعية',
    dealersDesc: 'تحقق من توفر المبيدات العضوية والبذور والأسعار لدى المتاجر المحلية.',
    viewSuppliesBtn: 'عرض المستلزمات المتاحة',
    askAgronomistCard: 'استشارة المهندس الزراعي الذكي',
    askAgronomistDesc: 'احصل على إجابة فورية حول أوقات الرش، خلط المبيدات أو تجهيز التربة.',
    askAgronomistBtn: 'طرح سؤال',

    scanModalTitle: 'تشخيص أمراض النبات بالذكاء الاصطناعي',
    scanModalSubtitle: 'امسح الورقة أو الساق أو الثمرة للحصول على العلاج المباشر',
    multimodalBadge: 'متعدد الوسائط',
    selectTargetCrop: 'اختر المحصول',
    cropImageInput: 'صورة المحصول',
    tabPresets: 'عينات حقلية',
    tabLiveCamera: 'كاميرا مباشرة',
    tabUpload: 'رفع صورة',
    selectPresetHint: 'اختر عينة حقلية أدناه لاختبار التشخيص الفوري والحلول العضوية:',
    centerLeafHint: 'ضع الورقة أو الثمرة المصابة في المنتصف',
    snapPhoto: 'التقاط صورة',
    uploadCropPhoto: 'انقر لرفع صورة ورقة النبات',
    uploadCropSubtext: 'يدعم صيغ PNG, JPG, JPEG',
    changePhoto: 'تغيير الصورة',
    removePhoto: 'حذف',
    describeSymptoms: 'وصف الأعراض الحقلية (اختياري)',
    describeSymptomsPlaceholder: 'مثال: ظهور بقع مغزلية الشكل على 15% من أوراق الأرز بعد 3 أيام من المطر...',
    quickTags: 'أعراض سريعة:',
    cancel: 'إلغاء',
    diagnosingPathogen: 'جاري تشخيص المرض...',
    runMultimodalDiag: 'بدء التشخيص الذكي',

    radarTitle: 'رادار انتشار الأبواغ والآفات',
    radarSubtitle: 'تتبع مباشر للرطوبة واتجاهات الرياح وبؤر الإصابة في نطاق 35 كم.',
    reportOutbreakBtn: 'الإبلاغ عن بؤرة إصابة',
    fungalRisk: 'خطر الإصابة الفطرية',
    bacterialRisk: 'خطر الإصابة البكتيرية',
    pestRisk: 'خطر الآفات الحشرية',
    bestSprayingWindow: 'أفضل وقت للرش',
    filterAllCrops: 'جميع المحاصيل',
    filterAllSeverities: 'جميع درجات الخطورة',
    activeOutbreaksTitle: 'بؤر الإصابة النشطة محلياً',
    sendWhatsAppAlert: 'إرسال تنبيه عبر واتساب',
    farmsAffected: 'مزارع أبلغت عن الإصابة',
    threatRadius: 'نطاق الخطر',
    hectares: 'هكتار متأثر',

    marketplaceTitle: 'سوق المستلزمات الزراعية',
    marketplaceSubtitle: 'اعثر على المركبات الحيوية والمبيدات والبذور من موردين معتمدين.',
    filterAll: 'جميع المستلزمات',
    filterOrganic: 'عضوي وحيوي',
    filterCurative: 'مبيدات علاجية',
    inStock: 'متوفر في المخزن',
    verifiedDealer: 'مورد معتمد',
    contactDealer: 'اتصال',
    orderWhatsApp: 'طلب عبر واتساب',

    communityTitle: 'شبكة التعاون الزراعي للإنذار المبكر',
    communitySubtitle: 'تقارير ميدانية من المزارعين يتم التحقق منها بواسطة الذكاء الاصطناعي والمرشدين الزراعيين.',
    reportObservation: 'تسجيل ملاحظة حقلية',
    aiVerified: 'تم التحقق بالذكاء الاصطناعي',
    helpfulConfirm: 'تأكيد / مفيد',
    submitFieldReportTitle: 'إرسال تقرير عن إصابة حقلية',
    farmerName: 'اسم المزارع',
    villageName: 'القرية / المنطقة',
    cropField: 'المحصول المصاب',
    suspectedIssue: 'المشكلة المشتبه بها / الأعراض',
    fieldNotes: 'ملاحظات وإجراءات متخذة',
    publishAlert: 'نشر التنبيه',

    calculatorTitle: 'حاسبة المحصول وحماية العائد المالي',
    calculatorSubtitle: 'احسب الخسائر المحتملة وقس العائد الاستثماري من التدخل الوقائي السريع.',
    farmSize: 'مساحة المزرعة (هكتار)',
    expectedYield: 'الإنتاج الطبيعي المتوقع (طن/هكتار)',
    marketPrice: 'سعر السوق (عملة / طن)',
    lossPercent: 'نسبة الخسارة المتوقعة بدون علاج (%)',
    treatmentCostLabel: 'التكلفة الإجمالية للعلاج',
    potentialLossValue: 'قيمة الخسارة المحتملة في المحصول',
    netSavedValue: 'صافي قيمة المحصول المحمي',
    roiMultiplier: 'العائد المقدر على الاستثمار (ROI)',

    agronomistTitle: 'المرشد الزراعي الذكي (AI)',
    agronomistSubtitle: 'اطرح أسئلتك باللغة العربية حول جرعات الأدوية أو تحضير المستخلصات العضوية أو خصوبة التربة.',
    agronomistPlaceholder: 'مثال: كيف أعد مستخلص أوراق النيم لمكافحة لفحة الأرز؟',
    sendQuestion: 'إرسال السؤال',
    suggestedQuestions: 'أسئلة زراعية شائعة:'
  }
};
