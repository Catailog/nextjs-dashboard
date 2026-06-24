import Link from 'next/link';

export default function AnywherePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          intercepting route (...) target — full page
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Anywhere</h1>
      </div>
      <p className="text-center text-gray-500">
        URL 직접 입력 또는 새로고침 시 전체 페이지로 표시됩니다.
      </p>
      <nav className="flex flex-wrap justify-center gap-3">
        <Link
          href="/anywhere/deep/level"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Go Deep
        </Link>
      </nav>
    </main>
  );
}
