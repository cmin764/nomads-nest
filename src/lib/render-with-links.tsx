import { type ReactNode } from "react";
import Link from "next/link";

export interface InlineLink {
  text: string;
  url: string;
}

export const LINK_CLASS =
  "text-primary underline underline-offset-4 hover:opacity-70 transition-opacity";

// Use when surrounding context already sets the text colour.
export const LINK_CLASS_BARE =
  "underline underline-offset-4 hover:opacity-70 transition-opacity";

function LinkNode({ url, children }: { url: string; children: string }) {
  const isExternal = url.startsWith("http");
  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
        {children}
      </a>
    );
  }
  return <Link href={url} className={LINK_CLASS}>{children}</Link>;
}

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
        <LinkNode key={url} url={url}>{match}</LinkNode>,
        part.slice(idx + match.length),
      ];
    });
  }
  return parts;
}
