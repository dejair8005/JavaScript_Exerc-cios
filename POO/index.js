class Cliente {
    nome;
    CPF;
    Agencia;
    Saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();




cliente1.nome = "Ricardo";
cliente1.CPF = 11122233309;
cliente1.Agencia = 1001;
cliente1.Saldo = 0;
cliente1.rg = 123456;



cliente2.nome = "Alice";
cliente2.CPF = 88822233309;
cliente2.Agencia = 1001;
cliente2.Saldo = 0;


cliente3.nome = "Joana";
cliente3.CPF = 88822233309;
cliente3.Agencia = 1001;
cliente3.Saldo = 0;




console.log(cliente1, cliente2)