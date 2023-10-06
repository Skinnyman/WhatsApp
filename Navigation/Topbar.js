import { StyleSheet} from 'react-native'
import React from 'react'
import ChatScreen from '../Screens/ChatScreen'
import StatusScreen from '../Screens/StatusScreen'
import CallScreen from '../Screens/CallScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../Screens/CommunityScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

const Topbar = () => {
  
  return (
    <>
            <Tab.Navigator
                 initialRouteName="Chat"
                  screenOptions={{
                    tabBarShowLabel:false,
                    tabBarLabelStyle: { fontSize: 12,color:'#fff', },
                    tabBarItemStyle: { width: 99,paddingTop:19,height:50,right:30, },
                    tabBarStyle: { backgroundColor: '#0e806a' },
                    tabBarIndicatorStyle:{ backgroundColor:'#fff',left:-19}
                    
                  }}
            >
            <Tab.Screen name="Community" component={CommunityScreen} 
             options={{tabBarIcon: ({focused,color}) => (
              <MaterialCommunityIcons
              name={focused ? 'account-group' : 'account-group-outline'}
              size={25}
              color={focused ? '#fff' : '#fff'}
              /> )}}
            />
            <Tab.Screen name="Chats" component={ChatScreen} 
            options={{ tabBarShowLabel:true }}
            />
            <Tab.Screen name="updates" component={StatusScreen} 
            options={{ tabBarShowLabel:true }}
            />
            <Tab.Screen name="calls" component={CallScreen} 
            options={{ tabBarShowLabel:true }}
            />
            </Tab.Navigator>
    </>
  )
}

export default Topbar

const styles = StyleSheet.create({})