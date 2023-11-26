import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Principal from "./pages/Principal"

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Principal" element={<Principal />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}