import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

export default function FinalCTA() {
  const floatingIcons = Array.from({ length: 6 });

  return (
    <section className="relative px-6 sm:px-12 py-20 bg-gradient-to-tr from-[#0b0b0c] via-[#1a1a1a] to-[#0b0b0c] overflow-hidden text-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="h-full w-full bg-gradient-radial from-primary/20 via-transparent to-transparent"
        />
      </div>

      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary">
            Siap Mewujudkan Pernikahan Impian Anda?
          </h2>

          {/* Description */}
          <p className="mt-4 text-white/70 text-base sm:text-lg md:text-xl">
            Konsultasikan konsep eksklusif Anda dengan tim profesional kami dan
            rasakan pengalaman pernikahan yang benar-benar personal dan mewah.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 relative">
            <Link
              to="/contact"
              className="relative z-10 rounded-full bg-primary px-8 py-3 text-dark font-semibold text-sm sm:text-base tracking-wide transition hover:scale-105 hover:brightness-110"
            >
              Konsultasi Eksklusif
            </Link>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 rounded-full border border-primary px-8 py-3 text-white font-semibold text-sm sm:text-base tracking-wide transition hover:bg-primary hover:text-dark hover:scale-105"
            >
              Chat via WhatsApp
            </a>

            {/* Floating Stars */}
            {floatingIcons.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [-10, 10, -10],
                  x: [-10, 10, -10],
                  scale: [0.7, 1, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6 + i,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute text-primary"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                }}
              >
                <FaStar size={12} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle Animated Glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ repeat: Infinity, duration: 6, yoyo: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl"
      />
    </section>
  );
}
