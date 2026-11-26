import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
type Props = { message: string; label?: string; className?: string };
export default function WhatsAppLink({
  message,
  label = "Enquire on WhatsApp",
  className = "",
}: Props) {
  return (
    <a
      className={`whatsapp-button ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
}
