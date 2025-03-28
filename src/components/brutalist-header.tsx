interface Props {
  title: string;
  subtitle: string;
}

export function BrutalistHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 border-b-2 border-primary">
      <h2 className="font-mono text-5xl md:text-7xl font-medium uppercase tracking-tight mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground font-mono">
        /*
        {" "}
        {subtitle}
        {" "}
        */
      </p>
    </div>
  );
}
