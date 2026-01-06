import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import { portfolio } from "../data/portfolio";

export default function PortfolioHighlight() {
  return (
    <section
      id="portfolio"
      className="section relative bg-dark text-white overflow-hidden"
    >
      {/* Ambient luxury glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-60 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
      </div>
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl">Wedding Portfolio</h2>
          <p className="mt-4 text-white/60">
            Setiap pernikahan kami rancang sebagai karya visual yang berkelas,
            personal, dan tak lekang oleh waktu.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          className="portfolio-swiper"
          navigation
          autoplay={{
            delay: 30000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          speed={900}
        >
          {portfolio.map((item, i) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="
                  group relative
                  rounded-xl
                  border border-white/10
                  bg-black/30
                  backdrop-blur
                "
              >
                {/* Image Wrapper */}
                <div className="relative h-[360px] sm:h-[420px] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-[1200ms] ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80 via-black/30 to-transparent
                      opacity-70
                    "
                  />
                </div>

                {/* Caption */}
                <div
                  className="
                    absolute bottom-6 left-6 right-6
                    translate-y-4 opacity-0
                    transition-all duration-500
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                >
                  <p className="font-serif text-lg text-white">{item.title}</p>
                  {item.location && (
                    <p className="mt-1 text-xs tracking-wider text-primary">
                      {item.location}
                    </p>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/portfolio"
            className="
              inline-flex items-center gap-3
              rounded-full
              border border-primary/50
              px-8 py-4
              text-sm tracking-wide text-primary
              transition
              hover:bg-primary hover:text-dark
            "
          >
            Lihat Portfolio Lengkap
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
