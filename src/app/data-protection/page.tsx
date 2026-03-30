import type { Metadata } from "next";
import LegalPageLayout from "@/components/ui/legal-page-layout";
import { dataProtection } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Data Protection",
  description: "Nomad's Nest data protection notice — GDPR compliance, cookies, and your rights.",
};

export default function DataProtectionPage() {
  return <LegalPageLayout content={dataProtection} />;
}
