function gerarNumerosMegasena(qtde) {
    const numeros = new Set()
    while (numeros.size < qtde) {
        let num = parseInt(Math.random() * 60) + 1
        numeros.add(num)
    }
    
    return Array.from(numeros).sort((a, b) => a - b)
}

console.log(gerarNumeros(10))