/* a função só retorna somente o resultado do primeiro retorno
caso coloque mais de uma  retorno ou comando os proximos
nao serao execultados */

function canal(){
    let n1=11
    let n2=2
    let res=n1*n2
    if (res%2 == 0)
        return "Par"
    else 
        return "Impar"
    
}
let num = canal()
console.log(num)