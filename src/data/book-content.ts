export interface PricingSeason {
  label: string;
  price: string;
  closed?: boolean;
}

export interface PlatformLink {
  name: string;
  brand: "airbnb" | "booking" | "homeexchange";
  url: string;
  subtitle: string;
}

export const pricingSeasons: PricingSeason[] = [
  { label: "April – May", price: "€75/night" },
  { label: "June – August", price: "€85/night" },
  { label: "September – October", price: "€75/night" },
  { label: "November, March", price: "€65/night" },
  { label: "December – February", price: "Closed", closed: true },
];

export const platformLinks: PlatformLink[] = [
  {
    name: "Airbnb",
    brand: "airbnb",
    url: "https://airbnb.com/h/nomadsnestcy",
    subtitle: "airbnb.com/h/nomadsnestcy",
  },
  {
    name: "Booking.com",
    brand: "booking",
    url: "https://www.booking.com/hotel/cy/nomads-nest-quiet-flat-with-terrace-in-ayia-napa.html",
    subtitle: "nomads-nest · ayia napa",
  },
  {
    name: "HomeExchange",
    brand: "homeexchange",
    url: "https://www.homeexchange.com/holiday-home/2895395",
    subtitle: "holiday-home/2895395",
  },
];

export const fees = [
  "Extra guests +€7/person/night",
  "€70 cleaning fee",
];

export const rules = [
  "Weekly discount 5%",
  "Monthly discount 30%",
  "4 persons max",
  "3 nights minimum",
];

export const contactEmail = "book@nomadsnest.live";
