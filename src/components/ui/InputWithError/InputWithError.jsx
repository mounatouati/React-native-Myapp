//import liraries
import React, { Component } from 'react';
import { useState } from "react";
import { View, Text, TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { color } from "../../../styles/colors";
// create a component
const InputWithError = (props) => {
    const [isHiddenPassword,setIsHiddenPassword]=useState(true);
    function togglePassword() {
        setIsHiddenPassword(!isHiddenPassword);
    }
    
const couleuBordure=
props.errorMessage=="" ? "green" :props.errorMessage==undefined ? color.primaryColor : "red";
    
    return (
        <View style={styles.container}>
            <View  style={[styles.inputContainer ,{borderBottomColor: couleuBordure}]}>
            <TextInput 
            
            placeholder={props.holder}
            value={props.valeur}
            onChangeText={props.action}
            keyboardType={props.type} 
            secureTextEntry={props.isPasswrd && isHiddenPassword}
            />
           
            {props.isPasswrd && (
            <TouchableOpacity onPress={togglePassword}>
                <Feather name ='eye' size={20} color="black"/>
            </TouchableOpacity>
            )} 
            </View>
           <Text style={styles.error}>{props.errorMessage} </Text> 
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		//alignItems: "center",

    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 5,
        borderBottomWidth: 2,
    },
    input: {
        width: "80%",
        outlineStyle: "none",
        backgroundColor: "transparent",
    },
    error: {
        color: "red",
        margin: 5,
        marginVertical: 10,
    },
});
//make this component available to the app
export default InputWithError;
