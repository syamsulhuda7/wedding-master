import { NavLink } from "react-router";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0c] text-white overflow-hidden">
      {/* Decorative Glows */}
      {/* <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" /> */}

      <div className="container px-6 sm:px-10 lg:px-12 py-20 relative z-10">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif tracking-wide text-white">
              Wedding <span className="text-primary">Master</span>
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Wedding Organizer profesional yang menghadirkan pengalaman
              pernikahan elegan, berkelas, dan tak terlupakan.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="mb-5 font-semibold tracking-wide text-white/80">
              Menu
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Portfolio"].map((menu) => (
                <li key={menu}>
                  <NavLink
                    to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                    className="transition hover:text-primary"
                  >
                    {menu}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-5 font-semibold tracking-wide text-white/80">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>📞 +62 812-3456-7890</li>
              <li>✉️ hello@wobrand.com</li>
              <li>📍 Jakarta, Indonesia</li>
            </ul>

            <div className="mt-6 flex gap-5">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-transform transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>

              <a
                href="#"
                className="text-white/70 hover:text-primary transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 px-6 sm:px-10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Wedding Master. All rights reserved.
      </div>
    </footer>
  );
}
