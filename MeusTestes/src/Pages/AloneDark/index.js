import "./AloneDark.css"

import React, { useState } from "react"



function AloneDark() {

  //Cont = Contador
  const [Frases, setFrases] = useState("I can't see anything.")
  const [OnHand, setOnHand] = useState("None")
  const [ContGraveto, setContGraveto] = useState(0)


  const [Torch, setTorch] = useState(false)


  
  
  function Coletar() {
    if (ContGraveto >= 5) { setContGraveto(ContGraveto + 0) }
    else setContGraveto(ContGraveto + 1)

    if (ContGraveto >= 5) { setFrases("It's too heavy, I can't carry anymore") }
  }

  
  
  
  function CraftTorch() {
    if (Torch) {
      alert("I don't need another one.")
      return
    }

    if (ContGraveto < 5) { alert("Not enough resources") }
    else { setContGraveto(ContGraveto - 5) || setOnHand("Torch") || setTorch((current) => !current) }
    
  }

  
  
  
  
  return (

    <div>
      <h1>{Torch}</h1>
      <h3>{Frases}</h3> <br />
      <p>Equip: {OnHand}</p> <br /> <br />

      <h2>{ContGraveto}</h2>
      <button onClick={Coletar}>Gather sticks</button> <br /> <br />

      {!Torch && <button onClick={CraftTorch}>Torch (5 Sticks)</button>}
      {Torch && <a class="TextAcquired">Torch acquired</a>}

    </div>
  );
}

export default AloneDark;
