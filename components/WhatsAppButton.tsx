import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/6281310429811?text=Halo%20Vhaniture%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20interior%20%2F%20furniture.";

export default function WhatsAppButton() {
  return (
    <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Konsultasi Vhaniture via WhatsApp">
      <MessageCircle size={19} /> <span>Konsultasi</span>
    </a>
  );
}
