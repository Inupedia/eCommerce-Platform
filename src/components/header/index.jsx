import React, {useState, useEffect} from "react";
import {reqWeather} from "../../api";
import memoryUtils from "../../utils/memoryUtils"
import "./index.less"

export default function Header() {

    const [location, setLocation] = useState("Salt Lake City")
    const [weatherPicNum, setWeatherPicNum] = useState("")
    const [weather, setWeather] =useState("")

    const username = memoryUtils.user.username

    useEffect(() => {
        const getWeather = async () => {
            const {description, icon} = await reqWeather(location, '05f5e2c9a02ab758be978671438cc683')
            setWeatherPicNum(icon)
            setWeather(description)
        }
        getWeather()
    }, []);


    return <div className="header">
        <div className="header-top">
            <span>Hello, {username}</span>
            <a href="javascript:">log out</a>
        </div>
        <div className="header-bottom">
            <div className={"header-bottom-left"}>
                <span>Home</span>
            </div>
            <div className={"header-bottom-right"}>
                <span>{location}</span>
                <img src={`http://openweathermap.org/img/wn/${weatherPicNum}@2x.png`} alt=""/>
                <span>{weather}</span></div>
        </div>
    </div>
}