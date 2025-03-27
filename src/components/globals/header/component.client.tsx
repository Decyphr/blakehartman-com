"use client";
import Link from "next/link";
import * as React from "react";

import type { Header as HeaderType } from "~/cms/payload-types";

import { Logo } from "~/components/logo";

import { HeaderNav } from "./nav";

interface HeaderClientProps {
  data: HeaderType;
}

export function HeaderClient({ data }: HeaderClientProps) {
  /* Storing the value in a useState to avoid hydration errors */
  // const [theme, setTheme] = React.useState<string | null>(null);
  // const { headerTheme, setHeaderTheme } = useHeaderTheme();
  // const pathname = usePathname();

  // React.useEffect(() => {
  //   setHeaderTheme(null);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname]);

  // React.useEffect(() => {
  //   if (headerTheme && headerTheme !== theme)
  //     setTheme(headerTheme);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [headerTheme]);

  return (
    <header
      className="line-b fixed inset-x-0 top-0 z-20 flex h-14 items-center justify-between bg-white px-4 after:-bottom-px sm:px-6"
    >
      <Link href="/" className="shrink-0">
        <Logo />
      </Link>
      <HeaderNav data={data} />
    </header>
  );
};
