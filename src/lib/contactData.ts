export interface OfficeLocation {
  city: string;
  country: string;
  entity: string;
  address: string;
  poBox: string | null;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  hours: string;
}

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: "Kerala",
    country: "India (HQ)",
    entity: "Arkanet Technologies",
    address: "Room No: 227K, Benny complex, Kelakam, Kannur. Kerala 670674, India",
    poBox: null,
    phone: "+91 90741 04372",
    phoneHref: "tel:+919074104372",
    email: "info@arkanet.in",
    emailHref: "mailto:info@arkanet.in",
    hours: "Mon – Sat: 9:00 AM – 6:30 PM IST",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    entity: "Arkanet Technologies LLC",
    address: "Suite 308, Capital Golden Tower, Business Bay, Dubai, UAE",
    poBox: "P.O. Box: 393317",
    phone: "+971 50 933 8430",
    phoneHref: "tel:+971509338430",
    email: "sales@arkanet.ae",
    emailHref: "mailto:sales@arkanet.ae",
    hours: "Sun – Thu: 9:00 AM – 6:00 PM GST",
  },
];

