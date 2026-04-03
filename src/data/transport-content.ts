export interface TransportOption {
  label: string;
  detail: string;
  url?: string;
  warning?: boolean; // renders in gold/amber tone
}

export interface TransportSection {
  id: string;
  title: string;
  options: TransportOption[];
}

export interface LocalRoute {
  number: string;
  description: string;
}

// Airport transfer options — from Larnaca Airport (LCA)
export const fromLarnacaAirport: TransportSection = {
  id: "lca",
  title: "From Larnaca Airport (LCA)",
  options: [
    {
      label: "Kapnos Airport Shuttle",
      detail: "Direct to Ayia Napa. EUR 12. Book online at kapnosairportshuttle.com — seats fill up in summer.",
      url: "https://kapnosairportshuttle.com/",
    },
    {
      label: "Pame Bus 425 + InterCity",
      detail:
        "Bus 425 from the airport to Larnaca city (every 30 min, 06:30-midnight, ~25 min). Get off at Finikoudes / Arch. Makariou stop, then take an InterCity bus to Ayia Napa Monastery (EUR 5, ~55 min). Total: ~EUR 7.",
      url: "https://intercity-buses.com/en/routes/larnaca-ayia-napa-paralimni-paralimni-ayia-napa-larnaca/",
    },
    {
      label: "Taxi or Bolt",
      detail: "Around EUR 80-100. Only makes sense if splitting with a group.",
      warning: true,
    },
  ],
};

// Airport transfer options — from Paphos Airport (PFO)
export const fromPaphosAirport: TransportSection = {
  id: "pfo",
  title: "From Paphos Airport (PFO)",
  options: [
    {
      label: "Kapnos Airport Shuttle",
      detail:
        "Kapnos covers PFO: EUR 18 to Larnaca Airport, then EUR 12 to Ayia Napa (EUR 30 total). Check kapnosairportshuttle.com for direct PFO-Ayia Napa availability.",
      url: "https://kapnosairportshuttle.com/",
    },
    {
      label: "InterCity Bus from Paphos",
      detail:
        "One bus per day departing Paphos Karavella at 07:30, arriving Ayia Napa Monastery. EUR 10. Only viable if you land very early.",
      url: "https://intercity-buses.com/en/routes/paralimni-ayia-napa-larnaca-paphos-paphos-larnaca-ayia-napa-paralimni/",
    },
    {
      label: "Taxi or Bolt",
      detail: "EUR 120-150+ from Paphos. Not recommended.",
      warning: true,
    },
  ],
};

// OSEA local routes for moving around Ayia Napa
export const localRoutes: LocalRoute[] = [
  { number: "201", description: "West circle: Nissi Beach, Makronissos, Marina" },
  { number: "202", description: "East circle: Kryou Nerou, Love Bridge, Marina" },
  { number: "101 / 102", description: "Coastal run: Waterpark, Cape Greco, Protaras, Paralimni" },
  { number: "711", description: "Ayia Napa to Larnaca via coast (two-way)" },
];
