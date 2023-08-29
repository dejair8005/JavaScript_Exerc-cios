const idades = [20, 12, 18, 43, 17, 13, 8, 73];

function getMaior(element) {
    return element > 18;
}

console.log(idades.every(getMaior));


