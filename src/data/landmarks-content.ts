export interface Landmark {
  name: string;
  description: string;
  image: { src: string; alt: string };
}

const base = (filename: string) => `/images/gallery/landmarks/${filename}`;

export const landmarksIntro =
  "Ayia Napa is more than a beach destination. Ancient monasteries, sculptured coastlines, turquoise waters, and the warm Mediterranean light — all within reach from your doorstep.";

export const landmarks: Landmark[] = [
  {
    name: "Nissi Beach",
    description: "One of Cyprus's most iconic beaches — crystal-clear water, white sand, and the famous rocky island just offshore. A 10-minute drive from the apartment.",
    image: { src: base("DJI_0667.JPG"), alt: "Aerial view of Nissi Beach with turquoise water and sun beds" },
  },
  {
    name: "Sculpture Park",
    description: "An open-air sculpture park overlooking the sea, with over 200 works by international artists. A surreal and beautiful walk along the cliffs.",
    image: { src: base("IMG_6145.JPG"), alt: "Stone sculpture on a hill above the Mediterranean sea" },
  },
  {
    name: "Cape Greco",
    description: "A protected national forest park at the south-eastern tip of Cyprus. Sea caves, dramatic cliffs, and some of the clearest water on the island.",
    image: { src: base("IMG_6334.JPG"), alt: "Cape Greco coastline with rocky cliffs and blue sea" },
  },
  {
    name: "Ayia Napa Harbour",
    description: "The old fishing harbour is the heart of Ayia Napa. Lined with cafés and seafood restaurants, it's the perfect spot for a slow morning or a sunset walk.",
    image: { src: base("IMG_6379.JPG"), alt: "Ayia Napa harbour with boats and waterfront cafés" },
  },
  {
    name: "Konnos Bay",
    description: "A sheltered, pine-fringed cove with calm, shallow water — ideal for snorkelling and families. 15 minutes from the apartment.",
    image: { src: base("IMG_6479.JPG"), alt: "Konnos Bay with calm turquoise water surrounded by pine trees" },
  },
  {
    name: "Ayia Napa Monastery",
    description: "A 16th-century Venetian monastery at the centre of the old town. One of the best-preserved monasteries in Cyprus, set around a shaded courtyard.",
    image: { src: base("IMG_6498.JPG"), alt: "Ayia Napa monastery courtyard with stone archways" },
  },
  {
    name: "The Coastline",
    description: "The stretch between Nissi Beach and Cape Greco is one of the most scenic coastal walks in the Eastern Mediterranean. Pack water, wear sunscreen.",
    image: { src: base("IMG_8384.JPG"), alt: "Rocky Mediterranean coastline near Ayia Napa" },
  },
];

// External Airbnb guidebook — update URL when available
export const guidebookUrl = "https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F6442701&s=67&unique_share_id=bd825aca-e9bd-4d45-a11a-d481d65fa7b5";
