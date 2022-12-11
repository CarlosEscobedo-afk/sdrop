import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View, Image,ScrollView, Dimensions } from 'react-native'
import { styles } from '../core/styles';

export default function Home({ navigation }) {

    return (
        <ScrollView>
        <View style={styles.container}>
        <StatusBar style="auto" />
            <View style={styles.mensajeSuperiorInterna} >
                <View style={styles.headerContainer}>
                    <View style={ {width:"90%"} } >
                        <Text style={ styles.headerText }>
                            Hola Omar
                        </Text>

                        <Text style={ styles.HeaderText }>
                            Aquí podras ver la información de tu planta.
                        </Text>
                    </View>
                </View>
                
            </View>
            <View style={{ 
                flex: 1.2, 
                backgroundColor: "#FFF", 
                justifyContent: "center", 
                alignItems: "center",
                }} >
                <View style={styles.containerPlanta}>
                    <Image 
                    style={{
                        backgroundColor:"#fff",
                        width: Dimensions.get('window').width/2,
                        height: 100,
                        resizeMode: 'contain',
                        borderRadius: 40,
                    }}
                    source={require('../assets/6.jpg')}/>
                </View>    
            </View>
            <View style={{ 
                flex: 1.5, 
                backgroundColor: "#FFF",
                }} >
                <View style={styles.containerInfo}>

                    <Text style={ styles.infoTitulo }>
                        Humedad actual: 
                    </Text>
                    <Text style={ styles.info }>
                        50%
                    </Text>
                    
                    <Text style={ styles.infoTitulo }>
                        Temperatura actual: 
                    </Text>
                    <Text style={ styles.infoRojo}> 
                        32 grados
                    </Text>
                    
                    <Text style={ styles.infoTitulo }>
                        Tiempo de ultima medicion: 
                    </Text>
                    <Text style={ styles.info }> 
                        15:13
                    </Text>
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
                        Tú planta está  
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
                    
                    
                </View>
            </View>
        </View>
        </ScrollView>
      );
}