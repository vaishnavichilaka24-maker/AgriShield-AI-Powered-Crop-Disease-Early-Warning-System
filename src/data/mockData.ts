import { CropDiseaseAlert, AgroDealer, FarmerCommunityReport, WeatherAgriRisk, LanguageInfo } from '../types';

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🌐' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇰🇪' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
];

export const SAMPLE_DISEASE_PRESETS = [
  {
    id: 'rice-blast',
    crop: 'Rice (Padi)' as const,
    name: 'Rice Blast (Pyricularia oryzae)',
    localNames: {
      id: 'Penyakit Blas / Hawar Daun Padi',
      hi: 'धान का झोंका रोग (ब्लास्ट)',
      bn: 'ধানের ব্লাস্ট রোগ',
      sw: 'Ugonjwa wa mlipuko wa mpunga',
      es: 'Piricularia del arroz',
      vi: 'Bệnh đạo ôn lúa',
      en: 'Rice Blast Fungus'
    },
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Diamond-shaped spindle lesions with gray center and brown margins on leaves and panicle neck.',
    sampleSymptoms: 'Spindle-shaped spots on leaves, rotting of panicle neck causing empty whiteheads, rapid spread after heavy rain.'
  },
  {
    id: 'bacterial-leaf-blight',
    crop: 'Rice (Padi)' as const,
    name: 'Bacterial Leaf Blight (Xanthomonas oryzae)',
    localNames: {
      id: 'Penyakit Kresek / Hawar Daun Bakteri',
      hi: 'धान का जीवाणु पत्ती झुलसा',
      bn: 'ধানের ব্যাক্টেরিয়াল লিফ ব্লাইট',
      sw: 'Mnyauko wa bakteria wa mpunga',
      es: 'Tizón bacteriano del arroz',
      vi: 'Bệnh bạc lá lúa',
      en: 'Bacterial Leaf Blight'
    },
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Water-soaked wavy yellowish-white stripes starting from leaf margins and drying rapidly.',
    sampleSymptoms: 'Wavy yellow to translucent lesions running down the leaf blade margins, leaves turning bleached straw color.'
  },
  {
    id: 'fall-armyworm',
    crop: 'Maize / Corn (Jagung)' as const,
    name: 'Fall Armyworm (Spodoptera frugiperda)',
    localNames: {
      id: 'Ulat Grayak Jagung (FAW)',
      hi: 'मक्के का फॉल आर्मीवॉर्म',
      bn: 'ভুট্টার ফল আর্মিওয়ার্ম',
      sw: 'Kiwavi jeshi mvamizi wa mahindi',
      es: 'Gusano cogollero del maíz',
      vi: 'Sâu keo mùa thu trên ngô',
      en: 'Fall Armyworm Infestation'
    },
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Ragged hole chewing inside the whorl with sawdust-like yellowish frass/droppings.',
    sampleSymptoms: 'Deep feeding holes in leaves, shredded whorls filled with brown frass, damage to corn tassels.'
  },
  {
    id: 'chili-anthracnose',
    crop: 'Chili / Pepper (Cabai)' as const,
    name: 'Chili Anthracnose (Colletotrichum capsici)',
    localNames: {
      id: 'Patek Cabai / Antraknosa',
      hi: 'मिर्च का एंथ्रेक्नोज (फल गलन)',
      bn: 'মরিচের অ্যানথ্রাকনোজ',
      sw: 'Ugonjwa wa ukungu wa pilipili',
      es: 'Antracnosis del chile',
      vi: 'Bệnh thán thư ớt',
      en: 'Chili Fruit Rot / Anthracnose'
    },
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Sunken circular water-soaked dark spots with concentric rings on ripening chili fruits.',
    sampleSymptoms: 'Circular sunken lesions with black spore masses on red and green fruits, premature fruit drop.'
  },
  {
    id: 'tomato-late-blight',
    crop: 'Tomato (Tomat)' as const,
    name: 'Late Blight (Phytophthora infestans)',
    localNames: {
      id: 'Busuk Daun & Buah Tomat',
      hi: 'टमाटर का पिछेता झुलसा',
      bn: 'টমেটোর লেট ব্লাইট',
      sw: 'Ukungu wa mwisho wa nyanya',
      es: 'Tizón tardío del tomate',
      vi: 'Bệnh sương mai cà chua',
      en: 'Tomato Late Blight'
    },
    imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Dark irregular water-soaked greasy patches on leaves and brown firm rot on green tomato fruits.',
    sampleSymptoms: 'Rapidly expanding brownish lesions on foliage with white fungal fuzz underneath in damp weather.'
  },
  {
    id: 'cassava-mosaic',
    crop: 'Cassava (Singkong)' as const,
    name: 'Cassava Mosaic Disease (CMD)',
    localNames: {
      id: 'Penyakit Mosaik Singkong',
      hi: 'कसावा मोज़ेक रोग',
      bn: 'কাসাভা মোজাইক ভাইরাস',
      sw: 'Mchirizi ya mhogo (Batobato)',
      es: 'Mosaico de la yuca',
      vi: 'Bệnh khảm lá sắn',
      en: 'Cassava Mosaic Virus'
    },
    imageUrl: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=600&q=80',
    shortDesc: 'Severe leaf distortion, yellow/green mottled pattern, stunted plant growth transmitted by whiteflies.',
    sampleSymptoms: 'Severely twisted crinkled leaves with bright yellow patchwork, severe root yield reduction.'
  }
];

