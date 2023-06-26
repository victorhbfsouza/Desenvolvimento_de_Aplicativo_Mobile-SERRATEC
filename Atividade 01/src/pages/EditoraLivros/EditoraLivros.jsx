import { View, FlatList, StyleSheet, ScrollView} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import BookCard from "../../components/Cards/BookCard/BookCard";
import { useNavigation } from "@react-navigation/native";

export default function EditoraLivros({ route }) {
  const { dadosUsuario } = useContext(DataContext);
  const [editorasLivros, setEditorasLivros] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getEditorasLivros();
    navigation.setOptions({ title: route.params?.nome})
  }, []);

  const getEditorasLivros = async () => {
    await AxiosInstance.get(`/livros/por-editora/${route.params?.id}`, {
      headers: {
        Authorization: `Bearer ${dadosUsuario.token}`,
      },
    })
      .then((response) => {
        setEditorasLivros(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.containerEditora}>
    <FlatList
      data={editorasLivros}
      keyExtractor={(item) => item.id}
      numColumns={2} 
      renderItem={({ item }) => (
        <BookCard
          id={item.codigoLivro}
          titulo={item.nomeLivro}
          imagem={{ uri: "data:image/webp;base64," + item.imagem }}
        />
      )}
    />
  </View>
    
  );
}

const styles = StyleSheet.create({
  containerEditora: {
    flex: 1,
    marginTop: 20,
  }
});