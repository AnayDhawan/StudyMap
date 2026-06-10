import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="June 2026">
      <p>
        By using {site.name}, you agree to these terms. Please read them carefully.
      </p>

      <LegalSection heading="What the data is">
        <p>
          {site.name} is a crowdsourced map of student-relevant places. It contains user-contributed information about exam centres, libraries, bookshops, cafes, and other locations. Data is community-maintained and may be incomplete, outdated, or inaccurate. Always verify with official sources before relying on it for exams, travel, or official business.
        </p>
      </LegalSection>

      <LegalSection heading="License and reuse">
        <p>
          Place data on {site.name} is released under CC0 (public domain). You are free to use, modify, and distribute it without attribution. Guides, documentation, and code are available under the terms specified in the GitHub repository.
        </p>
      </LegalSection>

      <LegalSection heading="How contributions work">
        <p>
          You can contribute new places via GitHub pull requests. Contributions must include a source (e.g., link to Google Maps listing) and should reference verified information. By submitting a contribution, you confirm you have the right to share the information and that it is accurate to the best of your knowledge.
        </p>
      </LegalSection>

      <LegalSection heading="No hosting of copyrighted material">
        <p>
          {site.name} does not host past papers, exam solutions, or copyrighted books. It only links to official sources (HBCSE, board websites, etc.). Storing papers locally on your device is your responsibility; we do not provide them.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>
          You agree not to use {site.name} to:
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-foreground/90">
          <li>Interfere with the service or infrastructure</li>
          <li>Submit false or misleading information</li>
          <li>Harass or defame anyone or any organisation</li>
          <li>Violate anyone's intellectual property rights</li>
          <li>Use automated tools to scrape or mirror the site (without permission)</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          {site.name} is provided as-is without warranty. The maintainers are not liable for:
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-foreground/90">
          <li>Missed exams or wrong directions from inaccurate pins</li>
          <li>Closed or relocated places not yet updated</li>
          <li>Broken links to external resources</li>
          <li>Lost or corrupted data from private accounts</li>
          <li>Any damage or loss arising from use of the site</li>
        </ul>
        <p className="mt-2">Use {site.name} at your own risk. Verify all critical information independently.</p>
      </LegalSection>

      <LegalSection heading="No endorsement">
        <p>
          Links to external sites do not constitute endorsement. We are not responsible for their content, accuracy, policies, or availability. Read their terms before using them.
        </p>
      </LegalSection>

      <LegalSection heading="Modification and discontinuation">
        <p>
          We may modify or discontinue {site.name} at any time. We will try to give notice, but are not obligated to do so. Your continued use after changes means you accept the new terms.
        </p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>
          We may terminate your access if you violate these terms or engage in abusive behavior. You may close your account at any time via the Account page.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by Indian law. Any disputes will be resolved in the courts of Mumbai, India.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
