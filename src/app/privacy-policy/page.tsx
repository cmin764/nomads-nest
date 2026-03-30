import type { Metadata } from "next";
import LegalPageLayout from "@/components/ui/legal-page-layout";
import { privacyPolicy } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nomad's Nest collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout content={privacyPolicy} />;
}
