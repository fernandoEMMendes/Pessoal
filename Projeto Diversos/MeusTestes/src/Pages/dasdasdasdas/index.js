import { useState } from "react"

export default function Gasolina() {

    const [distancia, setDistancia] = useState("")
    const [gasolina, setGasolina] = useState("")
    const [horas, setHoras] = useState("")

    const [mediaGD, setMediaGD] = useState("")
    const [mediaTD, setMediaTD] = useState("")
    const [mediaTG, setMediaTG] = useState("")

    function handleCalcular(e) {
        e.preventDefault(e)

        setMediaGD(distancia / gasolina)
        setMediaTD(distancia / horas)
        setMediaTG(gasolina / horas)

        alert("calculado")
    }

    return (
        <div>
            <h1>pika</h1>

            <form>
                <label>Insira a gasolina utilizada (L)</label>
                <input type="number" value={gasolina} onChange={(e) => setGasolina(e.target.value)} />

                <br />

                <label>Insira a distancia percorida (KM)</label>
                <input type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)} />

                <br />

                <label>Insira as horas utilizadas (H)</label>
                <input type="number" value={horas} onChange={(e) => setHoras(e.target.value)} />

                <br />

                <button onClick={handleCalcular}>Botaum</button>
            </form>

            {mediaGD}
            <br />
            {mediaTD}
            <br />
            {mediaTG}

        </div>
    )
}