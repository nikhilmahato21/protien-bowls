interface TagProps {
  children: string;
  accent: string;
}

export function Tag({ children, accent }: TagProps) {
  return (
    <span
      className="tag"
      style={{
        backgroundColor: `${accent}22`,
        borderColor: `${accent}55`,
        color: accent,
      }}
    >
      {children}
    </span>
  );
}
