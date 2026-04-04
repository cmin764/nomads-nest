import { type ReactNode } from "react";
import Link from "next/link";

export interface InlineLink {
  text: string;
  url: string;
}

const LINK_CLASS =
  "text-primary underline underline-offset-4 hover:opacity-70 transition-opacity";

export function renderWithLinks(text: string, links?: InlineLink[]): ReactNode {
  if (!links?.length) return text;
  let parts: ReactNode[] = [text];
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
          className={LINK_CLASS}
        >
          {match}
        </Link>,
        part.slice(idx + match.length),
      ];
    });
  }
  return parts;
}
