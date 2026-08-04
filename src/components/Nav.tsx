"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/trend-1", label: "Trend 01" },
  { href: "/trend-2", label: "Trend 02" },
  { href: "/methodology", label: "Methodology" },
  { href: "/regional-trends", label: "Regional" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--nav-h)",
        background: "#000",
        borderBottom: "1px solid #1c1c1c",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Brand — pinned to the left */}
        <Link
          href="/"
          style={{ position: "absolute", left: 0, textDecoration: "none", display: "flex", alignItems: "center" }}
          className="transition-acc hover:opacity-70"
          aria-label="Accenture Song — US Trends 2027 home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/Acc_Song_SvcMrk_White_Solid_RGB.svg"
            alt="Accenture Song"
            style={{ height: 16, width: "auto" }}
          />
        </Link>

        {/* Centered nav */}
        <nav aria-label="Main" className="on-dark">
          <ul
            role="list"
            style={{
              display: "flex",
              gap: 32,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      color: active ? "#fff" : "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      paddingBottom: 4,
                      borderBottom: active ? "2px solid #A100FF" : "2px solid transparent",
                      transition: "color 0.28s cubic-bezier(0.4,0,0.2,1), border-color 0.28s cubic-bezier(0.4,0,0.2,1)",
                      display: "block",
                    }}
                    className="hover:!text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
