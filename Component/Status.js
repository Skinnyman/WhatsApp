import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Entypo,AntDesign } from '@expo/vector-icons';

const Status = () => {
  return (
    <View>
          <View style={styles.star}> 
             <Text style={{fontSize:21,left:12,top:14,fontWeight:'bold'}}> Status</Text> 
             <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="grey"
                        style={{top:12}}
                        />
               </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
                        <Image
                        source={require('../assets/Picture.jpg')}
                        style={styles.pic}
                        />
                        <View>
                                
                                <AntDesign name="plus" size={20} color="#fff" style={styles.plus} />
                        </View>
             </TouchableOpacity>
          </View>
          <Text style={{top:26,left:17}}>My status</Text>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
    star:{
         flexDirection:'row',
         justifyContent:'space-between'
    },
    pic:{
      height:70,
      width:65,
      top:27,
      left:12,
      borderRadius:50
    },
    plus:{
     top:-3,
     borderWidth:1,
     width:25,
     height:25,
     left:58,
     borderRadius:67,
     position:'absolute',
     paddingTop:2,
     paddingLeft:3,
     backgroundColor:'#0e806a',
     borderColor:'#fff'

    },
})