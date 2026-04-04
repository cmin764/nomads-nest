import Image from "next/image";

interface PhotoSectionProps {
  src: string;
  alt: string;
  minHeight?: string;
  maxWidth?: string;
  contentPy?: string;
  children: React.ReactNode;
}

export default function PhotoSection({
  src,
  alt,
  minHeight = "60vh",
  maxWidth = "640px",
  contentPy = "py-24",
  children,
}: PhotoSectionProps) {
  return (
    <section
      className="relative flex items-center justify-center text-center px-4 bg-background"
      style={{ minHeight }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover opacity-90" />
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-dim)" }} />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 65% at center, transparent 0%, var(--hero-overlay) 100%)" }}
      />
      <div className={`relative z-10 mx-auto ${contentPy}`} style={{ maxWidth }}>
        {children}
      </div>
    </section>
  );
}
