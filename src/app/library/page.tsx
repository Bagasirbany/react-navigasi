import Link from "next/link";

export default function Library() {
  const genres = [
    { name: "Fiksi", count: "120 Buku", desc: "Novel, cerpen, komik, dan cerita fiksi ilmiah." },
    { name: "Sains", count: "85 Buku", desc: "Fisika, biologi, kimia, dan astronomi." },
    { name: "Sejarah", count: "64 Buku", desc: "Sejarah nasional, dunia, dan peradaban kuno." },
    { name: "Teknologi", count: "95 Buku", desc: "Pemrograman Web, Next.js, AI, dan Jaringan Komputer." },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-md">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
          Static Route: /library
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Perpustakaan Sekolah
        </h1>
        <p className="text-slate-600 mb-6">
          Daftar genre buku statis di perpustakaan sekolah:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className="border rounded-lg p-4 bg-slate-50 hover:border-blue-300 transition"
            >
              <h2 className="text-lg font-semibold text-slate-900 mb-1">{genre.name}</h2>
              <span className="inline-block rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-600 font-medium mb-2">
                {genre.count}
              </span>
              <p className="text-xs text-slate-600">{genre.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 transition"
        >
          &larr; Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
