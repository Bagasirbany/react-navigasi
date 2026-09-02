import Link from "next/link";

export default function ProductList() {
  const products = [
    { id: "1", name: "Laptop ASUS Vivobook", price: "Rp 9.500.000" },
    { id: "2", name: "Keyboard Mechanical RGB", price: "Rp 650.000" },
    { id: "3", name: "Mouse Wireless Gaming", price: "Rp 350.000" },
    { id: "4", name: "Monitor 24 Inch Full HD", price: "Rp 1.750.000" },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Product List</h1>
        <p className="text-slate-600 mb-6">
          Daftar produk yang tersedia (Klik produk untuk melihat detail dinamis):
        </p>

        <div className="space-y-3 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border rounded-lg p-4 bg-slate-50 hover:bg-slate-100 transition"
            >
              <div>
                <h2 className="text-lg font-semibold text-blue-600">
                  <Link href={`/products/${product.id}`} className="hover:underline">
                    Product {product.id} : {product.name}
                  </Link>
                </h2>
                <p className="text-sm text-slate-500">{product.price}</p>
              </div>
              <Link
                href={`/products/${product.id}`}
                className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Lihat Detail &rarr;
              </Link>
            </div>
          ))}
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
