import "./AloneDark.css"

import React, { useState } from "react"



function AloneDark() {

  //Cont = Contador
  const [OnHand, setOnHand] = useState("None")

  const [ContGraveto, setContGraveto] = useState(0)
  const [ContPedra, setContPedra] = useState(0)

  const [Torch, setTorch] = useState(false)




  function Coletar() {
    if (!Torch) { setContGraveto(ContGraveto + 1) }

    if (Torch) {
      if (Math.round(Math.random() * 10) < 5) {
        setContGraveto(ContGraveto + 1)
      } else {
        setContPedra(ContPedra + 1)
      }
    }
  }


 


  function CraftTorch() {
    if (ContGraveto < 5) { alert("Not enough resources") }
    else { setContGraveto(ContGraveto - 5) || setOnHand("Torch") || setTorch((current) => !current) }

  }





  return (
    <div>
      <div class="Margin">

        <div>

          {/*Caixa de equipamentos*/}
          {Torch &&
            <div>
              <a>Equipped</a>

              <select>
                <option onChange={(e) => setOnHand(e.target.value)} value="none">None</option>
                <option onChange={(e) => setOnHand(e.target.value)} value="Torch">Torch</option>
              </select>

            </div>
          } <br /> <br />

          <h2>Sticks: {ContGraveto}</h2>
          {!Torch && <button onClick={Coletar}>Gather sticks</button>}
          

          {Torch && <h2>Rocks: {ContPedra}</h2>}
          {Torch && <button onClick={Coletar}>Gather materials</button>}

        </div>

        <br /> <br />

        <div>

          {!Torch && <button onClick={CraftTorch}>Torch (5 Sticks)</button>}

        </div >

      </div>
    </div>
  );
}

export default AloneDark;
