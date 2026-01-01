import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiStar } from "react-icons/fi";
import wd7 from "../assets/images/wd7.webp";

export default function Hero() {
  return (
    <>
      <Helmet>
        <title>Luxury Wedding Organizer | Elegant & Timeless</title>
        <meta
          name="description"
          content="Luxury wedding organizer untuk pernikahan eksklusif dengan konsep elegan, detail sempurna, dan pengalaman tak terlupakan."
        />
      </Helmet>

      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-dark text-white"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={wd7}
            alt="Luxury Wedding"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-xl md:max-w-3xl"
            >
              {/* Label */}
              <span
                className="
                  inline-block
                  border border-primary/40
                  px-4 py-2
                  text-[10px] sm:text-xs
                  tracking-[0.3em]
                  text-primary
                "
              >
                LUXURY WEDDING ORGANIZER
              </span>

              {/* Headline */}
              <h1
                className="
                  mt-6
                  font-serif
                  text-3xl
                  leading-tight
                  sm:text-4xl
                  md:text-6xl
                "
              >
                A Timeless
                <br />
                <span className="text-primary">Wedding Experience</span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-relaxed
                  text-white/70
                  sm:text-base
                "
              >
                Kami menciptakan pernikahan yang tidak hanya indah, tetapi
                berkelas, personal, dan dirancang dengan detail sempurna dari
                awal hingga hari istimewa Anda.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  to="/contact"
                  className="
                    inline-flex justify-center
                    rounded-full
                    bg-primary
                    px-8 py-4
                    text-xs tracking-wider
                    text-dark
                    transition hover:brightness-110
                  "
                >
                  Konsultasi Eksklusif
                </Link>

                <a
                  href="https://wa.me/628xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex justify-center
                    rounded-full
                    border border-white/30
                    px-8 py-4
                    text-xs tracking-wider
                    text-white
                    transition
                    hover:border-primary hover:text-primary
                  "
                >
                  WhatsApp
                </a>
              </div>

              {/* Stats */}
              <div
                className="
                  mt-14
                  grid grid-cols-2
                  gap-y-8 gap-x-12
                  sm:flex sm:gap-14
                "
              >
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-primary">
                    100+
                  </p>
                  <p className="text-xs sm:text-sm text-white/60">
                    Luxury Weddings
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-primary">
                    10+
                  </p>
                  <p className="text-xs sm:text-sm text-white/60">
                    Years Experience
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-serif text-2xl sm:text-3xl text-primary">
                      5.0
                    </p>
                    <FiStar className="text-primary" size={18} />
                  </div>

                  <p className="text-xs sm:text-sm text-white/60">
                    Client Rating
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
