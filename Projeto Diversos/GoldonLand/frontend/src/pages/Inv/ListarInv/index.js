import Header from "../../../components/Header"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import apiLocal from "../../../APIs/apiLocal"
import "./ListarInv.scss"

export default function ListarInv(){
    const navigation = useNavigate()

    const [listarInventario, setListarInventario] = useState([""])

    const lsToken = localStorage.getItem("@GLToken2023")
    const token = JSON.parse(lsToken)

    useEffect(()=>{
        async function verInventario(){
            const resposta = await apiLocal.get("/ListarItem")
            setListarInventario(resposta.data)
        }
        verInventario()
    },[listarInventario])

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="alinharTabela">
                <h1>Listar Inventário</h1>

                <table className="caixa">
                    <tr>
                        <th>ID</th>
                        <th>🎭NOME🎭</th>
                        <th>🎫DESCRIÇÃO🎫</th>
                        <th>🦾FORÇA🦾</th>
                        <th>🧿PRECISAO🧿</th>
                        <th>🛡DEFESA🛡</th>
                        <th>👁‍🗨PC DE CRÍTICO👁‍🗨</th>
                        <th>💫MP DE DANO💫</th>
                        <th>🧧QUANTIDADE🧧</th>
                        <th>ALTERAR</th>
                        <th>DELETAR</th>
                    </tr>
                    {listarCategoria.map((resultados) => {
                        return (
                            <tr key={resultados.id}>
                                <th>{resultados.id}</th>
                                <th>{resultados.nome}</th>
                                <th>{resultados.descricao}</th>
                                <th>{resultados.forca}</th>
                                <th>{resultados.precisao}</th>
                                <th>{resultados.defesa}</th>
                                <th>{resultados.pc_critico}</th>
                                <th>{resultados.mp_dano}</th>
                                <th>{resultados.quantidade}</th>
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