import React from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import {AuthContext} from '../contexts/auth'




export default function Home() {
   
  const {logOut} = useContext(AuthContext)

  function handleLogOut(){
    logOut()
  }

 return (
   <View>
       <Button title='Deslogar' onPress={handleLogOut}></Button>
   </View>
  );
}