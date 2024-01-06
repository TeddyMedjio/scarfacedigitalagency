import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Scarface Digital Agency",
    template: "%s | Scarface Digital Agency",
  },
  description:
    "Presenting superior services through innovative concepts that dare to be different",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="author" content="Scarface Digital Agency" />
      <meta
        property="og:title"
        content="Scarface Digital Agency • Where great ideas meet great designs"
      />
      <meta
        property="og:description"
        content="Presenting superior services through innovative concepts that dare to be different. © Code by Medjio"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704543223/xhlqytxwsglklasnyzw0.jpg"
      />
      <meta property="og:site_name" content="Scarface Digital Agency" />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta
        property="twitter:title"
        content="Scarface Digital Agency • Where great ideas meet great designs"
      />
      <meta
        property="twitter:description"
        content="Presenting superior services through innovative concepts that dare to be different. © Code by Medjio"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704543223/xhlqytxwsglklasnyzw0.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="keywords"
        content="Scarface Digital Agency, web developer, Next.Js, React.js, Front-end, Visual designer, JavaScript, UX.designer, Tailwind CSS, Graphic designer, photoshop, indesign, illustrator"
      />

      <meta name="twitter:author" content="@scarfacedigitalagency" />
      <meta name="twitter:site" content="@scarfacedigitalagency" />
      <body>
        <Navbar />
        <main className="relative overflow-hidden antialiased">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
