import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5,FontAwesome,Entypo } from '@expo/vector-icons';


const LoginScreen = ({navigation}) => {
const [hide,sethide] = useState(true)
const see = () => {
    sethide(!hide)
}
  return (
    <View >
        <View style={styles.Contanier}>
          <View style={styles.top}>  
            <View style={{alignItems:'center'}}>
                <FontAwesome5 name="whatsapp" 
                size={58} 
                color="white" 
                 style={{top:66}}
                />
                <Text style={{top:79,fontSize:22,color:'#fff'}}>WhatsApp</Text>
            </View>
        </View>
        <View>
                <Text style={{top:45,fontSize:17}}>Login to Your Account</Text>
                <Text style={{top:49,right:88}}>Phone</Text>
            </View>
            <View >
                        <TextInput
                        placeholder='Enter Your Phone Number'
                        style={{top:59,right:79,borderWidth:1,left:12,width:300,padding:12,borderRadius:20}}
                        />
                        <Text style={{top:76,right:23}}>Password</Text>
                        <TextInput
                         placeholder='Enter your password'
                         secureTextEntry = {hide}
                         style={{top:99,right:79,borderWidth:1,left:12,width:300,padding:12,borderRadius:20}}
                        />
                        <TouchableOpacity onPress={see}>
                            <FontAwesome name="eye-slash" size={24} color="black" style={{top:59,left:275}}/>
                        </TouchableOpacity>
            </View>
            <View style={{marginTop:99}}>
                <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Main')}>
                         <Text style={{left:99,color:'#fff'}}>Login In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Forget}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{top:48,left:79}}> ................. Or Login with ....................</Text>
            <View style={{top:69,left:23,flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                   <FontAwesome5 name="facebook" size={43} color="blue" />
               </TouchableOpacity>
               <TouchableOpacity>
                    <Entypo name="instagram" size={43} color="black" />
               </TouchableOpacity>

               <Image
               source={require('../assets/google.png')}
               style={{width:'13%',height:40,borderRadius:30,top:2}}
               />
               
            </View>
            <View style={{top:78,alignItems:'center',flexDirection:'row',left:79}}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                      <Text style={{fontWeight:'bold'}}>Create New</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    Contanier:{
        alignItems:'center',
        bottom:17
    },
    top:{
        backgroundColor:'#13f507',
        top:18,
        height:210,
        width:'100%',   
    },
    login:{
     padding:15,
     width:300,
     backgroundColor:'#13f507',
     top:12,
     borderRadius:12
    },
    Forget:{
       top:26,
       alignItems:'center'
    },
})