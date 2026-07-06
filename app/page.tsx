import ComingSoon from "@/components/ComingSoon";

// TEMPORARY: the homepage renders the coming-soon page directly so it never
// depends on the proxy rewrite (Vercel's static edge cache was serving the old
// homepage past the proxy). The real homepage is preserved in git history; to
// restore it, revert this file and remove proxy.ts.
export const metadata = {
  title: "Salt & Sky Travels | Coming Soon",
  description:
    "Between the ocean and the horizon are the moments that matter. Salt & Sky Travels — family reunions, milestone celebrations, cruises, and group getaways — is launching soon.",
};

export default function Home() {
  return <ComingSoon />;
}
