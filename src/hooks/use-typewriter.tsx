import * as React from "react";

export function useTypewriter(words: string[], speed: number = 250, delay: number = 1200) {
  const [displayText, setDisplayText] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [currentWord, setCurrentWord] = React.useState(words[wordIndex]);
  const [isDeleting, setIsDeleting] = React.useState(false);

  function type() {
    // This function simply handles typing our the current word
    // and then deleting it once it's been fully typed out
    //

    if (!!isDeleting && displayText.length === 0) {
      // If the current word has been fully deleted, move on to the next word
      let nextWordIndex = wordIndex + 1;

      if (nextWordIndex >= words.length) {
        // restart the typing process
        nextWordIndex = 0;
      }

      setTimeout(() => {
        setIsDeleting(false);
        setWordIndex(nextWordIndex);
        setCurrentWord(words[nextWordIndex]);
      }, delay / 2);
      return;
    }

    if (!isDeleting && displayText === currentWord) {
      // If the current word has been fully typed out, start deleting

      // Wait for the delay before deleting
      setTimeout(() => {
        setIsDeleting(true);
      }, delay);
      return;
    }

    if (!!isDeleting && displayText.length > 0) {
      // If the current word hasn't been fully deleted, keep deleting
      setDisplayText(prevText => currentWord.substring(0, prevText.length - 1));
      return;
    }

    // If the current word hasn't been fully typed out, keep typing
    if (!isDeleting && displayText.length < currentWord.length) {
      setDisplayText(prevText => currentWord.substring(0, prevText.length + 1));
    }
  }

  React.useEffect(() => {
    const typingInterval: NodeJS.Timeout = setInterval(type, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [displayText, isDeleting]); // eslint-disable-line react-hooks/exhaustive-deps

  return displayText;
}
