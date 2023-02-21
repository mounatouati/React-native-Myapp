//import liraries

import { useState } from "react";
import { TouchableOpacity, Button, TextInput, View, Text, StyleSheet } from 'react-native';


const LoginForm = () => {
  const [email, onChangeEmail] = useState('Useless Text');
  const [password, onChangepass] = useState('');
  const [alertem, setalertem] = useState("");
  const [alertpass, setalertpass] = useState("");


  function login() {
    setalertpass('');
    setalertem('');
    if (email.includes('@') && password.length >= 6) {
      alert("Connexion " + email);
      onChangeEmail('');
      onChangepass('');
      return;
    }
    if (password.length < 6) {
      console.log("password incorrecte")
      setalertpass("Password Incorrecte :  Minimum 6 caractère");
    }
    if (!email.includes('@')) {
      console.log("email incorr")
      setalertem('Email incorrecte');
    }
  }
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <TextInput style={styles.input} value={email} placeholder="username" onChangeText={onChangeEmail}></TextInput>
      <Text style={styles.alert} >{alertem}</Text>
      <Text>test</Text>
      <TextInput style={styles.input} value={password} placeholder="mot de passe " keyboardType="ndefault" onChangeText={onChangepass}></TextInput>
      <Text style={styles.alert}> {alertpass} </Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={login}>
        <Text style={styles.submitButtonText}> Connexion </Text>
      </TouchableOpacity>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    // paddingTop:10,

    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  input: {
    margin: 15,
    width: "100%",
    height: "10%",
    //height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  alert: {

    //height: 40,
    color: 'red',
  },
  submitButton: {
    //  backgroundColor: '#7a42f4',

    color: 'white',
    padding: 10,
    margin: 15,
    height: 40,
    backgroundColor: "#602040",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
  submitButtonText: {
    color: 'white'
  }
});

//make this component available to the app
export default LoginForm;
