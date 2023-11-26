import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { authContext } from "../../Contexts"

import "./Login.scss"
//import placeholder from "../../imgs/placeholder.png"
import goldenland from "../../imgs/goldenland.jpg"

export default function Login() {
    const navigation = useNavigate()
    const { signIn } = useContext(authContext)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    //sistema de login
    async function handleLogin(e) {
        e.preventDefault(e)

        if (!email || !senha) {
            toast.warning("Campos obrigatrios não preenchidos!")
            return
        }

        try {
            let data = { email, senha }
            const response = await signIn(data)
            const token = response.data.token
            localStorage.setItem("@GLToken2023", JSON.stringify(token))
            toast.success("Login efetuado com sucesso")
            navigation("/Principal")
            return
        } catch (err) {
            toast.error("Email ou senha incorretas!")
            return
        }
    }

    return (
        <div>
            <div className="alinharTitulo">
                <img src={goldenland} alt="logo"/>
            </div>

            <div className="distancia"></div>

            <div className="alinharForm">
                <form onSubmit={handleLogin}>
                    <label>Usuário</label>
                    <br />
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <br /> <br />

                    <label>Senha</label>
                    <br />
                    <input type="password" value={senha} onChange={(e) => { setSenha(e.target.value) }} />

                    <br /> <br />

                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    )
}