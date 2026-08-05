"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/trend-1", label: "Trend 01" },
  { href: "/trend-2", label: "Trend 02" },
  { href: "/methodology", label: "Methodology" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
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
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
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

          {/* Desktop nav */}
          <nav aria-label="Main" className="on-dark">
            <ul
              role="list"
              style={{ gap: 32, listStyle: "none", margin: 0, padding: 0 }}
              className="hidden md:flex"
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

          {/* Hamburger — mobile/tablet */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 36,
              height: 36,
              gap: 0,
              position: "relative",
            }}
          >
            <span
              style={{
                display: "block",
                width: 20,
                height: 1.5,
                background: "#fff",
                position: "absolute",
                transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1), top 0.28s cubic-bezier(0.4,0,0.2,1)",
                top: open ? "50%" : "calc(50% - 5px)",
                transform: open ? "translateY(-50%) rotate(45deg)" : "translateY(0)",
              }}
            />
            <span
              style={{
                display: "block",
                width: 20,
                height: 1.5,
                background: "#fff",
                position: "absolute",
                transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1), top 0.28s cubic-bezier(0.4,0,0.2,1)",
                top: open ? "50%" : "calc(50% + 5px)",
                transform: open ? "translateY(-50%) rotate(-45deg)" : "translateY(0)",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className="on-dark md:hidden"
        style={{
          position: "fixed",
          top: "var(--nav-h)",
          left: 0,
          right: 0,
          bottom: 0,
          background: "#000",
          zIndex: 899,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(40px, 8vw, 80px) var(--pad-x)",
          pointerEvents: open ? "all" : "none",
          opacity: open ? 1 : 0,
          transition: "opacity 0.28s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <nav aria-label="Mobile main">
          <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((link, i) => {
              const active = pathname === link.href;
              return (
                <li
                  key={link.href}
                  style={{
                    borderBottom: "1px solid #1c1c1c",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.35s cubic-bezier(0.4,0,0.2,1) ${i * 50}ms, transform 0.35s cubic-bezier(0.4,0,0.2,1) ${i * 50}ms`,
                  }}
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    style={{
                      display: "block",
                      padding: "24px 0",
                      fontSize: "clamp(28px, 5vw, 42px)",
                      fontWeight: 600,
                      color: active ? "#fff" : "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.28s cubic-bezier(0.4,0,0.2,1)",
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
    </>
  );
}
