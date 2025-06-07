import { ScrollView } from "react-native";
import { styles } from "./container.styles";

export const Container = ({children}) => {
    return <ScrollView style={styles.container}>
        {children}

    </ScrollView>
}
