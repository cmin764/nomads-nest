import type { Metadata } from "next";
import LegalPageLayout from "@/components/ui/legal-page-layout";
import { termsAndConditions } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for use of the Nomad's Nest website and property.",
};

export default function TermsPage() {
  return <LegalPageLayout content={termsAndConditions} />;
}
