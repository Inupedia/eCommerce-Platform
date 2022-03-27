import React from "react"
import './App.less'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="admin" element={<Admin/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
