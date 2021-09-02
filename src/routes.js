import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();



import Home from './pages/home';
import Atrativos from './pages/atrativos';
import Cidade from './pages/cidade';
import Inicial from './pages/inicial';
import Atrativo from './pages/atrativo'


export default function StackPages(){
    return(
        
        <NavigationContainer>
            
            <Tab.Navigator 
             screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#1C4491',
                    borderRadius:5
                }
            }}>
                <Tab.Screen  name = "Home" component = {Home}
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
                                source={require('../assets/icons/home-icon.png')}
                                style={{
                                    width:25,
                                    height:25
                                }}
                                />
                        </View>
                    )
                }}
                />
                <Tab.Screen name = "Atrativos" component = {Atrativos}
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
                                    source={require('../assets/icons/atrativos-icon.png')}
                                    style={{
                                        width:25,
                                        height:25
                                            }}
                                />
                            </View>
                    
                    )
                }}
                />                
                <Tab.Screen name = "Cidade" component = {Cidade}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{backgroundColor: focused ? '#fff' : '#1C4491',
                        borderRadius:5,
                        width:35,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                        >
                            
                                
                            <Image 
                                source={require('../assets/icons/cidades-icon.png')}
                                style={{
                                    width:25,
                                    height:25
                                }}
                                />
                        </View>
                
                    )
                }}
                />
                <Tab.Screen name = "Atrativo" component={Atrativo}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}