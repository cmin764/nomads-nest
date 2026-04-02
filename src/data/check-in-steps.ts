export interface CheckInStep {
  image: string;
  alt: string;
  heading: string;
  description: string;
}

// Shown once above both tabs — applies to arrivals by car and on foot equally.
export const overviewStep: CheckInStep = {
  image: "/images/check-in/self-checkin-0.jpg",
  alt: "Google Maps overhead screenshot showing routes to the apartment with white and red arrows",
  heading: "Getting Here: Overview",
  description:
    "White arrows mark the route by car; red arrows show the approach on foot. Use the tabs below for step-by-step instructions.",
};

// Both routes converge at the same physical entrance — shared to avoid duplication.
const sharedFinalSteps: CheckInStep[] = [
  {
    image: "/images/check-in/self-checkin-5.jpg",
    alt: "Two lockboxes at the main entrance",
    heading: "Main Entrance",
    description:
      "You'll see two lockboxes. Use the one on the right. You'll get the PIN in a private message 1–2 days prior to your arrival.",
  },
  {
    image: "/images/check-in/self-checkin-6.jpg",
    alt: "Right lockbox on the wall",
    heading: "Right Lockbox",
    description:
      "You'll find two keys: one opens the main door, the other the patio's fence gate. ⚠️ Keep the keys with you at all times. The door locks automatically when you exit the flat! Make sure to put them back at check-out, then scramble the code after closing the lid.",
  },
];

export const byCar: CheckInStep[] = [
  {
    image: "/images/check-in/self-checkin-car-1.jpg",
    alt: "Bird mural at the complex car park entrance",
    heading: "Complex Entrance",
    description:
      "If coming by car, look for this bird mural, leading to the car park entrance. It's opposite to 'Ocean View Diving, Cyprus' (search on Google Maps). Drive until the end of the road.",
  },
  {
    image: "/images/check-in/self-checkin-car-2.jpg",
    alt: "Uncovered car parking area inside the complex",
    heading: "Parking Lot",
    description:
      "This is the uncovered car parking area, with usually 3 spots reserved for tourists. Park here only, or outside the complex if full. Entering the flat is through the main entrance found in the covered parking lot (pointed by the white arrow), on the ground floor.",
  },
  ...sharedFinalSteps,
];

export const byFoot: CheckInStep[] = [
  {
    image: "/images/check-in/self-checkin-1.jpg",
    alt: "Complex entrance access point next to the brown wooden fence",
    heading: "Complex Entrance",
    description:
      "After passing the Euroshop store, keep walking straight. On your right side, you'll see a brown wooden fence. Enter through the access point, just like in the photo.",
  },
  {
    image: "/images/check-in/self-checkin-2.jpg",
    alt: "Alley through the complex leading to the parking area",
    heading: "Complex Alley",
    description:
      "Walk straight ahead, go up the stairs, and turn left onto the pathway leading to the complex parking area.",
  },
  {
    image: "/images/check-in/self-checkin-3.jpg",
    alt: "Outside area of the flat leading to the terrace",
    heading: "Towards Parking",
    description:
      "Here's the outside area of the flat leading to our terrace. Just continue forward on the stairs, then turn left.",
  },
  {
    image: "/images/check-in/self-checkin-4.jpg",
    alt: "Complex parking area",
    heading: "Parking Lot",
    description:
      "You have reached the complex parking area. Through the covered parking lot, on the ground floor to your left, you'll find apartment no. 5.",
  },
  ...sharedFinalSteps,
];
