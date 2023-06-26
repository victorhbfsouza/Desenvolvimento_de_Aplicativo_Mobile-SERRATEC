import { FlatList } from "react-native";
import React, {useEffect, useContext, useState} from "react";
import RecentBookCard from "../Cards/RecentBooks/RecentBookCard";
import { LivrosContext } from "../../context/LivrosContext";

export default function LivrosRecentes() {
  const {livros} = useContext(LivrosContext);

  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={livros}
    renderItem={({item}) => <RecentBookCard id={item.codigoLivro} titulo={item.nomeLivro} autor={item.autorDTO.nomeAutor} imagem={{ uri: "data:image/webp;base64," + item.imagem }}/>}
    keyExtractor={item => item.codigoLivro}
    />

  );
}
