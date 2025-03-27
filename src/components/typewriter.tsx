"use client";

import { useTypewriter } from "~/hooks/use-typewriter";

interface Props {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({ words, speed = 250, delay = 1000 }: Props) {
  const displayText = useTypewriter(words, speed, delay);

  return (
    <span>
      {displayText}
      <Cursor />
    </span>
  );
}

export function Cursor() {
  return <span className="cursor">|</span>;
}
