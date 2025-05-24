import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './inicio.styles';

export const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a tu Calculadora de IMC</Text>
      <Image
        style={styles.image}
        source={{ uri: 
            "https://img.freepik.com/fotos-premium/cientista-louco-ou-personagem-de-professor-maluco-no-laboratorio-de-ciencias_972277-122.jpg" }}
      />
      <Text style={styles.subtitle}>
        Descubre tu índice de masa corporal y mejora tu salud.
      </Text>
      <Text style={styles.description}>
        Esta herramienta te ayudará a conocer si tu peso está en un rango saludable.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CalculadoraIMC')}>
        <Text style={styles.buttonText}>Ir a Calculadora IMC</Text>
      </TouchableOpacity>
    </View>
  );
};
