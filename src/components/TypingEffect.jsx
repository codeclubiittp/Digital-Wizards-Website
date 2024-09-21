import React, { useEffect, useState } from 'react';

const TypingEffect = ({ words, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let wordIndex = index % words.length; // Cycle through the words
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (charIndex < words[wordIndex].length) {
          setDisplayedText(words[wordIndex].slice(0, charIndex + 1)); // Type one character
          charIndex++;
        } else {
          setIsTyping(false); // Stop typing
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true); // Start deleting
            charIndex = words[wordIndex].length; // Set to full word length
          }, 1500); // Delay before starting to delete
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(words[wordIndex].slice(0, charIndex - 1)); // Remove one character
          charIndex--;
        } else {
          setIndex((prevIndex) => prevIndex + 1); // Move to the next word
          setIsTyping(true); // Start typing the next word
          clearInterval(typingInterval);
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [words, speed, index, isTyping]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
