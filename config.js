// ================================================================
//  CLIENT CONFIG — EDIT THIS FILE FOR EACH NEW CLIENT
// ================================================================

// Tracking API — set to your Render booking backend URL
window.TRACKING_API = "https://template-booking.onrender.com";

window.CLIENT = {

  // --- Business info ---
  name:        "Apex Auto Detailing",
  tagline:     "Calgary's premier mobile auto detailing service",
  logoSrc:     "assets/logo.png",
  logoEmoji:   "🚗",
  phone:       "(403) 555-0247",
  email:       "book@apexautodetail.ca",
  address:     "Calgary, AB",
  city:        "Calgary",
  siteUrl:     "https://template-website-5oi.pages.dev",

  // --- Brand color ---
  primaryColor: "#0ea5e9",
  primaryDark:  "#0284c7",

  // --- Hero (home page) ---
  heroEyebrow:   "Calgary's #1 Rated Auto Detailer",
  heroHeadline:  "Your car deserves to look flawless.",
  heroHighlight: "flawless",
  heroSub:       "Professional auto detailing that comes to you. We bring the equipment, you keep your day. Book online in 60 seconds.",
  heroStats: [
    { value: "4.9★", label: "Google Rating" },
    { value: "600+", label: "Cars Detailed" },
    { value: "60s",  label: "To Book Online" },
  ],

  // --- Services ---
  servicesEyebrow: "What We Offer",
  servicesTitle:   "Every service your car needs.",
  servicesSub:     "From a quick exterior refresh to a full interior and exterior transformation — we handle it all.",
  services: [
    { name: "Full Detail",          description: "Complete interior vacuum, wipe-down, shampoo, plus full exterior wash, clay bar, and wax.",  icon: "✦" },
    { name: "Interior Detail",      description: "Deep vacuum, steam clean, leather condition, and full wipe-down of every surface.",           icon: "🪑" },
    { name: "Exterior Wash & Wax",  description: "Hand wash, clay bar decontamination, and carnauba wax for a showroom-ready shine.",           icon: "✨" },
    { name: "Paint Correction",     description: "Single or two-stage machine polish to remove swirl marks, scratches, and oxidation.",         icon: "🔄" },
    { name: "Ceramic Coating",      description: "Long-term paint protection that repels water, dirt, and UV — lasts 2–5 years.",               icon: "🛡️" },
    { name: "Engine Bay Clean",     description: "Safe degreasing and detailing of your engine bay for a clean look under the hood.",           icon: "⚙️" },
  ],

  // --- Pricing ---
  pricingEyebrow: "Pricing",
  pricingTitle:   "Clear pricing. No hidden fees.",
  pricingSub:     "Prices vary slightly by vehicle size. We'll confirm your exact quote before we start.",
  pricingNote:    "* SUVs and trucks may be $10–$20 more depending on size.",
  pricing: [
    {
      category: "Detail Packages",
      items: [
        { name: "Full Detail",         price: "From $200" },
        { name: "Interior Detail",     price: "From $120" },
        { name: "Exterior Wash & Wax", price: "From $100" },
      ],
    },
    {
      category: "Paint & Protection",
      items: [
        { name: "Paint Correction (1-stage)", price: "From $250" },
        { name: "Paint Correction (2-stage)", price: "From $400" },
        { name: "Ceramic Coating",            price: "From $600" },
      ],
    },
    {
      category: "Add-ons",
      items: [
        { name: "Engine Bay Clean",   price: "$80" },
        { name: "Odour Elimination",  price: "$60" },
        { name: "Headlight Restore",  price: "$50" },
      ],
    },
  ],

  // --- Process ---
  processEyebrow: "How It Works",
  processTitle:   "We come to you. Simple.",
  process: [
    { title: "Book Online",       desc: "Pick your service and a time that works. Takes 60 seconds from your phone.",                    icon: "01" },
    { title: "Get Confirmed",     desc: "You'll get a text confirmation immediately. We'll show up right on time.",                      icon: "02" },
    { title: "We Come to You",    desc: "Our team arrives fully equipped. You don't move your car — we handle everything on-site.",      icon: "03" },
    { title: "Drive Away Clean",  desc: "We follow up after every job to make sure you're 100% happy with the results.",                 icon: "04" },
  ],

  // --- Reviews page ---
  reviewsEyebrow: "What Clients Say",
  reviewsTitle:   "Calgary drivers trust Apex.",
  reviewsSub:     "Don't take our word for it.",
  reviews: [
    { name: "Ryan M.",    rating: 5, text: "My truck looks better than the day I bought it. They came to my office, did the full detail while I worked. Unreal." },
    { name: "Brittany K.",rating: 5, text: "Booked online, got a text right away, they showed up exactly on time. Interior looks brand new. 10/10." },
    { name: "Sam D.",     rating: 5, text: "Paint correction on my black BMW — no more swirl marks. These guys actually know what they're doing." },
    { name: "Jason L.",   rating: 5, text: "Used them for a ceramic coating before winter. The water just sheets right off. Worth every penny." },
    { name: "Priya N.",   rating: 4, text: "Great service and they came to my house. Super convenient. Will definitely book again in the spring." },
    { name: "Connor B.",  rating: 5, text: "I've tried 3 other detailers in Calgary. Nobody comes close. This is the only place I'll use from now on." },
  ],
  googleReviewLink: "https://g.page/apex-auto-detailing-calgary",
  totalReviews: "280+",
  avgRating: "4.9",

  // --- Contact page ---
  contactEyebrow: "Get In Touch",
  contactTitle:   "Ready to book or have a question?",
  contactSub:     "We serve all of Calgary and surrounding areas. Reach out any time.",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday",        time: "8:00 AM – 5:00 PM" },
    { day: "Sunday",          time: "10:00 AM – 3:00 PM" },
  ],

  // --- Social links ---
  instagram:      "https://instagram.com",
  facebook:       "",
  googleMapsLink: "https://maps.google.com",

  // --- Booking URL ---
  bookingUrl: "https://template-booking.onrender.com/book",
};
