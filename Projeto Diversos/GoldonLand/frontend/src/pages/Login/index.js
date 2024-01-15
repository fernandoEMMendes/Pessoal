import React, { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from "../../Contexts"
import apiLocal from "../../APIs/apiLocal"

import "./Login.scss"
//import placeholder from "../../imgs/placeholder.png"
import goldenland from "../../imgs/goldenland4.png"

export default function Login() {
    const navigation = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        const lsToken = localStorage.getItem("@GLToken2023")
        const token = JSON.parse(lsToken)

        if (!token) {
            navigation('/')
            return
        } else if (token) {
            async function verificaToken() {
                const resposta = await apiLocal.get("/ListarUnicoUsuario", {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })

                if (resposta.data.dados) {
                    navigation('/')
                    return
                } else if (resposta.data.id) {
                    navigation('/Principal')
                }
            }
            verificaToken()
        }
    }, [])

    async function handleLogin(e) {
        e.preventDefault(e)

        if (!email || !password) {
            toast.warning("Campos obrigatrios não preenchidos!")
            return
        }

        try {
            let data = {
                email,
                password
            }
            const response = await signIn(data)
            const token = response.data.token
            localStorage.setItem("@GLToken2023", JSON.stringify(token))
            console.log(response)

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
                <img src={goldenland} alt="logo" />
            </div>

            <div className="distancia"></div>

            <div className="alinharForm">
                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <br />
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <br /> <br />

                    <label>Senha</label>
                    <br />
                    <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />

                    <br /> <br />

                    <button type="submit">LOGIN</button>
                </form>

                <br /> <br />

                <a className="Link" href="/CriarUsuario">
                    <button>Novo? Cadastre-se!</button>
                </a>

                <br /> <br />
            </div>
        </div>
    )
}