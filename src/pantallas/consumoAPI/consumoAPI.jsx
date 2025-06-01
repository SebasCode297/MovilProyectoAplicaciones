import { View, Image, Text } from 'react-native';
import { styles } from './consumoAPI.styles';

export const ConsumoAPI = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Historia de LDU</Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{ uri: "https://imagenes.primicias.ec/files/og_thumbnail/uploads/2024/05/26/66537b8857060.jpeg" }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Liga de Quito</Text>
          <Text style={styles.cardText}>Fundado en 1930</Text>
          <Text style={styles.cardText}>Estadio: Casa Blanca</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{ uri: "https://mifutbolecuador.futbol/wp-content/uploads/2022/10/estadio-rodrigo-paz-2022.jpg" }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>La Casa Blanca</Text>
          <Text style={styles.cardText}>Inaugurado en 1997</Text>
          <Text style={styles.cardText}>Capacidad: 41,575</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{ uri: "https://imagenes.primicias.ec/files/og_thumbnail/uploads/2024/05/26/66537b847d28c.jpeg" }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Palmarés</Text>
          <Text style={styles.cardText}>Copa Libertadores 2008</Text>
          <Text style={styles.cardText}>30 títulos nacionales</Text>
        </View>
      </View>
    </View>
  );
};