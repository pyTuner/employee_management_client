import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EmpDirectory from "../pages/EmpDirectory";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/login" Component={Login}/>
                <Route path="/dashboard" Component={Dashboard}/>
                <Route path="/" Component={EmpDirectory}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;