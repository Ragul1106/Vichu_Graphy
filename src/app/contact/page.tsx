import type { Metadata } from "next";
import { MapPin, MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <section className="page-section narrow-page">
      <div className="page-heading">
        <span className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>
        <h1>Let's talk about your idea.</h1>
        <p>
          For product details, custom designs, photography packages or
          availability, contact us directly on WhatsApp.
        </p>
      </div>
      <div className="contact-card">
        <div className="contact-icon">
          <MessageCircle />
        </div>
        <h2>Chat with VichuGraphy</h2>
        <p>
          Send your enquiry and our team can reply to you directly on WhatsApp.
        </p>
        <WhatsAppLink
          message="Hello VichuGraphy! I would like to make an enquiry."
          label="Start WhatsApp chat"
        />
        <div className="contact-location">
          <MapPin size={17} /> Sirkazhi, Tamilnadu
        </div>
      </div>
    </section>
  );
}
