import ajax from './ajax'
import axios from 'axios'
import json from 'jsonp'
import {message} from 'antd'
// login
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

// location
export const autoReqWeather = () => {
    const options = {
        method: 'GET',
        url: 'https://ip-geo-location.p.rapidapi.com/ip/check',
        params: {format: 'json'},
        headers: {
            'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com',
            'X-RapidAPI-Key': 'b7fcd15214msh483a2dbfe99e48bp16c3b7jsnef8cf992cafa'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

// weather
export const reqWeather = (city, apiKey) => {
    return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        json(url, {}, (err, data) => {
            if (!err) {
                const {description, icon} = data.weather[0]
                resolve({description, icon})
            } else {
                message.error("Weather Data Error")
            }
        })
    })
}


// add
export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST')


