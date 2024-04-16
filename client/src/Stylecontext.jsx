import React, { createContext } from 'react';


const StyleContext = createContext({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: '500',
  LetterSpacing: '1px',
});

export default StyleContext;
