import React, { useState} from "react";
import { weatherService } from "../../services/WeatherService";
import { useDispatch } from "react-redux";
import { GET_WEATHER } from "../../redux/types/weatherType";

export default function Search() {

    const [query , setQuery] = useState('')
    const dispatch = useDispatch()

    const search = (e) => {
        if(e.key === 'Enter'){
            weatherService.getWeatherApi(query)
            .then(res => {
                dispatch({
                    type : GET_WEATHER,
                    data : res.data
                })
            })
            .catch(err => {
                console.log(err.response.data);
            })
        }
    }

    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    );
}
