import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Profil from "../screens/Profil/Profil";
import Cam from "../screens/Cam/Cam"
import { color } from "../../styles/colors";

const Pile = createStackNavigator();

const ProfilStack = () => {
    return (
        <Pile.Navigator screenOptions={{
            headerStyle: { backgroundColor: color.primaryColor },
            headerTitleStyle: { color: color.lightColor },
        }} >
            <Pile.Screen
                name="profil"
                component={Profil}
                options={{
                    title: "Votre page de profil",
                }}
            />
            <Pile.Screen
                option={{
                    title: "Prenez une photo",
                }}
                name="camera"
                component={Cam} />
        </Pile.Navigator>
    );

};
export default ProfilStack;