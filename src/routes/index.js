import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler'
import AppRoutes from './app.routes';
import Login from './loginRoutes'
import {AuthContext} from '../contexts/auth'
import { useContext } from 'react';
import {View, ActivityIndicator} from 'react-native'

export default function Routes(){
    const {signed, loading} = useContext(AuthContext)

    
    if (loading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator/>
            </View>
        )
    }

    return(

        signed ? <AppRoutes/> : <Login/>
    )
}