import { localRoutes, localRoutesTitle, localRoutesFooter, closestStopName } from "@/data/transport-content";

export type LandmarkCategory = "beach" | "sight" | "day-trip";

export interface Landmark {
  name: string;
  description: string;
  category: LandmarkCategory;
  image?: { src: string; alt: string };
  mapsUrl?: string;
  recommends?: number;
  distanceKm?: number;
  byCar?: string;
  onFoot?: string;
}

export interface Eatery {
  name: string;
  cuisine: string;
  description: string;
  recommends?: number;
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
    recommends: 40,
    distanceKm: 2.8,
    byCar: "6 min",
    onFoot: "38 min",
  },
  {
    name: "Glyki Nero Beach",
    description: "A blue-flag sandy beach with crystal-clear water and sea caves you can swim to. Quiet enough to hear the waves, lively enough to spend the whole day. Sunbeds, a beach bar, and the Sculpture Park are all within walking distance.",
    category: "beach",
    image: { src: base("CMN02655.jpg"), alt: "Teak outdoor sofa with white cushions on cliff-top restaurant terrace above turquoise sea" },
    mapsUrl: "https://maps.app.goo.gl/8dwRPbU6sPHBoeSe7",
    recommends: 8,
    distanceKm: 2.1,
    byCar: "5 min",
    onFoot: "30 min",
  },
  {
    name: "Konnos Beach",
    description: "Hidden gem in a sheltered turquoise bay between Ayia Napa and Protaras.",
    category: "beach",
    recommends: 206,
    distanceKm: 9.5,
    byCar: "12 min",
  },
  {
    name: "Cape Cavo Greco",
    description: "Stunning national park with sea views, hiking trails, and famous sea caves.",
    category: "beach",
    recommends: 113,
    distanceKm: 10,
    byCar: "15 min",
  },
  {
    name: "Protaras & Fig Tree Bay",
    description: "Crystal-clear water and golden sands, calm and family-friendly.",
    category: "beach",
    recommends: 11,
    distanceKm: 12.8,
    byCar: "17 min",
  },

  // ── Sights & Experiences ──
  {
    name: "Bridge of Love",
    description: "Natural limestone sea arch near Glyki Nero, most photographed at sunset. Local legend says a wish made kissing under the arch comes true.",
    category: "sight",
    image: { src: base("IMG_8384.JPG"), alt: "Rocky coastal inlet with turquoise water viewed from limestone cliff edge" },
    mapsUrl: "https://maps.app.goo.gl/QXrwF8hafJABpqHu7",
    recommends: 24,
    distanceKm: 2.6,
    byCar: "5 min",
    onFoot: "35 min",
  },
  {
    name: "Sculpture Park",
    description: "Open-air museum with international modern sculptures by the coast.",
    category: "sight",
    image: { src: base("IMG_6145.JPG"), alt: "Stone serpent sculpture on plinth overlooking rocky coastline and Mediterranean sea" },
    mapsUrl: "https://maps.app.goo.gl/PSQp57XUF8wGCd7H6",
    recommends: 108,
    distanceKm: 2.4,
    byCar: "5 min",
    onFoot: "35 min",
  },
  {
    name: "Ayia Napa Monastery",
    description: "Charming 16th-century monastery in the heart of town.",
    category: "sight",
    recommends: 51,
    distanceKm: 0.95,
    onFoot: "13 min",
  },
  {
    name: "Ayia Napa Square",
    description: "Vibrant heart of town: bars, clubs, restaurants, and live music.",
    category: "sight",
    recommends: 35,
    distanceKm: 0.7,
    onFoot: "10 min",
  },
  {
    name: "Ayia Napa Harbour",
    description: "Picturesque fishing harbour, perfect for a sunset stroll or boat trip.",
    category: "sight",
    recommends: 52,
    distanceKm: 1.7,
    byCar: "5 min",
    onFoot: "23 min",
  },
  {
    name: "WaterWorld Waterpark",
    description: "One of Europe's largest themed waterparks, fun for all ages.",
    category: "sight",
    recommends: 268,
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
    recommends: 12,
    distanceKm: 81,
    byCar: "1h",
  },
  {
    name: "Limassol Marina",
    description: "Medieval castle, chic marina, buzzing nightlife, and the ruins of Kourion nearby.",
    category: "day-trip",
    recommends: 232,
    distanceKm: 111,
    byCar: "1h20",
  },
  {
    name: "Aphrodite's Rock (Petra tou Romiou)",
    description: "Mythical birthplace of Aphrodite, magical at sunrise or sunset.",
    category: "day-trip",
    recommends: 261,
    distanceKm: 153,
    byCar: "1h30",
  },
  {
    name: "Cape Aspro",
    description: "Wild white cliffs along Limassol's coast. Perfect for sunset hikes.",
    category: "day-trip",
    distanceKm: 146,
    byCar: "1h30",
  },
  {
    name: "Tsiakkas Winery",
    description: "Family winery producing indigenous Cypriot varieties since 1988. Tours and tastings.",
    category: "day-trip",
    recommends: 19,
    distanceKm: 143,
    byCar: "1h40",
  },
  {
    name: "Kykkos Monastery",
    description: "The Holy Monastery of the Virgin of Kykkos was founded around the end of the 11th century by the Byzantine emperor Alexios I Komnenos.",
    category: "day-trip",
    image: { src: base("IMG_6479.JPG"), alt: "Kykkos Monastery courtyard with painted arched colonnade, bell tower, and forested hill" },
    mapsUrl: "https://maps.app.goo.gl/dTduWpMhdcSP1JqJ7",
    recommends: 87,
    distanceKm: 161,
    byCar: "2h",
  },
  {
    name: "Lofou Village",
    description: "Cobblestone streets, stone houses, local wine, and countryside views.",
    category: "day-trip",
    image: { src: base("IMG_6498.JPG"), alt: "Cobblestone village alley at night with string lights and decorated shop fronts" },
    mapsUrl: "https://maps.app.goo.gl/Zc6LD5D6RnjDYP6U6",
    recommends: 11,
    distanceKm: 135,
    byCar: "1h40",
  },
  {
    name: "Akama Forest Park",
    description: "Rugged ATV trails, the Blue Lagoon, and sea turtles at Lara Bay.",
    category: "day-trip",
    recommends: 193,
    distanceKm: 218,
    byCar: "3h",
  },
  {
    name: "Salt Lake",
    description: "Larnaca's salt lake, home to flamingos from November to March and the Hala Sultan Tekke shrine.",
    category: "day-trip",
    image: { src: base("IMG_6334.JPG"), alt: "Flat white salt lake surface under cloudy sky with distant city skyline" },
    mapsUrl: "https://maps.app.goo.gl/AzU391LB2ZNUPnLh9",
  },
];

