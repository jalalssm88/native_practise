import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Form,
Item, Label, Input, View, Spinner } from 'native-base';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux'
import { FetchActions } from '../../store/actions/';


class UserScreen extends React.Component {
    componentDidMount(){
      console.log
      this.props.requestApiDatas();
      console.log('compo did mount')
    }
    render() {
      console.log('propsss', this.props.user)
      const {loader} = this.props.user
     
      return (
        <Container>
        <Header>
          <Left>
            <Feather name="users" size={30} color='white' />
          </Left>
          <Body>
            <Title>Users List</Title>
          </Body>
          <Right>
                <Feather color="white" size={30} name='menu' />
          </Right>
        </Header>
        <Content>
          <View style={{marginHorizontal:20, paddingVertical:30}}>
            <Text style={{marginBottom:20, fontWeight:'bold', fontSize:20, borderBottomWidth:1}}>User Personal Detail</Text>
            {
              loader == true? <View style={{width:'100%', height:685, backgroundColor:'#FFFFFF', alignItems:'center', justifyContent:'center'}}>
                <Spinner color='red' />
              </View>:
              <View>
                <Image source={{uri: this.props.user.user.picture.large}} style={{width:'100%', height: 400, resizeMode:'contain'}} />
                <View style={{flexDirection:'row' ,fontSize:22, fontWeight:'bold', paddingVertical:4}}>
                  <Feather color="black" size={25} name='user' />
                  <Text style={{marginLeft:20, marginTop:5}}>Name: {this.props.user.user.name.first}</Text>
                </View>
                <View style={{flexDirection:'row' ,fontSize:22, fontWeight:'bold', paddingVertical:4}}>
                  <Feather color="black" size={25} name='mail' />
                  <Text style={{marginLeft:20, marginTop:5}}>Email: {this.props.user.user.email}</Text>
                </View>
                <View style={{flexDirection:'row' ,fontSize:22, fontWeight:'bold', paddingVertical:4}}>
                  <Feather color="black" size={25} name='phone' />
                  <Text style={{marginLeft:20, marginTop:5}}>Phone No: {this.props.user.user.phone}</Text>
                </View>
                <View style={{flexDirection:'row' ,fontSize:22, fontWeight:'bold', paddingVertical:4}}>
                  <Feather color="black" size={25} name='map-pin' />
                  <Text style={{marginLeft:20, marginTop:5}}>Country: {this.props.user.user.location.country}</Text>
                </View>
              </View>
            }
          </View>
        </Content>
      </Container>
      );
    }
}

const mapStateToProps = (state)=>({
  user:state.user
})

const mapDispatchToProps = (dispatch) =>{
  return{
      requestApiDatas:(e)=>{
        console.log('api callllllllllll in component')
          dispatch(FetchActions.requestApiData())
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserScreen)