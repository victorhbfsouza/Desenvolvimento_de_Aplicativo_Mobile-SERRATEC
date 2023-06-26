import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <View style={styles.container}>
      <Login />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100vh',
  },
});

export default App;