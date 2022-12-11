import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../core/styles';
import {  collection, query,where, getDocs} from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { firebaseConfig,db,app } from '../firebase-config';
export default function Home({ navigation }) {

  const enviarDatos = async () => {
    const docRef = collection(db,'informacion');

    const q = query(docRef,where('id','==',2))

    const querySnap = await getDocs(q)
    
    querySnap.forEach((doc)=>{
      console.log(doc.id,'=>',doc.data('hum_min'));
      return (doc.get('name_planta'))
    });
  
  }
  
  console.log("hola",enviarDatos())
  return (
    <ScrollView>
    
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={ styles.mensajeSuperior } >
            <View style={styles.headerContainer}>
                <View style={ {width:"90%"} } >
                     <Text style={ styles.headerText }>
                      Hola 
                    </Text>
                    <Text style={ styles.HeaderText }>
                        Aquí podras ver las plantas que tienes actualmente.
                    </Text>
                </View>
            </View>
            
        </View>
        <View style={styles.contenedorDeVarias} >
            <View style={styles.containerPlanta}>
              <TouchableOpacity 
                  onPress={()=>navigation.navigate("Session_on")}
                  style={ styles.containerTouchO }
              >
                <Image 
                  style={{
                      width: 180,
                      height: 230,
                      resizeMode: 'contain',
                      borderRadius: 30,
                  }}
                  source={require('../assets/6.jpg')}/>
                <View style={ styles.containerCard }>
                  <Text style={styles.textoNombrePlanta}>Pilea peperomioides</Text>
                </View>
              </TouchableOpacity>
            </View> 
            
            <View style={styles.containerPlanta}>
              
              <TouchableOpacity 
                  onPress={()=>navigation.navigate("Session_on")}
                  style={ styles.containerTouchO }
              >
                <Image 
                  style={{
                      width: 180,
                      height: 230,
                      resizeMode: 'contain',
                      borderRadius: 20,
                      
                  }}
                  source={require('../assets/6.jpg')}/>
                <View style={ styles.containerCard }>
                <Text style={styles.textoNombrePlanta}>Pilea peperomioides</Text>
                </View>
              </TouchableOpacity>
            </View>    
        </View>
        <View style={{ 
                flex: 1, 
                backgroundColor: "#FFF", 
                justifyContent: "flex-start", 
                alignItems: "center",
                }} >
                <View style={styles.containerEstado}>

                    <Text style={ styles.infoTitulo }>
                        Una de tus plantas está  
                    </Text>

                    <View style={styles.containerEstadoPlanta}>

                        <Image 
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'contain',
                            borderRadius: 40,
                        }}
                        source={require('../assets/sad.png')}/>

                    </View>
                    
                    <Text style={ styles.infoTitulo }>
                      ¡¡Te recomendamos que veas su condicion!!  
                    </Text>
                    
                </View>
            </View>
    </View>
    </ScrollView>
  );
}