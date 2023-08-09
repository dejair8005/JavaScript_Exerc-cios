function Pessoa(pnome,pidade) {
    this.nome = pnome;
    this.idade = pidade;
        

    this.getNome=function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    
    
    this.setNome=function(nome) {
        this.nome=nome
    },
    this.setIdade=function(idade) {
        this.idade=idade
    },
        

    this.info=function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("_____________________")
        
    }
}



let c1 = new Pessoa()
c1.setNome("Dejair")
console.log(c1.getNome)



//c1.info()
