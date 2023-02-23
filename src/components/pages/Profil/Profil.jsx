import { Button, StyleSheet, Image, Text, View } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from 'react';
import Card from "../../HOC/Card/Card";
import defaultavatar from "../../../../assets/defaultavatar.png";
import { TouchableOpacity } from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';
import { color } from "../../../styles/colors";
export default function Profil() {
  const { user } = useContext(UserContext);

  return (
    <View>
      <Card title={user.email} content={user.username}  >
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, { width: 300, height: 300 }]}
            source={user.avatar ? user.avatar : defaultavatar}
          />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity>
              <MaterialIcons name="photo-library" size={24} color={color.primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="photo-camera" size={24} color={color.primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
        <Text> {user.description ? user.description : "Veuillez entrer une description ..."}</Text>
      </Card>
    </View>
  )
}

const styles =StyleSheet.create({
imageContainer:{
  //width:100,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
},
ButtonContainer :{
  display:"flex",
  flexDirection: "row",
  justifyContent:"space-around",
  alignItems:"center",
  backgroundColor:"hsl(0,0%,85%)",
  width:300,
  paddingVertical:10,
  marginVertical: 10
,
borderRadius: 10,
},
image:{
borderRadius:150,
}
})
