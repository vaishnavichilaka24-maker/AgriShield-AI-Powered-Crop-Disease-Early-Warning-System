import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

// Parse JSON request bodies up to 25MB for image uploads
app.use(express.json({ limit: '25mb' }));

// Lazy/safe initialization of Google Gen AI
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// 2. Crop Disease Multimodal Diagnostic API
app.post('/api/diagnose-crop', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', cropType, symptomsDescription, location, language = 'en' } = req.body;

    const languageNames: Record<string, string> = {
      en: 'English',
      id: 'Bahasa Indonesia',
      hi: 'Hindi',
      te: 'Telugu',
      ta: 'Tamil',
      bn: 'Bengali',
      mr: 'Marathi',
      sw: 'Swahili',
      es: 'Spanish',
      vi: 'Vietnamese',
      fr: 'French',
      pt: 'Portuguese',
      ar: 'Arabic'
    };

    const targetLangName = languageNames[language] || 'English';

    const systemInstruction = `You are a world-class agricultural plant pathologist and rural agronomist advisor specializing in smallholder farming systems across Southeast Asia, South Asia, Africa, and Latin America.
Your role is to diagnose crop diseases, pests, and nutrient deficiencies with extreme practical precision.
Prioritize:
1. Low-cost, easily accessible organic home remedies (e.g. neem extract, wood ash, trichoderma, bio-slurry, garlic-chili emulsion, proper drainage, mechanical roguing).
2. Standard approved agro-chemical curative treatments with precise dilution rates, application safety intervals, and worker protection.
3. Clear cultural prevention practices for the next season.
4. An easy-to-understand spoken audio script in ${targetLangName} designed to be read aloud clearly to a farmer in the field.

Translate all explanations, remedies, and instructions into ${targetLangName} while keeping standard scientific names in Latin/English.`;

    const promptText = `Analyze this crop sample:
- Target Crop: ${cropType || 'Field Crop'}
- Farmer Reported Symptoms: ${symptomsDescription || 'Visual leaf/stem/fruit discoloration observed in field'}
- Field Location: ${location || 'Tropical agricultural basin'}
- Output Language: ${targetLangName}

Provide a comprehensive, actionable diagnostic report in the requested JSON structure.`;

    const contents: any = [];

    if (imageBase64) {
      // Clean base64 string if it has data url prefix
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      contents.push({
        inlineData: {
          mimeType: mimeType,
          data: cleanBase64
        }
      });
    }

    contents.push({
      text: promptText
    });

    const ai = getGenAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: contents.length === 1 ? contents[0].text : { parts: contents },
      config: {
        systemInstruction,
        temperature: 0.2,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diseaseName: { type: Type.STRING, description: 'Common name of disease or pest in output language' },
            localName: { type: Type.STRING, description: 'Common localized/regional vernacular name of the disease' },
            scientificName: { type: Type.STRING, description: 'Latin scientific name of the causal pathogen/pest' },
            pathogenType: { 
              type: Type.STRING, 
              description: 'One of: fungal, bacterial, viral, pest, nutrient_deficiency, healthy, unknown'
            },
            confidence: { type: Type.NUMBER, description: 'Diagnostic confidence percentage between 50 and 99' },
            severity: { 
              type: Type.STRING, 
              description: 'One of: low, moderate, severe, critical'
            },
            symptoms: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'List of observed physical symptoms on leaves, stems, or fruits'
            },
            organicRemedies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: 'Title of organic solution' },
                  recipe: { type: Type.STRING, description: 'Step-by-step preparation and spraying ratio' },
                  prepTime: { type: Type.STRING, description: 'Preparation time e.g., 20 mins or 24 hours' },
                  costLevel: { type: Type.STRING, description: 'One of: free, low, medium' },
                  materials: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING },
                    description: 'Local raw ingredients needed'
                  }
                },
                required: ['title', 'recipe', 'prepTime', 'costLevel', 'materials']
              },
              description: 'Eco-friendly, cheap farmer home remedies'
            },
            chemicalRemedies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  activeIngredient: { type: Type.STRING, description: 'Scientific active ingredient' },
                  tradeNames: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING },
                    description: 'Common commercial trade names'
                  },
                  dosage: { type: Type.STRING, description: 'Precise dosage e.g. 1.5g per Liter water' },
                  safetyIntervalDays: { type: Type.INTEGER, description: 'Days between last spray and harvest' },
                  precautions: { type: Type.STRING, description: 'Safety gear and wind precautions' }
                },
                required: ['activeIngredient', 'tradeNames', 'dosage', 'safetyIntervalDays', 'precautions']
              },
              description: 'Standard chemical treatments if infestation is severe'
            },
            preventativeMeasures: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Best agronomic practices for prevention'
            },
            urgencyLevel: { type: Type.STRING, description: 'Urgency timeframe e.g. Immediate action within 24 hours' },
            estimatedYieldLossPercent: { type: Type.INTEGER, description: 'Estimated potential yield loss % if left untreated' },
            audioScript: { 
              type: Type.STRING, 
              description: 'Concise 3-4 sentence spoken summary suitable for audio voice readout in the target language' 
            }
          },
          required: [
            'diseaseName',
            'scientificName',
            'pathogenType',
            'confidence',
            'severity',
            'symptoms',
            'organicRemedies',
            'chemicalRemedies',
            'preventativeMeasures',
            'urgencyLevel',
            'estimatedYieldLossPercent',
            'audioScript'
          ]
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    
    // Normalize pathogenType & severity
    const validPathogens = ['fungal', 'bacterial', 'viral', 'pest', 'nutrient_deficiency', 'healthy', 'unknown'];
    const validSeverities = ['low', 'moderate', 'severe', 'critical'];

    const result = {
      id: 'diag-' + Date.now(),
      crop: cropType || 'Crop',
      diseaseName: parsed.diseaseName || 'Crop Pathogen Detected',
      localName: parsed.localName || '',
      scientificName: parsed.scientificName || 'Pathogen species',
      pathogenType: validPathogens.includes(parsed.pathogenType?.toLowerCase()) ? parsed.pathogenType.toLowerCase() : 'fungal',
      confidence: Math.min(99, Math.max(50, Math.round(parsed.confidence || 88))),
      severity: validSeverities.includes(parsed.severity?.toLowerCase()) ? parsed.severity.toLowerCase() : 'moderate',
      symptoms: Array.isArray(parsed.symptoms) ? parsed.symptoms : ['Foliar discoloration detected'],
      organicRemedies: Array.isArray(parsed.organicRemedies) ? parsed.organicRemedies : [],
      chemicalRemedies: Array.isArray(parsed.chemicalRemedies) ? parsed.chemicalRemedies : [],
      preventativeMeasures: Array.isArray(parsed.preventativeMeasures) ? parsed.preventativeMeasures : [],
      urgencyLevel: parsed.urgencyLevel || 'Action recommended within 48 hours',
      estimatedYieldLossPercent: typeof parsed.estimatedYieldLossPercent === 'number' ? parsed.estimatedYieldLossPercent : 35,
      audioScript: parsed.audioScript || 'Crop disease detected. Please review the organic and chemical treatments.',
      analyzedAt: new Date().toISOString(),
      regionContext: location || 'Subang, West Java'
    };

    res.json(result);
  } catch (error: any) {
    console.error('Error in /api/diagnose-crop:', error);
    res.status(500).json({ 
      error: 'Failed to diagnose crop sample', 
      details: error.message || String(error) 
    });
  }
});

