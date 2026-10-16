import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import RouteTransitions from "./components/visitors/RouteTransitions";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://cnm-learning-website.vercel.app"),
  openGraph: { type: "website", siteName: "CNM System Labs", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  title: "CNM System Labs | Student Performance Intelligence",
  description: "CNM System Labs helps students identify performance gaps, build structured study systems, analyze test performance and track measurable academic improvement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body><RouteTransitions />{children}</body>
    </html>
  );
}

