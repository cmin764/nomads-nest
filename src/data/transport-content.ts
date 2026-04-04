import { type InlineLink } from "@/lib/render-with-links";

export interface TransportOption {
  label: string;
  detail: string;
  detailLinks?: InlineLink[];
  url?: string;
  warning?: boolean; // renders in gold/amber tone
}

export interface TransportFooterLink {
  label: string;
  url: string;
}

export interface TransportSection {
  id: string;
  title: string;
  options: TransportOption[];
  footer?: TransportFooterLink[];
}

export interface LocalRoute {
  number: string;
  description: string;
}

// Airport transfer options — from Larnaca Airport (LCA)
export const fromLarnacaAirport: TransportSection = {
  id: "lca",
  title: "From Larnaca Airport (LCA)",
  footer: [
    { label: "publictransport.com.cy", url: "https://www.publictransport.com.cy/routes/page/routes-and-timetables?agency=10" },
    { label: "intercity-buses.com", url: "https://intercity-buses.com/en/routes/larnaca-ayia-napa-paralimni-paralimni-ayia-napa-larnaca/" },
  ],
  options: [
    {
      label: "Kapnos Airport Shuttle",
      detail: "Direct to Ayia Napa. Around EUR 10-12 (check kapnosairportshuttle.com for the current fare). Seats fill up in summer, book ahead.",
      url: "https://kapnosairportshuttle.com/",
    },
    {
      label: "Pame Bus 425 + InterCity",
      detail:
        "Bus 425 from the airport to Larnaca Central Station (every 20-30 min, early morning to late evening, ~25 min). Walk ~3 min to Nicolaides Building on Archiep. Makariou Ave. (current InterCity stop — Finikoudes is temporarily under renovation) to catch InterCity Line 43 to Ayia Napa Monastery (EUR 5, ~55 min). Total: ~EUR 7.",
      detailLinks: [
        { text: "Larnaca Central Station", url: "https://maps.app.goo.gl/J3nJyZ4K11eQdTCL7" },
      ],
      url: "https://intercity-buses.com/en/routes/larnaca-ayia-napa-paralimni-paralimni-ayia-napa-larnaca/",
    },
    {
      label: "Taxi or Bolt",
      detail: "Typically EUR 70-90, higher at night or in peak season.",
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
        "One bus per day departing Paphos Karavella at 16:00, arriving Ayia Napa Monastery. EUR 10. Only viable if you land early enough in the afternoon.",
      url: "https://intercity-buses.com/en/routes/paralimni-ayia-napa-larnaca-paphos-paphos-larnaca-ayia-napa-paralimni/",
    },
    {
      label: "Taxi or Bolt",
      detail: "EUR 120-150+ from Paphos.",
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

export const localRoutesTitle = "Moving Around Ayia Napa";
export const localRoutesFooter = { label: "osea.com.cy", url: "https://osea.com.cy/en/bus-routes/" };
export const closestStopName = "Ayia Napa Monastery";
