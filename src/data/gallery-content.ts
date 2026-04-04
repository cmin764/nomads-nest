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
  coverImagePosition?: string;
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
      { src: base("terrace", "A-terrace-1.JPG"), alt: "Dark wooden outdoor table and chairs with ashtray under green umbrella", width: 1600, height: 1066 },
      { src: base("terrace", "A-terrace-2.jpg"), alt: "Palm-framed terrace with round dining table, four chairs, and wine glasses", width: 1600, height: 1066 },
      { src: base("terrace", "A-terrace-4.JPG"), alt: "Round wooden patio table with two wine glasses, bottle, and ashtray", width: 2048, height: 1365 },
      { src: base("terrace", "A-terrace-3.JPG"), alt: "Rattan sunburst wall mirror reflecting palm leaves and courtyard", width: 2048, height: 1365 },
      { src: base("terrace", "A-terrace-5.JPG"), alt: "Patio table with wine bottle beneath palm fronds and rope-wrapped umbrella", width: 1365, height: 2048 },
      { src: base("terrace", "A-terrace-6.JPG"), alt: "White slatted gate with black tree ornament and keys in lock", width: 1365, height: 2048 },
      { src: base("terrace", "A-terrace-7.JPG"), alt: "White slatted fence with black tree ornament, palm fronds, and umbrella", width: 1600, height: 1066 },
      { src: base("terrace", "Z-terrace-last.jpg"), alt: "Brown tiki mug, green tiki mug, Plantation rum bottle, and tropical fruits on dark table", width: 1600, height: 1066 },
    ],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    tagline: "Feel the sea breeze",
    emoji: "🛏",
    coverImage: base("bedroom", "B-bedroom-1.JPG"),
    images: [
      { src: base("bedroom", "B-bedroom-1.JPG"), alt: "Blue upholstered bed with folded towels, bedside cabinet, and wicker lamp", width: 2048, height: 1365 },
      { src: base("bedroom", "B-bedroom-2.jpg"), alt: "Glass vanity desk with blue stool, wall mirror, and full-length mirror", width: 2048, height: 1365 },
      { src: base("bedroom", "B-bedroom-4.JPG"), alt: "Three blue fish paintings above navy blue upholstered bed headboard", width: 1365, height: 2048 },
      { src: base("bedroom", "B-bedroom-5.jpg"), alt: "Blue upholstered bed with white pillows, towels, reading lamp, white wardrobes", width: 2048, height: 1365 },
      { src: base("bedroom", "CMN01491.JPG"), alt: "Blue bed with folded towels, wicker lamp, and two-drawer bedside cabinet", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01430.JPG"), alt: "Blue bed with folded towels, white wardrobes, and bedside shelf", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01478.JPG"), alt: "White desk with black laptop, black lamp, and blue chair", width: 1333, height: 2000 },
      { src: base("bedroom", "CMN01461.JPG"), alt: "White desk with black laptop, black lamp, and white earbud case", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01493.JPG"), alt: "Desk and laptop reflected in round tabletop mirror beside blue headboard", width: 2000, height: 1333 },
      { src: base("bedroom", "CMN01457.JPG"), alt: "Close-up black laptop keyboard beside desk lamp and white earbud case", width: 4672, height: 7008 },
      { src: base("bedroom", "B-bedroom-8b.JPG"), alt: "Gray curtains on aluminum sliding door with white shutters and palm trees", width: 1365, height: 2048 },
    ],
  },
  {
    slug: "living-area",
    name: "Living Area",
    tagline: "Your cozy corner",
    emoji: "🛋",
    coverImage: base("living-area", "D-living-9.JPG"),
    images: [
      { src: base("living-area", "D-living-9.JPG"), alt: "Blue three-seat sofa with two yellow cushions under parrot painting", width: 2048, height: 1366 },
      { src: base("living-area", "D-living-10.JPG"), alt: "Round gold coffee table with bananas and pineapple beside yellow velvet scoop chair", width: 2048, height: 1365 },
      { src: base("living-area", "D-living-9a.jpg"), alt: "Blue sofa with yellow cushions and parrot painting with open-plan kitchen behind", width: 1600, height: 1103 },
      { src: base("living-area", "D-living-11.JPG"), alt: "Wooden ladder shelf with cork globe and book beside flat-screen TV and remote", width: 2048, height: 1366 },
      { src: base("living-area", "D-living-11b.JPG"), alt: "Walnut wooden box with playing cards deck and Rubik's cube on white shelf", width: 2048, height: 1365 },
      { src: base("living-area", "D-living-12.JPG"), alt: "White carved wooden tree sculpture beside Cyta WiFi router on white windowsill", width: 1365, height: 2048 },
      { src: base("living-area", "D-living-13.jpg"), alt: "Flat-screen TV on white and oak media unit with ladder shelf and tower fan", width: 2048, height: 1536 },
      { src: base("living-area", "D-living-14.jpg"), alt: "Open sliding glass door to terrace with TV unit and ladder shelf inside", width: 1600, height: 1210 },
      { src: base("living-area", "CMN01555.JPG"), alt: "Framed painting of two yellow parrots among dark blue leaves", width: 2048, height: 1366 },
      { src: base("living-area", "CMN01769.JPG"), alt: "Overhead view of bedroom corner with white cube storage unit and wooden shelf", width: 1333, height: 2000 },
    ],
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    tagline: "Savor the moment",
    emoji: "🍳",
    coverImage: base("kitchen", "D-kitchen-3.JPG"),
    images: [
      { src: base("kitchen", "D-kitchen-1.JPG"), alt: "Open-plan kitchen with silver fridge, washing machine, white cabinets, and marble dining table", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-3.JPG"), alt: "Open kitchen drawer with stainless steel spoons and forks in black organiser tray", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-2.JPG"), alt: "White ceramic utensil holder with whisk and spatulas beside knife block and spice rack", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-4.JPG"), alt: "Overhead view of open cabinet with stacked plates, bowls, and glasses beside kettle", width: 1365, height: 2048 },
      { src: base("kitchen", "D-kitchen-5.JPG"), alt: "White marble dining table set with beige ceramic plate, bowl, water glass, and cutlery", width: 2048, height: 1366 },
      { src: base("kitchen", "D-kitchen-5b.JPG"), alt: "Close-up of beige ceramic plate and bowl on green placemat with glass and cutlery", width: 1365, height: 2048 },
      { src: base("kitchen", "D-kitchen-6.JPG"), alt: "Jumbo espresso machine brewing into two double-walled glass cups on wooden counter", width: 2048, height: 1365 },
      { src: base("kitchen", "D-kitchen-7.JPG"), alt: "Overhead view of black metal shelf with espresso machine, ceramic mugs, and green bottles", width: 1333, height: 2000 },
      { src: base("kitchen", "D-kitchen-8.JPG"), alt: "Black travel mug beside green plant in woven basket and glass hourglass on shelf", width: 2048, height: 1365 },
      { src: base("kitchen", "CMN01537.JPG"), alt: "Espresso machine pouring coffee into two double-walled glass cups", width: 1333, height: 2000 },
      { src: base("kitchen", "CMN01547.JPG"), alt: "Spice jars with red lids lined on black kitchen countertop", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01571.JPG"), alt: "Yellow accent chair facing kitchenette with fridge, washer, and sink", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01590.JPG"), alt: "Stainless steel toaster on black countertop beside saucepan and stovetop", width: 1333, height: 2000 },
      { src: base("kitchen", "CMN01603.JPG"), alt: "Woven lamp beside green and brown tiki mugs with liquor bottle", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01607.JPG"), alt: "Cream coffee and sugar jars beside black pod carousel", width: 2000, height: 1333 },
      { src: base("kitchen", "CMN01625.JPG"), alt: "Black metal shelf with tea boxes, ceramic mug, green bottles, and tiki mug", width: 2000, height: 1333 },
    ],
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    tagline: "Start fresh, end relaxed",
    emoji: "🚿",
    coverImage: base("bathroom", "C-bathroom-0.jpg"),
    images: [
      { src: base("bathroom", "C-bathroom-0.jpg"), alt: "White pedestal sink, white toilet, glass shower screen, rope-edged round mirror", width: 1199, height: 1600 },
      { src: base("bathroom", "C-bathroom-2.JPG"), alt: "Close-up rope-edged black round mirror on bathroom mosaic tile wall", width: 1365, height: 2048 },
      { src: base("bathroom", "C-bathroom-1.JPG"), alt: "White sink with chrome faucet, black soap dispenser, black tumbler holder", width: 1066, height: 1600 },
      { src: base("bathroom", "C-bathroom-3.JPG"), alt: "Chrome handheld shower head on sliding rail beside wire corner caddy", width: 1066, height: 1600 },
      { src: base("bathroom", "C-bathroom-4.JPG"), alt: "Bamboo shelving unit with black trays beside white door and mosaic tiles", width: 1365, height: 2048 },
      { src: base("bathroom", "C-bathroom-5.JPG"), alt: "Rope-framed black round mirror on tiled wall above the sink", width: 1600, height: 1066 },
      { src: base("bathroom", "CMN01741.JPG"), alt: "Reed diffuser with rattan sticks between two bamboo baskets with black lining", width: 2048, height: 1366 },
      { src: base("bathroom", "IMG_8759.jpg"), alt: "Bathroom with white toilet, pedestal sink, rope-framed round mirror, and mosaic tile walls", width: 1500, height: 2000 },
      { src: base("bathroom", "IMG_8765.jpg"), alt: "Bathroom with glass shower cabin, white toilet, pedestal sink, and mosaic tile walls", width: 1350, height: 1800 },
    ],
  },
  {
    slug: "entrance",
    name: "Entrance",
    tagline: "Step inside",
    emoji: "🚪",
    coverImage: base("entrance", "CMN02030.JPG"),
    coverImagePosition: "center 20%",
    images: [
      { src: base("entrance", "CMN02024.JPG"), alt: "White apartment door number 5 from above with dracaena plant and wall lantern", width: 1333, height: 2000 },
      { src: base("entrance", "CMN02030.JPG"), alt: "White apartment door number 5 with chrome handle and MasterLock combination lockbox", width: 1365, height: 2048 },
      { src: base("entrance", "CMN02016.JPG"), alt: "Overhanging dracaena plant in terracotta pot on white exterior wall ledge", width: 1333, height: 2000 },
    ],
  },
];

// Shown on the /gallery index as standard room cards (top 6)
export const galleryIndexRooms = allRooms;

export const introQuote =
  "Every corner tells its own story. Walk through and see for yourself.";

// Special cards appended to the bottom of the gallery index grid
export const gallerySpecialCards = [
  {
    href: "/safety",
    image: { src: "/images/gallery/safety/CMN01759.JPG", alt: "Safety measures" },
    name: "Safety",
    tagline: "Your peace of mind",
  },
  {
    href: "/landmarks",
    image: {
      src: "/images/gallery/landmarks/CMN02493.jpg",
      alt: "Ornate blue doorway framed by bougainvillea opening onto a sea-view terrace",
    },
    name: "Landmarks",
    tagline: "Discover the neighbourhood",
  },
] as const;
