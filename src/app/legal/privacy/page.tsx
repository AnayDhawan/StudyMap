import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles your data.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" updated="June 2026">
      <p>
        {site.name} is an open-source student project. This privacy notice explains what data we collect, how we use it, and your rights.
      </p>

      <LegalSection heading="Data we collect">
        <p>
          <strong>Without an account:</strong> When you browse the map, view resources, or read guides, we collect no personal data. The site sends no identifiers to us. OpenStreetMap (the map provider) may log your IP address per their privacy policy.
        </p>
        <p>
          <strong>When you sign in:</strong> We collect your email address and name from Google. You authorize this via Google's OAuth. We store these against your account to identify and verify you for future sign-ins.
        </p>
        <p>
          <strong>When you add private pins:</strong> We store your place names, coordinates, category, and any notes you add. These are stored in our Supabase database with row-level security; only you can read your pins.
        </p>
      </LegalSection>

      <LegalSection heading="Location services">
        <p>
          The "Near me" feature asks your browser for your current location. That coordinate is used only to sort places by distance. It stays on your device and is not sent to us or stored anywhere.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and tracking">
        <p>
          We do not use cookies for tracking. We use local browser storage only to remember your theme preference (light or dark mode) and map settings. No analytics, no advertising, no third-party trackers.
        </p>
      </LegalSection>

      <LegalSection heading="Data security">
        <p>
          Private pins are protected by row-level security in Supabase. Your authentication token is managed by Google. We do not have access to your Google password. Private data is transmitted over HTTPS (encrypted).
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          Your account and private pins persist until you delete them. Deleting your account removes all your data from our database. We do not retain backups of deleted accounts.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights (GDPR)">
        <p>
          You have the right to access, correct, or delete your personal data. Contact us at the email in the footer to exercise these rights. We will respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection heading="Third parties">
        <p>
          <strong>Google:</strong> We use Google OAuth for sign-in. Review Google's privacy policy for details on how they handle your data.
        </p>
        <p>
          <strong>Supabase:</strong> We host user data on Supabase. Review their privacy policy at supabase.com/privacy.
        </p>
        <p>
          <strong>OpenStreetMap:</strong> The map tiles come from OpenStreetMap contributors. Your browser connects to them per their privacy policy.
        </p>
      </LegalSection>

      <LegalSection heading="Open source">
        <p>
          {site.name} is open source at {site.repo}. You can review the code and see exactly what data is collected. If you run your own copy, you control your own database and this notice does not apply.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this notice">
        <p>
          We may update this policy. The "updated" date at the top tells you when changes were made. Continued use implies acceptance.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
