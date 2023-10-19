import { BrowserRouter, Routes, Route, } from "react-router-dom"

import Home from "./Pages/Home"

import RPGTeste from "./Pages/RPGTeste"
import AloneDark from "./Pages/AloneDark"


function Rotas() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/RPGTeste" element={<RPGTeste />} />
                        <Route path="/AloneDark" element={<AloneDark />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}


export default Rotas