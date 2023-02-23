import { Button, Image, Text, StyleSheet,ScrollView,View } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from 'react';
import Card from "../../HOC/Card/Card";
import defaultavatar from "../../../../assets/defaultavatar.png";
import { TouchableOpacity } from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';
import { color } from "../../../styles/colors";
import * as ImagePicker from 'expo-image-picker';

const Profil = (props) => {


  const { user, setUser } = useContext(UserContext);


  async function openLibrary() {
  let resultat = await ImagePicker.launchCameraAsync();
  if (!resultat.canceled) {
      // version 1   setUser({avatar:resultat.assets[0].uri, user:username , user:email});
      setUser({ ...user, avatar: resultat.assets[0].uri });
      // version 2  ou on peu mettre ....user pour citer tout les cles (propriete) de users et afficher juste le cle a modifier 
    }
  }
 function gotToCamera(){
  props.navigation.push('camera')
 }

  return (
    <ScrollView>
      <Card title={user.username} content={user.email}  >
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, { width: 300, height: 300 }]}
            source={user.avatar ? user.avatar : defaultavatar}
          />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={openLibrary}>
              <MaterialIcons name="photo-library" size={50} color={color.primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={gotToCamera}>
              <MaterialIcons name="photo-camera" size={50} color={color.primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
        <Text> {user.description ? user.description : "Veuillez entrer une description ..."}</Text>
      </Card>
      </ScrollView>
  );
};
export default Profil;

const styles = StyleSheet.create({
  imageContainer: {
    //width:100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "hsl(0,0%,85%)",
    width: 300,
    paddingVertical: 10,
    marginVertical: 10
    ,
    borderRadius: 10,
  },
  image: {
    borderRadius: 150,
  }
})



/* let user = {
  name: "sam",
  age: 29,
  description:"test"
};

let useBis = {
  name: user.name,
  age: user.age,
  description: user.description,
  firstName: "Djemai",
};

let useBis2 = {
  ...user,
  firstName: "Djemai",
}; */
