export interface SafetyMeasure {
  title: string;
  description: string;
  image: { src: string; alt: string };
}

const base = (filename: string) => `/images/gallery/safety/${filename}`;

export const safetyIntro =
  "Your comfort starts with your safety. Every measure below has been installed, tested, and is ready to use.";

export const safetyMeasures: SafetyMeasure[] = [
  {
    title: "CO Detector",
    description:
      "A carbon monoxide detector is installed in the bedroom. If dangerous CO levels are detected, the alarm will sound. Leave the apartment immediately, get fresh air, and call emergency services (112).",
    image: { src: base("CMN01759.JPG"), alt: "CO detector mounted on the wall" },
  },
  {
    title: "Smoke Detector",
    description:
      "A smoke detector is fitted on the ceiling and tested regularly. In case of alarm, evacuate calmly and call 112. Do not re-enter until the property has been cleared.",
    image: { src: base("CMN01991.JPG"), alt: "Smoke detector on the ceiling" },
  },
  {
    title: "Fire Extinguisher",
    description:
      "A dry powder fire extinguisher is mounted near the kitchen exit. To use: pull the pin, aim at the base of the fire, squeeze the handle, and sweep side to side.",
    image: { src: base("CMN01998.JPG"), alt: "Fire extinguisher in mounting bracket" },
  },
  {
    title: "Fire Blanket",
    description:
      "A fire blanket is stored in the kitchen. It is ideal for smothering small fires on the stove or covering yourself during evacuation. Pull down sharply to release.",
    image: { src: base("CMN02002.JPG"), alt: "Fire blanket in red wall-mounted case" },
  },
  {
    title: "First Aid Kit",
    description:
      "A fully stocked first aid kit is available in the bathroom cabinet. Contents include bandages, antiseptic wipes, pain relief, burn gel, and tweezers.",
    image: { src: base("CMN02010.JPG"), alt: "First aid kit in the bathroom cabinet" },
  },
  {
    title: "External CCTV Camera",
    description:
      "A security camera monitors the apartment entrance door from outside — for your peace of mind arriving and departing. The camera covers only the shared hallway and entrance. Your privacy inside the apartment is fully respected and no interior areas are recorded.",
    image: { src: base("CMN02482.JPG"), alt: "Security camera at the apartment entrance" },
  },
];

export const safetyNote =
  "Emergency number in Cyprus: 112. Nearest hospital: Famagusta General Hospital, ~20 min drive.";
