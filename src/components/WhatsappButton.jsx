import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { generateWhatsAppLink } from "../utils/whatsapp";

export default function WhatsAppButton() {
  const waLink = generateWhatsAppLink({
    phone: "6281234567890",
    message:
      "Halo, saya tertarik menggunakan jasa Wedding Organizer. Boleh minta info paket dan jadwal konsultasi?",
  });

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        rounded-full
        bg-[#1f9f5a]
        px-5 py-3
        text-white
        shadow-[0_6px_18px_rgba(31,159,90,0.25)]
        transition
        hover:brightness-110
      "
    >
      {/* Icon */}
      <FaWhatsapp size={22} />

      {/* Text */}
      <span className="hidden text-sm font-medium tracking-wide sm:block">
        Chat WhatsApp
      </span>

      {/* Soft glow */}
      <span
        className="
          absolute inset-0 -z-10
          rounded-full
          bg-[#1f9f5a]/20
          blur-lg
          opacity-40
        "
      />
    </motion.a>
  );
}