// 3. Spoken Audio Voice Synthesis (TTS)
app.post('/api/generate-tts', async (req, res) => {
  try {
    const { text, language = 'en', voice = 'Kore' } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required for TTS generation' });
    }

    const ai = getGenAI();
    // Using gemini-3.1-flash-tts-preview
    const prompt = `Speak clearly and calmly in an advisory tone for a farmer: ${text.slice(0, 500)}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-tts-preview',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: ['AUDIO' as any],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice || 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      res.json({ audioBase64: base64Audio, format: 'pcm', sampleRate: 24000 });
    } else {
      res.status(204).json({ message: 'No audio generated' });
    }
  } catch (error: any) {
    console.error('TTS generation failed or unavailable:', error.message);
    // Return gracefully so client can fall back to browser Web Speech API
    res.json({ fallbackWebSpeech: true, message: error.message });
  }
});

// 4. Agronomist AI Q&A Assistant
app.post('/api/ask-agronomist', async (req, res) => {
  try {
    const { question, cropContext, diseaseContext, language = 'en' } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const ai = getGenAI();
    const languageNames: Record<string, string> = {
      en: 'English',
      id: 'Bahasa Indonesia',
      hi: 'Hindi',
      te: 'Telugu',
      ta: 'Tamil',
      bn: 'Bengali',
      mr: 'Marathi',
      sw: 'Swahili',
      es: 'Spanish',
      vi: 'Vietnamese',
      fr: 'French',
      pt: 'Portuguese',
      ar: 'Arabic'
    };
    const targetLangName = languageNames[language] || 'English';

    const systemInstruction = `You are a friendly, highly knowledgeable senior agricultural extension officer.
You provide clear, practical, down-to-earth farming advice for smallholder farmers and agro-dealers.
Context:
Crop: ${cropContext || 'General Crops'}
Disease/Pest: ${diseaseContext || 'General Health'}
Target Language: Respond completely and natively in ${targetLangName}.

Keep your answer practical, bulleted when giving steps, safe regarding chemicals, and encouraging.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.4,
      }
    });

    res.json({ answer: response.text });
  } catch (error: any) {
    console.error('Error in /api/ask-agronomist:', error);
    res.status(500).json({ error: 'Failed to get answer from agronomist', details: error.message });
  }
});

// 5. Dynamic Weather & Spore Spread Risk Engine
app.post('/api/weather-risk', async (req, res) => {
  try {
    const { location, temp, humidity, rainProbability } = req.body;

    const ai = getGenAI();
    const prompt = `Evaluate agricultural pathogen spore propagation risk for:
Location: ${location || 'Subang Basin, West Java'}
Current Temperature: ${temp || 28}°C
Relative Humidity: ${humidity || 88}%
Rainfall Probability: ${rainProbability || 75}%

Provide an assessment of fungal, bacterial, and insect pest proliferation threat levels and the optimal spraying window.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            fungalScore: { type: Type.INTEGER, description: '0 to 100 risk score' },
            fungalLevel: { type: Type.STRING, description: 'low, moderate, severe, or critical' },
            fungalReason: { type: Type.STRING },
            bacterialScore: { type: Type.INTEGER },
            bacterialLevel: { type: Type.STRING },
            bacterialReason: { type: Type.STRING },
            pestScore: { type: Type.INTEGER },
            pestLevel: { type: Type.STRING },
            pestReason: { type: Type.STRING },
            bestSprayingWindow: { type: Type.STRING, description: 'Optimal hour and condition window' }
          },
          required: ['fungalScore', 'fungalLevel', 'fungalReason', 'bacterialScore', 'bacterialLevel', 'bacterialReason', 'pestScore', 'pestLevel', 'pestReason', 'bestSprayingWindow']
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/weather-risk:', error);
    res.status(500).json({ error: 'Failed to calculate weather risk', details: error.message });
  }
});

// 6. Vite / Static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AgriShield Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
