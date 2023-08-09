// Template String dessa forma entende o enter como quebra de linha

const carros=["Polo","Golf","T-Cross","HRV"]


const curso = "Javascript"
const canal= "CFB cursos"
//const frase = "Este é o curso de " + curso + " Do canal " + canal
const frase = `Este é o curso de ${curso} do canal ${canal}`
console.log(frase)