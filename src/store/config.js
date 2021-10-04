import { combineReducers, createStore } from "redux";
import weatherReducer from "../redux/reducers/weatherReducer";

const rootReducer =  combineReducers({
    weatherReducer
})

const store = createStore(rootReducer)

export default store