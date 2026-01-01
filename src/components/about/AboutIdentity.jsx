import { motion } from "framer-motion";

export default function AboutIdentity() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Soft ambient tone */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(200,164,110,0.08),transparent_50%)]" />

      <div className="container px-6 sm:px-10 py-36 relative">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >
          <span className="text-xs tracking-[0.4em] text-primary">
            WHO WE ARE
          </span>

          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            More Than a Team.
            <br />
            <span className="text-primary">A Control System.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Kami bekerja di balik layar untuk satu tujuan: memastikan setiap
            keputusan tetap jernih, setiap proses terkendali, dan setiap
            pasangan merasa aman untuk sepenuhnya hadir.
          </p>
        </motion.div>

        {/* VISUAL SEPARATOR */}
        <div className="my-32 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* CORE IDENTITY */}
        <div className="grid gap-24 lg:grid-cols-2 items-start">
          {/* LEFT — PHILOSOPHY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >
            <h3 className="font-serif text-2xl sm:text-3xl">
              The Team Behind the Calm
            </h3>

            <p className="mt-8 text-white/70 leading-relaxed">
              Tim kami tidak dibentuk untuk terlihat sibuk, tetapi untuk
              mengendalikan situasi tanpa menciptakan ketegangan.
            </p>

            <p className="mt-6 text-white/70 leading-relaxed">
              Setiap orang memahami perannya, tahu kapan harus mengambil alih,
              dan kapan harus memberi ruang agar momen tetap terasa alami.
            </p>

            {/* Sub quote */}
            <p className="mt-10 border-l border-primary/40 pl-6 italic text-white/60">
              Ketika semuanya terasa mengalir, di situlah sistem bekerja dengan
              benar.
            </p>
          </motion.div>

          {/* RIGHT — TRUST PRINCIPLES */}
          <div className="grid gap-14">
            {[
              {
                title: "Clear Roles",
                desc: "Tidak ada asumsi. Setiap peran didefinisikan sejak awal.",
              },
              {
                title: "Composure Under Pressure",
                desc: "Kami tetap tenang saat situasi paling sensitif.",
              },
              {
                title: "Consistent Standards",
                desc: "Setiap acara dijalankan dengan kualitas yang sama.",
              },
              // {
              //   title: "Presence Until Completion",
              //   desc: "Kami baru selesai ketika semuanya benar-benar selesai.",
              // },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
                className="relative pl-10"
              >
                {/* Minimal accent */}
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />

                <h4 className="font-serif text-lg text-primary">
                  {item.title}
                </h4>
                <p className="mt-2 max-w-sm text-sm sm:text-base text-white/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FINAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-36 max-w-3xl"
        >
          <p className="font-serif text-lg sm:text-xl leading-relaxed text-white/90">
            Kepercayaan tumbuh bukan karena janji yang keras, tetapi karena
            ketenangan yang terasa sejak awal hingga akhir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
