import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl("Hello VichuGraphy! I would like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VichuGraphy on WhatsApp"
    >
      <MessageCircle />
    </a>
  );
}
