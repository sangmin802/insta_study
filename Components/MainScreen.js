import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeTab from './AppTabNavigator/HomeTab.js'
import SearchTab from './AppTabNavigator/SearchTab.js'
import AddMediaTab from './AppTabNavigator/AddMediaTab.js'
import LikesTab from './AppTabNavigator/LikesTab.js'
import ProfileTab from './AppTabNavigator/ProfileTab.js'

export default class MainScreen extends React.Component {
  render(){
    return (
      <Tab.Navigator
        screenOptions={({ route : { name } }) => ({
          tabBarIcon : ({ focused, color, size }) => {
            let iconName;
            if(name === 'Home'){
              iconName = 'ios-home';
            }else if(name === 'Search'){
              iconName = 'ios-search';
            }else if(name === 'AddMedia'){
              iconName = 'ios-add-circle';
            }else if(name === 'Likes'){
              iconName = 'ios-heart';
            }else if(name === 'Profile'){
              iconName = 'ios-person';
            };
            return <Ionicons name={iconName} size={26} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor : '#000',
          inactiveTintColor : '#d1cece',
          showLabel : false,
          showIcon : true,
          indicatorStyle : {
            width : 0
          },
        }}
        tabBarPosition='bottom'
        backBehavior='history'
      >
        <Tab.Screen name="Home" component={HomeTab}/>
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="AddMedia" component={AddMediaTab} />
        <Tab.Screen name="Likes" component={LikesTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
    );
  }
}

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
