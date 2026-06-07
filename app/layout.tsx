import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Exterior Elite Solutions Lawn & Landscape",
    template: "%s | Lawn & Landscape",
  },
  description:
    "Professional lawn care, mowing, landscaping, mulching, trimming, and seasonal cleanup services for residential and commercial properties.",
  applicationName: "Exterior Elite Solutions Lawn & Landscape",
  authors: [{ name: "Exterior Elite Solutions Lawn & Landscape" }],
  metadataBase: new URL("https://exteriorelitesolutions.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-900 text-[#132019]">
        {children}
      </body>
    </html>
  );
}
