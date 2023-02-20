import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={classes.container}>
            <Text style={classes.texte}>Bonjour!</Text>
            <Button onPress={() => alert("Clique!")} title="Cliques moi"></Button>
            <StatusBar style="auto" />
        </View>
    );
}

// 1 ere: Les composants natifs
// 2 eme: Les événements
// 3 eme le style: inLine style, StyleSheet

const classes = StyleSheet.create({
    container: {
        width: "50%",
        backgroundColor: "red",
        marginTop: 100,
    },

    texte: {
        color: "green",
    },
});
