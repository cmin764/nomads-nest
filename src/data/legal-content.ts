export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalPage = {
  title: "Privacy Policy",
  lastUpdated: "March 2026",
  sections: [
    {
      heading: "Who We Are",
      body: [
        "Nomad's Nest is a short-term rental apartment in Ayia Napa, Cyprus, operated by Georgiana Harnagea and Cosmin Poieana. You can reach us at book@nomadsnest.live.",
        "This policy explains what personal data we collect through this website, how we use it, and what rights you have under the General Data Protection Regulation (GDPR) and Cyprus Law 125(I)/2018.",
      ],
    },
    {
      heading: "What Data We Collect",
      body: [
        "This website does not process payments, does not operate a booking system, and does not use analytics or tracking cookies. Bookings are made directly through Airbnb, Booking.com, or HomeExchange — their privacy policies govern any data you provide on those platforms.",
        "This website has no contact form. If you reach out to us via email or WhatsApp using the details on the Contact page, we receive your name, contact details, and message through those channels. That data is handled by our email and messaging providers, not by this website.",
        "The website stores two values in your browser's localStorage — your theme preference (light/dark/system) and the state of the guest farewell checklist. These are client-side only, never transmitted to any server, and are not cookies.",
      ],
    },
    {
      heading: "Legal Basis for Processing",
      body: [
        "We process direct enquiries (email, WhatsApp) on the basis of legitimate interest: responding to enquiries about the property is a reasonable expectation of both parties.",
        "Where legal obligations apply — for example, tax or regulatory compliance under Cyprus law — processing is carried out on that basis.",
      ],
    },
    {
      heading: "How Long We Keep Your Data",
      body: [
        "Enquiries received by email or WhatsApp are retained for up to two years and then deleted. You may request earlier deletion at any time by emailing book@nomadsnest.live.",
      ],
    },
    {
      heading: "Third Parties",
      body: [
        "This website is hosted on Vercel. Vercel may process standard server access logs (IP address, browser type, request path) as part of normal hosting infrastructure. No personal data is shared with Vercel beyond what is inherent in serving web pages.",
        "The Contact page embeds a Google Maps widget. When that page loads, your browser connects to Google's servers and Google may set cookies or collect data in accordance with its own privacy policy (policies.google.com/privacy). We have no access to any data Google collects through this widget.",
        "We do not sell, rent, or share your personal data with any other third party.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "Under the GDPR you have the right to access, correct, or erase personal data we hold about you. You also have the right to object to processing, request data portability, or withdraw consent where consent is the legal basis.",
        "To exercise any of these rights, email book@nomadsnest.live. We will respond within 30 days.",
        "If you believe your rights have not been respected, you may lodge a complaint with the Office of the Commissioner for the Protection of Personal Data in Cyprus (www.dataprotection.gov.cy).",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "We may update this policy when our practices change. The date at the top of this page will reflect the most recent revision.",
      ],
    },
  ],
};

