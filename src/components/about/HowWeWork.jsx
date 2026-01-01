import { motion } from "framer-motion";

export default function HowWeWork() {
  return (
    <section className="bg-dark text-white">
      <div className="container px-6 sm:px-10 py-24">
        <div className="max-w-6xl">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.35em] text-primary">
              HOW WE WORK
            </span>

            <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Behind Every Calm Moment,
              <br />
              <span className="text-primary">There Is Quiet Precision.</span>
            </h2>

            <p className="mt-8 text-base sm:text-lg text-white/70 leading-relaxed">
              Klien jarang melihat proses kami secara utuh — dan memang
              seharusnya begitu. Yang mereka rasakan hanyalah ketenangan.
            </p>
          </motion.div>

          {/* Flow */}
          <div className="mt-20 space-y-16">
            {[
              {
                title: "Understanding Before Planning",
                desc: "Kami memulai dengan mendengar. Bukan hanya rundown, tetapi dinamika keluarga, ekspektasi, dan sensitivitas momen.",
              },
              {
                title: "Structuring The Invisible",
                desc: "Semua potensi chaos kami pecah menjadi sistem: timing, peran, jalur komunikasi, dan cadangan keputusan.",
              },
              {
                title: "Guiding Without Interrupting",
                desc: "Di hari acara, kami tidak mengganggu alur emosi. Kami bergerak di belakang layar, memastikan semuanya tetap terkendali.",
              },
              {
                title: "Remaining Until The End",
                desc: "Bagi kami, pekerjaan tidak selesai saat acara berjalan lancar, tetapi saat klien benar-benar bisa bernapas lega.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                className="relative pl-14 sm:pl-20 max-w-4xl"
              >
                {/* Number */}
                <span className="absolute left-0 top-0 font-serif text-3xl text-primary/40">
                  {`0${i + 1}`}
                </span>

                {/* Line */}
                <div className="absolute left-[18px] top-10 h-full w-px bg-primary/20" />

                <h3 className="font-serif text-2xl sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
