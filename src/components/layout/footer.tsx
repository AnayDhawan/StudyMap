import Link from "next/link";

import { site } from "@/lib/site";

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/contribute", label: "Contribute" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* About */}
          <div>
            <p className="font-medium text-foreground">{site.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Open-source map of student places. Built by students, for students.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-medium text-foreground">Resources</p>
            <nav className="mt-2 flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-medium text-foreground">Contact</p>
            <div className="mt-2 space-y-2 text-sm">
              <a href="mailto:dhawansanay@gmail.com" className="block hover:text-foreground">
                dhawansanay@gmail.com
              </a>
              <a
                href={site.repo}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-foreground"
              >
                GitHub: AnayDhawan/StudyMap
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-xs text-muted-foreground">
          <p>Made with passion. Open source. Always free.</p>
        </div>
      </div>
    </footer>
  );
}
