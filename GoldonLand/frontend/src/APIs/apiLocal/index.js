import axios from "axios"

const apiLocal = axios.create({
    baseURL: "http://localhost:4444"
})

export default apiLocal