import * as React from "react";
import { Bot } from "lucide-react";
import Link from "next/link";

interface MediaLinkProps {
  title: string;
  subtitle?: string;
  href: string;
}

export function MediaLink({ title, subtitle, href }: MediaLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg border border-white p-2"
    >
      <div className="text-primary-foreground flex aspect-square h-10 items-center justify-center rounded-lg transition-transform group-hover:scale-105">
        <Bot className="h-5 w-5" />
      </div>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-semibold tracking-tight">{title}</span>
        {subtitle && (
          <span className="text-muted-foreground text-sm">{subtitle}</span>
        )}
      </div>
    </Link>
  );
}

// Example usage:
export function Logo() {
  return <MediaLink title="LAW-WISE" subtitle="Legal Solutions" href="/" />;
}
