import { toast } from "react-toastify"
import Header from "../../../components/Header"
import apiLocal from "../../../APIs/apiLocal"
import {  useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CriarCategoria.scss"

export default function CriarCategoria() {
    const navigation = useNavigate()

    const [nome, setNome] = useState("")
    const [tipo, setTipo] = useState("")

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

    async function handleCriarCategoria(e) {
        e.preventDefault()
        try {
            if (!nome || !tipo) {
                toast.warning("Campos obrigatórios não preenchidos!")
                return
            }

            await apiLocal.post("/CriarCategoria", {
                nome, tipo
            })
            toast.success("Categoria criada com sucesso")
        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="distancia"></div>

            <div className="alinharForm">
                <h1 className="titulo">Criar Categoria</h1>

                <br />

                <form onSubmit={handleCriarCategoria}>
                    <label>Nome</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /> <br />

                    <label>Tipo</label>
                    <br />
                    <input type="text" value={tipo} onChange={(e) => { setTipo(e.target.value) }} />

                    <br /> <br />

                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}