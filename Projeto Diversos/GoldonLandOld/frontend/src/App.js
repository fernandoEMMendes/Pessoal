import Rotas from "./routes"
import "./App.scss"
import AuthProvider from "./Contexts"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'

export default function App() {
  return (
    <AuthProvider>
      <div className="align">
        <ToastContainer 
        autoClose={5000} 
        position="top-right"
        theme="dark"
        />
        <Rotas />
      </div>
    </AuthProvider>
  )
}