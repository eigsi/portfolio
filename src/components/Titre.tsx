import React from 'react';
import Typewriter, { Options } from 'typewriter-effect';

const Titre: React.FC = () => {
  const extendedOptions: Options & { pauseFor?: number } = {
    strings: ['Welcome.', 'Scroll Down'],
    autoStart: true,
    loop: true,
    delay: 50,
    deleteSpeed: 50,
    pauseFor: 3000, 
  };

  return (
    <Typewriter
      options={extendedOptions}
    />
  );
};
  
  export default Titre;