// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let resultado = document.getElementById('resultado');
let vacio = document.getElementById('vacio');


function encriptar(){
    //obtenemos el texto a encriptar
    let texto = document.getElementById('texto').value;
    
    //validamos si está vacío
    if(texto.length === 0){
        alert("No hay texto para encriptar");
        return;
    }

    //encriptamos el texto reemplazando las letras solo minusculas
    let encriptado = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    asignarValor('encriptado',encriptado);
    cambiarVisibilidad();
    asignarValor('texto',"");
}

function desencriptar(){
    let texto = document.getElementById('texto').value;

    //validamos si está vacío
    if(texto.length === 0){
        alert("No hay texto para encriptar");
        return;
    }

    let desencriptado = texto.replace(/enter/g, "e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    asignarValor('encriptado',desencriptado);
    cambiarVisibilidad();
    asignarValor('texto',"");
}

function copiar(){
    document.getElementById('encriptado').select();
    let texto = document.getElementById('encriptado').value;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado");
}

function asignarValor(idElemento, valor){
    document.getElementById(idElemento).value = valor;
}
function cambiarVisibilidad(){
    vacio.style.display = "none";
    resultado.style.display = "flex";
}