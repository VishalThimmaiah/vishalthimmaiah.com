import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Vishal Thimmaiah - IT Business Analyst",
    template: "%s | Vishal Thimmaiah",
  },
  description: "IT Business Analyst with a passion for technology, fitness, and creative visual arts. A true jack of all trades, I thrive on building a strong personal brand and exploring new ways to innovate and inspire.",
  keywords: ["IT Business Analyst", "Technology", "Portfolio", "Vishal Thimmaiah", "Business Analysis", "Innovation"],
  authors: [{ name: "Vishal Thimmaiah" }],
  creator: "Vishal Thimmaiah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishalthimmaiah.com",
    siteName: "Vishal Thimmaiah Portfolio",
    title: "Vishal Thimmaiah - IT Business Analyst",
    description: "IT Business Analyst with a passion for technology, fitness, and creative visual arts.",
    images: [
      {
        url: "/assets/images/indexpic.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal Thimmaiah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@VishalThimmaiah",
    title: "Vishal Thimmaiah - IT Business Analyst",
    description: "IT Business Analyst with a passion for technology, fitness, and creative visual arts.",
    images: ["/assets/images/indexpic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vishal Thimmaiah",
              jobTitle: "IT Business Analyst",
              url: "https://vishalthimmaiah.com",
              image: "https://vishalthimmaiah.com/assets/images/indexpic.jpg",
              sameAs: [
                "https://www.linkedin.com/in/vishalthimmaiah/",
                "https://www.instagram.com/vishalthimmaiah/",
                "https://twitter.com/VishalThimmaiah",
                "https://www.snapchat.com/add/vshalthimmaiah",
                "https://www.youtube.com/@vishalthimmaiah/",
              ],
              description: "IT Business Analyst with a passion for technology, fitness, and creative visual arts.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
