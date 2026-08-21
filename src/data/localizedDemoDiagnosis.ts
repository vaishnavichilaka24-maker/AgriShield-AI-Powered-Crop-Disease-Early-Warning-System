import { DiagnosisResult, SupportedLanguage } from '../types';

export const LOCALIZED_DEMO_DIAGNOSES: Record<SupportedLanguage, DiagnosisResult> = {
  en: {
    id: 'diag-demo-01',
    crop: 'Rice (Padi)',
    diseaseName: 'Rice Blast Spindle Lesions (Pyricularia oryzae)',
    localName: 'Leaf Blast / Neck Blast',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'Diamond-shaped spindle lesions with gray centers and reddish-brown margins',
      'Leaf tip drying and rapid spore spread across tillers',
      'Panicle neck discoloration threatening empty grain heads (neck blast)'
    ],
    organicRemedies: [
      {
        title: 'Fermented Neem Leaf & Garlic Bio-Spray',
        recipe: 'Crush 1kg fresh neem leaves and 200g garlic cloves in 5L water. Ferment for 48 hours. Dilute 1:10 with water and add 5ml bio-soap surfactant before morning spraying.',
        prepTime: '48 hours fermentation',
        costLevel: 'free',
        materials: ['Fresh Neem Leaves', 'Garlic Cloves', 'Bio-Soap', 'Water']
      },
      {
        title: 'Trichoderma Harzianum Spore Inoculant',
        recipe: 'Mix 50g Trichoderma bio-powder per 15L backpack sprayer with organic compost wash. Spray at tiller base to colonize root zones and outcompete blast mycelium.',
        prepTime: '20 minutes',
        costLevel: 'low',
        materials: ['Trichoderma Powder', 'Compost Tea Wash', 'Clean Water']
      },
      {
        title: 'Wood Ash & Silica Foliar Dusting',
        recipe: 'Dust sifted dry hardwood ash (50kg/ha) across morning wet dew leaves. Silicon strengthens leaf cuticle cell walls to block fungal hyphae penetration.',
        prepTime: 'Immediate',
        costLevel: 'free',
        materials: ['Sifted Dry Hardwood Ash']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'Tricyclazole 75% WP',
        tradeNames: ['Beam 75 WP', 'Baan', 'Blastin'],
        dosage: '0.6g per 1 Liter water (120g / ha in 200L tank)',
        safetyIntervalDays: 21,
        precautions: 'Apply at early spindle spot stage or booting stage. Wear protective face mask and gloves. Avoid spraying during rain.'
      },
      {
        activeIngredient: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC',
        tradeNames: ['Amistar Top', 'Custodia'],
        dosage: '1.0 ml per 1 Liter water',
        safetyIntervalDays: 14,
        precautions: 'Systemic broad-spectrum curative. Rotate with non-strobilurin fungicides to prevent resistance.'
      }
    ],
    preventativeMeasures: [
      'Avoid excessive late urea/nitrogen fertilizer application which makes leaf tissue soft and vulnerable.',
      'Maintain shallow intermittent field drainage during high-humidity cloudburst weeks.',
      'Space planting hills at least 20cm x 20cm (Legowo 2:1 method) to improve canopy airflow.',
      'Use certified blast-resistant seed varieties (e.g. Inpari 32, Ciherang Blast, Swarna Sub1).'
    ],
    urgencyLevel: 'Immediate action required within 24-48 hours before heading stage',
    estimatedYieldLossPercent: 45,
    audioScript: 'Farmer alert: Critical rice blast symptoms detected on leaf tillers. Apply fermented neem extract or tricyclazole 75 WP immediately. Reduce nitrogen fertilizer and drain standing water to lower relative humidity.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'Subang Agricultural Basin, West Java'
  },

  hi: {
    id: 'diag-demo-01',
    crop: 'धान (चावल)',
    diseaseName: 'धान का झुलसा रोग (राइस ब्लास्ट)',
    localName: 'ब्लास्ट रोग / करपा / पत्ती झुलसा',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'पत्तियों पर आँख या नाव के आकार के भूरे-लाल किनारों वाले धब्बे',
      'पत्तियों के सिरे सूखना और कल्ले में तेजी से बीजाणु प्रसार',
      'बाली की गर्दन का काला पड़ना जिससे दाने खोखले हो जाते हैं (नेक ब्लास्ट)'
    ],
    organicRemedies: [
      {
        title: 'नीम पत्ती और लहसुन का जैविक काढ़ा',
        recipe: '1 किलो ताजी नीम की पत्तियां और 200 ग्राम लहसुन को 5 लीटर पानी में कूटकर 48 घंटे तक किण्वित करें। 1:10 अनुपात में पानी मिलाकर सुबह के समय छिड़काव करें।',
        prepTime: '48 घंटे किण्वन',
        costLevel: 'free',
        materials: ['ताजी नीम पत्तियां', 'लहसुन की कलियां', 'प्राकृतिक साबुन', 'पानी']
      },
      {
        title: 'ट्राइकोडर्मा हरजिएनम जैविक संवर्धक',
        recipe: '50 ग्राम ट्राइकोडर्मा पाउडर प्रति 15 लीटर नैपसैक स्प्रेयर में गोबर की खाद के पानी के साथ मिलाकर कल्ले के आधार पर छिड़कें।',
        prepTime: '20 मिनट',
        costLevel: 'low',
        materials: ['ट्राइकोडर्मा पाउडर', 'गोबर खाद का पानी', 'साफ पानी']
      },
      {
        title: 'लकड़ी की राख का भुरकाव',
        recipe: 'सुबह ओस के समय छनी हुई सूखी लकड़ी की राख (50 किग्रा/हेक्टेयर) का भुरकाव करें। सिलिका पत्ती की कोशिकाओं को मजबूत बनाती है।',
        prepTime: 'तत्काल',
        costLevel: 'free',
        materials: ['छनी हुई सूखी लकड़ी की राख']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'ट्राइसाइक्लाजोल 75% WP (Tricyclazole)',
        tradeNames: ['बीम 75 WP', 'बान', 'ब्लास्टिन'],
        dosage: '0.6 ग्राम प्रति 1 लीटर पानी (120 ग्राम प्रति हेक्टेयर)',
        safetyIntervalDays: 21,
        precautions: 'शुरुआती धब्बे दिखने पर छिड़काव करें। मास्क और दस्ताने पहनें। बारिश के दौरान छिड़काव न करें।'
      },
      {
        activeIngredient: 'एज़ोक्सीस्ट्रोबिन 18.2% + डिफेनोकोनाज़ोल 11.4% SC',
        tradeNames: ['एमिस्टार टॉप', 'कस्टोडिया'],
        dosage: '1.0 मिली प्रति 1 लीटर पानी',
        safetyIntervalDays: 14,
        precautions: 'सिस्टेमिक फफूंदनाशक। प्रतिरोध से बचने के लिए अन्य दवाओं के साथ बदल-बदल कर उपयोग करें।'
      }
    ],
    preventativeMeasures: [
      'यूरिया (नाइट्रोजन) खाद का अत्यधिक उपयोग न करें, जिससे पत्तियां कोमल न हों।',
      'खेत में लगातार पानी न भरा रहने दें, समय-समय पर पानी निकालें।',
      'कतारों के बीच 20x20 सेमी की दूरी रखें ताकि हवा का संचार बना रहे।',
      'ब्लास्ट प्रतिरोधी बीज किस्मों (जैसे पूसा बासमती, स्वर्णा सब-1) का उपयोग करें।'
    ],
    urgencyLevel: '24 से 48 घंटे के भीतर तत्काल उपचार आवश्यक',
    estimatedYieldLossPercent: 45,
    audioScript: 'किसान भाई ध्यान दें: आपके धान के खेत में ब्लास्ट रोग के गंभीर लक्षण पाए गए हैं। तुरंत नीम के काढ़े या ट्राइसाइक्लाजोल 75 WP का छिड़काव करें। यूरिया का उपयोग कम करें और खेत से अतिरिक्त पानी निकालें।',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'गुंटूर और तटीय कृषि क्षेत्र'
  },

  te: {
    id: 'diag-demo-01',
    crop: 'వరి (ధాన్యం)',
    diseaseName: 'వరి అగ్గితెగులు (రైస్ బ్లాస్ట్)',
    localName: 'అగ్గితెగులు / మెడవిరుపు తెగులు',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'ఆకులపై నూలుకండె ఆకారంలో బూడిద రంగు కేంద్రం, ఎరుపు-గోధుమ అంచులతో మచ్చలు',
      'ఆకుల చివర్లు ఎండిపోవడం మరియు పిలకల వ్యాప్తి',
      'కంకి మెడ నల్లబడి గింజలు తాలుగా మారే ప్రమాదం (మెడవిరుపు తెగులు)'
    ],
    organicRemedies: [
      {
        title: 'వేప ఆకులు & వెల్లుల్లి జీవ కషాయం',
        recipe: '1 కేజీ తాజా వేపాకులు, 200 గ్రాముల వెల్లుల్లిని 5 లీటర్ల నీటిలో నూరి 48 గంటలు పులియబెట్టాలి. 1:10 నిష్పత్తిలో నీటితో కలిపి ఉదయం పిచికారీ చేయండి.',
        prepTime: '48 గంటల కిణ్వ ప్రక్రియ',
        costLevel: 'free',
        materials: ['తాజా వేపాకులు', 'వెల్లుల్లి', 'జీవ సబ్బు', 'నీరు']
      },
      {
        title: 'ట్రైకోడెర్మా హర్జియానమ్ జీవశిలీంధ్రం',
        recipe: '15 లీటర్ల స్ప్రేయర్‌కు 50 గ్రాముల ట్రైకోడెర్మా పౌడర్‌ను పశువుల పేడ నీటితో కలిపి పిలకల మొదళ్ళ వద్ద పిచికారీ చేయండి.',
        prepTime: '20 నిమిషాలు',
        costLevel: 'low',
        materials: ['ట్రైకోడెర్మా పౌడర్', 'కంపోస్ట్ నీరు', 'స్వచ్ఛమైన నీరు']
      },
      {
        title: 'కట్టెల బూడిద చల్లడం',
        recipe: 'ఉదయం మంచు ఉన్న సమయంలో జల్లించిన పొడి కట్టెల బూడిదను (ఎకరాకు 20 కేజీలు) ఆకులపై చల్లాలి. సిలికాన్ శిలీంధ్రాల వ్యాప్తిని అడ్డుకుంటుంది.',
        prepTime: 'తక్షణమే',
        costLevel: 'free',
        materials: ['జల్లించిన పొడి కట్టెల బూడిద']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'ట్రైసైక్లాజోల్ 75% డబ్ల్యు.పి (Tricyclazole)',
        tradeNames: ['బీమ్ 75 WP', 'బాన్', 'బ్లాస్టిన్'],
        dosage: 'లీటర్ నీటికి 0.6 గ్రాములు (ఎకరాకు 120 గ్రాములు 200 లీటర్ల నీటిలో)',
        safetyIntervalDays: 21,
        precautions: 'మచ్చలు కనిపించిన వెంటనే పిచికారీ చేయండి. మాస్క్ మరియు చేతి తొడుగులు ధరించండి. వర్షం సమయంలో పిచికారీ చేయవద్దు.'
      },
      {
        activeIngredient: 'అజాక్సిస్ట్రోబిన్ 18.2% + డైఫెనోకోనజోల్ 11.4% ఎస్.సి',
        tradeNames: ['అమిస్టార్ టాప్', 'కస్టోడియా'],
        dosage: 'లీటర్ నీటికి 1.0 మి.లీ',
        safetyIntervalDays: 14,
        precautions: 'సిస్టమిక్ శిలీంద్ర సంహారిణి. తెగులు నిరోధకత రాకుండా మందులను మార్చి పిచికారీ చేయండి.'
      }
    ],
    preventativeMeasures: [
      'యూరియా ఎరువును అధికంగా వాడవద్దు, దీనివల్ల ఆకులు మృదువుగా మారి తెగులు త్వరగా వ్యాపిస్తుంది.',
      'పొలంలో నిల్వ ఉన్న నీటిని తీసివేసి ఆరబెట్టాలి.',
      'మొక్కల మధ్య సరైన దూరం (20x20 సెం.మీ) పాటించి గాలి వెలుతురు ప్రసరించేలా చూడండి.',
      'తెగులు తట్టుకునే విత్తన రకాలను మాత్రమే ఎంచుకోండి.'
    ],
    urgencyLevel: '24-48 గంటల్లో వెంటనే చర్యలు తీసుకోవాలి',
    estimatedYieldLossPercent: 45,
    audioScript: 'రైతు సోదరులకు హెచ్చరిక: మీ వరి చేనులో అగ్గితెగులు లక్షణాలు తీవ్రంగా ఉన్నాయి. వెంటనే వేప కషాయం లేదా ట్రైసైక్లాజోల్ 75 WP పిచికారీ చేయండి. యూరియా వాడకాన్ని తగ్గించి పొలంలోని నీటిని తీసివేయండి.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'గుంటూరు డెల్టా వ్యవసాయ ప్రాంతం'
  },

  id: {
    id: 'diag-demo-01',
    crop: 'Padi (Rice)',
    diseaseName: 'Penyakit Blas Daun & Leher Padi (Pyricularia oryzae)',
    localName: 'Penyakit Blas / Kresek Blas / Patah Leher',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'Bercak berbentuk belah ketupat dengan pusat abu-abu dan tepi cokelat kemerahan',
      'Ujung daun mengering dan spora menyebar cepat antar anakan',
      'Pangkal malai menghitam menyebabkan bulir padi hampa (blas leher)'
    ],
    organicRemedies: [
      {
        title: 'Ekstrak Daun Mimba & Bawang Putih',
        recipe: 'Tumbuk 1kg daun mimba segar dan 200g bawang putih dalam 5L air. Fermentasi 48 jam. Encerkan 1:10 dan tambahkan 5ml sabun cair sebelum disemprotkan pagi hari.',
        prepTime: '48 jam fermentasi',
        costLevel: 'free',
        materials: ['Daun Mimba Segar', 'Bawang Putih', 'Sabun Nabati', 'Air Bersih']
      },
      {
        title: 'Inokulan Agens Hayati Trichoderma Harzianum',
        recipe: 'Campurkan 50g serbuk Trichoderma per tangki 15L dengan air rendaman kompos. Semprotkan pada pangkal batang untuk menghentikan miselium jamur.',
        prepTime: '20 menit',
        costLevel: 'low',
        materials: ['Serbuk Trichoderma', 'Air Kompos', 'Air Bersih']
      },
      {
        title: 'Taburan Abu Kayu Kering Bersilikon',
        recipe: 'Taburkan abu kayu kering yang telah diayak (50kg/ha) di atas daun basah berembun di pagi hari. Silika memperkuat kutikula dinding sel daun.',
        prepTime: 'Langsung',
        costLevel: 'free',
        materials: ['Abu Kayu Kering Ayak']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'Trisiklazol 75% WP',
        tradeNames: ['Beam 75 WP', 'Baan', 'Blastin'],
        dosage: '0.6g per 1 Liter air (120g / ha dalam tangki 200L)',
        safetyIntervalDays: 21,
        precautions: 'Aplikasikan saat gejala awal bercak muncul. Gunakan masker dan sarung tangan. Hindari menyemprot saat hujan.'
      },
      {
        activeIngredient: 'Azoksistrobin 18.2% + Difenokonazol 11.4% SC',
        tradeNames: ['Amistar Top', 'Custodia'],
        dosage: '1.0 ml per 1 Liter air',
        safetyIntervalDays: 14,
        precautions: 'Fungisida sistemik kuratif. Rotasi dengan fungisida non-strobilurin untuk mencegah resistensi.'
      }
    ],
    preventativeMeasures: [
      'Hindari pemupukan urea/nitrogen berlebihan menjelang fase bunting.',
      'Lakukan pengeringan berkala (intermittent drainage) agar sawah tidak terlalu lembap.',
      'Gunakan sistem tanam jajar legowo (2:1) untuk meningkatkan sirkulasi udara.',
      'Gunakan varietas tahan blas seperti Inpari 32 atau Ciherang Blas.'
    ],
    urgencyLevel: 'Tindakan darurat diperlukan dalam waktu 24-48 jam',
    estimatedYieldLossPercent: 45,
    audioScript: 'Perhatian petani: Ditemukan gejala penyakit blas padi tingkat kritis pada daun. Segera lakukan penyemprotan ekstrak daun mimba atau fungisida trisiklazol 75 WP. Kurangi pupuk urea berlebih dan atur drainase air sawah agar tidak terlalu lembab.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'Cekungan Pertanian Subang & Karawang'
  },

  es: {
    id: 'diag-demo-01',
    crop: 'Arroz (Paddy)',
    diseaseName: 'Piricularia o Tizón del Arroz (Pyricularia oryzae)',
    localName: 'Piricularia / Quemazón del Arroz / Añublo',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'Lesiones en forma de huso o rombo con centro grisáceo y bordes pardo-rojizos',
      'Secado prematuro de las puntas foliares y rápida propagación de esporas',
      'Necrosis en el cuello de la panícula causando espigas vanas (añublo del cuello)'
    ],
    organicRemedies: [
      {
        title: 'Bioextracto Fermentado de Neem y Ajo',
        recipe: 'Machacar 1 kg de hojas frescas de neem y 200 g de ajo en 5 L de agua. Fermentar durante 48 horas. Diluir al 1:10 y aplicar en horas tempranas con jabón potásico.',
        prepTime: '48 horas de fermentación',
        costLevel: 'free',
        materials: ['Hojas de Neem', 'Dientes de Ajo', 'Jabón Potásico', 'Agua']
      },
      {
        title: 'Inoculante Biológico Trichoderma Harzianum',
        recipe: 'Mezclar 50 g de Trichoderma por mochila de 15 L con té de compost. Pulverizar en la base de los tallos para colonizar la rizosfera y frenar el micelio.',
        prepTime: '20 minutos',
        costLevel: 'low',
        materials: ['Polvo de Trichoderma', 'Té de Compost', 'Agua Limpia']
      },
      {
        title: 'Espolvoreo Foliar de Ceniza de Madera Rica en Sílice',
        recipe: 'Espolvorear ceniza tamizada de madera dura (50 kg/ha) sobre las hojas húmedas con rocío matutino. El silicio refuerza la cutícula vegetal.',
        prepTime: 'Inmediato',
        costLevel: 'free',
        materials: ['Ceniza Tamizada de Madera Dura']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'Triciclazol 75% WP',
        tradeNames: ['Beam 75 WP', 'Baan', 'Blastin'],
        dosage: '0.6 g por 1 Litro de agua (120 g / ha en 200 L)',
        safetyIntervalDays: 21,
        precautions: 'Aplicar ante los primeros síntomas de mancha foliar. Usar equipo de protección y mascarilla. No aplicar con lluvia inminente.'
      },
      {
        activeIngredient: 'Azoxistrobina 18.2% + Difenoconazol 11.4% SC',
        tradeNames: ['Amistar Top', 'Custodia'],
        dosage: '1.0 ml por 1 Litro de agua',
        safetyIntervalDays: 14,
        precautions: 'Fungicida sistémico curativo. Alternar con fungicidas de distinto modo de acción para evitar resistencia.'
      }
    ],
    preventativeMeasures: [
      'Evitar la fertilización nitrogenada tardía excesiva que debilita el tejido celular.',
      'Realizar drenajes intermitentes del lote en períodos de alta humedad relativa.',
      'Mantener distancias de siembra adecuadas para favorecer la aireación del dosel.',
      'Utilizar semillas certificadas con resistencia genética a piricularia.'
    ],
    urgencyLevel: 'Acción urgente requerida dentro de las 24 a 48 horas',
    estimatedYieldLossPercent: 45,
    audioScript: 'Atención agricultor: Se detectaron síntomas críticos de piricularia en las hojas de arroz. Aplique de inmediato extracto de neem o triciclazol al 75 WP. Reduzca la fertilización con urea y drene el exceso de agua para bajar la humedad.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'Cuenca Arrocera del Valle'
  },

  bn: {
    id: 'diag-demo-01',
    crop: 'ধান (Rice)',
    diseaseName: 'ধানের ব্লাস্ট রোগ (Pyricularia oryzae)',
    localName: 'পাতা ব্লাস্ট / বাদামী দাগ / গলার ব্লাস্ট',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'পাতায় চোখের মতো বা নৌকাকৃতির ছাই রঙের কেন্দ্রযুক্ত বাদামী দাগ',
      'পাতার ডগা শুকিয়ে যাওয়া এবং দ্রুত ছত্রাক বিস্তার',
      'শীষের গোড়া কালো হয়ে চিটা হয়ে যাওয়া (নেক ব্লাস্ট)'
    ],
    organicRemedies: [
      {
        title: 'নিম পাতা ও রসুনের জৈব স্প্রে',
        recipe: '১ কেজি কাঁচা নিম পাতা এবং ২০০ গ্রাম রসুন ৫ লিটার পানিতে পিষে ৪৮ ঘণ্টা ভিজিয়ে রাখুন। ১:১০ অনুপাতে পানি মিশিয়ে সকালে স্প্রে করুন।',
        prepTime: '৪৮ ঘণ্টা গাঁজন',
        costLevel: 'free',
        materials: ['কাঁচা নিম পাতা', 'রসুন', 'জৈব সাবান', 'পানি']
      },
      {
        title: 'ট্রাইকোডার্মা বায়ো-ফাংগিসাইড',
        recipe: '১৫ লিটার স্প্রেয়ার ট্যাংকে ৫০ গ্রাম ট্রাইকোডার্মা পাউডার মিশিয়ে গাছের গোড়ায় স্প্রে করুন।',
        prepTime: '২০ মিনিট',
        costLevel: 'low',
        materials: ['ট্রাইকোডার্মা পাউডার', 'কম্পোস্ট পানি', 'পরিষ্কার পানি']
      },
      {
        title: 'কাঠের ছাই ছিটানো',
        recipe: 'সকালের শিশির ভেজা পাতায় শুকনো চালিত কাঠের ছাই (বিঘায় ১০-১৫ কেজি) ছিটিয়ে দিন। সিলিকা পাতার রোগ প্রতিরোধ ক্ষমতা বাড়ায়।',
        prepTime: 'তাৎক্ষণিক',
        costLevel: 'free',
        materials: ['শুকনো কাঠের ছাই']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'ট্রাইসাইক্লাজল ৭৫% ডব্লিউপি (Tricyclazole)',
        tradeNames: ['ট্রুপার ৭৫ ডব্লিউপি', 'বিম', 'ব্লাস্টিন'],
        dosage: 'প্রতি লিটার পানিতে ০.৬ গ্রাম (বিঘায় ৮০-১০০ গ্রাম)',
        safetyIntervalDays: 21,
        precautions: 'লক্ষণ দেখা মাত্রই স্প্রে করুন। মাস্ক ও গ্লাভস ব্যবহার করুন।'
      },
      {
        activeIngredient: 'অ্যাজোক্সিস্ট্রোবিন + ডাইফেনোকোনাজল',
        tradeNames: ['অ্যামিস্টার টপ', 'স্কোর'],
        dosage: 'প্রতি লিটার পানিতে ১.০ মিলি',
        safetyIntervalDays: 14,
        precautions: 'রোগ নিরাময়কারী। নিয়ম মেনে স্প্রে করুন।'
      }
    ],
    preventativeMeasures: [
      'অতিরিক্ত ইউরিয়া সার প্রয়োগ পরিহার করুন।',
      'জমিতে সার্বক্ষণিক পানি জমিয়ে না রেখে পর্যায়ক্রমে শুকান।',
      'বাতাস চলাচলের জন্য সঠিক দূরত্বে চারা রোপণ করুন।',
      'ব্লাস্ট প্রতিরোধী ধান জাত (যেমন ব্রি ধান ২৮ এর বদলে ব্রি ধান ৮৯, ৯২) ব্যবহার করুন।'
    ],
    urgencyLevel: '২৪ থেকে ৪৮ ঘণ্টার মধ্যে দ্রুত ব্যবস্থা নিন',
    estimatedYieldLossPercent: 45,
    audioScript: 'কৃষক ভাইদের দৃষ্টি আকর্ষণ: আপনার ধানের জমিতে ব্লাস্ট রোগের লক্ষণ দেখা গেছে। অবিলম্বে নিম পাতার নির্যাস অথবা ট্রাইসাইক্লাজল ৭৫ ডব্লিউপি স্প্রে করুন। ইউরিয়া সারের প্রয়োগ কমান এবং জমি থেকে অতিরিক্ত পানি নিষ্কাশন করুন।',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'বগুড়া ও রাজশাহী শস্য অঞ্চল'
  },

  sw: {
    id: 'diag-demo-01',
    crop: 'Mpunga (Rice)',
    diseaseName: 'Ugonjwa wa Ukungu wa Mpunga (Rice Blast)',
    localName: 'Ukungu wa Mpunga / Bakteriatikua',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'Madoa ya umbo la almasi yenye katikati ya kijivu na kingo za hudhurungi-nyekundu kwenye majani',
      'Kukauka kwa ncha za majani na kuenea kwa haraka kwa spora za fangasi',
      'Kushambuliwa kwa shingo ya shuke na kusababisha nafaka tupu (neck blast)'
    ],
    organicRemedies: [
      {
        title: 'Mwarobaini na Kitunguu Saumu Asilia',
        recipe: 'Ponda kilo 1 ya majani mabichi ya mwarobaini na gramu 200 za vitunguu saumu kwenye lita 5 za maji. Acha ikae kwa saa 48. Changanya 1:10 na maji safi na upulize asubuhi.',
        prepTime: 'Saa 48 za kuchacha',
        costLevel: 'free',
        materials: ['Majani ya Mwarobaini', 'Kitunguu Saumu', 'Sabuni ya Asili', 'Maji Safi']
      },
      {
        title: 'Kuvu Rafiki ya Trichoderma Harzianum',
        recipe: 'Changanya gramu 50 za unga wa Trichoderma kwenye bomba la lita 15 na upulize kwenye mashina ya mpunga.',
        prepTime: 'Dakika 20',
        costLevel: 'low',
        materials: ['Unga wa Trichoderma', 'Mboji Safi', 'Maji']
      },
      {
        title: 'Kupuliza Jivu la Miti Kavu',
        recipe: 'Nyunyiza jivu safi la miti (kilo 50 kwa hekta) kwenye majani yenye umande asubuhi. Silika inaimarisha kuta za majani dhidi ya fangasi.',
        prepTime: 'Mara Moja',
        costLevel: 'free',
        materials: ['Jivu Safi la Miti']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'Tricyclazole 75% WP',
        tradeNames: ['Beam 75 WP', 'Baan'],
        dosage: 'Gramu 0.6 kwa lita 1 ya maji',
        safetyIntervalDays: 21,
        precautions: 'Puliza mapema unapoona madoa ya mwanzo. Vaa barakoa na glavu za kinga.'
      },
      {
        activeIngredient: 'Azoxystrobin + Difenoconazole',
        tradeNames: ['Amistar Top'],
        dosage: 'Mili lita 1.0 kwa lita 1 ya maji',
        safetyIntervalDays: 14,
        precautions: 'Dawa ya kuua ukungu. Zingatia muda wa usalama kabla ya mavuno.'
      }
    ],
    preventativeMeasures: [
      'Punguza matumizi ya mbolea ya urea (naitrojeni) inayozidisha ulaini wa majani.',
      'Fungua mitaro ili kupunguza unyevu mwingi shambani.',
      'Panda kwa nafasi nzuri ili kuruhusu hewa kupita.',
      'Tumia mbegu zilizoidhinishwa zinazostahimili ukungu.'
    ],
    urgencyLevel: 'Hatua za haraka zinahitajika ndani ya saa 24-48',
    estimatedYieldLossPercent: 45,
    audioScript: 'Tahadhari kwa mkulima: Ugonjwa hatari wa ukungu wa mpunga umegunduliwa kwenye majani. Puliza haraka dawa ya asili ya mwarobaini au dawa ya Tricyclazole 75 WP. Punguza mbolea ya urea na punguza maji yaliyotuama shambani.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'Bondefu la Kilimo la Eldoret & Uasin Gishu'
  },

  ta: {
    id: 'diag-demo-01',
    crop: 'நெல் (Paddy)',
    diseaseName: 'நெல் குலை நோய் (Rice Blast)',
    localName: 'குலை நோய் / இலைக்கருகல் / கழுத்தறுப்பான் நோய்',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'இலைகளில் கண் அல்லது படகு வடிவ சாம்பல் நிற மையமும் சிவப்பு-பழுப்பு ஓரங்களும் கொண்ட புள்ளிகள்',
      'இலை நுனிகள் காய்ந்து தூர்களில் வேகமாக நோய் பரவுதல்',
      'கதிர் கழுத்துப் பகுதி கருப்பாகி பதராக மாறும் அபாயம் (கழுத்தறுப்பான்)'
    ],
    organicRemedies: [
      {
        title: 'வேப்பிலை மற்றும் பூண்டு இயற்கை கரைசல்',
        recipe: '1 கிலோ வேப்பிலை மற்றும் 200 கிராம் பூண்டை 5 லிட்டர் நீரில் அரைத்து 48 மணி நேரம் ஊற வைக்கவும். 1:10 விகிதத்தில் நீர் கலந்து காலை வேளையில் தெளிக்கவும்.',
        prepTime: '48 மணி நேரம் நொதித்தல்',
        costLevel: 'free',
        materials: ['வேப்பிலை', 'பூண்டு', 'இயற்கை சோப்', 'நீர்']
      },
      {
        title: 'ட்ரைக்கோடெர்மா விரிடி உயிரியல் பூஞ்சை',
        recipe: '15 லிட்டர் தெளிப்பானில் 50 கிராம் ட்ரைக்கோடெர்மா தூளை மக்கிய உரம் கலந்த நீரில் கலந்து தூர்களின் அடிப்பகுதியில் தெளிக்கவும்.',
        prepTime: '20 நிமிடங்கள்',
        costLevel: 'low',
        materials: ['ட்ரைக்கோடெர்மா தூள்', 'மக்கிய உரம் நீர்', 'சுத்தமான நீர்']
      },
      {
        title: 'மரச்சாம்பல் தூவுதல்',
        recipe: 'அதிகாலை பனி உள்ள போது சலித்த மரச்சாம்பலை (ஏக்கருக்கு 20 கிலோ) இலைகளில் தூவவும். சிலிக்கா நோய் தொற்றை தடுக்கும்.',
        prepTime: 'உடனடி',
        costLevel: 'free',
        materials: ['சலித்த மரச்சாம்பல்']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'ட்ரைசைக்ளசோல் 75% WP (Tricyclazole)',
        tradeNames: ['பீம் 75 WP', 'பான்', 'பிளாஸ்டின்'],
        dosage: '1 லிட்டர் தண்ணீருக்கு 0.6 கிராம் (ஏக்கருக்கு 120 கிராம்)',
        safetyIntervalDays: 21,
        precautions: 'புள்ளிகள் தோன்றியவுடன் தெளிக்கவும். முகக்கவசம் மற்றும் கையுறைகள் அணியவும்.'
      },
      {
        activeIngredient: 'அசோக்சிஸ்ட்ரோபின் + டைபினோகோனசோல்',
        tradeNames: ['அமிஸ்டார் டாப்', 'ஸ்கோர்'],
        dosage: '1 லிட்டர் தண்ணீருக்கு 1.0 மி.லி',
        safetyIntervalDays: 14,
        precautions: 'முறையான பூஞ்சைக்கொல்லி. நோய் எதிர்ப்புத்தன்மையை தடுக்க மாற்றி தெளிக்கவும்.'
      }
    ],
    preventativeMeasures: [
      'அதிகப்படியான யூரியா உரமிடுவதைத் தவிர்க்கவும்.',
      'வயலில் எப்போதும் நீர் தேங்காமல் அவ்வப்போது நீர் வடித்து உலர வைக்கவும்.',
      'பயிர்களுக்கிடையே சரியான இடைவெளி (20x20 செ.மீ) விட்டு காற்று புகும்படி நடவு செய்யவும்.',
      'குலை நோய் எதிர்ப்புத் திறன் கொண்ட ரகங்களை நடவு செய்யவும்.'
    ],
    urgencyLevel: '24 முதல் 48 மணி நேரத்திற்குள் உடனடி நடவடிக்கை தேவை',
    estimatedYieldLossPercent: 45,
    audioScript: 'விவசாயிகளுக்கு அவசர எச்சரிக்கை: உங்கள் நெற்பயிரில் குலை நோயின் தீவிர அறிகுறிகள் தென்படுகின்றன. உடனடியாக வேப்பிலை கரைசல் அல்லது ட்ரைசைக்ளசோல் 75 WP தெளிக்கவும். யூரியா அளவைக் குறைத்து வயலில் உள்ள அதிகப்படியான நீரை வடிக்கவும்.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'காவிரி டெல்டா பாசனப் பகுதி'
  },

  mr: {
    id: 'diag-demo-01',
    crop: 'भात (Rice / Paddy)',
    diseaseName: 'भातावरील करपा रोग (Rice Blast)',
    localName: 'करपा रोग / पान करपा / मानमोडी',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'पानांवर डोळ्याच्या किंवा नावेच्या आकाराचे करडे केंद्र असलेले तपकिरी-लाल ठिपके',
      'पानांची टोके सुकणे आणि फुटव्यांवर वेगाने बुरशीचा प्रसार',
      'लोंबीची मान काळी पडून दाणे पोचट राहण्याचा धोका (मानमोडी करपा)'
    ],
    organicRemedies: [
      {
        title: 'कडुलिंब पाने आणि लसूण जैविक अर्क',
        recipe: '१ किलो ताजी कडुलिंबाची पाने आणि २०० ग्रॅम लसूण ५ लिटर पाण्यात कुटून ४८ तास भिजवा. १:१० प्रमाणात पाणी मिसळून सकाळी फवारणी करा.',
        prepTime: '४८ तास आंबवणे',
        costLevel: 'free',
        materials: ['कडुलिंब पाने', 'लसूण', 'नैसर्गिक साबण', 'पाणी']
      },
      {
        title: 'ट्रायकोडर्मा बुरशीनाशक जैविक संवर्धक',
        recipe: '१५ लिटर पंपासाठी ५० ग्रॅम ट्रायकोडर्मा पावडर शेणखताच्या पाण्यात मिसळून रोपांच्या मुळाशी फवारा.',
        prepTime: '२० मिनिटे',
        costLevel: 'low',
        materials: ['ट्रायकोडर्मा पावडर', 'खताचे पाणी', 'स्वच्छ पाणी']
      },
      {
        title: 'लाकडाची बारीक राख धुरळणे',
        recipe: 'सकाळी दव असताना चाळलेली कोरडी लाकडाची राख (एकरला २० किलो) पानांवर टाका. सिलिकॉनमुळे पानांची रोगप्रतिकारक शक्ती वाढते.',
        prepTime: 'तात्काळ',
        costLevel: 'free',
        materials: ['चाळलेली लाकडाची राख']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'ट्रायसायक्लाझोल ७५% डब्ल्यूपी (Tricyclazole)',
        tradeNames: ['बीम ७५ WP', 'बान', 'ब्लास्टिन'],
        dosage: '०.६ ग्रॅम प्रति १ लिटर पाणी (१२० ग्रॅम प्रति एकर)',
        safetyIntervalDays: 21,
        precautions: 'सुरुवातीची लक्षणे दिसताच फवारा. तोंडाला मास्क व हातमोजे वापरा.'
      },
      {
        activeIngredient: 'अझॉक्सीस्ट्रॉबिन + डायफेनोकोनाझोल',
        tradeNames: ['अमिस्टार टॉप', 'कस्टोडिया'],
        dosage: '१.० मिली प्रति १ लिटर पाणी',
        safetyIntervalDays: 14,
        precautions: 'प्रभावी बुरशीनाशक. कीड प्रतिकार टाळण्यासाठी आलटून पालटून फवारा.'
      }
    ],
    preventativeMeasures: [
      'युरिया (नायट्रोजन) खताचा अतिरिक्त वापर टाळा.',
      'शेतात सतत पाणी साचून न ठेवता अधूनमधून पाणी काढून जमीन कोरडी करा.',
      'हवा खेळती राहण्यासाठी योग्य अंतरावर (२०x२० सेमी) लावड करा.',
      'करपा रोगास प्रतिकारक भात वाण वापरा.'
    ],
    urgencyLevel: '२४ ते ४८ तासांच्या आत तात्काळ उपाययोजना आवश्यक',
    estimatedYieldLossPercent: 45,
    audioScript: 'शेतकरी बांधवांनो लक्ष द्या: तुमच्या भात पिकावर करपा रोगाची गंभीर लक्षणे आढळली आहेत. त्वरित कडुलिंब अर्क किंवा ट्रायसायक्लाझोल ७५ डब्ल्यूपी ची फवारणी करा. युरिया खताचा वापर कमी करा आणि शेतातील अतिरिक्त पाणी काढून टाका.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'कोकण व पश्चिम महाराष्ट्र भात पट्टा'
  },

  vi: {
    id: 'diag-demo-01',
    crop: 'Lúa (Rice / Padi)',
    diseaseName: 'Bệnh Đạo Ôn Lúa (Pyricularia oryzae)',
    localName: 'Bệnh Đạo Ôn Lá / Đạo Ôn Cổ Bông / Cháy Lá',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'Vết bệnh hình thoi với tâm xám trắng và viền nâu đỏ trên phiến lá',
      'Chóp lá khô rụi và bào tử nấm lây lan nhanh chóng giữa các dảnh lúa',
      'Cổ bông chuyển màu nâu đen làm hạt lúa bị lép lửng hoàn toàn (đạo ôn cổ bông)'
    ],
    organicRemedies: [
      {
        title: 'Chế Phẩm Dịch Chiết Lá Neem & Tỏi',
        recipe: 'Nghiền nát 1kg lá neem tươi và 200g tỏi trong 5L nước. Ngâm ủ 48 giờ. Pha loãng tỷ lệ 1:10 và phun ướt đều vào sáng sớm.',
        prepTime: '48 giờ ủ lên men',
        costLevel: 'free',
        materials: ['Lá Neem Tươi', 'Tỏi', 'Nước Xà Phòng Sinh Học', 'Nước Sạch']
      },
      {
        title: 'Chế Phẩm Nấm Đối Kháng Trichoderma',
        recipe: 'Pha 50g bột nấm Trichoderma cho bình 16L với nước ngâm phân trùn/compost. Phun gốc dảnh để ức chế khuẩn ty nấm đạo ôn.',
        prepTime: '20 phút',
        costLevel: 'low',
        materials: ['Bột Trichoderma', 'Nước Ngâm Compost', 'Nước Sạch']
      },
      {
        title: 'Rải Tro Bếp Bổ Sung Silic Kháng Bệnh',
        recipe: 'Rải tro rơm rạ hoặc tro bếp khô mịn (50kg/ha) lên lá ướt sương buổi sáng. Silic giúp làm dày vách tế bào biểu bì lá.',
        prepTime: 'Ngay Lập Tức',
        costLevel: 'free',
        materials: ['Tro Bếp Mịn Khô']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'Tricyclazole 75% WP',
        tradeNames: ['Beam 75 WP', 'Flash 75 WP', 'Blastin'],
        dosage: '0.6g trên 1 Lít nước (khoảng 20-25g cho bình 16-25L)',
        safetyIntervalDays: 21,
        precautions: 'Phun khi vết bệnh vừa chớm xuất hiện. Mang khẩu trang và găng tay. Không phun khi trời sắp mưa.'
      },
      {
        activeIngredient: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC',
        tradeNames: ['Amistar Top 325SC', 'Custodia'],
        dosage: '1.0 ml trên 1 Lít nước',
        safetyIntervalDays: 14,
        precautions: 'Thuốc trừ nấm nội hấp lưu dẫn. Luân phiên thuốc để tránh kháng thuốc.'
      }
    ],
    preventativeMeasures: [
      'Ngưng bón phân đạm (Ure) khi ruộng xuất hiện vết bệnh.',
      'Rút cạn nước trong ruộng 2-3 ngày để giảm độ ẩm tiểu khí hậu.',
      'Sạ thưa hoặc cấy hàng cách hàng 20cm x 20cm giúp ruộng thông thoáng.',
      'Sử dụng giống lúa kháng đạo ôn (như Đài Thơm 8, OM5451, OM18).'
    ],
    urgencyLevel: 'Cần can thiệp khẩn cấp trong vòng 24-48 giờ',
    estimatedYieldLossPercent: 45,
    audioScript: 'Cảnh báo bà con nông dân: Ruộng lúa đang bị nhiễm bệnh đạo ôn ở mức độ nguy cấp. Hãy ngưng ngay phân đạm và phun thuốc Tricyclazole 75 WP hoặc chế phẩm sinh học lá neem. Rút bớt nước ruộng để giảm ẩm ướt lây lan bào tử.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'Vùng Trọng Điểm Lúa Đồng Bằng Sông Cửu Long'
  },

  fr: {
    id: 'diag-demo-01',
    crop: 'Riz (Paddy)',
    diseaseName: 'Pyriculariose du Riz (Pyricularia oryzae)',
    localName: 'Pyriculariose foliaire / Brûlure du riz',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'Lésions en forme de losange ou de fuseau avec centre gris et bordures brun-rouge',
      'Dessèchement rapide de la pointe des feuilles et propagation rapide des spores',
      'Nécrose du nœud de la panicule entraînant des grains vides (pyriculariose du cou)'
    ],
    organicRemedies: [
      {
        title: 'Purin Fermenté de Neem & Ail',
        recipe: 'Broyer 1 kg de feuilles de neem fraîches et 200 g d’ail dans 5 L d’eau. Laisser fermenter 48 h. Diluer à 1:10 et pulvériser tôt le matin avec un savon bio.',
        prepTime: '48 heures de fermentation',
        costLevel: 'free',
        materials: ['Feuilles de Neem', 'Gousses d’Ail', 'Savon Noir Bio', 'Eau']
      },
      {
        title: 'Inoculant Biologique Trichoderma Harzianum',
        recipe: 'Mélanger 50 g de Trichoderma par pulvérisateur de 15 L avec du jus de compost. Pulvériser à la base des tiges pour concurrencer le mycélium.',
        prepTime: '20 minutes',
        costLevel: 'low',
        materials: ['Poudre de Trichoderma', 'Jus de Compost', 'Eau Propre']
      },
      {
        title: 'Poudrage à la Cendre de Bois Riche en Silice',
        recipe: 'Saupoudrer de la cendre de bois tamisée (50 kg/ha) sur les feuilles humides de rosée le matin. La silice renforce les parois cellulaires.',
        prepTime: 'Immédiat',
        costLevel: 'free',
        materials: ['Cendre de Bois Tamisée']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'Tricyclazole 75% WP',
        tradeNames: ['Beam 75 WP', 'Baan', 'Blastin'],
        dosage: '0,6 g par litre d’eau (120 g/ha dans 200 L)',
        safetyIntervalDays: 21,
        precautions: 'Appliquer dès l’apparition des premières taches. Porter un masque et des gants. Éviter de pulvériser par temps pluvieux.'
      },
      {
        activeIngredient: 'Azoxystrobine 18,2% + Difénoconazole 11,4% SC',
        tradeNames: ['Amistar Top', 'Custodia'],
        dosage: '1,0 ml par litre d’eau',
        safetyIntervalDays: 14,
        precautions: 'Fongicide systémique. Alterner avec d’autres familles chimiques pour éviter les résistances.'
      }
    ],
    preventativeMeasures: [
      'Éviter tout excès d’engrais azoté (urée) qui fragilise les tissus foliaires.',
      'Pratiquer un drainage intermittent de la rizière pour réduire l’humidité de l’air.',
      'Espacer les plants (au moins 20x20 cm) pour améliorer la circulation de l’air.',
      'Planter des semences certifiées résistantes à la pyriculariose.'
    ],
    urgencyLevel: 'Intervention d’urgence requise sous 24 à 48 heures',
    estimatedYieldLossPercent: 45,
    audioScript: 'Alerte agriculteur : Symptômes critiques de pyriculariose détectés sur vos plants de riz. Appliquez immédiatement un extrait de neem ou du tricyclazole 75 WP. Réduisez les apports d’urée et drainez la parcelle pour baisser l’humidité.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'Bassin Rizicole Régional'
  },

  pt: {
    id: 'diag-demo-01',
    crop: 'Arroz (Paddy)',
    diseaseName: 'Brusone do Arroz (Pyricularia oryzae)',
    localName: 'Brusone / Queima das Folhas / Brusone do Colo',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'Lesões em forma de losango/fuso com centro cinza e bordas castanho-avermelhadas',
      'Secamento apical das folhas e rápida dispersão de esporos entre os perfilhos',
      'Necrose no colo da panícula impedindo o enchimento dos grãos (brusone do colo)'
    ],
    organicRemedies: [
      {
        title: 'Calda Fermentada de Folhas de Nim & Alho',
        recipe: 'Macerar 1 kg de folhas frescas de nim e 200 g de alho em 5 L de água. Fermentar por 48 horas. Diluir a 1:10 e pulverizar nas primeiras horas da manhã com sabão neutro.',
        prepTime: '48 horas de fermentação',
        costLevel: 'free',
        materials: ['Folhas Frescas de Nim', 'Dentes de Alho', 'Sabão Vegetal', 'Água']
      },
      {
        title: 'Inoculante Biológico Trichoderma Harzianum',
        recipe: 'Misturar 50 g de pó de Trichoderma em 15 L de água com chorume orgânico. Pulverizar na base do colo da planta.',
        prepTime: '20 minutos',
        costLevel: 'low',
        materials: ['Pó de Trichoderma', 'Chá de Composto', 'Água Limpa']
      },
      {
        title: 'Polvilhamento de Cinza de Madeira Rica em Sílica',
        recipe: 'Polvilhar cinza de madeira peneirada (50 kg/ha) sobre as folhas orvalhadas pela manhã. O silício reforça a parede celular contra o fungo.',
        prepTime: 'Imediato',
        costLevel: 'free',
        materials: ['Cinza Peneirada de Madeira']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'Triciclazol 75% WP',
        tradeNames: ['Beam 75 WP', 'Baan', 'Blastin'],
        dosage: '0,6 g por litro de água (120 g/ha em 200 L de calda)',
        safetyIntervalDays: 21,
        precautions: 'Aplicar no início das manchas. Usar EPI completo com máscara e luvas. Não pulverizar sob chuva.'
      },
      {
        activeIngredient: 'Azoxistrobina 18,2% + Difenoconazol 11,4% SC',
        tradeNames: ['Amistar Top', 'Custodia'],
        dosage: '1,0 ml por litro de água',
        safetyIntervalDays: 14,
        precautions: 'Fungicida sistêmico curativo. Fazer rotação de ativos para evitar resistência.'
      }
    ],
    preventativeMeasures: [
      'Evitar o excesso de adubação nitrogenada (ureia) que amolece a cutícula foliar.',
      'Fazer drenagem intermitente dos tabuleiros para baixar a umidade relativa.',
      'Garantir espaçamento adequado (20x20 cm) para maior aeração.',
      'Utilizar sementes certificadas de cultivares tolerantes à brusone.'
    ],
    urgencyLevel: 'Ação emergencial necessária em 24 a 48 horas',
    estimatedYieldLossPercent: 45,
    audioScript: 'Atenção produtor: Detectamos sintomas graves de brusone nas folhas do arroz. Aplique imediatamente extrato de nim ou fungicida Triciclazol 75 WP. Reduza a ureia e drene a água acumulada para reduzir a umidade no campo.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'Polo Agropecuário de Várzea e Arroz'
  },

  ar: {
    id: 'diag-demo-01',
    crop: 'الأرز (Paddy)',
    diseaseName: 'مرض لفحة الأرز الفطري (Pyricularia oryzae)',
    localName: 'لفحة الأرز / اللفحة المغزلية / لفحة عنق السنبلة',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    pathogenType: 'fungal',
    confidence: 94,
    severity: 'critical',
    symptoms: [
      'بقع مغزلية الشكل على الأوراق بمركز رمادي وحواف بنية محمرة',
      'جفاف قمم الأوراق وانتشار سريع للأبواغ بين الإشطاءات',
      'اسوداد عنق السنبلة مما يؤدي إلى حبوب فارغة تماماً (لفحة العنق)'
    ],
    organicRemedies: [
      {
        title: 'مستخلص أوراق النيم والثوم العضوي المخمر',
        recipe: 'سحق 1 كجم من أوراق النيم الطازجة و 200 جم ثوم في 5 لتر ماء. التخمير لمدة 48 ساعة. يخفف بنسبة 1:10 ويرش في الصباح الباكر مع صابون زراعي.',
        prepTime: '48 ساعة تخمير',
        costLevel: 'free',
        materials: ['أوراق نيم طازجة', 'فصوص ثوم', 'صابون حيوي', 'ماء نقي']
      },
      {
        title: 'المكافحة الحيوية بفطر التريكوديرما (Trichoderma)',
        recipe: 'خلط 50 جم من مسحوق التريكوديرما لكل 15 لتر ماء مع منقوع الكومبوست، والرش عند قاعدة السيقان لمحاصرة فطر اللفحة.',
        prepTime: '20 دقيقة',
        costLevel: 'low',
        materials: ['مسحوق تريكوديرما', 'شاي الكومبوست', 'ماء']
      },
      {
        title: 'التعفير برماد الخشب الغني بالسيليكا',
        recipe: 'نثر رماد الخشب المنخول (50 كجم/هكتار) فوق الأوراق الرطبة بالندى صباحاً. السيليكا تقوي جدران الخلايا النباتية ضد اختراق الفطر.',
        prepTime: 'فوري',
        costLevel: 'free',
        materials: ['رماد خشب جاف ومنخول']
      }
    ],
    chemicalRemedies: [
      {
        activeIngredient: 'تريسيكلازول 75% مسحوق قابل للبلل (Tricyclazole)',
        tradeNames: ['بيم 75 WP', 'بان', 'بلاستين'],
        dosage: '0.6 جم لكل 1 لتر ماء (120 جم / هكتار في 200 لتر)',
        safetyIntervalDays: 21,
        precautions: 'الرش عند ظهور أولى البقع. ارتداء قناع وقفازات واقية وتجنب الرش أثناء المطر.'
      },
      {
        activeIngredient: 'أزوكسيستروبين + ديفينوكونازول',
        tradeNames: ['أميستار توب', 'كوستوديا'],
        dosage: '1.0 مل لكل 1 لتر ماء',
        safetyIntervalDays: 14,
        precautions: 'مبيد جهازي علاجي. التناوب مع مبيدات أخرى لمنع ظهور سلالات مقاومة.'
      }
    ],
    preventativeMeasures: [
      'تجنب الإفراط في التسميد النيتروجيني (اليوريا) الذي يزيد من طراوة الأنسجة وسرعة إصابتها.',
      'تجفيف الحقل بشكل متقطع لتقليل الرطوبة الزائدة.',
      'زراعة الشتلات بمسافات مناسبة (20x20 سم) لضمان التهوية الجيدة.',
      'استخدام أصناف بذور معتمدة ومقاومة لمرض اللفحة.'
    ],
    urgencyLevel: 'تدخل عاجل مطلوب خلال 24 إلى 48 ساعة',
    estimatedYieldLossPercent: 45,
    audioScript: 'تنبيه للمزارع: تم رصد أعراض حرجة لمرض لفحة الأرز على أوراق المحصول. سارع فوراً بالرش بمستخلص أوراق النيم أو مبيد تريسيكلازول 75 WP. خفف التسميد باليوريا وقم بتصريف المياه الزائدة لخفض الرطوبة.',
    analyzedAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=600&q=80',
    regionContext: 'حوض الدلتا الزراعي'
  }
};

export function getLocalizedDemoDiagnosis(language: SupportedLanguage): DiagnosisResult {
  return LOCALIZED_DEMO_DIAGNOSES[language] || LOCALIZED_DEMO_DIAGNOSES.en;
}
