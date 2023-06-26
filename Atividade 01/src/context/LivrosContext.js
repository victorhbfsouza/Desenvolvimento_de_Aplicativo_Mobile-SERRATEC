import React, { createContext, useState } from 'react';

export const LivrosContext = createContext({});

export const LivrosProvider = ({ children }) => {
  const [livros, setLivros] = useState('');

  const saveLivros = (livros) => {
    setLivros(livros)
  }

  return (
    <LivrosContext.Provider value={{
      livros,
      saveLivros
    }}>
      {children}
    </LivrosContext.Provider>
  );
};
