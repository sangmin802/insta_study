import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from './Components/MainScreen.js';
import DetailScreen from './Components/DetailScreen.js';

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <View style={this.statusBar()}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign : 'center',
            }}
          >
            <Stack.Screen 
              name="Main"
              component={MainScreen}
              options={{
                headerShown : false,
              }}
            />
            <Stack.Screen 
              name="Detail"
              component={DetailScreen}
              options={{
                headerShown : false,
              }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    );
  }

  statusBar(){
    if(Platform.OS === 'android'){
      return {
        marginTop : StatusBar.currentHeight,
        flex : 1
      }
    }
    return {
      flex : 1
    }
  }  
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({

});
