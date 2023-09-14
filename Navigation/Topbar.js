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
                    tabBarItemStyle: { width: 103,paddingTop:19,height:50,right:33 },
                    tabBarStyle: { backgroundColor: '#0e806a' },
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
            <Tab.Screen name="Chat" component={ChatScreen} 
            options={{ tabBarShowLabel:true }}
            />
            <Tab.Screen name="status" component={StatusScreen} 
            options={{ tabBarShowLabel:true }}
            />
            <Tab.Screen name="call" component={CallScreen} 
            options={{ tabBarShowLabel:true }}
            />
            </Tab.Navigator>
    </>
  )
}

export default Topbar

const styles = StyleSheet.create({})