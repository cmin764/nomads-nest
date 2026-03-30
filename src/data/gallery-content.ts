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
  images: { src: string; alt: string }[];
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
      { src: base("terrace", "A-terrace-1.JPG"), alt: "Terrace with dining table, chairs and palm tree" },
      { src: base("terrace", "A-terrace-2.jpg"), alt: "Terrace wooden table with wine and afternoon light" },
      { src: base("terrace", "A-terrace-4.JPG"), alt: "Wine glasses and bottle on terrace table at dusk" },
      { src: base("terrace", "A-terrace-3.JPG"), alt: "Round woven mirror on white terrace wall" },
      { src: base("terrace", "A-terrace-5.JPG"), alt: "Terrace mirror reflecting palm tree and pool" },
      { src: base("terrace", "A-terrace-6.JPG"), alt: "Terrace set for dining under umbrella" },
      { src: base("terrace", "A-terrace-7.JPG"), alt: "Terrace corner with plants and outdoor seating" },
      { src: base("terrace", "Z-terrace-last.jpg"), alt: "Terrace at sunset with warm ambient light" },
    ],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    tagline: "Feel the sea breeze",
    emoji: "🛏",
    coverImage: base("bedroom", "B-bedroom-1.JPG"),
    images: [
      { src: base("bedroom", "B-bedroom-1.JPG"), alt: "Double bed with navy headboard and folded blue towels" },
      { src: base("bedroom", "B-bedroom-2.jpg"), alt: "Bedroom corner with floor lamp and wardrobe" },
      { src: base("bedroom", "B-bedroom-4.JPG"), alt: "Wardrobe and vanity area" },
      { src: base("bedroom", "B-bedroom-5.jpg"), alt: "Rattan pendant lamp and bedside nightstand" },
      { src: base("bedroom", "B-bedroom-8b.JPG"), alt: "Bedroom decorative accessories" },
      { src: base("bedroom", "CMN01478.JPG"), alt: "Bedroom with natural light and furnishings" },
      { src: base("bedroom", "CMN01461.JPG"), alt: "Bedroom detail" },
      { src: base("bedroom", "CMN01491.JPG"), alt: "Bedroom detail" },
      { src: base("bedroom", "CMN01493.JPG"), alt: "Bedroom detail" },
      { src: base("bedroom", "CMN01430.JPG"), alt: "Bedroom detail" },
    ],
  },
  {
    slug: "living-area",
    name: "Living Area",
    tagline: "Your cozy corner",
    emoji: "🛋",
    coverImage: base("living-area", "D-living-9.JPG"),
    images: [
      { src: base("living-area", "D-living-9.JPG"), alt: "Navy sofa with yellow cushions under parrot painting" },
      { src: base("living-area", "D-living-10.JPG"), alt: "Armchair and gold coffee table with fresh fruit" },
      { src: base("living-area", "D-living-9a.jpg"), alt: "Living area corner with velvet armchair" },
      { src: base("living-area", "D-living-9b.JPG"), alt: "Sofa and coffee table with afternoon light" },
      { src: base("living-area", "D-living-11.JPG"), alt: "TV unit and living area décor" },
      { src: base("living-area", "D-living-11a.JPG"), alt: "Television and entertainment unit detail" },
      { src: base("living-area", "D-living-11b.JPG"), alt: "Living area overview from above" },
      { src: base("living-area", "D-living-12.JPG"), alt: "Dining table with chairs in open-plan area" },
      { src: base("living-area", "D-living-13.jpg"), alt: "Living area with sofa and dining corner" },
      { src: base("living-area", "D-living-14.jpg"), alt: "Open-plan living area towards the kitchen" },
      { src: base("living-area", "CMN01555.JPG"), alt: "Parrot painting — tropical artwork above the sofa" },
      { src: base("living-area", "CMN01701.JPG"), alt: "TV unit with coral sculpture decoration" },
    ],
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    tagline: "Savor the moment",
    emoji: "🍳",
    coverImage: base("kitchen", "D-kitchen-3.JPG"),
    images: [
      { src: base("kitchen", "D-kitchen-1.JPG"), alt: "Full kitchen with dining area, refrigerator and washing machine" },
      { src: base("kitchen", "D-kitchen-3.JPG"), alt: "Dining table with marble top and kitchen counter" },
      { src: base("kitchen", "D-kitchen-2.JPG"), alt: "Kitchen counter with appliances and open shelving" },
      { src: base("kitchen", "D-kitchen-4.JPG"), alt: "Kitchen shelving with spice rack and utensils" },
      { src: base("kitchen", "D-kitchen-5.JPG"), alt: "Electric hob and cooking area" },
      { src: base("kitchen", "D-kitchen-5a.JPG"), alt: "Espresso machine on kitchen shelf" },
      { src: base("kitchen", "D-kitchen-5b.JPG"), alt: "Toaster and kettle detail" },
      { src: base("kitchen", "D-kitchen-6.JPG"), alt: "Kitchen sink and food prep area" },
      { src: base("kitchen", "D-kitchen-8.JPG"), alt: "Kitchen with dining chairs and natural light" },
      { src: base("kitchen", "CMN01665.JPG"), alt: "Kitchen appliances and cookware" },
    ],
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    tagline: "Start fresh, end relaxed",
    emoji: "🚿",
    coverImage: base("bathroom", "C-bathroom-0.jpg"),
    images: [
      { src: base("bathroom", "C-bathroom-0.jpg"), alt: "Bathroom with shower cabin, toilet and circular mirror" },
      { src: base("bathroom", "C-bathroom-2.JPG"), alt: "Full bathroom view with tiled walls" },
      { src: base("bathroom", "C-bathroom-1.JPG"), alt: "Bathroom sink and storage shelves" },
      { src: base("bathroom", "C-bathroom-3.JPG"), alt: "Shower cabin with glass door" },
      { src: base("bathroom", "C-bathroom-4.JPG"), alt: "Bathroom storage and towel rail" },
      { src: base("bathroom", "C-bathroom-5.JPG"), alt: "Bathroom with natural window light" },
      { src: base("bathroom", "CMN01715.JPG"), alt: "Bathroom mirror and accessories" },
      { src: base("bathroom", "CMN01741.JPG"), alt: "Bathroom floor with mosaic tiles" },
      { src: base("bathroom", "CMN01742.JPG"), alt: "Bathroom with laundry basket" },
      { src: base("bathroom", "IMG_8757.jpg"), alt: "Bathroom overview — shower and toilet" },
    ],
  },
  {
    slug: "entrance",
    name: "Entrance",
    tagline: "Step inside",
    emoji: "🚪",
    coverImage: base("entrance", "CMN02030.JPG"),
    images: [
      { src: base("entrance", "CMN02030.JPG"), alt: "Apartment door number 5 with key lockbox" },
    ],
  },
];

// Shown on the /gallery index as standard room cards (top 6)
export const galleryIndexRooms = allRooms;

export const introQuote =
  "Every corner tells its own story. Walk through and see for yourself.";
