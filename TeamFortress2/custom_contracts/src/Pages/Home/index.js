import "./Home.scss"

import { useState } from "react"

export default function Home() {

    const [escolha1, setEscolha1] = useState("")
    const [escolha2, setEscolha2] = useState("")
    const [escolha3, setEscolha3] = useState("")

    const scoutPrimary = ["Scattergun", "Force-A-Nature", "Shortstop", "Sodapopper", "Baby Face's Blaster", "Back Scatter"]
    var Primary

    const scoutSecondary = ["Pistol", "Bonk! Atomic Punch", "Crit-A-Cola", "Mad Milk", "Winger", "Pretty Boy's Pocket Pistol", "Flying Guillotine"]
    var Secondary

    const scoutMelee = ["Bat", "Holy Mackerel", "Sandman", "Candy Cane", "Boston Basher", "Sun-on-a-Stick", "Fan O'War", "Atomizer", "Wrap Assassin"]
    var Melee

    function click() {
        Primary = Math.floor(Math.random() * 5)
        setEscolha1(scoutPrimary[Primary])

        Secondary = Math.floor(Math.random() * 6)
        setEscolha2(scoutSecondary[Secondary])

        Melee = Math.floor(Math.random() * 8)
        setEscolha3(scoutMelee[Melee])
    }

    return (
        <>
            <div className="titulo">
                <h1>TF2 Randomizer</h1>
            </div>

            <div className="escolha1">
                <input readOnly value={escolha1} />
            </div>

            <div className="escolha2">
                <input readOnly value={escolha2} />
            </div>

            <div className="escolha3">
                <input readOnly value={escolha3} />
            </div>

            <div className="botao">
                <button onClick={click}>{"!RTD"}</button>
            </div>

            <div className="contrato">
                <a>Contrato:</a> <br />
                <a>PlaceHolder</a>
            </div>
        </>
    )
}