export default function MembersSlot() {
  return (
    <aside className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
        @members slot
      </h2>
      <ul className="flex flex-col gap-2">
        {['Alice', 'Bob', 'Charlie'].map((name) => (
          <li key={name} className="rounded-md bg-gray-50 px-4 py-2 text-gray-700">
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
