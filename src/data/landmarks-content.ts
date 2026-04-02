export interface Landmark {
  name: string;
  description: string;
  image: { src: string; alt: string };
  mapsUrl: string;
}

const base = (filename: string) => `/images/gallery/landmarks/${filename}`;

export const landmarksIntro =
  "Ayia Napa is more than a beach destination. Ancient monasteries, sculptured coastlines, turquoise waters, and the warm Mediterranean light — all within reach from your doorstep.";

export const landmarks: Landmark[] = [
  {
    name: "Bridge of Love",
    description: "For those looking for a romantic and scenic spot, look no further than the Love Bridge in Cyprus. This charming footbridge, which spans the Pedieos River, offers a breathtaking view of the surrounding countryside.",
    image: { src: base("IMG_8384.JPG"), alt: "Bridge of Love natural rock arch over turquoise sea" },
    mapsUrl: "https://maps.app.goo.gl/QXrwF8hafJABpqHu7",
  },
  {
    name: "Glyki Nero Beach",
    description: "A blue-flag sandy beach with crystal-clear water and sea caves you can swim to. Quiet enough to hear the waves, lively enough to spend the whole day. Sunbeds, a beach bar, and the Sculpture Park are all within walking distance.",
    image: { src: base("CMN02655.jpg"), alt: "Seaside terrace overlooking Glyki Nero Beach with turquoise water" },
    mapsUrl: "https://maps.app.goo.gl/8dwRPbU6sPHBoeSe7",
  },
  {
    name: "Sculpture Park",
    description: "Contemporary sculptures of mythical beasts & ancient gods in a landscaped park with sea views.",
    image: { src: base("IMG_6145.JPG"), alt: "Contemporary sculpture in a park overlooking the Mediterranean" },
    mapsUrl: "https://maps.app.goo.gl/PSQp57XUF8wGCd7H6",
  },
  {
    name: "Salt Lake",
    description: "Series of salt lakes featuring flamingos & other water birds, plus the Hala Sultan Tekke shrine.",
    image: { src: base("IMG_6334.JPG"), alt: "Salt lake with flamingos and the Hala Sultan Tekke shrine" },
    mapsUrl: "https://maps.app.goo.gl/AzU391LB2ZNUPnLh9",
  },
  {
    name: "Kykkos Monastery",
    description: "The Holy Monastery of the Virgin of Kykkos was founded around the end of the 11th century by the Byzantine emperor Alexios I Komnenos.",
    image: { src: base("IMG_6479.JPG"), alt: "Kykkos Monastery courtyard with ornate mosaics" },
    mapsUrl: "https://maps.app.goo.gl/dTduWpMhdcSP1JqJ7",
  },
  {
    name: "Pano Lefkara",
    description: "Pano Lefkara is a village on the island of Cyprus famous for its lace, known as lefkaritika in and silver handicrafts. Leonardo da Vinci himself visited the village in 1481 and bought a lace altar cloth, which he donated to Milan cathedral.",
    image: { src: base("IMG_6379.JPG"), alt: "Narrow cobblestone street in Pano Lefkara village" },
    mapsUrl: "https://maps.app.goo.gl/Qzz9uZQFL7tpakeg6",
  },
  {
    name: "Lofou Village",
    description: "The leafy environs of this picturesque and traditional village are home to grapevines and almond trees, offering agrotourism in tranquil and scenic surroundings.",
    image: { src: base("IMG_6498.JPG"), alt: "Traditional stone houses in Lofou village among grapevines" },
    mapsUrl: "https://maps.app.goo.gl/Zc6LD5D6RnjDYP6U6",
  },
];

// External Airbnb guidebook — update URL when available
export const guidebookUrl = "https://www.airbnb.com/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F6442701&s=67&unique_share_id=bd825aca-e9bd-4d45-a11a-d481d65fa7b5";
