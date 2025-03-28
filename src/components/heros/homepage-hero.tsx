import { ArrowRightIcon, CodeXmlIcon } from "lucide-react";

import { Typewriter } from "~/components/typewriter";
import { Button } from "~/components/ui/button";

import { SectionSeparator } from "../section-separator";

export function HomepageHero() {
  return (
    <SectionSeparator id="home" sectionClassName="pt-12 md:pt-40">
      <div className="max-lg:line-b">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-wide text-pretty uppercase text-muted-foreground md:ml-2">
          Hey, I&apos;m Blake. Let's make something awesome.
        </p>
        <h1 className="mt-2 text-6xl tracking-tighter sm:text-7xl md:text-9xl text-pretty">
          Building
          {" "}
          <Typewriter words={["Websites", "Apps", "Software"]} speed={200} delay={1000} className="typewriter" />
          <br />
          to grow your
          <br />
          business.
        </h1>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Button size="wide" className="flex justify-between">
          Get in Touch
          <ArrowRightIcon className="size-4" />
        </Button>
        <Button variant="outline" size="wide" className="flex justify-between">
          Code Review
          <CodeXmlIcon className="size-4" />
        </Button>
      </div>
    </SectionSeparator>
  );
}
