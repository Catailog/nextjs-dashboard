import Link from 'next/link';

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          dynamic route [id]
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Photo #{id}</h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-3">
        <Link
          href="/gallery"
          className="rounded-lg bg-gray-100 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Back to Gallery
        </Link>
      </nav>
    </main>
  );
}
