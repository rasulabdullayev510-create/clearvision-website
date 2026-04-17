// ================================================================
//  CLIENT CONFIG — EDIT THIS FILE FOR EACH NEW CLIENT
// ================================================================

// Tracking API — set to your Render booking backend URL
window.TRACKING_API = "https://template-booking.onrender.com";

window.CLIENT = {

  // --- Business info ---
  name:        "Prestige Barbershop",
  tagline:     "Calgary's go-to barbershop for clean cuts and sharp fades",
  logoSrc:     "assets/logo.png",
  logoEmoji:   "✂️",
  phone:       "(403) 555-0182",
  email:       "book@prestigebarber.ca",
  address:     "Calgary, AB",
  city:        "Calgary",
  siteUrl:     "https://template-website-5oi.pages.dev",

  // --- Brand color ---
  primaryColor: "#1a1a2e",
  primaryDark:  "#0f0f1a",

  // --- Hero (home page) ---
  heroEyebrow:   "Calgary's #1 Rated Barbershop",
  heroHeadline:  "Look sharp. Feel confident.",
  heroHighlight: "confident",
  heroSub:       "Fresh cuts, clean fades, and straight razor shaves — done right every time. Book online in 60 seconds and walk in ready.",
  heroStats: [
    { value: "4.9★", label: "Google Rating" },
    { value: "800+", label: "Happy Clients" },
    { value: "60s",  label: "To Book Online" },
  ],

  // --- Services ---
  servicesEyebrow: "What We Offer",
  servicesTitle:   "Every cut. Every time.",
  servicesSub:     "Whether it's a quick tidy-up or a full grooming session, we've got you covered.",
  services: [
    { name: "Haircut",           description: "Classic or modern — scissors or clippers. Includes a hot towel finish and style.", icon: "✂️" },
    { name: "Skin Fade",         description: "Zero to skin, blended clean. Our most popular cut for a reason.",                  icon: "⚡" },
    { name: "Beard Trim & Shape",description: "Crisp lines, defined edges. We shape your beard to match your face.",             icon: "🔲" },
    { name: "Hot Towel Shave",   description: "Full straight razor shave with hot towel prep. The classic barber experience.",   icon: "🪒" },
    { name: "Kids Cut",          description: "Patient, friendly, and fast. For boys 12 and under.",                             icon: "👦" },
    { name: "Cut + Beard Combo", description: "Full haircut and beard service bundled — best value in the shop.",                icon: "✦" },
  ],

  // --- Pricing ---
  pricingEyebrow: "Pricing",
  pricingTitle:   "Straight-up pricing. No surprises.",
  pricingSub:     "What you see is what you pay. Cash, card, or tap.",
  pricingNote:    "",
  pricing: [
    {
      category: "Cuts",
      items: [
        { name: "Haircut",           price: "$35" },
        { name: "Skin Fade",         price: "$40" },
        { name: "Kids Cut (12 & under)", price: "$25" },
      ],
    },
    {
      category: "Beard & Shave",
      items: [
        { name: "Beard Trim & Shape", price: "$25" },
        { name: "Hot Towel Shave",    price: "$40" },
      ],
    },
    {
      category: "Combos",
      items: [
        { name: "Cut + Beard Combo", price: "$55" },
        { name: "Cut + Shave Combo", price: "$65" },
      ],
    },
  ],

  // --- Process ---
  processEyebrow: "How It Works",
  processTitle:   "In the chair in minutes.",
  process: [
    { title: "Book Online",      desc: "Pick your service and a time that works. Takes 60 seconds from your phone.",      icon: "01" },
    { title: "Get Confirmed",    desc: "You'll get a text confirmation the second your booking goes through.",            icon: "02" },
    { title: "Come In & Sit Down", desc: "Walk in, relax, and let us handle the rest. No waiting around.",               icon: "03" },
    { title: "We Follow Up",     desc: "We check in after your visit to make sure everything was exactly what you wanted.", icon: "04" },
  ],

  // --- Reviews page ---
  reviewsEyebrow: "What Clients Say",
  reviewsTitle:   "Trusted by Calgary guys since day one.",
  reviewsSub:     "Don't take our word for it.",
  reviews: [
    { name: "Jordan T.",  rating: 5, text: "Best fade I've ever gotten in Calgary. Walked in looking rough, walked out looking sharp. Already rebooked." },
    { name: "Marcus B.",  rating: 5, text: "Booked online, got a text confirmation immediately, showed up and was in the chair in 2 minutes. Unreal service." },
    { name: "Devon S.",   rating: 5, text: "These guys know what they're doing. Clean shop, friendly vibe, and my beard looks incredible." },
    { name: "Kyle R.",    rating: 5, text: "Took my son here for his first real haircut. They were so patient with him. We'll be back every month." },
    { name: "Amir H.",    rating: 4, text: "Solid cut and great price. Loved that I got a follow-up text after — felt like they actually cared." },
    { name: "Tyler M.",   rating: 5, text: "The hot towel shave is something else. Worth every penny. This is my shop now." },
  ],
  googleReviewLink: "https://g.page/prestige-barbershop-calgary",
  totalReviews: "340+",
  avgRating: "4.9",

  // --- Contact page ---
  contactEyebrow: "Come See Us",
  contactTitle:   "We're easy to find.",
  contactSub:     "Walk-ins welcome, but booking online skips the wait.",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday",        time: "9:00 AM – 6:00 PM" },
    { day: "Sunday",          time: "11:00 AM – 4:00 PM" },
  ],

  // --- Social links ---
  instagram:      "https://instagram.com",
  facebook:       "",
  googleMapsLink: "https://maps.google.com",

  // --- Booking URL ---
  bookingUrl: "https://template-booking.onrender.com/book",
};
