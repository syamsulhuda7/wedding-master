import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import tm1 from "../../assets/images/teams/tm1.webp";
import tm2 from "../../assets/images/teams/tm2.webp";
import tm3 from "../../assets/images/teams/tm3.webp";
import tm4 from "../../assets/images/teams/tm4.webp";
import tm5 from "../../assets/images/teams/tm5.webp";
import tm6 from "../../assets/images/teams/tm6.webp";
import tm7 from "../../assets/images/teams/tm7.webp";
import tm8 from "../../assets/images/teams/tm8.webp";

import "swiper/css";

const team = [
  {
    name: "Alyssa Rahman",
    role: "Founder & Lead Coordinator",
    image: tm1,
  },
  {
    name: "Daniel Wijaya",
    role: "Operations Director",
    image: tm4,
  },
  {
    name: "Nadya Putri",
    role: "Client Experience Lead",
    image: tm2,
  },
  {
    name: "Rizky Mahendra",
    role: "Vendor & Technical Control",
    image: tm6,
  },
  {
    name: "Intan Salsabila",
    role: "Creative Styling",
    image: tm3,
  },
  {
    name: "Fahri Pratama",
    role: "Logistics & Flow Control",
    image: tm7,
  },
  {
    name: "Saskia Amelia",
    role: "Guest Management",
    image: tm5,
  },
  {
    name: "Wanda Putri",
    role: "Ceremony Supervisor",
    image: tm8,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-dark text-white overflow-hidden">
      <div className="container px-6 sm:px-10 py-28">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs tracking-[0.35em] text-primary">
            OUR PEOPLE
          </span>

          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl">
            The Team That
            <br />
            <span className="text-primary">Keeps Everything Calm</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg">
            Bukan sekadar tim pelaksana. Mereka adalah sistem yang memastikan
            setiap momen berjalan tepat, tenang, dan terkontrol.
          </p>
        </motion.div>

        {/* SWIPER */}
        <div className="mt-24 py-12">
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
            }}
            spaceBetween={32}
            slidesPerView={1.4}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            className="overflow-visible"
          >
            {team.map((member, i) => (
              <SwiperSlide key={i} className="flex">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="group relative w-full"
                >
                  <div
                    className={`transition-transform duration-500 py-7 ${
                      i % 2 === 0 ? "translate-y-6" : "-translate-y-6"
                    }`}
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* TEXT */}
                    <div className="mt-6">
                      <p className="font-serif text-lg">{member.name}</p>
                      <p className="text-xs tracking-wide text-white/50">
                        {member.role}
                      </p>

                      <span className="mt-4 block h-px w-10 bg-primary/60 transition-all duration-300 group-hover:w-20" />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TRUST STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 max-w-4xl"
        >
          <p className="font-serif text-lg sm:text-xl leading-relaxed text-white/90">
            Kami percaya, ketenangan sebuah pernikahan lahir dari tim yang tahu
            perannya masing-masing — dan bekerja tanpa perlu terlihat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
