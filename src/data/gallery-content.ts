export type GalleryCategory =
  | "terrace"
  | "bedroom"
  | "living-area"
  | "kitchen"
  | "bathroom"
  | "entrance";

export interface GalleryRoom {
  slug: GalleryCategory;
  name: string;
  tagline: string;
  emoji: string;
  coverImage: string;
  images: { src: string; alt: string; width: number; height: number }[];
}

// Navigation cycle order for room pages (prev/next)
export const roomOrder: GalleryCategory[] = [
  "terrace",
  "bedroom",
  "living-area",
  "kitchen",
  "bathroom",
  "entrance",
];

const base = (slug: GalleryCategory, filename: string) =>
  `/images/gallery/${slug}/${filename}`;

export const allRooms: GalleryRoom[] = [
  {
    slug: "terrace",
    name: "Terrace",
    tagline: "Sun, coffee & palm trees",
    emoji: "☀",
    coverImage: base("terrace", "A-terrace-4.JPG"),
    images: [
      { src: base("terrace", "A-terrace-1.JPG"), alt: "Terrace with dining table, chairs and palm tree", width: 1600, height: 1066 },
      { src: base("terrace", "A-terrace-2.jpg"), alt: "Terrace wooden table with wine and afternoon light", width: 1600, height: 1066 },
      { src: base("terrace", "A-terrace-4.JPG"), alt: "Wine glasses and bottle on terrace table at dusk", width: 2048, height: 1365 },
      { src: base("terrace", "A-terrace-3.JPG"), alt: "Round woven mirror on white terrace wall", width: 2048, height: 1365 },
      { src: base("terrace", "A-terrace-5.JPG"), alt: "Terrace mirror reflecting palm tree and pool", width: 1365, height: 2048 },
      { src: base("terrace", "A-terrace-6.JPG"), alt: "Terrace set for dining under umbrella", width: 1365, height: 2048 },
      { src: base("terrace", "A-terrace-7.JPG"), alt: "Terrace corner with plants and outdoor seating", width: 1600, height: 1066 },
      { src: base("terrace", "Z-terrace-last.jpg"), alt: "Terrace at sunset with warm ambient light", width: 1600, height: 1066 },
    ],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    tagline: "Feel the sea breeze",
    emoji: "🛏",
    coverImage: base("bedroom", "B-bedroom-1.JPG"),
    images: [
      { src: base("bedroom", "B-bedroom-1.JPG"), alt: "Double bed with navy headboard and folded blue towels", width: 2048, height: 1365 },
      { src: base("bedroom", "B-bedroom-2.jpg"), alt: "Bedroom corner with floor lamp and wardrobe", width: 2048, height: 1365 },
      { src: base("bedroom", "B-bedroom-4.JPG"), alt: "Wardrobe and vanity area", width: 1365, height: 2048 },
      { src: base("bedroom", "B-bedroom-5.jpg"), alt: "Rattan pendant lamp and bedside nightstand", width: 2048, height: 1365 },
      { src: base("bedroom", "CMN01491.JPG"), alt: "Bedroom detail", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01430.JPG"), alt: "Bedroom detail", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01478.JPG"), alt: "Bedroom with natural light and furnishings", width: 1333, height: 2000 },
      { src: base("bedroom", "CMN01461.JPG"), alt: "Bedroom detail", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01493.JPG"), alt: "Bedroom detail", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01457.JPG"), alt: "Bedroom overview", width: 4672, height: 7008 },
      { src: base("bedroom", "B-bedroom-8b.JPG"), alt: "Bedroom decorative accessories", width: 1365, height: 2048 },
    ],
  },
  {
    slug: "living-area",
    name: "Living Area",
    tagline: "Your cozy corner",
    emoji: "🛋",
    coverImage: base("living-area", "D-living-9.JPG"),
    images: [
      { src: base("living-area", "D-living-9.JPG"), alt: "Navy sofa with yellow cushions under parrot painting", width: 2048, height: 1366 },
      { src: base("living-area", "D-living-10.JPG"), alt: "Armchair and gold coffee table with fresh fruit", width: 2048, height: 1365 },
      { src: base("living-area", "D-living-9a.jpg"), alt: "Living area corner with velvet armchair", width: 1600, height: 1103 },
      { src: base("living-area", "D-living-11.JPG"), alt: "TV unit and living area décor", width: 2048, height: 1366 },
      { src: base("living-area", "D-living-11b.JPG"), alt: "Living area overview from above", width: 2048, height: 1365 },
      { src: base("living-area", "D-living-12.JPG"), alt: "Dining table with chairs in open-plan area", width: 1365, height: 2048 },
      { src: base("living-area", "D-living-13.jpg"), alt: "Living area with sofa and dining corner", width: 2048, height: 1536 },
      { src: base("living-area", "D-living-14.jpg"), alt: "Open-plan living area towards the kitchen", width: 1600, height: 1210 },
      { src: base("living-area", "CMN01555.JPG"), alt: "Parrot painting, tropical artwork above the sofa", width: 2048, height: 1366 },
      { src: base("living-area", "CMN01769.JPG"), alt: "Living area detail", width: 1333, height: 2000 },
    ],
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    tagline: "Savor the moment",
    emoji: "🍳",
    coverImage: base("kitchen", "D-kitchen-3.JPG"),
    images: [
      { src: base("kitchen", "D-kitchen-1.JPG"), alt: "Full kitchen with dining area, refrigerator and washing machine", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-3.JPG"), alt: "Dining table with marble top and kitchen counter", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-2.JPG"), alt: "Kitchen counter with appliances and open shelving", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-4.JPG"), alt: "Kitchen shelving with spice rack and utensils", width: 1365, height: 2048 },
      { src: base("kitchen", "D-kitchen-5.JPG"), alt: "Electric hob and cooking area", width: 2048, height: 1366 },
      { src: base("kitchen", "D-kitchen-5b.JPG"), alt: "Toaster and kettle detail", width: 1365, height: 2048 },
      { src: base("kitchen", "D-kitchen-6.JPG"), alt: "Kitchen sink and food prep area", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-7.JPG"), alt: "Kitchen corner with appliances", width: 1333, height: 2000 },
      { src: base("kitchen", "D-kitchen-8.JPG"), alt: "Kitchen with dining chairs and natural light", width: 2048, height: 1365 },
      { src: base("kitchen", "CMN01537.JPG"), alt: "Kitchen detail", width: 1333, height: 2000 },
      { src: base("kitchen", "CMN01547.JPG"), alt: "Kitchen detail", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01571.JPG"), alt: "Kitchen detail", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01590.JPG"), alt: "Kitchen detail", width: 1333, height: 2000 },
      { src: base("kitchen", "CMN01603.JPG"), alt: "Kitchen detail", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01607.JPG"), alt: "Kitchen detail", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01625.JPG"), alt: "Kitchen detail", width: 2000, height: 1333 },
    ],
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    tagline: "Start fresh, end relaxed",
    emoji: "🚿",
    coverImage: base("bathroom", "C-bathroom-0.jpg"),
    images: [
      { src: base("bathroom", "C-bathroom-0.jpg"), alt: "Bathroom with shower cabin, toilet and circular mirror", width: 1199, height: 1600 },
      { src: base("bathroom", "C-bathroom-2.JPG"), alt: "Full bathroom view with tiled walls", width: 1365, height: 2048 },
      { src: base("bathroom", "C-bathroom-1.JPG"), alt: "Bathroom sink and storage shelves", width: 1066, height: 1600 },
      { src: base("bathroom", "C-bathroom-3.JPG"), alt: "Shower cabin with glass door", width: 1066, height: 1600 },
      { src: base("bathroom", "C-bathroom-4.JPG"), alt: "Bathroom storage and towel rail", width: 1365, height: 2048 },
      { src: base("bathroom", "C-bathroom-5.JPG"), alt: "Bathroom with natural window light", width: 1600, height: 1066 },

      { src: base("bathroom", "CMN01741.JPG"), alt: "Bathroom floor with mosaic tiles", width: 2048, height: 1366 },
      { src: base("bathroom", "IMG_8759.jpg"), alt: "Bathroom overview showing the shower and toilet", width: 1500, height: 2000 },
      { src: base("bathroom", "IMG_8765.jpg"), alt: "Bathroom detail", width: 1350, height: 1800 },
    ],
  },
  {
    slug: "entrance",
    name: "Entrance",
    tagline: "Step inside",
    emoji: "🚪",
    coverImage: base("entrance", "CMN02030.JPG"),
    images: [
      { src: base("entrance", "CMN02024.JPG"), alt: "Entrance detail", width: 1333, height: 2000 },
      { src: base("entrance", "CMN02030.JPG"), alt: "Apartment door number 5 with key lockbox", width: 1365, height: 2048 },
      { src: base("entrance", "CMN02016.JPG"), alt: "Entrance detail", width: 1333, height: 2000 },
    ],
  },
];

// Shown on the /gallery index as standard room cards (top 6)
export const galleryIndexRooms = allRooms;

export const introQuote =
  "Every corner tells its own story. Walk through and see for yourself.";
