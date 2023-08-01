/*Funções anonimas
-Não precisa de um nome
-Ela será criada somente no momento da execução da função
 Como não tem um nome ela precisa estar associada a uma variavel

*/

const f =new Function("v1","v2","return v1+v2") //Função construtor


//f(10,5)
//console.log(f)

console.log(f(10,5))
