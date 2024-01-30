import { useNavigate } from "react-router-dom"
import Header from "../../../components/Header"
import { useEffect, useState } from "react"
import apiLocal from "../../../APIs/apiLocal"
import "./ListarCategoria.scss"

export default function ListarCategoria() {
    const navigation = useNavigate()

    const [listarCategoria, setListarCategoria] = useState([""])

    const lsToken = localStorage.getItem("@GLToken2023")
    const token = JSON.parse(lsToken)

    useEffect(() => {
        async function verificaToken() {
            const response = await apiLocal.get("/ListarUnicoUsuario")

            if (response.data.dados) {
                navigation("/")
                return
            }
        }
        verificaToken()
    }, [token])

    useEffect(() => {
        async function verCategorias() {
            const resposta = await apiLocal.get("/ListarCategoria")
            setListarCategoria(resposta.data)
        }
        verCategorias()
    }, [listarCategoria]);

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="alinharTabela">
                <h1>Listar Categoria</h1>

                <table className="caixa">
                    <tr>
                        <th>ID</th>
                        <th>🎭NOME🎭</th>
                        <th>🎫TIPO🎫</th>
                        <th>ALTERAR</th>
                        <th>DELETAR</th>
                    </tr>
                    {listarCategoria.map((resultados) => {
                        return (
                            <tr key={resultados.id}>
                                <th>{resultados.id}</th>
                                <th>{resultados.nome}</th>
                                <th>{resultados.tipo}</th>
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