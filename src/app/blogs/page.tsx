import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog</h1>
        <p className="text-slate-600 mb-6">
          Daftar artikel blog (Nested & Dynamic Routing di Next.js):
        </p>

        <div className="space-y-4 mb-8">
          <div className="border rounded-lg p-4 bg-slate-50">
            <h2 className="text-xl font-semibold text-blue-600 mb-1">
              <Link href="/blogs/first" className="hover:underline">
                1. First Blog (Statis / Nested)
              </Link>
            </h2>
            <p className="text-sm text-slate-500">Path: /blogs/first</p>
          </div>

          <div className="border rounded-lg p-4 bg-slate-50">
            <h2 className="text-xl font-semibold text-blue-600 mb-1">
              <Link href="/blogs/second" className="hover:underline">
                2. Second Blog (Statis / Nested)
              </Link>
            </h2>
            <p className="text-sm text-slate-500">Path: /blogs/second</p>
          </div>

          <div className="border rounded-lg p-4 bg-slate-50">
            <h2 className="text-xl font-semibold text-emerald-600 mb-1">
              <Link href="/blogs/100" className="hover:underline">
                3. Blog Dinamis ID 100 (Dynamic Route)
              </Link>
            </h2>
            <p className="text-sm text-slate-500">Path: /blogs/100</p>
          </div>

          <div className="border rounded-lg p-4 bg-slate-50">
            <h2 className="text-xl font-semibold text-emerald-600 mb-1">
              <Link href="/blogs/nextjs-tips" className="hover:underline">
                4. Blog Dinamis Slug &quot;nextjs-tips&quot; (Dynamic Route)
              </Link>
            </h2>
            <p className="text-sm text-slate-500">Path: /blogs/nextjs-tips</p>
          </div>
        </div>

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
