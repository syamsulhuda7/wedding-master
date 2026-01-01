import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappButton";
import ScrollToTop from "../utils/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />

      {/* Floating CTA */}
      <WhatsAppButton />
    </div>
  );
}
