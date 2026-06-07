"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { SlidersHorizontal } from "lucide-react";

import type { Place } from "@/lib/types";
import { filterPlaces } from "@/lib/places";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FilterPanel, type PlaceFilters } from "@/components/map/filter-panel";

const MapView = dynamic(() => import("@/components/map/map-view"), {
  ssr: false,
  loading: () => (
    <div className="flex size-full items-center justify-center bg-muted text-sm text-muted-foreground">
      Loading map...
    </div>
  ),
});

interface PlacesMapProps {
  places: Place[];
}

export function PlacesMap({ places }: PlacesMapProps) {
  const [filters, setFilters] = React.useState<PlaceFilters>({
    types: [],
    cities: [],
  });
  const [panelOpen, setPanelOpen] = React.useState(false);

  const visible = React.useMemo(
    () => filterPlaces(places, filters),
    [places, filters],
  );

  return (
    <div className="relative size-full overflow-hidden">
      <MapView places={visible} />

      <div className="pointer-events-none absolute inset-x-3 top-3 z-[1000] flex justify-end sm:hidden">
        <Button
          size="sm"
          variant="secondary"
          className="pointer-events-auto shadow"
          onClick={() => setPanelOpen((open) => !open)}
        >
          <SlidersHorizontal className="size-4" />
          Filters
        </Button>
      </div>

      <Card
        data-open={panelOpen}
        className="absolute left-3 top-3 z-[1000] hidden p-4 shadow-lg sm:block data-[open=true]:block"
      >
        <FilterPanel
          filters={filters}
          onChange={setFilters}
          resultCount={visible.length}
        />
      </Card>
    </div>
  );
}
