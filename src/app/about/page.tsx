import type { Metadata } from "next";
import WhatsAppLink from "@/components/WhatsAppLink";
export const metadata: Metadata = { title: "About Us" };
export default function About() {
  return (
    <section className="page-section narrow-page">
      <div className="page-heading">
        <span className="eyebrow">ABOUT VICHUGRAPHY</span>
        <h1>Made for moments that matter.</h1>
        <p>
          VichuGraphy brings together personalized gifts, photo frames, albums
          and visual storytelling. Our aim is to help people celebrate their
          memories in meaningful ways.
        </p>
      </div>
      <div className="about-panel">
        <h2>Every memory deserves a place.</h2>
        <p>
          Whether you are looking for a thoughtful gift, a frame for your
          favourite photograph, an album for a special occasion or photography
          and videography services, we would love to hear your idea.
        </p>
        <WhatsAppLink
          message="Hello VichuGraphy! I would like to know more about your business and services."
          label="Talk to us"
        />
      </div>
    </section>
  );
}
