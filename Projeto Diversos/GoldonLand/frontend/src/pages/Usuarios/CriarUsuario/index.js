import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiLocal from "../../../APIs/apiLocal"
import { toast } from "react-toastify"

export default function CriarUsuario() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigation = useNavigate()

    async function handleCriarConta(e) {
        e.preventDefault()
        try {
            if (!nome || !email || !senha) {
                toast.warning("Campos obrigatrios não preenchidos!")
                return
            }

            await apiLocal.post("/CriarUsuario", {
                nome, email, senha
            })
            toast.success("Usuário cadastrado com sucesso")
            navigation("/")

        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }

    return (
        <div>

            <div className="distancia"></div>

            <div className="alinharForm">
                <form onSubmit={handleCriarConta}>
                    <label>Nome</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /><br />

                    <label>Email</label>
                    <br />
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <br /><br />

                    <label>Senha</label>
                    <br />
                    <input type="password" value={senha} onChange={(e) => { setSenha(e.target.value) }} />

                    <br /><br />

                    <button type="submit">Cadastrar</button>
                </form>
                <br />
                <a href="/"><button>Retornar</button></a>
            </div>
        </div>
    )
}