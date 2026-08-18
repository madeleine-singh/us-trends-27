import { redirect } from "next/navigation";

/** The scrollytelling build is now the Trend 1 page itself. */
export default function Trend1ScrollRedirect() {
  redirect("/trend-1");
}
