import { useNavigate } from "react-router-dom"
import Header from "../../../components/Header"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import apiLocal from "../../../APIs/apiLocal"
import "./CriarInv.scss"

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

    const [verCategoria, setVerCategoria] = useState([""])
    const [verUsuario, setVerUsuario] = useState([""])

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

    async function handleCriarInv(e) {
        e.preventDefault()
        console.log(nome, descricao, forca, precisao, defesa,
            pc_critico, mp_dano, quantidade, usuarioId, categoriaId)
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

            await apiLocal.post("/CriarItem", {
                nome, descricao, forca, precisao, defesa,
                pc_critico, mp_dano, quantidade, usuarioId, categoriaId
            })
            toast.success("Item criado com sucesso")
        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }

    useEffect(() => {
        async function mostrarCategoria() {
            const resposta = await apiLocal.get("/ListarCategoria")
            setVerCategoria(resposta.data)
        }
        mostrarCategoria()

        async function mostrarUsuario() {
            const resposta = await apiLocal.get("ListarUsuario")
            setVerUsuario(resposta.data)
        }
        mostrarUsuario()
    }, [verCategoria || verUsuario])

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="distancia"></div>

            <div className="alinharForm">
                <h1 className="titulo">Criar Item</h1>

                <br />

                <form onSubmit={handleCriarInv}>
                    <label>Nome</label>
                    <br />
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <br /> <br />

                    <label>Descrição</label>
                    <br />
                    <input type="text" value={descricao} onChange={(e) => { setDescricao(e.target.value) }} />

                    <br /> <br />

                    <label>Força</label>
                    <br />
                    <input type="number" value={forca} onChange={(e) => { setForca(e.target.value) }} />

                    <br /> <br />

                    <label>Precisão</label>
                    <br />
                    <input type="number" value={precisao} onChange={(e) => { setPrecisao(e.target.value) }} />

                    <br /> <br />

                    <label>defesa</label>
                    <br />
                    <input type="number" value={defesa} onChange={(e) => { setDefesa(e.target.value) }} />

                    <br /> <br />

                    <label>% de crítico</label> <br />
                    <label>(0 = sem  crítico e 100 = garantido)</label>
                    <br />
                    <input type="number" value={pc_critico} onChange={(e) => { setPc_critico(e.target.value) }} />

                    <br /> <br />

                    <label>Multiplicador do crítico</label>
                    <br />
                    <input type="number" value={mp_dano} onChange={(e) => { setMp_dano(e.target.value) }} />

                    <br /> <br />

                    <label>quantidade</label>
                    <br />
                    <input type="number" value={quantidade} onChange={(e) => { setQuantidade(e.target.value) }} />

                    <br /> <br />

                    <label>usuário</label>
                    <br />

                    <select value={usuarioId} onChange={(e) => { setUsuarioId(e.target.value) }}>
                        <option>-Selecione um-</option>
                        {verUsuario.map((resultados) => {
                            return (
                                <option value={resultados.id} id={resultados.id}>
                                    {resultados.email}
                                </option>
                            )
                        })}
                    </select>

                    <br /> <br />

                    <label>categoria</label>
                    <br />

                    <select value={categoriaId} onChange={(e) => { setCategoriaId(e.target.value) }}>
                        <option>-Selecione um-</option>
                        {verCategoria.map((resultados) => {
                            return (
                                <option value={resultados.id} id={resultados.id}>
                                    {resultados.email}
                                </option>
                            )
                        })}
                    </select>

                    <br /> <br />

                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}