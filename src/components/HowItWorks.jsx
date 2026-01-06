import { motion } from "framer-motion";
import { FaRegCalendarCheck, FaHandsHelping, FaStar } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaRegCalendarCheck size={28} />,
    title: "Konsultasi Eksklusif",
    desc: "Diskusikan visi dan konsep pernikahan Anda secara personal dengan tim kami.",
  },
  {
    id: 2,
    icon: <FaHandsHelping size={28} />,
    title: "Perencanaan & Koordinasi",
    desc: "Kami merancang timeline, vendor, dan semua detail untuk pengalaman mulus.",
  },
  {
    id: 3,
    icon: <FaStar size={28} />,
    title: "Eksekusi Hari-H",
    desc: "Pelaksanaan pernikahan dengan presisi, layanan profesional, dan sentuhan mewah.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-dark text-white">
      <div className="container max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 10 }}
          className="mb-12 text-center"
        >
          <p className="text-sm tracking-widest text-primary uppercase">
            Our Process
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif">
            How We Make Your Wedding Exceptional
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Kami memastikan setiap detail pernikahan Anda tertata rapi dari awal
            hingga hari-H, memberikan pengalaman yang mewah, personal, dan tak
            terlupakan.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid px-2 md:px-12 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 10 }}
              className="group relative rounded-lg border border-white/10 bg-dark/70 p-6 text-center hover:bg-dark/90 transition"
            >
              {/* Icon / Number */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-dark text-2xl mb-4 shadow-lg transition group-hover:scale-105">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-white mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/70">{step.desc}</p>

              {/* Decorative number */}
              <span className="absolute top-2 right-4 text-4xl font-bold text-white/10">
                {step.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
