export interface CheckInStep {
  image: string;
  alt: string;
  heading: string;
  description: string;
}

export const byCar: CheckInStep[] = [
  {
    image: "/images/check-in/self-checkin-car-1.jpg",
    alt: "Complex entrance from the road",
    heading: "Complex Entrance",
    description:
      "Turn into the driveway marked with the complex sign. The entrance is visible from the main road — follow it straight in.",
  },
  {
    image: "/images/check-in/self-checkin-car-2.jpg",
    alt: "Parking lot inside the complex",
    heading: "Parking Lot",
    description:
      "Park in any unmarked visitor space in the lot. Resident spaces are clearly labelled — please avoid those.",
  },
  {
    image: "/images/check-in/self-checkin-car-3.jpg",
    alt: "Main entrance door to the building",
    heading: "Main Entrance",
    description:
      "Walk to the main entrance door of the building. It is unlocked during the day; use the intercom at night if the door is closed.",
  },
  {
    image: "/images/check-in/self-checkin-6.jpg",
    alt: "Lockbox to the right of the apartment door",
    heading: "Right Lockbox",
    description:
      "Your key is in the lockbox mounted to the right of the apartment door. Enter the code you received, open the shutter, and retrieve the key.",
  },
];

export const byFoot: CheckInStep[] = [
  {
    image: "/images/check-in/self-checkin-1.jpg",
    alt: "Complex entrance from the street",
    heading: "Complex Entrance",
    description:
      "Locate the complex entrance on Tefkrou Anthia street. Look for the gate or archway — the address number 63 is displayed at the entrance.",
  },
  {
    image: "/images/check-in/self-checkin-2.jpg",
    alt: "Alley through the complex",
    heading: "Complex Alley",
    description:
      "Follow the alley through the complex. Keep straight — the path will lead you through the grounds toward the parking area.",
  },
  {
    image: "/images/check-in/self-checkin-3.jpg",
    alt: "Path leading towards the parking area",
    heading: "Towards Parking",
    description:
      "Continue along the path as it opens up towards the parking lot. The building entrance is visible ahead on the left.",
  },
  {
    image: "/images/check-in/self-checkin-4.jpg",
    alt: "Parking lot viewed from on foot",
    heading: "Parking Lot",
    description:
      "Cross the parking lot. The main building entrance is directly in front of you on the far side.",
  },
  {
    image: "/images/check-in/self-checkin-5.jpg",
    alt: "Main entrance door to the building",
    heading: "Main Entrance",
    description:
      "Push open the main entrance door. Head up the stairs to the apartment level.",
  },
  {
    image: "/images/check-in/self-checkin-6.jpg",
    alt: "Lockbox to the right of the apartment door",
    heading: "Right Lockbox",
    description:
      "Your key is in the lockbox mounted to the right of the apartment door. Enter the code you received, open the shutter, and retrieve the key.",
  },
];
