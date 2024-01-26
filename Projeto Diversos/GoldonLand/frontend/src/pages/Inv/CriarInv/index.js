import { useNavigate } from "react-router-dom"
import Header from "../../../components/Header"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../../Contexts"
import { toast } from "react-toastify"
import apiLocal from "../../../APIs/apiLocal"

export default function CriarInv() {
    const navigation = useNavigate()

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [forca, setForca] = useState("")
    const [precisao, setPrecisao] = useState("")
    const [defesa, setDefesa] = useState("")
    const [pc_critico, setPc_critico] = useState("")
    const [mp_dano, setMp_dano] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [usuarioId, setUsuarioId] = useState("")
    const [categoriaId, setCategoriaId] = useState("")

    const lsToken = localStorage.getItem("@GLToken2023")
    const token = JSON.parse(lsToken)

    const { loginToken } = useContext(AuthContext)
    useEffect(() => {
        if (!token) {
            navigation("/")
            return
        }

        loginToken()
    }, [])

    async function handleCriarInv(e) {
        e.preventDefault()
        try {
            if (!nome ||
                !descricao ||
                !forca ||
                !precisao ||
                !defesa ||
                !pc_critico ||
                !mp_dano ||
                !quantidade ||
                !usuarioId ||
                !categoriaId) {
                toast.warning("Campos obrigatórios não preenchidos!")
                return
            }

            await apiLocal.post("/")
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

            <div>
                <h1>Criar Inv</h1>
            </div>
        </div>
    )
}