import React from 'react'
import {View,Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'

export default function Inicial({navigation}){

    function navigationToHome(){
        navigation.navigate('Home')

}
return (
        <View style={styles.container}>
             <Image source={require("../../../assets/logos/logo1.png")}
             style={{
                height: 160,
                width: 160,
                marginBottom:20}}/>
            <TouchableOpacity style={styles.button}
            onPress={()=>navigationToHome()}>
                <Text style={styles.buttontext}>
                    Começar
                </Text>
            </TouchableOpacity>

        </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#1C4491',
        justifyContent:'center',
        alignItems:'center',
        padding:30
    },
    button: {
        height:46,
        backgroundColor:'#fff',
        borderRadius: 30,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:25,
        paddingRight:25
    },
    buttontext:{
        color:'#1C4491',
        fontWeight:'bold',
        fontSize:16,
        


    }
})