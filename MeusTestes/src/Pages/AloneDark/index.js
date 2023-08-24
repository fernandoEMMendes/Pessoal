import "./AloneDark.css"

import React, { useState } from "react"



function AloneDark() {

  //----------------------------------Constantes-----------------------------------------//

  //Cont = Contador
  const [OnHand, setOnHand] = useState("None")

  const [ContGraveto, setContGraveto] = useState(0)
  const [ContPedra, setContPedra] = useState(0)

  const [Tocha, setTocha] = useState(false)
  const [Fogueira, setFogueira] = useState(false)




  function Coletar() {
    if (!Tocha) { setContGraveto(ContGraveto + 1) }

    if (Tocha) {
      if (Math.round(Math.random() * 10) < 5) {
        setContGraveto(ContGraveto + 1)
      } else {
        setContPedra(ContPedra + 1)
      }
    }
  }





  //----------------------------------Construir------------------------------------------//
  function CraftTocha() {
    if (ContGraveto < 5) { alert("Sem recursos suficientes") }
    else { setContGraveto(ContGraveto - 5) || setTocha((current) => !current) }
  }

  function CraftFogueira() {
    if (ContGraveto < 15 || ContPedra < 20) { alert("Sem recursos suficientes") }
    else { setContGraveto(ContGraveto - 15) || setContPedra(ContPedra - 20) || setFogueira((current) => !current) }
  }





  return (
    <div>
      <div class="Margin">

        <div>

          {/*Caixa de equipamentos*/}
          {Tocha &&
            <div>

              <select>
                <option onChange={(e) => setOnHand(e.target.value)} value="Nada">Nada</option>
                <option onChange={(e) => setOnHand(e.target.value)} value="Tocha">Tocha</option>
              </select>

            </div>
          } <br /> <br />

          {/*Contadores e coletar*/}
          <h2>Gravetos: {ContGraveto}</h2>
          {!Tocha && <button onClick={Coletar}>Coletar gravetos</button>}


          {Tocha && <h2>Pedras: {ContPedra}</h2>}
          {Tocha && <button onClick={Coletar}>Coletar materiais</button>}

        </div>

        <br /> <br />

        {/*Contruir*/}
        <div>

          {!Tocha && <button onClick={CraftTocha}>Tocha (5 gravetos)</button>}
          {Tocha && <button onClick={CraftFogueira}>Fogueira (15 gravetos | 20 pedras)</button>}

        </div >

        <br /> <br />

        {/*Cenario*/}
        <div>

          {Fogueira && <h1>Fogueira</h1>}
        </div>

      </div>
    </div>
  );
}

export default AloneDark;
