// import PageTemplate, { generateMetadata } from "./[slug]/page";

import { HomepageHero } from "~/components/heros/homepage-hero";
import ProjectShowcase from "~/components/project-showcase";

export const revalidate = 0;

export default function Homepage() {
  return (
    <main className="flex min-h-dvh flex-col pt-14">
      {/* Styled gutters */}
      <div className="grid flex-1 grid-rows-[1fr_auto] overflow-clip grid-cols-[1fr_var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)_1fr] [--gutter-width:--spacing(6)] lg:[--gutter-width:--spacing(10)]">
        <div className="col-start-2 row-span-full row-start-1 max-sm:hidden text-foreground/5 border-x border-x-current bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]"></div>
        <div className="col-start-4 row-span-full row-start-1 max-sm:hidden text-foreground/5 border-x border-x-current bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]"></div>

        {/*  Main Content */}
        <div className="px-6 col-start-3 row-start-1 max-sm:col-span-full max-sm:col-start-1">
          <HomepageHero />
          <ProjectShowcase />
        </div>
      </div>
    </main>
  );
};

// export { generateMetadata };
