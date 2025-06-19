import { Card } from "../../componentes/card/card";
import { Container } from "../../componentes/container/container";
import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";

export const ConsumoAPI = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPersonajes = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.log("Error: " + error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPersonajes();
    }, []);

    return (
        <Container>
            {loading ? (
                <ActivityIndicator/>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            url={item.image}
                            nombre={item.name}
                            especie={item.species}
                        />
                    )}
                />
            )}
        </Container>
    );
};