import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import Cadastro from '../pages/Cadastro'

const LoginStack = createStackNavigator();

export default function Login(){
    return(
        <LoginStack.Navigator>
            <LoginStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}></LoginStack.Screen>
            <LoginStack.Screen name='Cadastro' component={Cadastro}/>
        </LoginStack.Navigator>
    )
}
