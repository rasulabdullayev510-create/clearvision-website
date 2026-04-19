// ================================================================
//  CLIENT CONFIG — ClearVision Auto
// ================================================================

window.TRACKING_API = "https://clearvision-booking.onrender.com";

window.CLIENT = {

  // --- Business info ---
  name:        "ClearVision Auto",
  tagline:     "Calgary's mobile headlight restoration specialists",
  logoSrc:     "assets/logo.png",
  logoEmoji:   "💡",
  phone:       "(825) 521-7131",
  email:       "clearvision2400@gmail.com",
  address:     "Calgary, AB",
  city:        "Calgary",
  siteUrl:     "https://clearvision-website.pages.dev",

  // --- Brand colors ---
  primaryColor: "#1e3a5f",
  primaryDark:  "#152d4a",

  // --- Hero ---
  heroEyebrow:   "Calgary's Mobile Headlight Specialists",
  heroHeadline:  "See clearly. Drive safely.",
  heroHighlight: "safely",
  heroSub:       "Professional headlight restoration that comes to you anywhere in Calgary. Clearer vision, safer driving — done in under an hour.",
  heroStats: [
    { value: "4.9★", label: "Google Rating" },
    { value: "500+", label: "Cars Restored" },
    { value: "1hr",  label: "Average Service Time" },
  ],

  // --- Services ---
  servicesEyebrow: "What We Offer",
  servicesTitle:   "Restore your visibility. Right at your door.",
  servicesSub:     "Yellowed, foggy, or scratched headlights aren't just an eyesore — they're a safety hazard. We fix that fast.",
  services: [
    { name: "Minor Headlight Restoration", description: "Light yellowing and haze removed. Perfect for newer vehicles starting to show wear.", icon: "💡" },
    { name: "Major Headlight Restoration", description: "Heavy oxidation, deep fogging, and UV damage fully corrected. Like new results.",     icon: "🔆" },
    { name: "Light Sand Restoration",      description: "Surface-level scratches and cloudiness sanded and polished out for a clear finish.",  icon: "✦"  },
  ],

  // --- Pricing ---
  pricingEyebrow: "Pricing",
  pricingTitle:   "Honest pricing. No surprises.",
  pricingSub:     "A fraction of the cost of replacement. We quote before we start — always.",
  pricingNote:    "* All services include both headlights. We come to your location anywhere in Calgary.",
  pricing: [
    {
      category: "Headlight Restoration",
      items: [
        { name: "Minor Headlight Restoration", price: "$90"  },
        { name: "Major Headlight Restoration", price: "$110" },
        { name: "Light Sand Restoration",      price: "$70"  },
      ],
    },
    {
      category: "Why Restore Instead of Replace?",
      items: [
        { name: "OEM headlight replacement", price: "$300–$800" },
        { name: "ClearVision restoration",   price: "From $70"  },
      ],
    },
  ],

  // --- Process ---
  processEyebrow: "How It Works",
  processTitle:   "We come to you. Simple as that.",
  process: [
    { title: "Book Online",    desc: "Pick your service and a time that works. Takes 60 seconds from your phone.",                icon: "01" },
    { title: "Get Confirmed",  desc: "You'll get a text confirmation immediately. We'll show up right on time.",                  icon: "02" },
    { title: "We Come to You", desc: "We arrive fully equipped to your home, office, or wherever your car is parked in Calgary.", icon: "03" },
    { title: "Crystal Clear",  desc: "Done in under an hour. We follow up after to make sure you're 100% happy.",                icon: "04" },
  ],

  // --- Reviews ---
  reviewsEyebrow: "What Clients Say",
  reviewsTitle:   "Calgary drivers see the difference.",
  reviewsSub:     "Don't take our word for it.",
  reviews: [
    { name: "Mike T.",    rating: 5, text: "My headlights were so yellow I could barely see at night. They came to my office, took less than an hour, and they look brand new. Incredible." },
    { name: "Sarah K.",   rating: 5, text: "Booked online, got a text right away, they showed up exactly when they said. My car looks 5 years younger." },
    { name: "Dave R.",    rating: 5, text: "Way cheaper than replacing them and you honestly can't tell the difference. ClearVision is the only call to make." },
    { name: "Jasmine L.", rating: 5, text: "They came right to my driveway. Super professional, super fast. Already recommended them to my whole family." },
    { name: "Omar S.",    rating: 4, text: "Great service and fair price. Love that they come to you — didn't have to take time off work." },
    { name: "Tyler B.",   rating: 5, text: "Failed my inspection because of foggy headlights. ClearVision came out same day. Passed no problem." },
  ],
  googleReviewLink: "https://g.page/r/CbgyguKR2ha2EBM/review",
  totalReviews: "120+",
  avgRating:    "4.9",

  // --- Contact ---
  contactEyebrow: "Get In Touch",
  contactTitle:   "We serve all of Calgary.",
  contactSub:     "Mobile service — we come to your home, office, or wherever your car is. Book online or reach out directly.",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday",        time: "9:00 AM – 5:00 PM" },
    { day: "Sunday",          time: "Closed"             },
  ],

  // --- Social ---
  instagram:      "https://instagram.com/clearvision.yyc",
  facebook:       "https://facebook.com/ClearVisionAuto",
  googleMapsLink: "https://g.page/r/CbgyguKR2ha2EBM/review",

  // --- Booking URL ---
  bookingUrl: "https://clearvision-booking.onrender.com/book",
};
