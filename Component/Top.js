import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather,Entypo } from '@expo/vector-icons';

const Top = () => {
  return (
    <View>
      <View style={{backgroundColor:'#0e806a',top:2}}>
             <Text style={{fontSize:21,top:14,left:6,color:'#fff',marginTop:43}}>WhatsApp</Text>
             <View style={{flexDirection:'row',left:300,bottom:14}}>
                    <TouchableOpacity>
                            <Feather name="camera" size={28} color="white" style={{right:25}} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                           <Feather name="search" size={28} color="white" style={{right:6}}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                         <Entypo name="dots-three-vertical" size={24} color="white" style={{left:4,top:4}}/>
                      </TouchableOpacity>
              </View>
      </View>
    </View>
  )
}

export default Top

const styles = StyleSheet.create({})