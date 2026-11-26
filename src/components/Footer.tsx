import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

const exploreLinks = [
  { name: "Personalised Gifts", href: "/#gifts" },
  { name: "Photo Frames", href: "/#frames" },
  { name: "Events & Photography", href: "/#events" },
  { name: "Flex Designs", href: "/#flex-design" },
  { name: "Invitation Designs", href: "/#invitations" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* BRAND INFORMATION */}
        <div>
          <Link href="/" className="footer-brand">
            <span className="brand-v">V</span>ichu
            <span className="brand-g">G</span>raphy
          </Link>

          <p>
            Personalised gifts, creative frames and meaningful memories, made to
            celebrate your special moments.
          </p>

          <div className="mt-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2"
            >
              <Instagram size={19} />
              Instagram
            </a>
          </div>
        </div>

        {/* EXPLORE COLLECTIONS */}
        <div>
          <h3>Explore Collections</h3>

          {exploreLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* CONTACT INFORMATION */}
        <div>
          <h3>Get in Touch</h3>

          <p>
            <MapPin size={15} />
            Sirkazhi, Mayiladuthurai, Tamil Nadu
          </p>

          <p>
            <Phone size={15} />
            Contact through WhatsApp
          </p>

          <WhatsAppLink
            message="Hello VichuGraphy! I would like to know more about your products and services."
            label="Chat with us"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright">
        © {new Date().getFullYear()} VichuGraphy. All rights reserved.
      </div>
    </footer>
  );
}
