import Link from 'next/link';

export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-8">
      <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl bg-white p-8 shadow-2xl">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
            intercepting (.) — modal
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Photo #{id}</h2>
        </div>
        <nav className="flex flex-wrap justify-center gap-3">
          <Link
            href="/gallery"
            className="rounded-lg bg-gray-100 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            ✕ Close
          </Link>
          <a
            href={`/gallery/photo/${id}`}
            className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Open Full Page
          </a>
        </nav>
      </div>
    </div>
  );
}
