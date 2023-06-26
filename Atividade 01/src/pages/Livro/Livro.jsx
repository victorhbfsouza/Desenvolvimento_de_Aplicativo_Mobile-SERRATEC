import { Text, View, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import AxiosInstance from "../../api/AxiosInstance";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DataTable } from "react-native-paper";

export default function Livro({ route }) {
  const { dadosUsuario } = useContext(DataContext);
  const [livro, setLivro] = useState({});
  useEffect(() => {
    getLivro();
  }, []);

  const getLivro = async () => {
    await AxiosInstance.get(`/livros/${route.params?.id}`, {
      headers: {
        Authorization: `Bearer ${dadosUsuario.token}`,
      },
    })
      .then((response) => {
        setLivro(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "data:image/webp;base64," + livro.imagem }}
        />
        <View style={styles.rightMenu}>
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{livro.nomeLivro}</Text>
            <Text style={styles.bookAuthor}>{livro.autorDTO?.nomeAutor}</Text>
            <Text style={styles.bookPublisher}>
              {livro.editoraDTO?.nomeEditora}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.bookCurrency}>R$</Text>
            <Text style={styles.bookPrice}>99,99</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.addCartBtn}>
              <Ionicons name="cart-outline" size={22} color={"white"} />
              <Text style={styles.btnText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.descriptionText}>
          Copo furadis é disculpa de bebadis, arcu quam euismod magna.Todo mundo
          vê os porris que eu tomo, mas ninguém vê os tombis que eu
          levo!Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
          Nam vulputate dapibus.Quem num gosta di mé, boa gentis num é.
        </Text>
      </View>
    </View>
  );
}
