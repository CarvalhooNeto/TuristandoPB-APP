import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"



import Inicial from '../../src/pages/inicial'
import Atrativo from '../../src/pages/atrativo'
import {BottomTabNavigator} from'../navigations/tab'

const Stack = createStackNavigator()


const InicialStackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{headerShown:false}}>
            <Stack.Screen name="Inicial" component={ Inicial } />
            <Stack.Screen name="Atrativo" component={Atrativo}/>
            <Stack.Screen name="Home" component={ BottomTabNavigator }/>
        </Stack.Navigator>
    )
}

export {InicialStackNavigator}