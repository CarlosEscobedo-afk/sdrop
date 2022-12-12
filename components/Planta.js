import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { styles } from "../core/styles";
import { useNavigation } from "@react-navigation/native";
export default function Planta({
  id,
  name_planta,
  hum_max,
  hum_min,
  temp_max,
  temp_min,
}) {
  const navigation = useNavigation();
  const mover = () => {
    navigation.navigate("Session_on", {
      idSituacion: id,
      humMax: hum_max,
      humMin: hum_min,
      tempMax: temp_max,
      tempMin: temp_min,
      namePlanta: name_planta,
    });
  };

  return (
    <TouchableOpacity onPress={mover} style={styles.containerTouchO}>
      <Image
        style={{
          width: 180,
          height: 230,
          resizeMode: "contain",
          borderRadius: 30,
        }}
        source={require("../assets/6.jpg")}
      />
      <View style={styles.containerCard}>
        <Text style={styles.textoNombrePlanta}>{name_planta}</Text>
      </View>
    </TouchableOpacity>
  );
}
