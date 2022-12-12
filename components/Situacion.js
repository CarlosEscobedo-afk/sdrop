import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "../core/styles";

export default function Situacion({
  temp,
  hum,
  hum_max,
  hum_min,
  temp_max,
  temp_min,
}) {
  function EstadoTexto() {
    if (hum > hum_min && hum < hum_max && temp > temp_min && temp < temp_max) {
      return (
        <View>
          <Text style={styles.infoTitulo}>Humedad actual:</Text>
          <Text style={styles.info}>{hum}</Text>
          <Text style={styles.infoTitulo}>Temperatura actual:</Text>
          <Text style={styles.info}>{temp}°C</Text>
        </View>
      );
    } else if (
      hum > hum_min &&
      hum < hum_max &&
      (temp <= temp_min || temp >= temp_max)
    ) {
      return (
        <View>
          <Text style={styles.infoTitulo}>Humedad actual:</Text>
          <Text style={styles.info}>{hum}</Text>
          <Text style={styles.infoTitulo}>Temperatura actual:</Text>
          <Text style={styles.infoRojo}>{temp}°C</Text>
        </View>
      );
    } else if (
      (hum <= hum_min || hum >= hum_max) &&
      temp > temp_min &&
      temp < temp_max
    ) {
      return (
        <View>
          <Text style={styles.infoTitulo}>Humedad actual:</Text>
          <Text style={styles.infoRojo}>{hum}</Text>
          <Text style={styles.infoTitulo}>Temperatura actual:</Text>
          <Text style={styles.info}>{temp}°C</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.infoTitulo}>Humedad actual:</Text>
          <Text style={styles.infoRojo}>{hum}</Text>
          <Text style={styles.infoTitulo}>Temperatura actual:</Text>
          <Text style={styles.infoRojo}>{temp}°C</Text>
        </View>
      );
    }
  }
  function EstadoImagen() {
    if (hum > hum_min && hum < hum_max && temp > temp_min && temp < temp_max) {
      return (
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            borderRadius: 40,
          }}
          source={require("../assets/happiness.png")}
        />
      );
    } else {
      return (
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            borderRadius: 40,
          }}
          source={require("../assets/sad.png")}
        />
      );
    }
  }

  return (
    <View>
      <EstadoTexto />
      <Text style={styles.infoTitulo}>Tú planta está:</Text>
      <View style={styles.containerEstadoPlanta}>
        <EstadoImagen />
      </View>
    </View>
  );
}
