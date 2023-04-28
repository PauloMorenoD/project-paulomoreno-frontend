import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { AdmPage } from "../pages/admPage"
import { Home } from "../pages/home"
import { LoginPage } from "../pages/login"
import { RegisterPage } from "../pages/register"
import { UserPage } from "../pages/userPage"

export const RouteComponent = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/register" element={ <RegisterPage/> }/>
            <Route path="/admin" element={ <AdmPage/> }/>
            <Route path="/common" element={ <UserPage/> }/>
        </Routes>
    )
}