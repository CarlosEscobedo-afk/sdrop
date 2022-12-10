import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button';
import React from 'react';
import { Text, TextInput, View, Alert } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../core/styles';


//Funciones para definir la crecion de cuenta, inicio sesion y verificacion en FireBase
const Login = () => { 

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation= useNavigation();


  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Cuenta creada')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Entrada exitosa')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Principal');
    })
    .catch(error => {
      Alert.alert('Ingrese la información correcta')
      console.log(error)
    })
  }
  //Visualizacion del Login
  return (
    <>
      <View style={styles.containerSesion}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.subTitle}>Inicie sesión en su cuenta</Text>
        <TextInput 
        onChangeText={(text) => setEmail(text)} 
        placeholder="Ingrese su Email"
        style={styles.textInput}
        />
        <TextInput 
        onChangeText={(text) => setPassword(text)}
        placeholder="Contraseña"
        style={styles.textInput}
        secureTextEntry
        />
        <StatusBar style="auto" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          
          onPress={handleSingIn}
          style={styles.button}
        >
          <Text style={styles.button}>Inicio sesion</Text>
        </Button>
        

      </View>

      <View style={styles.containerSesion}>
        
      </View>

    </>
  )
}


export default Login;