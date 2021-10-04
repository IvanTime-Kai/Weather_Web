import { GET_WEATHER } from "../types/weatherType"

const initialState = {
    weather : {}
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_WEATHER : {
            console.log(action.data)
            state.weather = action.data
            return {...state}
        }
        default :
            return state
    }
}

export default weatherReducer