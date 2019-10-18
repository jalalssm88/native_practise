import React from "react";
import { Image, } from 'react-native';
import {UserScreen, TodoScreen, WeatherScreen} from '../containers/'
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabsStack = createBottomTabNavigator({
  User: { screen: UserScreen,
    navigationOptions : {
      tabBarLabel: 'Users',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='users' size={16} color={tintColor}></Feather>
      )
    }
   },

   Todo: { screen: TodoScreen,
    navigationOptions : {
      tabBarLabel: 'Todos',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='align-center' size={16} color={tintColor}></Feather>
      )
    }
   },

   Weather: { screen: WeatherScreen,
    navigationOptions : {
      tabBarLabel: 'Weather',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='cloud-lightning' size={16} color={tintColor}></Feather>
      )
    }
   },
},
  {
    initialRouteName: 'User',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor:'#000',
      labelStyle: {
        fontSize: 12,
        marginBottom:5
      },
      style: {
        backgroundColor: 'blue',
        borderTopRightRadius:1,
        borderTopLeftRadius:1
      },
      labelStyle:{
        fontSize:12
      }
    }
  }
)
export default TabsStack