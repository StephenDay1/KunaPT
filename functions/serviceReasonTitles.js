/**
 * English service titles for booking emails (mirror of `serviceItems.${slug}.title` in UI).
 * Source of truth on the frontend: `src/locales/partials/serviceItemsEn.ts` (+ `bookPage.other` for "other").
 */
const SERVICE_REASON_TITLES = {
  other: "Other",
  arthritis: "Arthritis",
  "balance-and-gait": "Balance and Gait",
  "chronic-pain": "Chronic Pain",
  "dry-needling": "Dry Needling",
  headaches: "Headaches",
  "running-performance": "Running Performance",
  "post-surgical-rehab": "Post-Surgical Rehab",
  "pediatric-pt": "Pediatric Physical Therapy",
  "sports-rehab": "Sports Rehab",
  tmj: "TMJ",
  "workers-compensation": "Worker's Comp",
};

function englishServiceTitle(slug) {
  if (!slug) {
    return "";
  }
  return SERVICE_REASON_TITLES[slug] ?? slug;
}

module.exports = { englishServiceTitle, SERVICE_REASON_TITLES };
