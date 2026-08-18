import type { Metadata } from "next";
import TrendScrollPage from "@/components/scroll/TrendScrollPage";
import { trend1 } from "@/content/trends/trend-1";

export const metadata: Metadata = {
  title: trend1.metaTitle,
  description: trend1.metaDescription,
};

export default function Trend1Page() {
  return <TrendScrollPage content={trend1} />;
}
