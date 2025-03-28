"use client";

import { useTypewriter } from "~/hooks/use-typewriter";

interface Props {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
}
export function getLongestWord(words: string[]): string {
  return words.reduce((longest, word) => (word.length > longest.length ? word : longest), "");
}

export function Typewriter({ words, speed = 250, delay = 1000, className }: Props) {
  const displayText = useTypewriter(words, speed, delay);

  const fixedWidth = `${getLongestWord(words).length + 1}ch`;

  return (
    <span className={className} style={{ width: fixedWidth, display: "inline-block" }}>
      {displayText}
      <Cursor />
    </span>
  );
}

export function Cursor() {
  return <span className="cursor">|</span>;
}
