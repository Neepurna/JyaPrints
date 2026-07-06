export function Badge({ children, small = false }: { children: React.ReactNode; small?: boolean }) {
  return <span className={`poster-badge${small ? " poster-badge--small" : ""}`}>{children}</span>;
}
