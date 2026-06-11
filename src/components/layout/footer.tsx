import Link from "next/link";
import { Mail, Code } from "lucide-react";

import { site } from "@/lib/site";

const quickLinks = [
  { href: "/map", label: "Map" },
  { href: "/contribute", label: "Contribute" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-4">
          {/* About */}
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">{site.name}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Open-source student places map. Free &amp; forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-medium text-foreground">Quick Links</p>
            <nav className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="font-medium text-foreground">Legal</p>
            <nav className="mt-4 flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="font-medium text-foreground">Connect</p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:dhawansanay@gmail.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={site.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted hover:bg-muted/80 transition-colors"
                aria-label="GitHub"
              >
                <Code className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
