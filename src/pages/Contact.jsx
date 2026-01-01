import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiInstagram,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

export default function Contact() {
  return (
    <main className="relative bg-dark text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(200,164,110,0.22),transparent_60%)]" />
        <div className="container px-6 sm:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.45em] text-primary">
              CONTACT
            </span>

            <h1 className="mt-10 font-serif text-5xl sm:text-6xl leading-tight">
              Get in Touch
            </h1>

            <p className="mt-8 text-white/65 text-lg leading-relaxed">
              Untuk diskusi awal, penjadwalan, atau pertanyaan teknis terkait
              layanan kami, silakan hubungi melalui kanal berikut.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CHANNELS ================= */}
      <section className="py-32 border-t border-white/10">
        <div className="container px-6 sm:px-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FiPhone />,
                label: "WHATSAPP",
                value: "+62 812 3456 7890",
                note: "Respon tercepat untuk diskusi awal",
              },
              {
                icon: <FiMail />,
                label: "EMAIL",
                value: "hello@yourstudio.com",
                note: "Untuk detail & dokumen pendukung",
              },
              {
                icon: <FiInstagram />,
                label: "INSTAGRAM",
                value: "@yourstudio",
                note: "Lihat portofolio & update terbaru",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="
                  relative
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.04]
                  px-10 py-12
                  hover:bg-white/[0.06]
                  transition
                "
              >
                <div className="text-primary text-2xl">{item.icon}</div>

                <p className="mt-6 text-xs tracking-[0.35em] text-primary">
                  {item.label}
                </p>

                <p className="mt-4 text-lg font-medium">{item.value}</p>

                <p className="mt-3 text-sm text-white/60">{item.note}</p>

                {/* bottom glow */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-2/3 bg-primary/20 blur-[120px]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUICK INQUIRY ================= */}
      <section className="py-32">
        <div className="container px-6 sm:px-10 grid md:grid-cols-2 gap-24">
          <div>
            <span className="text-xs tracking-[0.45em] text-primary">
              QUICK INQUIRY
            </span>
            <h2 className="mt-8 font-serif text-4xl leading-tight">
              Common Reasons
              <br />
              To Contact Us
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              "Menanyakan ketersediaan tanggal acara",
              "Diskusi awal tentang skala dan konsep acara",
              "Konsultasi sistem kerja & alur koordinasi",
              "Menyesuaikan layanan dengan kondisi di lapangan",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="
                  flex items-start gap-4
                  border border-white/10
                  rounded-xl
                  px-6 py-5
                  bg-white/[0.03]
                "
              >
                <span className="text-primary">—</span>
                <p className="text-sm text-white/70 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AVAILABILITY ================= */}
      <section className="py-32 border-t border-white/10">
        <div className="container px-6 sm:px-10 grid md:grid-cols-3 gap-12">
          <div className="flex gap-4 items-start">
            <FiClock className="text-primary text-xl" />
            <div>
              <p className="text-sm font-medium">Response Time</p>
              <p className="mt-2 text-sm text-white/60">
                Maksimal 24 jam di hari kerja
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FiMapPin className="text-primary text-xl" />
            <div>
              <p className="text-sm font-medium">Service Area</p>
              <p className="mt-2 text-sm text-white/60">
                Berdomisili di Indonesia, tersedia untuk luar kota
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FiClock className="text-primary text-xl" />
            <div>
              <p className="text-sm font-medium">Operational Hours</p>
              <p className="mt-2 text-sm text-white/60">
                Senin – Jumat, 09.00 – 18.00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-36 px-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl"
        >
          Clear Communication
          <br />
          <span className="text-primary">Creates Calm Execution</span>
        </motion.h3>
      </section>
    </main>
  );
}
