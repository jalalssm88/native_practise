import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View,  } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

import AppNavigator2 from './detail'
import AboutScreen from './about'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen  extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
              <Feather name="aperture" size={30} color='white' />
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
                <Feather color="white" size={30} name='menu' />
          </Right>
        </Header>
        <Content>
          <View>
            <Text>Home screens</Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Details')}>
              <Text>go detail</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('About')}>
              <Text>go about</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details:{
    screen: AppNavigator2,
  },
  About:{
    screen: AboutScreen
  }
},
{
  headerMode:"none",
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);