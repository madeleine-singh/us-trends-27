import type { Metadata } from "next";
import TrendScrollPage from "@/components/scroll/TrendScrollPage";
import { trend2 } from "@/content/trends/trend-2";

export const metadata: Metadata = {
  title: trend2.metaTitle,
  description: trend2.metaDescription,
};

export default function Trend2Page() {
  return <TrendScrollPage content={trend2} />;
}
