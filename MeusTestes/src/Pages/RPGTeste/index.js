import { useState, useEffect } from "react"

import "./RPGTeste.css"

export default function Home() {

    //vida personagem
    const [vida, setvida] = useState(1)
    //vida inimigo
    const [vida2, setvida2] = useState(1)

    //objetos com valores
    let statsPG = { vida: 100, dano: Math.round(Math.random() * 4 + 1) }
    
    //if () {}

    let statsMOB = { vida: 100, dano: Math.round(Math.random() * 9 + 1) }

    useEffect(() => {
        async function inimigo_stats() {
            setvida(statsPG.vida)
            setvida2(statsMOB.vida)
        }
        inimigo_stats()
    }, []);

    function ataque() {

        if (vida <= 0) {
            alert("Você Perdeu!")
            return
        } else {
            if (vida2 <= 0) {
                alert("Você Venceu!")
                return
            } else {

                //calculo - erro (personagem) + critico (inimigo)
                if (Math.round(Math.random() * 100 <= 10)) {

                    alert("O ataque falhou! Você abaixou sua defesa o suficiente para um acerto crítico!")
                    if (Math.round(Math.random() * 100 <= 20)) {

                        alert("O inimigo errou! Considere-se a salvo.")
                        return

                    } else {
                        setvida(vida - (statsMOB.dano + 10))
                    }
                    return

                    //calculo dano (personagem)
                } else {
                    setvida2(vida2 - statsPG.dano)
                }
            }



            //calculo - erro (inimigo) ou dano (inimigo)
            if (Math.round(Math.random() * 100 <= 20)) {

                alert("O inimigo errou! Considere-se a salvo.")
                return

            } else {
                setvida(vida - (statsMOB.dano))
            }
        }
    }






    function cura() {

        if (vida <= 0) {
            alert("Você Perdeu!")
            return
        } else {
            if (vida2 <= 0) {
                alert("Você Venceu!")
                return
            } else {

                if (vida >= 100) {
                    alert("Ao pegar a poção em suas mãos seu estômago se revolta contra si mesmo, o líquido vermelho parece ainda mais toxico que o normal e você em uma ação involuntária a guarda em sua mochila novamente")
                    return
                } else {

                    //calculo - erro (personagem)
                    if (Math.round(Math.random() * 100 <= 5)) {
                        alert("Você recua, rapidamente agarrando uma poção de dentro de sua mochila, infelizmente você se descuida e deixa o frasco cair, quebrando-o em pedaços e deixando o líquido vermelho entrar em meio ao terreno rochoso")

                        //calculo - erro (inimigo)
                        if (Math.round(Math.random() * 100) <= 20) {

                            alert("O inimigo errou! Considere-se a salvo.")
                            return

                        } else {
                            setvida(vida - statsMOB.dano)
                            return
                        }

                    } else {
                        alert("Você recua e utiliza um elixir de cor carmesim.")
                        setvida(vida + (25))

                        //calculo - erro (inimigo)
                        if (Math.round(Math.random() * 100) <= 20) {

                            alert("O inimigo errou! Considere-se a salvo.")

                        } else {
                            setvida(vida - statsMOB)
                            setvida(vida + (25))
                        }
                    }
                }
            }
        }
    }






    return (
        <>
            <div>
                <div className="habilidades">
                    <h1>Teste</h1><br /><br />
                    <button onClick={ataque}>Arco (Força: 1 x D5 [90%])</button>
                    <button onClick={cura}>Cura (Efeito: +25HP [95%])</button><br /> <br />
                </div>
            </div>

            <div className="container personagem">
                <div className="row">
                    <div className="col">
                        <a>HP: {vida}</a> <br />
                        <a>???: ???</a> <br />
                        <a>???: ???</a> <br /> <br />
                        <a>{" o (o_-) o|)->"}</a>
                    </div>

                    <div className="col">
                        <a>HP: {vida2}</a>  <br />
                        <a>FOR: (1 x D10)</a>   <br />
                        <a>Precisão: [80%]</a>  <br /> <br />
                        <a>{"<--o-o- (Ò_Ó)"}</a>
                    </div>
                </div>
            </div>
        </>
    )
}