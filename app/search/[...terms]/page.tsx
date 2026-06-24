import Link from "next/link";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ terms: string[] }>;
}) {
  const { terms } = await params;
  const query = terms.join(" / ");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          required catch-all [...terms]
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Search: {query}</h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-3">
        <Link
          href="/search/react"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Search: react
        </Link>
        <Link
          href="/search/next/routing"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Search: next / routing
        </Link>
        <Link
          href="/"
          className="rounded-lg bg-gray-100 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Home
        </Link>
      </nav>
    </main>
  );
}
