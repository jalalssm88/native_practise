import axios from 'axios'
export default class httpRequest {
    static getMethord = ()=>{
        return axios.get('https://randomuser.me/api').then((res)=> res)
    }
} 


