import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from './Components/MainScreen.js';

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign : 'center',
          }}
        >
          <Stack.Screen 
            name="Main"
            component={MainScreen}
            options={{
              title : 'Instagram',
              headerLeft : () => (<Ionicons name='ios-camera' size={32} style={{ paddingLeft : 10 }} />),
              headerRight : () => (<Ionicons name='ios-send' size={32} style={{ paddingRight : 10 }} />)
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
});
