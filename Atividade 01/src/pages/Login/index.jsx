import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import React, { useState, useContext } from "react";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Login({ navigation }) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [badCredentials, setBadCredentials] = useState(false);
  const { armazenarDadosUsuario } = useContext(DataContext);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleLogin = async () => {
    console.log(inputUsername);
    console.log(inputSenha);
    try {
      const resultado = await AxiosInstance.post("/auth/signin", {
        username: inputUsername,
        password: inputSenha,
      });
      if (resultado.status === 200) {
        console.log(resultado);
        var jwtToken = resultado.data;
        armazenarDadosUsuario(jwtToken["accessToken"]);
        setBadCredentials(false)
        navigation.navigate("menu-principal");
      } else {
        setBadCredentials(true)
        console.log("! Erro ao realizar o login");
      }
    } catch (error) {
      setBadCredentials(true)
      console.log("! Erro durante o processo de login: " + error);
    }
  };

  const handleCadastro = () => {
    navigation.navigate("cadastro");
  };

  return (
    <View style={styles.container}>
      {/*Logo */}
      <Image
        source={require("../Assets/Logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Olá velho amigo, faça login com suas informações
      </Text>

      <View
        style={styles.mainContainer }
      >
        {/*Usuário*/}
        <View style={badCredentials ? styles.inputError : styles.inputContainer}>
          <Ionicons name={"person"} size={26} color={badCredentials ? "#aa6969" : "#c1c2c2"} />
          <TextInput
            style={styles.textInput}
            onChangeText={setInputUsername}
            placeholder="Nome de usuário"
            keyboardType="default"
            value={inputUsername}
            returnKeyType="next"
          />
        </View>

        {/*Senha*/}
        <View style={badCredentials ? styles.inputError : styles.inputContainer}>
          <Ionicons name={"lock-closed"} size={26} color={badCredentials ? "#aa6969" : "#c1c2c2"} />
          
          <TextInput
            style={styles.textInput}
            secureTextEntry={!showPassword}
            onChangeText={setInputSenha}
            placeholder="Senha"
            keyboardType="default"
            value={inputSenha}
            returnKeyType="go"
          />

          {/* Olho */}
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
          badCredentials ? 
          (<View style={styles.invalidCredentialsContainer}>
            <Text style={styles.invalidCredentials}> Credenciais inválidas!</Text>
          </View>)
          :
          ('')
        }
        {/* Btn Login*/}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <View style={styles.buttonContent}>
            <Text style={styles.loginButton.text}>Fazer Login </Text>
            <Ionicons name="log-in-outline" size={30} color={"white"} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Texto Cadastro*/}
      <View style={styles.signupContainer}>
        <Text style={styles.firstText}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={handleCadastro}>
          <Text style={styles.secondText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
