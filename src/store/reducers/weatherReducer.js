import { WeatherActions } from '../actions';
const initialState = {
   weather_data:[],
   loader:false
};

export default function(state = initialState, action){
    switch(action.type){
        case WeatherActions.REQUEST_WEATHER_DATA:
            return{
                ...state,
                loader:true
            }
        case WeatherActions.REQUEST_WEATHER_DATA_SUCESS:
            console.log('in reducer',action)
            return{
                ...state,
                weather_data:action.payload,
                loader:false
            }
        default:
           return state
    }
}