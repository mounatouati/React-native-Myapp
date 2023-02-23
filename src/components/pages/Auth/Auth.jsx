import { Button, TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native";

import Card from "../../HOC/Card/Card";
import LoginForm from "../../containers/LoginForm/LoginForm";
import SignupForm from "../../containers/SignupForm/SignupForm";
import { useState } from 'react';
export default function Auth() {
    const [isLogin, setter] = useState(true);

    function inverser() {
        setter(!isLogin);
    }
    return (
        <View>
            <Card title='Bienvenu!' content='Veuillez vous authentifier'>
                <Text>{isLogin ? <LoginForm> </LoginForm> : <SignupForm></SignupForm>}</Text>
                <TouchableOpacity style={styles.button} onPress={inverser}>
                    <Text style={styles.texte}>{isLogin ? " Créer un compte" : "Se connecter"}</Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        marginTop: 100,
    },
    texte: {
        alignSelf: "center",
        color: "#ac3973",
        fontSize: 15,
        textAlign: "center",
    }

});
//Exercice:
//1. Créer deux composant:
// LoginForm: /src/components/containers/LoginForm/LoginForm.jsx
// SignupForm: /src/components/containers/SignupForm/SignupForm.jsx

//Dans Auth.jsx:
//2. Déclarer une varibale d'état et son setter nommée isLogin intialisée a true.

//3. Déclarer une fonction qui permet d'inverser la variable d'état.

//4. Afficher grace a la condition isLogin le composant LoginForm ou SignupForm

//5. Utiliser le composant natif TouchableOpacity, pour permettre a l'uitilisateur de switcher entre les formulaire