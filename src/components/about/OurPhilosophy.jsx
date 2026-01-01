import { motion } from "framer-motion";

export default function OurPhilosophy() {
  return (
    <section className="bg-dark text-white">
      <div className="container px-6 sm:px-10 py-24">
        <div className="max-w-5xl">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-xs tracking-[0.35em] text-primary">
              OUR PHILOSOPHY
            </span>

            <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Luxury Is Not About Excess.
              <br />
              <span className="text-primary">It Is About Control.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
              Kami tidak menciptakan pernikahan yang terlihat ramai. Kami
              menciptakan pernikahan yang terasa terkendali, mengalir, dan
              memberi ruang bagi Anda untuk benar-benar hadir.
            </p>
          </motion.div>

          {/* Principles */}
          <div className="mt-20 space-y-16">
            {[
              {
                title: "We Design Calm",
                desc: "Ketenangan bukan hasil kebetulan. Ia lahir dari sistem, perencanaan matang, dan tim yang tahu kapan harus bergerak dan kapan harus diam.",
              },
              {
                title: "We Respect the Moment",
                desc: "Kami memahami bahwa ini bukan sekadar event. Ini adalah momen emosional yang tidak boleh diinterupsi oleh kekacauan teknis.",
              },
              {
                title: "We Stay Invisible, Yet Present",
                desc: "Pekerjaan terbaik kami seringkali tidak terlihat, tetapi selalu terasa. Hadir tanpa mengganggu, mengontrol tanpa mendominasi.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                className="max-w-3xl"
              >
                {/* Divider */}
                <div className="mb-4 h-px w-16 bg-primary/60" />

                <h3 className="font-serif text-2xl sm:text-3xl text-white">
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
