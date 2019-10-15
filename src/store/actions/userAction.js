export default class Action {
    static REQUEST_API_DATA = "REQUEST_API_DATA"
    static REQUEST_API_DATA_SUCCESSS = "REQUEST_API_DATA_SUCCESSS"

    static requestApiData(payload) {
        return {
            type: Action.REQUEST_API_DATA,
            payload
        };
    }
}