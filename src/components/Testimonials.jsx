import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import "swiper/css";

import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        section relative overflow-hidden
        bg-[#0b0b0c] text-white
      "
    >
      {/* Ambient luxury glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 10 }}
          className="mb-20 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs tracking-[0.35em] text-primary">
            CLIENT STORIES
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Words That Remain
            <br />
            <span className="text-primary">After The Wedding Ends</span>
          </h2>

          <p className="mt-6 text-white/60">
            Bagi kami, kepuasan bukan hanya hasil akhir—tetapi perasaan yang
            tertinggal setelah hari istimewa berlalu.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 40000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1200}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.2 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={item.id}>
              <motion.article
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.9 }}
                className="
                  relative h-full
                  rounded-2xl
                  border border-white/10
                  bg-gradient-to-b from-white/5 to-white/0
                  p-10 backdrop-blur-xl
                "
              >
                {/* Quote Highlight */}
                <p className="font-serif text-xl leading-relaxed text-primary">
                  “{item.highlight ?? item.message.slice(0, 80)}”
                </p>

                {/* Divider */}
                <div className="my-6 h-px w-16 bg-primary/40" />

                {/* Full Message */}
                <p className="text-sm leading-relaxed text-white/70">
                  {item.message}
                </p>

                {/* Footer */}
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div>
                      <p className="font-serif text-sm">{item.name}</p>
                      <p className="text-xs text-white/50">{item.event}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <FaStar key={idx} className="text-xs" />
                    ))}
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
