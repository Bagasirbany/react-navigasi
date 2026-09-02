import Link from "next/link";

type Props = {
  params: {
    teacherId: string;
  };
};

export default function TeacherProfile({ params }: Props) {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-md">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">
          Dynamic Route: /teachers/[teacherId]
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Melihat Profil Akademik untuk Guru: {params.teacherId}
        </h1>
        <p className="text-slate-600 mb-6">
          Halaman profil akademik pendidik dengan identifier:{" "}
          <strong className="text-slate-900">{params.teacherId}</strong>.
        </p>

        <div className="rounded-lg bg-slate-50 border p-4 mb-6 space-y-2">
          <div className="flex justify-between border-b pb-2 text-sm">
            <span className="text-slate-500">ID / Username Guru:</span>
            <span className="font-semibold text-slate-800">{params.teacherId}</span>
          </div>
          <div className="flex justify-between border-b pb-2 text-sm">
            <span className="text-slate-500">Status Kepegawaian:</span>
            <span className="font-semibold text-emerald-600">Aktif Mengajar</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Unit Sekolah:</span>
            <span className="font-semibold text-slate-800">SMK RPL</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/teachers/budi"
            className="inline-block rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 transition text-sm"
          >
            Profil Pak Budi
          </Link>
          <Link
            href="/teachers/ani"
            className="inline-block rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 transition text-sm"
          >
            Profil Bu Ani
          </Link>
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition text-sm"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
