import React from 'react';
import { Text, Image, View } from 'react-native'
import { styles } from '../core/styles'
import Button from '../components/Button';


export default function Home({ navigation }) {

    return (

        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style={{ flex: 1.3, backgroundColor: "#FFF"}} >
                <Text style={styles.titulo}>SDrop</Text>
                <Text style={styles.infoHome}>Tus plantas más vivas</Text>
                
            </View>
            <View style={{ 
                flex: 2.5, 
                backgroundColor: "#FFF", 
                justifyContent: "center", 
                alignItems: "center",
                }} >
                <View style={styles.containerPlanta}>
                    <Image 
                    style={{
                        width: 450,
                        height: 350,
                        resizeMode: 'contain',
                        borderRadius: 20,
                    }}
                    source={require('../assets/illustration_1.png')}/>
                </View>    
            </View>

            <View style={{ flex: 3, backgroundColor: "#fff" }} >
                <View  style={styles.containerBotones}>
                    <Text style={styles.subTitle}>Seleccione una de las opciones:</Text>
                    <View style={{ 
                        backgroundColor: "#FFF", 
                        justifyContent: "flex-start", 
                        alignItems: "center",
                        paddingTop: 50,
                        }}>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('Login')}
                        >
                            Ingresar
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('Register')}
                        >
                            Registrar
                        </Button>
                    </View>
                </View>
            </View>
        </View>
      );
}