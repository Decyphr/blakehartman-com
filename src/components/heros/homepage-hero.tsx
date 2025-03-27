import { ArrowRightIcon, CodeXmlIcon } from "lucide-react";

import { Typewriter } from "~/components/typewriter";
import { Button } from "~/components/ui/button";

export function HomepageHero() {
  return (
    <div className="space-y-8 py-2 max-w-4xl line-y mt-12 sm:mt-20 sm:py-8 lg:mt-24">
      <div className="max-lg:line-b">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-wide text-pretty uppercase text-muted-foreground md:ml-2">
          Hey, I&apos;m Blake. Let's make something awesome.
        </p>
        <h1 className="mt-2 text-4xl tracking-tighter sm:text-7xl md:text-8xl text-pretty">
          Building
          {" "}
          <Typewriter words={["Websites", "Apps", "Software"]} speed={200} delay={1000} className="typewriter" />
          <br />
          to grow your business.
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Button size="wide" className="flex justify-between">
          Get in Touch
          <ArrowRightIcon className="size-4" />
        </Button>
        <Button variant="outline" size="wide" className="flex justify-between">
          Code Review
          <CodeXmlIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
