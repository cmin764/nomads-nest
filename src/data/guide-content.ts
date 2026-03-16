export interface GuideItem {
  text: string;
  highlight?: boolean; // gold/bold — for warnings, fees, key rules
  heading?: boolean;   // renders as subsection h3
  note?: boolean;      // italic/muted — for soft notes
  url?: string;        // makes the whole item a link
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
    emoji: "🔑",
    title: "Getting In: Your First Steps",
    items: [
      { text: "Self Check-In & Check-Out", heading: true },
      { text: "Check-in: After 3 PM", highlight: true },
      { text: "Check-out: Before 10 AM", highlight: true },
      { text: "Flexible times if possible and agreed beforehand", note: true },

      { text: "Reaching the place", heading: true },
      { text: "Look for our detailed check-in instructions on the Check-in page.", url: "/check-in" },

      { text: "By car", heading: true },
      { text: "📍 Google Maps: search 'Nomad\u2019s Nest - Apartment for rent'", url: "https://maps.app.goo.gl/RJ2s8CroHHJgRpft6" },
      { text: "Make sure to park only in the uncovered area (adjacent to the covered parking space), where there are usually 3 empty spots reserved for tourists." },
      { text: "Do not park in the covered area — that's only for residents. Make sure you won't block other cars." },
      { text: "Parking is first-come, first-served. If the lot is full, there's a municipal parking nearby, free of charge.", url: "https://maps.app.goo.gl/6VXXnnvy5t3ovxHF7" },

      { text: "By public transport", heading: true },
      { text: "Option 1 (most convenient): Direct shuttle from the airport — Kapnos Airport Shuttle", url: "https://kapnosairportshuttle.com/" },
      { text: "Option 2 (cheapest): Bus from the airport to Larnaca, then Finikoudes (Larnaca Marina) to Ayia Napa via IntercityBuses or OSEA." },
      { text: "Option 3 (fastest): Taxi or ridesharing services like Bolt." },

      { text: "Entering the Apartment", heading: true },
      { text: "Use the lockbox on the right wall — insert the code, pull the trigger down, and retrieve your key set." },
      { text: "Big key = apartment door. Small key = terrace gate.", highlight: true },
      { text: "⚠️ ALWAYS take the keys with you when leaving! The door locks automatically — getting locked out is no vacation fun 🚪🙅‍♀️", highlight: true },
      { text: "€50 fee for losing the keys.", highlight: true },
    ],
  },
  {
    id: "comfort",
    emoji: "🛋️",
    title: "Comfort & Convenience",
    items: [
      { text: "Water & Energy Wisdom", heading: true },
      { text: "Hot Water: Rooftop solar heater works like magic ☀️ — drag the knob to the left, wait a minute, and you'll have steaming hot water." },
      { text: "If the water isn't hot, turn the boiler on 30 minutes before showering (bathroom wall switch). Make sure you turn it off after showering." },
      { text: "Keep the water pump switch ON — no reason to touch that button." },
      { text: "Electricity is precious on the island 💡 — turn off the AC when you're out. Close windows and doors when the AC is running.", highlight: true },

      { text: "Connectivity & Entertainment 📺🌐", heading: true },
      { text: "Wi-Fi password: check the intro text on the living area rounded table." },
      { text: "HDMI cable for laptop in TV table's right bottom shelf, along with an Ethernet cable, USB adapter, multi-socket power adapter. Put everything back after use." },
      { text: "Socket adapters (UK to EU) already available in most plugs." },
      { text: "Pin your country of origin on the cork Earth globe if yours isn't already marked 🌎" },
    ],
  },
  {
    id: "bathroom",
    emoji: "🚿",
    title: "Bathroom & Cleaning Etiquette",
    items: [
      { text: "Shower & Towels", heading: true },
      { text: "After showering: open the bathroom window and crack open the bathroom door." },
      { text: "Body & face towels will be left on the bed. Beach towels are in the bedroom wardrobe, right middle shelf." },

      { text: "Cleaning Essentials", heading: true },
      { text: "Wash dishes before leaving." },
      { text: "Clean the espresso machine after use. Use only bottled water when filling the recipient — this avoids limestone buildup. Discard any stuck coffee or milk from the utensils." },
      { text: "Washing machine: firmly push the lid until the lock icon appears, otherwise it won't start. Press and hold the Start button for 3 seconds to begin the cycle. Detergent and fabric softener are under the sink." },
    ],
  },
  {
    id: "house-rules",
    emoji: "📜",
    title: "House Rules",
    items: [
      { text: "Quiet hours: 10 PM – 8 AM 🤫", highlight: true },
      { text: "No parties.", highlight: true },
      { text: "No extra guests.", highlight: true },
      { text: "No pets.", highlight: true },
      { text: "Smoking: terrace only. €200 fee if caught smoking indoors! 🚭", highlight: true },
    ],
  },
  {
    id: "handy-extras",
    emoji: "➕",
    title: "Handy Extras",
    items: [
      { text: "First Aid & Fire Safety", heading: true },
      { text: "Fire extinguisher: in-between dining table and stove." },
      { text: "Fire blanket: hanging inside the sink door (leading to the trash bin)." },
      { text: "First aid kit: mid-bottom area of the TV table." },
      { text: "Smoke detector: fixed on the ceiling of both bedroom and living area." },
      { text: "Carbon monoxide detector: portable device placed in the bedroom glass table." },

      { text: "Trash & Pest Control", heading: true },
      { text: "Take the trash out regularly (and before check-out) to the green dumpsters, outside the complex, on the main street 🗑️" },
      { text: "⚠️ Do not leave trash outside in the complex unsupervised — animals tend to come by and tear apart bags.", highlight: true },
      { text: "If you're troubled by cats (or allergies), feel free to turn on the pest repellent on the terrace." },

      { text: "Kitchen", heading: true },
      { text: "Extra plates and bowls: top middle cupboard." },
      { text: "Cleaning products and tools: under the sink." },
      { text: "Electric oven: make sure there's a time set (it resets when powered off), otherwise it won't start. Press and hold the central \u201cMENU\u201d button until you hear a beep, set the time with the arrows, then short-press the button again to confirm." },

      { text: "Living Area", heading: true },
      { text: "Gym corner: yoga mat, kettlebell, power cords, jump rope, abs wheel, towel and a knees mat — found in-between the sofa and the wall." },
      { text: "Games: backgammon, chess, 2 decks of playing cards and a Rubik's cube — top-right shelf of the TV table." },

      { text: "Bedroom", heading: true },
      { text: "Extra pillows and blankets: wardrobe's top shelves." },
      { text: "Hair dryer, clothes iron and beach accessories: wardrobe's bottom right shelf." },
      { text: "Clothes dryer, ironing board, vacuum cleaner and beach bag: behind the door." },

      { text: "Water Notes", heading: true },
      { text: "Tap water: great for cooking 🍳" },
      { text: "Bottled water: recommended for drinking 💧", highlight: true },
    ],
  },
];

export const farewellChecklistItems: string[] = [
  "Windows & doors closed",
  "AC, lights and appliances off",
  "Water pump and oven wall switches left ON (kitchen)",
  "Boiler switch left OFF (bathroom entrance)",
  "Dishes clean",
  "Trash out",
  "All keys back in the right lockbox",
  "Cipher scrambled before you go",
];
