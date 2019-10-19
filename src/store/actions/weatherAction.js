export default class Action {
    static REQUEST_WEATHER_DATA = "REQUEST_WEATHER_DATA"
    static REQUEST_WEATHER_DATA_SUCESS = "REQUEST_WEATHER_DATA_SUCESS"

    static requestWeatherData(payload) {
        return {
            type: Action.REQUEST_WEATHER_DATA,
            payload
        };
    }
}