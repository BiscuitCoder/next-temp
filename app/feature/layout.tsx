export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
}