export const INITIAL_DISEASE_ALERTS: CropDiseaseAlert[] = [
  {
    id: 'alt-001',
    crop: 'Rice (Padi)',
    diseaseName: 'Rice Blast Spore Surge (Pyricularia oryzae)',
    pathogenType: 'fungal',
    severity: 'critical',
    region: 'Subang & Karawang Regency, West Java',
    country: 'Indonesia',
    coordinates: { lat: -6.5716, lng: 107.7587 },
    distanceKm: 4.8,
    reportedAt: '12 mins ago',
    activeFarmsCount: 28,
    threatRadiusKm: 18,
    weatherRiskTrigger: '92% Humidity + 27°C after heavy afternoon monsoon',
    status: 'spreading',
    hectaresAffected: 145,
    urgentNotice: 'High fungal spore concentration detected blowing northeast. Immediate preventive bio-spray or tricyclazole application recommended before next rainfall.',
    recommendedAction: 'Apply fermented neem leaf extract or Tricyclazole 75 WP at 0.6g/L. Drain excess standing water.'
  },
  {
    id: 'alt-002',
    crop: 'Chili / Pepper (Cabai)',
    diseaseName: 'Anthracnose Fruit Rot Outbreak',
    pathogenType: 'fungal',
    severity: 'severe',
    region: 'Kediri & Blitar, East Java',
    country: 'Indonesia',
    coordinates: { lat: -7.848, lng: 112.0178 },
    distanceKm: 12.4,
    reportedAt: '1 hour ago',
    activeFarmsCount: 19,
    threatRadiusKm: 12,
    weatherRiskTrigger: 'Intermittent rainfall + warm humid mornings',
    status: 'active',
    hectaresAffected: 42,
    urgentNotice: 'Spreading quickly among flowering and fruiting chilies. Farmers report 30% fruit drop on untreated plots.',
    recommendedAction: 'Remove and burn infected fruits immediately. Spray Trichoderma bio-agent or Difenoconazole.'
  },
  {
    id: 'alt-003',
    crop: 'Maize / Corn (Jagung)',
    diseaseName: 'Fall Armyworm Early Whorl Swarm',
    pathogenType: 'pest',
    severity: 'moderate',
    region: 'Guntur Rural District, Andhra Pradesh',
    country: 'India',
    coordinates: { lat: 16.3067, lng: 80.4365 },
    distanceKm: 21.0,
    reportedAt: '3 hours ago',
    activeFarmsCount: 34,
    threatRadiusKm: 25,
    weatherRiskTrigger: 'Dry warm spell following early sowing',
    status: 'monitoring',
    hectaresAffected: 88,
    urgentNotice: 'Egg masses and early instar larvae detected inside central maize whorls.',
    recommendedAction: 'Apply dry sand/wood ash in whorls or spray Bacillus thuringiensis (Bt) @ 2g/L.'
  },
  {
    id: 'alt-004',
    crop: 'Tomato (Tomat)',
    diseaseName: 'Late Blight Foliar Alert',
    pathogenType: 'fungal',
    severity: 'critical',
    region: 'Bogra Horticultural Belt',
    country: 'Bangladesh',
    coordinates: { lat: 24.8465, lng: 89.3777 },
    distanceKm: 9.1,
    reportedAt: '4 hours ago',
    activeFarmsCount: 15,
    threatRadiusKm: 15,
    weatherRiskTrigger: 'Cool foggy morning mist with persistent leaf wetness',
    status: 'spreading',
    hectaresAffected: 28,
    urgentNotice: 'Leaf spots turning to rapid foliar collapse within 48 hours in high density plots.',
    recommendedAction: 'Ensure plant aeration. Spray copper oxychloride or Mancozeb + Metalaxyl immediately.'
  },
  {
    id: 'alt-005',
    crop: 'Cassava (Singkong)',
    diseaseName: 'Cassava Mosaic Whitefly Vector Swarm',
    pathogenType: 'viral',
    severity: 'moderate',
    region: 'Uasin Gishu Valley',
    country: 'Kenya',
    coordinates: { lat: 0.5143, lng: 35.2698 },
    distanceKm: 31.5,
    reportedAt: '1 day ago',
    activeFarmsCount: 42,
    threatRadiusKm: 35,
    weatherRiskTrigger: 'High temperature acceleration of Bemisia tabaci breeding',
    status: 'contained',
    hectaresAffected: 120,
    urgentNotice: 'Whitefly populations increasing. Rogue out symptomatic infected cassava stalks.',
    recommendedAction: 'Uproot infected plants; deploy yellow sticky traps; plant disease-free certified stems.'
  }
];

