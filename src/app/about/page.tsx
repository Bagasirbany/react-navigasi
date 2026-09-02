import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome to About</h1>
        <p className="text-slate-600 mb-6">
          Ini adalah halaman About yang dibuat pada modul Praktikum 1 Next.js App Router.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition"
        >
          &larr; Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}