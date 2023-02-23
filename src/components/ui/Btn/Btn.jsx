import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../../styles/colors";
const Btn = ({ action, children, label }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={action}>
            <View style={styles.icon}>{children}</View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primaryColor,
        padding: 10,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 15,
        marginHorizontal: 10,
    },
    icon: {},
});

export default Btn;