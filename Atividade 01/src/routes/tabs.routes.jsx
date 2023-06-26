import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho/Carrinho";
import Editoras from "../pages/Editoras/Editoras";
import Favoritos from "../pages/Favoritos/Favoritos";
import EditoraLivros from "../pages/EditoraLivros/EditoraLivros";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="principal"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Inicio",
        }}
      />
      <Tab.Screen
        name="pesquisa"
        component={Editoras}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" color={color} size={size} />
          ),
          tabBarLabel: "Editoras",
        }}
      />
      <Tab.Screen
        name="favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} />
          ),
          tabBarLabel: "Favoritos",
        }}
      />
      <Tab.Screen
        name="carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
          tabBarLabel: "Carrinho",
        }}
      />

    </Tab.Navigator>
  );
}