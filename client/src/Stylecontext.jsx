import React, { createContext, useState, useEffect } from 'react';

export const StyleContext = createContext({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: '500',
  letterSpacing: '1px',
});

export const StyleContextProvider = ({ children }) => {

  return (
    <StyleContext.Provider value={{
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: '500',
      letterSpacing: '1px',
    }}>
      {children}
    </StyleContext.Provider>
  );
};
