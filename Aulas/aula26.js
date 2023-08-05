// Funções dentro de funções

const soma=(...valores)=>{
    // é possivel colocar essa função do lado de fora
    const somar=val=>{
        let res = 0
        for(v of valores)
            res +=v
        return res
        
    }
    return somar(valores)
}

console.log(soma(10,5,15))

