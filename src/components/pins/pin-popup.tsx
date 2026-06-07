import { Navigation } from "lucide-react";

import type { Place } from "@/lib/types";
import { CITY_LABELS, PLACE_TYPE_LABELS } from "@/lib/types";
import { directionsUrl, PLACE_TYPE_COLORS } from "@/lib/map";

interface PinPopupProps {
  place: Place;
}

export function PinPopup({ place }: PinPopupProps) {
  return (
    <div className="flex min-w-[200px] max-w-[240px] flex-col gap-2">
      <div>
        <p className="text-sm font-semibold leading-tight text-foreground">
          {place.name}
        </p>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <span
            aria-hidden
            className="size-2.5 rounded-full"
            style={{ backgroundColor: PLACE_TYPE_COLORS[place.type] }}
          />
          <span>{PLACE_TYPE_LABELS[place.type]}</span>
          <span aria-hidden>&middot;</span>
          <span>{CITY_LABELS[place.city]}</span>
        </div>
      </div>

      {place.address && (
        <p className="text-xs leading-snug text-muted-foreground">{place.address}</p>
      )}

      <a
        href={directionsUrl(place.lat, place.lng)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Navigation className="size-3.5" />
        Get directions
      </a>

      <p className="text-[11px] text-muted-foreground">Added by {place.added_by}</p>
    </div>
  );
}
