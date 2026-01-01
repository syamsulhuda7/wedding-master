import { motion } from "framer-motion";
import { Link } from "react-router";
import wd5 from "../assets/images/wd5.webp";

export default function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="relative overflow-hidden bg-dark py-28"
    >
      {/* Ambient Luxury Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(200,164,110,0.1),transparent_55%)]" />

      <div className="container relative">
        <div className="grid gap-12 md:gap-20 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT — STORY IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative px-6"
          >
            {/* Vertical Accent Line */}
            <div className="absolute -left-6 top-12 hidden h-[85%] w-px bg-primary/40 lg:block" />

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={wd5}
                alt="Luxury Wedding Coordination"
                className="h-100 w-full object-cover md:h-[720px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Floating Signature */}
            <div className="scale-80 md:scale-100 absolute -bottom-8 left-8 rounded-2xl border border-white/10 bg-dark/90 px-8 py-6 backdrop-blur">
              <p className="font-serif text-3xl text-primary">100+</p>
              <p className="mt-1 text-sm tracking-wide text-white/60">
                Curated Weddings
              </p>
            </div>
          </motion.div>

          {/* RIGHT — NARRATIVE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="relative px-6"
          >
            {/* Label */}
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.35em] text-primary">
              <span className="h-px w-10 bg-primary/60" />
              OUR PHILOSOPHY
            </span>

            {/* Heading */}
            <h2 className="mt-8 max-w-xl font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Designing Calm
              <br />
              <span className="text-primary">
                Within Your Most Important Day
              </span>
            </h2>

            {/* Narrative */}
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70">
              Pernikahan adalah tentang emosi, bukan tekanan. Kami merancang
              sistem kerja yang tenang, presisi, dan penuh kendali — sehingga
              Anda dapat hadir sepenuhnya di momen yang tak akan terulang.
            </p>

            {/* Signature Values */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Emotional Intelligence",
                  desc: "Kami membaca situasi, bukan hanya timeline.",
                },
                {
                  title: "Controlled Precision",
                  desc: "Setiap detail memiliki alasan.",
                },
                {
                  title: "Discreet Luxury",
                  desc: "Mewah tanpa perlu berisik.",
                },
                {
                  title: "Absolute Presence",
                  desc: "Kami hadir sebelum, saat, dan setelah.",
                },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col gap-1">
                  <p className="ml-4 font-serif text-lg text-primary">
                    {item.title}
                  </p>
                  <p className="ml-4 text-sm text-white/70">{item.desc}</p>
                  <span className="absolute w-1 h-[calc(100%-8px)] top-1 bg-primary"></span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16">
              <Link
                to="/about"
                className="
                  inline-flex items-center gap-4
                  rounded-full border border-primary/50
                  px-10 py-4 text-sm tracking-wide text-primary
                  transition-all duration-300
                  hover:bg-primary hover:text-dark
                "
              >
                Discover Our Approach
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
