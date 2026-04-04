export interface SafetyMeasure {
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

const base = (filename: string) => `/images/gallery/safety/${filename}`;

export const safetyIntro =
  "Your comfort starts with your safety. Every measure below has been installed, tested, and is ready to use. A security camera in the covered parking lot monitors the apartment entrance, for your peace of mind as you arrive and depart. No interior areas are recorded.";

export const safetyMeasures: SafetyMeasure[] = [
  {
    title: "CO Detector",
    description:
      "A Virone CO detector is installed in the bedroom. If dangerous CO levels are detected, the alarm sounds: leave the apartment immediately, get fresh air, and call emergency services (112).",
    image: { src: base("CMN02010.JPG"), alt: "Virone carbon monoxide detector displaying 52% humidity and 19°C on digital screen" },
  },
  {
    title: "CO Detector: Active Display",
    description:
      "Normally in the bedroom; check the kitchen if temporarily relocated. The display shows live humidity and temperature (EN50291-1:2018 certified). Press 'test' to verify the alarm is functional at any time.",
    image: { src: base("CMN02014.JPG"), alt: "Virone carbon monoxide detector close-up with 52% humidity and 19°C reading" },
  },
  {
    title: "Smoke Detector: Bedroom",
    description:
      "A dedicated smoke detector covers the sleeping area. Compact round design blends into the ceiling while remaining fully functional. Tested regularly.",
    image: { src: base("CMN02482.JPG"), alt: "White round smoke detector with ventilation grille mounted flush on white ceiling" },
  },
  {
    title: "Smoke Detector",
    description:
      "Smoke detectors are fitted on the ceiling throughout the apartment and tested regularly. In case of alarm, evacuate calmly and call 112. Do not re-enter until the property has been cleared.",
    image: { src: base("CMN02484.JPG"), alt: "White round smoke detector with central button and three ventilation slots on white ceiling" },
  },
  {
    title: "Smoke Detector: Living Area",
    description:
      "A larger-capacity detector covers the open-plan living and kitchen area, the highest-risk zone for cooking smoke. Test button is visible on the face of the unit.",
    image: { src: base("CMN02483.JPG"), alt: "White dome smoke detector with central test button on grey ceiling" },
  },
  {
    title: "Fire Extinguisher",
    description:
      "A 2 kg dry powder fire extinguisher (Fire Rating 13A/55B/C) is mounted near the kitchen cooker, on the adjacent shelf. To use: pull the pin, aim at the base of the fire, squeeze the handle, and sweep side to side.",
    image: { src: base("CMN01998.JPG"), alt: "Close-up label of red 2 kg ABC dry powder fire extinguisher showing gauge" },
  },
  {
    title: "Fire Extinguisher: Kitchen",
    description:
      "Positioned upright on the shelf adjacent to the kitchen cooker, accessible within seconds. Keep the path to it clear at all times.",
    image: { src: base("CMN01991.JPG"), alt: "Red 2 kg dry powder fire extinguisher standing on floor beside kitchen shelving" },
  },
  {
    title: "Fire Blanket",
    description:
      "Stored inside the cabinet door under the kitchen sink, where the rubbish bin is kept. Pull the tabs sharply downward to deploy. Ideal for smothering stove fires or wrapping yourself during evacuation.",
    image: { src: base("CMN02002.JPG"), alt: "Red fire blanket pouch with bilingual pull instructions hung on white wall" },
  },
  {
    title: "First Aid Kit",
    description:
      "A first aid kit is available on the lower shelf of the TV table in the living area. It includes bandages, a tourniquet, scissors, antiseptic, and hydrogen peroxide: everything you need to handle minor injuries on the spot.",
    image: { src: base("CMN01759.JPG"), alt: "Black first aid kit bag beside blue pillar candle on stand and teal mesh basket" },
  },
  {
    title: "External CCTV Camera",
    description:
      "A security camera is mounted in the covered parking lot, pointing towards the apartment entrance door and kitchen window from a distance, for your security as you arrive and depart. No interior areas are recorded.",
  },
];

export const emergencyNote = {
  callout: "Emergency number in Cyprus: 112",
  contacts: [
    {
      name: "Saveco Health Clinic",
      detail: "Ayia Napa · non-emergencies · 9 am – 5 pm",
      mapsUrl: "https://maps.app.goo.gl/zG5pERLkoYTmX9oT6",
    },
    {
      name: "Amochostos General Hospital",
      detail: "Paralimni · 24/7 emergencies · ~15 km",
      mapsUrl: "https://maps.app.goo.gl/xmmq41tPum7DqPit6",
    },
  ],
};
