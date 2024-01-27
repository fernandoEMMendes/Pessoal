import "./Principal.scss"
import { useNavigate } from "react-router-dom"
import React, { useEffect } from "react"
import apiLocal from "../../APIs/apiLocal"

import Header from "../../components/Header"

export default function Principal() {

    const navigation = useNavigate()

    const lsToken = localStorage.getItem("@GLToken2023")
    const token = JSON.parse(lsToken)

    useEffect(() => {

        if (!token) {
            navigation("/")
            return
        } else if (token) {
            async function verificaToken() {
                const response = await apiLocal.get("/ListarUnicoUsuario", {
                    headers: {
                        Authorization: "Bearer " + `${token}`
                    }
                })

                if (response.data.dados) {
                    navigation("/")
                    return
                }
            }
            verificaToken()
        }

    }, []);

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="alinharTitulo">
                <h1>Principal</h1>
            </div>

            <br /> <br />

            <div className="alinharBotoes">
                <a href="/ListarUsuario">
                    <button>Listar Usuarios</button>
                </a>
            </div>

            <br />

            <div className="alinharBotoes">
                <a href="/CriarCategoria">
                    <button>Criar Categoria</button>
                </a>

                <a href="/ListarCategoria">
                    <button>Listar Categoria</button>
                </a>
            </div>

            <br />

            <div className="alinharBotoes">
                <a href="/CriarInv">
                    <button>Criar Inv</button>
                </a>

                <a href="/ListarInv">
                    <button>Listar inv</button>
                </a>
            </div>
        </div>
    )
}