import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const Chat = ({data}) => {
  return (
    <View>
            <TouchableOpacity >
          <View style={{flexDirection:'row',marginTop:19}}>
              <Image
              source={data.Pic}
              style={styles.ChatPic}
              />
              <Text style={{left:32,top:19,fontSize:19}}>{data.name}</Text>
              
            </View>
          </TouchableOpacity>
          <Text style={{textAlign:'right',bottom:40,right:18}}>{data.Time}</Text>
           
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    ChatPic:{
        height:50,
        width:50,
        left:12,
        borderRadius:50,
        marginTop:15
    }
})