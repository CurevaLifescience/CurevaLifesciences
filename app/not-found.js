import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16 text-center">
      <h1 className="text-6xl font-extrabold text-[var(--primary-orange)] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[var(--primary-orange)] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
