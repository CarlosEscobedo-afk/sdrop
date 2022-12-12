import React from 'react'
import { Text,Image,TouchableOpacity,View } from 'react-native';
import { styles } from '../core/styles';
import { useNavigation } from '@react-navigation/native';
export default function Planta({
    name_planta,
}){


    const navigation = useNavigation();

    const mover = () =>{
        navigation.navigate("Session_on")
    }

    return(
        <View style={styles.contenedorDeVarias} >
            <View style={styles.containerPlanta}>
              <TouchableOpacity
                  onPress={mover}
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
                  <Text style={styles.textoNombrePlanta}>{name_planta}</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
    )
}
