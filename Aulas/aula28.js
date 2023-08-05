//  Método Map (Funcionalidade de percorrer arrays)

const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React']
let c = cursos.map((el,i)=>{
    //console.log("Curso: " + el + " - Posição do curso:" + i)
    return el
})

//console.log(c)




const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(dobrar)

console.log(num)
//num.map(converterInt)
console.log(num)
