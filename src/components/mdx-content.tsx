import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Explicit element styling for MDX content. Used instead of a typography
 * plugin so the look stays in our control and matches the brand tokens.
 */
export const mdxComponents = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={cn(
        "mb-4 font-heading text-3xl font-bold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={cn(
        "mt-8 mb-3 font-heading text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className={cn("mt-6 mb-2 text-lg font-semibold", className)} {...props} />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className={cn("my-4 leading-7 text-foreground/90", className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("my-4 ml-6 list-disc space-y-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className={cn("my-4 ml-6 list-decimal space-y-2", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={cn("leading-7 text-foreground/90", className)} {...props} />
  ),
  a: ({ href = "", className, ...props }: ComponentPropsWithoutRef<"a">) => {
    const classes = cn(
      "font-medium text-primary underline underline-offset-4 hover:opacity-80",
      className,
    );
    if (href.startsWith("/")) {
      return <Link href={href} className={classes} {...props} />;
    }
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...props} />
    );
  },
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn(
        "my-4 border-l-2 border-border pl-4 text-muted-foreground italic",
        className,
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className={cn("rounded bg-muted px-1.5 py-0.5 text-sm", className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className={cn("my-8 border-border", className)} {...props} />
  ),
};
