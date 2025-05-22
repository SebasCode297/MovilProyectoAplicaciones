// Librerías para la navegación
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importo pantallas
import { CalculadoraIMC } from "./src/pantallas/calculadoraIMC";
import { Inicio } from "./src/pantallas/inicio/inicio";

// Instanciar stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="CalculadoraIMC"
          component={CalculadoraIMC}
          options={{ title: "Calculadora IMC" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
