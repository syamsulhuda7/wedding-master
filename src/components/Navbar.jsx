import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { motion, useScroll } from "framer-motion";
import clsx from "clsx";

import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const linkClass = ({ isActive }) =>
    clsx(
      "text-sm tracking-wide transition-colors duration-300",
      isActive
        ? "text-primary font-semibold"
        : "text-white/70 hover:text-primary"
    );

  return (
    <>
      {/* ================= Navbar ================= */}
      <header
        className="
          fixed top-0 z-50 w-full
          bg-dark/80 backdrop-blur-md
          border-b border-white/10
        "
      >
        <div
          className="
    container flex items-center justify-between
    h-16 md:h-20
    px-4 sm:px-6 lg:px-0
  "
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="
              font-serif text-lg md:text-xl font-semibold
              text-white transition-colors
              hover:text-primary
            "
          >
            Wedding <span className="text-primary">Master</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 md:flex">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            <NavLink
              to="/contact"
              className="
                rounded-full border border-primary/50
                px-6 py-3 text-sm tracking-wide text-primary
                transition hover:bg-primary hover:text-dark
              "
            >
              Konsultasi
            </NavLink>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="
              md:hidden
              rounded-full p-2
              text-white/80 transition
              hover:bg-white/10 hover:text-primary
            "
            aria-label="Open Menu"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* ================= Progress Bar ================= */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-[2px] origin-left bg-primary"
        />
      </header>

      {/* ================= Mobile Menu ================= */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
