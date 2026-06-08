import type { Metadata, Viewport } from "next";
import "flatpickr/dist/flatpickr.css";
import "./globals.css";
import { Manrope, Poppins } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Aeny Wellness | Rediscover Deep Sleep & Inner Peace",
  description:
    "Holistic therapies, sound healing sessions, reiki energy healing, and personalized deep sleep programs to restore your natural sleep rhythm and calm your nervous system.",
  keywords: [
    "wellness center",
    "sound healing",
    "deep sleep therapy",
    "reiki healing",
    "meditation classes",
    "holistic therapy",
    "mindfulness",
    "sleep programs",
    "sound bath",
    "stress relief",
    "inner peace",
    "Aeny Wellness",
  ],
  authors: [{ name: "Aeny Wellness" }],
  creator: "Aeny Wellness",
  publisher: "Aeny Wellness",
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Aeny Wellness | Rediscover Deep Sleep & Inner Peace",
    description:
      "Holistic therapies, sound healing sessions, and personalized deep sleep programs.",
    siteName: "Aeny Wellness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Aeny Wellness Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeny Wellness | Rediscover Deep Sleep & Inner Peace",
    description:
      "Holistic therapies, sound healing sessions, and personalized deep sleep programs.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WellnessCenter",
    name: "Aeny Wellness Center",
    telephone: "+1-800-123-AUMA",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Wellness Ave, Suite 100",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Friday"],
        opens: "19:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-[100dvh] bg-background text-foreground antialiased overflow-x-hidden">
        <LenisProvider>
          <div className="flex min-h-[100dvh] flex-col">
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}