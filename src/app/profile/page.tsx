import Link from "next/link";

export default function Profile() {
  const biodata = [
    { label: "Nama Lengkap", value: "M. Bagas Irbany S" },
    { label: "Kelas", value: "XI RPL A" },
    { label: "Topik Pembelajaran", value: "Routing dan Navigasi pada Next.js (App Router)" },
    { label: "Sekolah", value: "SMK" },
    { label: "Tanggal Praktikum", value: "31 Agustus 2026" },
    { label: "Hobi", value: "Coding, Membaca, dan Olahraga" },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-slate-900 border-b pb-4">
          Biodata Siswa (Profile)
        </h1>

        <div className="space-y-4">
          {biodata.map((item) => (
            <div key={item.label} className="flex border-b border-slate-200 pb-3">
              <span className="w-48 font-semibold text-slate-600">{item.label}</span>
              <span className="flex-1">: {item.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition"
          >
            &larr; Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}