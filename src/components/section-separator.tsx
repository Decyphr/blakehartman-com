import { cn } from "~/utilities/ui";

interface Props {
  id: string;
  children: React.ReactNode;
  sectionClassName?: string;
  wrapperClassName?: string;
}

export function SectionSeparator({
  id,
  children,
  sectionClassName,
  wrapperClassName,
}: Props) {
  return (
    <section id={id} className={cn("pt-24 md:pt-40", sectionClassName)}>
      <div className={cn("p-6 line-y", wrapperClassName)}>
        {children}
      </div>
    </section>
  );
}
