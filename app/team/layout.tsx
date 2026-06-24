export default function TeamLayout({
  children,
  members,
  projects,
}: {
  children: React.ReactNode;
  members: React.ReactNode;
  projects: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <aside>{members}</aside>
      <section>{projects}</section>
    </div>
  );
}
