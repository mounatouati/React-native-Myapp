//import liraries

import { useState } from "react";
import { TouchableOpacity, Button, TextInput, View, Text, StyleSheet } from 'react-native';
import Btn from "../../ui/Btn/Btn";
import { AntDesign } from '@expo/vector-icons';
import InputWithError from "../../ui/InputWithError/InputWithError";
import { validateEmail, validatePassword ,getPasswordError,getEmailError} from "../../../utils/validations";

const LoginForm = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangepass] = useState('');
  const [alertem, setalertem] = useState("");
  const [alertpass, setalertpass] = useState("");


  function login() {
    setalertpass('');
    setalertem('');
    if (validateEmail(email) && validatePassword(password)) {
      alert("Connexion réussie");
      onChangeEmail('');
      onChangepass('');
      return;
    }   
      setalertpass(getPasswordError(password));
      setalertem(getEmailError(email));
  }
  return (
    <View style={styles.container}>
     
      <InputWithError
      holder='Email' 
      valeur={email}
      action={onChangeEmail}
      errorMessage={alertem}
      type='email-address'
      />
      <InputWithError
      holder='Mot de passe' 
      valeur={password}
      action={onChangepass}
      errorMessage={alertpass}
      type='default'
      isPasswrd
      />

      <Btn action={login} label="Se conncter">
        <AntDesign name="login" size={24} color="whitesmoke" />
      </Btn>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent:"center",
  },
  input: {
    margin: 15,
    width: "100%",
    height: "10%",
    alignSelf: "center",
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
