import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

const links = [
  { name: "Home", href: "/" },
  { name: "Gifts", href: "/#gifts" },
  { name: "Frames", href: "/#frames" },
  { name: "Events", href: "/#events" },
  { name: "Flex Design", href: "/#flex-design" },
  { name: "Invitations", href: "/#invitations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        {/* BRAND LOGO */}

        <Link href="/" className="brand">
          <Image
            src="/logo.png"
            alt="VichuGraphy Logo"
            width={180}
            height={65}
            priority
            className=" brand-logo "
          />

          <span className="brand-name">
            <span className="brand-v">V</span>ichu
            <span className="brand-g">G</span>raphy
            <small>GIFTS · FRAMES · STORIES</small>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CONTACT AND MOBILE MENU */}
        <div className="nav-action">
          <WhatsAppLink
            message="Hello VichuGraphy! I would like to make an enquiry."
            label="Contact us"
          />

          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <Menu />
            </summary>

            <nav>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
