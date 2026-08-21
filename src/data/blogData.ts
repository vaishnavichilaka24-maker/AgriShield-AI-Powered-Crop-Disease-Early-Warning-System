import { BlogPost } from '../types';

export const BLOG_CATEGORIES = [
  'All',
  'Organic Recipes',
  'Disease Prevention',
  'Soil Health',
  'Pest Control',
  'Chemical Safety',
  'Farmer Guide'
] as const;

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-neem-masterclass',
    title: 'Homemade Organic Neem & Garlic Bio-Spray: 48-Hour Fermentation Guide',
    subtitle: 'A zero-cost natural pesticide that controls over 200 species of chewing pests and fungal spore germinations.',
    excerpt: 'Learn how to harvest fresh neem leaves, crush raw garlic, and ferment a potent bio-spray with zero chemical residue. Tested by agricultural extension officers for smallholder farms.',
    category: 'Organic Recipes',
    cropTag: 'Other / General',
    author: {
      name: 'Dr. Rameshwar Patel',
      role: 'Organic Agronomist & Field Researcher',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      location: 'Agricultural Research Station, Guntur'
    },
    coverImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 18, 2026',
    readTimeMinutes: 5,
    likes: 184,
    tags: ['Organic', 'Bio-Pesticide', 'Neem Leaf', 'Zero Cost', 'Eco-Friendly'],
    materialsOrTools: [
      '1 kg fresh green neem leaves (Azadirachta indica)',
      '200g unpeeled garlic cloves',
      '5 Liters clean non-chlorinated water',
      '5 mL natural liquid soap or soapnut solution (surfactant)',
      '1 clean airtight bucket or clay pot',
      'Fine cotton cloth or sieve for straining'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Harvest & Macerate the Botanical Material',
        description: 'Collect fresh green neem leaves in early morning when active azadirachtin compound concentration is highest. Coarsely crush the leaves and unpeeled garlic cloves using a mortar and pestle or mechanical stone crusher.',
        tip: 'Do not discard garlic skins; they contain sulfur compounds that deter fungal spores.'
      },
      {
        stepNumber: 2,
        title: 'Submerge & Ferment for 48 Hours',
        description: 'Transfer the crushed mixture into a clean bucket with 5 liters of clean well or rainwater. Cover the container with a breathable cloth and store in a shaded corner away from direct midday sunlight.',
        tip: 'Stir vigorously with a wooden stick twice daily (morning and evening) to introduce oxygen and boost microbial release.'
      },
      {
        stepNumber: 3,
        title: 'Filtration & Surfactant Addition',
        description: 'After 48 hours, the liquid will turn dark greenish-brown with a distinct sulfurous-herbaceous odor. Filter through a double-layered cotton cloth to ensure no fibrous debris clogs your sprayer nozzle. Stir in 5ml of bio-soap.',
        tip: 'Bio-soap breaks surface tension so the spray adheres evenly to waxy leaf cuticles instead of beading off.'
      },
      {
        stepNumber: 4,
        title: 'Dilution & Application Timing',
        description: 'Dilute the concentrated filtrate with clean water at a 1:10 ratio (1 liter concentrate to 10 liters clean water). Spray both upper and lower leaf undersides during cool morning hours (6:00 AM - 8:30 AM) or late afternoon (after 4:30 PM).',
        tip: 'Never spray during scorching noon sun, as ultraviolet heat degrades the active azadirachtin compound rapidly.'
      }
    ],
    keyTakeaways: [
      'Azadirachtin acts as an antifeedant, repellent, and insect growth regulator without killing pollinating bees.',
      'Fermentation allows bio-sulfur from garlic to synergize with limonoids, creating broad-spectrum antifungal defense.',
      'Safe for harvest immediately with zero toxic withholding period.'
    ],
    content: `Bio-pesticides prepared from farm-local botanical materials are the backbone of sustainable Integrated Pest Management (IPM). Azadirachtin, the active triterpenoid found in neem leaves and seed kernels, disrupts the hormonal system of chewing and sucking insects like aphids, thrips, leafhoppers, and early-instar caterpillars. When combined with allicin from crushed garlic, the formulation also halts spore germination of pathogenic fungi like powdery mildew, blast, and rusts.

Using clean well water and maintaining the 48-hour fermentation cycle ensures maximum extraction of active compounds without rotting. Remember to always spray during calm, cool hours to achieve uniform coverage and preserve foliar dwell time.`,
    audioScript: 'Welcome to the AgriShield farmer guide on preparing homemade organic neem and garlic bio-spray. In four simple steps, you can create a zero-cost, high-efficacy spray that repels leafhoppers, thrips, and fungal spores. Harvest 1 kg fresh neem leaves and 200g garlic, crush and ferment in 5 liters of water for 48 hours, filter cleanly, dilute 1 to 10, and spray during cool morning dew.'
  },
  {
    id: 'blog-rice-blast-early-detection',
    title: 'How to Halt Rice Blast (Pyricularia oryzae) Before Panicle Emergence',
    subtitle: 'Recognizing spindle-shaped diamond lesions on tillers to save up to 50% yield loss in paddy fields.',
    excerpt: 'Rice blast is one of the most destructive fungal diseases in tropical grain belts. Here is how to diagnose early spindle spots, adjust water levels, and deploy targeted bio-fungicides.',
    category: 'Disease Prevention',
    cropTag: 'Rice (Padi)',
    author: {
      name: 'Dr. Hendra Wijaya',
      role: 'Senior Plant Pathologist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      location: 'Indonesian Center for Rice Research, Subang'
    },
    coverImage: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 14, 2026',
    readTimeMinutes: 6,
    likes: 241,
    tags: ['Rice Blast', 'Paddy Health', 'Fungal Spores', 'Early Detection', 'Yield Protection'],
    materialsOrTools: [
      'Hand magnifier lens (10x) or smartphone camera zoom',
      'Backpack mist blower or hydraulic knapsack sprayer',
      'Trichoderma harzianum inoculant or Tricyclazole 75 WP',
      'Protective mask and rubber boots'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Daily Morning Scouting for Spindle Lesions',
        description: 'Scout field edges and dense canopy patches during tillering stage. Look for small water-soaked spots that enlarge into diamond or spindle shapes with ash-gray centers and brownish-red borders.',
        tip: 'Focus scouting on shaded field borders where morning dew stays on leaf blades past 9:00 AM.'
      },
      {
        stepNumber: 2,
        title: 'Halt Late Nitrogen / Urea Top-Dressing Immediately',
        description: 'High free nitrogen in leaf tissue creates soft, succulent cell walls that fungal hyphae can easily pierce. Pause all synthetic urea applications during active outbreak alerts.',
        tip: 'Supplement with potassium silicate or muriate of potash (MOP) to harden leaf epidermis cells.'
      },
      {
        stepNumber: 3,
        title: 'Initiate Intermittent Field Drainage (AWD)',
        description: 'Drain standing water to a thin 1-2 cm layer or let the soil surface dry until hairline cracks appear. Lowering field humidity drastically reduces spore sporulation rate.',
        tip: 'Alternate wetting and drying also invigorates root oxygenation and strengthens tillers.'
      },
      {
        stepNumber: 4,
        title: 'Targeted Curative / Protective Spraying',
        description: 'For organic management, spray Trichoderma bio-powder (50g/15L). If disease index exceeds 15% leaf area, apply Tricyclazole 75% WP at 0.6g/L with uniform canopy coverage.',
        tip: 'Ensure spraying occurs before 50% boot-leaf emergence to prevent the fungus from ascending to the panicle neck.'
      }
    ],
    keyTakeaways: [
      'Leaf blast transitioning to neck blast can cause total panicle sterility (empty whiteheads).',
      'Excess nitrogen is the single largest agronomic catalyst for explosive blast multiplication.',
      'Silicon foliar fertilization acts as a mechanical barrier against fungal penetration.'
    ],
    content: `Rice blast, caused by the filamentous ascomycete fungus Pyricularia oryzae (Magnaporthe oryzae), thrives under conditions of high relative humidity (>90%), prolonged leaf wetness (>10 hours), and moderate temperatures (24-28°C). The fungus produces pyriform conidia that germinate on leaf surfaces, producing specialized appressoria that generate enormous turgor pressure to puncture leaf cuticles.

Early identification during the vegetative and tillering phases is critical. If blast symptoms are contained before the booting stage (panicle initiation), the crop can recover with minimal grain yield reduction. However, if fungal hyphae invade the panicle node during heading, "neck blast" occurs, cutting off nutrient flow and leaving empty, bleached panicles.`,
    audioScript: 'AgriShield blast management protocol: Early detection is your best defense against rice blast. Look for diamond-shaped spindle lesions with gray centers. Immediately halt urea top-dressing, drain standing water to reduce humidity, and apply protective bio-sprays or tricyclazole before heading stage.'
  },
  {
    id: 'blog-trichoderma-microbiome',
    title: 'Trichoderma Harzianum: The Farmer’s Secret Bio-Shield Against Soil Pathogens',
    subtitle: 'How beneficial fungi colonize the rhizosphere to prevent damping-off, fusarium wilt, and root rots.',
    excerpt: 'Discover why thousands of progressive farmers are replacing expensive chemical soil drenches with living Trichoderma inoculants for lifelong root protection.',
    category: 'Soil Health',
    cropTag: 'Tomato (Tomat)',
    author: {
      name: 'Dr. Ayesha Siddiqua',
      role: 'Soil Microbiologist & Extension Specialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      location: 'Agricultural University Extension, Dhaka'
    },
    coverImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 10, 2026',
    readTimeMinutes: 5,
    likes: 198,
    tags: ['Soil Health', 'Trichoderma', 'Bio-Control', 'Root Health', 'Microbiome'],
    materialsOrTools: [
      '100g pure Trichoderma harzianum or T. viride bio-powder (CFU > 2x10^8/g)',
      '20-50 kg well-decomposed farmyard manure or vermicompost',
      'Jaggery / Molasses solution (100g in 2L water)',
      'Clean shade tarp'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pre-Culturing in Farmyard Compost',
        description: 'Dissolve 100g jaggery in 2 liters of water. Sprinkle this nutrient water and 100g Trichoderma powder evenly over 50kg of moist, well-cured compost.',
        tip: 'The carbon in jaggery triggers rapid spore multiplication prior to field broadcasting.'
      },
      {
        stepNumber: 2,
        title: 'Shade Incubation for 7 Days',
        description: 'Cover the compost heap with a damp jute bag in shade. Keep moisture around 40-50%. Within 5-7 days, a white-green mycelial fungal mat will cover the compost.',
        tip: 'Turn the heap once on Day 4 to ensure uniform aeration and fungal colonization.'
      },
      {
        stepNumber: 3,
        title: 'Seed & Root Dipping Application',
        description: 'For seedlings (tomato, chili, rice), dissolve 10g Trichoderma powder in 1 liter of water and soak seedling roots for 15-20 minutes before transplanting into the main field.',
        tip: 'The living fungus binds to the roots immediately, growing alongside the plant as roots expand.'
      },
      {
        stepNumber: 4,
        title: 'Main Field Furrow Application',
        description: 'Broadcast the enriched Trichoderma compost into planting furrows or basal soil before seed sowing or transplanting.',
        tip: 'Do not mix with chemical fungicides or synthetic copper sprays during the same week.'
      }
    ],
    keyTakeaways: [
      'Trichoderma coils around pathogenic fungi (mycoparasitism) and secretes chitinase enzymes that dissolve pathogen cell walls.',
      'Produces growth-promoting auxins that enhance root elongation and phosphorus uptake.',
      'One proper application provides active root bio-defense for an entire growing season.'
    ],
    content: `Trichoderma species are free-living endophytic fungi common in healthy soil and root ecosystems. Unlike chemical fungicides that sterilize beneficial and harmful microbes alike, Trichoderma actively competes for space and nutrients against destructive pathogens such as Fusarium, Rhizoctonia, Pythium, and Sclerotinia.

In addition to direct pathogen suppression through antibiotic compounds (viridin, trichodermin), Trichoderma induces Systemic Acquired Resistance (SAR) throughout the host plant, triggering the plant's own immune response against foliar attacks.`,
    audioScript: 'AgriShield soil health guide: Trichoderma is a powerful living bio-fungicide that shields roots against wilt and root rots. Multiply the spores in moist compost with jaggery water for 7 days before applying to your fields or dipping seedling roots.'
  },
  {
    id: 'blog-chemical-safety-phi',
    title: 'Safe Pesticide Handling: PPE, Dilution Precision & Pre-Harvest Intervals (PHI)',
    subtitle: 'A life-saving safety handbook for smallholder farmers, spray operators, and rural families.',
    excerpt: 'Protect your health, prevent chemical burns, and ensure consumer safety by mastering spray calibrations, drift control, and strict withholding intervals.',
    category: 'Chemical Safety',
    cropTag: 'Chili / Pepper (Cabai)',
    author: {
      name: 'Eng. Samuel Ochieng',
      role: 'Agricultural Safety & Extension Trainer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      location: 'East African Agro-Safety Initiative, Eldoret'
    },
    coverImage: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'August 06, 2026',
    readTimeMinutes: 6,
    likes: 167,
    tags: ['Pesticide Safety', 'PPE Gear', 'PHI Interval', 'Toxicity Classes', 'Farmer Health'],
    materialsOrTools: [
      'N95 / Carbon filter respirator mask',
      'Nitrile chemical-resistant gloves (never leather or fabric)',
      'Full eye protection goggles',
      'Dedicated chemical measuring cylinder & clean mixing stick',
      'Triple-rinse water bucket'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Check the Label Color Triangle & Toxicity Class',
        description: 'Always inspect the label triangle: Red (Extremely Toxic / Class Ia), Yellow (Highly Toxic / Class Ib), Blue (Moderately Toxic / Class II), or Green (Slightly Toxic / Class III).',
        tip: 'Never purchase unlabeled chemicals or decanted plastic bottles without official safety seals.'
      },
      {
        stepNumber: 2,
        title: 'Master the Triple-Rinse Technique for Empty Containers',
        description: 'Empty containers should be filled 1/4 with water, capped, shaken vigorously for 30 seconds, and emptied back into the spray tank. Repeat three times.',
        tip: 'Puncture the bottom of cleaned containers so they cannot be reused for domestic water storage.'
      },
      {
        stepNumber: 3,
        title: 'Respect the Pre-Harvest Interval (PHI)',
        description: 'The PHI is the minimum required number of days between the last pesticide spray and crop harvest. Harvesting before this date leaves toxic systemic residues in market produce.',
        tip: 'Always log the exact spray date on your farm calendar before harvesting chili, tomato, or leafy vegetables.'
      },
      {
        stepNumber: 4,
        title: 'Decontamination & Post-Spray Hygiene',
        description: 'Wash gloves thoroughly with soap before removing them. Wash spray clothing separately from household laundry in warm soapy water.',
        tip: 'Shower immediately after finishing field spraying; never eat, drink, or smoke before complete washing.'
      }
    ],
    keyTakeaways: [
      'Skin absorption is the most common route of chronic pesticide poisoning among smallholder farmers.',
      'Never spray against the wind direction; always maintain a downwind or crosswind spraying stance.',
      'Observe re-entry intervals (REI) of at least 24-48 hours before allowing children or laborers into sprayed plots.'
    ],
    content: `Agrochemicals can be indispensable tools for breaking severe pest and fungal disease outbreaks, but reckless handling creates acute poisoning risks, chronic neurological disorders, and severe environmental contamination.

Adhering strictly to label dosages avoids chemical scorch (phytotoxicity) on tender crops and slows down the development of chemical resistance among target pest populations.`,
    audioScript: 'AgriShield safety advisory: Protect your health and family when applying crop chemicals. Always wear nitrile gloves, eye goggles, and a filter mask. Never spray against the wind, triple-rinse containers, and strictly respect the Pre-Harvest Interval before marketing your produce.'
  },
  {
    id: 'blog-fall-armyworm-trapping',
    title: 'Managing Fall Armyworm & Stem Borers with Integrated Pheromone & Trap Cropping',
    subtitle: 'Cost-effective ecological strategies to defend maize and sorghum crops without heavy synthetic sprays.',
    excerpt: 'How to deploy yellow sticky cards, funnel pheromone traps, and Napier grass border push-pull systems to break the nocturnal moth reproduction cycle.',
    category: 'Pest Control',
    cropTag: 'Maize / Corn (Jagung)',
    author: {
      name: 'Dr. Maria Santos',
      role: 'Integrated Pest Management Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      location: 'Tropical Crop Protection Network'
    },
    coverImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'July 29, 2026',
    readTimeMinutes: 5,
    likes: 215,
    tags: ['Fall Armyworm', 'Maize Protection', 'Pheromone Traps', 'Push-Pull System', 'Biological Control'],
    materialsOrTools: [
      'Plastic funnel pheromone traps (5 traps per hectare)',
      'Fall Armyworm (Spodoptera frugiperda) lure septa',
      'Desmodium seeds for intercropping (Push)',
      'Napier grass rootstocks for border trap rows (Pull)',
      'Fine sand or wood ash mixed with chili powder'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Install Pheromone Monitoring Traps Early',
        description: 'Mount traps at canopy height (1 meter above ground) at the time of maize seedling emergence. Check traps twice weekly to count captured male moths.',
        tip: 'Catching more than 3-5 moths per trap per night signals an imminent egg-laying surge.'
      },
      {
        stepNumber: 2,
        title: 'Scout Maize Funnel Whorls for Windowpane Damage',
        description: 'Inspect the central whorl of 20 consecutive maize plants. Look for small pinholes, windowpaning, and sawdust-like frass (caterpillar excrement).',
        tip: 'First and second-instar larvae are easiest to control before they bore deep inside the stem.'
      },
      {
        stepNumber: 3,
        title: 'Direct Whorl Application of Wood Ash & Sand',
        description: 'Drop a pinch of dry fine sand mixed with sifted wood ash or neem powder directly into the central funnel whorl. The sharp silica particles abrade and suffocate caterpillars.',
        tip: 'This mechanical method is 100% organic and works particularly well after light rain showers.'
      },
      {
        stepNumber: 4,
        title: 'Establish the Push-Pull Habitat System',
        description: 'Intercrop maize with Silverleaf Desmodium (which emits volatile chemicals that push moths away) and surround the outer perimeter with Napier grass (which attracts and traps moths).',
        tip: 'Desmodium also fixes atmospheric nitrogen and suppresses parasitic Striga weed.'
      }
    ],
    keyTakeaways: [
      'Early detection during the whorl stage is critical before the caterpillar burrows into the ear or cob.',
      'The Push-Pull habitat management system permanently suppresses pest populations while providing cattle fodder.',
      'Rotate chemical classes (e.g., Emamectin benzoate, Spinetoram, Chlorantraniliprole) to avoid rapid resistance.'
    ],
    content: `Fall Armyworm (Spodoptera frugiperda) is a voracious nocturnal pest capable of destroying up to 70% of a maize crop if unmanaged. The adult female moth can lay over 1,500 eggs in her lifetime, depositing egg masses covered in protective scales on leaf undersides.

By combining early-warning pheromone traps, targeted mechanical whorl dusting with ash/sand, and botanical sprays during the first 30 days of crop growth, farmers can achieve high yields without bankrupting themselves on synthetic insecticides.`,
    audioScript: 'AgriShield maize alert: Protect your corn from Fall Armyworm. Set pheromone traps at seedling emergence, check central whorls for sawdust frass, drop a pinch of dry sand and wood ash into infested funnels, and plant Napier grass perimeter trap borders.'
  },
  {
    id: 'blog-monsoon-microclimate',
    title: 'Monsoon Microclimate Control: Spacing, Drainage & Foliar Dew Timing',
    subtitle: 'How smart canopy architecture and water management prevent humidity-driven epidemic fungal blooms.',
    excerpt: 'Why 20cm x 20cm Legowo planting geometry and dawn field drainage reduce fungal incubation windows by over 60%.',
    category: 'Farmer Guide',
    cropTag: 'Rice (Padi)',
    author: {
      name: 'Dr. Rameshwar Patel',
      role: 'Organic Agronomist & Field Researcher',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      location: 'Agricultural Research Station, Guntur'
    },
    coverImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    publishedDate: 'July 21, 2026',
    readTimeMinutes: 4,
    likes: 173,
    tags: ['Microclimate', 'Plant Spacing', 'Canopy Aeration', 'Monsoon Care', 'Drainage'],
    materialsOrTools: [
      'Planting spacing rope with marker knots (20cm x 20cm or Legowo 2:1)',
      'Field drainage trench shovel',
      'Bamboo stakes for lodging support'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Adopt Jajar Legowo 2:1 Planting Geometry',
        description: 'Plant two rows spaced at 20 cm, followed by an empty space of 40 cm. This creates open air corridors through the dense paddy stand.',
        tip: 'Increases sunlight penetration to lower leaves and raises plant population per hectare by 30%.'
      },
      {
        stepNumber: 2,
        title: 'Construct Deep Perimeter & Cross-Drainage Trenches',
        description: 'Dig 20 cm wide and 15 cm deep drainage trenches around the paddy plot perimeter and cross-field every 10 meters.',
        tip: 'Allows rapid drainage of excess storm water, preventing waterlogged stagnant pools that foster sheath blight.'
      },
      {
        stepNumber: 3,
        title: 'Morning Dew Shaking in Dense Canopies',
        description: 'In high-value seed plots or nursery beds, run a long lightweight bamboo pole or rope across crop tops at dawn to shake free heavy dew drops.',
        tip: 'Cuts leaf wetness duration by 2-3 critical hours, depriving fungal blast and mildew spores of germination moisture.'
      }
    ],
    keyTakeaways: [
      'Fungal pathogens require at least 8 to 10 hours of continuous liquid water on leaf surfaces to germinate.',
      'Proper spacing allows ambient wind to dry canopy leaves rapidly once the sun rises.',
      'Improves fertilizer uptake and minimizes lodging during heavy monsoon gusts.'
    ],
    content: `Microclimate refers to the localized temperature, humidity, and airflow conditions directly within the crop canopy, which can differ dramatically from regional weather forecasts. In densely packed fields, stagnant moist air becomes an incubator for pathogenic spores like Pyricularia, Rhizoctonia, and Xanthomonas.

By redesigning field geometry and actively managing field water levels, smallholder farmers can lower canopy relative humidity by 15-20%, effectively creating a natural physical defense that prevents outbreaks before they can take root.`,
    audioScript: 'AgriShield agronomy tip: Control your crop microclimate during rainy seasons. Use Legowo 2 to 1 spacing to open air corridors, maintain clean drainage trenches, and shake off heavy morning dew to keep leaves dry and disease-free.'
  }
];
