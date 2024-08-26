const desafioAreaTextoEntradaCuadroTexto = document.getElementById("desafioAreaTextoEntradaCuadroTexto");
const desafioAreatextoBotonesEncriptar = document.getElementById("desafioAreatextoBotonesEncriptar");
const desafioAreatextoBotonesDesencriptar = document.getElementById("desafioAreatextoBotonesDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const salida = document.getElementById("salida");
const desafioAreatextoSalidaImagen = document.getElementById("desafioAreatextoSalidaImagen");
const textoInformativo = document.getElementById("textoInformativo");
const desafioAreatextoSalida = document.getElementById("desafioAreatextoSalida");


let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    salida.innerHTML = nuevoValor;
    desafioAreatextoSalidaImagen.classList.add("oculto");
    desafioAreaTextoEntradaCuadroTexto.value = "";
    textoInformativo.style.display = "none";
    botonCopiar.style.display = "block";
    desafioAreatextoSalida.classList.add("resultado");
    salida.classList.add("resultado");
}

const reset = () => {
    salida.innerHTML = "";
    desafioAreatextoSalidaImagen.classList.remove("oculto");
    textoInformativo.style.display = "block";
    botonCopiar.style.display = "none";
    desafioAreatextoSalida.classList.remove("resultado");
    salida.classList.remove("reultado");
    desafioAreaTextoEntradaCuadroTexto.focus();
}

desafioAreatextoBotonesEncriptar.addEventListener("click", () => {
    const texto = desafioAreaTextoEntradaCuadroTexto.value.toLowerCase()
    if (texto != ""){
        function encriptar(newText) {
            for (let i=0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            }
            return newText;        
        }
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }
    remplace(encriptar(texto));
    
})

desafioAreatextoBotonesDesencriptar.addEventListener("click", () => {
    const texto = desafioAreaTextoEntradaCuadroTexto.value.toLowerCase();
    if (texto != ""){
        function desencriptar(newText) {
            for (let i=0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText;
        }
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
    remplace(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
    let texto = salida;
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado");
    reset();     
})


    