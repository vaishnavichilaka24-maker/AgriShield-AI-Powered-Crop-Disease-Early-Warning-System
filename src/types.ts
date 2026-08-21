export type CropType = 
  | 'Rice (Padi)'
  | 'Maize / Corn (Jagung)'
  | 'Chili / Pepper (Cabai)'
  | 'Cassava (Singkong)'
  | 'Tomato (Tomat)'
  | 'Coffee (Kopi)'
  | 'Banana (Pisang)'
  | 'Soybean (Kedelai)'
  | 'Wheat / Small Grains'
  | 'Other / General';

export type SeverityLevel = 'low' | 'moderate' | 'severe' | 'critical';

export type PathogenType = 'fungal' | 'bacterial' | 'viral' | 'pest' | 'nutrient_deficiency' | 'healthy' | 'unknown';

export type SupportedLanguage = 
  | 'en' 
  | 'id' 
  | 'hi' 
  | 'te' 
  | 'ta' 
  | 'bn' 
  | 'mr' 
  | 'sw' 
  | 'es' 
  | 'vi' 
  | 'fr' 
  | 'pt' 
  | 'ar';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
}

export interface OrganicRemedy {
  title: string;
  recipe: string;
  prepTime: string;
  costLevel: 'free' | 'low' | 'medium';
  materials: string[];
}

export interface ChemicalRemedy {
  activeIngredient: string;
  tradeNames: string[];
  dosage: string;
  safetyIntervalDays: number;
  precautions: string;
}

export interface DiagnosisResult {
  id: string;
  crop: CropType | string;
  diseaseName: string;
  localName?: string;
  scientificName: string;
  pathogenType: PathogenType;
  confidence: number;
  severity: SeverityLevel;
  symptoms: string[];
  organicRemedies: OrganicRemedy[];
  chemicalRemedies: ChemicalRemedy[];
  preventativeMeasures: string[];
  urgencyLevel: string;
  estimatedYieldLossPercent: number;
  audioScript: string;
  audioBase64?: string;
  analyzedAt: string;
  imageUrl?: string;
  regionContext?: string;
}

export interface CropDiseaseAlert {
  id: string;
  crop: CropType | string;
  diseaseName: string;
  pathogenType: PathogenType;
  severity: SeverityLevel;
  region: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceKm: number;
  reportedAt: string;
  activeFarmsCount: number;
  threatRadiusKm: number;
  weatherRiskTrigger: string;
  status: 'active' | 'contained' | 'spreading' | 'monitoring';
  hectaresAffected: number;
  urgentNotice: string;
  recommendedAction: string;
}

export interface AgroSupplyItem {
  id: string;
  name: string;
  type: 'bio-organic' | 'chemical-fungicide' | 'insecticide' | 'equipment' | 'resistant-seed';
  price: string;
  inStock: boolean;
  organic: boolean;
  packageSize: string;
  effectiveFor: string[];
}

export interface AgroDealer {
  id: string;
  name: string;
  ownerName: string;
  region: string;
  phone: string;
  whatsapp: string;
  distanceKm: number;
  rating: number;
  verified: boolean;
  address: string;
  supplies: AgroSupplyItem[];
}

export interface FarmerCommunityReport {
  id: string;
  farmerName: string;
  villageName: string;
  crop: CropType | string;
  suspectedDisease: string;
  severity: SeverityLevel;
  reportedAgo: string;
  verifiedByAI: boolean;
  photoUrl?: string;
  description: string;
  upvotes: number;
  commentsCount: number;
}

export interface WeatherAgriRisk {
  location: string;
  temperatureC: number;
  humidityPercent: number;
  rainfallMm: number;
  windSpeedKmh: number;
  condition: string;
  fungalRisk: {
    level: SeverityLevel;
    score: number; // 0 - 100
    reason: string;
  };
  bacterialRisk: {
    level: SeverityLevel;
    score: number;
    reason: string;
  };
  pestRisk: {
    level: SeverityLevel;
    score: number;
    reason: string;
  };
  bestSprayingWindow: string;
}

export interface BlogStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  category: 'Organic Recipes' | 'Disease Prevention' | 'Soil Health' | 'Chemical Safety' | 'Pest Control' | 'Farmer Guide';
  cropTag: CropType | string;
  author: {
    name: string;
    role: string;
    avatar: string;
    location: string;
  };
  coverImage: string;
  publishedDate: string;
  readTimeMinutes: number;
  likes: number;
  tags: string[];
  steps?: BlogStep[];
  keyTakeaways: string[];
  materialsOrTools?: string[];
  audioScript?: string;
}
