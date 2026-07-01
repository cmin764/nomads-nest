export interface GuideItem {
  text: string;
  highlight?: boolean; // gold/bold - for warnings, fees, key rules
  heading?: boolean;   // renders as subsection h3
  note?: boolean;      // italic/muted - for soft notes
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
      { text: "Check-in directions, transport options, and bus routes are all on the Check-in page.", url: "/check-in" },

      { text: "Entering the Apartment", heading: true },
      { text: "Use the lockbox on the right wall: insert the code, pull the trigger down, and retrieve your key set." },
      { text: "Big key = apartment door. Small key = terrace gate.", highlight: true },
      { text: "⚠️ ALWAYS take the keys with you when leaving! The door locks automatically. Getting locked out is no vacation fun 🚪🙅‍♀️", highlight: true },
      { text: "€50 fee for losing the keys.", highlight: true },
    ],
  },
  {
    id: "comfort",
    emoji: "🛋️",
    title: "Comfort & Convenience",
    items: [
      { text: "Water & Energy", heading: true },
      { text: "Hot Water: Rooftop solar heater works like magic ☀️. Drag the knob to the left, wait a minute, and you'll have steaming hot water." },
      { text: "If the water isn't hot, turn the boiler on 30 minutes before showering (bathroom wall switch). Turn it off after." },
      { text: "Water pump switch: kitchen wall near the stove. Do not turn it off. If pressure feels low, check the switch is ON." },
      { text: "Tap water: great for cooking 🍳. Use bottled water for drinking 💧", highlight: true },
      { text: "Electricity is precious on the island 💡. Turn off the AC when you're out, and keep windows and doors closed when it's running.", highlight: true },
      { text: "Before going to sleep, turn off the terrace lights and the main entrance light." },

      { text: "Connectivity & Entertainment 📺🌐", heading: true },
      { text: "Wi-Fi password: check the intro text on the living area rounded table." },
      { text: "HDMI cable for laptop in TV table's right bottom shelf, along with an Ethernet cable, USB adapter, and multi-socket power adapter. Put everything back after use." },
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
      { text: "Body & face towels will be left on the bed." },
      { text: "If an essential item seems to be missing, it's most likely with our cleaner for washing/drying. Just let us know and we'll sort it out.", highlight: true },

      { text: "Cleaning Essentials", heading: true },
      { text: "Wash dishes before leaving." },
      { text: "Clean the espresso machine after use. Fill with bottled water only (avoids limestone buildup). Discard any stuck coffee or milk from the utensils." },
      { text: "Washing machine: firmly push the lid until the lock icon appears, otherwise it won't start. Press and hold Start for 3 seconds to begin. Detergent and fabric softener are under the sink." },
    ],
  },
  {
    id: "house-rules",
    emoji: "📜",
    title: "House Rules",
    items: [
      { text: "Quiet hours: 9 PM – 8 AM 🤫", highlight: true },
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
      { text: "Fire extinguisher: between the dining table and stove." },
      { text: "Fire blanket: hanging inside the sink door (leading to the trash bin)." },
      { text: "First aid kit: mid-bottom area of the TV table." },
      { text: "Smoke detector: ceiling of both bedroom and living area." },
      { text: "Carbon monoxide detector: portable device on the bedroom glass table." },

      { text: "Trash & Pest Control", heading: true },
      { text: "Take the trash out regularly (and before check-out) to the green dumpsters outside the complex, on the main street 🗑️" },
      { text: "⚠️ Do not leave trash in the complex unsupervised. Animals will come by and tear the bags apart.", highlight: true },
      { text: "If you're troubled by cats (or allergies), feel free to turn on the pest repellent on the terrace." },

      { text: "Terrace & Outdoors", heading: true },
      { text: "When the wind picks up, fold the terrace umbrella." },
      { text: "If it rains, bring the chair cushions inside." },

      { text: "Kitchen", heading: true },
      { text: "Extra plates and bowls: top middle cupboard." },
      { text: "Cleaning products and tools: under the sink." },
      { text: "Electric oven: make sure a time is set (it resets when powered off), otherwise it won't start. Press and hold the central “MENU” button until you hear a beep, set the time with the arrows, then short-press to confirm." },

      { text: "Living Area", heading: true },
      { text: "Gym corner: yoga mat, kettlebell, power cords, jump rope, abs wheel, towel and a knees mat. All stored between the sofa and the wall." },
      { text: "Games: backgammon, chess, 2 decks of cards and a Rubik's cube, on the top-right shelf of the TV table." },

      { text: "Bedroom", heading: true },
      { text: "Extra pillows and blankets: wardrobe's top shelves." },
      { text: "Beach blankets (subject to availability): use common sense to tell beach blankets apart from bed covers, and keep the bed covers in the house.", highlight: true },
      { text: "We don't supply beach towels. Please don't take the bathroom towels to the beach, they should stay in the house.", highlight: true },
      { text: "Hair dryer and clothes iron: wardrobe's bottom right shelf." },
      { text: "Clothes dryer, ironing board and vacuum cleaner: behind the door." },
      { text: "Beach bag and other beach accessories: subject to availability, as items can move around between stays. Let us know if something you need for the beach isn't there.", highlight: true },
    ],
  },
];

export interface FarewellChecklistItem {
  text: string;
  highlight?: true;
}

export const farewellChecklistItems: FarewellChecklistItem[] = [
  { text: "Windows & doors closed" },
  { text: "AC, lights and appliances off" },
  { text: "Fridge, cooker and water pump (kitchen wall) stay on. Bathroom boiler switch needs to stay off.", highlight: true },
  { text: "Dishes clean" },
  { text: "Trash out" },
  { text: "All keys back in the right lockbox" },
  { text: "Cipher scrambled before you go" },
];
