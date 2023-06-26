import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import TabRoutes from "./tabs.routes";
import Editoras from "../pages/Editoras/Editoras";
import { BtnLogout } from "../components/Button/BtnLogout";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: "Entre Linhas" }}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
        }}
      />

      <Drawer.Screen
        name="editoras"
        component={Editoras}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="book-open" color={color} size={size} />
          ),
          drawerLabel: "Editoras",
          title: "Editoras",
        }}
      />
      
      <Drawer.Screen
        name="sair"
        component={BtnLogout}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="log-out" color={color} size={size} />
          ),
          drawerLabel: "Sair",
        }}
      />
    </Drawer.Navigator>
  );
}
