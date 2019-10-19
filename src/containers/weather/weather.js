import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Container, Header, Title, Content, Left, Right, Body, Spinner, Card, CardItem } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import Styles from './Style';

import {WeatherActions} from '../../store/actions/'

class WeatherScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
           city:'',
           country:'',
           is_submit:false
        }
    }
    
    submitHandler = ()=>{
        this.setState({
            is_submit:true
        })
        this.props.submitWeatherData({'country':this.state.country, 'city':this.state.city})
    }
    render() {
        const {name, weather, main, wind, clouds} = this.props.weather.weather_data
        const {loader} = this.props.weather
        const {is_submit} = this.state
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
                            value={this.state.country}
                            onChangeText={(country) => this.setState({country})}
                        />
                        <TextInput
                            style={{ height: 50, flex:2, borderColor: 'gray', borderWidth: 1, borderRadius:5, paddingHorizontal:8 }}
                            placeholder="City!"
                            value={this.state.city}
                            onChangeText={(city) => this.setState({city})}
                        />
                        <TouchableOpacity 
                            onPress={this.submitHandler}
                            style={{ backgroundColor:'#4ebfd9',height:50, flex:1, marginHorizontal:3, justifyContent:'center',borderRadius:5, alignItems:"center", marginTop:20 }}
                            >
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'white', fontSize:21}}>Search</Text>
                                <Text style={{color:'white', marginHorizontal:4}}><Feather style={{marginTop:20}} name="arrow-right" size={29} color='white'/> </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{marginTop:20}}>

                           {
                                loader == true? <View style={{width:'100%', height:350, backgroundColor:'#FFFFFF', alignItems:'center', justifyContent:'center'}}>
                                    <Spinner color='red' />
                                </View>:
                               <Card>
                                   {
                                       console.log('heerer inside card')
                                   }
                                <CardItem>
                                    <Body>
                                        <View>
                                            <Text style={Styles.weatherHeader}>Current Weather of {name}</Text>
                                        </View>
                                        <View style={{flexDirection:'row'}}>
                                            <Feather name='cloud' size={50} />
                                            <Text style={Styles.temp}>{Math.round(main.temp-277)} C</Text>
                                        </View>
                                        <View style={{borderTopWidth:1, borderColor:'black', width:'100%', paddingTop:10}}>
                                            <Text style={Styles.descFont}>Description: {weather[0].description}</Text>
                                            <Text style={Styles.descFont}>Humidity: {main.humidity}</Text>
                                            <Text style={Styles.descFont}>Wind Speed: {wind.speed} km/hr</Text>
                                            <Text style={Styles.descFont}>Clouds: {clouds.all} %</Text>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                           }
                            
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    weather:state.weather
});
const mapDispatchToProps = (dispatch) =>{
    return{
        submitWeatherData:(e)=>dispatch(WeatherActions.requestWeatherData(e))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherScreen)