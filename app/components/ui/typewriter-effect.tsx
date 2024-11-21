"use client";
import { useState, useEffect } from "react";

export const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const messages = ["Frontend Developer", "UI/UX Designer"];
  const period = 2000;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % messages.length;
    let fullText = messages[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    } else {
      setDelta(100);
    }
  };

  return (
    <span className="text-gray-300">
      {text}
      <span className="inline-block w-[2px] h-4 ml-1 bg-white animate-blink" />
    </span>
  );
};