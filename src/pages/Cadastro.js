import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react/cjs/react.development';
import {AuthContext} from '../contexts/auth'

export default function Cadastro() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const {signUp} = useContext(AuthContext)

    function handleSignUp(){
        signUp(email, password, nome, idade)
    }

 return (
   <View style={styles.container}>
       <TextInput placeholder='Nome' style={styles.input} placeholderTextColor='green' onChangeText={(texto)=> setNome(texto)}></TextInput>
       <TextInput placeholder='Idade' style={styles.input} placeholderTextColor='green' onChangeText={(texto)=> setIdade(texto)}></TextInput>
       <TextInput placeholder='Email' style={styles.input} placeholderTextColor='green' onChangeText={(texto)=> setEmail(texto)}></TextInput>
        <TextInput placeholder='Senha' style={styles.input} placeholderTextColor='green' onChangeText={(texto)=> setPassword(texto)}></TextInput>

<TouchableOpacity style={styles.botaoCadastro} onPress={handleSignUp}>
    <Text style={styles.textoBotao} >Cadastrar</Text>
    </TouchableOpacity>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
               
    },
    texto: {
        color: 'white',
        
    },
    input: {
        margin: 10,
        color: 'white',
        fontSize: 20
    }, 
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        
    },
    botaoCadastro: {
        backgroundColor: 'green',
        width: 110,
        height: 40,
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 8
    },
})