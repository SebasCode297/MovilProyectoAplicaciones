import { View, Text, TouchableOpacity } from "react-native";

export const Inicio = ({navigation}) =>{
    
    return <View>
        <TouchableOpacity onPress={()=>navigation.navigate("CalculadoraIMC")}>
            <Text>Ir a Calculadora IMC</Text>
        </TouchableOpacity>
</View>
}