
import { Button, StyleSheet, Text, View } from "react-native";
import { color } from "../../../styles/colors";

export default function Card(props) {

    return (
        <View  >
            <View style={styles.container}>
                <Text style={styles.title} > {props.title} </Text>
                <Text style={styles.content}> {props.content} </Text>
            </View>
            <View style={styles.children}>{props.children}</View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primaryColor,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
    },
    header: {},
    title: {
        color: color.lightColor,
        fontSize: 35,
        textAlign: "center",
    },
    content: {
        color: color.lightColor,
        fontSize: 20,
        textAlign: "center",
        padding: 5,
    },
    children: {
        padding: 10,
        backgroundColor: color.lightColor,
    },
});