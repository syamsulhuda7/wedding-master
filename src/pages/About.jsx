import { motion } from "framer-motion";
import TeamSection from "../components/about/TeamSection";

export default function About() {
  return (
    <main className="relative bg-dark text-white overflow-hidden">
      {/* ================= IDENTITY HERO ================= */}
      <section className="relative pt-48 pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,164,110,0.18),transparent_60%)]" />
        <div className="container px-6 sm:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="max-w-5xl"
          >
            <span className="text-xs tracking-[0.5em] text-primary">
              WHO WE ARE
            </span>

            <h1 className="mt-12 font-serif text-5xl sm:text-6xl leading-[1.1]">
              We Are Not
              <br />
              Event Stylists.
              <br />
              <span className="text-primary">We Are Operational Control.</span>
            </h1>

            <p className="mt-12 max-w-2xl text-lg text-white/65 leading-relaxed">
              Kami hadir untuk mengambil alih kompleksitas, tekanan, dan risiko
              dalam sebuah acara, sehingga klien dapat sepenuhnya hadir secara
              emosional tanpa harus memikirkan hal teknis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-44 border-t border-white/10">
        <div className="container px-6 sm:px-10 grid lg:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-xs tracking-[0.45em] text-primary">
              PHILOSOPHY
            </span>

            <h2 className="mt-10 font-serif text-4xl leading-tight">
              Calm Is Engineered,
              <br />
              Not Hoped For
            </h2>

            <p className="mt-10 text-white/65 leading-relaxed">
              Kami percaya bahwa ketenangan bukan hasil keberuntungan. Ia adalah
              hasil dari sistem kerja yang jelas, keputusan yang tegas, dan tim
              yang tahu kapan harus bergerak tanpa menciptakan kegaduhan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            {[
              "Kami bekerja jauh sebelum hari acara dimulai.",
              "Kami mengantisipasi sebelum masalah muncul.",
              "Kami mengambil keputusan tanpa membebani klien.",
            ].map((text, i) => (
              <div key={i} className="border-l border-primary/40 pl-8">
                <p className="font-serif text-lg text-white/85">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}
      <section className="py-48 relative">
        <div className="container px-6 sm:px-10">
          <div className="max-w-xl mb-32">
            <span className="text-xs tracking-[0.45em] text-primary">
              HOW WE WORK
            </span>
            <h2 className="mt-10 font-serif text-4xl leading-tight">
              A Clear Flow,
              <br />
              From Planning to Execution
            </h2>
          </div>

          <div className="relative space-y-28">
            {[
              {
                step: "01",
                title: "Understanding & Mapping",
                desc: "Kami memahami kebutuhan, ekspektasi, dan dinamika klien untuk membangun peta kerja yang realistis.",
              },
              {
                step: "02",
                title: "Structuring the System",
                desc: "Setiap detail diterjemahkan menjadi timeline, alur kerja, dan pembagian peran yang jelas.",
              },
              {
                step: "03",
                title: "Controlled Execution",
                desc: "Di hari acara, kami mengambil alih kendali penuh agar semua berjalan sesuai rencana.",
              },
              {
                step: "04",
                title: "Final Responsibility",
                desc: "Kami baru selesai ketika acara benar-benar selesai, tanpa menyisakan beban pada klien.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-[120px_1fr] gap-12"
              >
                <div className="font-serif text-6xl text-primary/30">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      {/* <section className="py-48 border-t border-white/10">
        <div className="container px-6 sm:px-10">
          <div className="max-w-xl mb-28">
            <span className="text-xs tracking-[0.45em] text-primary">
              THE TEAM
            </span>
            <h2 className="mt-10 font-serif text-4xl leading-tight">
              People Behind
              <br />
              the Calm
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              "Lead Coordinator",
              "Operations Control",
              "Client Experience",
              "Technical & Vendor Lead",
            ].map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-56 rounded-3xl bg-white/10 mb-6" />
                <p className="font-serif text-lg">{role}</p>
                <p className="mt-2 text-sm text-white/60">
                  Bekerja di balik layar dengan tanggung jawab penuh.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <TeamSection />

      {/* ================= MOTTO ================= */}
      <section className="py-52 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-4xl sm:text-5xl"
        >
          If It Feels Effortless,
          <br />
          <span className="text-primary">
            It’s Because Someone Took Responsibility
          </span>
        </motion.h3>

        <p className="mt-12 max-w-xl mx-auto text-white/60 leading-relaxed">
          Dan itulah peran kami — memastikan setiap momen penting berjalan
          dengan ketenangan yang disengaja.
        </p>
      </section>
    </main>
  );
}
