import "./Home.scss"

import { useState } from "react"

export default function Home() {

    const [escolha1, setEscolha1] = useState("")
    const [escolha2, setEscolha2] = useState("")
    const [escolha3, setEscolha3] = useState("")

    var primary
    var secondary
    var melee

    //array of arrays : ScoutWeapons[linha][coluna]
    //EX: ScoutWeapons[2][1] => pistol

    //Criar um grande Math.random() que ira selecionar uma das 9 classes e então por meio de ifs vai escolher qual armas roletar"

    var scoutPrimary = ["Scattergun", "Force-A-Nature", "Shortstop", "Sodapopper", "Baby Face's Blaster", "Back Scatter"]
    var scoutSecondary = ["Pistol", "Bonk! Atomic Punch", "Crit-A-Cola", "Mad Milk", "Winger", "Pretty Boy's Pocket Pistol", "Flying Guillotine"]
    var scoutMelee = ["Bat", "Holy Mackerel", "Sandman", "Candy Cane", "Boston Basher", "Sun-on-a-Stick", "Fan O'War", "Atomizer", "Wrap Assassin"]



    function click() {
        primary = Math.floor(Math.random() * 5)
        setEscolha1(scoutPrimary[primary])

        secondary = Math.floor(Math.random() * 6)
        setEscolha2(scoutSecondary[secondary])

        melee = Math.floor(Math.random() * 8)
        setEscolha3(scoutMelee[melee])
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