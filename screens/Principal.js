import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../core/styles';

export default function Home({ navigation }) {

  return (

    <View style={[styles.container, { flexDirection: "column" }]}>
        <View style={ { 
            flex: 0.3,
            backgroundColor:"#00a46c",
            height:"5%",
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal:20
            }} >
            <View style={styles.headerContainer}>
                <View style={ {width:"90%"} } >
                    <Text style={ styles.headerText }>
                        Hola Omar
                    </Text>
                    <Text style={ styles.HeaderText }>
                        Aquí podras ver las plantas que tienes actualmente.
                    </Text>
                </View>
            </View>
            
        </View>
        <View style={{ 
            flexDirection:"row", 
            backgroundColor: "#FFF", 
            justifyContent: "center", 
            alignItems: "center",
            
            }} >
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
                  <Text style={{
                      fontWeight:"bold"
                  }}>Pilea peperomioides</Text>
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
                  <Text style={{
                      fontWeight:"bold"
                  }}>Pilea peperomioides</Text>
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
  );
}