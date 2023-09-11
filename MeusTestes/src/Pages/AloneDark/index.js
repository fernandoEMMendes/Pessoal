import "./AloneDark.css"
import React, { useState } from "react"

import FogueiraIMG from "../../Components/imgs/fogueira.png"



function AloneDark() {

  //----------------------------------Constantes-----------------------------------------//

  //Cont = Contador
  const [OnHand, setOnHand] = useState("None")

  const [ContGraveto, setContGraveto] = useState(0)
  const [ContPedra, setContPedra] = useState(0)

  const [Tocha, setTocha] = useState(false)
  const [ContTocha, setContTocha] = useState(0)
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





  //----------------------------------Funções--------------------------------------------//
  function CraftTocha() {
    if (ContGraveto < 5) { alert("Sem recursos suficientes") } else {
      if (!Tocha) {
        { setContGraveto(ContGraveto - 5) || setTocha((current) => !current) }
      } else { setContGraveto(ContGraveto - 5) || setContTocha(ContTocha + 1) }
    }
  }

  function CraftFogueira() {
    if (!Fogueira) {
      if (ContGraveto < 15 || ContPedra < 20) { alert("Sem recursos suficientes") }
      else { setContGraveto(ContGraveto - 15) || setContPedra(ContPedra - 20) || setFogueira((current) => !current) }
    }
  }




  //----------------------------------Front----------------------------------------------//
  return (
    <div>
      <div class="Margin">

        <div>

          {/*Caixa de equipamentos*/}
          {Tocha &&
            <>
              <div>
                <h4>equipamento</h4>
                <select>
                  <option onChange={(e) => setOnHand(e.target.value)} value="Nada">Nada</option>
                  <option onChange={(e) => setOnHand(e.target.value)} value="Tocha">Tocha</option>
                </select>
              </div>

              <br />

              <div>
                {Tocha && <h4>Tochas: {ContTocha}</h4>}
              </div>
            </>
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

          <button onClick={CraftTocha}>Tocha (5 gravetos)</button>
          
          
          
          {(Tocha && !Fogueira) && <button onClick={CraftFogueira}>Fogueira (15 gravetos | 20 pedras)</button>}

        </div >

        <br /> <br />

        {/*Cenario*/}
        <div>

          {Fogueira && <img src={FogueiraIMG} alt="Fogueira" />}
        </div>

      </div>
    </div>
  );
}

export default AloneDark
