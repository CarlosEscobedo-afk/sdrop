import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  // Estilos para REGISTRO e INICIO de sesion
  containerSesion: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    paddingStart: 30,
    borderRadius: 30,
    backgroundColor: "#F2EAE9",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header para session_on
  header: {
    backgroundColor: "#00a46c",
    height: "28%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  headerText: {
    fontSize: RFValue(27),
    color: "#FFF",
    paddingLeft: 25,
    fontWeight: "bold",
    textAlign: "left",
  },
  HeaderText: {
    paddingTop: 10,
    paddingLeft: 25,
    fontSize: RFValue(15),
    color: "#FFF",
    textAlign: "left",
  },

  // Recuadro de informacion
  containerInfo: {
    padding: 20,
    backgroundColor: "#FFF",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "92%",
  },
  info: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#00a46c",
    textAlign: "center",
  },
  infoRojo: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#a52a2a",
    textAlign: "center",
  },
  infoTitulo: {
    padding: 10,
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },

  // Recuadro estado
  containerEstado: {
    paddingLeft: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    marginTop: 5,
    borderRadius: 5,
    width: "92%",
    height: 300,
  },
  containerEstadoS: {
    paddingLeft: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    marginTop: 5,
    borderRadius: 5,
    width: "92%",
    height: 600,
  },
  containerEstadoPlanta: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    marginTop: 20,
    textAlign: "center",
    fontSize: RFValue(70),
    color: "#34434D",
    fontWeight: "bold",
  },
  subTitle: {
    textAlign: "center",
    fontSize: RFValue(24),
    color: "gray",
  },

  infoHome: {
    paddingLeft: 30,
    paddingTop: 10,
    fontSize: RFValue(40),
    fontWeight: "bold",
    color: "#0AC4BA",
    textAlign: "center",
  },

  // RECUARDO DE PLANTA
  containerPlanta: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },

  // Sector botones

  containerBotones: {
    //height:250,
    padding: 20,
    backgroundColor: "#FFF",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "92%",
  },

  // Principal
  containerTouchO: {
    height: 270,

    backgroundColor: "#fff",
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 180,
  },
  containerCard: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: "60%",
    borderRadius: 10,
    alignSelf: "center",
  },
  mensajeSuperior: {
    width: Dimensions.get("window").width,
    height: "28%",
    backgroundColor: "#00a46c",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mensajeSuperiorInterna: {
    width: Dimensions.get("window").width,
    height: "27%",
    backgroundColor: "#00a46c",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contenedorDeVarias: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  textoNombrePlanta: {
    fontWeight: "bold",
    fontSize: RFValue(8),
    justifyContent: "center",
    alignItems: "center",
  },
});
