/*Parâmetros REST em funções JavaScript 
é uma função onde não necessita setar a quantidade especifica de parametros*/


function soma(...valores){
    //let tam=valores.length
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(10,5,3,8))