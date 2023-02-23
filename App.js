import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from 'react';
import { UserContext } from './src/components/contexts/UserContext';

import Auth from './src/components/pages/Auth/Auth';
import Profil from './src/components/pages/Profil/Profil';

export default function App() {
    const userFromDb ={
        id: 1 ,
        email:"mouna@",
        username: "mouna",
        avatar: null,
         }
    const [user, setUser] = useState(userFromDb);

    return (
        <UserContext.Provider
         value={{user : user , setUser : setUser}}>
        <View style={classes.container}>
           <View>
                {!user ? <Auth /> : <Profil />}
            </View>
            <StatusBar style="auto" />
        </View>
        </UserContext.Provider>
    );
}
// 1 ere: Les composants natifs
// 2 eme: Les événements
// 3 eme le style: inLine style, StyleSheet

const classes = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        marginTop: 100,
    },

    texte: {
        color: "green",
    },
});
/* Exercice 1:
1/ Créer deux composants et de les exporter:
   1.1/ src/components/pages/Auth/Auth.jsx
    1.2/ src/components/pages/Profil/Profil.jsx

2/ Dans App.js, créer une variable d'état nommée user, initialiser a null
    2.1/ Utiliser un opérateur ternaire pour afficher le composant Auth si user est null sinon afficher le composant Profil
  */