import Link from "next/link";

type Props = {
  params: {
    blogId: string;
  };
};

export default function BlogDetails({ params }: Props) {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-md">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">
          Dynamic Route: /blogs/[blogId]
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Detail Blog: {params.blogId}
        </h1>
        <p className="text-slate-600 mb-6">
          Anda sedang membaca artikel dengan identifier / parameter dinamis:{" "}
          <strong className="text-slate-900">{params.blogId}</strong>.
        </p>

        <div className="flex gap-4">
          <Link
            href="/blogs"
            className="inline-block rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-700 transition"
          >
            &larr; Kembali ke Blog
          </Link>
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition"
          >
            Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