export const INITIAL_AGRO_DEALERS: AgroDealer[] = [
  {
    id: 'agro-01',
    name: 'Toko Tani Makmur Sejahtera (Farmer Supply Co-op)',
    ownerName: 'Pak Haji Rohman',
    region: 'Subang Agro Hub, West Java',
    phone: '+62 812-3456-7890',
    whatsapp: '+6281234567890',
    distanceKm: 2.3,
    rating: 4.9,
    verified: true,
    address: 'Jl. Raya Cipunagara No. 45, Subang',
    supplies: [
      { id: 's1', name: 'Trichoderma Harzianum Bio-Fungicide', type: 'bio-organic', price: 'IDR 35,000 (~$2.20)', inStock: true, organic: true, packageSize: '500g powder', effectiveFor: ['Rice Blast', 'Root Rot', 'Anthracnose'] },
      { id: 's2', name: 'Pure Cold-Pressed Neem Oil Emulsion', type: 'bio-organic', price: 'IDR 48,000 (~$3.10)', inStock: true, organic: true, packageSize: '1 Liter', effectiveFor: ['Fall Armyworm', 'Aphids', 'Whitefly'] },
      { id: 's3', name: 'Tricyclazole 75 WP Systemic Fungicide', type: 'chemical-fungicide', price: 'IDR 62,000 (~$4.00)', inStock: true, organic: false, packageSize: '250g', effectiveFor: ['Rice Blast', 'Neck Blast'] },
      { id: 's4', name: 'Knapsack Battery Sprayer 16L with Cone Nozzle', type: 'equipment', price: 'IDR 380,000 (~$24.50)', inStock: true, organic: false, packageSize: '1 Unit', effectiveFor: ['All Spraying'] }
    ]
  },
  {
    id: 'agro-02',
    name: 'Kisan Seva Kendra & Organic Farm inputs',
    ownerName: 'Ramesh Patel',
    region: 'Guntur Rural Market Yard',
    phone: '+91 98765 43210',
    whatsapp: '+919876543210',
    distanceKm: 5.1,
    rating: 4.8,
    verified: true,
    address: 'Shop 12, APMC Mandi Road, Guntur',
    supplies: [
      { id: 's5', name: 'Bacillus thuringiensis (Bt) Curative Dust', type: 'bio-organic', price: '₹180 (~$2.15)', inStock: true, organic: true, packageSize: '500g', effectiveFor: ['Fall Armyworm', 'Bollworm', 'Stem Borer'] },
      { id: 's6', name: 'Copper Oxychloride 50 WP', type: 'chemical-fungicide', price: '₹290 (~$3.50)', inStock: true, organic: false, packageSize: '500g', effectiveFor: ['Late Blight', 'Bacterial Leaf Spot', 'Rust'] },
      { id: 's7', name: 'Yellow & Blue Sticky Pheromone Insect Traps (10 pcs)', type: 'equipment', price: '₹140 (~$1.70)', inStock: true, organic: true, packageSize: 'Pack of 10', effectiveFor: ['Whiteflies', 'Thrips', 'Aphids'] },
      { id: 's8', name: 'Certified Blast-Resistant Rice Seed (Inpari 32)', type: 'resistant-seed', price: '₹450 (~$5.40)', inStock: true, organic: true, packageSize: '5kg Seed Bag', effectiveFor: ['Rice Blast Prevention'] }
    ]
  },
  {
    id: 'agro-03',
    name: 'Shobuj Khamar Agricultural Solutions',
    ownerName: 'Abdul Karim',
    region: 'Bogra Central Bazar',
    phone: '+880 1711-234567',
    whatsapp: '+8801711234567',
    distanceKm: 8.7,
    rating: 4.7,
    verified: true,
    address: 'Station Road, Bogra Sadar',
    supplies: [
      { id: 's9', name: 'Mancozeb 80% WP Protectant', type: 'chemical-fungicide', price: '৳ 320 (~$2.70)', inStock: true, organic: false, packageSize: '500g', effectiveFor: ['Late Blight', 'Early Blight', 'Anthracnose'] },
      { id: 's10', name: 'Bio-Slurry Soil Enricher & Microbe Inoculant', type: 'bio-organic', price: '৳ 150 (~$1.25)', inStock: true, organic: true, packageSize: '5 Liter Liquid', effectiveFor: ['Root Immunity', 'Soil Health'] }
    ]
  }
];

