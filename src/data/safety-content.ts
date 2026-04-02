export interface SafetyMeasure {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

const base = (filename: string) => `/images/gallery/safety/${filename}`;

export const safetyIntro =
  "Your comfort starts with your safety. Every measure below has been installed, tested, and is ready to use. A security camera in the covered parking lot monitors the apartment entrance — for your peace of mind arriving and departing. No interior areas are recorded.";

export const safetyMeasures: SafetyMeasure[] = [
  {
    title: "CO Detector",
    description:
      "A Virone CO detector is installed in the bedroom. If dangerous CO levels are detected, the alarm sounds — leave the apartment immediately, get fresh air, and call emergency services (112).",
    image: { src: base("CMN02010.JPG"), alt: "Virone CO detector mounted on the wall showing humidity and CO readout" },
  },
  {
    title: "CO Detector — Active Display",
    description:
      "Normally in the bedroom; check the kitchen if temporarily relocated. The display shows live humidity and temperature — EN50291-1:2018 certified. Press 'test' to verify the alarm is functional at any time.",
    image: { src: base("CMN02014.JPG"), alt: "Close-up of CO detector digital display showing normal humidity and temperature readings" },
  },
  {
    title: "Smoke Detector — Bedroom",
    description:
      "A dedicated smoke detector covers the sleeping area. Compact round design blends into the ceiling while remaining fully functional. Tested regularly.",
    image: { src: base("CMN02482.JPG"), alt: "Compact smoke detector on the bedroom ceiling, angled view showing ventilation grille" },
  },
  {
    title: "Smoke Detector",
    description:
      "Smoke detectors are fitted on the ceiling throughout the apartment and tested regularly. In case of alarm, evacuate calmly and call 112. Do not re-enter until the property has been cleared.",
    image: { src: base("CMN02484.JPG"), alt: "Smoke detector with test button mounted on the ceiling" },
  },
  {
    title: "Smoke Detector — Living Area",
    description:
      "A larger-capacity detector covers the open-plan living and kitchen area — the highest-risk zone for cooking smoke. Test button is visible on the face of the unit.",
    image: { src: base("CMN02483.JPG"), alt: "Large round smoke detector on the ceiling in the open-plan living and kitchen area" },
  },
  {
    title: "Fire Extinguisher",
    description:
      "A 2 kg dry powder fire extinguisher (Fire Rating 13A/55B/C) is mounted near the kitchen cooker, on the adjacent shelf. To use: pull the pin, aim at the base of the fire, squeeze the handle, and sweep side to side.",
    image: { src: base("CMN01998.JPG"), alt: "Close-up of 2 kg dry powder fire extinguisher label with instructions" },
  },
  {
    title: "Fire Extinguisher — Kitchen",
    description:
      "Positioned upright on the shelf adjacent to the kitchen cooker — accessible within seconds. Keep the path to it clear at all times.",
    image: { src: base("CMN01991.JPG"), alt: "Red fire extinguisher standing upright next to the kitchen cooker and shelving" },
  },
  {
    title: "Fire Blanket",
    description:
      "Stored inside the cabinet door under the kitchen sink — where the rubbish bin is kept. Pull the tabs sharply downward to deploy. Ideal for smothering stove fires or wrapping yourself during evacuation.",
    image: { src: base("CMN02002.JPG"), alt: "Red fire blanket in wall-mounted case with bilingual pull instructions" },
  },
  {
    title: "First Aid Kit",
    description:
      "A first aid kit is available on the lower shelf of the TV table in the living area. It includes bandages, a tourniquet, scissors, antiseptic, and hydrogen peroxide — everything needed to handle minor injuries on the spot.",
    image: { src: base("CMN01759.JPG"), alt: "Black first aid kit bag with red cross logo on the lower shelf of the TV table" },
  },
  {
    title: "External CCTV Camera",
    description:
      "A security camera is mounted in the covered parking lot, pointing towards the apartment entrance door and kitchen window from a distance — for your security as you arrive and depart. No interior areas are recorded.",
    image: { src: base("cctv-placeholder.svg"), alt: "" },
  },
];

export const safetyNote =
  "Emergency number in Cyprus: 112. Nearest hospital: Famagusta General Hospital, ~20 min drive.";
