import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Accuracy and liability notes for ${site.name}.`,
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="June 2026">
      <p>
        {site.name} is a student-built project with crowdsourced data. This disclaimer outlines what it is not and what you should verify independently.
      </p>

      <LegalSection heading="Data accuracy and completeness">
        <p>
          {site.name} data is contributed by students and verified against public sources (Google Maps, official websites). However:
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-foreground/90">
          <li>Places close, move, or change hours without notice</li>
          <li>Contact information becomes outdated</li>
          <li>Coordinates may be approximate</li>
          <li>New places are added continuously; the map is never complete</li>
        </ul>
        <p className="mt-2">
          <strong>Always verify with official sources before travelling or taking action.</strong> For exams, call the exam centre. For services, visit their official website. For travel, check current operating hours.
        </p>
      </LegalSection>

      <LegalSection heading="Not official advice">
        <p>
          The Student Docs (benefits guides on passports, travel, software) are general information only, not legal advice, not official government guidance, and not formal recommendations. Laws, rules, fees, and processes change frequently. For anything official or binding:
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-foreground/90">
          <li>Passport: visit passport.gov.in and the official Passport Seva portal</li>
          <li>Travel: check IRCTC, airline, and state travel guidelines</li>
          <li>Exams: refer to the official board (HBCSE, CBSE, ICSE) website</li>
          <li>Student benefits: check official vendor websites directly</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Third-party links">
        <p>
          {site.name} links to external sites for past papers, portals, and resources. We do not control those sites, have no responsibility for their content, and are not liable if they become unavailable, contain errors, or change policies.
        </p>
      </LegalSection>

      <LegalSection heading="No guarantee of results">
        <p>
          Student testimonials, guides, and strategies on {site.name} reflect individual experiences. Results vary by person, school, and circumstances. Using resources or strategies recommended on this site does not guarantee exam success, admission, or any outcome.
        </p>
      </LegalSection>

      <LegalSection heading="Map and location features">
        <p>
          The "Near me" feature estimates distance using device location. It may be inaccurate due to GPS limitations or network conditions. Do not rely on it for precise navigation; use Google Maps or dedicated navigation apps instead.
        </p>
      </LegalSection>

      <LegalSection heading="No endorsement">
        <p>
          Places, websites, and products listed on {site.name} are not endorsed by us. Their inclusion does not mean we recommend them or guarantee their quality. Research independently before using any service or product mentioned.
        </p>
      </LegalSection>

      <LegalSection heading="Risks you assume">
        <p>
          By using {site.name}, you accept these risks:
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-foreground/90">
          <li>Missing exams due to incorrect place information</li>
          <li>Travelling to wrong locations from inaccurate pins</li>
          <li>Relying on outdated official information</li>
          <li>Loss of private data if your account is compromised</li>
          <li>Service being unavailable when you need it</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Student project status">
        <p>
          {site.name} is built and maintained by students as a personal project, not a professional organization. There are no paid staff, no dedicated support team, and no SLA (service level agreement). Updates, bug fixes, and new features depend on volunteer effort.
        </p>
      </LegalSection>

      <LegalSection heading="Use at your own risk">
        <p>
          {site.name} is provided as-is. The maintainers disclaim all warranties (expressed or implied). They are not liable for any harm, loss, or inconvenience arising from your use of the site, even if they were advised of the possibility.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