export const INITIAL_COMMUNITY_REPORTS: FarmerCommunityReport[] = [
  {
    id: 'rep-1',
    farmerName: 'Pak Dedi Sutisna',
    villageName: 'Desa Cikaum, Subang',
    crop: 'Rice (Padi)',
    suspectedDisease: 'Rice Blast (Neck Rot)',
    severity: 'severe',
    reportedAgo: '35 mins ago',
    verifiedByAI: true,
    photoUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=400&q=80',
    description: 'Noticed brown diamond spots on 20% of tillers after 3 days of constant evening rain. Already drained paddy water and applied organic neem spray.',
    upvotes: 14,
    commentsCount: 6
  },
  {
    id: 'rep-2',
    farmerName: 'Ibu Siti Aminah',
    villageName: 'Pusakanagara, Subang',
    crop: 'Chili / Pepper (Cabai)',
    suspectedDisease: 'Chili Anthracnose (Patek)',
    severity: 'moderate',
    reportedAgo: '2 hours ago',
    verifiedByAI: true,
    photoUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80',
    description: 'Found sunken black circles on ripe red bird-eye chilies. Removed all fallen fruits to prevent fungus spread to adjacent rows.',
    upvotes: 9,
    commentsCount: 4
  },
  {
    id: 'rep-3',
    farmerName: 'Kiran Kumar',
    villageName: 'Tenali Mandal, Guntur',
    crop: 'Maize / Corn (Jagung)',
    suspectedDisease: 'Fall Armyworm Whorl Damage',
    severity: 'critical',
    reportedAgo: '5 hours ago',
    verifiedByAI: true,
    photoUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80',
    description: 'Larvae spotted eating the central leaf whorl. Group spraying organized with 6 neighbor farmers tomorrow morning at 6 AM.',
    upvotes: 22,
    commentsCount: 11
  }
];

export const INITIAL_WEATHER_RISK: WeatherAgriRisk = {
  location: 'Subang Agro Basin, West Java',
  temperatureC: 28.4,
  humidityPercent: 88,
  rainfallMm: 24.5,
  windSpeedKmh: 14.2,
  condition: 'Humid with Periodic Monsoon Showers',
  fungalRisk: {
    level: 'critical',
    score: 91,
    reason: 'High relative humidity (>85%) and surface leaf wetness >6 hours create ideal spore germination conditions for Rice Blast & Anthracnose.'
  },
  bacterialRisk: {
    level: 'severe',
    score: 76,
    reason: 'Wind-driven raindrops can spread bacterial leaf blight through microscopic leaf wounds.'
  },
  pestRisk: {
    level: 'moderate',
    score: 48,
    reason: 'Heavy rain temporarily suppresses flying moths but increases soil emergence.'
  },
  bestSprayingWindow: 'Tomorrow 06:00 AM - 09:30 AM (Calm winds, dry leaves before afternoon clouds)'
};
