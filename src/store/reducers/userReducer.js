import { FetchActions } from '../actions';
const initialState = {
   user:[],
   loader:true
};

export default function(state = initialState, action){
    switch(action.type){
        case FetchActions.REQUEST_API_DATA_SUCCESSS:
            console.log('in reducer',action)
            return{
                ...state,
                user:action.payload,
                loader:false
            }
        default:
           return state
    }
}