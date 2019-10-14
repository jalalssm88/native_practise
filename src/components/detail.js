import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View,  } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class DetailsScreen extends React.Component {
    render() {
      return (
        <Container>
        <Header>
          <Left>
              <Feather onPress={() => this.props.navigation.goBack()} name="arrow-left" size={30} color='white' />
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
            <Text>Detail screens</Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>screen 2</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      );
    }
}


