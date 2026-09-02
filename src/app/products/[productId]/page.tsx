import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-md">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
          Dynamic Route: /products/[productId]
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Details about product {params.productId}
        </h1>
        <p className="text-slate-600 mb-6">
          Halaman ini menampilkan informasi detail untuk produk dengan ID:{" "}
          <strong className="text-slate-900">{params.productId}</strong>.
        </p>

        <div className="border-t pt-4 mb-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Ulasan Produk (Nested Dynamic Route):
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/products/${params.productId}/reviews/1`}
              className="rounded-md bg-indigo-50 border border-indigo-200 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition"
            >
              Lihat Ulasan #1
            </Link>
            <Link
              href={`/products/${params.productId}/reviews/2`}
              className="rounded-md bg-indigo-50 border border-indigo-200 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition"
            >
              Lihat Ulasan #2
            </Link>
            <Link
              href={`/products/${params.productId}/reviews/100`}
              className="rounded-md bg-indigo-50 border border-indigo-200 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition"
            >
              Lihat Ulasan #100
            </Link>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href="/products"
            className="inline-block rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-700 transition"
          >
            &larr; Daftar Produk
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
