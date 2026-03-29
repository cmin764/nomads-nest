export interface AmenityCard {
  room: string;
  slug: string;
  galleryLink: string;
  items: string[];
}

export interface Review {
  quote: string;
  author: string;
}

export const heroImage = {
  src: "/images/listing/CMN01490.JPG",
  alt: "Nomad's Nest apartment interior",
};

export const stats = [
  "48 sqm interior",
  "AC & fan in every room",
  "Dedicated workspace",
  "High-speed internet",
];

export const propertyIntro = {
  address: "63 Tefkrou Anthia",
  description:
    "A blend of contemporary convenience and relaxed island vibes. The perfect place to unwind, explore, or work remotely. With a spacious terrace, high-speed internet, and a fully equipped interior, this is more than just a stay — it's an experience waiting to be lived.",
};

export const galleryStrip = [
  { src: "/images/listing/CMN01439.JPG", alt: "Living area" },
  { src: "/images/gallery/kitchen/D-kitchen-7.JPG", alt: "Kitchen" },
  { src: "/images/listing/CMN01580.JPG", alt: "Bedroom" },
  { src: "/images/listing/CMN01874.JPG", alt: "Terrace" },
];

export const fullWidthImage = {
  src: "/images/gallery/terrace/A-terrace-8.JPG",
  alt: "Terrace with outdoor seating",
};

export const ctaImage = {
  src: "/images/gallery/terrace/A-terrace-6.JPG",
  alt: "Terrace view",
};

export const amenities: AmenityCard[] = [
  {
    room: "Bedroom",
    slug: "bedroom",
    galleryLink: "/gallery/bedroom",
    items: ["Double Bed", "Generous Wardrobe", "Adjustable Desk", "Vanity Table", "2 Mirrors"],
  },
  {
    room: "Bathroom",
    slug: "bathroom",
    galleryLink: "/gallery/bathroom",
    items: ["Shower Cabin", "Towel Hangers", "Storage Shelves", "Laundry Basket", "Smart Scale"],
  },
  {
    room: "Kitchen",
    slug: "kitchen",
    galleryLink: "/gallery/kitchen",
    items: ["Electric Stove", "Fridge", "Washing Machine", "Toaster/Kettle/Espresso Machine", "Cutlery & Utensils"],
  },
  {
    room: "Living Area",
    slug: "living-area",
    galleryLink: "/gallery/living-area",
    items: ["Sofa Bed", "Armchair & Table", "TV & HDMI Cable", "Dining Table & Chairs", "Fibre 300 Mbps"],
  },
  {
    room: "Terrace",
    slug: "terrace",
    galleryLink: "/gallery/terrace",
    items: ["Wide Area (17 sqm)", "Wooden Table & Chairs", "Umbrella", "Smoking Zone", "Pests Repeller"],
  },
  {
    room: "Safety",
    slug: "safety",
    galleryLink: "/gallery/safety",
    items: ["CO Detector", "Smoke Detector", "Fire Extinguisher", "Fire Blanket", "First Aid Kit"],
  },
];

export const reviews: Review[] = [
  {
    quote:
      "Clean, modern, very organised, and extremely well-equipped apartment with a spacious terrace. The host really thought of everything — from beach towels and an umbrella to a fully stocked kitchen, entertainment options, and even gym accessories. We had a really great time, and Cosmin was very helpful and responsive. He made our vacation even better by guiding us to the best spots in Cyprus.",
    author: "Ovidiu R.",
  },
  {
    quote:
      "Fully equipped apartment in a good location. Parking almost always available. Great communication with the owner. We had a very pleasant stay. Great value for the price.",
    author: "Jovan M.",
  },
  {
    quote:
      "We had a great time at this place! Everything was impeccable: the apartment was very clean, well maintained and perfectly as described. The location is ideal, everything is nearby (shops, transport, restaurants, etc.). This is truly a convenient and pleasant place to stay. We would recommend this place 100% and would not hesitate to come back!",
    author: "Dallia E.",
  },
  {
    quote: "Great facilities, gorgeous and clean! We were very happy. Excellent communication with the owner.",
    author: "Erika O.",
  },
  {
    quote: "The apartment is perfect, clean and in a good location. The host is very responsive, we recommend this listing!!",
    author: "Tom A.",
  },
  {
    quote:
      "Everything was just perfect - great location, top-notch service, and the place was super clean and fully equipped, exactly like the photos. Really made my vacation extra special, highly recommended! Honestly, I tried to find something I didn't like - but I couldn't!",
    author: "Yonatan H.K.",
  },
];
