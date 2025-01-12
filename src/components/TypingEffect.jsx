import { TypeAnimation } from 'react-type-animation';
import React, { useState } from 'react';

 
const TypingEffect = ({words, speed}) => {
  return (
    <TypeAnimation
      sequence={[
        `${words[0]}`, // Types 'One'
        speed, // Waits 1s
        `${words[1]}`, // Deletes 'One' and types 'Two'
        speed, // Waits 2s
        `${words[2]}`, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block', color: '#20C20E' }}
    />
  );
};

export default TypingEffect;