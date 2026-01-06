import { motion } from "framer-motion";
import { packages } from "../data/packages";
import { generateWhatsAppLink } from "../utils/whatsapp";
import { FiCheck } from "react-icons/fi";

export default function ServicesPreview() {
  return (
    <section id="services" className="relative bg-dark py-28 text-white">
      {/* Ambient luxury glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[20%] top-[10%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>
      <div className="container px-6 sm:px-8">
        {/* ================= Heading ================= */}
        <div className="mb-20 max-w-2xl">
          <span className="text-xs tracking-[0.35em] text-primary">
            OUR SERVICES
          </span>

          <h2 className="mt-6 font-serif text-3xl md:text-4xl">
            Wedding Packages
            <br />
            <span className="text-primary">Crafted with Elegance</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60">
            Setiap paket dirancang secara personal dengan perhatian penuh
            terhadap detail, menciptakan pengalaman pernikahan yang berkelas dan
            tak terlupakan.
          </p>
        </div>

        {/* ================= Editorial Divider ================= */}
        <div className="mb-16 flex items-center gap-6">
          <span className="h-px w-20 bg-primary/40" />
          <span className="text-xs tracking-[0.35em] text-white/40">
            EXCLUSIVE COLLECTION
          </span>
        </div>

        {/* ================= Packages ================= */}
        <div className="grid gap-10 md:grid-cols-3">
          {packages.map((pkg, i) => {
            const waLink = generateWhatsAppLink({
              phone: "6281234567890",
              message: `Halo, saya tertarik dengan paket ${pkg.title}. Bisa minta info detailnya?`,
            });

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 10 }}
                className={`
  group relative flex flex-col justify-between
  rounded-xl
  border border-white/10
  bg-white/5 backdrop-blur
  p-8
  transition-all duration-500
  hover:border-primary/40
  ${pkg.highlight ? "ring-1 ring-primary/40" : ""}
`}
              >
                {/* Package Number */}
                <span
                  className="
                    absolute right-6 top-6
                    font-serif text-5xl
                    text-white/5
                    pointer-events-none
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Highlight Badge */}
                {pkg.highlight && (
                  <span
                    className="
                      absolute -top-4 left-6
                      rounded-full
                      border border-primary/40
                      bg-dark
                      px-4 py-1
                      text-xs tracking-wider text-primary
                    "
                  >
                    MOST SELECTED
                  </span>
                )}

                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl text-white">{pkg.title}</h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {pkg.description}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {pkg.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <FiCheck size={16} className="mt-0.5 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-10 inline-flex justify-center
                    rounded-full
                    border border-primary/40
                    px-6 py-4
                    text-xs tracking-[0.25em] uppercase
                    text-primary
                    transition-all duration-300
                    hover:bg-primary hover:text-dark
                  "
                >
                  Request Detail
                </a>

                {/* Gold Accent Hover Line */}
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent via-primary to-transparent
                    opacity-0 transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* ================= Disclaimer ================= */}
        <p className="mt-24 text-center text-xs tracking-widest text-white/30">
          SETIAP PERNIKAHAN DIRANCANG SECARA PERSONAL — BUKAN PRODUK MASSAL
        </p>
      </div>
    </section>
  );
}
