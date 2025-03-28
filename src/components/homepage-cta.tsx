import Link from "next/link";

import { cn } from "~/utilities/ui";

import { FadeInSection } from "./motions/fade-in";
import { SectionSeparator } from "./section-separator";
import { buttonVariants } from "./ui/button";

export function HomepageCTA() {
  return (
    <SectionSeparator id="cta">
      <FadeInSection>
        <div className="my-8 flex flex-col gap-8">
          <h2 className="text-5xl font-mono font-light uppercase text-center">Ready to get started?</h2>
          <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "w-full py-12 text-2xl font-mono font-light uppercase")}>Let&apos;s Get to Work</Link>
          <p className="text-center">
            <a href="mailto:blakeha94@gmail.com" className="underline transition-colors hover:text-blue-400">
              Or feel free to just say hey
            </a>
          </p>
        </div>
      </FadeInSection>
    </SectionSeparator>
  );
}
