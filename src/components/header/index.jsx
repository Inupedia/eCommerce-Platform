import React, {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import { Modal } from 'antd';
import {reqWeather} from "../../api";
import LinkButton from "../linkButton";
import memoryUtils from "../../utils/memoryUtils"
import storageUtils from "../../utils/storageUtils"
import menuList from '../../config/menuConfig'
import "./index.less"

export default function Header() {

    const [location, setLocation] = useState("Salt Lake City")
    const [weatherPicNum, setWeatherPicNum] = useState("")
    const [weather, setWeather] = useState("")
    const [title, setTitle] = useState("")
    let pathName = useLocation().pathname;
    let navigate = useNavigate();

    const username = memoryUtils.user.username

    const getWeather = async () => {
        const {description, icon} = await reqWeather(location, '05f5e2c9a02ab758be978671438cc683')
        setWeatherPicNum(icon)
        setWeather(description)
    }
    getWeather().then()

    const logout = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to log out',
            okText: 'Yes',
            cancelText: 'Cancel',
            onOk() {
                storageUtils.removeUser()
                navigate("/login", { replace: true })
            }
        });
    }

    useEffect(() => {

        const getTitle = (list) => {
            list.forEach(item => {
                if (item.key === pathName) {
                    setTitle(item.title)
                } else if (item.children) {
                    getTitle(item.children)
                }
            })
        }
        getTitle(menuList)

    }, [pathName]);

    // console.log(title)

    return <div className="header">
        <div className="header-top">
            <span>Hello, {username}</span>
            {/*<a href="#" onClick={logout}>log out</a>*/}
            <LinkButton onClick={logout}>LOGOUT</LinkButton>
        </div>
        <div className="header-bottom">
            <div className={"header-bottom-left"}>
                <span>{title}</span>
            </div>
            <div className={"header-bottom-right"}>
                <span>{location}</span>
                <img src={`http://openweathermap.org/img/wn/${weatherPicNum}@2x.png`} alt=""/>
                <span>{weather}</span></div>
        </div>
    </div>
    
}