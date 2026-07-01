import { localRoutes, localRoutesTitle, localRoutesFooter, closestStopName } from "@/data/transport-content";

export type LandmarkCategory = "beach" | "sight" | "day-trip";

export interface Landmark {
  name: string;
  description: string;
  category: LandmarkCategory;
  image?: { src: string; alt: string };
  mapsUrl?: string;
  distanceKm?: number;
  byCar?: string;
  onFoot?: string;
}

export interface Eatery {
  name: string;
  cuisine: string;
  description: string;
  mapsUrl?: string;
}

const base = (filename: string) => `/images/gallery/landmarks/${filename}`;

export const landmarksIntro =
  "Ayia Napa is more than a beach destination. Ancient monasteries, sculptured coastlines, turquoise waters, and the warm Mediterranean light. All within reach from your doorstep.";

export const landmarks: Landmark[] = [
  // ── Beaches ──
  {
    name: "Nissi Beach",
    description: "Cyprus's most iconic beach: crystal-clear water and a famous sandbar you can walk across.",
    category: "beach",
    image: { src: base("nissi-beach.jpg"), alt: "Aerial view of Nissi Beach's turquoise water and small islet, dotted with swimmers" },
    mapsUrl: "https://maps.app.goo.gl/jEo6MbVe7tNniJFw5",
    distanceKm: 3.1,
    byCar: "7 min",
    onFoot: "38 min",
  },
  {
    name: "Glyki Nero Beach",
    description: "A blue-flag sandy beach with crystal-clear water and sea caves you can swim to.",
    category: "beach",
    image: { src: base("CMN02655.jpg"), alt: "Teak outdoor sofa with white cushions on cliff-top restaurant terrace above turquoise sea" },
    mapsUrl: "https://maps.app.goo.gl/8dwRPbU6sPHBoeSe7",
    distanceKm: 2.1,
    byCar: "6 min",
    onFoot: "29 min",
  },
  {
    name: "Konnos Beach",
    description: "Hidden gem in a sheltered turquoise bay between Ayia Napa and Protaras.",
    category: "beach",
    image: { src: base("konnos-beach.jpg"), alt: "Aerial view of Konnos Bay's sheltered cove with sunbeds lining the sandy shore" },
    mapsUrl: "https://maps.app.goo.gl/Eedn5AmB84jfKxkSA",
    distanceKm: 9.6,
    byCar: "13 min",
  },
  {
    name: "Cape Cavo Greco",
    description: "Stunning national park with sea views, hiking trails, and a hidden turquoise lagoon.",
    category: "beach",
    image: { src: base("cape-cavo-greco.jpg"), alt: "Turquoise lagoon and rocky headland at Cape Greco with tour boats anchored offshore" },
    mapsUrl: "https://maps.app.goo.gl/etxFT9YWc8YgrPnB9",
    distanceKm: 8.3,
    byCar: "10 min",
  },
  {
    name: "Sea Caves",
    description: "Dramatic coastal bluffs riddled with sea caves, popular with divers and cliff jumpers.",
    category: "beach",
    image: { src: base("sea-caves.jpg"), alt: "View through a sea cave arch out to the limestone cliffs and blue water of Cape Greco" },
    mapsUrl: "https://maps.app.goo.gl/CXuCSq48dZdcbum19",
    distanceKm: 7.5,
    byCar: "12 min",
  },
  {
    name: "Protaras & Fig Tree Bay",
    description: "Crystal-clear water and golden sands, calm and family-friendly.",
    category: "beach",
    image: { src: base("fig-tree-bay.jpg"), alt: "Aerial view of Fig Tree Bay's floating pontoon and anchored boats over turquoise water" },
    mapsUrl: "https://maps.app.goo.gl/v6NtwTid6CVnvMn18",
    distanceKm: 12.9,
    byCar: "17 min",
  },

  // ── Sights & Experiences ──
  {
    name: "Bridge of Love",
    description: "Natural limestone sea arch near Glyki Nero, most photographed at sunset. Local legend says a wish made kissing under the arch comes true.",
    category: "sight",
    image: { src: base("IMG_8384.JPG"), alt: "Rocky coastal inlet with turquoise water viewed from limestone cliff edge" },
    mapsUrl: "https://maps.app.goo.gl/QXrwF8hafJABpqHu7",
    distanceKm: 2.6,
    byCar: "5 min",
    onFoot: "36 min",
  },
  {
    name: "Sculpture Park",
    description: "Open-air museum with international modern sculptures by the coast.",
    category: "sight",
    image: { src: base("IMG_6145.JPG"), alt: "Stone serpent sculpture on plinth overlooking rocky coastline and Mediterranean sea" },
    mapsUrl: "https://maps.app.goo.gl/PSQp57XUF8wGCd7H6",
    distanceKm: 2.4,
    byCar: "4 min",
    onFoot: "35 min",
  },
  {
    name: "Ayia Napa Monastery",
    description: "Charming 16th-century monastery in the heart of town.",
    category: "sight",
    image: { src: base("ayia-napa-monastery.jpg"), alt: "Stone archway framing the monastery's domed roof and bell tower among cypress trees" },
    mapsUrl: "https://maps.app.goo.gl/szkmUtGRe21X3L918",
    distanceKm: 0.75,
    onFoot: "10 min",
  },
  {
    name: "Ayia Napa Square",
    description: "Vibrant heart of town: bars, clubs, restaurants, and live music.",
    category: "sight",
    image: { src: base("ayia-napa-square.jpg"), alt: "Seahorse fountain sculpture in the town square under a clear blue sky" },
    mapsUrl: "https://maps.app.goo.gl/s9pquVpd1QnDScZw6",
    distanceKm: 0.7,
    onFoot: "10 min",
  },
  {
    name: "Ayia Napa Harbour",
    description: "Picturesque fishing harbour, perfect for a sunset stroll or boat trip.",
    category: "sight",
    image: { src: base("ayia-napa-harbour.jpg"), alt: "Blue fishing boats moored along the harbour promenade lined with palm trees" },
    mapsUrl: "https://maps.app.goo.gl/h493aRU9kv6joZ8o7",
    distanceKm: 2.1,
    byCar: "6 min",
    onFoot: "24 min",
  },
  {
    name: "WaterWorld Waterpark",
    description: "One of Europe's largest themed waterparks, fun for all ages.",
    category: "sight",
    image: { src: base("waterworld-waterpark.jpg"), alt: "Crowd of visitors in the wave pool in front of WaterWorld's Greek-columned entrance" },
    mapsUrl: "https://maps.app.goo.gl/Nmt2yGcak6Q4shnC8",
    distanceKm: 5.7,
    byCar: "8 min",
  },

  // ── Day Trips ──
  {
    name: "Pano Lefkara",
    description: "Mountain village for handmade lace and silverwork. Da Vinci visited in 1481.",
    category: "day-trip",
    image: { src: base("IMG_6379.JPG"), alt: "Cobblestone alley with pink bougainvillea on stone buildings and ornate streetlamp" },
    mapsUrl: "https://maps.app.goo.gl/Qzz9uZQFL7tpakeg6",
    distanceKm: 82,
    byCar: "1h",
  },
  {
    name: "Limassol Marina",
    description: "Medieval castle, chic marina, buzzing nightlife, and the ruins of Kourion nearby.",
    category: "day-trip",
    image: { src: base("limassol-marina.jpg"), alt: "Aerial view of Limassol Marina's yacht berths and waterfront apartment buildings" },
    mapsUrl: "https://maps.app.goo.gl/gxLUFzLxCnQbxJb66",
    distanceKm: 111,
    byCar: "1h25",
  },
  {
    name: "Aphrodite's Rock (Petra tou Romiou)",
    description: "Mythical birthplace of Aphrodite, magical at sunrise or sunset.",
    category: "day-trip",
    image: { src: base("aphrodites-rock.jpg"), alt: "Aphrodite's Rock sea stacks rising from calm water at dusk" },
    mapsUrl: "https://maps.app.goo.gl/Dhaim4NTUf3egBQH9",
    distanceKm: 153,
    byCar: "1h40",
  },
  {
    name: "Cape Aspro",
    description: "Wild white cliffs along Limassol's coast. Perfect for sunset hikes.",
    category: "day-trip",
    image: { src: base("cape-aspro.jpg"), alt: "Ridged white chalk cliffs of Cape Aspro dropping to a narrow pebble beach" },
    mapsUrl: "https://maps.app.goo.gl/q2VgQURMuzfMN3Hj6",
    distanceKm: 146,
    byCar: "1h40",
  },
  {
    name: "Tsiakkas Winery",
    description: "Family winery producing indigenous Cypriot varieties since 1988. Tours and tastings.",
    category: "day-trip",
    image: { src: base("tsiakkas-winery.jpg"), alt: "Terraced vineyard rows curving down a mountainside in autumn colour" },
    mapsUrl: "https://maps.app.goo.gl/vQtSygjawNFikG9s7",
    distanceKm: 143,
    byCar: "1h50",
  },
  {
    name: "Kykkos Monastery",
    description: "The Holy Monastery of the Virgin of Kykkos was founded around the end of the 11th century by the Byzantine emperor Alexios I Komnenos.",
    category: "day-trip",
    image: { src: base("IMG_6479.JPG"), alt: "Kykkos Monastery courtyard with painted arched colonnade, bell tower, and forested hill" },
    mapsUrl: "https://maps.app.goo.gl/dTduWpMhdcSP1JqJ7",
    distanceKm: 161,
    byCar: "2h20",
  },
  {
    name: "Lofou Village",
    description: "Cobblestone streets, stone houses, local wine, and countryside views.",
    category: "day-trip",
    image: { src: base("IMG_6498.JPG"), alt: "Cobblestone village alley at night with string lights and decorated shop fronts" },
    mapsUrl: "https://maps.app.goo.gl/Zc6LD5D6RnjDYP6U6",
    distanceKm: 135,
    byCar: "1h40",
  },
  {
    name: "Akama Forest Park",
    description: "Rugged ATV trails, the Blue Lagoon, and sea turtles at Lara Bay.",
    category: "day-trip",
    image: { src: base("akama-forest-park.jpg"), alt: "Aerial view of the Akamas Peninsula's rocky coves and forested coastline" },
    mapsUrl: "https://maps.app.goo.gl/jYsGXobyuh7Q3QS66",
    distanceKm: 218,
    byCar: "3h15",
  },
  {
    name: "Salt Lake",
    description: "Larnaca's salt lake, home to flamingos from November to March and the Hala Sultan Tekke shrine.",
    category: "day-trip",
    image: { src: base("IMG_6334.JPG"), alt: "Flat white salt lake surface under cloudy sky with distant city skyline" },
    mapsUrl: "https://maps.app.goo.gl/AzU391LB2ZNUPnLh9",
    distanceKm: 56,
    byCar: "37 min",
  },
];

