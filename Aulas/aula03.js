//  Diferenças entre let, var e const

"use strict"


function teste() {
    let nome="Bruno"
    
    if(true){
        console.log("Dentro do IF de teste: " + nome)
    }
    console.log("Dentro de teste: " + nome)
}
teste()

//console.log("Fora de teste: " + nome)

const curso="JavaScript"
curso="Alter"