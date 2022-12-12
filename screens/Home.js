import React from "react";
import { Text, Image, View, Dimensions } from "react-native";
import { styles } from "../core/styles";
import Button from "../components/Button";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "#fff",
          height: Dimensions.get("window").height / 3,
        }}
      >
        <Text style={styles.titulo}>SDrop</Text>
        <Text style={styles.infoHome}>Tus plantas más vivas</Text>
      </View>
      <View>
        <View style={styles.containerPlanta}>
          <Image
            style={{
              width: Dimensions.get("window").width / 2,
              height: Dimensions.get("window").height / 5,
              resizeMode: "contain",
            }}
            source={require("../assets/illustration_1.png")}
          />
        </View>
      </View>

      <View style={{ flex: 3, backgroundColor: "#fff" }}>
        <View style={styles.containerBotones}>
          <Text style={styles.subTitle}>Seleccione una de las opciones:</Text>
          <View
            style={{
              backgroundColor: "#fff",
              alignItems: "center",
            }}
          >
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Login")}
            >
              Ingresar
            </Button>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Registrar
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
