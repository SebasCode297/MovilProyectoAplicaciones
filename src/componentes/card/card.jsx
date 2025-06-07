import { Text, View, Image } from "react-native";
import { styles } from "./card.styles";

export const Card = (props) => {
    return <View style={styles.card}>
        <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: props.url }}></Image>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.name}> { props.nombre } </Text>
            <Text style={styles.species}> {props.especie} </Text>
        </View>
    </View>
}