export const eateries: Eatery[] = [
  {
    name: "Hungry Horse Taverna",
    cuisine: "Cypriot",
    description: "Traditional Cypriot dishes: kleftiko, grilled sea bream. Generous portions.",
    mapsUrl: "https://maps.app.goo.gl/K44FShUni2WXxK4EA",
  },
  {
    name: "Farmers Traditional Tavern",
    cuisine: "Cypriot",
    description: "Rustic Cypriot cuisine, homemade dishes, and warm hospitality.",
    mapsUrl: "https://maps.app.goo.gl/J1UQBKy9NsVQYFWC7",
  },
  {
    name: "Opa's Tavern",
    cuisine: "Cypriot meze",
    description: "Live music, dancing, and generous meze plates.",
    mapsUrl: "https://maps.app.goo.gl/tJsvYi7SKnknYatZ7",
  },
  {
    name: "Hokkaido Restaurant",
    cuisine: "Japanese",
    description: "Teppanyaki shows and fresh sushi, fun interactive dining.",
    mapsUrl: "https://maps.app.goo.gl/g6yzZpPMaW7PGrvE7",
  },
  {
    name: "Los Mexicanos",
    cuisine: "Mexican",
    description: "Colourful Mexican: fajitas, tacos, burritos. Great for a fun night out.",
    mapsUrl: "https://maps.app.goo.gl/wTXxC8mEb3UApn5QA",
  },
  {
    name: "Sigma Bakeries",
    cuisine: "Bakery / café",
    description: "Freshly baked goods, sandwiches, salads, and coffee. Vegan options available.",
    mapsUrl: "https://maps.app.goo.gl/ML5ccRzNWpTJRok7A",
  },
  {
    name: "Georgie's Handy Food",
    cuisine: "Pizza",
    description: "Oven-baked pizza to Italian standards: crispy crust, quality ingredients.",
    mapsUrl: "https://maps.app.goo.gl/tvnd8azy4oyxa8kF7",
  },
  {
    name: "RASOI Indian Cuisine",
    cuisine: "Indian",
    description: "Rich curries, fragrant biryanis, and freshly baked naan. Bold flavours.",
    mapsUrl: "https://maps.app.goo.gl/CYD2nHpweUxoJQTS8",
  },
  {
    name: "Zorbas Bakery",
    cuisine: "Bakery / coffee",
    description: "Local favourite for coffee beans, ground fresh on the spot. Bring a bag home for proper espresso.",
    mapsUrl: "https://maps.app.goo.gl/5DSVZEgE7jp5Tkm68",
  },
];

export const gettingAroundTips = [
  "OSEA operates all buses (osea.com.cy). Tickets from the driver, cash only. Single €2 day / €3 night. Day pass €6, weekly €25.",
  "Rent a car for day trips. Cyprus drives on the left.",
  "In Ayia Napa, walking is often faster than the bus in the evenings.",
];

export const smartCardTip = {
  text: "Skip the cash: a Non Personalised Smart Card (€5, rechargeable) works across OSEA, Pame, and InterCity buses islandwide.",
  label: "publictransport.com.cy",
  url: "https://www.publictransport.com.cy/cms/page/travel-cards",
};

export {
  localRoutes as gettingAroundRoutes,
  localRoutesTitle as gettingAroundTitle,
  localRoutesFooter as gettingAroundFooter,
  closestStopName,
};

// External Airbnb guidebook - update URL when available
export const guidebookUrl = "https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F6442701&s=67&unique_share_id=bd825aca-e9bd-4d45-a11a-d481d65fa7b5";
