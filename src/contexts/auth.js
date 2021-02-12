
import React, {createContext, useState}from 'react';
import firebase from '../data/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';


export const AuthContext = createContext({})

export default function AuthProvider({children}) {
 const [user, setUser] = useState(null)
 const [loading, setLoading] =useState(true)

    useEffect(()=>{

        async function loadStorage(){
        const verificaLogin = await AsyncStorage.getItem('Auth_user');

        if(verificaLogin){
            setUser(JSON.parse(verificaLogin))
            setLoading(false)
        }
        setLoading(false)
    }
    }, [])


 //Cadastrar Usuario
 async function signUp(email, password, nome, idade){
     await firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(async(value)=>{
         let uid = value.user.uid;
         await firebase.database().ref('users').child(uid).set({
             saldo: 0,
             nome: nome,
             idade: idade
         }).then(() => {
             let data = {
                 uid: uid,
                 nome: nome,
                 email: value.user.email,
                 idade: idade

             };
             setUser(data);
             storageLogin(data);
         })
     }).catch( (error) => {
        alert('Ops algo deu errado!');
        return;
        //Der algum erro mostrar o alert e barrar aqui.
    })
 }
 
 //Logar usuario

 async function login(email, password){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async(value)=> {
        let uid = value.user.uid
        await firebase.database().ref('users').child(uid).once('value')
        .then(async (snapshot)=>{
            let data = {
                uid: uid,
                nome: snapshot.val().nome,
                email: value.user.email
            }

            setUser(data);
            storageLogin(data)
        })
    })
    .children((error)=> alert(error))
 }

 //Guardar login no async storage

 async function storageLogin(data){
    await AsyncStorage.getItem('Auth_user', JSON.stringify(data))
 }


 //Deslogar usuario

 async function logOut(){
     await firebase.auth().signOut();
     await AsyncStorage.clear()
     .then(()=>{
         setUser(null)
     })
 }

 return (
   <AuthContext.Provider value={{signed: !!user ,user, signUp, login, loading, logOut}}>
    {children}
   </AuthContext.Provider>
  );
}