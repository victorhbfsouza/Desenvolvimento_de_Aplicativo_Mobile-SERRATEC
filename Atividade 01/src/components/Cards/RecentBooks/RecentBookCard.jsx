import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function RecentBookCard(props) {
  const navigation = useNavigation();
  const handleBookInfo = () => {
    navigation.navigate("livro", { id: props.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleBookInfo}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={props.imagem} />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{props.titulo}</Text>
        <Text style={styles.autor}>{props.autor}</Text>
      </View>
    </TouchableOpacity>
  );
}
