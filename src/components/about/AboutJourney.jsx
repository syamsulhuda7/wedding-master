import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const journey = [
  {
    step: "01",
    phase: "The Beginning",
    year: "2015",
    title: "Starting With Responsibility",
    desc: "Kami memulai tanpa reputasi dan tanpa sistem yang matang. Satu acara berarti mengerjakan banyak peran sekaligus. Bukan untuk terlihat hebat, tapi agar tanggung jawab tetap terpenuhi.",
    highlight:
      "Kami belajar bahwa kepercayaan tidak bisa diminta — ia dibangun.",
  },
  {
    step: "02",
    phase: "Reality Check",
    year: "2016 – 2017",
    title: "Learning Under Pressure",
    desc: "Tekanan datang saat ekspektasi bertemu kenyataan. Acara molor, perubahan mendadak, dan klien yang cemas menuntut keputusan cepat dan tenang.",
    highlight: "Ketenangan klien selalu datang dari kesiapan tim.",
  },
  {
    step: "03",
    phase: "System Building",
    year: "2018 – 2019",
    title: "Turning Mistakes Into Standards",
    desc: "Kami berhenti mengandalkan insting semata. Setiap kesalahan kami ubah menjadi sistem: alur kerja, checklist detail, dan pembagian peran yang jelas.",
    highlight: "Struktur adalah bentuk kepedulian terhadap detail.",
  },
  {
    step: "04",
    phase: "Trust Phase",
    year: "2020 – 2022",
    title: "Chosen Through Consistency",
    desc: "Klien datang karena rekomendasi, bukan promosi. Mereka melihat cara kami bekerja — bukan apa yang kami janjikan.",
    highlight: "Reputasi tumbuh saat janji tidak perlu diulang.",
  },
  {
    step: "05",
    phase: "Today",
    year: "Now",
    title: "Letting Clients Be Present",
    desc: "Hari ini fokus kami adalah mengambil alih beban teknis dan risiko, agar klien bisa sepenuhnya hadir dalam momen terpenting mereka.",
    highlight: "Hasil terbaik terasa tenang, bukan ramai.",
  },
];

export default function AboutJourney() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax movement
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 overflow-hidden text-white"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,164,110,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(200,164,110,0.08),transparent_60%)]" />
      </motion.div>

      <div className="container px-6 sm:px-10">
        {/* HEADER */}
        <div className="mb-32 max-w-xl">
          <span className="text-xs tracking-[0.4em] text-primary">
            OUR JOURNEY
          </span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
            Built by
            <br />
            <span className="text-primary">Real Responsibility</span>
          </h2>
          <p className="mt-6 text-white/65">
            Setiap fase dibentuk oleh pengalaman nyata, tekanan lapangan, dan
            keputusan yang tidak selalu mudah.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* VERTICAL LINE */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-36">
            {journey.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`relative grid md:grid-cols-2 ${
                    isLeft ? "" : "md:text-right"
                  }`}
                >
                  {/* CONTENT */}
                  <div
                    className={`md:px-20 ${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-primary font-medium">
                        {item.step}
                      </span>
                      <span className="text-xs tracking-[0.3em] text-primary/70">
                        {item.phase} · {item.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>

                    <p className="mt-5 max-w-md text-white/65 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Narrative Accent */}
                    <p className="mt-6 text-sm italic text-white/45 border-l border-white/10 pl-4">
                      {item.highlight}
                    </p>
                  </div>

                  {/* DOT */}
                  <div className="absolute left-4 top-2 md:left-1/2 md:-translate-x-1/2">
                    <span className="relative block h-3 w-3 rounded-full bg-primary">
                      <span className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
