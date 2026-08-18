import {
  Azeret_Mono,
  Baloo_2,
  Comic_Neue,
  Diphylleia,
  Martian_Mono,
  Poppins,
  Shippori_Mincho,
  Silkscreen,
  Sixtyfour_Convergence,
} from "next/font/google";

/* ──────────────────────────────────────────────────────────────
   Display faces for the signal word drops.

   The Figma composition sets every word in a different typeface on
   purpose — the pile of mismatched vernacular is the point. These are
   instantiated here rather than in the root layout so the payload only
   loads on the two trend pages, and each is subset to latin with
   display: swap.

   Substitutions, where the Figma face is not on Google Fonts:
   - Comic Neue for Comic Sans MS, a system font missing on most
     non-Windows machines.
   - Poppins for Geom. Both are geometric sans faces.
   - Shippori Mincho for Kokoro. Both are Mincho-style serifs; Kokoro is
     not served by Google Fonts' API.
   ────────────────────────────────────────────────────────────── */

const mincho = Shippori_Mincho({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-w-kokoro",
});
const comic = Comic_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-w-comic",
});
const silkscreen = Silkscreen({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-w-silkscreen",
});
const sixtyfour = Sixtyfour_Convergence({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-w-sixtyfour",
});
const martian = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
  variable: "--font-w-martian",
});
const diphylleia = Diphylleia({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-w-diphylleia",
});
const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-w-baloo",
});
const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
  variable: "--font-w-azeret",
});
const geom = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
  variable: "--font-w-geom",
});

/** Applied to the page root so every --font-w-* variable is in scope. */
export const wordFontClass = [
  mincho.variable,
  comic.variable,
  silkscreen.variable,
  sixtyfour.variable,
  martian.variable,
  diphylleia.variable,
  baloo.variable,
  azeret.variable,
  geom.variable,
].join(" ");
