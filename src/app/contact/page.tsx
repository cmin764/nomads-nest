import Image from "next/image";
import type { Metadata } from "next";
import { Mail, Instagram, Facebook } from "lucide-react";
import FadeIn from "@/components/fade-in";
import BrandIcon from "@/components/ui/brand-icon";
import { Button } from "@/components/ui/button";
import {
  address,
  contactEmail,
  contactWhatsApp,
  hosts,
  mapUrl,
  mapEmbedUrl,
  social,
  hostBlurb,
  quote,
  contactImage,
} from "@/data/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nomad's Nest. Address, phone, email, and social links.",
};

export default function ContactPage() {
  const [host1, host2] = hosts.split(" & ");
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20 space-y-20">

      {/* ── Hero: info + map ── */}
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: contact info */}
          <div>
            <p className="text-[10px] font-normal uppercase tracking-[.20em] mb-6 text-gold">
              Get in Touch
            </p>

            <h1 className="font-heading font-light text-[clamp(40px,5.5vw,64px)] leading-[1.05] mb-10 text-nn-text">
              We&apos;d love to<br />
              <em className="italic text-primary">hear from you</em>
            </h1>

            <div className="space-y-5 text-[14px] font-light mb-10 text-nn-muted">
              <div>
                <p className="text-nn-text">{host1}</p>
                <p className="text-nn-text">{host2}</p>
              </div>

              <div>
                <a
                  href={contactWhatsApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 nn-link"
                >
                  <BrandIcon brand="whatsapp" size={14} className="flex-shrink-0" />
                  {contactWhatsApp.display}
                  <span className="text-[12px]">(also on WhatsApp)</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2 nn-link"
                >
                  <Mail size={14} className="flex-shrink-0" />
                  {contactEmail}
                </a>
              </div>

              {/* Social icons sit with the other contact channels, not with the address */}
              <div className="flex items-center gap-5">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="nn-link transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="nn-link transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>

              <div>
                <address className="not-italic leading-relaxed">
                  {address.street}<br />
                  {address.city}, {address.country} {address.postcode}
                </address>
              </div>
            </div>

            <Button variant="gold" asChild>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>

          {/* Right: map embed */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ minHeight: "360px", height: "100%" }}
          >
            <iframe
              src={mapEmbedUrl}
              title="Nomad's Nest location"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", filter: "grayscale(1) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </FadeIn>

      {/* ── Host blurb ── */}
      <FadeIn delay={0.03}>
        <div className="text-center max-w-2xl mx-auto">
          <span
            className="block font-heading leading-none select-none -mb-4 text-gold"
            style={{ opacity: 0.35, fontSize: "clamp(56px,7vw,80px)" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="font-heading italic font-light text-[clamp(17px,2vw,22px)] leading-relaxed mb-5 text-nn-text">
            {hostBlurb.text}
          </p>
          <p className="text-[10px] uppercase tracking-[.20em] text-gold">
            {hostBlurb.attribution}
          </p>
        </div>
      </FadeIn>

      {/* ── Full-width image with quote overlay ── */}
      <FadeIn delay={0.05}>
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src={contactImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
          {/* Subtle gradient so the overlay has contrast without killing the photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-end justify-center pb-8 px-6 pointer-events-none">
            <div
              className="rounded-xl px-5 py-4 sm:px-8 sm:py-6 text-center max-w-[85%] sm:max-w-lg pointer-events-auto"
              style={{
                backdropFilter: "blur(14px) saturate(1.2)",
                WebkitBackdropFilter: "blur(14px) saturate(1.2)",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            >
              <p className="font-heading italic font-light text-[clamp(16px,2.4vw,30px)] leading-snug mb-2 sm:mb-3 text-white">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="text-[10px] uppercase tracking-[.20em] text-white/70">
                {quote.attribution}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
