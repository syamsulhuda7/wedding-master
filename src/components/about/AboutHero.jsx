import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative text-white">
      <div className="container px-6 sm:px-10 pt-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Label */}
          <span className="block text-xs tracking-[0.45em] text-primary">
            ABOUT US
          </span>

          {/* Headline */}
          <h1 className="mt-10 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.15]">
            We Don’t Just
            <br />
            Organize Events.
            <br />
            <span className="text-primary">We Carry Responsibility.</span>
          </h1>

          {/* Philosophy */}
          <p className="mt-10 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
            Setiap momen penting tidak boleh diserahkan pada keberuntungan. Di
            balik acara yang terasa tenang, ada struktur, pengalaman, dan
            kontrol yang dibangun melalui proses panjang.
          </p>

          {/* Quiet Statement */}
          <p className="mt-6 max-w-xl text-sm tracking-wide text-white/45">
            Calm is not a coincidence — it is the result of preparation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
