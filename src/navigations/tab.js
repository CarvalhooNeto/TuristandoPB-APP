import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Text, View, Image, StyleSheet} from 'react-native'

import Home from '../../src/pages/home'
import  Atrativos  from '../pages/atrativos'
import Cidades from '../pages/cidade'
const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
                tabBarShowLabel:false,
                
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#1C4491',
                    
                }
            }}>
            <Tab.Screen name="Home" component={ Home }
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{backgroundColor: focused ? '#fff' : '#1C4491',
                    borderRadius:5,
                    width:35,
                    height:35,
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                        <Image 
                            source={require('../../assets/icons/home-icon.png')}
                            style={{
                                width:25,
                                height:25
                            }}
                            />
                    </View>
                )
            }}
            />
            <Tab.Screen name="Atrativos" component={ Atrativos }
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{backgroundColor: focused ? '#fff': "1C4491" ,
                    borderRadius:5,
                    width:35,
                    height:35,
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                        <Image 
                            source={require('../../assets/icons/atrativos-icon.png')}
                            style={{
                                width:25,
                                height:25
                            }}
                            />
                    </View>
                )
            }} />
             <Tab.Screen name="Cidades" component={ Cidades }
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{backgroundColor: focused ? '#fff' : '#1C4491',
                    borderRadius:5,
                    width:35,
                    height:35,
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                        <Image 
                            source={require('../../assets/icons/cidades-icon.png')}
                            style={{
                                width:25,
                                height:25
                            }}
                            />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

export {BottomTabNavigator}