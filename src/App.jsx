import React from "react"
import './App.less'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login/login"
import Dashboard from "./pages/dashboard/dashboard";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Dashboard/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
