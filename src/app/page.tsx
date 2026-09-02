import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-8 text-slate-800">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header Praktikum */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 p-8 text-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-blue-500/30 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100 mb-2">
                LKPD Next.js (App Router)
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Welcome to Home
              </h1>
              <p className="mt-1 text-xl font-medium text-blue-200">
                Selamat datang di Portal Sekolah
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/20 text-sm">
              <p><span className="text-blue-200">Nama Siswa:</span> <strong>M. Bagas Irbany S</strong></p>
              <p><span className="text-blue-200">Kelas:</span> <strong>XI RPL A</strong></p>
              <p><span className="text-blue-200">Tanggal:</span> <strong>31 Agustus 2026</strong></p>
            </div>
          </div>
        </div>

        {/* Section 1: Navigasi Praktikum 1 - 4 */}
        <div className="rounded-xl bg-white p-6 shadow-md border border-slate-200">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700 text-sm font-bold">
                1-4
              </span>
              Daftar Rute Praktikum (Routing Sederhana, Nested, Dynamic & Link)
            </h2>
            <p className="text-sm text-slate-500">
              Navigasi halaman yang diimplementasikan sesuai modul praktikum LKPD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Praktikum 1: Sederhana */}
            <div className="rounded-lg border p-4 bg-slate-50 hover:bg-slate-100/80 transition">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                Praktikum 1: Routing Sederhana
              </span>
              <h3 className="text-lg font-semibold text-slate-800 mt-1 mb-2">
                Profile & About
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/profile"
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition"
                >
                  /profile (Biodata)
                </Link>
                <Link
                  href="/about"
                  className="rounded-md bg-slate-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition"
                >
                  /about
                </Link>
              </div>
            </div>

            {/* Praktikum 2 & 3: Blogs */}
            <div className="rounded-lg border p-4 bg-slate-50 hover:bg-slate-100/80 transition">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                Praktikum 2 & 3: Nested & Dynamic Blog
              </span>
              <h3 className="text-lg font-semibold text-slate-800 mt-1 mb-2">
                Modul Artikel Blog
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blogs"
                  className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 transition"
                >
                  /blogs
                </Link>
                <Link
                  href="/blogs/first"
                  className="rounded-md bg-slate-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition"
                >
                  /blogs/first
                </Link>
                <Link
                  href="/blogs/second"
                  className="rounded-md bg-slate-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition"
                >
                  /blogs/second
                </Link>
                <Link
                  href="/blogs/100"
                  className="rounded-md bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800 transition"
                >
                  /blogs/[blogId] (ID: 100)
                </Link>
              </div>
            </div>

            {/* Praktikum 3: Products */}
            <div className="rounded-lg border p-4 bg-slate-50 hover:bg-slate-100/80 transition md:col-span-2">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">
                Praktikum 3: Dynamic & Nested Dynamic Products
              </span>
              <h3 className="text-lg font-semibold text-slate-800 mt-1 mb-2">
                Modul Produk & Ulasan
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/products"
                  className="rounded-md bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-700 transition"
                >
                  /products (Katalog)
                </Link>
                <Link
                  href="/products/1"
                  className="rounded-md bg-purple-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-800 transition"
                >
                  /products/1
                </Link>
                <Link
                  href="/products/2"
                  className="rounded-md bg-purple-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-800 transition"
                >
                  /products/2
                </Link>
                <Link
                  href="/products/1/reviews/5"
                  className="rounded-md bg-indigo-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-800 transition"
                >
                  /products/1/reviews/5 (Nested Dynamic)
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Studi Kasus Portal Sekolah (Tugas Tambahan) */}
        <div className="rounded-xl bg-white p-6 shadow-md border border-slate-200">
          <div className="border-b pb-3 mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-700 text-sm font-bold">
                  ★
                </span>
                Tugas Tambahan: Studi Kasus Portal Sekolah
              </h2>
              <p className="text-sm text-slate-500">
                Implementasi kerangka &ldquo;Sistem Portal Sekolah&rdquo; sesuai spesifikasi D.1 - D.4
              </p>
            </div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
              Nilai Tambah
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* D.2 Static Route Library */}
            <div className="rounded-lg border p-4 bg-slate-50 hover:bg-amber-50/50 transition">
              <span className="text-xs font-bold text-amber-700 uppercase">
                D.2 Static Route
              </span>
              <h3 className="font-semibold text-slate-900 mt-1">Perpustakaan</h3>
              <p className="text-xs text-slate-600 mt-1 mb-3">
                Daftar genre buku statis (Fiksi, Sains, Sejarah).
              </p>
              <Link
                href="/library"
                className="inline-block rounded-md bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700 transition"
              >
                Kunjungi /library &rarr;
              </Link>
            </div>

            {/* D.3 Dynamic Route Teachers */}
            <div className="rounded-lg border p-4 bg-slate-50 hover:bg-emerald-50/50 transition">
              <span className="text-xs font-bold text-emerald-700 uppercase">
                D.3 Dynamic Route
              </span>
              <h3 className="font-semibold text-slate-900 mt-1">Daftar Guru</h3>
              <p className="text-xs text-slate-600 mt-1 mb-3">
                Profil guru via parameter <code>/teachers/[teacherId]</code>.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Link
                  href="/teachers/budi"
                  className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-emerald-700 transition"
                >
                  Guru: budi
                </Link>
                <Link
                  href="/teachers/ani"
                  className="rounded-md bg-emerald-700 px-2.5 py-1 text-xs font-semibold text-white hover:bg-emerald-800 transition"
                >
                  Guru: ani
                </Link>
              </div>
            </div>

            {/* D.4 Nested Dynamic Route Course Materials */}
            <div className="rounded-lg border p-4 bg-slate-50 hover:bg-purple-50/50 transition">
              <span className="text-xs font-bold text-purple-700 uppercase">
                D.4 Nested Dynamic
              </span>
              <h3 className="font-semibold text-slate-900 mt-1">Materi Pelajaran</h3>
              <p className="text-xs text-slate-600 mt-1 mb-3">
                Rute <code>/courses/[courseId]/materials/[materialId]</code>.
              </p>
              <Link
                href="/courses/matematika/materials/bab1"
                className="inline-block rounded-md bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-700 transition"
              >
                Matematika Bab 1 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
