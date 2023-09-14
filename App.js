import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './Screens/MainScreen';
import MessageScreen from './Screens/MessageScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
       
      />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


