import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import {AuthContext} from '../contexts/auth'
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';



export default function SignIn() {
    let navigator = useNavigation()
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    function handleLogin(){
        login(email, password)
    }

 return (
   <View style={styles.container}>
       <Image style={styles.logo} source={require('../img/logo.png')}></Image>
      
       <TextInput placeholder='Email' style={styles.input} placeholderTextColor='green' onChangeText={(texto) => setEmail(texto)}></TextInput>

       
        <TextInput placeholder='Senha' style={styles.input} placeholderTextColor='green' onChangeText={(texto) => setPassword(texto)}></TextInput>

        <TouchableOpacity style={styles.botaoLogin} onPress={handleLogin}>
            <Text style={styles.textoBotao} >Entrar</Text>
            </TouchableOpacity>
       
        <View style={styles.rodape}>
            <TouchableOpacity onPress={()=> navigator.navigate('Cadastro')}>
                <Text style={styles.textoBotao}>Criar conta gratis</Text>
           </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'center'
               
    },
    logo: {
        width: 110,
        height: 110,
        margin: 20
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    rodape: {
        position: 'absolute',
        bottom: 10,
    },
    botaoLogin: {
        backgroundColor: 'green',
        width: 90,
        height: 30,
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 8,
        
    },
    input: {
        color: 'white',
        height: 50,
        fontSize: 20
    }
})