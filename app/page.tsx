import type { Metadata } from "next";
import MarketingLanding from "./components/MarketingLanding";

export const metadata: Metadata = {
  title: "Exterior Elite Solutions",
  description:
    "Reliable mowing, lawn maintenance, landscaping, mulching, trimming, and seasonal cleanup services for residential and commercial properties.",
  keywords: [
    "lawn care",
    "lawn mowing",
    "landscaping",
    "mulching",
    "hedge trimming",
    "seasonal cleanup",
    "yard cleanup",
    "property maintenance",
  ],
  openGraph: {
    title: "Exterior Elite Solutions - Lawn & Landscape Services",
    description:
      "Reliable mowing, lawn maintenance, landscaping, mulching, trimming, and seasonal cleanup services for residential and commercial properties.",
    type: "website",
    images: [
      {
        url: "/images/lawn-hero.png",
        width: 1672,
        height: 941,
        alt: "Freshly maintained lawn and landscaping around a residential property",
      },
    ],
  },
};

export default function Home() {
  return <MarketingLanding />;
}
