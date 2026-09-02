import Link from "next/link";

type Props = {
  params: {
    courseId: string;
    materialId: string;
  };
};

export default function CourseMaterial({ params }: Props) {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-md">
        <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 mb-4">
          Nested Dynamic Route: /courses/[courseId]/materials/[materialId]
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Melihat materi {params.materialId} untuk mata pelajaran {params.courseId}
        </h1>
        <p className="text-slate-600 mb-6">
          Halaman materi pembelajaran daring dengan struktur routing bersarang dan parameter dinamis ganda.
        </p>

        <div className="rounded-lg bg-slate-50 border p-5 mb-6 space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-600">Mata Pelajaran (courseId):</span>
            <span className="font-semibold text-indigo-700 capitalize">{params.courseId}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-600">Materi / Modul (materialId):</span>
            <span className="font-semibold text-purple-700 uppercase">{params.materialId}</span>
          </div>
          <div className="pt-2">
            <h3 className="font-semibold text-slate-800 mb-1">Rangkuman Pembelajaran:</h3>
            <p className="text-sm text-slate-600">
              Modul ini membahas materi konsep dasar, latihan soal interaktif, dan penugasan terstruktur untuk mata pelajaran {params.courseId}.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/courses/matematika/materials/bab1"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 transition text-sm"
          >
            Matematika - Bab 1
          </Link>
          <Link
            href="/courses/pemrograman-web/materials/modul-nextjs"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 transition text-sm"
          >
            Web - Modul Next.js
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
