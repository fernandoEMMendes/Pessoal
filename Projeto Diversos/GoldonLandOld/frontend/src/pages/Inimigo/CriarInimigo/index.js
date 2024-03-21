import { toast } from "react-toastify"
import Header from "../../../components/Header"
import apiLocal from "../../../APIs/apiLocal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CriarInimigo.scss"

export default function CriarInimigo() {
    const navigation = useNavigate()

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [img, setImg] = useState("")
    const [pv, setPv] = useState("")
    const [forca, setForca] = useState("")
    const [precisao, setPrecisao] = useState("")
    const [recompensa, setRecompensa] = useState("")
    const [recompensa2, setRecompensa2] = useState("")
    const [recompensa3, setRecompensa3] = useState("")
    const [categoriaId, setCategoriaId] = useState("")

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

    function handleImg(e) {
        if (!e.target.files) {
            alert("imagem faltando!")
            return
        }
        const imagem = e.target.files[0]
        if (imagem.type === "image/png") {
            setImg(imagem)
        }
    }

    async function handleCriarInimigo(e) {
        e.preventDefault()
        try {
            if (!nome || !descricao || !img || !categoriaId) {
                toast.warning("Campos obrigatórios não preenchidos!")
                return
            }

            await apiLocal.post("/CriarCategoria", {
                nome, descricao, img, pv, forca, recompensa, recompensa2, recompensa3, categoriaId
            })
            toast.success("Inimigo criado com sucesso")
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
                <h1 className="titulo">Criar Inimigo</h1>

                <br />

                <form onSubmit={handleCriarInimigo}>
                    <label>Nome</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /> <br />

                    <label>Descrição</label>
                    <br />
                    <input type="text" value={descricao} onChange={(e) => { setDescricao(e.target.value) }} />

                    <br /> <br />

                    <label>Imagem (Somente PNGs)</label>
                    <br />
                    <input type="file" accept="image/png" onChange={handleImg} />

                    <br /> <br />

                    <label>Pontos de vida</label>
                    <br />
                    <input type="number" value={pv} onChange={(e) => { setPv(e.target.value) }} />

                    <br /> <br />

                    <label>Força</label>
                    <br />
                    <input type="number" value={forca} onChange={(e) => { setForca(e.target.value) }} />

                    <br /> <br />

                    <label>Precisão</label>
                    <br />
                    <input type="number" value={precisao} onChange={(e) => { setPrecisao(e.target.value) }} />

                    <br /> <br />

                    <label>Recompensa</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /> <br />

                    <label>Recompensa2</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /> <br />

                    <label>Recompensa3</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /> <br />

                    <label>CategoriaId</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /> <br />

                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}