import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../core/styles';
import {  onSnapshot, orderBy,collection, query,where, getDocs} from "firebase/firestore";
import { db } from '../firebase-config';
import Planta from '../components/Planta';
export default function Principal({ navigation }) {


  const [plantas, setPlanta] = React.useState([]);

  React.useLayoutEffect(() =>{
    const collectionRef = collection(db,'informacion');
    const q = query(collectionRef,where('id','==',1))

    const unsuscribe = onSnapshot(q, querySnapshot =>{
      setPlanta(
        querySnapshot.docs.map(doc=>({
          id: doc.id,
          name_planta: doc.data().name_planta,
        }))
      )
    })
    return unsuscribe;
  },[])

  

  return (
    <View style={styles.container}>
      <ScrollView>
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


        {plantas.map(planta=><Planta key={planta.id} {...planta}/>  )}
        
        
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
      </ScrollView>
    </View>
  );
}