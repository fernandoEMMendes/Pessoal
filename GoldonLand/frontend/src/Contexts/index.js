import { createContext, useState } from "react"
import { toast } from "react"
import apiLocal from "../APIs/apiLocal"

export const authContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState("")
    const isAuth = !!user

    const lsToken = localStorage.getItem("@GLToken2023")
    const token = JSON.parse(lsToken)

    async function loginToken() {
        try {
            const response = await apiLocal.get("/ListarUnicoUsuario", {
                headers: {
                    Authorization: "Bearer " + `${token}`
                }
            })
            setUser(response.data.id)
        } catch (err) {
            toast.warning("Erro ao validar login!")
            return
        }
    }

    async function signIn({ email, senha }) {
        try {
            const response = await apiLocal.post("/Login", {
                email, senha
            })
            return response
        } catch (err) {
            toast.warning("Erro ao validar login!")
            return
        }
    }

    return (
        <authContext.Provider value={{ isAuth, signIn, loginToken }}>
            {children}
        </authContext.Provider>
    )
}