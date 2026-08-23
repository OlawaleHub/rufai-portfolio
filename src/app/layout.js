// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://rufai-portfolio.vercel.app"),
  title: {
    default: "Rufai Abdulrahmon — COO & Marketing Strategist",
    template: "%s | Rufai Abdulrahmon",
  },
  description:
    "Chief Operating Officer and Marketing Strategist leading operations, strategy, and growth for tech companies building websites, web apps, and digital products. Based in Abeokuta, Nigeria.",
  keywords: [
    "Rufai Abdulrahmon",
    "Chief Operating Officer",
    "COO",
    "Marketing Strategist",
    "Tech Operations",
    "Digital Products",
    "Elyon Labs",
    "Refcrypt Labs",
    "Rhuce",
    "Abeokuta",
    "Nigeria",
  ],
  authors: [{ name: "Rufai Abdulrahmon" }],
  creator: "Rufai Abdulrahmon",
  openGraph: {
    title: "Rufai Abdulrahmon — COO & Marketing Strategist",
    description:
      "Chief Operating Officer and Marketing Strategist leading operations for tech companies building digital products.",
    type: "website",
    locale: "en_US",
    siteName: "Rufai Abdulrahmon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rufai Abdulrahmon — COO & Marketing Strategist",
    description:
      "Chief Operating Officer and Marketing Strategist building and scaling digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#070b16",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-navy-950 text-slate-200 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
