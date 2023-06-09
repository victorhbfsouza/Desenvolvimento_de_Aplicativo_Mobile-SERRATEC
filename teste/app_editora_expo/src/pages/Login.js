import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    navigation.navigate('Login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/16/16467.png' }}
        style={styles.image}
      />
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Insira seu e-mail"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 50,
  },
  inputWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    width: 95,
    marginTop: 10,
    backgroundColor: 'darkorange',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
