import { useState } from "react";
import { motion } from "framer-motion";
import { FaGem, FaHandshake, FaStar, FaClock } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    icon: <FaGem />,
    title: "Exclusive Design",
    desc: "Konsep pernikahan dirancang secara unik dan personal untuk karakter Anda.",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Premium Service",
    desc: "Pendampingan penuh dari awal hingga hari-H dengan pengalaman seamless.",
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "High Satisfaction",
    desc: "Rating dan testimoni klien menunjukkan kualitas layanan unggul.",
  },
  {
    id: 4,
    icon: <FaClock />,
    title: "Timely Execution",
    desc: "Semua elemen ditangani tepat waktu, tanpa stres dan kejutan.",
  },
];

export default function SignatureExperience() {
  const [activeId, setActiveId] = useState(2); // default highlight

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? prev : id)); // toggle highlight satu-satu
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0b0b0c] via-[#1a1a1a] to-[#0b0b0c] text-white overflow-hidden">
      <div className="container max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-primary uppercase">
            Signature Experience
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-serif">
            The Luxury You Deserve
          </h2>
          <p className="mt-4 px-6 text-white/70 max-w-xl mx-auto">
            Menghadirkan pengalaman pernikahan premium melalui desain unik,
            layanan eksklusif, dan eksekusi sempurna.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {experiences.map((exp, i) => {
            const isActive = activeId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                onClick={() => handleToggle(exp.id)}
                className={`
                  relative flex items-start gap-6 rounded-xl p-8 shadow-xl cursor-pointer
                  transition-transform duration-300
                  ${
                    isActive
                      ? "border-2 border-primary bg-[#1a1a1a]"
                      : "bg-[#111111]"
                  }
                  hover:scale-103 hover:shadow-2xl
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    flex h-16 w-16 items-center justify-center rounded-full text-3xl
                    ${
                      isActive
                        ? "bg-primary text-dark"
                        : "bg-white/10 text-primary"
                    }
                  `}
                >
                  {exp.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-white/70">{exp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
