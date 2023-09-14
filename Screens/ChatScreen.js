import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Chat from '../Component/Chat'
import { ChatData } from '../Data/ChatData'


const ChatScreen = () => {
  return (
    <View>
      <ScrollView>
        {
          ChatData.map(item =>(
            <View key={item.id}>
                      <Chat data={item}/>  
            </View>
          )

          )
        }
          
       </ScrollView>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
 
})