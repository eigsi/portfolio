import React from 'react';
import Typewriter, { Options } from 'typewriter-effect';

const Titre: React.FC = () => {
  const extendedOptions: Options & { pauseFor?: number } = {
    strings: ['Welcome.', 'Scroll Down'],
    autoStart: true,
    loop: true,
    delay: 90,
    deleteSpeed: 70,
    pauseFor: 4000, // Pause après avoir écrit
  };

  return (
    <Typewriter
      options={extendedOptions}
    />
  );
};
  
  export default Titre;