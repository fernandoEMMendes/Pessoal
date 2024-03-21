import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Principal from "./pages/Principal"
import CriarUsuario from "./pages/Usuarios/CriarUsuario"
import ListarUsuario from "./pages/Usuarios/ListarUsuario"
import CriarCategoria from "./pages/Categoria/CriarCategoria"
import ListarCategoria from "./pages/Categoria/ListarCategoria"
import CriarInv from "./pages/Inv/CriarInv"
import ListarInv from "./pages/Inv/ListarInv"

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Principal" element={<Principal />} />
                    <Route path="/CriarUsuario" element={<CriarUsuario />} />
                    <Route path="/ListarUsuario" element={<ListarUsuario />} />
                    <Route path="/CriarCategoria" element={<CriarCategoria />} />
                    <Route path="/ListarCategoria" element={<ListarCategoria />} />
                    <Route path="/CriarInv" element={<CriarInv />} />
                    <Route path="/ListarInv" element={<ListarInv />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}