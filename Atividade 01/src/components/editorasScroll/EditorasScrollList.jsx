import { FlatList, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import EditoraCard from "../Cards/EditorasCard/EditoraCard";
import { DataContext } from "../../context/DataContext";
import { EditorasContext } from "../../context/EditorasContext";

export default function EditorasScrollList() {
  const { dadosUsuario } = useContext(DataContext);
  const { editoras } = useContext(EditorasContext);

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={editoras}
        renderItem={({ item }) => (
          <EditoraCard
            id={item.codigoEditora}
            nome={item.nomeEditora}
            imagem={{ uri: "data:image/webp;base64," + item.imagem }}
          />
        )}
        keyExtractor={(item) => item.codigoEditora}
      />
    </SafeAreaView>
  );
}
