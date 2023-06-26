import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

// Contexto
export const DataContext = createContext({});

// Provedor
export const DataProvider = ({ children }) => {
  const [dadosUsuario, setDadosUsuario] = useState('');

  // Quando chamar o método a função receberá o jwt que virá do BackEnd
  const armazenarDadosUsuario = (jwt) => {
    console.log("jwt param: " + jwt);
    var jwtDecodificado = jwt_decode(jwt);
    console.log("jwt decodificado:")
    console.log(jwtDecodificado);

    //.user = chave do json retornado pelo backend que contém os dados do usuário logado
    // Neste momento o usuário possui uma string JSON
    var usuario = jwtDecodificado.user;

    // Agora transformamos a string em um OBJETO JAVASCRIPT.
    usuario = JSON.parse(usuario);
    // Dessa forma podemos acessar:
    // usuario.id // usuario.username // usuario.email...
    setDadosUsuario({
      id: usuario?.id,
      nome: usuario?.username,
      email: usuario?.email,
      token: jwt
    });

  };

  return (
    <DataContext.Provider value={{
      dadosUsuario,
      setDadosUsuario,
      armazenarDadosUsuario
    }}>
      {children}
    </DataContext.Provider>
  );
};
