import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function BookCard(props) {
  const navigation = useNavigation();

  const handleBookInfo = () => {
    navigation.navigate("livro", { id: props.id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={props.imagem} />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{props.titulo}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnSaibaMais} onPress={handleBookInfo}>
            <Text style={styles.btnText}>Saiba mais</Text>
            <Ionicons name="arrow-forward-outline" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
