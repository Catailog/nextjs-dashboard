import Link from "next/link";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug: slugArr } = await params;
  const slug = slugArr ?? [];
  const current = slug.length > 0 ? slug.join(" / ") : "Home";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          optional catch-all [[...slug]]
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Docs: {current}</h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-3">
        <Link
          href="/docs"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Docs Home
        </Link>
        <Link
          href="/docs/getting-started"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Getting Started
        </Link>
        <Link
          href="/docs/api/reference"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          API Reference
        </Link>
        <Link
          href="/docs/guide/intro/overview"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Deep Page
        </Link>
      </nav>
    </main>
  );
}
