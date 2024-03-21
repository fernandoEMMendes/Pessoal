
//Não utiliziado

import { createContext, useState } from "react"
import { toast } from "react"
import apiLocal from "../APIs/apiLocal"

export const AuthContext = createContext()

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
            if (err.response.status === 401) {
                setUser("")
            }
            toast.warning("Erro ao validar login!")
            return
        }
    }

    async function signIn({ email, password }) {
        try {
            const response = await apiLocal.post("/Login", {
                email,
                password
            })
            return response
        } catch (err) {
            toast.warning("Erro ao fazer login!")
            return
        }
    }

    return (
        <AuthContext.Provider value={{ isAuth, signIn, loginToken }}>
            {children}
        </AuthContext.Provider>
    )
}