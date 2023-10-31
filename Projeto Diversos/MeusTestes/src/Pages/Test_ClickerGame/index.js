import "./Test_ClickerGame.css"
import React, { useState } from "react"

import FogueiraIMG from "../../Components/imgs/fogueira.png"
import BancadaIMG from "../../Components/imgs/bancada.png"




export default function Test_ClickerGame() {

  //----------------------------------Constantes-----------------------------------------//

  //Cont = Contador

  //equipamento
  //const [OnHand, setOnHand] = useState("None")

  //materias
  const [ContGraveto, setContGraveto] = useState(0)
  const [ContPedra, setContPedra] = useState(0)

  //items
  const [Tocha, setTocha] = useState(false)
  const [ContTocha, setContTocha] = useState(0)


  const [Fogueira, setFogueira] = useState(false)
  const [Bancada, setBancada] = useState(false)






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
        { setContGraveto(ContGraveto - 5) || setTocha((current) => !current) || setContTocha(ContTocha + 1) }
      } else { setContGraveto(ContGraveto - 5) || setContTocha(ContTocha + 1) }
    }
  }

  function CraftFogueira() {
    if (!Fogueira) {
      if (ContGraveto < 15 || ContPedra < 20) { alert("Sem recursos suficientes") }
      else { setContGraveto(ContGraveto - 15) || setContPedra(ContPedra - 20) || setFogueira((current) => !current) }
    }
  }

  function CraftBancada() {
    if (Fogueira, !Bancada) {
      if (ContGraveto < 20 || ContPedra < 30 || ContTocha < 1) { alert("Sem recursos suficientes") }
      else { setContGraveto(ContGraveto - 20) || setContPedra(ContPedra - 30) || setContTocha(ContTocha - 1) || setBancada((current) => !current) }
    }
  }




  //----------------------------------Front----------------------------------------------//
  return (
    <div>
      <div class="Margin">

        <div>
          {/*Caixa de equipamentos*/}
          {Tocha &&
            <div>
              {Tocha && <h4>Tochas: {ContTocha}</h4>}
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
        {(!Bancada) &&
          <div>
            <button onClick={CraftTocha}>Tocha (5 gravetos)</button>
            <br />
            {(Tocha && Fogueira) && <button onClick={CraftBancada}>Bancada (20 gravetos | 30 pedras | 1 tocha)</button>}
            <br />
            {(Tocha && !Fogueira) && <button onClick={CraftFogueira}>Fogueira (15 gravetos | 20 pedras)</button>}
          </div >
        }


        {/*Novo Construir*/}
        {(Bancada) &&
          <div className="CraftHUD">

            <table>
              <tr>
                <td><button>teste</button></td>
                <td><button>teste</button></td>
                <td><button>teste</button></td>
                <td><button>teste</button></td>
              </tr>

              <tr>
                <td><button>teste</button></td>
                <td><button>teste</button></td>
                <td><button>teste</button></td>
                <td><button>teste</button></td>
              </tr>
            </table>

          </div>
        }

        <br /> <br />

        {/*Cenario*/}
        <div>
          {(Fogueira && !Bancada) && <img src={FogueiraIMG} alt="Fogueira" />}
          {Bancada && <img src={BancadaIMG} alt="Bancada" />}
        </div>

      </div>
    </div>
  );
}
