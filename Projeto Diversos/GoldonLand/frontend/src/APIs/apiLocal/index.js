import axios from "axios"

const apiLocal = axios.create({
    baseURL: "http://localhost:4444",
    headers: {
        Authorization: "Bearer " + `${token}`
    }
})

export default apiLocal

//Enviando o header no env não é necessário chama-lo em outras páginas