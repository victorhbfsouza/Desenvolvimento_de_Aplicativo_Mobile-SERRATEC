import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import DrawerRoutes from "./drawer.routes";
import EditoraLivros from "../pages/EditoraLivros/EditoraLivros";
import Cadastro from "../pages/Cadastro";
import Livro from "../pages/Livro/Livro";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (

    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="cadastro" component={Cadastro}/>
      <Stack.Screen name="menu-principal" component={DrawerRoutes} />
      <Stack.Screen
        name="editora-livros"
        component={EditoraLivros}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="livro"
        component={Livro}
        options={{ headerShown: true,
                         title: "Livro"}}
        />

    </Stack.Navigator>
  );
}
