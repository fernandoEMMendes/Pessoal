import Header from "../../../components/Header"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import apiLocal from "../../../APIs/apiLocal"
import "./ListarUsuario.scss"

export default function ListarUsuario() {
    const navigation = useNavigate()

    const [listarUsuario, setListarUsuario] = useState([""])

    const lsToken = localStorage.getItem("@GLToken2023")
    const token = JSON.parse(lsToken)

    useEffect(() => {
        async function verificaToken() {
            const response = await apiLocal.get("/ListarUnicoUsuario")

            if (response.status === 401) {
                navigation("/")
                return
            }
        }
        verificaToken()
    }, [token])

    useEffect(() => {
        async function verUsuarios() {
            const resposta = await apiLocal.get("/ListarUsuario")
            setListarUsuario(resposta.data)
        }
        verUsuarios()
    }, [listarUsuario])

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="alinharTabela">
                <h1>Listar Usuario</h1>

                <table className="caixa">
                    <tr>
                        <th>ID</th>
                        <th>🎫EMAIL🎫</th>
                        <th>🔑SENHA🔑</th>
                        <th>ALTERAR</th>
                        <th>DELETAR</th>
                    </tr>
                    {listarUsuario.map((resultados) => {
                        return (
                            <tr key={resultados.id}>
                                <th>{resultados.id}</th>
                                <th>{resultados.email}</th>
                                <th>{"( ͡° ͜ʖ ͡°)"}</th>
                                <th>🖊</th>
                                <th>❌</th>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}