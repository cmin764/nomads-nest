export type GalleryCategory =
  | "entrance"
  | "bedroom"
  | "bathroom"
  | "kitchen"
  | "living-area"
  | "terrace"
  | "safety";

export interface GalleryRoom {
  slug: GalleryCategory;
  name: string;
  tagline: string;
  emoji: string;
  coverImage: string;
  images: { src: string; alt: string }[];
}

// Navigation cycle order — safety is last and wraps back to entrance
export const roomOrder: GalleryCategory[] = [
  "entrance",
  "bedroom",
  "bathroom",
  "kitchen",
  "living-area",
  "terrace",
  "safety",
];

const base = (slug: GalleryCategory, filename: string) =>
  `/images/gallery/${slug}/${filename}`;

export const allRooms: GalleryRoom[] = [
  {
    slug: "entrance",
    name: "Entrance",
    tagline: "Step inside",
    emoji: "🚪",
    coverImage: base("entrance", "CMN02030.JPG"),
    images: [{ src: base("entrance", "CMN02030.JPG"), alt: "Entrance" }],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    tagline: "Feel the sea breeze",
    emoji: "🛏",
    coverImage: base("bedroom", "B-bedroom-1.JPG"),
    images: [
      { src: base("bedroom", "B-bedroom-1.JPG"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-2.jpg"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-3.JPG"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-4.JPG"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-5.jpg"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-6.JPG"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-7.JPG"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-8.JPG"), alt: "Bedroom" },
      { src: base("bedroom", "B-bedroom-8a.JPG"), alt: "Bedroom detail" },
      { src: base("bedroom", "B-bedroom-8b.JPG"), alt: "Bedroom detail" },
    ],
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    tagline: "Start fresh, end relaxed",
    emoji: "🚿",
    coverImage: base("bathroom", "C-bathroom-0.jpg"),
    images: [
      { src: base("bathroom", "C-bathroom-0.jpg"), alt: "Bathroom" },
      { src: base("bathroom", "C-bathroom-1.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "C-bathroom-2.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "C-bathroom-3.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "C-bathroom-4.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "C-bathroom-5.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "CMN01715.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "CMN01741.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "CMN01742.JPG"), alt: "Bathroom" },
      { src: base("bathroom", "IMG_8757.jpg"), alt: "Bathroom" },
    ],
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    tagline: "Savor the moment",
    emoji: "🍳",
    coverImage: base("kitchen", "D-kitchen-1.JPG"),
    images: [
      { src: base("kitchen", "D-kitchen-1.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "D-kitchen-2.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "D-kitchen-3.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "D-kitchen-4.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "D-kitchen-5.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "D-kitchen-5a.JPG"), alt: "Kitchen detail" },
      { src: base("kitchen", "D-kitchen-5b.JPG"), alt: "Kitchen detail" },
      { src: base("kitchen", "D-kitchen-6.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "D-kitchen-7.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "D-kitchen-8.JPG"), alt: "Kitchen" },
      { src: base("kitchen", "CMN01665.JPG"), alt: "Kitchen" },
    ],
  },
  {
    slug: "living-area",
    name: "Living Area",
    tagline: "Your cozy corner",
    emoji: "🛋",
    coverImage: base("living-area", "CMN01555.JPG"),
    images: [
      { src: base("living-area", "CMN01555.JPG"), alt: "Living area" },
      { src: base("living-area", "CMN01701.JPG"), alt: "Living area" },
      { src: base("living-area", "D-living-9.JPG"), alt: "Living area" },
      { src: base("living-area", "D-living-9a.jpg"), alt: "Living area detail" },
      { src: base("living-area", "D-living-9b.JPG"), alt: "Living area detail" },
      { src: base("living-area", "D-living-10.JPG"), alt: "Living area" },
      { src: base("living-area", "D-living-11.JPG"), alt: "Living area" },
      { src: base("living-area", "D-living-11a.JPG"), alt: "Living area detail" },
      { src: base("living-area", "D-living-11b.JPG"), alt: "Living area detail" },
      { src: base("living-area", "D-living-12.JPG"), alt: "Living area" },
      { src: base("living-area", "D-living-13.jpg"), alt: "Living area" },
      { src: base("living-area", "D-living-14.jpg"), alt: "Living area" },
    ],
  },
  {
    slug: "terrace",
    name: "Terrace",
    tagline: "Sun, coffee & palm trees",
    emoji: "☀",
    coverImage: base("terrace", "A-terrace-1.JPG"),
    images: [
      { src: base("terrace", "A-terrace-1.JPG"), alt: "Terrace" },
      { src: base("terrace", "A-terrace-2.jpg"), alt: "Terrace" },
      { src: base("terrace", "A-terrace-3.JPG"), alt: "Terrace" },
      { src: base("terrace", "A-terrace-4.JPG"), alt: "Terrace" },
      { src: base("terrace", "A-terrace-5.JPG"), alt: "Terrace" },
      { src: base("terrace", "A-terrace-6.JPG"), alt: "Terrace" },
      { src: base("terrace", "A-terrace-7.JPG"), alt: "Terrace" },
      { src: base("terrace", "A-terrace-8.JPG"), alt: "Terrace" },
      { src: base("terrace", "Z-terrace-last.jpg"), alt: "Terrace" },
    ],
  },
  {
    slug: "safety",
    name: "Safety",
    tagline: "Your peace of mind",
    emoji: "🛡",
    coverImage: base("safety", "CMN01759.JPG"),
    images: [
      { src: base("safety", "CMN01759.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN01991.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN01998.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN02002.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN02010.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN02014.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN02482.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN02483.JPG"), alt: "Safety equipment" },
      { src: base("safety", "CMN02484.JPG"), alt: "Safety equipment" },
    ],
  },
];

// Shown on the /gallery index (no safety)
export const galleryIndexRooms = allRooms.slice(0, 6);

export const introQuote =
  "This stylish apartment combines comfort and elegance, featuring a serene marine-themed bedroom in soothing blue tones, a cozy living area, a fully equipped kitchen, and a spacious terrace where you can unwind and enjoy the fresh air.";