export const termsAndConditions: LegalPage = {
  title: "Terms & Conditions",
  lastUpdated: "March 2026",
  sections: [
    {
      heading: "About This Document",
      body: [
        "This website is a brochure for Nomad's Nest, a short-term rental apartment at 63 Tefkrou Anthia, Ayia Napa, Cyprus (Registration License #0009512), operated by Georgiana Harnagea and Cosmin Poieana.",
        "Bookings are made through third-party platforms — Airbnb, Booking.com, or HomeExchange. The booking contract, payment terms, and cancellation policy for your stay are governed by the platform you book through, not by this website. Please read the relevant platform's terms before booking.",
        "Guests must be at least 18 years of age to book or stay at the property.",
        "By using this website you agree to these terms.",
      ],
    },
    {
      heading: "House Rules",
      body: [
        "Quiet hours are 22:00 to 08:00. The property is in a residential area — please be considerate of neighbours.",
        "Smoking is permitted on the terrace only. Smoking anywhere inside the apartment will incur a €200 cleaning fee.",
        "No pets are permitted.",
        "No parties or gatherings beyond the registered guest occupancy.",
        "Maximum occupancy is 4 guests. Only registered guests are permitted to stay overnight.",
        "Guests are responsible for leaving the property in a clean and orderly condition.",
        "Guests must comply with all applicable laws of the Republic of Cyprus during their stay.",
      ],
    },
    {
      heading: "Check-in and Check-out",
      body: [
        "Check-in is from 15:00. Check-out is by 10:00.",
        "The property uses a self-check-in lockbox. The PIN code is shared with guests 24–48 hours before arrival. The host reserves the right to verify guest identity before sharing the lockbox PIN and may withhold it if identity cannot be confirmed.",
        "Early check-in or late check-out may be possible subject to availability — contact us in advance.",
        "Two keys are provided (main door and terrace gate). Lost keys incur a replacement fee of €50.",
        "On departure, please follow the farewell checklist on this website: take out rubbish, wash any used dishes and utensils, close and lock all windows and doors, and return both keys to the lockbox.",
      ],
    },
    {
      heading: "Additional Fees",
      body: [
        "A compulsory cleaning fee of €70 applies to all stays.",
        "A surcharge of €7 per person per night applies to the third and fourth guests.",
        "Damage beyond normal wear and tear will be charged to the guest responsible.",
      ],
    },
    {
      heading: "Safety",
      body: [
        "The apartment is equipped with a smoke detector, CO detector (bedroom), fire extinguisher, fire blanket, and first aid kit.",
        "Guests are responsible for securing doors and windows when leaving the apartment.",
      ],
    },
    {
      heading: "Liability",
      body: [
        "The property owners are not liable for loss, theft, or personal injury during your stay. Guests assume responsibility for their own belongings.",
        "The property owners accept no responsibility for personal belongings left behind after check-out. Items left behind will be held for 14 days and then disposed of unless other arrangements are agreed in writing.",
        "The property owners are not liable for service disruptions or circumstances beyond their reasonable control, including but not limited to natural disasters, utility failures, government orders, or pandemics. In such cases the host will make reasonable efforts to assist guests with alternative arrangements or platform-mediated remedies.",
        "Guests are liable for any damage to the property or its contents beyond normal wear and tear.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "The host reserves the right to terminate a stay without refund if these terms are materially violated. In such cases, guests will be asked to vacate the premises.",
      ],
    },
    {
      heading: "Governing Law",
      body: [
        "These terms are governed by the laws of the Republic of Cyprus. Any disputes arising from use of this website or your stay at the property will be subject to the jurisdiction of the courts of Cyprus.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions continue in full force and effect.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Email: book@nomadsnest.live",
        "WhatsApp / Phone: +357 97 671058",
      ],
    },
  ],
};

export const dataProtection: LegalPage = {
  title: "Data Protection Notice",
  lastUpdated: "March 2026",
  sections: [
    {
      heading: "Overview",
      body: [
        "Nomad's Nest is committed to handling personal data responsibly and in compliance with the General Data Protection Regulation (EU) 2016/679 and Cyprus Law 125(I)/2018.",
        "Data controller: Georgiana Harnagea and Cosmin Poieana, book@nomadsnest.live.",
      ],
    },
    {
      heading: "Cookies and Local Storage",
      body: [
        "This website does not set first-party HTTP cookies for tracking, analytics, or advertising.",
        "The website uses your browser's localStorage API — a client-side storage mechanism distinct from cookies — to remember two things: your chosen colour theme (light, dark, or system default) and the completion state of the guest farewell checklist. This data never leaves your device.",
        "The Contact page embeds a Google Maps widget. When that page loads, Google may set third-party cookies on your device in accordance with its own privacy policy. This is outside our control. If you prefer to avoid this, you can navigate directly to maps.google.com instead.",
        "Third-party platforms linked from this site (Airbnb, Booking.com, HomeExchange) operate their own cookie policies. When you navigate to those sites you are subject to their respective policies.",
      ],
    },
    {
      heading: "Analytics and Tracking",
      body: [
        "This website does not use Google Analytics, Meta Pixel, or any other analytics or advertising tracking service. No data about your visit is collected by or shared with third-party analytics providers.",
      ],
    },
    {
      heading: "Data Minimisation",
      body: [
        "We collect only what is necessary. This website has no contact form and collects no personal data directly. If you contact us via email or WhatsApp, we receive only what you choose to send. See the Privacy Policy for full details.",
      ],
    },
    {
      heading: "Security",
      body: [
        "This website is served over HTTPS. Contact enquiries are handled via secure email infrastructure. Access to personal data is limited to the property operators.",
      ],
    },
    {
      heading: "Your Rights and How to Exercise Them",
      body: [
        "You have the right to access, rectify, erase, restrict, or port your personal data, and to object to its processing. Email book@nomadsnest.live to make a request. We will respond within 30 days.",
        "You have the right to lodge a complaint with the supervisory authority in Cyprus: Office of the Commissioner for the Protection of Personal Data, 1 Iasonos Street, 1082 Nicosia, Cyprus. Website: www.dataprotection.gov.cy.",
      ],
    },
  ],
};
