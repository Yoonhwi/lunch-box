"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { findNavHierarchy, navItems } from "@/lib/navigation";
import { buildUrl, Pages, toUrl } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function Navigations() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 flex items-center gap-10 justify-between">
      <Link
        href={toUrl(Pages.Home)}
        className="text-xl font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        LUNCH BOX
      </Link>

      <ul className="flex gap-6">
        {navItems.map((item) => {
          return (
            <li key={item.label} className="flex">
              <Link
                key={item.label}
                href={buildUrl(toUrl(item.pathname), item.search)}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  findNavHierarchy(pathname).includes(item)
                    ? "text-primary"
                    : ""
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
