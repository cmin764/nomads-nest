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
    subtitle: "Superhost · 4.83 ★ · Self check-in",
  },
  {
    name: "Booking.com",
    brand: "booking",
    url: "https://www.booking.com/hotel/cy/nomads-nest-quiet-flat-with-terrace-in-ayia-napa.html",
    subtitle: "9.7 Exceptional · 10/10 value for money",
  },
  {
    name: "HomeExchange",
    brand: "homeexchange",
    url: "https://www.homeexchange.com/holiday-home/2895395",
    subtitle: "Swap homes or stay with GuestPoints",
  },
];

export const fees = [
  { label: "Extra guests (3rd+)", value: "+€7 / person / night" },
  { label: "Cleaning fee", value: "€70 compulsory" },
];

export const discounts = [
  { period: "Weekly", pct: "5%" },
  { period: "Monthly", pct: "30%" },
];

export const limits = ["4 guests max", "3 nights min"];

export const contactEmail = "book@nomadsnest.live";
export const contactWhatsApp = {
  display: "+357 97 671058",
  url: "https://wa.me/35797671058",
};

export const discountInquiry = {
  airbnbMessageUrl: "https://www.airbnb.com/contact_host/1417953515842415053/send_message",
};
