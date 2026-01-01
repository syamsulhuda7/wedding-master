import { NavLink } from "react-router";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function MobileMenu({ open, onClose }) {
  const linkClass = ({ isActive }) =>
    clsx(
      "text-2xl font-serif tracking-wide transition-colors",
      isActive ? "text-primary" : "text-white/80 hover:text-primary"
    );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed inset-0 z-[60]
            bg-dark
          "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="
              absolute right-5 top-5
              rounded-full p-2
              text-white/70
              transition
              hover:bg-white/5 hover:text-primary
            "
          >
            <FiX size={24} />
          </button>

          {/* Content */}
          <div
            className="
              flex h-full flex-col
              items-center justify-center
              gap-10
              px-6 text-center
            "
          >
            {/* Brand */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mb-6
                font-serif text-2xl
                tracking-wider text-white
              "
            >
              Wedding Master
            </motion.span>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <NavLink to="/" end onClick={onClose} className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={onClose} className={linkClass}>
                About
              </NavLink>
              <NavLink to="/services" onClick={onClose} className={linkClass}>
                Services
              </NavLink>
              <NavLink to="/portfolio" onClick={onClose} className={linkClass}>
                Portfolio
              </NavLink>
              <NavLink to="/contact" onClick={onClose} className={linkClass}>
                Contact
              </NavLink>
            </motion.nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-12"
            >
              <NavLink
                to="/contact"
                onClick={onClose}
                className="
                  inline-flex items-center justify-center
                  px-10 py-4
                  text-xs tracking-[0.25em] uppercase
                  text-primary
                  border border-primary/40
                  transition-all duration-300
                  hover:bg-primary hover:text-dark
                "
              >
                Konsultasi
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
