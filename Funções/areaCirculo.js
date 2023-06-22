// 5. Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.


function calcCircuferencia(R) {
    const area = 3.14 * ( R * R )
    const perimetro = 2 * 3.14 * R
    const mensagem = `A área dessa circuferência é ${area} e o perimetro é ${perimetro}`
    console.log(mensagem)
}


calcCircuferencia(3)
