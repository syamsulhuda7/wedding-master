import { motion } from "framer-motion";
import wd1 from "../assets/images/wd1.webp";
import wd2 from "../assets/images/wd2.webp";
import wd3 from "../assets/images/wd3.webp";
import wd4 from "../assets/images/wd4.webp";
import wd5 from "../assets/images/wd5.webp";
import wd6 from "../assets/images/wd6.webp";
import wd7 from "../assets/images/wd7.webp";
import wd8 from "../assets/images/wd8.webp";

const featuredEvent = {
  title: "Intimate Garden Wedding",
  location: "Bandung",
  image: wd1,
  desc: "Sebuah pernikahan berskala intim dengan kontrol penuh terhadap ritme acara, detail visual, dan kenyamanan tamu.",
};

const gallery = [wd1, wd2, wd3, wd4, wd5, wd6, wd7, wd8];
// const gallery = [
//   "https://images.unsplash.com/photo-1519741497674-611481863552",
//   "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
//   "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
//   "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
//   "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
//   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//   "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
//   "https://images.unsplash.com/photo-1517841905240-472988babdf9",
// ];

const vendors = [
  { name: "Floral Styling", role: "Decoration & Atmosphere" },
  { name: "Moment Capture", role: "Photo & Video" },
  { name: "Sound & Flow", role: "Audio & Ceremony Control" },
  { name: "Taste Atelier", role: "Catering Partner" },
  { name: "Lightcraft", role: "Lighting Design" },
];

export default function Portfolio() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,164,110,0.16),transparent_60%)]" />
        <div className="container px-6 sm:px-10 pt-40 pb-36 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.45em] text-primary">
              PORTFOLIO
            </span>

            <h1 className="mt-10 font-serif text-5xl sm:text-6xl leading-tight">
              Moments We
              <br />
              <span className="text-primary">Quietly Controlled</span>
            </h1>

            <p className="mt-10 max-w-xl text-white/65 text-lg">
              Setiap acara adalah hasil dari sistem, koordinasi, dan keputusan
              yang bekerja tanpa perlu terlihat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED EVENT ================= */}
      <section className="py-32">
        <div className="container px-6 sm:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-xs tracking-[0.35em] text-primary">
              FEATURED EVENT
            </span>

            <h2 className="mt-6 font-serif text-4xl">{featuredEvent.title}</h2>

            <p className="mt-2 text-sm text-white/50">
              {featuredEvent.location}
            </p>

            <p className="mt-6 text-white/70">{featuredEvent.desc}</p>

            <div className="mt-8 h-px w-20 bg-primary/40" />
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-32 border-t border-white/10">
        <div className="container px-6 sm:px-10">
          <span className="text-xs tracking-[0.4em] text-primary">
            EVENT GALLERY
          </span>

          <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full object-cover hover:scale-105 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VENDORS ================= */}
      <section className="py-32">
        <div className="container px-6 sm:px-10">
          <span className="text-xs tracking-[0.4em] text-primary">
            COLLABORATED WITH
          </span>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {vendors.map((vendor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="
                  border border-white/10
                  rounded-2xl
                  px-8 py-10
                  bg-white/[0.04]
                "
              >
                <p className="font-serif text-lg">{vendor.name}</p>
                <p className="mt-2 text-sm text-white/60">{vendor.role}</p>

                <span className="mt-6 block h-px w-12 bg-primary/40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-40 px-10 text-center">
        <h3 className="font-serif text-4xl sm:text-5xl">
          When Everything Feels Effortless,
          <br />
          <span className="text-primary">That’s the System Working</span>
        </h3>
      </section>
    </main>
  );
}
