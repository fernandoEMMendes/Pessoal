import { toast } from "react-toastify"
import Header from "../../../components/Header"
import apiLocal from "../../../APIs/apiLocal"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../Contexts"
import "./CriarCategoria.scss"

export default function CriarCategoria() {
    const navigation = useNavigate()
    
    const [nome, setNome] = useState("")
    const [tipo, setTipo] = useState("")

    const lsToken = localStorage.getItem("@GLToken2023")
    const token = JSON.parse(lsToken)

    const { loginToken } = useContext(AuthContext)
    useEffect(() => {

        if (!token) {
            navigation("/")
            return
        }

        loginToken()
    }, []);

    async function handleCriarCategoria(e) {
        e.preventDefault()
        try {
            if (!nome || !tipo) {
                toast.warning("Campos obrigatórios não preenchidos!")
                return
            }

            await apiLocal.post("/CriarCategoria", {
                nome, tipo
            }, {
                headers: {
                    Authorization: "Bearer " + `${token}`
                }
            })
            toast.success("Categoria criada com sucesso")

            console.log(nome, tipo)
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