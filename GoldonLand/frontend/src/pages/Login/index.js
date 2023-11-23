import { useState } from "react"

import "./Login.scss"
import placeholder from "../../imgs/placeholder.png"

export default function Login() {
    const [nome, setNome] = useState("")
    const [password, setPassword] = useState("")


    //sistema de login


    return (
        <div>
            <div className="alinharTitulo">
                <img src={placeholder} />
            </div>

            <div className="distancia"></div>

            <div className="alinharForm">
                <form>
                    <label>Usuário</label>
                    <br />
                    <input type="text" />

                    <br />

                    <label>Senha</label>
                    <br />
                    <input type="password" />

                    <br /> <br />

                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    )
}