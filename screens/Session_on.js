import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView, Dimensions } from "react-native";
import { styles } from "../core/styles";
import Situacion from "../components/Situacion";
import { db } from "../firebase-config";
import { onSnapshot, collection, query, where } from "firebase/firestore";
export default function Session_on({ route }) {
  const { namePlanta } = route.params;
  const { humMax } = route.params;
  const { idSituacion } = route.params;
  const { humMin } = route.params;
  const { tempMax } = route.params;
  const { tempMin } = route.params;

  const [situaciones, setSituacion] = React.useState([]);

  React.useLayoutEffect(() => {
    const collectionRef = collection(db, "arduino");

    const q = query(collectionRef, where("id", "==", idSituacion));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setSituacion(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          temp: doc.data().temp,
          hum: doc.data().hum,
          hum_max: humMax,
          hum_min: humMin,
          temp_max: tempMax,
          temp_min: tempMin,
          name_planta: namePlanta,
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.mensajeSuperiorInterna}>
          <View style={styles.headerContainer}>
            <View style={{ width: "90%" }}>
              <Text style={styles.headerText}>Hola</Text>

              <Text style={styles.HeaderText}>
                Aquí podras ver la información de tu planta.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1.2,
            backgroundColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.containerPlanta}>
            <Image
              style={{
                backgroundColor: "#fff",
                width: Dimensions.get("window").width / 2,
                height: 100,
                resizeMode: "contain",
                borderRadius: 40,
              }}
              source={require("../assets/6.jpg")}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            backgroundColor: "#FFF",
          }}
        >
          <View style={styles.containerInfo}>
            {situaciones.map((situacion) => (
              <Situacion key={situacion.id} {...situacion} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
