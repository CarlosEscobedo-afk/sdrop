import React from 'react';
import { Text, View, Image } from 'react-native'
import { styles } from '../core/styles';

export default function Home({ navigation }) {

    return (

        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style={ { 
                flex: 0.8,
                backgroundColor:"#00a46c",
                height:"20%",
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
                        width: 450,
                        height: 250,
                        resizeMode: 'contain',
                        borderRadius: 20,
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
      );
}