export const eateries: Eatery[] = [
  {
    name: "Hungry Horse Taverna",
    cuisine: "Cypriot",
    description: "Traditional Cypriot dishes: kleftiko, grilled sea bream. Generous portions.",
    recommends: 10,
  },
  {
    name: "Farmers Traditional Tavern",
    cuisine: "Cypriot",
    description: "Rustic Cypriot cuisine, homemade dishes, and warm hospitality.",
  },
  {
    name: "Opa's Tavern",
    cuisine: "Cypriot meze",
    description: "Live music, dancing, and generous meze plates.",
  },
  {
    name: "Hokkaido Restaurant",
    cuisine: "Japanese",
    description: "Teppanyaki shows and fresh sushi, fun interactive dining.",
    recommends: 49,
  },
  {
    name: "Los Mexicanos",
    cuisine: "Mexican",
    description: "Colourful Mexican: fajitas, tacos, burritos. Great for a fun night out.",
  },
  {
    name: "Sigma Bakeries",
    cuisine: "Bakery / café",
    description: "Freshly baked goods, sandwiches, salads, and coffee. Vegan options available.",
  },
  {
    name: "Georgie's Handy Food",
    cuisine: "Pizza",
    description: "Oven-baked pizza to Italian standards: crispy crust, quality ingredients.",
  },
  {
    name: "RASOI Indian Cuisine",
    cuisine: "Indian",
    description: "Rich curries, fragrant biryanis, and freshly baked naan. Bold flavours.",
  },
];

export const gettingAroundTips = [
  "OSEA operates all buses (osea.com.cy). Tickets from the driver, cash only. Single €2 day / €3 night. Day pass €6, weekly €25.",
  "Rent a car for day trips. Cyprus drives on the left.",
  "In Ayia Napa, walking is often faster than the bus in the evenings.",
];

export {
  localRoutes as gettingAroundRoutes,
  localRoutesTitle as gettingAroundTitle,
  localRoutesFooter as gettingAroundFooter,
  closestStopName,
};

// External Airbnb guidebook - update URL when available
export const guidebookUrl = "https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F6442701&s=67&unique_share_id=bd825aca-e9bd-4d45-a11a-d481d65fa7b5";
