export interface GuideItem {
  text: string;
  highlight?: boolean;
}

export interface GuideSection {
  id: string;
  emoji: string;
  title: string;
  items: GuideItem[];
}

export const guideSections: GuideSection[] = [
  {
    id: "getting-in",
    emoji: "🗝️",
    title: "Getting In: Your First Steps",
    items: [
      { text: "Check-in time: 15:00 (3 PM) | Check-out time: 11:00 (11 AM)", highlight: true },
      { text: "Address: 63 Tefkrou Anthia, Ayia Napa, Cyprus 5330" },
      {
        text: "The lockbox is to the right of the main entrance door. The code will be shared with you before arrival. Open the box, retrieve the key, and let yourself in.",
      },
      {
        text: "Once inside, please leave the key on the kitchen counter. For security, make sure the front door is locked whenever you leave the apartment.",
      },
      {
        text: "Step-by-step photo directions are available on the Check-in page of this site — use them if you have any trouble finding us.",
      },
    ],
  },
  {
    id: "comfort",
    emoji: "🌡️",
    title: "Comfort & Convenience",
    items: [
      {
        text: "Water: Tap water in Cyprus meets EU drinking standards and is safe to consume. A filtered jug is also in the fridge for your convenience.",
      },
      {
        text: "Air conditioning: Units are available in the bedroom and living area. Please turn them off when leaving the apartment to keep energy costs manageable.",
      },
      {
        text: "WiFi: The network name and password are on a card next to the router on the TV unit.",
      },
      {
        text: "Entertainment: A Smart TV in the living room gives you access to Netflix, YouTube, and other streaming apps. Log in with your own account — your credentials will not be saved.",
      },
      {
        text: "The balcony/outdoor area is yours to enjoy. Please bring cushions inside overnight if it looks like rain.",
      },
    ],
  },
  {
    id: "bathroom",
    emoji: "🚿",
    title: "Bathroom & Cleaning Etiquette",
    items: [
      {
        text: "Fresh towels are in the bathroom cabinet. Please hang them up after use — wet towels left on the floor or furniture can cause damage.",
      },
      {
        text: "Kindly avoid flushing anything other than toilet paper. A small bin is provided next to the toilet for hygiene products.",
      },
      {
        text: "The washing machine is available for your use. Detergent pods are under the sink. Please run full loads where possible and leave the door ajar after each cycle.",
      },
      {
        text: "We ask that you leave the bathroom in a reasonably clean state throughout your stay. A full clean is performed after every checkout.",
      },
    ],
  },
  {
    id: "house-rules",
    emoji: "📋",
    title: "House Rules",
    items: [
      { text: "Quiet hours: 22:00 – 09:00. Please be mindful of neighbours, especially on the shared stairwell.", highlight: true },
      { text: "No parties or large gatherings. The apartment is set up for a peaceful, comfortable stay." },
      { text: "Smoking is strictly prohibited indoors. A designated outdoor area is available on the balcony.", highlight: true },
      { text: "No pets, unfortunately." },
      { text: "Maximum occupancy: as per your booking confirmation. Unregistered guests are not permitted to stay overnight." },
      { text: "Please treat the apartment with care — it's someone's home. Report any accidental damage before checkout so we can sort it out without fuss." },
    ],
  },
  {
    id: "handy-extras",
    emoji: "🧰",
    title: "Handy Extras",
    items: [
      {
        text: "Safety: A fire extinguisher is mounted in the kitchen. Smoke detectors are installed throughout. Emergency exit is via the front door.",
      },
      {
        text: "Rubbish: Bags and a bin are under the kitchen sink. The communal outdoor bins are just outside the complex entrance — please use them daily in summer to avoid odours.",
      },
      {
        text: "Kitchen: Fully equipped with all essentials — pots, pans, utensils, plates, glasses, a kettle, toaster, and a Nespresso machine with capsules. Please clean up after cooking.",
      },
      {
        text: "Living area: The sofa cushions are arranged as found. Extra blankets are in the storage ottoman.",
      },
      {
        text: "Bedroom: A fresh set of bed linen is already on. Extra pillows and a spare duvet are in the wardrobe.",
      },
      {
        text: "If anything is broken, missing, or not working as expected, message us right away — we're happy to help.",
      },
    ],
  },
];

export const farewellChecklistItems: string[] = [
  "Keys returned to the lockbox",
  "All windows and balcony doors closed",
  "Air conditioning switched off",
  "All lights switched off",
  "Rubbish taken to the outdoor bins",
  "Dishes washed and put away (or dishwasher running)",
  "Fridge cleared of your food",
  "Towels left in the bathroom",
  "Personal belongings double-checked",
  "Front door locked on the way out",
];
