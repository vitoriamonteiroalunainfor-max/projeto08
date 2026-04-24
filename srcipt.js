function gerarFrase() {
    
    let frases = [
        "Você consegue, não desista!",
        "Vai dar certo!",
        "Seja Grato!",
        "Confie no processo!",
        "Um passo de cada vez!"
    ];
    
    let numero = Math.floor(Math.random()* frases.length);
    document.getElementById("Frase").innerHTML = frases[numero];
}
