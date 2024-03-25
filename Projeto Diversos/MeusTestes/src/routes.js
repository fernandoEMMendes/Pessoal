import { BrowserRouter, Routes, Route, } from "react-router-dom"

import Home from "./Pages/Home"

import Test_TurnBased from "./Pages/Test_TurnBased"
import Test_ClickerGame from "./Pages/Test_ClickerGame"
import Gasolina from "./Pages/dasdasdasdas"


function Rotas() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Test_TurnBased" element={<Test_TurnBased />} />
                        <Route path="/Test_ClickerGame" element={<Test_ClickerGame />} />
                        <Route path="/Gasolina" element={<Gasolina />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}


export default Rotas