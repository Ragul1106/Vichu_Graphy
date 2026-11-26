import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
export const metadata: Metadata = {
  title: {
    default: "VichuGraphy | Gifts, Frames & Photography",
    template: "%s | VichuGraphy",
  },
  description:
    "Explore personalized gifts, photo frames, albums, photography and videography by VichuGraphy.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
