import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import { styles } from "./styles";

export default function Cadastro({ navigation }) {
  const [inputUsername, setInputUsername] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputSenha, setInputSenha] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [textError, setTextError] = useState('');
  const { armazenarDadosUsuario } = useContext(DataContext);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCadastro = () => {
    if(inputUsername == ''){
      setTextError('O nome de usuário não pode estar vazio')
    }
    else if(inputEmail == ''){
      setTextError('O email não deve estar vazio')
    }
    else if(inputSenha.length < 8){
      setTextError('A senha deve ter 8 ou mais caracteres')
    } else{
      saveUser();
    }
  };

  const saveUser = async () => {
    try {
      const signUpResponse = await AxiosInstance.post("/auth/signup", {
        username: inputUsername,
        email: inputEmail,
        password: inputSenha,
        role: ["user"],
      });
      if (signUpResponse.status === 200) {
        console.log(signUpResponse);
        try {
          const signInResponse = await AxiosInstance.post("/auth/signin", {
            username: inputUsername,
            password: inputSenha,
          });
          if (signInResponse.status === 200) {
            var jwtToken = signInResponse.data;
            armazenarDadosUsuario(jwtToken["accessToken"]);
            navigation.navigate("menu-principal");
          } else {
            console.log("! Erro ao realizar o login");
          }
        } catch (error) {
          console.log(error.response.data);
        }
      } else {

        console.log("! Erro ao realizar o cadastro");
      }
    } catch (error) {
      setTextError(error.response.data.message);
    }
  };

  return (
    <View style={styles.container}>
      {/*Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} size={50} color={"#ffffff"} />
        </TouchableOpacity>
      </View>
        <Image
          source={require("../Assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Faça parte do clube ! </Text>
      
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"person"} size={26} color={"#c1c2c2"} />
          <TextInput
            style={styles.textInput}
            onChangeText={setInputUsername}
            placeholder="Nome de usuário"
            keyboardType="default"
            value={inputUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"mail"} size={26} color={"#c1c2c2"} />
          <TextInput
            style={styles.textInput}
            onChangeText={setInputEmail}
            placeholder={"Email"}
            keyboardType="default"
            value={inputEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"lock-closed"} size={26} color={"#c1c2c2"} />
          <TextInput
            secureTextEntry={!showPassword}
            style={styles.textInput}
            onChangeText={setInputSenha}
            placeholder="Senha"
            keyboardType="default"
            value={inputSenha}
            returnKeyType="go"
          />
          <TouchableHighlight
            style={styles.passwordIcon}
            onPress={handleTogglePasswordVisibility}
            underlayColor="transparent"
          >
            <Ionicons
              style={styles.eyeStyle}
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={26}
            />
          </TouchableHighlight>
        
        </View>
        {
          textError != '' ? 
          <View style={styles.errorContainer}>
            <Text style={styles.textError}>{textError}</Text>
          </View>
          :
          ('')
        }
        

        {/* Btn Login*/}
        <TouchableHighlight
          style={styles.signupButton}
          onPress={handleCadastro}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.signupButton.text}>Realizar Cadastro</Text>
            <Ionicons name={"arrow-forward"} size={30} color={"#ffffff"} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
