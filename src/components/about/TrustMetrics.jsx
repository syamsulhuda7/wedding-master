import { motion } from "framer-motion";

const metrics = [
  {
    label: "Client Satisfaction",
    value: 98,
    note: "Based on post-wedding feedback",
  },
  {
    label: "Timeline Accuracy",
    value: 100,
    note: "Events executed on schedule",
  },
  {
    label: "Vendor Control",
    value: 96,
    note: "Internal coordination score",
  },
];

export default function TrustMetrics() {
  return (
    <section className="relative bg-dark text-white overflow-hidden">
      <div className="container px-6 sm:px-10 py-32">
        <div className="absolute inset-0 flex items-center justify-center text-[18rem] font-serif text-white/5 pointer-events-none">
          TRUST
        </div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-xs tracking-[0.35em] text-primary">
            PROVEN PERFORMANCE
          </span>

          <h3 className="mt-6 font-serif text-3xl sm:text-4xl leading-tight">
            Measured,
            <br />
            <span className="text-primary">Not Claimed</span>
          </h3>

          <p className="mt-6 text-white/65 leading-relaxed">
            Setiap pernikahan kami evaluasi secara internal dan melalui feedback
            klien — bukan untuk dipamerkan, tetapi untuk memastikan ketenangan
            tetap terjaga di setiap acara.
          </p>
        </motion.div>

        {/* METRICS RAIL */}
        <div className="relative mt-28">
          {/* Vertical Accent */}
          <span className="absolute left-0 top-0 h-full w-px bg-primary/30 hidden md:block" />

          <div className="md:pl-20 grid gap-20 md:grid-cols-3">
            {metrics.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                {/* VALUE */}
                <p className="font-serif text-[5rem] text-primary leading-none">
                  {item.value}
                  <span className="text-2xl align-top">%</span>
                </p>

                {/* Subtle Line */}
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-primary to-transparent" />

                {/* Label */}
                <p className="mt-6 text-sm tracking-wide">{item.label}</p>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDITORIAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-32
            max-w-3xl
            border-l border-primary/40
            pl-10
          "
        >
          <p className="font-serif text-lg sm:text-xl leading-relaxed text-white/90">
            Kami tidak mengukur kesuksesan dari kemewahan visual,
            <br className="hidden sm:block" />
            tetapi dari ketenangan yang dirasakan klien di hari terpenting
            mereka.
          </p>

          <p className="mt-6 text-sm text-white/50">
            — Internal Execution Philosophy
          </p>
        </motion.div>
      </div>
      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-[-120px] right-1/4 -translate-x-1/2 w-[120%] h-[300px]">
        <div className="h-full w-full rounded-full bg-primary/20 blur-[200px]" />
      </div>
    </section>
  );
}
