//import liraries
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useEffect, useRef, useState, useContext } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';

// create a component
const Cam = () => {
  const { user, setUser } = useContext(UserContext);
  const [cameratype, setCameraType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  let size = Dimensions.get("window")
  const largeurCamera = size.width;
  const hauteurCamera = (size.width * 16) / 9;
  useEffect(() => {
    requestPermission();

  }, []);
  console.log(permission);
  function toggleCameraType() {
    setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  async function takePic() {
    let image = await cameraRef.current.takcameraAsync();
    setUser({ ...user, avator: image });
    console.log(cameraRef);
  }
  if (!permission) {
    return <Text> Veuillez autoriser le cam</Text>
  }

  if (!permission.granted) {
    return <Text> Vous avez autorizer le cam </Text>
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={cameratype}
        ratio="16:9" style={{ width: largeurCamera, height: hauteurCamera }} >
        <View style={styles.buttons}>
          <TouchableOpacity onPress={toggleCameraType}>
            <MaterialIcons name="flip-camera-android" size={50} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePic}>
            <MaterialIcons name="camera" size={50} color="green" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%", height: "100%"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",

    justifyContent: "space-around",
    alignItems: 'center',
    position: "absolute",
    bottom: 100,


  },

});

//make this component available to the app
export default Cam;
