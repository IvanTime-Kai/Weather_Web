import axios from "axios"


class WeatherService {
    getWeatherApi = (cityName) => {
        return axios({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8be3737c6dc75bb2073a0e44ff20dc72`,
            method : 'GET'
        })
    }
}

export const weatherService = new WeatherService()