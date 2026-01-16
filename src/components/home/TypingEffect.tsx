import { useState, useEffect } from "react";

const phrases = [
  "AI-Powered Systems",
  "Mobile Applications",
  "Blockchain Solutions",
  "Game Development",
  "Full-Stack Architecture",
];

export function TypingEffect() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentChar < phrase.length) {
          setText(phrase.substring(0, currentChar + 1));
          setCurrentChar(currentChar + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentChar > 0) {
          setText(phrase.substring(0, currentChar - 1));
          setCurrentChar(currentChar - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhrase((currentPhrase + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentPhrase]);

  return (
    <span className="gradient-text">
      {text}
      <span className="typing-cursor text-primary">|</span>
    </span>
  );
}
