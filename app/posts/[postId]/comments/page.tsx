import Link from 'next/link';

export default async function CommentsPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          dynamic route [postId]/comments
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Comments</h1>
        <p className="text-sm text-gray-500">for Post #{postId}</p>
      </div>
      <nav className="flex flex-wrap justify-center gap-3">
        <Link
          href={`/posts/${postId}`}
          className="rounded-lg bg-gray-100 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Back to Post
        </Link>
        <Link
          href="/posts"
          className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-600"
        >
          All Posts
        </Link>
      </nav>
    </main>
  );
}
