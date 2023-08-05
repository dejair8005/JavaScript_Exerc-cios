// Operador THIS dentro de funções

function aluno(nome,nota){
    this.nome=nome
    this.nota=nota
    
    this.dados_anomimo=function(){
        setTimeout(function(){
            //this.nome="x"
            //this.nota=10
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow=function(){
        setTimeout(()=>{            
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const  al1=new aluno('Bruno',100)
al1.dados_anomimo()
al1.dados_arrow()