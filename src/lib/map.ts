import type { PlaceType } from "@/lib/types";

/**
 * Marker colour per place type. Color-blind-safe-ish placeholder palette;
 * the brand step refines these. Used by map markers, the legend, and filter swatches.
 */
export const PLACE_TYPE_COLORS: Record<PlaceType, string> = {
  book_depot: "#b45309",
  library: "#2563eb",
  exam_centre: "#dc2626",
  passport_office: "#7c3aed",
  community_spot: "#059669",
  internet_cafe: "#0891b2",
  airport: "#475569",
  train_station: "#ea580c",
};

/** Colour used for a signed-in user's private personal pins. */
export const PERSONAL_PIN_COLOR = "#db2777";

/** Build a Google Maps directions deep-link to a coordinate. */
export function directionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
