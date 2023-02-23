import React, { Component, useContext, useState } from "react";
import { TouchableOpacity, Button, TextInput, View, Text, StyleSheet } from 'react-native';
import Btn from "../../ui/Btn/Btn";
import { AntDesign } from '@expo/vector-icons';
import InputWithError from "../../ui/InputWithError/InputWithError";
import { getConfirmPasswordError, getEmailError, getUsernameError, validateConfirmPassword,
        validateEmail, validatePassword,getPasswordError, validateUsername } from "../../../utils/validations";
import { UserContext } from "../../contexts/UserContext";
import { signupWithEmailAndPassword } from "../../../utils/requests/authentifications";
const SignupForm = () => {

  const {setUser} = useContext(UserContext);
  const [email, onChangeEmail] = useState('');
  const [username, onChangeuser] = useState('');
  const [password, onChangepass] = useState('');
  const [confirmpassword, onChangeconfirmpass] = useState('');
  const [alertem, setalertem] = useState("");
  const [alertpass, setalertpass] = useState("");
  const [alertconfirmpass, setalertconfirmpass] = useState("");
  const [alertuser, setalertuser] = useState("");

  function signup() {


    setalertuser(getUsernameError(username));
    setalertpass(getPasswordError(password));
    setalertconfirmpass(getConfirmPasswordError(password,confirmpassword));
    setalertem(getEmailError(email));
    if (validateEmail(email) &&
      validatePassword(password) &&
      validateUsername(username) &&
      validateConfirmPassword(password,confirmpassword)) 
      {
signupWithEmailAndPassword(email,username,password).then(
  (data) => {
    setUser(data);
  }
); 
    }
      
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
        holder='username'
        valeur={username}
        action={onChangeuser}
        errorMessage={alertuser}
        type='default'
      />
      <InputWithError
        holder='Mot de passe'
        valeur={password}
        action={onChangepass}
        errorMessage={alertpass}
        type='default'
        isPasswrd
      />
      <InputWithError
        holder='Confirm passord'
        valeur={confirmpassword}
        action={onChangeconfirmpass}
        errorMessage={alertconfirmpass}
        type='default'
        isPasswrd
      />
      <Btn action={signup} label="Se conncter">
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
export default SignupForm;
