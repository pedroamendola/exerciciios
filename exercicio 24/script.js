function checarTamanhoTexto(texto) {
    if(texto.lenght > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dento do limite");
    }
    console.log(texto.lenght);
}


checarTamanhoTexto("Teste");
checarTamanhoTexto("Vamos testar se funciona");
checarTamanhoTexto("Menor que 10-");
