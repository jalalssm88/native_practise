import axios from 'axios'
export default class httpWeatherRequest {
    static getDatas = (data) => {
        const api_key = "3b8c1473ddbdafbb242fc237dd47b3c0";
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&APPID=${api_key}`).then((res) => res).catch((err) => err.response)
    }
} 

