import { motion } from "framer-motion";

const services = [
  {
    title: "Full Wedding Management",
    tagline: "End-to-end operational control",
    desc: "Pendampingan menyeluruh dari fase awal hingga hari pernikahan. Kami mengelola sistem kerja, alur komunikasi, dan pengambilan keputusan agar seluruh proses berjalan rapi dan terkendali.",
    scope: [
      "Perencanaan konsep & timeline",
      "Koordinasi seluruh vendor",
      "Kontrol prioritas & anggaran",
      "Manajemen risiko lapangan",
      "Supervisi penuh hari-H",
    ],
    primary: true,
  },
  {
    title: "Wedding Day Coordination",
    tagline: "Precision on the critical day",
    desc: "Fokus penuh pada hari pernikahan untuk menjaga ritme acara tetap stabil dan terkontrol.",
    scope: [
      "Final briefing vendor",
      "Kontrol timeline real-time",
      "Koordinasi kru & venue",
    ],
  },
  {
    title: "Intimate & Private Events",
    tagline: "Small scale, high attention",
    desc: "Pendekatan personal untuk acara berskala kecil yang membutuhkan kepekaan tinggi terhadap detail.",
    scope: ["Pengaturan alur tamu", "Kontrol suasana", "Eksekusi detail mikro"],
  },
];

const responsibilities = [
  "Mengambil keputusan cepat saat kondisi tidak ideal",
  "Menjaga timeline tetap berjalan tanpa tekanan pada klien",
  "Mengkoordinasikan seluruh vendor di lapangan",
  "Mengelola dinamika keluarga & pihak terkait",
  "Menjadi penyangga agar klien tetap tenang",
];

const risks = [
  "Timeline tidak terkendali",
  "Vendor datang tidak sesuai jadwal",
  "Miskomunikasi antar pihak",
  "Perubahan mendadak",
  "Tekanan emosional klien",
];

export default function Services() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,164,110,0.18),transparent_60%)]" />
        <div className="container px-6 sm:px-10 pt-40 pb-36 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.45em] text-primary">
              SERVICES
            </span>

            <h1 className="mt-10 font-serif text-5xl sm:text-6xl leading-tight">
              Structured Control
              <br />
              <span className="text-primary">Behind Emotional Moments</span>
            </h1>

            <p className="mt-10 max-w-xl text-white/65 text-lg">
              Kami bekerja di balik layar, mengendalikan sistem dan detail agar
              Anda bisa sepenuhnya hadir tanpa rasa cemas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICE STRUCTURE ================= */}
      <section className="py-36">
        <div className="container px-6 sm:px-10 space-y-28">
          {/* PRIMARY SERVICE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              rounded-3xl
              border border-white/10
              bg-white/[0.05]
              px-10 py-14
              max-w-4xl
            "
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-2/3 bg-primary/20 blur-[140px]" />

            <div className="relative z-10">
              <h2 className="font-serif text-3xl">{services[0].title}</h2>

              <p className="mt-2 text-xs tracking-wide text-primary">
                {services[0].tagline}
              </p>

              <p className="mt-6 text-white/70 max-w-2xl">{services[0].desc}</p>

              <div className="mt-8 h-px w-20 bg-primary/40" />

              <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-white/65">
                {services[0].scope.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* SECONDARY SERVICES */}
          <div className="grid md:grid-cols-2 gap-16">
            {services.slice(1).map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl">{service.title}</h3>

                <p className="text-xs tracking-wide text-primary">
                  {service.tagline}
                </p>

                <p className="text-sm text-white/70 max-w-md">{service.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESPONSIBILITY FLOW ================= */}
      <section className="py-32 border-t border-white/10">
        <div className="container px-6 sm:px-10 grid md:grid-cols-2 gap-24">
          <div>
            <span className="text-xs tracking-[0.4em] text-primary">
              RESPONSIBILITY
            </span>
            <h2 className="mt-6 font-serif text-4xl">We Absorb the Pressure</h2>
          </div>

          <div className="space-y-6">
            {responsibilities.map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-white/75 border-l border-primary/40 pl-6"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RISK ================= */}
      <section className="py-32">
        <div className="container px-6 sm:px-10">
          <span className="text-xs tracking-[0.4em] text-primary">
            RISK CONTROL
          </span>

          <div className="mt-10 flex flex-wrap gap-6">
            {risks.map((risk, i) => (
              <span
                key={i}
                className="
                  rounded-full
                  border border-white/10
                  px-6 py-3
                  text-sm text-white/70
                  bg-white/[0.04]
                "
              >
                {risk}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-40 text-center">
        <h3 className="font-serif text-4xl sm:text-5xl">
          Calm Is Not Luck,
          <br />
          <span className="text-primary">It Is Designed</span>
        </h3>
      </section>
    </main>
  );
}
