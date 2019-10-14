import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Card, CardItem } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';


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
            <Title>About section</Title>
          </Body>
          <Right>
                <Feather color="white" size={30} name='menu' />
          </Right>
        </Header>
        <Content>
          <View style={{paddingHorizontal:10, paddingVertical:30}}>
          <Card>
              <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold', fontSize:18}}>
                      Picture of the day 
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            <Image style={{width:'100%', height:400}}  source={require('../images/jalal.jpg')} />
          </View>

        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>detail footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      );
    }
}


