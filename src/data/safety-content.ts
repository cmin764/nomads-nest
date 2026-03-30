export interface SafetyMeasure {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

const base = (filename: string) => `/images/gallery/safety/${filename}`;

export const safetyIntro =
  "Your comfort starts with your safety. Every measure below has been installed, tested, and is ready to use. A security camera also monitors the shared hallway outside the apartment entrance — for your peace of mind arriving and departing. No interior areas are recorded.";

export const safetyMeasures: SafetyMeasure[] = [
  {
    title: "CO Detector",
    description:
      "A Virone carbon monoxide detector is installed in the bedroom. The digital display shows live humidity and temperature readings — normal status. If dangerous CO levels are detected, the alarm will sound. Leave the apartment immediately, get fresh air, and call emergency services (112).",
    image: { src: base("CMN02010.JPG"), alt: "Virone CO detector mounted on the wall showing humidity and CO readout" },
  },
  {
    title: "CO Detector — Active Display",
    description:
      "The detector continuously monitors air quality and displays current humidity (52 %RH) and temperature (19 °C). EN50291-1:2018 certified. The 'test' button lets you verify the alarm is functional at any time.",
    image: { src: base("CMN02014.JPG"), alt: "Close-up of CO detector digital display showing normal humidity and temperature readings" },
  },
  {
    title: "Smoke Detector",
    description:
      "Smoke detectors are fitted on the ceiling throughout the apartment and tested regularly. In case of alarm, evacuate calmly and call 112. Do not re-enter until the property has been cleared.",
    image: { src: base("CMN02482.JPG"), alt: "Smoke detector mounted on the ceiling, angled view showing ventilation grille" },
  },
  {
    title: "Smoke Detector — Bedroom",
    description:
      "A dedicated smoke detector covers the sleeping area. Its compact round design ensures it blends into the ceiling while remaining fully functional.",
    image: { src: base("CMN02483.JPG"), alt: "Small round smoke detector on white ceiling in the bedroom" },
  },
  {
    title: "Smoke Detector — Living Area",
    description:
      "A larger-capacity smoke detector is installed in the open-plan living and kitchen area — the highest-risk zone for cooking-related smoke. Test button is visible on the face of the unit.",
    image: { src: base("CMN02484.JPG"), alt: "Large round smoke detector on white ceiling in the living area" },
  },
  {
    title: "Fire Extinguisher",
    description:
      "A 2 kg dry powder fire extinguisher (Fire Rating 13A/55B/C) is mounted near the kitchen exit. To use: pull the pin, aim at the base of the fire, squeeze the handle, and sweep side to side.",
    image: { src: base("CMN01998.JPG"), alt: "Close-up of 2 kg dry powder fire extinguisher label with instructions" },
  },
  {
    title: "Fire Extinguisher — Location",
    description:
      "The extinguisher is positioned upright between the kitchen shelving and the exit wall, accessible within seconds from the cooking area. Keep the path to it clear at all times.",
    image: { src: base("CMN01991.JPG"), alt: "Red fire extinguisher standing upright next to kitchen shelving unit" },
  },
  {
    title: "Fire Blanket",
    description:
      "A fire blanket is stored in the kitchen. It is ideal for smothering small fires on the stove or covering yourself during evacuation. Pull the tabs sharply downward to release from its case.",
    image: { src: base("CMN02002.JPG"), alt: "Red fire blanket in wall-mounted case with bilingual pull instructions" },
  },
  {
    title: "First Aid Kit",
    description:
      "A fully stocked first aid kit is available in the bathroom cabinet. Contents include bandages, antiseptic wipes, pain relief, burn gel, and tweezers.",
    image: { src: base("CMN01759.JPG"), alt: "Black first aid kit bag with red cross logo on bathroom shelf" },
  },
];

  {
    title: "External CCTV Camera",
    description:
      "A security camera monitors the apartment entrance door from outside — for your peace of mind arriving and departing. The camera covers only the shared hallway and entrance. Your privacy inside the apartment is fully respected and no interior areas are recorded.",
    image: { src: base("cctv-placeholder.svg"), alt: "" },
  },
];

export const safetyNote =
  "Emergency number in Cyprus: 112. Nearest hospital: Famagusta General Hospital, ~20 min drive.";
