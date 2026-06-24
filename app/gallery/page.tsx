import Link from 'next/link';

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          intercepting route (.) host
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-3">
        <Link
          href="/gallery/photo/1"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Photo 1
        </Link>
        <Link
          href="/gallery/photo/2"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Photo 2
        </Link>
        <Link
          href="/gallery/photo/3"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Photo 3
        </Link>
      </nav>
    </main>
  );
}
