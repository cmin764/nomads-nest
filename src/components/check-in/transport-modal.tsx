"use client";

import React from "react";
import Link from "next/link";
import { Bus } from "lucide-react";

function renderWithLinks(
  text: string,
  links?: Array<{ text: string; url: string }>
): React.ReactNode {
  if (!links?.length) return text;
  let parts: React.ReactNode[] = [text];
  for (const { text: match, url } of links) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const idx = part.indexOf(match);
      if (idx === -1) return [part];
      return [
        part.slice(0, idx),
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          {match}
        </Link>,
        part.slice(idx + match.length),
      ];
    });
  }
  return parts;
}
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  fromLarnacaAirport,
  fromPaphosAirport,
  localRoutes,
  localRoutesTitle,
  localRoutesFooter,
  closestStopName,
  type TransportSection,
} from "@/data/transport-content";

function Section({ section }: { section: TransportSection }) {
  return (
    <div>
      <h3 className="font-heading font-light text-[15px] text-foreground mb-3">
        {section.title}
      </h3>
      <div className="space-y-2">
        {section.options.map((opt) => (
          <div
            key={opt.label}
            className={`rounded-[10px] px-4 py-3 text-[13px] leading-[1.65] ${
              opt.warning
                ? "bg-[var(--gold-lt)] border border-[var(--gold)]/30"
                : "bg-muted border border-border"
            }`}
          >
            {opt.url ? (
              <Link
                href={opt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                {opt.label}
              </Link>
            ) : (
              <span className={`font-medium ${opt.warning ? "text-[var(--gold-dk)]" : "text-foreground"}`}>
                {opt.label}
              </span>
            )}
            <p className="text-muted-foreground mt-0.5">{renderWithLinks(opt.detail, opt.detailLinks)}</p>
          </div>
        ))}
      </div>
      {section.footer && (
        <p className="text-[12px] text-muted-foreground mt-2">
          Full timetables at{" "}
          {section.footer.map((link, i) => (
            <span key={link.url}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
              {i < section.footer!.length - 1 && " and "}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default function TransportModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="navy" size="sm" className="gap-1.5">
          <Bus size={14} />
          Bus Routes
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg max-h-[85dvh] overflow-y-auto" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="font-heading font-light text-[20px]">
            Getting Here by Public Transport
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-1">
          <Section section={fromLarnacaAirport} />
          <Section section={fromPaphosAirport} />

          {/* Local OSEA routes */}
          <div>
            <h3 className="font-heading font-light text-[15px] text-foreground mb-3">
              {localRoutesTitle}
            </h3>
            <div className="rounded-[10px] bg-muted border border-border px-4 py-3 space-y-1.5">
              {localRoutes.map((r) => (
                <div key={r.number} className="flex gap-2 text-[13px] leading-[1.6]">
                  <span className="shrink-0 font-medium text-primary w-16">{r.number}</span>
                  <span className="text-muted-foreground">{r.description}</span>
                </div>
              ))}
              <p className="text-[12px] text-muted-foreground pt-1 border-t border-border mt-2">
                Full timetables at{" "}
                <Link
                  href={localRoutesFooter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  {localRoutesFooter.label}
                </Link>
              </p>
            </div>
          </div>

          {/* Closest stop note */}
          <p className="text-[12px] text-muted-foreground border-t border-border pt-4">
            Closest InterCity stop to the apartment: <strong className="text-foreground">{closestStopName}</strong>, about a 10-minute walk.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
