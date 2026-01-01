import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">Halaman tidak ditemukan</p>
      <Link to="/" className="mt-6 rounded bg-black px-6 py-3 text-white">
        Kembali ke Home
      </Link>
    </div>
  );
}
