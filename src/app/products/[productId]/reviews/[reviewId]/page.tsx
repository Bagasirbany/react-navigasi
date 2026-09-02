import Link from "next/link";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetails({ params }: Props) {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-md">
        <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 mb-4">
          Nested Dynamic Route: /products/[productId]/reviews/[reviewId]
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Review {params.reviewId} for product {params.productId}
        </h1>
        <p className="text-slate-600 mb-6">
          Halaman ini menggabungkan konsep <strong>Nested Routes</strong> dan{" "}
          <strong>Dynamic Routes</strong> untuk menampilkan ulasan #{params.reviewId} dari produk #{params.productId}.
        </p>

        <div className="rounded-lg bg-slate-50 border p-4 mb-6">
          <p className="italic text-slate-700">
            &ldquo;Produk ini sangat bagus, pengiriman cepat dan kualitas original sesuai deskripsi!&rdquo;
          </p>
          <span className="block mt-2 text-sm text-yellow-500 font-bold">
            Rating: ⭐⭐⭐⭐⭐ (5/5)
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/products/${params.productId}`}
            className="inline-block rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-700 transition"
          >
            &larr; Kembali ke Produk {params.productId}
          </Link>
          <Link
            href="/products"
            className="inline-block rounded-lg bg-slate-600 px-4 py-2 font-medium text-white hover:bg-slate-700 transition"
          >
            Daftar Produk
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
