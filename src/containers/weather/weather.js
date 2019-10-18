import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Container, Header, Title, Content, Left, Right, Body, Spinner } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import Styles from './Style';

class WeatherScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
           data :[
            {"coord":{"lon":67.03,"lat":24.87},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":309.15,"pressure":1010,"humidity":34,"temp_min":309.15,"temp_max":309.15},"visibility":6000,"wind":{"speed":3.1,"deg":230},"clouds":{"all":0},"dt":1571391796,"sys":{"type":1,"id":7576,"message":0.0081,"country":"PK","sunrise":1571362257,"sunset":1571403781},"timezone":18000,"id":1174872,"name":"Karachi","cod":200}
           ]
        }
    }
    
    changeHandler = ()=>{
        
    }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Feather name="cloud-lightning" size={30} color='white' />
                </Left>
                <Body>
                    <Title>Weather Update</Title>
                </Body>
                <Right>
                    <Feather color="white" size={30} name='menu' />
                </Right>
                </Header>
                <Content>
                    <View style={Styles.mainContainer}>
                        <TextInput
                            style={{ height: 50, flex:2, borderColor: 'gray', borderWidth: 1, borderRadius:5, paddingHorizontal:8 , marginBottom:20}}
                            placeholder="Country!"
                            onChangeText={this.changeHandler}
                        />
                        <TextInput
                            style={{ height: 50, flex:2, borderColor: 'gray', borderWidth: 1, borderRadius:5, paddingHorizontal:8 }}
                            placeholder="City!"
                            onChangeText={this.changeHandler}
                        />
                        <TouchableOpacity 
                            style={{ backgroundColor:'#4ebfd9',height:50, flex:1, marginHorizontal:3, justifyContent:'center',borderRadius:5, alignItems:"center", marginTop:20 }}
                            >
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'white', fontSize:21}}>Search</Text>
                                <Text style={{color:'white', marginHorizontal:4}}><Feather style={{marginTop:20}} name="arrow-right" size={29} color='white'/> </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) =>{
    return{
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherScreen)