"use client";

import * as React from "react";
import { ExternalLink, List, LayoutGrid } from "lucide-react";

import type { Board, Resource } from "@/lib/types";
import { BOARDS, RESOURCE_KIND_LABELS } from "@/lib/types";
import { filterResources, resourceYears } from "@/lib/resources";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ALL_YEARS = "all";

interface ResourcesBrowserProps {
  resources: Resource[];
}

type ViewMode = "grid" | "list";

export function ResourcesBrowser({ resources }: ResourcesBrowserProps) {
  const [boards, setBoards] = React.useState<Board[]>([]);
  const [subject, setSubject] = React.useState("");
  const [year, setYear] = React.useState<string>(ALL_YEARS);
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid");

  const years = React.useMemo(() => resourceYears(resources), [resources]);

  const visible = React.useMemo(
    () =>
      filterResources(resources, {
        boards,
        subject: subject.trim() || undefined,
        year: year === ALL_YEARS ? undefined : Number(year),
      }),
    [resources, boards, subject, year],
  );

  const toggleBoard = (board: Board) =>
    setBoards((current) =>
      current.includes(board)
        ? current.filter((b) => b !== board)
        : [...current, board],
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {BOARDS.map((board) => (
          <Button
            key={board}
            size="sm"
            variant={boards.includes(board) ? "default" : "outline"}
            onClick={() => toggleBoard(board)}
          >
            {board}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Input
          placeholder="Filter by subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className="max-w-56"
        />
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL_YEARS}>All years</SelectItem>
            {years.map((y) => (
              <SelectItem key={y} value={String(y)}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2 ml-auto">
          <Button
            size="sm"
            variant={viewMode === "grid" ? "default" : "outline"}
            onClick={() => setViewMode("grid")}
            title="Card view"
          >
            <LayoutGrid className="size-4" />
          </Button>
          <Button
            size="sm"
            variant={viewMode === "list" ? "default" : "outline"}
            onClick={() => setViewMode("list")}
            title="List view"
          >
            <List className="size-4" />
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        {visible.length} {visible.length === 1 ? "resource" : "resources"}. Every
        link opens an external source; nothing is hosted here.
      </p>

      {viewMode === "grid" ? (
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Board</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visible.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No resources match these filters.
                  </TableCell>
                </TableRow>
              ) : (
                visible.map((resource) => (
                  <TableRow key={resource.id}>
                    <TableCell>
                      <Badge variant="secondary">{resource.board}</Badge>
                    </TableCell>
                    <TableCell>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium hover:underline"
                      >
                        {resource.title}
                        <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" />
                      </a>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {resource.subject ?? "-"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {resource.year ?? "-"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {RESOURCE_KIND_LABELS[resource.kind]}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="space-y-2">
          {visible.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              No resources match these filters.
            </div>
          ) : (
            visible.map((resource) => (
              <div
                key={resource.id}
                className="flex items-center justify-between gap-3 px-4 py-2 border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="shrink-0">
                      {resource.board}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {RESOURCE_KIND_LABELS[resource.kind]}
                    </span>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium hover:underline truncate"
                  >
                    {resource.title}
                    <ExternalLink className="size-3.5 shrink-0 text-muted-foreground flex-shrink-0" />
                  </a>
                  {resource.subject && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {resource.subject} {resource.year && `(${resource.year})`}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
