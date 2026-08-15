/**
 * Comprehensive realistic product catalog for ShopSphere
 * Contains 52 curated products across Electronics, Fashion, Shoes, Accessories, Home & Lifestyle, and Beauty
 * Prices specified in Indian Rupees (INR ₹)
 */

export const PRODUCTS = [
  // ---------------- ELECTRONICS (10 Products) ----------------
  {
    id: "prod-1",
    name: "SonicPro Wireless ANC Headphones",
    brand: "SoundPro",
    category: "Electronics",
    subcategory: "Audio",
    price: 4999,
    originalPrice: 7999,
    discount: 37,
    rating: 4.8,
    reviews: 384,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Immerse yourself in studio-grade audio with hybrid Active Noise Cancellation, 40mm beryllium drivers, and ultra-plush memory foam earcups for all-day listening comfort.",
    specifications: {
      "Driver Size": "40mm Beryllium Drivers",
      "Battery Life": "Up to 45 Hours (ANC Off) / 32 Hours (ANC On)",
      "Connectivity": "Bluetooth 5.3 + 3.5mm Aux",
      "Fast Charging": "10 min charge gives 5 hours playback",
      "Weight": "250g",
      "Microphones": "4 Beamforming mics with AI noise reduction"
    },
    features: [
      "Industry-leading Hybrid Active Noise Cancellation",
      "Multipoint Bluetooth pairing for 2 devices simultaneously",
      "Custom equalizer app with personalized sound profiles",
      "Foldable ergonomic design with premium travel case"
    ],
    colors: [
      { name: "Matte Black", hex: "#1e293b" },
      { name: "Silver Frost", hex: "#e2e8f0" },
      { name: "Navy Midnight", hex: "#1e3a8a" }
    ],
    sizes: [],
    stock: 24,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["noise-cancelling", "wireless", "audio", "bluetooth", "premium"]
  },
  {
    id: "prod-2",
    name: "AuraPulse Smart Health & Fitness Watch",
    brand: "AuraTech",
    category: "Electronics",
    subcategory: "Wearables",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.7,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Next-gen AMOLED smart watch with comprehensive biometric monitoring: continuous heart rate, SpO2 blood oxygen, advanced sleep score metrics, and 100+ sport modes.",
    specifications: {
      "Display": "1.43-inch Always-On AMOLED (466x466)",
      "Water Resistance": "5 ATM (50 meters depth)",
      "Battery": "Up to 14 days normal usage",
      "Sensors": "Optical Heart Rate, SpO2, Accelerometer, Barometer",
      "Compatibility": "iOS 13+ & Android 8.0+"
    },
    features: [
      "Always-On Retina AMOLED crystal display with 1000 nits brightness",
      "Built-in multi-system GPS for precise workout tracking",
      "Bluetooth calling and voice assistant integration",
      "Over 200 customizable watch faces"
    ],
    colors: [
      { name: "Space Grey", hex: "#334155" },
      { name: "Rose Gold", hex: "#f43f5e" },
      { name: "Starlight", hex: "#f1f5f9" }
    ],
    sizes: ["40mm", "44mm"],
    stock: 18,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    tags: ["smartwatch", "fitness", "waterproof", "amoled", "gps"]
  },
  {
    id: "prod-3",
    name: "Apex Ultra-Slim Mechanical Keyboard",
    brand: "ApexGear",
    category: "Electronics",
    subcategory: "Peripherals",
    price: 4299,
    originalPrice: 5999,
    discount: 28,
    rating: 4.9,
    reviews: 240,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Low-profile mechanical switches housed in an aircraft-grade aluminum CNC body. Tri-mode wireless connection with customizable per-key RGB backlighting.",
    specifications: {
      "Switches": "Hot-swappable Gateron Low Profile (Red / Brown)",
      "Connectivity": "Bluetooth 5.1, 2.4GHz Dongle, Type-C Wired",
      "Battery": "4000mAh (up to 200 hours without backlight)",
      "Keycaps": "Double-shot PBT Shine-through",
      "Layout": "75% Compact (84 keys)"
    },
    features: [
      "Precision CNC anodized aluminum top frame",
      "Sound-dampening silicon foam acoustic dampener",
      "Mac and Windows layout switch with extra novelty keycaps",
      "Ultra-low latency 1000Hz polling rate in 2.4GHz mode"
    ],
    colors: [
      { name: "Space Gray", hex: "#475569" },
      { name: "Arctic White", hex: "#f8fafc" }
    ],
    sizes: ["Linear Red", "Tactile Brown"],
    stock: 35,
    inStock: true,
    isFeatured: true,
    isTrending: false,
    isBestSeller: true,
    tags: ["keyboard", "mechanical", "gaming", "wireless", "rgb"]
  },
  {
    id: "prod-4",
    name: "Clarity 4K 27-inch IPS Studio Monitor",
    brand: "SoundPro",
    category: "Electronics",
    subcategory: "Monitors",
    price: 24999,
    originalPrice: 32999,
    discount: 24,
    rating: 4.6,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Factory color-calibrated 4K UHD designer monitor with 99% sRGB and 95% DCI-P3 coverage. Built-in 90W USB-C Power Delivery single cable docking.",
    specifications: {
      "Resolution": "3840 x 2160 (4K UHD) @ 60Hz",
      "Panel Type": "IPS with Anti-Glare 3H Coating",
      "Brightness": "400 nits (HDR400 Certified)",
      "Ports": "1x USB-C (90W PD), 2x HDMI 2.0, 1x DP 1.4, 3x USB 3.2 Hub",
      "Stand": "Height adjustable, Pivot, Swivel, Tilt"
    },
    features: [
      "Single USB-C cable for video, data, and 90W laptop fast charging",
      "Delta E < 2 color accuracy for creative professionals",
      "TÜV Rheinland certified Low Blue Light eye-care technology",
      "Ultra-thin 3-sided borderless aesthetic"
    ],
    colors: [
      { name: "Silver Metal", hex: "#94a3b8" }
    ],
    sizes: ["27-inch"],
    stock: 12,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["monitor", "4k", "designer", "usb-c", "ips"]
  },
  {
    id: "prod-5",
    name: "HyperBeats True Wireless ANC Earbuds",
    brand: "SoundPro",
    category: "Electronics",
    subcategory: "Audio",
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    rating: 4.7,
    reviews: 620,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Compact true wireless earbuds with 35dB Adaptive Noise Cancelling, Transparency audio pass-through mode, and punchy deep bass tuning.",
    specifications: {
      "Drivers": "11mm Dynamic Titanium-plated drivers",
      "Battery Life": "8h (earbuds) + 28h (charging case)",
      "Water Resistance": "IPX5 Sweat & Water Proof",
      "Bluetooth": "Bluetooth 5.3 with AAC/SBC/LDAC codecs",
      "Charging": "Qi Wireless Charging + USB-C fast charge"
    },
    features: [
      "Adaptive ANC automatically adjusts to ambient surroundings",
      "Triple mic array with ENC wind noise filtering for crystal clear calls",
      "Low latency 50ms gaming mode",
      "Pocketable matte finish wireless charging case"
    ],
    colors: [
      { name: "Pearl White", hex: "#ffffff" },
      { name: "Graphite Black", hex: "#18181b" },
      { name: "Sage Green", hex: "#84a98c" }
    ],
    sizes: [],
    stock: 45,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["earbuds", "tws", "anc", "wireless", "audio"]
  },
  {
    id: "prod-6",
    name: "StealthGlide Ergonomic Wireless Mouse",
    brand: "ApexGear",
    category: "Electronics",
    subcategory: "Peripherals",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4.5,
    reviews: 188,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ergonomically sculpted wireless mouse with thumb rest, silent tactile click switches, and dual device switching.",
    specifications: {
      "Sensor": "High-precision Optical 4000 DPI Sensor",
      "Connectivity": "Bluetooth + 2.4GHz USB Receiver",
      "Battery": "Rechargeable 500mAh (70 days per charge)",
      "Buttons": "6 Programmable silent buttons + metal scroll wheel"
    },
    features: [
      "90% noise reduction silent click switches",
      "Thumb gesture control button for rapid multitasking",
      "Works seamlessly across Windows, macOS, iPadOS, and Linux"
    ],
    colors: [
      { name: "Midnight Black", hex: "#0f172a" },
      { name: "Pale Grey", hex: "#e2e8f0" }
    ],
    sizes: [],
    stock: 28,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["mouse", "ergonomic", "wireless", "silent", "productivity"]
  },
  {
    id: "prod-7",
    name: "PulsePower 65W GaN Fast Charger & Power Bank",
    brand: "AuraTech",
    category: "Electronics",
    subcategory: "Accessories",
    price: 2299,
    originalPrice: 3499,
    discount: 34,
    rating: 4.8,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "2-in-1 hybrid 65W Gallium Nitride (GaN) wall charger and 15,000mAh portable fast-charging power bank capable of powering laptops and smartphones.",
    specifications: {
      "Capacity": "15,000mAh / 55.5Wh Airline Safe",
      "Output": "65W Max USB-C Power Delivery 3.0 + PPS",
      "Ports": "2x USB-C + 1x USB-A QuickCharge 3.0",
      "Technology": "Gallium Nitride (GaN III) Semiconductor"
    },
    features: [
      "Charges MacBook Pro to 50% in just 30 minutes",
      "Foldable AC wall prongs for worldwide travel",
      "Intelligent dynamic power allocation between connected devices"
    ],
    colors: [
      { name: "Obsidian", hex: "#1e293b" },
      { name: "Polar White", hex: "#f8fafc" }
    ],
    sizes: [],
    stock: 30,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: true,
    tags: ["powerbank", "charger", "gan", "fast-charging", "usb-c"]
  },
  {
    id: "prod-8",
    name: "CinemaSound Portable Bluetooth Speaker",
    brand: "SoundPro",
    category: "Electronics",
    subcategory: "Audio",
    price: 3299,
    originalPrice: 4599,
    discount: 28,
    rating: 4.8,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "360-degree spatial acoustic portable speaker with IP67 dust and waterproof rating, dual passive bass radiators, and 24-hour battery life.",
    specifications: {
      "Power Output": "30W RMS High Fidelity",
      "Waterproofing": "IP67 Submersible Waterproof & Float Design",
      "Battery Life": "Up to 24 Hours Playback",
      "Bluetooth": "Bluetooth 5.3 with TWS Stereo Pairing"
    },
    features: [
      "PartyLink connects up to 100+ SoundPro speakers simultaneously",
      "Built-in microphone for speakerphone calls",
      "Durable woven fabric exterior and drop-resistant silicone endcaps"
    ],
    colors: [
      { name: "Forest Green", hex: "#2d6a4f" },
      { name: "Charcoal", hex: "#1f2937" },
      { name: "Coral Orange", hex: "#f97316" }
    ],
    sizes: [],
    stock: 22,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    tags: ["speaker", "bluetooth", "waterproof", "audio", "outdoor"]
  },
  {
    id: "prod-9",
    name: "AuraGlow Smart RGB Monitor Light Bar",
    brand: "AuraTech",
    category: "Electronics",
    subcategory: "Accessories",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    rating: 4.9,
    reviews: 195,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Asymmetric screen bar lamp with zero screen glare, wireless rotary control knob, adjustable color temperature (2700K-6500K), and ambient backlighting.",
    specifications: {
      "Color Temperature": "2700K - 6500K Stepless Adjustment",
      "Color Rendering Index": "Ra > 95 High CRI",
      "Power Source": "USB-C 5V 2A",
      "Controller": "Wireless 2.4GHz Rotary Touch Puck"
    },
    features: [
      "Patented asymmetric optical path eliminates monitor reflections",
      "Ambient reactive RGB backlight with dynamic music sync",
      "Weighted clamp securely fits curved and flat displays"
    ],
    colors: [
      { name: "Anodized Black", hex: "#111827" }
    ],
    sizes: [],
    stock: 19,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["lightbar", "desk", "lighting", "productivity", "rgb"]
  },
  {
    id: "prod-10",
    name: "ApexTrack Precision Smart Stylus Pen",
    brand: "ApexGear",
    category: "Electronics",
    subcategory: "Accessories",
    price: 1899,
    originalPrice: 2799,
    discount: 32,
    rating: 4.6,
    reviews: 164,
    image: "https://images.unsplash.com/photo-1585336261026-7f415303a2cb?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-responsive digital stylus with 4096 levels of pressure sensitivity, magnetic wireless charging attachment, and palm rejection technology.",
    specifications: {
      "Pressure Levels": "4,096 Pressure & Tilt Detection",
      "Battery": "12 hours continuous drawing / 90 days standby",
      "Tip": "1.5mm replaceable POM fine tip"
    },
    features: [
      "Zero noticeable input latency for natural note-taking and sketching",
      "Magnetic snaps to side of tablet with fast induction charging",
      "Double-tap shortcut button for eraser toggle"
    ],
    colors: [
      { name: "Matte White", hex: "#f8fafc" },
      { name: "Space Grey", hex: "#334155" }
    ],
    sizes: [],
    stock: 34,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["stylus", "tablet", "drawing", "ipad", "pen"]
  },

  // ---------------- FASHION (10 Products) ----------------
  {
    id: "prod-11",
    name: "Heavyweight French Terry Streetwear Hoodie",
    brand: "UrbanCraft",
    category: "Fashion",
    subcategory: "Outerwear",
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    rating: 4.9,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Crafted from 480 GSM 100% combed organic cotton French terry. Featuring a double-layered structured hood, dropped shoulders, and ribbed cuffs.",
    specifications: {
      "Material": "100% Organic Combed Cotton (480 GSM)",
      "Fit": "Relaxed Boxy Streetwear Silhouette",
      "Care": "Machine wash cold inside-out, tumble dry low"
    },
    features: [
      "Pre-shrunk custom heavyweight weave maintains shape after repeated washing",
      "Seamless kangaroo pocket with reinforced bartack stitching",
      "Clean look with hidden tonal drawstring eyelets"
    ],
    colors: [
      { name: "Washed Slate", hex: "#475569" },
      { name: "Sand Dune", hex: "#d6c7b2" },
      { name: "Onyx Black", hex: "#09090b" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 50,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["hoodie", "streetwear", "cotton", "oversized", "winter"]
  },
  {
    id: "prod-12",
    name: "Relaxed Washed Cotton Oversized T-Shirt",
    brand: "MinimalistCo",
    category: "Fashion",
    subcategory: "Tops",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.8,
    reviews: 680,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Everyday luxury in a 240 GSM vintage mineral-washed tee. Ultra-soft hand feel with an effortless draped silhouette and sturdy ribbed crewneck.",
    specifications: {
      "Fabric": "100% Ring-Spun Cotton (240 GSM)",
      "Collar": "1.25-inch Heavy Ribbed Neckline",
      "Finish": "Vintage Enzyme Acid Wash"
    },
    features: [
      "Thick non-see-through fabric that holds structured drape",
      "Double needle hem and sleeve stitching for durability",
      "Breathable and skin-friendly hypoallergenic cotton"
    ],
    colors: [
      { name: "Washed Charcoal", hex: "#374151" },
      { name: "Off-White Chalk", hex: "#f3f4f6" },
      { name: "Sage Mist", hex: "#9ca3af" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 65,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["tshirt", "oversized", "vintage", "casual", "minimalist"]
  },
  {
    id: "prod-13",
    name: "Japanese Selvedge Raw Denim Slim Jeans",
    brand: "UrbanCraft",
    category: "Fashion",
    subcategory: "Bottoms",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Authentic 14oz raw indigo denim shuttle-loomed with classic red selvedge ID line. Designed to develop custom fades unique to your lifestyle.",
    specifications: {
      "Denim Weight": "14 oz Unwashed Rigid Indigo Selvedge",
      "Fit": "Slim-Tapered (Mid Rise)",
      "Hardware": "Solid copper rivets & custom button fly"
    },
    features: [
      "Traditional shuttle loom weave creates deep textural character",
      "Genuine vegetable-tanned leather waistband patch",
      "Hidden back pocket rivets prevent sofa scratching"
    ],
    colors: [
      { name: "Raw Deep Indigo", hex: "#1e1b4b" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    stock: 26,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["denim", "jeans", "selvedge", "raw", "pants"]
  },
  {
    id: "prod-14",
    name: "Tailored Wool-Blend Winter Overcoat",
    brand: "NordicVibe",
    category: "Fashion",
    subcategory: "Outerwear",
    price: 5499,
    originalPrice: 7999,
    discount: 31,
    rating: 4.9,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce667883?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Elevate your winter wardrobe with this double-breasted structured overcoat crafted from an insulating wool-cashmere blend with satin lining.",
    specifications: {
      "Composition": "70% Merino Wool, 20% Polyamide, 10% Cashmere",
      "Lining": "100% Cupro Silk Touch Satin",
      "Length": "Mid-Thigh Overcoat Cut"
    },
    features: [
      "Peak lapel collar with buttoned storm flap",
      "Interior zip wallet pocket and dual welt hand-warmer pockets",
      "Natural water and wind resistance"
    ],
    colors: [
      { name: "Camel Tan", hex: "#c29b61" },
      { name: "Charcoal Herringbone", hex: "#27272a" }
    ],
    sizes: ["38R", "40R", "42R", "44R"],
    stock: 14,
    inStock: true,
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    tags: ["overcoat", "wool", "winter", "luxury", "formal"]
  },
  {
    id: "prod-15",
    name: "Premium European Washed Linen Shirt",
    brand: "MinimalistCo",
    category: "Fashion",
    subcategory: "Tops",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    rating: 4.7,
    reviews: 315,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Breathable, garment-washed 100% Normandy flax linen shirt with a modern band-collar. Perfect for tropical climates, beach holidays, and summer evenings.",
    specifications: {
      "Material": "100% Normandy Certified Flax Linen",
      "Collar": "Mandarin / Band Collar",
      "Buttons": "Mother of Pearl Natural Shell Buttons"
    },
    features: [
      "Pre-washed for instant softness and effortless relaxed drape",
      "Natural moisture-wicking and heat dissipation",
      "Curved hem looks sharp tucked in or untucked"
    ],
    colors: [
      { name: "Pure White", hex: "#ffffff" },
      { name: "Sky Blue", hex: "#93c5fd" },
      { name: "Olive Green", hex: "#4d7c0f" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 38,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["linen", "shirt", "summer", "breathable", "casual"]
  },
  {
    id: "prod-16",
    name: "Performance Breathable Tech Joggers",
    brand: "StrideFit",
    category: "Fashion",
    subcategory: "Athleisure",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.8,
    reviews: 440,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Four-way stretch athletic pants engineered for high-mobility training, lounging, and airport travel with hidden zip pockets.",
    specifications: {
      "Material": "88% Recycled Nylon, 12% Spandex",
      "DWR": "Water-repellent finish",
      "Waist": "Elastic drawcord waistband"
    },
    features: [
      "Zippered phone and key pockets prevent items falling out during runs",
      "Gusseted crotch allows full unrestricted range of motion",
      "Quick-drying sweat-wicking technology"
    ],
    colors: [
      { name: "Pitch Black", hex: "#000000" },
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Steel Grey", hex: "#475569" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 45,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    tags: ["joggers", "athleisure", "workout", "gym", "stretch"]
  },
  {
    id: "prod-17",
    name: "Merino Wool Crewneck Knit Sweater",
    brand: "NordicVibe",
    category: "Fashion",
    subcategory: "Tops",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    rating: 4.8,
    reviews: 175,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-fine 19.5-micron Australian Merino wool sweater. Ultra-soft on bare skin with natural odor resistance and thermoregulating warmth.",
    specifications: {
      "Fiber": "100% Extra-fine Merino Wool",
      "Knit Gauge": "12-Gauge Fine Weave",
      "Fit": "Modern Regular Fit"
    },
    features: [
      "Naturally controls body temperature in cool and warm environments",
      "Ribbed collar, cuffs, and hem with elastane shape retention",
      "Itch-free ultra-fine yarn"
    ],
    colors: [
      { name: "Forest Pine", hex: "#14532d" },
      { name: "Oatmeal Heather", hex: "#e5e5e5" },
      { name: "Midnight Navy", hex: "#0f172a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 22,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["sweater", "merino-wool", "knitwear", "warm", "classic"]
  },
  {
    id: "prod-18",
    name: "Classic Quilted Bomber Jacket",
    brand: "UrbanCraft",
    category: "Fashion",
    subcategory: "Outerwear",
    price: 3199,
    originalPrice: 4599,
    discount: 30,
    rating: 4.7,
    reviews: 260,
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Military-inspired flight bomber jacket with thermal diamond quilting, ribbed stand collar, and antique brass heavy-duty front zipper.",
    specifications: {
      "Shell": "100% High-Density Flight Nylon",
      "Insulation": "PolyFill 120 GSM Eco Thermal Padding",
      "Pockets": "2 Snap hand pockets, 1 Sleeve utility zip pocket"
    },
    features: [
      "Windproof and light rain resistant exterior",
      "Traditional safety-orange contrast interior lining",
      "Heavy-gauge elastic ribbed waist and cuffs"
    ],
    colors: [
      { name: "Sage Olive", hex: "#3f6212" },
      { name: "Matte Black", hex: "#18181b" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["bomber", "jacket", "outerwear", "streetwear", "winter"]
  },
  {
    id: "prod-19",
    name: "Tailored Smart Stretch Chino Trousers",
    brand: "UrbanCraft",
    category: "Fashion",
    subcategory: "Bottoms",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    rating: 4.7,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Versatile smart-casual trousers crafted from combed stretch cotton twill with an internal flex waistband for office to dinner comfort.",
    specifications: {
      "Material": "97% Combed Cotton, 3% Elastane",
      "Fit": "Tailored Slim Fit",
      "Closure": "YKK Zip Fly with Corozo Button"
    },
    features: [
      "Hidden comfort stretch waistband flexes up to 1 inch",
      "Wrinkle-resistant finish stays crisp throughout the day",
      "Deep front slanted pockets and buttoned rear welt pockets"
    ],
    colors: [
      { name: "Classic Khaki", hex: "#d4a373" },
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Slate Grey", hex: "#64748b" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    stock: 35,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: true,
    tags: ["chinos", "trousers", "office", "smart-casual", "pants"]
  },
  {
    id: "prod-20",
    name: "Structured Cotton Utility Overshirt",
    brand: "MinimalistCo",
    category: "Fashion",
    subcategory: "Tops",
    price: 1799,
    originalPrice: 2599,
    discount: 30,
    rating: 4.8,
    reviews: 190,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Heavyweight 320 GSM cotton twill workwear overshirt with dual chest flap pockets. Wear as a jacket over tees or buttoned up.",
    specifications: {
      "Material": "100% Heavyweight Cotton Twill",
      "Pockets": "Dual Buttoned Cargo Chest Pockets",
      "Fit": "Relaxed Layering Fit"
    },
    features: [
      "Durable garment-dyed wash with reinforced elbow patches",
      "Custom matte horn buttons",
      "Versatile transitional season layering piece"
    ],
    colors: [
      { name: "Tuscan Tan", hex: "#b45309" },
      { name: "Military Olive", hex: "#365314" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: 28,
    inStock: true,
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    tags: ["overshirt", "shacket", "workwear", "layering", "autumn"]
  },

  // ---------------- SHOES (9 Products) ----------------
  {
    id: "prod-21",
    name: "Velocita CloudStrider Pro Running Shoes",
    brand: "Velocita",
    category: "Shoes",
    subcategory: "Running",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.9,
    reviews: 580,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Max-cushion nitrogen-infused foam running shoes engineered for marathon training, daily miles, and maximum energy return.",
    specifications: {
      "Weight": "220g (Men's Size 9)",
      "Drop": "8mm Heel-to-Toe Drop",
      "Midsole": "Supercritical Nitrogen Foam + Carbon Plate",
      "Upper": "Engineered Jacquard Breathable Mesh"
    },
    features: [
      "Full-length carbon composite propulsive plate for explosive toe-off",
      "Continental rubber outsole grip for wet and dry pavement traction",
      "Anatomical padded heel collar prevents blisters"
    ],
    colors: [
      { name: "Laser Crimson", hex: "#ef4444" },
      { name: "Volt Neon", hex: "#84cc16" },
      { name: "Stealth Black", hex: "#18181b" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    stock: 40,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["running", "shoes", "carbon-plate", "marathon", "sneakers"]
  },
  {
    id: "prod-22",
    name: "Handcrafted Italian Leather Chelsea Boots",
    brand: "UrbanCraft",
    category: "Shoes",
    subcategory: "Boots",
    price: 4999,
    originalPrice: 7499,
    discount: 33,
    rating: 4.8,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Timeless Chelsea boots bench-crafted in full-grain calfskin leather with Goodyear-welted construction and studded rubber soles.",
    specifications: {
      "Leather": "Full-Grain Italian Calfskin",
      "Construction": "Goodyear Welted (Fully Resolable)",
      "Sole": "Dainite Studded Rubber Sole",
      "Lining": "Full Glove-Leather Interior"
    },
    features: [
      "Reinforced heavy-duty elastic side gussets for easy pull-on",
      "Cork midsole filler molds to your foot for custom arch support",
      "Hand-burnished toe box with rich patina finish"
    ],
    colors: [
      { name: "Cognac Brown", hex: "#78350f" },
      { name: "Obsidian Black", hex: "#0a0a0a" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    stock: 18,
    inStock: true,
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    tags: ["boots", "leather", "chelsea", "goodyear-welt", "formal"]
  },
  {
    id: "prod-23",
    name: "AeroLight Daily Knit Walking Sneakers",
    brand: "StrideFit",
    category: "Shoes",
    subcategory: "Casual",
    price: 1699,
    originalPrice: 2499,
    discount: 32,
    rating: 4.7,
    reviews: 430,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Featherlight slip-on knit sneakers with responsive memory foam insoles. Engineered for 15,000+ daily steps without foot fatigue.",
    specifications: {
      "Weight": "175g Ultra-lightweight",
      "Upper": "Recycled Poly Seamless 3D Knit",
      "Insole": "Dual-Density Ergonomic Memory Gel"
    },
    features: [
      "Sock-like adaptive collar hugs ankles securely",
      "Machine washable design for easy maintenance",
      "Shock-absorbing EVA flex groove outsole"
    ],
    colors: [
      { name: "Cloud White", hex: "#f8fafc" },
      { name: "Heather Grey", hex: "#6b7280" },
      { name: "All Black", hex: "#111827" }
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    stock: 55,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    tags: ["sneakers", "walking", "lightweight", "knit", "comfort"]
  },
  {
    id: "prod-24",
    name: "Classic Retro Low-Top Leather Trainers",
    brand: "Velocita",
    category: "Shoes",
    subcategory: "Casual",
    price: 2699,
    originalPrice: 3899,
    discount: 30,
    rating: 4.8,
    reviews: 350,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Clean minimalist court sneakers crafted in supple nappa leather with vintage gum outsoles and padded tongue.",
    specifications: {
      "Upper": "Premium Nappa Cowhide Leather",
      "Outsole": "Vulcanized Natural Gum Rubber",
      "Laces": "100% Flat Waxed Cotton"
    },
    features: [
      "Timeless versatile aesthetic pairs with denim, shorts, or tailored suits",
      "Reinforced heel counter and cushioned arch support insole",
      "Tonal stitching with understated gold foil branding"
    ],
    colors: [
      { name: "White / Forest Green", hex: "#15803d" },
      { name: "Triple White", hex: "#ffffff" },
      { name: "White / Navy", hex: "#1e3a8a" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    stock: 32,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    tags: ["sneakers", "court", "leather", "retro", "classic"]
  },
  {
    id: "prod-25",
    name: "TrailMaster Waterproof Hiking & Trekking Boots",
    brand: "StrideFit",
    category: "Shoes",
    subcategory: "Outdoor",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Rugged waterproof outdoor boots equipped with deep 5mm multidirectional Vibram lugs, TPU ankle protection, and HydroGuard breathable membrane.",
    specifications: {
      "Membrane": "HydroGuard 100% Waterproof & Breathable",
      "Outsole": "Vibram MegaGrip Deep Cleat Rubber",
      "Upper": "Nubuck Leather & Ballistic Cordura Mesh"
    },
    features: [
      "Protective molded rubber toe bumper shields against rock strikes",
      "Padded gusseted tongue keeps trail debris and water out",
      "Lightweight composite shank provides stability on uneven mountain terrain"
    ],
    colors: [
      { name: "Earth Brown", hex: "#594a42" },
      { name: "Charcoal Grey", hex: "#374151" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    stock: 24,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["hiking", "trekking", "waterproof", "boots", "outdoor"]
  },
  {
    id: "prod-26",
    name: "Orthopedic Comfort Knit Slip-On Loafers",
    brand: "StrideFit",
    category: "Shoes",
    subcategory: "Casual",
    price: 1499,
    originalPrice: 2199,
    discount: 31,
    rating: 4.6,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Effortless hands-free step-in loafers designed with podiatrist-approved biomechanical arch support and breathable stretch knit.",
    specifications: {
      "Insole": "Anatomical Arch Cushion with Metatarsal Pad",
      "Weight": "160g Lightweight Design",
      "Outsole": "Non-slip High Traction Rubber Compound"
    },
    features: [
      "Hands-free collapsible heel spring allows quick step-in",
      "Alleviates heel pain, plantar fasciitis, and knee strain",
      "Wide toe box prevents toe cramping"
    ],
    colors: [
      { name: "Navy Heather", hex: "#1e3a8a" },
      { name: "Charcoal", hex: "#334155" },
      { name: "Beige Tan", hex: "#d4a373" }
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    stock: 36,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["loafers", "orthopedic", "comfort", "slip-on", "daily"]
  },
  {
    id: "prod-27",
    name: "Grand Tourer Suede Driving Shoes",
    brand: "Velocita",
    category: "Shoes",
    subcategory: "Casual",
    price: 2999,
    originalPrice: 4299,
    discount: 30,
    rating: 4.8,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Italian water-resistant suede driving moccasins with hand-stitched apron toe and signature segmented pebble rubber sole.",
    specifications: {
      "Material": "Treated Water-Repellent Suede",
      "Sole": "Segmented Rubber Driving Pebbles",
      "Lining": "Supple Calf Leather"
    },
    features: [
      "Flexible unlined construction offers sockless luxury comfort",
      "Extended rubber heel pebbles prevent wear while driving",
      "Rawhide leather laces with polished metal aglets"
    ],
    colors: [
      { name: "Tobacco Tan", hex: "#9a3412" },
      { name: "Midnight Navy", hex: "#1e1b4b" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    stock: 16,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["driving-shoes", "suede", "moccasins", "luxury", "loafers"]
  },
  {
    id: "prod-28",
    name: "PrimeFlex Cross-Training Gym Shoes",
    brand: "StrideFit",
    category: "Shoes",
    subcategory: "Athletic",
    price: 2899,
    originalPrice: 3999,
    discount: 27,
    rating: 4.8,
    reviews: 270,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Flat, wide-base training shoes built for heavy squats, deadlifts, HIIT circuits, and rope climbs with rubber sidewall wraps.",
    specifications: {
      "Heel Drop": "4mm Low Stable Drop",
      "Outsole": "Sticky Grip Rubber with Rope Protection Wrap",
      "Upper": "High-Abrasion Engineered Ripstop Mesh"
    },
    features: [
      "Wide anatomical toe box lets toes splay naturally under load",
      "Rigid TPU heel clip stabilizes Olympic lifts",
      "Flexible forefoot allows smooth box jumps and burpees"
    ],
    colors: [
      { name: "Black / Volt", hex: "#84cc16" },
      { name: "Gunmetal Grey", hex: "#4b5563" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    stock: 25,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["training", "gym", "crossfit", "workout", "shoes"]
  },
  {
    id: "prod-29",
    name: "Classic Oxford Formal Cap-Toe Shoes",
    brand: "UrbanCraft",
    category: "Shoes",
    subcategory: "Formal",
    price: 4499,
    originalPrice: 6499,
    discount: 30,
    rating: 4.9,
    reviews: 190,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Handcrafted closed-lacing Oxford dress shoes made from full-grain Argentine box calf leather with a polished leather sole.",
    specifications: {
      "Leather": "Argentine Box Calf Full-Grain",
      "Construction": "Goodyear Welted with Channelled Leather Sole",
      "Toe": "Classic Stitched Cap-Toe"
    },
    features: [
      "Formal closed lacing system for weddings, boardroom meetings, and black-tie events",
      "Breathable full leather lining and cushioned insole",
      "Hand-burnished museum mirror gloss polish"
    ],
    colors: [
      { name: "Classic Black", hex: "#000000" },
      { name: "Dark Walnut", hex: "#451a03" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    stock: 20,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["formal", "oxford", "leather", "wedding", "office"]
  },

  // ---------------- ACCESSORIES (9 Products) ----------------
  {
    id: "prod-30",
    name: "ChronoClassic Sapphire Chronograph Watch",
    brand: "LuxeHorology",
    category: "Accessories",
    subcategory: "Watches",
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.9,
    reviews: 240,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "316L surgical-grade stainless steel chronograph with scratch-resistant sapphire crystal lens and Japanese precision quartz movement.",
    specifications: {
      "Case Size": "41mm Diameter / 11mm Thickness",
      "Glass": "Anti-Reflective Coated Sapphire Crystal",
      "Movement": "Japanese Miyota Quartz Chronograph (1/10s accuracy)",
      "Water Resistance": "10 ATM (100 meters / 330 feet)"
    },
    features: [
      "Sub-dials for 60-minute stopwatch, 24-hour time, and quickset date window",
      "Swiss Super-LumiNova luminescence on hands and hour markers",
      "Quick-release solid stainless steel link bracelet with butterfly clasp"
    ],
    colors: [
      { name: "Sunburst Blue Dial", hex: "#1e3a8a" },
      { name: "Silver White Dial", hex: "#f1f5f9" },
      { name: "Onyx Black Dial", hex: "#0f172a" }
    ],
    sizes: ["41mm"],
    stock: 15,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["watch", "chronograph", "sapphire", "stainless-steel", "luxury"]
  },
  {
    id: "prod-31",
    name: "Polarized Aviator Titanium Sunglasses",
    brand: "Solstice",
    category: "Accessories",
    subcategory: "Eyewear",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    rating: 4.8,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultralight Japanese aerospace-grade titanium sunglasses featuring 9-layer TAC polarized lenses that block 100% UVA/UVB rays.",
    specifications: {
      "Frame": "Pure Aerospace Grade Titanium (18g total weight)",
      "Lens": "Triacetate Cellulose (TAC) 1.1mm Polarized",
      "Protection": "UV400 Category 3 Glare Protection"
    },
    features: [
      "Hydrophobic and oleophobic lens coating repels water droplets and fingerprints",
      "Hypoallergenic silicone air-cushion nose pads prevent pressure marks",
      "Includes microfiber cleaning cloth and genuine leather hard case"
    ],
    colors: [
      { name: "Gunmetal / Smoke Grey", hex: "#374151" },
      { name: "Gold / G15 Green", hex: "#ca8a04" }
    ],
    sizes: ["Standard Medium"],
    stock: 30,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    tags: ["sunglasses", "polarized", "titanium", "aviator", "eyewear"]
  },
  {
    id: "prod-32",
    name: "Full-Grain Vegetable Tanned Leather Bifold Wallet",
    brand: "UrbanCraft",
    category: "Accessories",
    subcategory: "Wallets",
    price: 1199,
    originalPrice: 1899,
    discount: 36,
    rating: 4.9,
    reviews: 410,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1606503825008-909a67e753bf?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Handcrafted slim bifold wallet made from Italian full-grain vegetable tanned bridle leather with built-in RFID blocking shield.",
    specifications: {
      "Leather": "Italian Vegetable-Tanned Full-Grain Vachetta",
      "Capacity": "8 Card Slots + 2 Hidden Pockets + Full Currency Billfold",
      "Security": "RFID Blocking Aluminum Shield (13.56 MHz)"
    },
    features: [
      "Develops a rich caramel patina that deepens with daily handling",
      "Ultra-slim profile avoids pocket bulk",
      "Hand-burnished beeswax edges and durable bonded nylon saddle stitching"
    ],
    colors: [
      { name: "Vintage Tan", hex: "#9a3412" },
      { name: "Espresso Brown", hex: "#3b1e08" },
      { name: "Midnight Black", hex: "#18181b" }
    ],
    sizes: [],
    stock: 45,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    tags: ["wallet", "leather", "bifold", "rfid", "edc"]
  },
  {
    id: "prod-33",
    name: "Waterproof Waxed Canvas & Leather Duffel Bag",
    brand: "NordicVibe",
    category: "Accessories",
    subcategory: "Bags",
    price: 3699,
    originalPrice: 5299,
    discount: 30,
    rating: 4.8,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Heavy-duty 18oz waterproof waxed canvas travel bag with full-grain leather trim, dedicated ventilated shoe compartment, and padded shoulder strap.",
    specifications: {
      "Capacity": "45 Liters (TSA Airline Carry-On Compliant)",
      "Dimensions": "52cm x 30cm x 28cm",
      "Hardware": "Solid antiqued brass hardware & YKK zippers"
    },
    features: [
      "Separate side zippered waterproof compartment holds shoes up to UK 12",
      "Padded 15.6-inch laptop sleeve inside main compartment",
      "Water-repellent paraffin wax coating keeps clothes dry in heavy rain"
    ],
    colors: [
      { name: "Forest Olive", hex: "#365314" },
      { name: "Charcoal Grey", hex: "#374151" },
      { name: "Heritage Khaki", hex: "#a16207" }
    ],
    sizes: ["45L"],
    stock: 20,
    inStock: true,
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    tags: ["duffel", "bag", "travel", "canvas", "weekend"]
  },
  {
    id: "prod-34",
    name: "Minimalist Titanium RFID Cardholder",
    brand: "MinimalistCo",
    category: "Accessories",
    subcategory: "Wallets",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.7,
    reviews: 350,
    image: "https://images.unsplash.com/photo-1606503825008-909a67e753bf?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Slimline CNC-machined titanium cardholder with elastic silicone expansion band and integrated spring steel money clip.",
    specifications: {
      "Material": "Grade 5 Titanium Alloy Plates",
      "Capacity": "Holds 1 to 12 Cards securely + 10 cash notes",
      "Weight": "45 grams"
    },
    features: [
      "Card pop-up notch allows effortless one-finger card selection",
      "100% blocks wireless RFID skimming and data theft",
      "Scratch-resistant matte blasted finish"
    ],
    colors: [
      { name: "Gunmetal Grey", hex: "#4b5563" },
      { name: "Burnt Titanium Blue", hex: "#1e40af" }
    ],
    sizes: [],
    stock: 50,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    tags: ["cardholder", "titanium", "rfid", "minimalist", "edc"]
  },
  {
    id: "prod-35",
    name: "Heritage Braided Full-Grain Leather Belt",
    brand: "UrbanCraft",
    category: "Accessories",
    subcategory: "Belts",
    price: 999,
    originalPrice: 1599,
    discount: 37,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hand-braided 35mm wide full-grain Italian leather belt with solid brushed brass buckle. Features infinitely micro-adjustable prong fastening.",
    specifications: {
      "Width": "35mm (1.38 inches)",
      "Material": "100% Full-Grain Vegetable Tanned Leather",
      "Buckle": "Solid Cast Brass with Nickel-Free Finish"
    },
    features: [
      "Braided design allows pin to fasten anywhere for custom micro-fit",
      "Pairs effortlessly with jeans, chinos, and linen trousers",
      "Soft and supple leather with beveled hand-oiled edges"
    ],
    colors: [
      { name: "Dark Walnut", hex: "#451a03" },
      { name: "Chestnut Tan", hex: "#9a3412" }
    ],
    sizes: ["32-34", "36-38", "40-42"],
    stock: 35,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["belt", "leather", "braided", "accessories", "menswear"]
  },
  {
    id: "prod-36",
    name: "Nomad Tech Laptop Backpack with USB-C Port",
    brand: "MinimalistCo",
    category: "Accessories",
    subcategory: "Bags",
    price: 2999,
    originalPrice: 4299,
    discount: 30,
    rating: 4.9,
    reviews: 380,
    image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Weatherproof 25L commuter backpack featuring 180-degree lay-flat opening, magnetic Fidlock buckles, and external fast-charging USB port.",
    specifications: {
      "Capacity": "25 Liters / Fits laptops up to 16 inches",
      "Fabric": "900D Ballistic Cordura with TPU Waterproof Coating",
      "Weight": "980g"
    },
    features: [
      "Dedicated suspended 360-degree padded laptop and tablet compartment",
      "Luggage trolley pass-through strap for seamless airport travel",
      "Hidden anti-theft passport pocket against your back"
    ],
    colors: [
      { name: "Matte Stealth Black", hex: "#18181b" },
      { name: "Heather Slate", hex: "#475569" }
    ],
    sizes: ["25L"],
    stock: 28,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["backpack", "laptop", "tech", "commute", "bag"]
  },
  {
    id: "prod-37",
    name: "Voyager Automatic Mechanical Sports Watch",
    brand: "LuxeHorology",
    category: "Accessories",
    subcategory: "Watches",
    price: 12999,
    originalPrice: 18999,
    discount: 31,
    rating: 4.9,
    reviews: 160,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Self-winding 24-jewel Japanese automatic movement with exhibition open caseback, unidirectional ceramic bezel, and 200m water resistance.",
    specifications: {
      "Movement": "Seiko NH35A Automatic (41-hour power reserve)",
      "Bezel": "120-Click Unidirectional Scratchproof Ceramic",
      "Water Resistance": "20 ATM / 200M ISO 6425 Certified Diver",
      "Case": "316L Brushed Steel with Screw-Down Crown"
    },
    features: [
      "Automatic winding generated purely by natural wrist movement (no battery required)",
      "High-contrast Super-LumiNova BGW9 blue luminous hands and indices",
      "Micro-adjusting diver extension solid clasp"
    ],
    colors: [
      { name: "Emerald Green Bezel", hex: "#065f46" },
      { name: "Deep Ocean Blue", hex: "#1e3a8a" },
      { name: "Black Ceramic", hex: "#000000" }
    ],
    sizes: ["42mm"],
    stock: 10,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["watch", "automatic", "diver", "ceramic", "mechanical"]
  },
  {
    id: "prod-38",
    name: "Silk & Cashmere Lightweight Patterned Scarf",
    brand: "NordicVibe",
    category: "Accessories",
    subcategory: "Scarves",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.8,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sumptuously soft scarf woven in an 85% modal silk and 15% Himalayan cashmere blend with delicate fringed eyelash trims.",
    specifications: {
      "Dimensions": "200cm x 70cm Generous Wrap Size",
      "Composition": "85% Fine Modal Silk, 15% Mongolian Cashmere",
      "Hem": "Hand-Fringed Eyelash Hem"
    },
    features: [
      "Featherlight yet wonderfully warm around the neck",
      "Subtle geometric jacquard weave with elegant drape",
      "Dry clean recommended for long-lasting luxury feel"
    ],
    colors: [
      { name: "Burgundy Wine", hex: "#881337" },
      { name: "Silver Grey", hex: "#94a3b8" }
    ],
    sizes: [],
    stock: 22,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["scarf", "cashmere", "silk", "winter", "warm"]
  },

  // ---------------- HOME & LIFESTYLE (8 Products) ----------------
  {
    id: "prod-39",
    name: "Artisan Ceramic Pour-Over Coffee Set",
    brand: "HabitatLiving",
    category: "Home & Lifestyle",
    subcategory: "Kitchen",
    price: 1699,
    originalPrice: 2499,
    discount: 32,
    rating: 4.9,
    reviews: 280,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hand-thrown stoneware ceramic coffee dripper with heat-resistant borosilicate glass server carafe and walnut wood collar.",
    specifications: {
      "Capacity": "600ml (2-4 Cups of Specialty Coffee)",
      "Material": "Lead-Free Glazed Stoneware + Walnut Wood",
      "Compatibility": "Standard V60 02 Size Filters"
    },
    features: [
      "Internal spiral ribbing ensures optimal water flow and balanced extraction",
      "Heat-retentive ceramic keeps brewed coffee piping hot",
      "Microwave and dishwasher safe glass carafe"
    ],
    colors: [
      { name: "Matte Sandstone", hex: "#e5d5c5" },
      { name: "Speckled Black", hex: "#262626" }
    ],
    sizes: ["600ml"],
    stock: 30,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["coffee", "pour-over", "ceramic", "kitchen", "barista"]
  },
  {
    id: "prod-40",
    name: "Lumina Minimalist Touch Dimmable Desk Lamp",
    brand: "HabitatLiving",
    category: "Home & Lifestyle",
    subcategory: "Lighting",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    rating: 4.8,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Architectural anodized aluminum LED desk lamp with continuous smooth touch dimming, memory preset, and built-in 10W wireless charging base.",
    specifications: {
      "LED": "CRI 96+ Eye-Caring Flicker-Free LED",
      "Brightness": "800 Lumens Max with Stepless Dimming",
      "Charging": "10W Qi Wireless Fast Charging Base + USB-A Port",
      "Body": "CNC Anodized Aluminum with 180-degree multi-angle hinge"
    },
    features: [
      "Touch slide bar adjusts color temperature from warm 3000K to cool 6000K",
      "Built-in 45-minute reading auto-shutoff sleep timer",
      "Heavy stable weighted non-slip base"
    ],
    colors: [
      { name: "Space Grey", hex: "#374151" },
      { name: "Silver Frost", hex: "#e2e8f0" }
    ],
    sizes: [],
    stock: 25,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["lamp", "desk", "lighting", "wireless-charging", "workspace"]
  },
  {
    id: "prod-41",
    name: "PureBreeze Ultrasonic Cool Mist Aroma Diffuser",
    brand: "Botanica",
    category: "Home & Lifestyle",
    subcategory: "Wellness",
    price: 1399,
    originalPrice: 1999,
    discount: 30,
    rating: 4.7,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    description: "500ml ceramic essential oil ultrasonic diffuser with ultra-quiet whisper misting, ambient 7-color warm LED halo, and auto-off safety.",
    specifications: {
      "Capacity": "500ml Water Tank (Runs up to 16 Hours)",
      "Noise Level": "< 20 dB Whisper Quiet Ultrasonic",
      "Timer": "1h / 3h / 6h / Continuous Interval Modes"
    },
    features: [
      "Covers rooms up to 400 sq.ft with soothing aromatic cool mist",
      "BPA-free medical grade water tank with waterless auto-shutoff",
      "Ambient warm candlelight breathing mode for restful sleep"
    ],
    colors: [
      { name: "Glazed White Ceramic", hex: "#fafaf9" },
      { name: "Matte Terracotta", hex: "#c2410c" }
    ],
    sizes: ["500ml"],
    stock: 40,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["diffuser", "aromatherapy", "essential-oils", "wellness", "home"]
  },
  {
    id: "prod-42",
    name: "Ergonomic High-Back Breathable Mesh Task Chair",
    brand: "HabitatLiving",
    category: "Home & Lifestyle",
    subcategory: "Furniture",
    price: 8999,
    originalPrice: 13999,
    discount: 35,
    rating: 4.8,
    reviews: 190,
    image: "https://images.unsplash.com/photo-1580481077197-23f2b4b45e7f?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Full-body ergonomic office chair featuring dynamic self-adjusting lumbar support, 3D armrests, and high-tensile breathable Korean mesh.",
    specifications: {
      "Gas Lift": "Class-4 Heavy-Duty SGS Certified Hydraulic Piston",
      "Weight Capacity": "Tested for up to 150 kg (330 lbs)",
      "Recline": "90° to 135° Synchronous Tilt with 3 Lock Positions",
      "Wheels": "Smooth-Gliding PU Caster Wheels (Floor-Safe)"
    },
    features: [
      "Dynamic adaptive lumbar support automatically follows your spinal posture",
      "3D armrests adjust in height, angle, and forward/backward position",
      "Waterfall seat cushion edge relieves pressure on thighs during long work sessions"
    ],
    colors: [
      { name: "Stealth All-Black", hex: "#1e293b" },
      { name: "Modern Grey / White Frame", hex: "#e2e8f0" }
    ],
    sizes: [],
    stock: 12,
    inStock: true,
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    tags: ["chair", "ergonomic", "office", "furniture", "desk"]
  },
  {
    id: "prod-43",
    name: "Solid Oak Wood Acoustic Hexagon Wall Panels (Pack of 6)",
    brand: "HabitatLiving",
    category: "Home & Lifestyle",
    subcategory: "Decor",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    rating: 4.9,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Architectural sound-dampening wall panels made from natural oak veneer mounted on high-density recycled acoustic felt backing.",
    specifications: {
      "Quantity": "Pack of 6 Hexagon Tiles (Covers 6.5 sq.ft)",
      "Material": "Natural White Oak Veneer + Eco-PET Felt",
      "Installation": "Includes 3M Heavy Duty Adhesive Strips"
    },
    features: [
      "Significantly reduces room echo, slapback reverb, and noise for studio or home office",
      "FSC-certified sustainable natural wood finish",
      "Easy tool-free wall mounting in customized geometric patterns"
    ],
    colors: [
      { name: "Natural Warm Oak", hex: "#d4a373" },
      { name: "Smoked Black Ash", hex: "#1c1917" }
    ],
    sizes: ["Pack of 6"],
    stock: 25,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    tags: ["acoustic", "wall-panels", "oak", "decor", "home-studio"]
  },
  {
    id: "prod-44",
    name: "Weighted Calming Microfiber Blanket 7kg",
    brand: "HabitatLiving",
    category: "Home & Lifestyle",
    subcategory: "Bedding",
    price: 3299,
    originalPrice: 4799,
    discount: 31,
    rating: 4.8,
    reviews: 230,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Deep Touch Pressure therapeutic weighted blanket filled with hypoallergenic micro-glass beads for calming anxiety and deeper sleep.",
    specifications: {
      "Weight": "7.0 kg (Ideal for body weight 60-85 kg)",
      "Size": "150cm x 200cm (Queen Size)",
      "Fabric": "Ultra-soft Minky Velvet & Breathable Bamboo Cotton"
    },
    features: [
      "7-layer construction with precision 4-inch diamond stitching prevents bead leakage",
      "Dual-sided design: cooling bamboo for summer, cozy velvet for winter",
      "Includes 8 internal tie loops for duvet cover attachment"
    ],
    colors: [
      { name: "Slate Grey", hex: "#475569" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    sizes: ["7 kg (Queen)"],
    stock: 18,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["blanket", "weighted", "sleep", "bedding", "calming"]
  },
  {
    id: "prod-45",
    name: "Handwoven Jute & Cotton Bohemian Area Rug",
    brand: "HabitatLiving",
    category: "Home & Lifestyle",
    subcategory: "Decor",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    rating: 4.7,
    reviews: 160,
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Eco-friendly handmade natural fiber rug braided with organic bleached cotton yarns and golden Bengal jute for living rooms and bedrooms.",
    specifications: {
      "Dimensions": "4 x 6 Feet (120cm x 180cm)",
      "Composition": "60% Organic Jute, 40% Natural Cotton",
      "Thickness": "10mm Reversible Flatweave"
    },
    features: [
      "Artisan hand-loomed texture adds warmth and coastal boho charm",
      "Heavyweight reversible weave doubles product lifespan",
      "Biodegradable and free from chemical synthetic dyes"
    ],
    colors: [
      { name: "Natural Ivory / Jute", hex: "#e7d8c9" }
    ],
    sizes: ["4x6 Feet"],
    stock: 20,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["rug", "jute", "boho", "carpet", "living-room"]
  },
  {
    id: "prod-46",
    name: "Smart Wi-Fi Sunrise Alarm Clock & Sound Machine",
    brand: "AuraTech",
    category: "Home & Lifestyle",
    subcategory: "Wellness",
    price: 2399,
    originalPrice: 3499,
    discount: 31,
    rating: 4.8,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Natural sunrise simulation alarm clock with 20 soothing ambient sounds, FM radio, dual alarms, and app control with Alexa/Google Assistant.",
    specifications: {
      "Lighting": "Sunrise simulation from 1% to 100% brightness over 10-60 mins",
      "Sounds": "20 Sleep sounds (White Noise, Rain, Forest Birds, Ocean Waves)",
      "Smart Control": "Wi-Fi 2.4GHz + Smart Life App + Alexa / Google"
    },
    features: [
      "Wakes you gently with natural light mimicking a natural morning sunrise",
      "Sunset sleep-aid simulation dims light and fades ambient audio to induce deep sleep",
      "Dual alarms for weekdays and weekends with tap-to-snooze"
    ],
    colors: [
      { name: "Snow White", hex: "#ffffff" }
    ],
    sizes: [],
    stock: 24,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    tags: ["alarm-clock", "sunrise", "sleep", "smart-home", "wellness"]
  },

  // ---------------- BEAUTY & GROOMING (6 Products) ----------------
  {
    id: "prod-47",
    name: "20% Vitamin C + Ferulic Acid Glow Serum",
    brand: "GlowLab",
    category: "Beauty",
    subcategory: "Skincare",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.9,
    reviews: 530,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1608248597359-bb5c7b3ecf12?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Clinically formulated brightening facial serum with 20% Pure L-Ascorbic Acid, Ferulic Acid, and Vitamin E to fade dark spots and boost collagen.",
    specifications: {
      "Volume": "30ml / 1.0 fl.oz Amber Glass Dropper Bottle",
      "Key Ingredients": "20% L-Ascorbic Acid, 0.5% Ferulic Acid, 1% Vitamin E",
      "Skin Type": "Suitable for all skin types (Dermatologist Tested)"
    },
    features: [
      "Neutralizes free radicals and environmental UV damage",
      "Visibly brightens dull complexion and evens skin tone within 2 weeks",
      "Fragrance-free, paraben-free, and 100% cruelty-free vegan formulation"
    ],
    colors: [],
    sizes: ["30ml"],
    stock: 60,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["skincare", "serum", "vitamin-c", "glow", "beauty"]
  },
  {
    id: "prod-48",
    name: "Pure Botanical Sandalwood & Cedar Beard Oil",
    brand: "Botanica",
    category: "Beauty",
    subcategory: "Grooming",
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.8,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1608248597359-bb5c7b3ecf12?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Cold-pressed organic beard oil infused with Moroccan Argan oil, Golden Jojoba, and pure Indian Sandalwood essential oil to soften coarse whiskers.",
    specifications: {
      "Volume": "50ml Glass Dropper",
      "Ingredients": "Argan Oil, Jojoba Oil, Sweet Almond Oil, Sandalwood Essential Oil",
      "Texture": "Fast-absorbing, non-greasy dry oil finish"
    },
    features: [
      "Stops beard itch, dry skin flakes, and promotes thicker, healthier growth",
      "Subtle masculine scent of warm sandalwood, cedarwood, and amber",
      "100% organic cold-pressed botanicals without synthetic silicones"
    ],
    colors: [],
    sizes: ["50ml"],
    stock: 45,
    inStock: true,
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    tags: ["beard-oil", "grooming", "organic", "mens-care", "sandalwood"]
  },
  {
    id: "prod-49",
    name: "HydraLuxe Multi-Molecular Hyaluronic Acid Moisturizer",
    brand: "GlowLab",
    category: "Beauty",
    subcategory: "Skincare",
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.8,
    reviews: 390,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Oil-free water-gel face moisturizer with 5 molecular weights of Hyaluronic Acid, Ceramides, and Centella Asiatica for 72-hour deep hydration.",
    specifications: {
      "Volume": "100ml / 3.4 oz",
      "Texture": "Ultra-lightweight cooling hydro-gel",
      "Key Actives": "5D Hyaluronic Acid, 3 Essential Ceramides, Niacinamide"
    },
    features: [
      "Penetrates deep dermal layers to plump fine lines and restore moisture barrier",
      "Non-comedogenic formula won't clog pores or cause breakouts",
      "Instantly absorbs with a matte, non-sticky dewy finish"
    ],
    colors: [],
    sizes: ["100ml"],
    stock: 50,
    inStock: true,
    isFeatured: true,
    isTrending: false,
    isBestSeller: false,
    tags: ["moisturizer", "hyaluronic-acid", "skincare", "hydration", "beauty"]
  },
  {
    id: "prod-50",
    name: "Mineral Defense Invisible Matte SPF 50+ Sunscreen",
    brand: "GlowLab",
    category: "Beauty",
    subcategory: "Suncare",
    price: 649,
    originalPrice: 999,
    discount: 35,
    rating: 4.9,
    reviews: 480,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Broad-spectrum PA++++ 100% Zinc Oxide mineral sunscreen with zero white cast, sebum control silica, and blue light defense.",
    specifications: {
      "Volume": "80ml Tube",
      "Filters": "Non-Nano 18% Zinc Oxide Physical Filter",
      "Protection": "SPF 50+ / PA++++ (UVA/UVB Broad Spectrum)",
      "Water Resistance": "80 Minutes Sweat & Water Resistant"
    },
    features: [
      "Invisible matte finish works perfectly under makeup as a smoothing primer",
      "Reef-safe, fragrance-free, safe for sensitive and acne-prone skin",
      "Contains antioxidant green tea and vitamin E"
    ],
    colors: [],
    sizes: ["80ml"],
    stock: 70,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["sunscreen", "spf50", "mineral", "skincare", "matte"]
  },
  {
    id: "prod-51",
    name: "Restorative Peptide Botanical Night Cream",
    brand: "Botanica",
    category: "Beauty",
    subcategory: "Skincare",
    price: 999,
    originalPrice: 1599,
    discount: 37,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Overnight cellular renewal cream packed with Matrixyl 3000 peptides, Bakuchiol (natural retinol alternative), and organic Shea butter.",
    specifications: {
      "Volume": "50ml Jar",
      "Key Actives": "Matrixyl 3000, 1% Bakuchiol, Squalane, Shea Butter",
      "Usage": "Nightly application after cleansing and toning"
    },
    features: [
      "Accelerates nighttime skin regeneration and boosts elasticity without redness or peeling",
      "Deeply nourishes dry skin and smoothens texture while you sleep",
      "Infused with natural lavender and chamomile relaxing botanicals"
    ],
    colors: [],
    sizes: ["50ml"],
    stock: 35,
    inStock: true,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    tags: ["night-cream", "peptides", "anti-aging", "skincare", "bakuchiol"]
  },
  {
    id: "prod-52",
    name: "Rosemary & Biotin Scalp Stimulating Hair Serum",
    brand: "Botanica",
    category: "Beauty",
    subcategory: "Haircare",
    price: 749,
    originalPrice: 1199,
    discount: 37,
    rating: 4.9,
    reviews: 620,
    image: "https://images.unsplash.com/photo-1608248597359-bb5c7b3ecf12?auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Potent scalp treatment infused with pure rosemary essential oil, biotin, castor oil, and caffeine to strengthen hair roots and boost density.",
    specifications: {
      "Volume": "60ml Precision Dropper Bottle",
      "Ingredients": "Rosemary Leaf Oil, Biotin, Redensyl, Castor Seed Oil, Caffeine",
      "Application": "Apply 3-5 drops directly to scalp daily and massage"
    },
    features: [
      "Stimulates microcirculation to awaken dormant hair follicles",
      "Reduces hair fall and breakage while nourishing dry scalp",
      "Lightweight non-greasy herbal formula"
    ],
    colors: [],
    sizes: ["60ml"],
    stock: 55,
    inStock: true,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["hair-serum", "rosemary", "biotin", "haircare", "growth"]
  }
];

export const INITIAL_REVIEWS = {
  "prod-1": [
    {
      id: "rev-101",
      author: "Rahul Sharma",
      rating: 5,
      date: "2026-07-28",
      comment: "The noise cancellation is insane! I use these on flights and metro commutes in Delhi. Battery easily lasts the entire week on a single charge.",
      verified: true
    },
    {
      id: "rev-102",
      author: "Priya Patel",
      rating: 5,
      date: "2026-08-02",
      comment: "Super comfortable earcups and the sound signature is warm with crisp treble. Pairing with both my laptop and phone was effortless.",
      verified: true
    }
  ],
  "prod-2": [
    {
      id: "rev-201",
      author: "Vikram Malhotra",
      rating: 5,
      date: "2026-07-15",
      comment: "The AMOLED display is crystal clear even under harsh Indian sunlight. Heart rate and sleep tracking accuracy match my dedicated chest strap.",
      verified: true
    }
  ],
  "prod-11": [
    {
      id: "rev-301",
      author: "Ananya Deshmukh",
      rating: 5,
      date: "2026-08-10",
      comment: "The 480 GSM fabric weight is phenomenal. Best heavyweight hoodie I have ever owned in India. Fits perfectly boxy without being sloppy.",
      verified: true
    }
  ],
  "prod-21": [
    {
      id: "rev-401",
      author: "Amitabh Sen",
      rating: 5,
      date: "2026-08-04",
      comment: "Ran the 21K half-marathon in these shoes. The carbon plate propulsion saves so much calf fatigue. Excellent grip on wet roads!",
      verified: true
    }
  ]
};
