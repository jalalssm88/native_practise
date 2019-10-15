import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Card, CardItem } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {Image, TouchableOpacity} from 'react-native';

export default class SettingScreen extends React.Component {
    render() {
      return (
        <View style={{paddingHorizontal:15}}>
          <View style={{alignItems:'center'}}>
            <Feather name='menu' size={30} color='black'/>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{color:'purple', width:'50%', height:60, backgroundColor:'purple', 
            alignItems:'center', justifyContent:'center', borderTopLeftRadius:8, 
            borderBottomLeftRadius:8}}><Text>My Keys</Text></TouchableOpacity>
            <TouchableOpacity style={{color:'', width:'50%', height:60, backgroundColor:'gray', 
            alignItems:'center', justifyContent:'center', borderTopRightRadius:8, 
            borderBottomRightRadius:8}}><Text>My Keys</Text></TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{width:'50%', height:300}}>
              <Image source={require('../images/image.jpg')} style={{width:'100%', height: 300, borderRadius:15}} />
            </View>
            <View style={{width:'50%', height:200}}>
              <Image source={require('../images/image.jpg')} style={{width:'100%', height: 300, borderRadius:15}} />
            </View>
          </View>
        </View>
      );
    }
}


